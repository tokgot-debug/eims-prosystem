// AUTO-EXTRACTED from the legacy public/app.js, then maintained here.
// Single source of demo data for the whole system: the Next app loads it at
// runtime (src/lib/db.js) and `npm run seed` pushes it into Firestore.
//
// Shapes are documented in frontend/src/lib/models.js -- change both together.

export const CLAIMS = [
  {
    id: "CLM-2026-001",
    plate: "KDG 123A",
    owner: "Boniface Mwangi",
    phone: "+254 712 345678",
    date: "2026-08-01",
    cost: 142500,
    fraudScore: 8,
    triage: "Green",
    status: "Approved",
    coords: [-1.286389, 36.817223],
    county: "Nairobi County",
    police: "Central Police Station (0.4 km)",
    tow: "Nairobi Towing Logistics (0.9 km)",
    annotations: [
      { x: 260, y: 160, type: "dent" },
      { x: 300, y: 180, type: "scratch" }
    ],
    flags: ["EXIF metadata verified", "NTSA database matching", "Claim velocity: Low"]
  },
  {
    id: "CLM-2026-002",
    plate: "KBA 456X",
    owner: "Faith Wanjiku",
    phone: "+254 722 998877",
    date: "2026-08-02",
    cost: 480000,
    fraudScore: 82,
    triage: "Red",
    status: "Under Investigation",
    coords: [-1.3031, 36.7901],
    county: "Nairobi County",
    police: "Kilimani Police Station (0.6 km)",
    tow: "Kilimani Towing Service (1.2 km)",
    annotations: [
      { x: 180, y: 120, type: "crack" }
    ],
    flags: [
      "Duplicate stock image detected in bumper area",
      "EXIF Location mismatch (Photo taken in Mombasa, reported Nairobi)",
      "High claim velocity (3 claims filed in 30 days)"
    ]
  },
  {
    id: "CLM-2026-003",
    plate: "KCA 789M",
    owner: "David Omondi",
    phone: "+254 701 556677",
    date: "2026-07-28",
    cost: 245000,
    fraudScore: 35,
    triage: "Yellow",
    status: "Pending",
    coords: [-1.2592, 36.8219],
    county: "Nairobi County",
    police: "Parklands Police Station (0.8 km)",
    tow: "Highridge Towing (1.4 km)",
    annotations: [
      { x: 280, y: 150, type: "dent" }
    ],
    flags: [
      "Manual vehicle inspection recommended",
      "Minor EXIF time stamp mismatch",
      "Claim history check: 1 previous file"
    ]
  },
  {
    id: "CLM-2026-004",
    plate: "KDD 902Z",
    owner: "Hassan Hussein",
    phone: "+254 733 112233",
    date: "2026-08-03",
    cost: 85000,
    fraudScore: 5,
    triage: "Green",
    status: "Disbursed",
    coords: [-4.0435, 39.6682],
    county: "Mombasa County",
    police: "Mombasa Central Police (0.5 km)",
    tow: "Coast Breakdown Services (1.1 km)",
    annotations: [
      { x: 220, y: 140, type: "scratch" }
    ],
    flags: ["NTSA plate matched", "EXIF location match: Mombasa CBD", "M-PESA Payout Completed"]
  },
  {
    id: "CLM-2026-005",
    plate: "KCP 331L",
    owner: "Wanjiru Kiprop",
    phone: "+254 711 445566",
    date: "2026-07-30",
    cost: 320000,
    fraudScore: 12,
    triage: "Green",
    status: "Approved",
    coords: [-0.0917, 34.7680],
    county: "Kisumu County",
    police: "Kisumu Central Police (0.7 km)",
    tow: "Lakeside Towing (1.3 km)",
    annotations: [
      { x: 310, y: 170, type: "dent" }
    ],
    flags: ["Verified driver license", "Computer vision alignment passed"]
  },
  {
    id: "CLM-2026-006",
    plate: "KCV 889P",
    owner: "Otieno Achieng",
    phone: "+254 720 778899",
    date: "2026-08-02",
    cost: 195000,
    fraudScore: 18,
    triage: "Green",
    status: "Approved",
    coords: [-0.3031, 36.0800],
    county: "Nakuru County",
    police: "Nakuru Central Police (0.3 km)",
    tow: "Rift Valley Towing Services (0.8 km)",
    annotations: [
      { x: 250, y: 130, type: "dent" }
    ],
    flags: ["EXIF verified", "Clean policy history"]
  },
  {
    id: "CLM-2026-007",
    plate: "KDE 112W",
    owner: "Emanuel Kipkorir",
    phone: "+254 721 334455",
    date: "2026-08-03",
    cost: 175000,
    fraudScore: 9,
    triage: "Green",
    status: "Approved",
    coords: [0.5143, 35.2698],
    county: "Uasin Gishu County",
    police: "Eldoret Central Police (0.4 km)",
    tow: "Rift Breakdown Services (0.9 km)",
    annotations: [{ x: 220, y: 140, type: "dent" }],
    flags: ["EXIF verified", "Clean policy history"]
  },
  {
    id: "CLM-2026-008",
    plate: "KDA 554P",
    owner: "Jacqueline Njoki",
    phone: "+254 725 667788",
    date: "2026-08-03",
    cost: 540000,
    fraudScore: 78,
    triage: "Red",
    status: "Under Investigation",
    coords: [-1.0383, 37.0734],
    county: "Kiambu County",
    police: "Thika Police Station (0.6 km)",
    tow: "Super Towing Thika (1.1 km)",
    annotations: [{ x: 280, y: 190, type: "crack" }],
    flags: ["AI Photo Tampering Flagged", "Multiple policy claims in 14 days"]
  },
  {
    id: "CLM-2026-009",
    plate: "KCR 402B",
    owner: "Abdi Mohamed",
    phone: "+254 710 889900",
    date: "2026-08-04",
    cost: 92000,
    fraudScore: 14,
    triage: "Green",
    status: "Disbursed",
    coords: [-0.4201, 36.9476],
    county: "Nyeri County",
    police: "Nyeri Central Police (0.3 km)",
    tow: "Mount Kenya Towing (0.7 km)",
    annotations: [{ x: 190, y: 130, type: "scratch" }],
    flags: ["M-PESA B2C Settlement Completed", "NTSA Matched"]
  },
  {
    id: "CLM-2026-010",
    plate: "KDB 991S",
    owner: "Grace Muthoni",
    phone: "+254 728 112244",
    date: "2026-08-04",
    cost: 310000,
    fraudScore: 32,
    triage: "Yellow",
    status: "Pending",
    coords: [-0.0517, 37.6456],
    county: "Meru County",
    police: "Meru Police Station (0.5 km)",
    tow: "Meru Express Breakdown (1.0 km)",
    annotations: [{ x: 260, y: 170, type: "dent" }],
    flags: ["Assessor Valuation Dispatched", "Pending Police OB Document"]
  }
];

export const POLICIES = [
  {
    policyNo: "POL-MOT-8973-2026",
    clientName: "Boniface Mwangi",
    plate: "KDG 123A",
    line: "Motor",
    premium: 65000,
    debited: 65000,
    status: "Active",
    certId: "CERT-9082-2026",
    isNew: true,
    branch: "HQ"
  },
  {
    policyNo: "POL-MOT-3021-2026",
    clientName: "Faith Wanjiku",
    plate: "KBA 456X",
    line: "Motor",
    premium: 95000,
    debited: 45000,
    status: "Active",
    certId: "CERT-4412-2026",
    isNew: true,
    branch: "Mombasa"
  },
  {
    policyNo: "POL-GEN-5511-2026",
    clientName: "David Omondi",
    plate: "Building/Fire (Parklands)",
    line: "Non-Motor",
    premium: 120000,
    debited: 120000,
    status: "Suspended",
    certId: "CERT-1109-2026",
    isNew: true,
    branch: "Kisumu"
  },
  {
    policyNo: "POL-MOT-7744-2026",
    clientName: "Peter Kamau",
    plate: "KCC 889P",
    line: "Motor",
    premium: 48000,
    debited: 0,
    status: "Cancelled",
    certId: "CERT-0091-2026",
    isNew: false,
    branch: "Nakuru"
  },
  {
    policyNo: "POL-MOT-9922-2026",
    clientName: "Hassan Hussein",
    plate: "KDD 902Z",
    line: "Motor",
    premium: 55000,
    debited: 55000,
    status: "Active",
    certId: "CERT-8812-2026",
    isNew: true,
    branch: "Mombasa"
  },
  {
    policyNo: "POL-MOT-1044-2026",
    clientName: "Wanjiru Kiprop",
    plate: "KCP 331L",
    line: "Motor",
    premium: 72000,
    debited: 72000,
    status: "Active",
    certId: "CERT-3301-2026",
    isNew: true,
    branch: "Kisumu"
  },
  {
    policyNo: "POL-GEN-6002-2026",
    clientName: "Otieno Achieng",
    plate: "Commercial Warehouse (Nakuru)",
    line: "Non-Motor",
    premium: 185000,
    debited: 185000,
    status: "Active",
    certId: "CERT-7762-2026",
    isNew: true,
    branch: "Nakuru"
  },
  {
    policyNo: "POL-MOT-1001-2026",
    clientName: "Nairobi Expressway Bus Ltd",
    plate: "KDG 882X",
    line: "Motor",
    premium: 320000,
    debited: 320000,
    status: "Active",
    certId: "CERT-9901-2026",
    isNew: true,
    branch: "HQ"
  },
  {
    policyNo: "POL-MOT-2042-2026",
    clientName: "Emanuel Kipkorir",
    plate: "KDE 112W",
    line: "Motor",
    premium: 68000,
    debited: 68000,
    status: "Active",
    certId: "CERT-1120-2026",
    isNew: false,
    branch: "Eldoret"
  },
  {
    policyNo: "POL-GEN-8833-2026",
    clientName: "Thika Super Logistics",
    plate: "KDA 554P",
    line: "Non-Motor",
    premium: 450000,
    debited: 450000,
    status: "Active",
    certId: "CERT-5541-2026",
    isNew: true,
    branch: "Thika"
  },
  {
    policyNo: "POL-MOT-4409-2026",
    clientName: "Abdi Mohamed",
    plate: "KCR 402B",
    line: "Motor",
    premium: 52000,
    debited: 52000,
    status: "Active",
    certId: "CERT-4029-2026",
    isNew: false,
    branch: "Nyeri"
  },
  {
    policyNo: "POL-GEN-9012-2026",
    clientName: "Meru Coffee Growers Coop",
    plate: "KDB 991S",
    line: "Non-Motor",
    premium: 280000,
    debited: 280000,
    status: "Active",
    certId: "CERT-9012-2026",
    isNew: true,
    branch: "Meru"
  }
];

export const GARAGES = [
  { id: "GAR-01", name: "Nairobi Auto Care Panel Beaters", location: "Industrial Area, Nairobi", rating: "4.9 ", activeRepairs: 8, slaScore: "98%", status: "Accredited" },
  { id: "GAR-02", name: "Coast Breakdown & Refinishing Ltd", location: "Shimanzi, Mombasa", rating: "4.8 ", activeRepairs: 5, slaScore: "96%", status: "Accredited" },
  { id: "GAR-03", name: "Lakeside Motor Body Works", location: "Kisumu Industrial Zone", rating: "4.7 ", activeRepairs: 4, slaScore: "94%", status: "Accredited" },
  { id: "GAR-04", name: "Rift Valley Panel Beating Clinic", location: "Nakuru Town West", rating: "4.8 ", activeRepairs: 3, slaScore: "97%", status: "Accredited" },
  { id: "GAR-05", name: "Highland Auto Repairs", location: "Eldoret Highway Zone", rating: "4.9 ", activeRepairs: 4, slaScore: "96%", status: "Accredited" },
  { id: "GAR-06", name: "Mount Kenya Motor Works", location: "Nyeri King'ong'o Area", rating: "4.7 ", activeRepairs: 2, slaScore: "93%", status: "Accredited" },
  { id: "GAR-07", name: "Thika Road Auto Technicians", location: "Ruiru Bypass", rating: "4.8 ", activeRepairs: 5, slaScore: "95%", status: "Accredited" },
  { id: "GAR-08", name: "Eastern Star Garage", location: "Machakos Town", rating: "4.6 ", activeRepairs: 3, slaScore: "92%", status: "Accredited" }
];

export const ASSESSORS = [
  { name: "General Adjusters Kenya Ltd", location: "Nairobi / National", spec: "Motor & Mechanical Telemetry", rating: "4.9 " },
  { name: "GAB Robins Assessment Bureau", location: "Mombasa / Coast", spec: "Commercial Fleets & Heavy Plant", rating: "4.8 " },
  { name: "Kenya Assessment Bureau (KAB)", location: "Western & Rift Valley", spec: "Property & Forensic Audit", rating: "4.7 " },
  { name: "AutoAssessor Kenya Ltd", location: "Central Kenya / Nyeri", spec: "Passenger & Light Commercial", rating: "4.8 " },
  { name: "Apex Valuation Services", location: "North Rift / Eldoret", spec: "Agricultural Machinery", rating: "4.7 " }
];

export const REINSURERS = [
  { name: "Kenya Reinsurance Corporation (Kenya Re)", rating: "AA+ (AM Best)", share: "35%", cededPremium: "KSh 14,912,000", status: "Active Treaty (Statutory 35%)" },
  { name: "Zep-Re (PTA Reinsurance Co)", rating: "AA (GCR)", share: "15%", cededPremium: "KSh 6,390,000", status: "Active Treaty (COMESA 15%)" },
  { name: "African Reinsurance Corporation (Africa Re)", rating: "A+ (S&P)", share: "10%", cededPremium: "KSh 4,260,000", status: "Active Treaty (Pan-African 10%)" }
];

export const SUBROGATION_CASES = [
  { claimId: "CLM-2026-001", vehicle: "KDG 123A", thirdPartyInsurer: "APA Insurance Ltd", fault: "100% Third-Party", amount: "KSh 480,000", status: "Demand Notice Sent" },
  { claimId: "CLM-2026-002", vehicle: "KBA 456X", thirdPartyInsurer: "Jubilee Insurance Kenya", fault: "80% Third-Party", amount: "KSh 420,000", status: "Recovered" },
  { claimId: "CLM-2026-003", vehicle: "KCC 789Y", thirdPartyInsurer: "CIC General Insurance", fault: "100% Third-Party", amount: "KSh 420,000", status: "Under Dispute" },
  { claimId: "CLM-2026-008", vehicle: "KDA 554P", thirdPartyInsurer: "Britam General Insurance", fault: "100% Third-Party", amount: "KSh 540,000", status: "Demand Notice Sent" },
  { claimId: "CLM-2026-010", vehicle: "KDB 991S", thirdPartyInsurer: "ICEA LION General", fault: "90% Third-Party", amount: "KSh 310,000", status: "Demand Notice Sent" }
];

export const COUNTY_FLEETS = [
  { id: "FLT-NRB-01", county: "Nairobi City County Fleet", count: "45 Vehicles", line: "Emergency & Ambulances", premium: "KSh 8,500,000", certs: "Batch Issued (45/45)" },
  { id: "FLT-MSA-02", county: "Mombasa County Health Fleet", count: "28 Vehicles", line: "Health & Utility", premium: "KSh 5,200,000", certs: "Batch Issued (28/28)" },
  { id: "FLT-NKR-03", county: "Nakuru County Revenue Fleet", count: "32 Vehicles", line: "Administrative Patrol", premium: "KSh 6,100,000", certs: "Batch Issued (32/32)" },
  { id: "FLT-KSM-04", county: "Kisumu Fire & Rescue Fleet", count: "18 Vehicles", line: "Emergency Response", premium: "KSh 4,400,000", certs: "Batch Issued (18/18)" },
  { id: "FLT-ELD-05", county: "Uasin Gishu Agricultural Fleet", count: "24 Vehicles", line: "Heavy Machinery", premium: "KSh 5,800,000", certs: "Batch Issued (24/24)" },
  { id: "FLT-KMB-06", county: "Kiambu Works & Transport", count: "36 Vehicles", line: "Public Works Patrol", premium: "KSh 7,100,000", certs: "Batch Issued (36/36)" }
];

export const SCHEDULED_PAYOUTS = [
  {
    id: "SCH-88210",
    claimId: "CLM-2026-001",
    plate: "KDG 123A",
    claimant: "Boniface Mwangi",
    phone: "+254 712 345678",
    channel: "M-PESA B2C",
    amount: 142500,
    releaseDate: "2026-08-10 09:00",
    note: "Post-Windscreen Quality Inspection Audit",
    officer: "Agent Davis (Finance)",
    status: "Scheduled"
  },
  {
    id: "SCH-88211",
    claimId: "CLM-2026-003",
    plate: "KBA 110X",
    claimant: "Jacqueline Njoki",
    phone: "+254 725 667788",
    channel: "PesaLink EFT",
    amount: 450000,
    releaseDate: "2026-08-12 14:00",
    note: "Heavy Commercial Chassis Installment",
    officer: "Agent Davis (Finance)",
    status: "Scheduled"
  }
];

export const BRANCH_PRODUCTION = [
  { branch: "Head Office (Nairobi)", newCount: 142, renewedCount: 48, newPremium: 12850000, share: "34%" },
  { branch: "Mombasa Branch", newCount: 88, renewedCount: 32, newPremium: 7920000, share: "21%" },
  { branch: "Kisumu Branch", newCount: 64, renewedCount: 21, newPremium: 5450000, share: "15%" },
  { branch: "Nakuru Branch", newCount: 52, renewedCount: 19, newPremium: 4180000, share: "12%" },
  { branch: "Eldoret Branch", newCount: 45, renewedCount: 15, newPremium: 3850000, share: "10%" },
  { branch: "Nyeri Branch", newCount: 38, renewedCount: 12, newPremium: 2950000, share: "8%" }
];

export const VEHICLE_LOSS_RATIOS = [
  {
    model: "Toyota Probox / Succeed",
    category: "Station Wagon",
    activePolicies: 1420,
    earnedPremium: 52000000,
    incurredClaims: 47800000,
    loadingPct: 20,
    recommendation: "Commercial Surcharge +20%"
  },
  {
    model: "Toyota HiAce Matatu (14-Seater PSV)",
    category: "PSV Commercial",
    activePolicies: 1950,
    earnedPremium: 146250000,
    incurredClaims: 128700000,
    loadingPct: 30,
    recommendation: "PSV High Risk Surcharge +30%"
  },
  {
    model: "Isuzu NQR Bus (33-Seater PSV)",
    category: "PSV Commercial",
    activePolicies: 920,
    earnedPremium: 82800000,
    incurredClaims: 71200000,
    loadingPct: 25,
    recommendation: "Fleet Overload Loading +25%"
  },
  {
    model: "Subaru Forester 2.0T",
    category: "SUV",
    activePolicies: 890,
    earnedPremium: 36800000,
    incurredClaims: 32700000,
    loadingPct: 15,
    recommendation: "High Speed Risk Loading +15%"
  },
  {
    model: "Isuzu NPR Commercial Truck",
    category: "Commercial Truck",
    activePolicies: 1850,
    earnedPremium: 82500000,
    incurredClaims: 70125000,
    loadingPct: 15,
    recommendation: "Fleet Overload Loading +15%"
  },
  {
    model: "Mitsubishi Fuso Super Great Tipper",
    category: "Commercial Truck",
    activePolicies: 640,
    earnedPremium: 64000000,
    incurredClaims: 51776000,
    loadingPct: 20,
    recommendation: "Heavy Cargo Loading +20%"
  },
  {
    model: "Suzuki Alto / Maruti (Ride-Hailing)",
    category: "Hatchback / Ride-Hailing",
    activePolicies: 3100,
    earnedPremium: 24800000,
    incurredClaims: 18848000,
    loadingPct: 15,
    recommendation: "High Mileage App Surcharge +15%"
  },
  {
    model: "Nissan NV200 Commercial Van",
    category: "Commercial Van",
    activePolicies: 880,
    earnedPremium: 21120000,
    incurredClaims: 16051200,
    loadingPct: 15,
    recommendation: "Urban Delivery Surcharge +15%"
  },
  {
    model: "Toyota Hilux Double Cab 4x4",
    category: "Pickup / Fleet",
    activePolicies: 1650,
    earnedPremium: 74250000,
    incurredClaims: 48188250,
    loadingPct: 5,
    recommendation: "Fleet Commercial Loading +5%"
  },
  {
    model: "Toyota Fielder NZE161",
    category: "Station Wagon",
    activePolicies: 2150,
    earnedPremium: 45200000,
    incurredClaims: 31640000,
    loadingPct: 0,
    recommendation: "Standard Underwriting"
  },
  {
    model: "Toyota Prado J150 (3.0 D4D)",
    category: "SUV",
    activePolicies: 1480,
    earnedPremium: 96200000,
    incurredClaims: 32708000,
    loadingPct: 0,
    recommendation: "Profitable Executive Line"
  },
  {
    model: "Toyota Vitz KSP130",
    category: "Hatchback / Ride-Hailing",
    activePolicies: 2840,
    earnedPremium: 34080000,
    incurredClaims: 11246400,
    loadingPct: -5,
    recommendation: "Low Risk Rebate -5%"
  },
  {
    model: "Honda Fit / Shuttle Hybrid",
    category: "Station Wagon",
    activePolicies: 1220,
    earnedPremium: 21960000,
    incurredClaims: 8344800,
    loadingPct: -5,
    recommendation: "Low Claim Severity Discount -5%"
  },
  {
    model: "Mazda Demio / Axela",
    category: "Saloon",
    activePolicies: 1100,
    earnedPremium: 19500000,
    incurredClaims: 8200000,
    loadingPct: -5,
    recommendation: "Low Risk Discount -5%"
  },
  {
    model: "Nissan X-Trail T32",
    category: "SUV",
    activePolicies: 940,
    earnedPremium: 28400000,
    incurredClaims: 11928000,
    loadingPct: 0,
    recommendation: "Profitable Line"
  },
  {
    model: "BYD Atto 3 EV (Electric SUV)",
    category: "EV Electric",
    activePolicies: 320,
    earnedPremium: 14400000,
    incurredClaims: 3456000,
    loadingPct: -10,
    recommendation: "Green EV Preferred Discount -10%"
  },
  {
    model: "Tesla Model Y Dual Motor EV",
    category: "EV Electric",
    activePolicies: 140,
    earnedPremium: 10920000,
    incurredClaims: 2828280,
    loadingPct: -10,
    recommendation: "Green EV Preferred Discount -10%"
  },
  {
    model: "Mercedes-Benz E-Class W213",
    category: "Saloon",
    activePolicies: 480,
    earnedPremium: 41000000,
    incurredClaims: 14350000,
    loadingPct: -10,
    recommendation: "Preferred Executive Rebate -10%"
  },
  {
    model: "Lexus RX450h Luxury Hybrid",
    category: "SUV",
    activePolicies: 560,
    earnedPremium: 44800000,
    incurredClaims: 12544000,
    loadingPct: -8,
    recommendation: "Hybrid Preferred Rebate -8%"
  },
  {
    model: "BMW X5 xDrive30d",
    category: "SUV",
    activePolicies: 390,
    earnedPremium: 35100000,
    incurredClaims: 11232000,
    loadingPct: -5,
    recommendation: "Preferred Risk Rebate -5%"
  }
];

export const REMOTE_STAFF_SESSIONS = [
  {
    id: "STF-101",
    name: "Agent Davis",
    role: "Claims Administrator",
    location: "Kileleshwa Home Office (Nairobi)",
    ip: "197.232.14.88 (TLS VPN)",
    clockIn: "08:00 AM (8h 25m)",
    activeTask: "Reviewing Windscreen Claim CLM-2026-001 EXIF Media",
    pulsePct: 98,
    status: "Active WFH",
    claimsCount: 24
  },
  {
    id: "STF-102",
    name: "Jacqueline Wanjiru",
    role: "Senior Underwriter",
    location: "Westlands Apartment (Nairobi)",
    ip: "41.215.160.12 (TLS VPN)",
    clockIn: "08:15 AM (8h 10m)",
    activeTask: "Underwriting EV Fleet Quota POL-EV-2026-990",
    pulsePct: 95,
    status: "Active WFH",
    claimsCount: 38
  },
  {
    id: "STF-103",
    name: "Peter Ochieng",
    role: "SIU Senior Investigator",
    location: "Kisumu Remote Office",
    ip: "197.232.90.41 (TLS VPN)",
    clockIn: "08:30 AM (7h 55m)",
    activeTask: "Investigating Staged Collision CLM-2026-003 ANPR Data",
    pulsePct: 92,
    status: "Active WFH",
    claimsCount: 16
  },
  {
    id: "STF-104",
    name: "Mary Kiprop",
    role: "Disbursement & Finance Officer",
    location: "Eldoret Town Home Office",
    ip: "105.160.88.20 (TLS VPN)",
    clockIn: "08:45 AM (7h 40m)",
    activeTask: "Authorizing M-PESA B2C Settlement SCH-88210",
    pulsePct: 96,
    status: "Active WFH",
    claimsCount: 42
  },
  {
    id: "STF-105",
    name: "Dennis Mwangi",
    role: "Loss Assessor Coordinator",
    location: "Nakuru West Home Office",
    ip: "41.89.22.15 (TLS VPN)",
    clockIn: "09:00 AM (7h 25m)",
    activeTask: "Dispatching General Adjusters for Red Flagged Claim",
    pulsePct: 88,
    status: "Active WFH",
    claimsCount: 18
  },
  {
    id: "STF-106",
    name: "Grace Njeri",
    role: "Customer Care & Claims Intake",
    location: "Thika Greens Home Office",
    ip: "197.232.55.10 (TLS VPN)",
    clockIn: "08:00 AM (8h 25m)",
    activeTask: "Assisting Policyholder via Mobile App Portal Chat",
    pulsePct: 94,
    status: "Active WFH",
    claimsCount: 10
  }
];

export const PESAFLOW_TRANSACTIONS = [
  {
    ref: "PSF-2026-881290",
    billNo: "ECIT-KEN-2026-990812",
    payer: "Boniface Mwangi (ID: 28910293)",
    channel: "PesaFlow M-PESA STK",
    amount: 150333,
    stampDuty: 40,
    status: "Settled & Remitted"
  },
  {
    ref: "PSF-2026-881291",
    billNo: "ECIT-KEN-2026-990815",
    payer: "Green Mobility Kenya Ltd",
    channel: "PesaFlow Visa Card",
    amount: 599000,
    stampDuty: 40,
    status: "Settled & Remitted"
  },
  {
    ref: "PSF-2026-881292",
    billNo: "ECIT-KEN-2026-990820",
    payer: "Jacqueline Njoki (ID: 19823412)",
    channel: "PesaFlow Airtel Money",
    amount: 269000,
    stampDuty: 40,
    status: "Settled & Remitted"
  }
];

export const ITAX_REMITTANCES = [
  {
    ackRef: "KRA-ITAX-2026-981023",
    origin: "Policy Premium POL-MOT-8973 (Underwriting)",
    head: "VAT 16%",
    grossAmount: 150000,
    taxAmount: 24000,
    etimsCode: "ETIMS-2026-CU-884129",
    status: "Remitted & Synced"
  },
  {
    ackRef: "KRA-ITAX-2026-981024",
    origin: "Garage Work Order WKO-2026-88412 (Nairobi Auto Care)",
    head: "WHT 5%",
    grossAmount: 142500,
    taxAmount: 7125,
    etimsCode: "ETIMS-2026-CU-884130",
    status: "Remitted & Synced"
  },
  {
    ackRef: "KRA-ITAX-2026-981025",
    origin: "Brokerage Commission COMM-2026-091 (Minet Kenya)",
    head: "Excise Duty 20%",
    grossAmount: 85000,
    taxAmount: 17000,
    etimsCode: "ETIMS-2026-CU-884131",
    status: "Remitted & Synced"
  },
  {
    ackRef: "KRA-ITAX-2026-981026",
    origin: "AKI Certificate Batch Issue (4,290 Motor Policies)",
    head: "Stamp Duty",
    grossAmount: 171600,
    taxAmount: 171600,
    etimsCode: "ETIMS-2026-CU-884132",
    status: "Remitted & Synced"
  },
  {
    ackRef: "KRA-ITAX-2026-981027",
    origin: "Loss Assessor Fee VAL-2026-019 (General Adjusters)",
    head: "WHT 5%",
    grossAmount: 35000,
    taxAmount: 1750,
    etimsCode: "ETIMS-2026-CU-884133",
    status: "Remitted & Synced"
  }
];

export const LPR_SCAN_LOGS = [
  {
    time: "2026-08-05 20:42",
    plate: "KDG 123A",
    format: "Civilian FE-Aluminium",
    conf: "99.4%",
    vehicle: "Toyota Fielder (Boniface Mwangi)",
    status: "Active Cover (POL-MOT-8973)",
    location: "Nairobi Expressway Gate 04"
  },
  {
    time: "2026-08-05 20:15",
    plate: "KDA 888E",
    format: "Electric Vehicle (Green)",
    conf: "98.9%",
    vehicle: "BYD Atto 3 EV (Green Mobility)",
    status: "Active Cover (POL-EV-2026-990)",
    location: "Westlands Charging Station"
  },
  {
    time: "2026-08-05 19:50",
    plate: "KBZ 442P",
    format: "PSV Matatu Sacco",
    conf: "97.8%",
    vehicle: "Isuzu NQR Bus (Super Metro)",
    status: "Active Fleet (POL-FLT-2026-401)",
    location: "Thika Superhighway Exit 7"
  },
  {
    time: "2026-08-05 18:30",
    plate: "43 CD 12K",
    format: "Diplomatic Corps (Red)",
    conf: "99.7%",
    vehicle: "Chevrolet Suburban (US Embassy)",
    status: "Diplomatic Immunity Cover",
    location: "UN Avenue Gigiri Post"
  }
];

export const OCR_TEST_SUITE = [
  { plate: "KDG 123A", format: "Civilian", type: "Standard Civilian Yellow/White Plate", conf: 99.4, expected: "KDG 123A", status: "Untested" },
  { plate: "KDA 888E", format: "EV Plate", type: "Electric Vehicle Green Plate", conf: 98.9, expected: "KDA 888E", status: "Untested" },
  { plate: "KBZ 442P", format: "PSV Plate", type: "Public Service Vehicle (PSV) Yellow Plate", conf: 97.8, expected: "KBZ 442P", status: "Untested" },
  { plate: "GK 492B", format: "Government", type: "Government GK Blue/White Plate", conf: 99.1, expected: "GK 492B", status: "Untested" },
  { plate: "47 CG 102A", format: "County Govt", type: "County Government Fleet Plate", conf: 98.4, expected: "47 CG 102A", status: "Untested" },
  { plate: "43 CD 12K", format: "Diplomatic", type: "Diplomatic Corps Red Plate", conf: 99.7, expected: "43 CD 12K", status: "Untested" },
  { plate: "78 KA 12", format: "Military", type: "Kenya Defence Forces Military Plate", conf: 98.2, expected: "78 KA 12", status: "Untested" },
  { plate: "KMCF 481Z", format: "Boda Boda", type: "Motorcycle Civilian Format Plate", conf: 96.5, expected: "KMCF 481Z", status: "Untested" },
  { plate: "KG 4812 A", format: "Dealer", type: "Dealer Motor Transit Red KG Plate", conf: 97.1, expected: "KG 4812 A", status: "Untested" },
  { plate: "KCC 512B", format: "Legacy Civilian", type: "Legacy Civilian Metal Embossed Plate", conf: 95.8, expected: "KCC 512B", status: "Untested" },
  { plate: "99 CD 14K", format: "Diplomatic Series", type: "Diplomatic Envoy Red CD Plate", conf: 99.2, expected: "99 CD 14K", status: "Untested" },
  { plate: "CG 001B", format: "Governor Fleet", type: "County Governor Ceremony Fleet Plate", conf: 98.0, expected: "CG 001B", status: "Untested" }
];

export const NOTIFICATION_LOGS = [
  {
    id: "LOG-9081",
    timestamp: "09:57 PM",
    date: "Aug 5, 2026",
    recipient: "Grace Muthoni",
    phone: "+254 728 112244",
    email: "grace.muthoni@gmail.com",
    channel: "SMS Alert",
    claimId: "CLM-2026-010",
    plate: "KDB 991S",
    event: "Notice of Loss Registered",
    status: "Pending",
    delivery: "Delivered (Safaricom SMS Gateway)",
    smsMessage: "EIMS Notice: Claim CLM-2026-010 for plate KDB 991S is registered. Security score audits are pending manually review.",
    waMessage: "Habari Grace, your claim *CLM-2026-010* for vehicle *KDB 991S* has been logged. Our neural audit engine is processing your photos.",
    emailSubject: "Claim Registration Acknowledged",
    emailHeader: "First Notice of Loss Registered",
    emailBody: "We acknowledge receipt of your digital claim filing. EIMS is currently auditing plate OCR registries and EXIF metadata for vehicle KDB 991S."
  },
  {
    id: "LOG-9082",
    timestamp: "08:30 PM",
    date: "Aug 5, 2026",
    recipient: "David Ochieng",
    phone: "+254 711 998877",
    email: "david.ochieng@gmail.com",
    channel: "WhatsApp",
    claimId: "CLM-2026-004",
    plate: "KDD 012Z",
    event: "M-PESA B2C Settlement",
    status: "Disbursed",
    delivery: "Delivered (WhatsApp Business API)",
    smsMessage: "EIMS Notice: KSh 620,000 has been disbursed to your line +254 711 998877 via M-PESA B2C. Txn Ref: MP-9081231.",
    waMessage: "Habari David, repair payout of *KSh 620,000* for vehicle *KDD 012Z* has been disbursed to your line via M-PESA. Thank you!",
    emailSubject: "Claim Settlement Funds Disbursed",
    emailHeader: "M-PESA Payout Settlement Complete",
    emailBody: "Your repair settlement value of KSh 620,000 has been transferred to your registered M-PESA line."
  },
  {
    id: "LOG-9083",
    timestamp: "05:15 PM",
    date: "Aug 5, 2026",
    recipient: "Boniface Mwangi",
    phone: "+254 722 123456",
    email: "boniface.mwangi@eims.go.ke",
    channel: "Rich Email",
    claimId: "POL-MOT-8973-2026",
    plate: "KDG 123A",
    event: "AKI QR Certificate Issuance",
    status: "Approved",
    delivery: "Delivered (Corporate SMTP Relay)",
    smsMessage: "EIMS Notice: AKI Digital Motor Insurance Certificate CERT-9082-2026 issued for KDG 123A. Valid until Aug 2, 2027.",
    waMessage: "Habari Boniface, your AKI Digital Insurance Certificate *CERT-9082-2026* is ready. Download it directly from the EIMS portal.",
    emailSubject: "AKI Digital Certificate Issued",
    emailHeader: "Official Certificate of Motor Insurance",
    emailBody: "Your digital motor insurance certificate CERT-9082-2026 has been cryptographically signed and sealed by the Association of Kenya Insurers (AKI)."
  },
  {
    id: "LOG-9084",
    timestamp: "03:40 PM",
    date: "Aug 5, 2026",
    recipient: "AutoExpress Garage Nairobi",
    phone: "+254 720 990011",
    email: "repairs@autoexpress.co.ke",
    channel: "SMS Alert",
    claimId: "WKO-2026-88412",
    plate: "KBA 456X",
    event: "Garage Repair Work Order",
    status: "Approved",
    delivery: "Delivered (Airtel SMS Gateway)",
    smsMessage: "EIMS Notice: Garage Work Order WKO-2026-88412 for KBA 456X approved. Repair cap: KSh 480,000. 5% WHT applied.",
    waMessage: "Habari Garage Team, Repair Work Order *WKO-2026-88412* for vehicle *KBA 456X* has been approved. Pre-repair permission granted.",
    emailSubject: "Work Order Authorization Granted",
    emailHeader: "Garage SLA Repair Order Issued",
    emailBody: "Authorization is hereby granted to commence repairs on vehicle KBA 456X up to the capped valuation of KSh 480,000."
  },
  {
    id: "LOG-9085",
    timestamp: "01:20 PM",
    date: "Aug 5, 2026",
    recipient: "Green Mobility Kenya Ltd",
    phone: "+254 733 445566",
    email: "accounts@greenmobility.co.ke",
    channel: "Rich Email",
    claimId: "PSF-2026-881291",
    plate: "KDA 888E",
    event: "e-Citizen PesaFlow Receipt",
    status: "Disbursed",
    delivery: "Delivered (PesaFlow Webhook)",
    smsMessage: "EIMS Notice: e-Citizen PesaFlow receipt PSF-2026-881291 issued for KSh 599,000. Tax Invoice eTIMS-990812 verified.",
    waMessage: "Habari Green Mobility, e-Citizen payment receipt *PSF-2026-881291* for *KSh 599,000* has been verified by KRA eTIMS.",
    emailSubject: "e-Citizen Payment Confirmation",
    emailHeader: "PesaFlow Service Settlement Complete",
    emailBody: "Confirmation that payment of KSh 599,000 for e-Citizen service bill ECIT-KEN-2026-990815 has been settled."
  }
];

export const COUNTY_RESOURCES = [
  { coords: [-1.286389, 36.817223], county: "Nairobi County (Central)", police: "Central Police Station", tow: "Nairobi Towing Logistics" },
  { coords: [-1.3031, 36.7901], county: "Nairobi County (Kilimani)", police: "Kilimani Police Station", tow: "Kilimani Towing Service" },
  { coords: [-1.2592, 36.8219], county: "Nairobi County (Parklands)", police: "Parklands Police Station", tow: "Highridge Towing" },
  { coords: [-1.4286, 36.9634], county: "Machakos County", police: "Athi River Police Station", tow: "Eastern Towing Services" },
  { coords: [-1.1482, 36.9606], county: "Kiambu County", police: "Ruiru Police Station", tow: "Thika Road Towing Logistics" }
];

export const NTSA_REGISTRY = {
  "KDG 123A": { make: "Toyota Fielder", year: 2018, chassis: "NZE161G-7856421", valuation: 1850000, policy: "POL-MOT-8973-2026", owner: "Boniface Mwangi" },
  "KBA 456X": { make: "Subaru Forester", year: 2015, chassis: "SF5-087342", valuation: 2200000, policy: "POL-MOT-3021-2026", owner: "Faith Wanjiku" },
  "KCA 789M": { make: "Mazda Demio", year: 2016, chassis: "DJ5FS-103984", valuation: 950000, policy: "POL-MOT-6512-2026", owner: "David Omondi" },
  "KDD 902Z": { make: "Isuzu D-Max", year: 2021, chassis: "TFR85-992144", valuation: 3400000, policy: "POL-MOT-9922-2026", owner: "Hassan Hussein" },
  "KCP 331L": { make: "Toyota Prado TX", year: 2019, chassis: "GDJ150-009182", valuation: 5800000, policy: "POL-MOT-1044-2026", owner: "Wanjiru Kiprop" },
  "KDE 112W": { make: "Toyota Landcruiser HZJ", year: 2020, chassis: "HZJ76-881923", valuation: 6200000, policy: "POL-MOT-2042-2026", owner: "Emanuel Kipkorir" },
  "KDA 554P": { make: "Mitsubishi Fuso Truck", year: 2017, chassis: "FK617-772183", valuation: 4100000, policy: "POL-GEN-8833-2026", owner: "Jacqueline Njoki" },
  "KCR 402B": { make: "Nissan X-Trail", year: 2018, chassis: "NT32-554192", valuation: 2100000, policy: "POL-MOT-4409-2026", owner: "Abdi Mohamed" },
  "KDB 991S": { make: "Toyota Hilux Double Cab", year: 2022, chassis: "GUN125-991204", valuation: 4800000, policy: "POL-GEN-9012-2026", owner: "Grace Muthoni" }
};

export const LPR_FORMATS = {
  civilian: {
    plate: "KDG 123A",
    type: "Standard Civilian FE-Aluminium (Yellow/White)",
    conf: 99.4,
    rfid: "RFID-NTSA-881920 Verified",
    model: "Toyota Fielder • Boniface Mwangi",
    status: "Active Policy Match (POL-MOT-8973)",
    loc: "Nairobi Expressway Highway Toll Gate 04",
    photo: "car_plate.jpg"
  },
  ev: {
    plate: "KDA 888E",
    type: "Electric Vehicle (EV Green Plate Series)",
    conf: 98.9,
    rfid: "RFID-EV-2026-9081 Verified",
    model: "BYD Atto 3 EV • Green Mobility Kenya",
    status: "Active EV Policy (POL-EV-2026-990)",
    loc: "Westlands Mall EV Charging Station Gate",
    photo: "car_plate.jpg"
  },
  psv: {
    plate: "KBZ 442P",
    type: "Public Service Vehicle (PSV Matatu Sacco)",
    conf: 97.8,
    rfid: "RFID-PSV-44120 Verified",
    model: "Isuzu NQR Bus • Super Metro Sacco",
    status: "Active Fleet Policy (POL-FLT-2026-401)",
    loc: "Thika Superhighway Exit 7 ANPR Camera",
    photo: "car_plate.jpg"
  },
  gk: {
    plate: "GK 492B",
    type: "Government of Kenya (GK National Executive)",
    conf: 99.1,
    rfid: "RFID-GK-99012 Verified",
    model: "Toyota Land Cruiser Prado • Min. of Transport",
    status: "Exempt Statutory County Fleet",
    loc: "Harambee Avenue State House Plaza Camera",
    photo: "car_plate.jpg"
  },
  county: {
    plate: "47 CG 102A",
    type: "County Government Fleet (47 Nairobi City County)",
    conf: 98.4,
    rfid: "RFID-CG47-8819 Verified",
    model: "Isuzu FRR Tipper • Nairobi City County",
    status: "Active Bulk Fleet (POL-CTY-2026-001)",
    loc: "City Hall Way ANPR Camera 02",
    photo: "car_plate.jpg"
  },
  cd: {
    plate: "43 CD 12K",
    type: "Diplomatic Corps (CD Red Plate - US Embassy)",
    conf: 99.7,
    rfid: "RFID-CD-04312 Diplomatic Immunity",
    model: "Chevrolet Suburban • Diplomatic Mission",
    status: "International Diplomatic Immunity Cover",
    loc: "UN Avenue Gigiri Embassy Guard Post",
    photo: "car_plate.jpg"
  },
  kdf: {
    plate: "78 KA 12",
    type: "Kenya Defence Forces (KDF Military Series)",
    conf: 98.2,
    rfid: "RFID-MIL-78KA Restricted",
    model: "Land Rover Defender • Kenya Army HQ",
    status: "Military Defence Forces Protocol",
    loc: "Kahawa Barracks Gate 01 ANPR Scanner",
    photo: "car_plate.jpg"
  },
  boda: {
    plate: "KMCF 481Z",
    type: "Motorcycle / Boda Boda (KMCL Series)",
    conf: 96.5,
    rfid: "RFID-MC-481Z Verified",
    model: "Boxer BM 150 • Peter Omondi",
    status: "Active Micro-Motorcycle Comprehensive",
    loc: "Mombasa Road Inland Depot Gate",
    photo: "car_plate.jpg"
  },
  dealer: {
    plate: "KG 4812 A",
    type: "Dealer Motor Transit (KG Red Plate - Motor Trade)",
    conf: 97.1,
    rfid: "RFID-KG-4812 Transit Authorized",
    model: "Subaru Outback • CMC Motors Dealer Transit",
    status: "Active Motor Trade Transit Floater",
    loc: "Mombasa Port Kilindini Gate 03",
    photo: "car_plate.jpg"
  }
};

export const QR_PRESETS = {
  aki: "https://eims.go.ke/v/POL8973",
  kra: "https://itax.kra.go.ke/v/INV98124",
  ecitizen: "https://ecitizen.go.ke/v/ECIT9908",
  ntsa: "https://ntsa.go.ke/v/KDG123A"
};

export const REINSURANCE_CONFIG = { retentionLimit: 5000000, kenyaRe: 40, zepRe: 35, africaRe: 25 };

export const IRA_TAX_RATES = { phcf: 0.25, training: 0.20, stampDuty: 40 };

export const CHANNEL_TOTALS = {
  mpesa: 420000,
  airtel: 180000,
  bank: 540000
};
