// Data models for the EIMS domain.
//
// Every collection the app reads is declared here: its shape, its allowed
// status values, and the business rules derived from it. seed.js holds the
// demo rows for these same shapes -- change the two together.

// ---------------------------------------------------------------- collections

export const COLLECTIONS = {
  claims: {
    key: "claims",
    id: "id",
    label: "Claims",
    fields: {
      id: "string", plate: "string", owner: "string", phone: "string",
      date: "date", cost: "number", fraudScore: "number", triage: "Triage",
      status: "ClaimStatus", coords: "number[2]", county: "string",
      police: "string", tow: "string", annotations: "number", flags: "string[]",
    },
  },
  policies: {
    key: "policies",
    id: "policyNo",
    label: "Policies",
    fields: {
      policyNo: "string", clientName: "string", plate: "string", line: "string",
      premium: "number", debited: "boolean", status: "PolicyStatus",
      certId: "string", isNew: "boolean", branch: "string",
    },
  },
  garages: {
    key: "garages", id: "id", label: "Garages",
    fields: {
      id: "string", name: "string", location: "string", rating: "number",
      activeRepairs: "number", slaScore: "number", status: "GarageStatus",
    },
  },
  assessors: {
    key: "assessors", id: "name", label: "Loss Assessors",
    fields: { name: "string", location: "string", spec: "string", rating: "number" },
  },
  reinsurers: {
    key: "reinsurers", id: "name", label: "Reinsurers",
    fields: {
      name: "string", rating: "string", share: "string",
      cededPremium: "number", status: "string",
    },
  },
  subrogationCases: {
    key: "subrogationCases", id: "claimId", label: "Subrogation",
    fields: {
      claimId: "string", vehicle: "string", thirdPartyInsurer: "string",
      fault: "string", amount: "number", status: "SubrogationStatus",
    },
  },
  countyFleets: {
    key: "countyFleets", id: "id", label: "County Fleets",
    fields: {
      id: "string", county: "string", count: "number", line: "string",
      premium: "number", certs: "number",
    },
  },
  scheduledPayouts: {
    key: "scheduledPayouts", id: "id", label: "Scheduled Payouts",
    fields: {
      id: "string", claimId: "string", plate: "string", claimant: "string",
      phone: "string", channel: "PayoutChannel", amount: "number",
      releaseDate: "date", note: "string", officer: "string", status: "PayoutStatus",
    },
  },
  pesaflowTransactions: {
    key: "pesaflowTransactions", id: "ref", label: "PesaFlow",
    fields: {
      ref: "string", billNo: "string", payer: "string", channel: "string",
      amount: "number", stampDuty: "number", status: "string",
    },
  },
  itaxRemittances: {
    key: "itaxRemittances", id: "ackRef", label: "iTax Remittances",
    fields: {
      ackRef: "string", origin: "string", head: "string", grossAmount: "number",
      taxAmount: "number", etimsCode: "string", status: "string",
    },
  },
  lprScanLogs: {
    key: "lprScanLogs", id: "time", label: "ANPR Scans",
    fields: {
      time: "string", plate: "string", format: "string", conf: "number",
      vehicle: "string", status: "string", location: "string",
    },
  },
  notificationLogs: {
    key: "notificationLogs", id: "id", label: "Notifications",
    fields: {
      id: "string", timestamp: "string", date: "string", recipient: "string",
      phone: "string", email: "string", channel: "string", claimId: "string",
      plate: "string", event: "string", status: "string", delivery: "string",
    },
  },
  remoteStaffSessions: {
    key: "remoteStaffSessions", id: "id", label: "Remote Staff",
    fields: {
      id: "string", name: "string", role: "string", location: "string",
      ip: "string", clockIn: "string", activeTask: "string",
      pulsePct: "number", status: "string", claimsCount: "number",
    },
  },
};

// -------------------------------------------------------------------- statuses

export const CLAIM_STATUS = ["Pending", "Under Investigation", "Approved", "Disbursed"];
export const POLICY_STATUS = ["Active", "Lapsed", "Cancelled", "Pending"];
export const TRIAGE = ["Green", "Yellow", "Red"];
export const PAYOUT_CHANNELS = ["M-PESA", "Airtel Money", "PesaLink Bank"];
export const PAYOUT_STATUS = ["Scheduled", "Released", "Cancelled"];
export const SUBROGATION_STATUS = ["Notice Issued", "Negotiation", "Recovered", "Written Off"];
export const SETTLED_STATUSES = ["Approved", "Disbursed"];

// CSS modifier used by .status-badge / .fraud-pill, kept identical to the
// legacy getStatusClass/getFraudClass so the stylesheet still applies.
export function statusClass(status) {
  if (status === "Pending") return "pending";
  if (status === "Approved") return "approved";
  if (status === "Under Investigation") return "investigation";
  return "disbursed";
}

export function fraudClass(score) {
  if (score < 25) return "low";
  if (score < 60) return "medium";
  return "high";
}

export function triageFor(fraudScore) {
  if (fraudScore < 25) return "Green";
  if (fraudScore < 60) return "Yellow";
  return "Red";
}

// ----------------------------------------------------------- statutory rating

// Insurance Act Cap 487. Rates are percentages; stamp duty is a flat KSh charge.
export const IRA_RATES = { phcf: 0.25, training: 0.2, stampDuty: 40 };

export function statutoryTax(premium, rates = IRA_RATES) {
  const phcf = Math.round(premium * (rates.phcf / 100));
  const training = Math.round(premium * (rates.training / 100));
  const stampDuty = rates.stampDuty;
  return { phcf, training, stampDuty, total: phcf + training + stampDuty };
}

// Quota-share treaty: whatever the reinsurers do not take stays on our books.
export function cedeRisk(grossRisk, reinsurers) {
  const shares = reinsurers.map((r) => ({
    name: r.name,
    pct: parseFloat(String(r.share).replace("%", "")) || 0,
    amount: Math.round(grossRisk * ((parseFloat(String(r.share).replace("%", "")) || 0) / 100)),
  }));
  const cededPct = shares.reduce((s, r) => s + r.pct, 0);
  const retainedPct = Math.max(0, 100 - cededPct);
  return {
    shares,
    cededPct,
    cededAmount: shares.reduce((s, r) => s + r.amount, 0),
    retainedPct,
    retainedAmount: Math.round(grossRisk * (retainedPct / 100)),
  };
}

export function lossRatio(row) {
  return row.earnedPremium ? +((row.incurredClaims / row.earnedPremium) * 100).toFixed(1) : 0;
}

// -------------------------------------------------------------------- helpers

export function money(n) {
  return `KSh ${Number(n || 0).toLocaleString("en-KE")}`;
}

export function compactMoney(n) {
  const v = Number(n || 0);
  if (v >= 1_000_000) return `KSh ${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `KSh ${(v / 1_000).toFixed(0)}K`;
  return money(v);
}

// Rejects a record that would break a view. Returns [] when the record is fine.
export function validate(collectionKey, record) {
  const model = Object.values(COLLECTIONS).find((c) => c.key === collectionKey);
  if (!model) return [`unknown collection: ${collectionKey}`];
  const problems = [];
  if (!record[model.id]) problems.push(`missing id field "${model.id}"`);
  for (const [field, type] of Object.entries(model.fields)) {
    const v = record[field];
    if (v === undefined) continue;
    if (type === "number" && typeof v !== "number") problems.push(`${field} should be a number`);
    if (type === "string" && typeof v !== "string") problems.push(`${field} should be a string`);
    if (type === "boolean" && typeof v !== "boolean") problems.push(`${field} should be a boolean`);
    if (type === "number[2]" && (!Array.isArray(v) || v.length !== 2)) problems.push(`${field} should be [lat, lng]`);
  }
  if (model.key === "claims") {
    if (!CLAIM_STATUS.includes(record.status)) problems.push(`bad claim status: ${record.status}`);
    if (!TRIAGE.includes(record.triage)) problems.push(`bad triage: ${record.triage}`);
  }
  return problems;
}
