"use client";
// Runtime data store.
//
// Loads seed.js once at startup, keeps it in memory, and notifies subscribers
// on every write so views re-render. This is the seam a real backend slots
// into: swap load()/mutate() for Firestore reads/writes and nothing above here
// changes.
//
// ponytail: in-memory store, not Firestore. The demo has no auth and no
// server, so a client store is the honest shape. functions/ already implements
// the server-side rules for when it does.
import { useCallback, useSyncExternalStore } from "react";
import * as SEED from "../../../backend/seed/seed.js";
import { COLLECTIONS, validate } from "./models";

const STORAGE_KEY = "eims-data-v1";

// seed.js exports SCREAMING_CASE, collections are camelCase.
const SEED_BY_COLLECTION = {
  claims: "CLAIMS",
  policies: "POLICIES",
  garages: "GARAGES",
  assessors: "ASSESSORS",
  reinsurers: "REINSURERS",
  subrogationCases: "SUBROGATION_CASES",
  countyFleets: "COUNTY_FLEETS",
  scheduledPayouts: "SCHEDULED_PAYOUTS",
  pesaflowTransactions: "PESAFLOW_TRANSACTIONS",
  itaxRemittances: "ITAX_REMITTANCES",
  lprScanLogs: "LPR_SCAN_LOGS",
  notificationLogs: "NOTIFICATION_LOGS",
  remoteStaffSessions: "REMOTE_STAFF_SESSIONS",
};

// Reference data that is read but never written.
export const REFERENCE = {
  ntsaRegistry: SEED.NTSA_REGISTRY,
  countyResources: SEED.COUNTY_RESOURCES,
  branchProduction: SEED.BRANCH_PRODUCTION,
  vehicleLossRatios: SEED.VEHICLE_LOSS_RATIOS,
  ocrTestSuite: SEED.OCR_TEST_SUITE,
  lprFormats: SEED.LPR_FORMATS,
  qrPresets: SEED.QR_PRESETS,
  reinsuranceConfig: SEED.REINSURANCE_CONFIG,
  iraTaxRates: SEED.IRA_TAX_RATES,
  channelTotals: SEED.CHANNEL_TOTALS,
};

function freshFromSeed() {
  const data = {};
  for (const [collection, seedKey] of Object.entries(SEED_BY_COLLECTION)) {
    data[collection] = structuredClone(SEED[seedKey] ?? []);
  }
  return data;
}

let state = null;
const listeners = new Set();

function load() {
  if (state) return state;
  if (typeof window !== "undefined") {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        state = JSON.parse(saved);
        return state;
      }
    } catch {
      // corrupt session data is not worth a crash, fall through to the seed
    }
  }
  state = freshFromSeed();
  return state;
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // quota or private mode: the store still works for this session
  }
}

function emit() {
  persist();
  for (const l of listeners) l();
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// ------------------------------------------------------------------ read side

export function getAll(collection) {
  return load()[collection] ?? [];
}

export function getOne(collection, id) {
  const model = Object.values(COLLECTIONS).find((c) => c.key === collection);
  const idField = model?.id ?? "id";
  return getAll(collection).find((r) => r[idField] === id) ?? null;
}

/** Live view of a collection. Re-renders on every write. */
export function useCollection(collection) {
  return useSyncExternalStore(
    subscribe,
    useCallback(() => load()[collection] ?? [], [collection]),
    useCallback(() => load()[collection] ?? [], [collection]),
  );
}

export function useRecord(collection, id) {
  useCollection(collection); // subscribe
  return getOne(collection, id);
}

// ----------------------------------------------------------------- write side

/** Adds a record. Throws on a record the models reject, rather than corrupting a view. */
export function insert(collection, record) {
  const problems = validate(collection, record);
  if (problems.length) throw new Error(`invalid ${collection}: ${problems.join("; ")}`);
  state = { ...load(), [collection]: [...getAll(collection), record] };
  emit();
  return record;
}

export function update(collection, id, patch) {
  const model = Object.values(COLLECTIONS).find((c) => c.key === collection);
  const idField = model?.id ?? "id";
  let updated = null;
  const next = getAll(collection).map((r) => {
    if (r[idField] !== id) return r;
    updated = { ...r, ...patch };
    return updated;
  });
  if (!updated) throw new Error(`${collection}/${id} not found`);
  state = { ...load(), [collection]: next };
  emit();
  return updated;
}

export function remove(collection, id) {
  const model = Object.values(COLLECTIONS).find((c) => c.key === collection);
  const idField = model?.id ?? "id";
  state = { ...load(), [collection]: getAll(collection).filter((r) => r[idField] !== id) };
  emit();
}

/** Throws away local edits and reloads seed.js. Wired to the Settings view. */
export function resetToSeed() {
  state = freshFromSeed();
  emit();
}

/** Next id in a series, e.g. nextId("claims", "CLM-2026-") -> CLM-2026-011 */
export function nextId(collection, prefix, width = 3) {
  const model = Object.values(COLLECTIONS).find((c) => c.key === collection);
  const idField = model?.id ?? "id";
  const highest = getAll(collection)
    .map((r) => parseInt(String(r[idField]).replace(prefix, ""), 10))
    .filter(Number.isFinite)
    .reduce((a, b) => Math.max(a, b), 0);
  return `${prefix}${String(highest + 1).padStart(width, "0")}`;
}
