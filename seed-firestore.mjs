// Pushes seed.js into Firestore (emulator by default, so this cannot touch
// production data by accident). Run: npm run seed
//
// The Next app already loads seed.js directly at runtime, so this is only
// needed when exercising the Cloud Functions, which read from Firestore.
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as SEED from "./seed.js";

const PROJECT = process.env.GCLOUD_PROJECT || "eims-prosystem";

if (!process.env.FIRESTORE_EMULATOR_HOST) {
  process.env.FIRESTORE_EMULATOR_HOST = "127.0.0.1:8085";
  console.log("targeting the Firestore emulator at 127.0.0.1:8085");
  console.log("set FIRESTORE_EMULATOR_HOST yourself to point somewhere else");
}

// Collection -> [seed export, id field]. Matches frontend/src/lib/models.js.
const PLAN = [
  ["claims", "CLAIMS", "id"],
  ["policies", "POLICIES", "policyNo"],
  ["garages", "GARAGES", "id"],
  ["assessors", "ASSESSORS", "name"],
  ["reinsurers", "REINSURERS", "name"],
  ["subrogationCases", "SUBROGATION_CASES", "claimId"],
  ["countyFleets", "COUNTY_FLEETS", "id"],
  ["scheduledPayouts", "SCHEDULED_PAYOUTS", "id"],
  ["pesaflowTransactions", "PESAFLOW_TRANSACTIONS", "ref"],
  ["itaxRemittances", "ITAX_REMITTANCES", "ackRef"],
  ["lprScanLogs", "LPR_SCAN_LOGS", "time"],
  ["notificationLogs", "NOTIFICATION_LOGS", "id"],
  ["remoteStaffSessions", "REMOTE_STAFF_SESSIONS", "id"],
];

initializeApp({ projectId: PROJECT });
const db = getFirestore();

async function wipe(name) {
  const snap = await db.collection(name).get();
  if (snap.empty) return 0;
  const batch = db.batch();
  snap.docs.forEach((d) => batch.delete(d.ref));
  await batch.commit();
  return snap.size;
}

async function seed() {
  let written = 0;

  for (const [collection, exportName, idField] of PLAN) {
    const rows = SEED[exportName];
    if (!rows) {
      console.warn(`  ! seed.js has no ${exportName}, skipping ${collection}`);
      continue;
    }
    const cleared = await wipe(collection);
    const batch = db.batch();
    for (const row of rows) {
      const id = String(row[idField]).replace(/\//g, "-");
      batch.set(db.collection(collection).doc(id), row);
    }
    await batch.commit();
    written += rows.length;
    console.log(`  ${collection.padEnd(22)} ${String(rows.length).padStart(3)} docs${cleared ? ` (replaced ${cleared})` : ""}`);
  }

  // The NTSA registry is keyed by plate, not an array.
  await wipe("ntsaRegistry");
  const reg = db.batch();
  for (const [plate, vehicle] of Object.entries(SEED.NTSA_REGISTRY)) {
    reg.set(db.collection("ntsaRegistry").doc(plate), { plate, ...vehicle });
  }
  await reg.commit();
  const regCount = Object.keys(SEED.NTSA_REGISTRY).length;
  written += regCount;
  console.log(`  ${"ntsaRegistry".padEnd(22)} ${String(regCount).padStart(3)} docs`);

  // Reference config the functions read.
  await db.collection("config").doc("ira").set(SEED.IRA_TAX_RATES);
  await db.collection("config").doc("reinsurance").set(SEED.REINSURANCE_CONFIG);

  console.log(`\nseeded ${written} documents into ${PROJECT}`);
}

seed().catch((err) => {
  console.error("seed failed:", err.message);
  process.exit(1);
});
