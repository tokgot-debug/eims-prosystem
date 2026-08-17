// Claim analytics derived from whatever is currently in the store.
import { SETTLED_STATUSES } from "./models";

export { fraudClass, statusClass, money, compactMoney, triageFor } from "./models";

export function dashboardStats(claims) {
  const settled = claims
    .filter((c) => SETTLED_STATUSES.includes(c.status))
    .reduce((sum, c) => sum + c.cost, 0);
  return {
    total: claims.length,
    settled,
    settledLabel: `KSh ${(settled / 1_000_000).toFixed(1)}M`,
    investigating: claims.filter((c) => c.status === "Under Investigation").length,
    avgFraud: claims.length
      ? Math.round(claims.reduce((s, c) => s + c.fraudScore, 0) / claims.length)
      : 0,
  };
}

export function triageSplit(claims) {
  const total = claims.length || 1;
  const pct = (tone) => Math.round((claims.filter((c) => c.triage === tone).length / total) * 100);
  return { green: pct("Green"), yellow: pct("Yellow"), red: pct("Red") };
}

// Claims velocity, six months. Fixture data -- the seed has no time series.
export const VELOCITY = [
  { month: "Mar", claims: 12, cost: "1.8M", mom: "+0%" },
  { month: "Apr", claims: 19, cost: "2.9M", mom: "+58%" },
  { month: "May", claims: 15, cost: "2.3M", mom: "-21%" },
  { month: "Jun", claims: 34, cost: "5.1M", mom: "+126%" },
  { month: "Jul", claims: 45, cost: "6.8M", mom: "+32%" },
  { month: "Aug", claims: 52, cost: "7.9M", mom: "+15%" },
];
