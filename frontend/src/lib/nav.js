// Sidebar structure. `slug` is the route under /portal; groups mirror the
// modules the legacy sidebar shipped with.
export const NAV = [
  {
    id: "core",
    label: "Core Operations",
    icon: "home",
    items: [
      { slug: "dashboard", label: "Executive Dashboard", icon: "grid" },
      { slug: "geomap-center", label: "GIS Telemetry Map", icon: "map" },
    ],
  },
  {
    id: "claims",
    label: "Claims & Recovery",
    icon: "file",
    items: [
      { slug: "create-claim", label: "Register Claim (FNOL)", icon: "plus" },
      { slug: "claims-directory", label: "Master Claims Directory", icon: "file" },
      { slug: "garage-network", label: "Garages & Work Orders", icon: "wrench" },
      { slug: "subrogation-recovery", label: "Subrogation Recovery", icon: "scale" },
    ],
  },
  {
    id: "underwriting",
    label: "Underwriting & Fleet",
    icon: "calendar",
    items: [
      { slug: "policy-registry", label: "Policy & Cert Registry", icon: "calendar" },
      { slug: "fleet-underwriting", label: "County & Commercial Fleet", icon: "truck" },
      { slug: "ev-underwriting", label: "International EV Premium", icon: "bolt" },
      { slug: "reinsurance-ceding", label: "Reinsurance Quota Share", icon: "layers" },
    ],
  },
  {
    id: "finance",
    label: "Finance & Compliance",
    icon: "card",
    items: [
      { slug: "mpesa-gateway", label: "M-PESA B2C & STK Push", icon: "phone" },
      { slug: "ecitizen-pesaflow", label: "e-Citizen & PesaFlow", icon: "shield" },
      { slug: "itax-compliance", label: "KRA iTax & eTIMS", icon: "receipt" },
      { slug: "ira-compliance", label: "IRA Solvency Returns", icon: "check" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & Staff",
    icon: "chart",
    items: [
      { slug: "production-reports", label: "Reports & Query Center", icon: "chart" },
      { slug: "vehicle-loss-ratios", label: "Loss Ratio Risk Analytics", icon: "trend" },
      { slug: "remote-monitoring", label: "Remote Staff Monitor", icon: "users" },
    ],
  },
  {
    id: "tools",
    label: "AI Tools & OCR",
    icon: "camera",
    items: [
      { slug: "lpr-scanner", label: "ANPR License Plate Reader", icon: "camera" },
      { slug: "qr-generator", label: "Test QR Code Engine", icon: "qr" },
      { slug: "alerts-simulator", label: "Notification Simulator", icon: "bell" },
      { slug: "mobile-app", label: "Mobile App Portal Sim", icon: "phone" },
      { slug: "ai-assistant", label: "EIMS Neural AI Copilot", icon: "spark" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: "gear",
    items: [
      { slug: "subscription-pricing", label: "Subscriptions & Licenses", icon: "gear" },
    ],
  },
];

export const ALL_VIEWS = NAV.flatMap((g) => g.items);

export function groupForSlug(slug) {
  return NAV.find((g) => g.items.some((i) => i.slug === slug))?.id;
}
