import { CLAIMS } from "./claims-data";

export { CLAIMS };

export const SETTLED_STATUSES = ["Approved", "Disbursed"];

export function fraudClass(score) {
  if (score < 25) return "low";
  if (score < 60) return "medium";
  return "high";
}

export function money(n) {
  return `KSh ${n.toLocaleString("en-KE")}`;
}

export function dashboardStats(claims = CLAIMS) {
  const settled = claims
    .filter((c) => SETTLED_STATUSES.includes(c.status))
    .reduce((sum, c) => sum + c.cost, 0);
  return {
    total: claims.length,
    settled,
    settledLabel: `KSh ${(settled / 1_000_000).toFixed(1)}M`,
    investigating: claims.filter((c) => c.status === "Under Investigation").length,
    avgFraud: Math.round(claims.reduce((s, c) => s + c.fraudScore, 0) / claims.length),
  };
}

export function triageSplit(claims = CLAIMS) {
  const total = claims.length;
  const pct = (tone) =>
    Math.round((claims.filter((c) => c.triage === tone).length / total) * 100);
  return { green: pct("Green"), yellow: pct("Yellow"), red: pct("Red") };
}

// Claims velocity, six months. Kept as fixture data like the legacy chart.
export const VELOCITY = [
  { month: "Mar", claims: 12, cost: "1.8M", mom: "+0%" },
  { month: "Apr", claims: 19, cost: "2.9M", mom: "+58%" },
  { month: "May", claims: 15, cost: "2.3M", mom: "-21%" },
  { month: "Jun", claims: 34, cost: "5.1M", mom: "+126%" },
  { month: "Jul", claims: 45, cost: "6.8M", mom: "+32%" },
  { month: "Aug", claims: 52, cost: "7.9M", mom: "+15%" },
];
