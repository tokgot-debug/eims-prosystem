// Marketing copy for the public site. Deliberately inert: nothing here links
// into the portal, the only way in is the sign-in form.
export const MARQUEE = [
  "AI Fraud Audit Engine",
  "NTSA ANPR Plate Telemetry",
  "M-PESA & Airtel B2C Instant Payouts",
  "AKI Digital Motor Certificates",
  "National Kenya GIS Incident Mapping",
  "County Government Fleet Underwriting",
  "IRA Statutory Tax & Levy Remittance",
  "EXIF Camera Scene Media Telemetry",
  "Accredited Garage SLA Network",
  "KIRA Form 104 Electronic Filing",
];

export const KPIS = [
  { value: "KSh 37.28M", label: "Gross Underwritten Premium" },
  { value: "92%", label: "Auto-Pass AI Triage Accuracy" },
  { value: "429", label: "Active County Policies Issued" },
  { value: "< 30s", label: "Instant Multi-Channel Payout SLA" },
];

export const CAPABILITIES = [
  {
    title: "Incident Scene Photo Intake",
    body: "Direct photo & video accident scene capture with EXIF GPS location verification and automated damage highlight painting.",
    tag: "EXIF Geo-Verified Capture",
  },
  {
    title: "NTSA ANPR Plate Telemetry",
    body: "Automated OCR optical license plate scanning cross-referenced against the NTSA national motor vehicle database.",
    tag: "NTSA Registry Cross-Check",
  },
  {
    title: "AKI Digital Motor Certificates",
    body: "Instant issuance of Association of Kenya Insurers digital motor certificates featuring encrypted QR validation badges.",
    tag: "Encrypted QR Validation",
  },
  {
    title: "Accredited Garage & Assessors",
    body: "5-stage repair milestone tracker (Intake, Parts, Paint, Quality) and digital repair release vouchers.",
    tag: "5-Stage SLA Tracking",
  },
  {
    title: "Multi-Channel Settlement Gateway",
    body: "Instant 1-click B2C claim disbursement supporting Safaricom M-PESA, Airtel Money, and PesaLink Bank Transfers.",
    tag: "Sub-30s B2C Payouts",
  },
  {
    title: "IRA & KRA Statutory Compliance",
    body: "Automatic statutory tax calculations under Insurance Act Cap 487 (PHCF 0.25%, Training Levy 0.20%, Stamp Duty).",
    tag: "Cap 487 Auto-Computation",
  },
  {
    title: "National GIS Command Center",
    body: "Full-screen interactive geospatial command map rendering 14 live telemetry markers for claims, garages, and tow units.",
    tag: "14 Live Telemetry Layers",
  },
  {
    title: "AI Report Assistant",
    body: "Natural language AI analytics engine synthesizing executive production summaries, branch audits, and fraud briefs.",
    tag: "Natural Language Analytics",
  },
];

export const TELEMETRY = [
  { time: "23:29:40", tag: "NTSA ANPR", tone: "ok",
    body: "License Plate KDG 123A verified against National Registry. Owner: County Health Dept." },
  { time: "23:29:41", tag: "AI ENGINE", tone: "info",
    body: "Incident photos processed. EXIF GPS: -1.286389, 36.817222 (Nairobi CBD). Fraud Score: 14% [Green Path]." },
  { time: "23:29:42", tag: "AKI CERT", tone: "warn",
    body: "Certificate AKI-2026-90823 issued with encrypted QR verification badge." },
  { time: "23:29:43", tag: "SETTLEMENT", tone: "ok",
    body: "M-PESA B2C Disbursement: KSh 142,500 sent to 254712345678 (Ref: QK89X201L9). Status: SUCCESS." },
];
