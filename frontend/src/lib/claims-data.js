// Mock claims dataset, lifted verbatim from the legacy public/app.js.
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
