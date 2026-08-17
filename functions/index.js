// EIMS Cloud Functions.
//
// Three kinds of function live here:
//   * event-triggered -- Firestore writes that must cause other writes
//   * callable        -- actions the client asks the server to perform, where
//                        the client must not be trusted to do it itself
//   * scheduled       -- recurring regulatory and renewal work
//
// Anything that decides money, fraud scoring or statutory filing belongs here,
// never in the browser. See rules.js for the rules themselves.
const { onDocumentCreated, onDocumentUpdated } = require("firebase-functions/v2/firestore");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { setGlobalOptions } = require("firebase-functions/v2");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const crypto = require("node:crypto");
const { scoreFraud, statutoryTax, canSettle, IRA_RATES } = require("./rules");

initializeApp();
const db = getFirestore();

// Kenyan users, Kenyan data residency where available.
setGlobalOptions({ region: "europe-west1", maxInstances: 10 });

const now = () => FieldValue.serverTimestamp();

/** Every state change worth auditing goes through here, so the trail is uniform. */
async function audit(entity, entityId, action, detail = {}) {
  await db.collection("auditLog").add({ entity, entityId, action, detail, at: now() });
}

async function notify({ claimId, recipient, phone, email, channel, event, body }) {
  await db.collection("notificationLogs").add({
    claimId, recipient, phone: phone || null, email: email || null,
    channel, event, body, status: "Queued", delivery: "Pending", at: now(),
  });
}

// ============================ EVENT-TRIGGERED ==============================

/**
 * A new notice of loss is scored the moment it lands. The client may suggest a
 * fraud score but never sets the authoritative one -- this does.
 */
exports.onClaimCreated = onDocumentCreated("claims/{claimId}", async (event) => {
  const snap = event.data;
  if (!snap) return;
  const claim = snap.data();

  const history = await db.collection("claims")
    .where("plate", "==", claim.plate).limit(25).get();
  const priors = history.docs
    .filter((d) => d.id !== snap.id)
    .map((d) => d.data());

  const { score, triage, reasons } = scoreFraud(claim, priors);

  await snap.ref.update({
    fraudScore: score,
    triage,
    fraudReasons: reasons,
    status: claim.status || "Pending",
    scoredAt: now(),
  });

  await audit("claim", snap.id, "scored", { score, triage, reasons });

  // Red-path claims go straight to the special investigation queue.
  if (triage === "Red") {
    await db.collection("investigations").doc(snap.id).set({
      claimId: snap.id, plate: claim.plate, openedAt: now(),
      reason: reasons.join("; "), status: "Open",
    });
    await audit("claim", snap.id, "referred-to-siu", { reasons });
  }

  await notify({
    claimId: snap.id, recipient: claim.owner, phone: claim.phone,
    channel: "SMS", event: "FNOL Registered",
    body: `EIMS: claim ${snap.id} registered for ${claim.plate}. Triage: ${triage}.`,
  });
});

/**
 * Approving a claim schedules its settlement and tells the claimant.
 * Disbursing it closes the file.
 */
exports.onClaimStatusChanged = onDocumentUpdated("claims/{claimId}", async (event) => {
  const before = event.data?.before.data();
  const after = event.data?.after.data();
  if (!before || !after || before.status === after.status) return;

  const claimId = event.params.claimId;
  await audit("claim", claimId, "status-changed", { from: before.status, to: after.status });

  if (after.status === "Approved") {
    await db.collection("scheduledPayouts").doc(`PAY-${claimId}`).set({
      claimId, plate: after.plate, claimant: after.owner, phone: after.phone,
      amount: after.cost, channel: after.preferredChannel || "M-PESA",
      status: "Scheduled", createdAt: now(),
    });
    await notify({
      claimId, recipient: after.owner, phone: after.phone, channel: "SMS",
      event: "Claim Approved",
      body: `EIMS: claim ${claimId} approved. KSh ${Number(after.cost).toLocaleString()} authorised for settlement.`,
    });
  }

  if (after.status === "Disbursed") {
    await db.collection("investigations").doc(claimId)
      .set({ status: "Closed", closedAt: now() }, { merge: true })
      .catch(() => {});
  }
});

/**
 * Issuing a policy computes its statutory levies. Doing this client-side would
 * let a bad actor under-declare PHCF and training levy.
 */
exports.onPolicyCreated = onDocumentCreated("policies/{policyNo}", async (event) => {
  const snap = event.data;
  if (!snap) return;
  const policy = snap.data();
  const tax = statutoryTax(policy.premium || 0);

  await snap.ref.update({
    statutory: tax,
    payable: (policy.premium || 0) + tax.total,
    certId: policy.certId || `AKI-${new Date().getFullYear()}-${snap.id.slice(-5)}`,
    issuedAt: now(),
  });
  await audit("policy", snap.id, "levies-computed", tax);
});

/** A released payout is a money movement: log it and close the loop. */
exports.onPayoutReleased = onDocumentUpdated("scheduledPayouts/{payoutId}", async (event) => {
  const before = event.data?.before.data();
  const after = event.data?.after.data();
  if (before?.status === after?.status || after?.status !== "Released") return;

  await db.collection("claims").doc(after.claimId)
    .update({ status: "Disbursed", disbursedAt: now() });
  await audit("payout", event.params.payoutId, "released", { amount: after.amount });
  await notify({
    claimId: after.claimId, recipient: after.claimant, phone: after.phone,
    channel: after.channel, event: "Settlement Released",
    body: `EIMS: KSh ${Number(after.amount).toLocaleString()} sent to ${after.phone} for claim ${after.claimId}.`,
  });
});

// ================================ CALLABLE =================================

function requireAuth(request) {
  if (!request.auth) throw new HttpsError("unauthenticated", "Sign in to the staff portal first.");
  return request.auth;
}

/** NTSA registry lookup. Server-side so the registry credential never ships to a browser. */
exports.verifyPlate = onCall(async (request) => {
  requireAuth(request);
  const plate = String(request.data?.plate || "").trim().toUpperCase();
  if (!/^K[A-Z]{2} ?\d{3}[A-Z]$/.test(plate)) {
    throw new HttpsError("invalid-argument", `"${plate}" is not a Kenyan plate format.`);
  }
  const doc = await db.collection("ntsaRegistry").doc(plate).get();
  if (!doc.exists) return { plate, found: false };
  await audit("plate", plate, "verified", { by: request.auth.uid });
  return { plate, found: true, ...doc.data() };
});

/** Issues an AKI digital motor certificate with a verifiable hash. */
exports.issueCertificate = onCall(async (request) => {
  const auth = requireAuth(request);
  const { policyNo } = request.data || {};
  const policyRef = db.collection("policies").doc(String(policyNo));
  const policy = await policyRef.get();
  if (!policy.exists) throw new HttpsError("not-found", `Policy ${policyNo} does not exist.`);
  if (policy.data().status !== "Active") {
    throw new HttpsError("failed-precondition", "Only active policies can be certified.");
  }

  const certId = `AKI-${new Date().getFullYear()}-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;
  const payload = `${certId}|${policyNo}|${policy.data().plate}|${policy.data().clientName}`;
  const hash = crypto.createHash("sha256").update(payload).digest("hex");

  await db.collection("certificates").doc(certId).set({
    certId, policyNo, plate: policy.data().plate, holder: policy.data().clientName,
    hash, issuedBy: auth.uid, issuedAt: now(), status: "Valid",
  });
  await policyRef.update({ certId });
  await audit("certificate", certId, "issued", { policyNo });
  return { certId, hash, payload };
});

/**
 * Settlement disbursement. The amount comes from the claim record, never from
 * the client -- a caller cannot ask us to pay an arbitrary sum.
 */
exports.settleClaim = onCall(async (request) => {
  const auth = requireAuth(request);
  const { claimId, channel = "M-PESA" } = request.data || {};

  return db.runTransaction(async (tx) => {
    const ref = db.collection("claims").doc(String(claimId));
    const snap = await tx.get(ref);
    const claim = snap.exists ? snap.data() : null;

    const check = canSettle(claim);
    if (!check.ok) throw new HttpsError("failed-precondition", check.reason);

    const payoutRef = db.collection("scheduledPayouts").doc(`PAY-${claimId}`);
    tx.set(payoutRef, {
      claimId, plate: claim.plate, claimant: claim.owner, phone: claim.phone,
      amount: claim.cost, channel, status: "Released",
      officer: auth.uid, releasedAt: now(),
    }, { merge: true });

    return { claimId, amount: claim.cost, channel, reference: `EIMS${Date.now().toString(36).toUpperCase()}` };
  });
});

/** Files an IRA statutory return for a period and freezes the figures. */
exports.fileIraReturn = onCall(async (request) => {
  const auth = requireAuth(request);
  const { period } = request.data || {};
  if (!/^\d{4}-\d{2}$/.test(String(period || ""))) {
    throw new HttpsError("invalid-argument", "period must look like 2026-08");
  }

  const policies = await db.collection("policies").where("status", "==", "Active").get();
  const totals = policies.docs.reduce((acc, d) => {
    const t = statutoryTax(d.data().premium || 0);
    acc.grossPremium += d.data().premium || 0;
    acc.phcf += t.phcf;
    acc.training += t.training;
    acc.stampDuty += t.stampDuty;
    return acc;
  }, { grossPremium: 0, phcf: 0, training: 0, stampDuty: 0 });

  const ackRef = `IRA-${period}-${crypto.randomBytes(2).toString("hex").toUpperCase()}`;
  await db.collection("iraReturns").doc(ackRef).set({
    ackRef, period, ...totals, rates: IRA_RATES,
    policyCount: policies.size, filedBy: auth.uid, filedAt: now(), status: "Filed",
  });
  await audit("iraReturn", ackRef, "filed", { period, ...totals });
  return { ackRef, period, ...totals, policyCount: policies.size };
});

// =============================== SCHEDULED =================================

/** Policies expiring inside 30 days get a renewal notice, once a day at 07:00. */
exports.dispatchRenewalNotices = onSchedule(
  { schedule: "0 7 * * *", timeZone: "Africa/Nairobi" },
  async () => {
    const cutoff = new Date(Date.now() + 30 * 86_400_000).toISOString().slice(0, 10);
    const due = await db.collection("policies")
      .where("status", "==", "Active")
      .where("expiryDate", "<=", cutoff)
      .get();

    for (const doc of due.docs) {
      const p = doc.data();
      await notify({
        claimId: null, recipient: p.clientName, phone: p.phone || null,
        channel: "SMS", event: "Renewal Due",
        body: `EIMS: policy ${doc.id} for ${p.plate} expires ${p.expiryDate}. Renew to stay covered.`,
      });
    }
    await audit("policies", "renewals", "notices-dispatched", { count: due.size });
  },
);

/** Monthly IRA solvency reminder on the 1st, so a filing is never missed. */
exports.iraSolvencyReminder = onSchedule(
  { schedule: "0 8 1 * *", timeZone: "Africa/Nairobi" },
  async () => {
    const period = new Date().toISOString().slice(0, 7);
    await db.collection("tasks").add({
      type: "IRA_RETURN", period, status: "Open", createdAt: now(),
      title: `File IRA statutory return for ${period}`,
    });
  },
);
