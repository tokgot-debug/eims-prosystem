// Business rules that must hold server-side.
//
// ponytail: these few rules are duplicated from frontend/src/lib/models.js.
// Firebase deploys only the functions/ directory, so importing across the repo
// would need a build step for ~30 lines. models.js is the source of truth --
// change both together, and check-rules.js fails the build if they drift.

const TRIAGE_GREEN_BELOW = 25;
const TRIAGE_YELLOW_BELOW = 60;

const IRA_RATES = { phcf: 0.25, training: 0.2, stampDuty: 40 };

function triageFor(fraudScore) {
  if (fraudScore < TRIAGE_GREEN_BELOW) return "Green";
  if (fraudScore < TRIAGE_YELLOW_BELOW) return "Yellow";
  return "Red";
}

function statutoryTax(premium, rates = IRA_RATES) {
  const phcf = Math.round(premium * (rates.phcf / 100));
  const training = Math.round(premium * (rates.training / 100));
  return { phcf, training, stampDuty: rates.stampDuty, total: phcf + training + rates.stampDuty };
}

/**
 * Fraud indicators, scored the way the claims desk describes them. Returns
 * 0-100. Deliberately explainable: every point added names its reason, so an
 * adjuster can defend the number to a regulator.
 */
function scoreFraud(claim, history = []) {
  const reasons = [];
  let score = 5; // baseline uncertainty on any fresh notice of loss

  if (!claim.coords || claim.coords.length !== 2) {
    score += 20;
    reasons.push("no EXIF/GPS location on the incident media");
  }
  if (!claim.annotations) {
    score += 10;
    reasons.push("no damage annotations captured at the scene");
  }

  const priorClaims = history.filter((c) => c.plate === claim.plate);
  if (priorClaims.length >= 3) {
    score += 30;
    reasons.push(`${priorClaims.length} prior claims on this plate`);
  } else if (priorClaims.length > 0) {
    score += 10 * priorClaims.length;
    reasons.push(`${priorClaims.length} prior claim(s) on this plate`);
  }

  const daysSinceLoss = claim.date
    ? Math.floor((Date.now() - new Date(claim.date).getTime()) / 86_400_000)
    : 0;
  if (daysSinceLoss > 30) {
    score += 15;
    reasons.push(`reported ${daysSinceLoss} days after the loss date`);
  }

  if (claim.cost > 1_000_000) {
    score += 15;
    reasons.push("damage estimate above the KSh 1M review threshold");
  }

  for (const flag of claim.flags || []) {
    score += 12;
    reasons.push(`desk flag: ${flag}`);
  }

  score = Math.max(0, Math.min(100, score));
  return { score, triage: triageFor(score), reasons };
}

/** A claim may only be paid once, and only from an approved state. */
function canSettle(claim) {
  if (!claim) return { ok: false, reason: "claim not found" };
  if (claim.status === "Disbursed") return { ok: false, reason: "claim is already disbursed" };
  if (claim.status !== "Approved") return { ok: false, reason: `claim is ${claim.status}, not Approved` };
  if (!(claim.cost > 0)) return { ok: false, reason: "claim has no payable amount" };
  return { ok: true };
}

module.exports = {
  IRA_RATES, TRIAGE_GREEN_BELOW, TRIAGE_YELLOW_BELOW,
  triageFor, statutoryTax, scoreFraud, canSettle,
};
