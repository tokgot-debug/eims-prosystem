// Guards the one duplication in this repo: functions/rules.js restates a few
// rules from frontend/src/lib/models.js because Firebase deploys functions/
// in isolation. If the two drift, money and fraud scoring disagree.
const assert = require("node:assert");
const fs = require("node:fs");
const rules = require("./rules");

const models = fs.readFileSync(`${__dirname}/../frontend/src/lib/models.js`, "utf8");

// IRA rates must match the frontend literally.
const m = models.match(/IRA_RATES = \{ phcf: ([\d.]+), training: ([\d.]+), stampDuty: (\d+) \}/);
assert(m, "could not find IRA_RATES in models.js");
assert.deepStrictEqual(
  rules.IRA_RATES,
  { phcf: +m[1], training: +m[2], stampDuty: +m[3] },
  "functions/rules.js IRA_RATES has drifted from models.js",
);

// Triage thresholds must match.
assert(models.includes(`fraudScore < ${rules.TRIAGE_GREEN_BELOW}`), "green triage threshold drifted");
assert(models.includes(`fraudScore < ${rules.TRIAGE_YELLOW_BELOW}`), "yellow triage threshold drifted");

// Tax maths agrees on a known figure.
assert.deepStrictEqual(rules.statutoryTax(100000), { phcf: 250, training: 200, stampDuty: 40, total: 490 });

// Triage boundaries are inclusive/exclusive the way the desk describes them.
assert.strictEqual(rules.triageFor(0), "Green");
assert.strictEqual(rules.triageFor(24), "Green");
assert.strictEqual(rules.triageFor(25), "Yellow");
assert.strictEqual(rules.triageFor(59), "Yellow");
assert.strictEqual(rules.triageFor(60), "Red");

// Fraud scoring is bounded and explains itself.
const clean = { plate: "KDG 123A", coords: [-1.28, 36.81], annotations: 3, cost: 90000, date: new Date().toISOString().slice(0, 10) };
const cleanResult = rules.scoreFraud(clean, []);
assert(cleanResult.score >= 0 && cleanResult.score <= 100, "score out of range");
assert.strictEqual(cleanResult.triage, "Green", "a clean claim should be green-path");

const dirty = rules.scoreFraud({ plate: "KDG 123A", cost: 4000000, date: "2020-01-01", flags: ["staged scene"] },
  [{ plate: "KDG 123A" }, { plate: "KDG 123A" }, { plate: "KDG 123A" }]);
assert.strictEqual(dirty.triage, "Red", "a heavily flagged claim should be red-path");
assert(dirty.reasons.length >= 4, "red-path claims must explain themselves");
assert(dirty.score <= 100, "score must be capped at 100");

// Settlement can never pay twice or pay an unapproved claim.
assert.strictEqual(rules.canSettle(null).ok, false);
assert.strictEqual(rules.canSettle({ status: "Pending", cost: 100 }).ok, false);
assert.strictEqual(rules.canSettle({ status: "Disbursed", cost: 100 }).ok, false);
assert.strictEqual(rules.canSettle({ status: "Approved", cost: 0 }).ok, false);
assert.strictEqual(rules.canSettle({ status: "Approved", cost: 100 }).ok, true);

console.log("ok: functions rules agree with models.js (14 assertions)");
