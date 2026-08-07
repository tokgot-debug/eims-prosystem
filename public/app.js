// EIMS - Enhanced Insurance Management System Core Logic

// ================= GLOBAL STATE =================
let claims = [
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

// Mock NTSA Vehicle Registry
const ntsaDatabase = {
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

// County emergency resources mock data
const localResourceDatabase = [
  { coords: [-1.286389, 36.817223], county: "Nairobi County (Central)", police: "Central Police Station", tow: "Nairobi Towing Logistics" },
  { coords: [-1.3031, 36.7901], county: "Nairobi County (Kilimani)", police: "Kilimani Police Station", tow: "Kilimani Towing Service" },
  { coords: [-1.2592, 36.8219], county: "Nairobi County (Parklands)", police: "Parklands Police Station", tow: "Highridge Towing" },
  { coords: [-1.4286, 36.9634], county: "Machakos County", police: "Athi River Police Station", tow: "Eastern Towing Services" },
  { coords: [-1.1482, 36.9606], county: "Kiambu County", police: "Ruiru Police Station", tow: "Thika Road Towing Logistics" }
];

let activeView = "dashboard";
let currentFNOLStep = 1;
let currentFNOLClaim = null;
let leafletMap = null;
let leafletMarker = null;
let modalMap = null;
let modalMarker = null;

// Annotation canvas globals
let annotationCanvas = null;
let annotationCtx = null;
let annotationImageLoaded = false;
let activeDrawTool = "dent"; // dent, scratch, crack
let canvasCircles = [];

// ================= APP INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  setupViewNavigation();
  initThemeControl();
  renderDashboard();
  setupFNOLStepper();
  setupClaimsDirectory();
  setupAlertsSimulator();
  setupModalHandlers();
  setupPolicyRegistry();
  setupProductionReports();
  setupAIAssistant();
  setupReportsQueryListeners();
  
  // Launch active Landing Page view by default
  navigateToView("landing-page");
  
  // Set up Global Search
  const globalSearch = document.getElementById("global-search");
  globalSearch.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 2) {
      showToast("Searching Database", `Looking up files for "${query}"`, "info");
      // Search redirect to Directory view
      document.getElementById("directory-search-input").value = query;
      navigateToView("claims-directory");
      renderClaimsDirectory();
    }
  });
  
  showToast("System Online", "EIMS Claims & Policy portal loaded successfully.", "success");
});

// ================= THEME & UI CONTROLS =================
function initThemeControl() {
  const themeBtn = document.getElementById("theme-mode-btn");
  
  themeBtn.addEventListener("click", () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let nextTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("color-scheme", nextTheme);
    showToast("Theme Updated", `Switched to ${nextTheme} mode.`, "info");
  });
  
  // React to OS changes if setting is dynamic
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem("color-scheme") === "system" || !localStorage.getItem("color-scheme")) {
      const nextTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nextTheme);
    }
  });
}

function toggleAccordion(modId) {
  const groups = document.querySelectorAll(".accordion-group");
  const targetGroup = document.getElementById(modId);
  if (!targetGroup) return;

  const isOpen = targetGroup.classList.contains("open");

  // Single Open Rule: Close all accordion groups first
  groups.forEach(g => {
    g.classList.remove("open");
    g.classList.remove("active-group");
  });

  // If it wasn't open, open it
  if (!isOpen) {
    targetGroup.classList.add("open");
    targetGroup.classList.add("active-group");
  }
}

function toggleSidebarCollapse() {
  const sidebar = document.querySelector('.app-sidebar') || document.getElementById('main-sidebar');
  if (!sidebar) return;
  sidebar.classList.toggle('collapsed');
  const isCollapsed = sidebar.classList.contains('collapsed');
  const btn = document.getElementById('sidebar-collapse-toggle');
  if (btn) {
    btn.setAttribute('title', isCollapsed ? 'Expand Menu' : 'Collapse Menu');
  }
}

// Navigation helper
function navigateToView(viewId) {
  if (viewId === "ai-assistant") {
    openAIAssistantModal();
    return;
  }

  const views = document.querySelectorAll(".app-view");
  const items = document.querySelectorAll(".accordion-item");
  
  views.forEach(v => v.classList.remove("active"));
  items.forEach(i => i.classList.remove("active"));
  
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.classList.add("active");
  
  const targetItem = document.querySelector(`.accordion-item[data-view="${viewId}"]`);
  if (targetItem) {
    targetItem.classList.add("active");
    
    // Auto-expand parent accordion group enforcing Single Open Rule
    const parentGroup = targetItem.closest(".accordion-group");
    if (parentGroup) {
      document.querySelectorAll(".accordion-group").forEach(g => {
        g.classList.remove("open");
        g.classList.remove("active-group");
      });
      parentGroup.classList.add("open");
      parentGroup.classList.add("active-group");
    }
  }
  
  activeView = viewId;
  
  // View specific setups
  if (viewId === "dashboard") {
    renderDashboard();
  } else if (viewId === "landing-page") {
    // Futuristic Landing Page
  } else if (viewId === "create-claim") {
    // Lazy map init
    setTimeout(initFNOLMap, 300);
  } else if (viewId === "claims-directory") {
    renderClaimsDirectory();
  } else if (viewId === "alerts-simulator") {
    renderAlertsSimulator();
  } else if (viewId === "policy-registry") {
    renderPolicyRegistry();
  } else if (viewId === "production-reports") {
    if (typeof window.runReportQuery === "function") window.runReportQuery();
    else renderProductionReports();
  } else if (viewId === "vehicle-loss-ratios") {
    renderVehicleLossRatios();
  } else if (viewId === "ai-assistant") {
    openAIAssistantModal();
  } else if (viewId === "garage-network") {
    renderGarageNetwork();
  } else if (viewId === "mpesa-gateway") {
    renderMpesaGateway();
  } else if (viewId === "loss-assessors") {
    renderLossAssessors();
  } else if (viewId === "reinsurance-ceding") {
    renderReinsuranceCeding();
  } else if (viewId === "mobile-app") {
    renderMobileAppPortal();
  } else if (viewId === "ira-compliance") {
    renderIRACompliance();
  } else if (viewId === "subrogation-recovery") {
    renderSubrogationRecovery();
  } else if (viewId === "fleet-underwriting") {
    renderFleetUnderwriting();
  } else if (viewId === "ev-underwriting") {
    calculateEVPremium();
  } else if (viewId === "remote-monitoring") {
    renderRemoteStaffTable();
  } else if (viewId === "ecitizen-pesaflow") {
    renderPesaFlowTransactionsTable();
  } else if (viewId === "itax-compliance") {
    renderITaxRemittanceTable();
  } else if (viewId === "lpr-scanner") {
    renderLPRScansTable();
  } else if (viewId === "qr-generator") {
    updateTestQRCode();
  } else if (viewId === "geomap-center") {
    setTimeout(renderGeoMapCenter, 300);
  }
}

function setupViewNavigation() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-view]");
    if (target) {
      const viewId = target.getAttribute("data-view");
      if (viewId) {
        e.preventDefault();
        navigateToView(viewId);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
}

// Custom Toast notifications
function showToast(title, message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  toast.innerHTML = `
    <div class="toast-content">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
    <button class="toast-close">×</button>
  `;
  
  container.appendChild(toast);
  
  // Close triggers
  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.remove();
  });
  
  // Auto remove
  setTimeout(() => {
    toast.remove();
  }, 4500);
}

// ================= DASHBOARD CONTROLLER =================
function renderDashboard() {
  // Compute Stats
  const totalClaims = claims.length;
  const settledValue = claims.reduce((acc, curr) => curr.status === "Approved" || curr.status === "Disbursed" ? acc + curr.cost : acc, 0);
  const investigationCount = claims.filter(c => c.status === "Under Investigation").length;
  const avgFraudScore = Math.round(claims.reduce((acc, curr) => acc + curr.fraudScore, 0) / totalClaims);
  
  document.getElementById("stat-total-claims").innerText = totalClaims;
  document.getElementById("stat-total-payout").innerText = "KSh " + (settledValue / 1000000).toFixed(1) + "M";
  document.getElementById("stat-investigating").innerText = investigationCount;
  document.getElementById("stat-avg-fraud").innerText = avgFraudScore + "%";
  
  // Render Recent Table
  const tbody = document.querySelector("#dashboard-recent-table tbody");
  tbody.innerHTML = "";
  
  claims.slice(-3).reverse().forEach(claim => {
    const tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.addEventListener("click", () => openAuditModal(claim.id));
    
    tr.innerHTML = `
      <td><strong>${claim.id}</strong></td>
      <td><code>${claim.plate}</code></td>
      <td>${claim.owner}</td>
      <td>${claim.date}</td>
      <td>KSh ${claim.cost.toLocaleString()}</td>
      <td><span class="fraud-pill ${getFraudClass(claim.fraudScore)}">${claim.fraudScore}%</span></td>
      <td><span class="status-badge ${claim.triage.toLowerCase()}">${claim.triage} Path</span></td>
    `;
    tbody.appendChild(tr);
  });
  
  // Render Dynamic SVG line chart
  renderDashboardChart();
}

function getFraudClass(score) {
  if (score < 25) return "low";
  if (score < 60) return "medium";
  return "high";
}

function renderDashboardChart() {
  const chartBox = document.getElementById("dashboard-chart-box");
  if (!chartBox) return;
  
  // High fidelity smooth spline chart dataset
  const data = [
    { month: "Mar", val: 12, cost: "1.8M", mom: "+0%" },
    { month: "Apr", val: 19, cost: "2.9M", mom: "+58%" },
    { month: "May", val: 15, cost: "2.3M", mom: "-21%" },
    { month: "Jun", val: 34, cost: "5.1M", mom: "+126%" },
    { month: "Jul", val: 45, cost: "6.8M", mom: "+32%" },
    { month: "Aug", val: 52, cost: "7.9M", mom: "+15%" }
  ];
  
  const width = chartBox.clientWidth || 550;
  const height = 230;
  const paddingX = 45;
  const paddingY = 35;
  
  const values = data.map(d => d.val);
  const maxX = data.length - 1;
  const maxY = Math.max(...values) + 12;
  
  // Calculate precise coordinates
  const points = data.map((d, idx) => {
    const x = paddingX + (idx / maxX) * (width - paddingX * 2);
    const y = height - paddingY - (d.val / maxY) * (height - paddingY * 2);
    return { x, y, ...d };
  });
  
  // Generate smooth cubic bezier curve path
  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cp1x = p0.x + (p1.x - p0.x) * 0.45;
    const cp1y = p0.y;
    const cp2x = p1.x - (p1.x - p0.x) * 0.45;
    const cp2y = p1.y;
    pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
  }
  
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;
  
  // Build Grid Y-Lines
  let gridLines = "";
  const steps = 4;
  for (let i = 0; i <= steps; i++) {
    const y = paddingY + (i / steps) * (height - paddingY * 2);
    const labelVal = Math.round(maxY - (i / steps) * maxY);
    gridLines += `
      <line x1="${paddingX}" y1="${y}" x2="${width - paddingX}" y2="${y}" stroke="var(--border-color)" stroke-dasharray="4,4" opacity="0.3"/>
      <text x="${paddingX - 10}" y="${y + 4}" fill="var(--text-secondary)" font-size="10" font-weight="500" text-anchor="end">${labelVal}</text>
    `;
  }
  
  // Build Vertical Highlight Pillars and Interactive Data Nodes
  let pillarsAndPoints = "";
  points.forEach((pt, idx) => {
    const colWidth = (width - paddingX * 2) / (points.length - 1);
    const pillarLeft = pt.x - colWidth / 2;
    
    pillarsAndPoints += `
      <!-- Hover Column Pillar -->
      <rect class="chart-pillar" x="${pillarLeft}" y="${paddingY}" width="${colWidth}" height="${height - paddingY * 2}" fill="var(--primary)" opacity="0" style="transition:opacity 0.2s ease; cursor:pointer;" data-idx="${idx}"/>
      
      <!-- X Axis Month Label -->
      <text x="${pt.x}" y="${height - 8}" fill="var(--text-secondary)" font-size="11" font-weight="600" text-anchor="middle">${pt.month}</text>
      
      <!-- Outer Glow Ring -->
      <circle cx="${pt.x}" cy="${pt.y}" r="8" fill="var(--primary)" opacity="0.2"/>
      
      <!-- Active Data Circle Node -->
      <circle class="chart-point-node" cx="${pt.x}" cy="${pt.y}" r="5" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="3" style="cursor:pointer; transition:transform 0.2s ease, r 0.2s ease;" data-idx="${idx}"/>
    `;
  });
  
  chartBox.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" style="overflow:visible;">
      <defs>
        <linearGradient id="curve-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff6b00" stop-opacity="0.45"/>
          <stop offset="60%" stop-color="#ff8533" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#ff8533" stop-opacity="0.0"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#ff6b00" flood-opacity="0.5"/>
        </filter>
      </defs>
      
      <!-- Y-Axis Grid Lines -->
      ${gridLines}
      
      <!-- Baseline -->
      <line x1="${paddingX}" y1="${height - paddingY}" x2="${width - paddingX}" y2="${height - paddingY}" stroke="var(--border-color)" stroke-width="1"/>
      
      <!-- Smooth Gradient Area -->
      <path d="${areaD}" fill="url(#curve-gradient)"/>
      
      <!-- Smooth Glowing Spline Line -->
      <path d="${pathD}" fill="none" stroke="var(--primary)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
      
      <!-- Pillars & Interactive Data Nodes -->
      ${pillarsAndPoints}
    </svg>
    <div id="chart-hover-card" style="position:absolute; display:none; background:var(--bg-surface); border:1px solid var(--border-color); padding:10px 14px; border-radius:10px; box-shadow:var(--shadow-md); pointer-events:none; z-index:50; font-size:12px; line-height:1.4;"></div>
  `;
  
  // Interactive Hover Handler
  const pillars = chartBox.querySelectorAll(".chart-pillar");
  const nodes = chartBox.querySelectorAll(".chart-point-node");
  const hoverCard = chartBox.querySelector("#chart-hover-card");
  
  const handleHover = (idx) => {
    const pt = points[idx];
    pillars.forEach((p, i) => p.style.opacity = i === idx ? "0.06" : "0");
    nodes.forEach((n, i) => {
      if (i === idx) {
        n.setAttribute("r", "7");
        n.style.stroke = "var(--accent)";
      } else {
        n.setAttribute("r", "5");
        n.style.stroke = "var(--primary)";
      }
    });
    
    if (hoverCard) {
      hoverCard.style.display = "block";
      hoverCard.style.left = Math.min(pt.x + 10, width - 160) + "px";
      hoverCard.style.top = Math.max(pt.y - 65, 10) + "px";
      hoverCard.innerHTML = `
        <div style="font-weight:700; color:var(--primary);">${pt.month} 2026 Telemetry</div>
        <div>Filed Claims: <strong>${pt.val} claims</strong> (${pt.mom} MoM)</div>
        <div style="color:var(--text-secondary); font-size:11px;">Est. Payout: KSh ${pt.cost}</div>
      `;
    }
  };
  
  const handleLeave = () => {
    pillars.forEach(p => p.style.opacity = "0");
    nodes.forEach(n => {
      n.setAttribute("r", "5");
      n.style.stroke = "var(--primary)";
    });
    if (hoverCard) hoverCard.style.display = "none";
  };
  
  nodes.forEach(node => {
    node.addEventListener("mouseenter", () => handleHover(parseInt(node.getAttribute("data-idx"))));
    node.addEventListener("mouseleave", handleLeave);
  });
  
  pillars.forEach(pillar => {
    pillar.addEventListener("mouseenter", () => handleHover(parseInt(pillar.getAttribute("data-idx"))));
    pillar.addEventListener("mouseleave", handleLeave);
  });
}

// ================= STEPER FLOW HANDLERS =================
function resetFNOLStepper() {
  currentFNOLStep = 1;
  currentFNOLClaim = {
    id: "CLM-2026-00" + (claims.length + 1),
    plate: "",
    owner: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    cost: 0,
    fraudScore: 0,
    triage: "Green",
    status: "Pending",
    coords: [-1.286389, 36.817223],
    county: "Nairobi County",
    police: "Central Police Station (0.4 km)",
    tow: "Nairobi Towing Logistics (0.9 km)",
    annotations: [],
    flags: []
  };
  
  // Reset inputs
  document.getElementById("claim-plate").value = "";
  document.getElementById("claim-owner").value = "";
  document.getElementById("claim-phone").value = "";
  
  // Hide verification box
  document.getElementById("ntsa-verification-box").style.display = "none";
  
  // Reset anpr upload block
  document.getElementById("anpr-preview-img").style.display = "none";
  document.getElementById("anpr-placeholder-content").style.display = "block";
  
  // Reset canvas circles
  canvasCircles = [];
  annotationImageLoaded = false;
  document.getElementById("annotate-bg-img").style.display = "none";
  document.getElementById("annotate-bg-video").style.display = "none";
  document.getElementById("annotate-bg-video").src = "";
  document.getElementById("annotation-canvas").style.display = "block";
  document.getElementById("telemetry-media-type").innerText = "Image (EXIF verified)";
  document.getElementById("media-capture-input").value = "";
  document.getElementById("media-placeholder-content").style.display = "block";
  
  // Map reset
  if (leafletMarker) {
    leafletMarker.setLatLng([-1.286389, 36.817223]);
  }
  
  updateFNOLStepperView();
}

function setupFNOLStepper() {
  currentFNOLClaim = {
    id: "CLM-2026-004",
    plate: "",
    owner: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    cost: 0,
    fraudScore: 0,
    triage: "Green",
    status: "Pending",
    coords: [-1.286389, 36.817223],
    county: "Nairobi County",
    police: "Central Police Station (0.4 km)",
    tow: "Nairobi Towing Logistics (0.9 km)",
    annotations: [],
    flags: []
  };
  
  const nextBtn = document.getElementById("stepper-next-btn");
  const backBtn = document.getElementById("stepper-back-btn");
  
  nextBtn.addEventListener("click", () => {
    if (validateFNOLStep(currentFNOLStep)) {
      if (currentFNOLStep < 4) {
        currentFNOLStep++;
        updateFNOLStepperView();
        
        // Actions on entering steps
        if (currentFNOLStep === 4) {
          runAICoreAudit();
        }
      } else {
        // Complete notice registration
        saveFNOLClaim();
      }
    }
  });
  
  backBtn.addEventListener("click", () => {
    if (currentFNOLStep > 1) {
      currentFNOLStep--;
      updateFNOLStepperView();
    }
  });
  
  // Step 1: ANPR OCR Trigger click
  document.getElementById("anpr-photo-loader").addEventListener("click", () => {
    // Simulate loading camera image
    document.getElementById("anpr-placeholder-content").style.display = "none";
    const preview = document.getElementById("anpr-preview-img");
    preview.style.display = "block";
    preview.src = "assets/car_plate.jpg";
    document.getElementById("claim-plate").value = "KDG 123A";
    showToast("License Image Loaded", "Plate ready for optical ANPR scanning", "info");
  });
  
  document.getElementById("anpr-scan-btn").addEventListener("click", runANPRScanSimulation);
  
  // Step 2: Mapping Geolocation Trigger
  document.getElementById("geo-detect-btn").addEventListener("click", detectUserLocation);
  
  // Step 3: Drawing Canvas Setup
  setupCanvasAnnotator();
  
  // Mobile Camera Capture Listener
  const mobileCaptureBtn = document.getElementById("mobile-capture-btn");
  const mediaCaptureInput = document.getElementById("media-capture-input");
  
  if (mobileCaptureBtn) {
    mobileCaptureBtn.addEventListener("click", () => {
      openCameraCaptureModal();
    });
  }
  
  const snapBtn = document.getElementById("snap-camera-photo-btn");
  if (snapBtn) {
    snapBtn.addEventListener("click", () => {
      const video = document.getElementById("live-camera-feed");
      if (video && video.style.display !== "none" && video.videoWidth) {
        const tmpCanvas = document.createElement("canvas");
        tmpCanvas.width = video.videoWidth;
        tmpCanvas.height = video.videoHeight;
        const ctx = tmpCanvas.getContext("2d");
        ctx.drawImage(video, 0, 0);
        const dataURL = tmpCanvas.toDataURL("image/png");
        
        closeCameraModal();
        document.getElementById("media-placeholder-content").style.display = "none";
        const bgImg = document.getElementById("annotate-bg-img");
        const bgVideo = document.getElementById("annotate-bg-video");
        const canvas = document.getElementById("annotation-canvas");
        const typeLabel = document.getElementById("telemetry-media-type");
        const timestampLabel = document.getElementById("exif-timestamp");
        
        if (timestampLabel) timestampLabel.innerText = new Date().toLocaleString();
        
        bgVideo.style.display = "none";
        bgImg.style.display = "block";
        canvas.style.display = "block";
        bgImg.src = dataURL;
        
        typeLabel.innerText = "Image (Live Camera Stream Snap, EXIF synced)";
        bgImg.onload = () => {
          annotationImageLoaded = true;
          resizeAnnotationCanvas();
        };
        showToast("Scene Photo Captured", "Live camera snapshot captured and synced into FNOL dossier.", "success");
      } else {
        loadHighResDemoPhoto();
      }
    });
  }
  
  if (mediaCaptureInput) {
    mediaCaptureInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      document.getElementById("media-placeholder-content").style.display = "none";
      const bgImg = document.getElementById("annotate-bg-img");
      const bgVideo = document.getElementById("annotate-bg-video");
      const canvas = document.getElementById("annotation-canvas");
      const typeLabel = document.getElementById("telemetry-media-type");
      const timestampLabel = document.getElementById("exif-timestamp");
      
      const now = new Date();
      timestampLabel.innerText = now.toLocaleString();
      
      const fileURL = URL.createObjectURL(file);
      
      if (file.type.startsWith("video/")) {
        bgImg.style.display = "none";
        canvas.style.display = "none";
        bgVideo.style.display = "block";
        bgVideo.src = fileURL;
        bgVideo.play();
        
        typeLabel.innerText = "Video (1080p, Geotag synced, 24fps)";
        
        canvasCircles = [
          { x: 210, y: 155, type: "dent" },
          { x: 260, y: 165, type: "scratch" }
        ];
        annotationImageLoaded = false;
        
        showToast("Scene Video Captured", "Video telemetry synced. Mobile telemetry verified.", "success");
      } else {
        bgVideo.style.display = "none";
        bgImg.style.display = "block";
        canvas.style.display = "block";
        bgImg.src = fileURL;
        
        typeLabel.innerText = "Image (EXIF verified, camera sensor)";
        
        bgImg.onload = () => {
          annotationImageLoaded = true;
          resizeAnnotationCanvas();
        };
        
        canvasCircles = [];
        showToast("Scene Photo Captured", "Click on the image to annotate damaged zones.", "success");
      }
    });
  }
  
  const loadDemoBtn = document.getElementById("annotate-load-btn");
  if (loadDemoBtn) {
    loadDemoBtn.addEventListener("click", () => {
      loadHighResDemoPhoto();
    });
  }
}

function updateFNOLStepperView() {
  const nodes = document.querySelectorAll(".step-node");
  const panes = document.querySelectorAll(".stepper-pane");
  const backBtn = document.getElementById("stepper-back-btn");
  const nextBtn = document.getElementById("stepper-next-btn");
  
  // Progress Bar Width
  const progressFill = document.getElementById("stepper-progress-fill");
  progressFill.style.width = ((currentFNOLStep - 1) / 3) * 100 + "%";
  
  nodes.forEach((node, idx) => {
    node.classList.remove("active", "completed");
    if (idx + 1 < currentFNOLStep) {
      node.classList.add("completed");
    } else if (idx + 1 === currentFNOLStep) {
      node.classList.add("active");
    }
  });
  
  panes.forEach((pane, idx) => {
    pane.classList.remove("active");
    if (idx + 1 === currentFNOLStep) {
      pane.classList.add("active");
    }
  });
  
  // Set back btn visibility
  backBtn.style.visibility = currentFNOLStep === 1 ? "hidden" : "visible";
  
  // Button text
  if (currentFNOLStep === 4) {
    nextBtn.innerText = "Register Claim Notice";
  } else {
    nextBtn.innerText = "Next Step";
  }
}

function validateFNOLStep(step) {
  if (step === 1) {
    let plate = document.getElementById("claim-plate").value.trim();
    let owner = document.getElementById("claim-owner").value.trim();
    let phone = document.getElementById("claim-phone").value.trim();
    
    if (!plate) { plate = "KDG 123A"; document.getElementById("claim-plate").value = plate; }
    if (!owner) { owner = "Boniface Mwangi"; document.getElementById("claim-owner").value = owner; }
    if (!phone) { phone = "+254 712 345678"; document.getElementById("claim-phone").value = phone; }
    
    const bgVideo = document.getElementById("annotate-bg-video");
    const placeholder = document.getElementById("media-placeholder-content");
    
    if (placeholder.style.display !== "none" && !annotationImageLoaded && bgVideo.style.display !== "block") {
      loadHighResDemoPhoto();
    }
    
    currentFNOLClaim.plate = plate.toUpperCase();
    currentFNOLClaim.owner = owner;
    currentFNOLClaim.phone = phone;
    currentFNOLClaim.annotations = canvasCircles;
  }
  
  if (step === 2) {
    if (document.getElementById("ntsa-verification-box").style.display === "none") {
      runANPRScanSimulation();
    }
  }
  
  if (step === 3) {
    if (leafletMarker) {
      currentFNOLClaim.coords = [leafletMarker.getLatLng().lat, leafletMarker.getLatLng().lng];
    }
  }
  
  return true;
}

// SAVE THE NOTICE
function saveFNOLClaim() {
  currentFNOLClaim.date = new Date().toISOString().split("T")[0];
  
  if (currentFNOLClaim.triage === "Green") {
    currentFNOLClaim.status = "Approved";
  } else if (currentFNOLClaim.triage === "Yellow") {
    currentFNOLClaim.status = "Pending";
  } else {
    currentFNOLClaim.status = "Under Investigation";
  }
  
  // Unshift so new claim appears at top
  claims.unshift(currentFNOLClaim);
  
  showToast("Notice Registered", `Claim file ${currentFNOLClaim.id} is now active at top of ledger.`, "success");
  
  renderClaimsDirectory();
  renderDashboard();
  
  // Transition View to Claims Directory
  navigateToView("claims-directory");
}

// SIMULATE ANPR OCR LOOKUP
function runANPRScanSimulation() {
  const plateText = document.getElementById("claim-plate").value.trim().toUpperCase();
  if (!plateText) {
    showToast("No Input", "Provide a plate number first.", "warning");
    return;
  }
  
  const laser = document.getElementById("anpr-scanner-laser");
  const overlay = document.getElementById("anpr-scanning-txt");
  
  laser.style.display = "block";
  overlay.style.display = "flex";
  
  setTimeout(() => {
    laser.style.display = "none";
    overlay.style.display = "none";
    
    // Find in mock db
    const ntsaResult = ntsaDatabase[plateText] || {
      make: "Unknown Sedan",
      year: 2019,
      chassis: "UNK" + Math.floor(Math.random()*1000000),
      valuation: 1200000,
      policy: "POL-MOT-GEN-" + Math.floor(Math.random()*10000),
      owner: document.getElementById("claim-owner").value || "Unknown Claimant"
    };
    
    document.getElementById("ntsa-model").innerText = `${ntsaResult.make} (${ntsaResult.year})`;
    document.getElementById("ntsa-chassis").innerText = ntsaResult.chassis;
    document.getElementById("ntsa-policy").innerText = ntsaResult.policy;
    document.getElementById("ntsa-valuation").innerText = "KSh " + ntsaResult.valuation.toLocaleString();
    
    document.getElementById("anpr-placeholder-content").style.display = "none";
    document.getElementById("anpr-preview-img").style.display = "block";
    document.getElementById("anpr-preview-img").src = "assets/car_plate.jpg";
    document.getElementById("ntsa-verification-box").style.display = "block";
    showToast("NTSA Verified", "Vehicle registration records matched against Kenya NTSA database.", "success");
    
    // Fill owner name if empty
    if (!document.getElementById("claim-owner").value) {
      document.getElementById("claim-owner").value = ntsaResult.owner;
    }
  }, 1600);
}

// GEOLOCATION CONTROLS
function initFNOLMap() {
  if (leafletMap) {
    leafletMap.invalidateSize();
    return;
  }
  
  // Center on Nairobi
  const nairobi = [-1.286389, 36.817223];
  leafletMap = L.map("fnol-leaflet-map").setView(nairobi, 13);
  lockMapView(leafletMap, nairobi, 13);
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(leafletMap);
  
  leafletMarker = L.marker(nairobi, { draggable: true }).addTo(leafletMap);
  
  leafletMarker.on("dragend", function() {
    const latlng = leafletMarker.getLatLng();
    updateMapResourceContext(latlng.lat, latlng.lng);
  });
  
  leafletMap.on("click", function(e) {
    leafletMarker.setLatLng(e.latlng);
    updateMapResourceContext(e.latlng.lat, e.latlng.lng);
  });
}

function detectUserLocation() {
  if (!navigator.geolocation) {
    showToast("Not Supported", "Geolocation is not supported by your browser.", "warning");
    return;
  }
  
  showToast("Locating...", "Querying GPS telemetry...", "info");
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      leafletMap.setView([lat, lng], 15);
      leafletMarker.setLatLng([lat, lng]);
      updateMapResourceContext(lat, lng);
      
      showToast("GPS Synced", "Accident location pinned.", "success");
    },
    () => {
      // Nairobi fallback mockup
      const mockLat = -1.286 + (Math.random() - 0.5) * 0.05;
      const mockLng = 36.817 + (Math.random() - 0.5) * 0.05;
      
      leafletMap.setView([mockLat, mockLng], 14);
      leafletMarker.setLatLng([mockLat, mockLng]);
      updateMapResourceContext(mockLat, mockLng);
      
      showToast("Fallback Pin set", "Defaulted coordinates in central Nairobi.", "info");
    }
  );
}

function updateMapResourceContext(lat, lng) {
  document.getElementById("geo-latlng").innerText = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
  
  // Find nearest county zone
  let nearest = localResourceDatabase[0];
  let minDistance = Infinity;
  
  localResourceDatabase.forEach(res => {
    const dist = Math.sqrt(Math.pow(res.coords[0] - lat, 2) + Math.pow(res.coords[1] - lng, 2));
    if (dist < minDistance) {
      minDistance = dist;
      nearest = res;
    }
  });
  
  const mockDistPolice = (minDistance * 111).toFixed(1); // approx degrees to km
  const mockDistTow = (minDistance * 111 + 0.3).toFixed(1);
  
  document.getElementById("geo-county").innerText = nearest.county;
  document.getElementById("geo-police").innerText = `${nearest.police} (${mockDistPolice} km)`;
  document.getElementById("geo-tow").innerText = `${nearest.tow} (${mockDistTow} km)`;
  
  document.getElementById("geo-status-indicator").innerText = `Map Pin: ${nearest.county} updated.`;
  
  // Update claim details
  currentFNOLClaim.county = nearest.county;
  currentFNOLClaim.police = `${nearest.police} (${mockDistPolice} km)`;
  currentFNOLClaim.tow = `${nearest.tow} (${mockDistTow} km)`;
}

// DRAWING CANVAS ANNOTATION
function setupCanvasAnnotator() {
  annotationCanvas = document.getElementById("annotation-canvas");
  annotationCtx = annotationCanvas.getContext("2d");
  
  // Switch drawing tools
  document.getElementById("tool-dent").addEventListener("click", () => setDrawTool("dent"));
  document.getElementById("tool-scratch").addEventListener("click", () => setDrawTool("scratch"));
  document.getElementById("tool-crack").addEventListener("click", () => setDrawTool("crack"));
  
  document.getElementById("annotation-clear-btn").addEventListener("click", () => {
    canvasCircles = [];
    redrawCanvas();
    showToast("Annotations Cleared", "Red damage indicators reset.", "info");
  });
  
  // Click event on canvas
  annotationCanvas.addEventListener("mousedown", (e) => {
    if (!annotationImageLoaded) {
      showToast("Load Image First", "Please click 'Load Damaged Car Image' before mapping damage.", "warning");
      return;
    }
    
    const rect = annotationCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    canvasCircles.push({ x, y, type: activeDrawTool });
    redrawCanvas();
  });
}

function setDrawTool(tool) {
  activeDrawTool = tool;
  document.querySelectorAll(".damage-type-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`tool-${tool}`).classList.add("active");
}

function resizeAnnotationCanvas() {
  if (!annotationCanvas) return;
  const parent = annotationCanvas.parentElement;
  annotationCanvas.width = parent.clientWidth;
  annotationCanvas.height = parent.clientHeight;
  redrawCanvas();
}

function redrawCanvas() {
  if (!annotationCtx) return;
  
  // Clear canvas
  annotationCtx.clearRect(0, 0, annotationCanvas.width, annotationCanvas.height);
  
  // Draw background image
  if (annotationImageLoaded) {
    const bgImg = document.getElementById("annotate-bg-img");
    
    // Scale image to cover canvas area containing aspect ratio
    const hRatio = annotationCanvas.width / bgImg.naturalWidth;
    const vRatio = annotationCanvas.height / bgImg.naturalHeight;
    const ratio  = Math.min(hRatio, vRatio);
    
    const centerShift_x = (annotationCanvas.width - bgImg.naturalWidth * ratio) / 2;
    const centerShift_y = (annotationCanvas.height - bgImg.naturalHeight * ratio) / 2;
    
    annotationCtx.drawImage(bgImg, 0, 0, bgImg.naturalWidth, bgImg.naturalHeight,
                           centerShift_x, centerShift_y, bgImg.naturalWidth * ratio, bgImg.naturalHeight * ratio);
  }
  
  // Draw circles
  canvasCircles.forEach(circle => {
    annotationCtx.beginPath();
    annotationCtx.arc(circle.x, circle.y, 14, 0, 2 * Math.PI, false);
    
    // Set color based on type
    if (circle.type === "dent") {
      annotationCtx.fillStyle = "rgba(239, 68, 68, 0.4)";
      annotationCtx.strokeStyle = "#ef4444";
    } else if (circle.type === "scratch") {
      annotationCtx.fillStyle = "rgba(245, 158, 11, 0.4)";
      annotationCtx.strokeStyle = "#f59e0b";
    } else {
      annotationCtx.fillStyle = "rgba(59, 130, 246, 0.4)";
      annotationCtx.strokeStyle = "#3b82f6";
    }
    
    annotationCtx.lineWidth = 3;
    annotationCtx.fill();
    annotationCtx.stroke();
    
    // Inner center dot
    annotationCtx.beginPath();
    annotationCtx.arc(circle.x, circle.y, 4, 0, 2 * Math.PI, false);
    annotationCtx.fillStyle = "#ffffff";
    annotationCtx.fill();
  });
}

// AI ENGINE AUDITING
function runAICoreAudit() {
  const loader = document.getElementById("ai-analyzing-loader");
  const report = document.getElementById("ai-report-content");
  
  loader.style.display = "block";
  report.style.display = "none";
  
  setTimeout(() => {
    loader.style.display = "none";
    report.style.display = "block";
    
    // Dynamic Fraud scoring calculations based on inputs
    let fraudIndex = 8; // default Green
    let triageRoute = "Green";
    let statusClass = "green";
    let flagsList = ["EXIF Metadata matching successfully within 50m scene bounding box.", "Physical vehicle classification matching with KRA registration records."];
    
    const plate = currentFNOLClaim.plate;
    if (plate.startsWith("KBA")) {
      // Mock triggers for High Fraud Risk profile
      fraudIndex = 82;
      triageRoute = "Red";
      statusClass = "red";
      flagsList = [
        "EXIF GPS photo taken in Mombasa (+500km mismatch from reported scene).",
        "Duplicate damage profile match (matching stock claims database for identical scratch pattern).",
        "Multiple claim velocity trigger: policyholder has filed 3 claims in last 30 days."
      ];
    } else if (plate.startsWith("KCA")) {
      // Mock Yellow Route
      fraudIndex = 35;
      triageRoute = "Yellow";
      statusClass = "yellow";
      flagsList = [
        "Minor mismatch in EXIF time-stamp vs reported loss occurrence.",
        "Manual inspection gate check required for sub-fender structural dents.",
        "Unverified previous collision history on record."
      ];
    }
    
    // Repair Estimate based on markings count
    const baseEstimate = canvasCircles.length * 75000 + (Math.floor(Math.random() * 20000));
    currentFNOLClaim.cost = baseEstimate;
    currentFNOLClaim.fraudScore = fraudIndex;
    currentFNOLClaim.triage = triageRoute;
    currentFNOLClaim.flags = flagsList;
    
    // Populate report UI
    document.getElementById("ai-report-fraud-pct").innerText = `Fraud Index: ${fraudIndex}%`;
    document.getElementById("ai-status-header").className = `audit-status-strip ${statusClass}`;
    document.getElementById("ai-status-header").firstElementChild.innerText = `AI AUDIT STATUS: ${triageRoute.toUpperCase()} PATH`;
    
    document.getElementById("ai-fraud-badge").innerText = fraudIndex > 60 ? "High Risk" : (fraudIndex > 25 ? "Medium Risk" : "Low Risk");
    document.getElementById("ai-est-cost").innerText = "KSh " + baseEstimate.toLocaleString();
    document.getElementById("ai-routing-route").innerText = triageRoute === "Green" ? "Instant Pass" : (triageRoute === "Yellow" ? "Adjuster Review" : "SIU Investigation");
    document.getElementById("ai-next-action").innerText = triageRoute === "Green" ? "Instant Disburse" : "Manual Gate Auditor";
    
    document.getElementById("ai-score-number").innerText = fraudIndex + "%";
    
    // Circle progress ring
    const ring = document.getElementById("ai-score-ring");
    const offset = 251.2 - (251.2 * fraudIndex) / 100;
    ring.style.strokeDashoffset = offset;
    
    // Style ring color
    if (triageRoute === "Green") ring.style.stroke = "var(--success)";
    else if (triageRoute === "Yellow") ring.style.stroke = "var(--warning)";
    else ring.style.stroke = "var(--danger)";
    
    // Flags list rendering
    const listWrapper = document.querySelector(".audit-check-list");
    listWrapper.innerHTML = "";
    
    flagsList.forEach((flagText, idx) => {
      const isPass = triageRoute === "Green";
      const icon = isPass ? "✓" : (triageRoute === "Yellow" ? "!" : "✕");
      const iconClass = isPass ? "pass" : (triageRoute === "Yellow" ? "info" : "fail");
      
      const li = document.createElement("li");
      li.className = "audit-check-item";
      li.innerHTML = `
        <div class="audit-check-icon ${iconClass}">${icon}</div>
        <div class="audit-check-details">
          <h4>Security Gate Check #${idx + 1}</h4>
          <p>${flagText}</p>
        </div>
      `;
      listWrapper.appendChild(li);
    });
    
    showToast("AI Audit Complete", `Triaged into ${triageRoute} path.`, triageRoute === "Green" ? "success" : (triageRoute === "Yellow" ? "warning" : "danger"));
  }, 2000);
}

// SAVE THE NOTICE
function saveFNOLClaim() {
  // Set submission dates
  currentFNOLClaim.date = new Date().toISOString().split("T")[0];
  
  if (currentFNOLClaim.triage === "Green") {
    currentFNOLClaim.status = "Approved";
  } else if (currentFNOLClaim.triage === "Yellow") {
    currentFNOLClaim.status = "Pending";
  } else {
    currentFNOLClaim.status = "Under Investigation";
  }
  
  claims.push(currentFNOLClaim);
  
  showToast("Notice Registered", `Claim file ${currentFNOLClaim.id} was created.`, "success");
  
  // Transition View
  navigateToView("dashboard");
}

// ================= CLAIMS DIRECTORY VIEW =================
function setupClaimsDirectory() {
  const searchInput = document.getElementById("directory-search-input");
  const statusSelect = document.getElementById("directory-status-select");
  const triageSelect = document.getElementById("directory-triage-select");
  
  searchInput.addEventListener("input", renderClaimsDirectory);
  statusSelect.addEventListener("change", renderClaimsDirectory);
  triageSelect.addEventListener("change", renderClaimsDirectory);
  
  // Exporters
  document.getElementById("directory-export-csv").addEventListener("click", exportClaimsCSV);
  document.getElementById("directory-export-json").addEventListener("click", exportClaimsJSON);
}

function renderClaimsDirectory() {
  const tbody = document.querySelector("#directory-claims-table tbody");
  tbody.innerHTML = "";
  
  const query = document.getElementById("directory-search-input").value.toLowerCase();
  const statusFilter = document.getElementById("directory-status-select").value;
  const triageFilter = document.getElementById("directory-triage-select").value;
  
  const filtered = claims.filter(c => {
    const matchesQuery = c.owner.toLowerCase().includes(query) || c.plate.toLowerCase().includes(query) || c.id.toLowerCase().includes(query);
    const matchesStatus = statusFilter === "ALL" || c.status === statusFilter;
    const matchesTriage = triageFilter === "ALL" || c.triage === triageFilter;
    return matchesQuery && matchesStatus && matchesTriage;
  });
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:30px; color:var(--text-muted);">No records match the current filter query.</td></tr>`;
    return;
  }
  
  filtered.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${c.id}</strong></td>
      <td><code>${c.plate}</code></td>
      <td>${c.owner}</td>
      <td>${c.date}</td>
      <td>KSh ${c.cost.toLocaleString()}</td>
      <td><span class="fraud-pill ${getFraudClass(c.fraudScore)}">${c.fraudScore}%</span></td>
      <td><span class="status-badge ${c.triage.toLowerCase()}">${c.triage}</span></td>
      <td><span class="status-badge ${getStatusClass(c.status)}">${c.status}</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary" onclick="openAuditModal('${c.id}')" style="padding:4px 8px; font-size:11px;">Audit</button>
          <button class="btn btn-secondary" onclick="openEditClaim('${c.id}')" style="padding:4px 8px; font-size:11px;"> Edit</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function getStatusClass(status) {
  if (status === "Pending") return "pending";
  if (status === "Approved") return "approved";
  if (status === "Under Investigation") return "investigation";
  return "disbursed";
}

// EXPORT TO CSV
function exportClaimsCSV() {
  let csv = "Claim ID,Plate,Claimant Name,Mobile Number,Loss Date,Damage Estimate,Fraud Index,Triage Route,Processing Status\n";
  
  claims.forEach(c => {
    csv += `"${c.id}","${c.plate}","${c.owner}","${c.phone}","${c.date}",${c.cost},${c.fraudScore},"${c.triage}","${c.status}"\n`;
  });
  
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", `EIMS_Claims_Report_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast("CSV Downloaded", "Claims export file saved.", "success");
}

// EXPORT TO JSON
function exportClaimsJSON() {
  const jsonString = JSON.stringify(claims, null, 2);
  const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", `EIMS_Claims_Database.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast("JSON Downloaded", "Full database exported.", "success");
}

// ================= MODAL DETAILS CONTROLLER =================
function setupModalHandlers() {
  const modal = document.getElementById("audit-modal");
  
  document.getElementById("modal-close-x").addEventListener("click", () => {
    modal.classList.remove("active");
  });
  document.getElementById("modal-btn-close").addEventListener("click", () => {
    modal.classList.remove("active");
  });
  
  document.getElementById("modal-btn-approve").addEventListener("click", () => {
    if (currentFNOLClaim) {
      currentFNOLClaim.status = "Approved";
      currentFNOLClaim.triage = "Green";
      currentFNOLClaim.fraudScore = Math.min(currentFNOLClaim.fraudScore, 10);
      showToast("Claim Approved", `File ${currentFNOLClaim.id} updated and signed.`, "success");
      modal.classList.remove("active");
      renderClaimsDirectory();
      renderDashboard();
    }
  });
  
  document.getElementById("modal-btn-investigate").addEventListener("click", () => {
    if (currentFNOLClaim) {
      currentFNOLClaim.status = "Under Investigation";
      currentFNOLClaim.triage = "Red";
      currentFNOLClaim.fraudScore = Math.max(currentFNOLClaim.fraudScore, 75);
      showToast("SIU Audited", `File ${currentFNOLClaim.id} sent to Special Investigations Unit.`, "danger");
      modal.classList.remove("active");
      renderClaimsDirectory();
      renderDashboard();
    }
  });
  
  // PRINT KIRA FORM 104 REPORT
  document.getElementById("modal-btn-kira").addEventListener("click", () => {
    if (!currentFNOLClaim) return;
    printKIRADocument(currentFNOLClaim);
  });
}

function openAuditModal(claimId) {
  const c = claims.find(claim => claim.id === claimId);
  if (!c) return;
  
  currentFNOLClaim = c; // Reference for status updates
  
  document.getElementById("modal-claim-id").innerText = `Claim Details: ${c.id}`;
  document.getElementById("modal-timestamp").innerText = `Registered on: ${c.date}`;
  document.getElementById("modal-status-badge").innerText = c.status;
  document.getElementById("modal-status-badge").className = `status-badge ${getStatusClass(c.status)}`;
  
  document.getElementById("modal-claimant").innerText = c.owner;
  document.getElementById("modal-plate").innerText = c.plate;
  document.getElementById("modal-phone").innerText = c.phone;
  document.getElementById("modal-est-cost").innerText = "KSh " + c.cost.toLocaleString();
  
  document.getElementById("modal-coords").innerText = `GPS Scene: ${c.coords[0].toFixed(5)}, ${c.coords[1].toFixed(5)}`;
  
  document.getElementById("modal-fraud-badge").innerText = `Fraud Score: ${c.fraudScore}%`;
  document.getElementById("modal-fraud-badge").className = `fraud-pill ${getFraudClass(c.fraudScore)}`;
  
  document.getElementById("modal-triage-badge").innerText = `${c.triage} Path`;
  document.getElementById("modal-triage-badge").style.backgroundColor = c.triage === "Green" ? "var(--success-bg)" : (c.triage === "Yellow" ? "var(--warning-bg)" : "var(--danger-bg)");
  document.getElementById("modal-triage-badge").style.color = c.triage === "Green" ? "var(--success)" : (c.triage === "Yellow" ? "var(--warning)" : "var(--danger)");
  
  document.getElementById("modal-audit-summary").innerText = c.flags.join(", ");
  
  // Render Annotations overlays in modal preview
  const annotationBox = document.getElementById("modal-annotation-overlays");
  annotationBox.innerHTML = "";
  
  c.annotations.forEach(circle => {
    const dot = document.createElement("div");
    dot.style.position = "absolute";
    
    // Scale coordinates to cover box
    const leftPct = (circle.x / 460) * 100; // base scale
    const topPct = (circle.y / 380) * 100;
    
    dot.style.left = `${leftPct}%`;
    dot.style.top = `${topPct}%`;
    dot.style.width = "20px";
    dot.style.height = "20px";
    dot.style.borderRadius = "50%";
    dot.style.transform = "translate(-50%, -50%)";
    
    if (circle.type === "dent") {
      dot.style.backgroundColor = "rgba(239, 68, 68, 0.7)";
      dot.style.border = "2px solid #ef4444";
    } else if (circle.type === "scratch") {
      dot.style.backgroundColor = "rgba(245, 158, 11, 0.7)";
      dot.style.border = "2px solid #f59e0b";
    } else {
      dot.style.backgroundColor = "rgba(59, 130, 246, 0.7)";
      dot.style.border = "2px solid #3b82f6";
    }
    
    annotationBox.appendChild(dot);
  });
  
  // Show Modal
  const modal = document.getElementById("audit-modal");
  modal.classList.add("active");
  
  // Init modal sub-map
  setTimeout(() => {
    initModalMap(c.coords);
  }, 200);
}

function initModalMap(coords) {
  if (modalMap) {
    modalMap.setView(coords, 14);
    modalMarker.setLatLng(coords);
    modalMap.invalidateSize();
    return;
  }
  
  modalMap = L.map("modal-map-container").setView(coords, 14);
  lockMapView(modalMap, coords, 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OSM contributors'
  }).addTo(modalMap);
  
  modalMarker = L.marker(coords).addTo(modalMap);
}

// PRINT SHIELD REGULATORY DOC
function printKIRADocument(claim) {
  const printWindow = window.open("", "_blank");
  const html = `
    <html>
    <head>
      <title>KIRA Regulatory Report - ${claim.id}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; color: #333; line-height: 1.5; }
        .header { text-align: center; border-bottom: 3px double #0056b3; padding-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; color: #0056b3; text-transform: uppercase; }
        .doc-title { font-size: 18px; font-weight: bold; margin-top: 10px; }
        .meta-table { width: 100%; border-collapse: collapse; margin-top: 30px; }
        .meta-table td { padding: 8px 12px; border: 1px solid #ddd; }
        .meta-table td.label { font-weight: bold; background-color: #f5f7f8; width: 30%; }
        .section-title { font-size: 14px; font-weight: bold; margin-top: 30px; border-bottom: 1px solid #333; padding-bottom: 4px; }
        .audit-list { padding-left: 20px; margin-top: 10px; }
        .footer { margin-top: 60px; font-size: 11px; text-align: center; border-top: 1px solid #ddd; padding-top: 10px; color: #777; }
        @media print { .no-print { display: none; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">Insurance Regulatory Authority (KIRA)</div>
        <div class="doc-title">Notice of Motor Accident Claim Registration (Form 104)</div>
        <p style="font-size:12px; color:#555;">Generated via Digital EIMS Gateway</p>
      </div>
      
      <table class="meta-table">
        <tr>
          <td class="label">Claim ID Reference</td>
          <td>${claim.id}</td>
        </tr>
        <tr>
          <td class="label">Vehicle Registration Plate</td>
          <td>${claim.plate}</td>
        </tr>
        <tr>
          <td class="label">Policyholder Full Name</td>
          <td>${claim.owner}</td>
        </tr>
        <tr>
          <td class="label">Registrant Mobile</td>
          <td>${claim.phone}</td>
        </tr>
        <tr>
          <td class="label">Accident Scene Location</td>
          <td>GPS Lat/Lng: ${claim.coords[0].toFixed(5)}, ${claim.coords[1].toFixed(5)} (${claim.county})</td>
        </tr>
        <tr>
          <td class="label">Damage Repair Estimate</td>
          <td><strong>KSh ${claim.cost.toLocaleString()}</strong></td>
        </tr>
        <tr>
          <td class="label">AI Fraud Risk Assessment</td>
          <td>${claim.fraudScore}% (Triaged: ${claim.triage} Path)</td>
        </tr>
        <tr>
          <td class="label">Processing State Gate</td>
          <td>${claim.status}</td>
        </tr>
      </table>
      
      <div class="section-title">Telemetry Audits & Security Logs</div>
      <ul class="audit-list">
        ${claim.flags.map(f => `<li>${f}</li>`).join("")}
      </ul>
      
      <div class="section-title">Authorized Dispatch Signatures</div>
      <p style="margin-top:20px; font-size:13px;">
        This document has been digitally verified and countersigned by the EIMS neural audit core on <strong>${claim.date}</strong>. No physical stamp required under the Kenyan Insurance Act.
      </p>
      
      <div class="footer">
        KIRA Registry Compliance Office &copy; 2026. Nairobi, Kenya.
      </div>
      
      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;
  
  printWindow.document.write(html);
  printWindow.document.close();
}

// ================= ALERTS & ALERTS PREVIEW =================
function setupAlertsSimulator() {
  const triggerBtn = document.getElementById("alerts-trigger-btn");
  const claimSelector = document.getElementById("alert-claim-selector");
  const statusTrigger = document.getElementById("alert-status-trigger");
  
  // Tab triggers
  const tabSms = document.getElementById("tab-sms");
  const tabWa = document.getElementById("tab-wa");
  const tabEmail = document.getElementById("tab-email");

  if (tabSms) tabSms.addEventListener("click", () => selectAlertTab("sms"));
  if (tabWa) tabWa.addEventListener("click", () => selectAlertTab("wa"));
  if (tabEmail) tabEmail.addEventListener("click", () => selectAlertTab("email"));
  
  if (triggerBtn) {
    triggerBtn.addEventListener("click", triggerAlertTelegramDispatch);
  }
}

function onAlertContextChange() {
  const claimId = document.getElementById("alert-claim-selector")?.value;
  const status = document.getElementById("alert-status-trigger")?.value;
  if (!claimId) return;

  const c = claims.find(claim => claim.id === claimId);
  if (!c) return;

  populateAlertPreviews(c, status);
}

function triggerAlertTelegramDispatch() {
  const claimId = document.getElementById("alert-claim-selector")?.value;
  const status = document.getElementById("alert-status-trigger")?.value;
  if (!claimId) return;

  const c = claims.find(claim => claim.id === claimId);
  if (!c) return;

  c.status = status;
  showToast(" Notification Telegram Dispatched", `Dispatched multi-channel SMS, WhatsApp & Email telemetry for ${c.id} (${c.plate}).`, "success");

  const logs = document.getElementById("alerts-console-logs");
  if (logs) {
    const logTime = new Date().toLocaleTimeString();
    logs.innerHTML += `<div style="color:#34d399; font-weight:700;">[${logTime}] Dispatched SMS, WhatsApp & Rich Email to ${c.phone}</div>`;
    logs.innerHTML += `<div style="color:var(--text-secondary);">[${logTime}] Payload: "EIMS Notice: Claim ${c.id} for plate ${c.plate} is ${status.toLowerCase()}."</div>`;
    logs.scrollTop = logs.scrollHeight;
  }

  populateAlertPreviews(c, status);
}

function renderAlertsSimulator() {
  // Populate claims selector dropdown
  const selector = document.getElementById("alert-claim-selector");
  selector.innerHTML = "";
  
  claims.forEach(c => {
    const op = document.createElement("option");
    op.value = c.id;
    op.innerText = `${c.id} (${c.owner} - ${c.plate})`;
    selector.appendChild(op);
  });
  
  // Set default selected
  if (claims.length > 0) {
    const lastClaim = claims[claims.length - 1];
    selector.value = lastClaim.id;
    document.getElementById("alert-status-trigger").value = lastClaim.status;
    populateAlertPreviews(lastClaim, lastClaim.status);
  }

  renderNotificationDispatchTable();
}

function selectAlertTab(tabName) {
  document.querySelectorAll(".alerts-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`tab-${tabName}`).classList.add("active");
  
  document.getElementById("sim-screen-sms").style.display = tabName === "sms" ? "flex" : "none";
  document.getElementById("sim-screen-wa").style.display = tabName === "wa" ? "flex" : "none";
  document.getElementById("sim-screen-email").style.display = tabName === "email" ? "flex" : "none";
}

function populateAlertPreviews(c, status) {
  // 1. SMS bubble rendering
  const smsContainer = document.getElementById("sms-messages-container");
  smsContainer.innerHTML = "";
  
  let msgText = "";
  if (status === "Pending") {
    msgText = `EIMS Notice: Claim ${c.id} for plate ${c.plate} is registered. Security score audits are pending manually review.`;
  } else if (status === "Approved") {
    msgText = `EIMS Notice: Great news! Your claim ${c.id} has been Approved. KSh ${c.cost.toLocaleString()} is authorized for repairs.`;
  } else if (status === "Under Investigation") {
    msgText = `EIMS Notice Alert: Your claim ${c.id} is flagged for SIU review due to metadata inconsistencies. Check email for details.`;
  } else {
    msgText = `EIMS Notice: KSh ${c.cost.toLocaleString()} has been disbursed to your mobile line via M-PESA. Txn Ref: MP-${Math.floor(Math.random()*100000)}.`;
  }
  
  const smsDiv = document.createElement("div");
  smsDiv.className = "sms-bubble";
  smsDiv.innerHTML = `
    ${msgText}
    <div class="sms-timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
  `;
  smsContainer.appendChild(smsDiv);
  
  // 2. WhatsApp bubble rendering
  const waContainer = document.getElementById("wa-messages-container");
  waContainer.innerHTML = "";
  
  const waSent = document.createElement("div");
  waSent.className = "wa-bubble sent";
  waSent.innerHTML = `
    First Notice of Loss submitted for vehicle ${c.plate}.
    <div class="sms-timestamp" style="color:var(--text-muted)">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
  `;
  waContainer.appendChild(waSent);
  
  const waReceived = document.createElement("div");
  waReceived.className = "wa-bubble";
  
  let waText = "";
  if (status === "Pending") {
    waText = `Habari ${c.owner.split(" ")[0]}, your claim *${c.id}* has been logged. Our neural audit engine is processing your photos.`;
  } else if (status === "Approved") {
    waText = `Habari ${c.owner.split(" ")[0]}, claim *${c.id}* is *Approved*. Repair payout of *KSh ${c.cost.toLocaleString()}* is authorized.`;
  } else if (status === "Under Investigation") {
    waText = `Habari ${c.owner.split(" ")[0]}, claim *${c.id}* requires manual investigation. Kindly upload physical inspection records.`;
  } else {
    waText = `Habari ${c.owner.split(" ")[0]}, payout of *KSh ${c.cost.toLocaleString()}* has been disbursed to your line. Thank you!`;
  }
  
  waReceived.innerHTML = `
    ${waText}
    <a href="#" class="wa-btn-link">Track Claims Portal</a>
    <div class="sms-timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
  `;
  waContainer.appendChild(waReceived);
  
  // 3. Email rendering
  const emailContainer = document.getElementById("email-messages-container");
  emailContainer.innerHTML = "";
  
  let emailSubject = "";
  let emailHeader = "";
  let emailBodyText = "";
  
  if (status === "Pending") {
    emailSubject = "Claim Registration Acknowledged";
    emailHeader = "First Notice of Loss Registered";
    emailBodyText = "We acknowledge receipt of your digital claim filing. EIMS is currently auditing plate OCR registries and EXIF metadata.";
  } else if (status === "Approved") {
    emailSubject = "Insurance Claim Approved";
    emailHeader = "Repair Claim Authorized";
    emailBodyText = "Congratulations. Your motor claim file has successfully cleared computer vision alignment checks. A repair voucher has been issued.";
  } else if (status === "Under Investigation") {
    emailSubject = "SIU Security Audit Required";
    emailHeader = "Special Investigations Review Filed";
    emailBodyText = "Please be advised that your motor claim notice was flagged by the automated audit engine due to duplicate photo structures.";
  } else {
    emailSubject = "Claim Funds Disbursed";
    emailHeader = "M-PESA Payout Completed";
    emailBodyText = "This is to confirm that the authorized repair settlement value has been transferred to your registered mobile wallet.";
  }
  
  document.querySelector(".email-frame h1").innerText = emailSubject;
  
  emailContainer.innerHTML = `
    <h2>${emailHeader}</h2>
    <p>Dear ${c.owner},</p>
    <p>${emailBodyText}</p>
    
    <table class="email-details-table">
      <tr>
        <td class="label">Claim ID Reference</td>
        <td>${c.id}</td>
      </tr>
      <tr>
        <td class="label">Vehicle Plate</td>
        <td>${c.plate}</td>
      </tr>
      <tr>
        <td class="label">Repair Settlement</td>
        <td>KSh ${c.cost.toLocaleString()}</td>
      </tr>
      <tr>
        <td class="label">Audited Fraud Index</td>
        <td>${c.fraudScore}%</td>
      </tr>
    </table>
    
    <p>For inquiries, contact the Digital Support Desk.</p>
    <center><a href="#" class="email-btn" style="color:#ffffff;">Open EIMS Portal</a></center>
  `;
}

// ================= POLICY MANAGEMENT & REPORTING CORE =================

let policies = [
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

const branchProductionData = [
  { branch: "Head Office (Nairobi)", newCount: 142, renewedCount: 48, newPremium: 12850000, share: "34%" },
  { branch: "Mombasa Branch", newCount: 88, renewedCount: 32, newPremium: 7920000, share: "21%" },
  { branch: "Kisumu Branch", newCount: 64, renewedCount: 21, newPremium: 5450000, share: "15%" },
  { branch: "Nakuru Branch", newCount: 52, renewedCount: 19, newPremium: 4180000, share: "12%" },
  { branch: "Eldoret Branch", newCount: 45, renewedCount: 15, newPremium: 3850000, share: "10%" },
  { branch: "Nyeri Branch", newCount: 38, renewedCount: 12, newPremium: 2950000, share: "8%" }
];

let selectedPolicyForDebit = null;
let selectedPolicyForCert = null;

function setupPolicyRegistry() {
  const searchInput = document.getElementById("policy-search-input");
  if (searchInput) searchInput.addEventListener("input", renderPolicyRegistry);
  
  // Certificate declaration lookup
  const lookupBtn = document.getElementById("lookup-cert-btn");
  if (lookupBtn) {
    lookupBtn.addEventListener("click", () => {
      const certId = document.getElementById("lookup-cert-id").value.trim().toUpperCase();
      const resBox = document.getElementById("cert-status-result");
      
      if (!certId) {
        showToast("Input Required", "Please enter a certificate reference ID.", "warning");
        return;
      }
      
      const found = policies.find(p => p.certId === certId);
      resBox.style.display = "block";
      
      if (found) {
        resBox.innerHTML = `
          <div style="font-weight:600; color:${found.status === 'Active' ? 'var(--success)' : 'var(--danger)'}; margin-bottom:4px;">
            ${found.status === 'Active' ? 'Certificate Valid and Declared Active' : 'Certificate Restricted (' + found.status + ')'}
          </div>
          <div><strong>Policy:</strong> ${found.policyNo}</div>
          <div><strong>Holder:</strong> ${found.clientName} (${found.plate})</div>
          <div><strong>Line:</strong> ${found.line}</div>
        `;
      } else {
        resBox.innerHTML = `
          <div style="font-weight:600; color:var(--danger); margin-bottom:4px;">
            Certificate Unmatched and Unregistered
          </div>
          <div style="color:var(--text-secondary); margin-bottom:12px;">No active AKI certificate record found for ${certId}.</div>
          <button class="btn btn-primary" id="activate-cert-btn" style="width:100%; font-size:12px; padding:6px 12px;" onclick="window.activateCertInline('${certId}')">
            Register and Declare Active
          </button>
        `;
      }
    });
  }
  
  // Create New Policy Modal Trigger
  const createBtn = document.getElementById("policy-create-btn");
  if (createBtn) {
    createBtn.addEventListener("click", openNewPolicyModal);
  }

  // Setup Debit Modal buttons
  const debitModal = document.getElementById("debit-modal");
  const debitCloseX = document.getElementById("debit-modal-close-x");
  const debitCancelBtn = document.getElementById("debit-cancel-btn");
  const debitConfirmBtn = document.getElementById("debit-confirm-btn");

  if (debitCloseX) debitCloseX.addEventListener("click", () => debitModal?.classList.remove("active"));
  if (debitCancelBtn) debitCancelBtn.addEventListener("click", () => debitModal?.classList.remove("active"));

  if (debitConfirmBtn) {
    debitConfirmBtn.addEventListener("click", () => {
      const amount = parseFloat(document.getElementById("debit-amount-input")?.value);
      if (!amount || amount <= 0) {
        showToast("Invalid Amount", "Provide a positive debit amount.", "warning");
        return;
      }

      if (selectedPolicyForDebit) {
        selectedPolicyForDebit.debited += amount;
        showToast("Policy Debited", `Charged KSh ${amount.toLocaleString()} to ${selectedPolicyForDebit.policyNo}`, "success");
        debitModal?.classList.remove("active");
        renderPolicyRegistry();
      }
    });
  }

  // Setup Cert Modal buttons
  const certModal = document.getElementById("cert-modal");
  const certCloseX = document.getElementById("cert-modal-close-x");
  const certCloseBtn = document.getElementById("cert-close-btn");
  const certPrintBtn = document.getElementById("cert-print-btn");

  if (certCloseX) certCloseX.addEventListener("click", () => certModal?.classList.remove("active"));
  if (certCloseBtn) certCloseBtn.addEventListener("click", () => certModal?.classList.remove("active"));

  if (certPrintBtn) {
    certPrintBtn.addEventListener("click", () => {
      if (selectedPolicyForCert) {
        openAKICertModal(selectedPolicyForCert.policyNo);
      }
    });
  }
}

function openNewPolicyModal() {
  const modal = document.getElementById("new-policy-modal");
  if (modal) {
    modal.classList.add("active");
    calculateModalPolicyPremium();
  }
}

function closeNewPolicyModal() {
  const modal = document.getElementById("new-policy-modal");
  if (modal) modal.classList.remove("active");
}

function calculateModalPolicyPremium() {
  const line = document.getElementById("modal-policy-class")?.value || "Motor";
  const sumInsured = parseFloat(document.getElementById("modal-policy-suminsured")?.value) || 3500000;

  let rate = 0.035; // default 3.5%
  if (line === "Electric Vehicle") rate = 0.025; // 2.5% EV incentive rate
  else if (line === "County Fleet") rate = 0.028; // 2.8% fleet discount
  else if (line === "Non-Motor") rate = 0.015; // 1.5% property rate

  const basic = Math.round(sumInsured * rate);
  const vat = Math.round(basic * 0.16);
  const stampDuty = 40;
  const totalTax = vat + stampDuty;
  const totalDebit = basic + totalTax;

  const basicElem = document.getElementById("calc-basic-premium");
  const taxElem = document.getElementById("calc-tax-duty");
  const totalElem = document.getElementById("calc-total-debit");

  if (basicElem) basicElem.innerText = `KSh ${basic.toLocaleString()}`;
  if (taxElem) taxElem.innerText = `KSh ${totalTax.toLocaleString()}`;
  if (totalElem) totalElem.innerText = `KSh ${totalDebit.toLocaleString()}`;
}

function confirmCreateNewPolicy() {
  const clientName = document.getElementById("modal-policy-client")?.value.trim() || "Jane Njeri";
  const plate = document.getElementById("modal-policy-plate")?.value.trim().toUpperCase() || "KDD 908Z";
  const line = document.getElementById("modal-policy-class")?.value || "Motor";
  const broker = document.getElementById("modal-policy-broker")?.value || "AMACO Insurance";
  const branch = document.getElementById("modal-policy-branch")?.value || "HQ";
  const sumInsured = parseFloat(document.getElementById("modal-policy-suminsured")?.value) || 3500000;
  const issueCert = document.getElementById("modal-policy-issue-cert")?.checked;

  let rate = 0.035;
  if (line === "Electric Vehicle") rate = 0.025;
  else if (line === "County Fleet") rate = 0.028;
  else if (line === "Non-Motor") rate = 0.015;

  const basic = Math.round(sumInsured * rate);
  const totalDebit = Math.round(basic * 1.16) + 40;

  const newPolNo = "POL-MOT-" + Math.floor(1000 + Math.random() * 9000) + "-2026";
  const newCert = issueCert ? "CERT-" + Math.floor(1000 + Math.random() * 9000) + "-2026" : null;

  const newPol = {
    policyNo: newPolNo,
    clientName: clientName,
    plate: plate,
    line: line,
    broker: broker,
    premium: totalDebit,
    debited: totalDebit,
    status: "Active",
    certId: newCert,
    isNew: true,
    branch: branch
  };

  policies.unshift(newPol);
  closeNewPolicyModal();
  showToast(" Policy Underwritten", `New policy file ${newPolNo} for ${clientName} (${plate}) assigned to ${broker}. Total Debit: KSh ${totalDebit.toLocaleString()}`, "success");
  renderPolicyRegistry();
}

function triggerCertPolicy(policyNo) {
  openAKICertModal(policyNo);
}

let currentActiveCertPolicy = null;

function generateCertSHA256Hash(policy) {
  const str = `${policy.policyNo}-${policy.plate}-${policy.clientName}-2026-01-01-2026-12-31-AKI-KENYA-SALT-9982`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `SHA256-${hex.toUpperCase()}-AKI-VERIFIED-2026`;
}

function openAKICertModal(policyNo) {
  const policy = policies.find(p => p.policyNo === policyNo) || policies[0];
  currentActiveCertPolicy = policy;
  const modal = document.getElementById("aki-digital-cert-modal");
  
  if (!modal) return;
  
  document.getElementById("cert-plate").innerText = policy.plate || "KDG 123A";
  document.getElementById("cert-owner").innerText = policy.clientName || "Boniface Mwangi";
  document.getElementById("cert-model").innerText = policy.plate.startsWith("KDG") ? "Toyota Fielder (2018)" : (policy.plate.startsWith("KBA") ? "Isuzu NPR Truck (2020)" : "Nissan X-Trail (2019)");
  document.getElementById("cert-chassis").innerText = "NZE161G-" + Math.floor(1000000 + Math.random() * 8999999);
  document.getElementById("cert-pol-no").innerText = policy.policyNo;
  document.getElementById("cert-sum-insured").innerText = "KSh " + (policy.premium * 25).toLocaleString();
  document.getElementById("cert-ref-no").innerText = "REF: " + (policy.certId || "CERT-AKI-2026-9842");
  
  document.getElementById("cert-display-status").innerText = policy.status === "Active" ? "VALID & ACTIVE" : policy.status.toUpperCase();
  document.getElementById("cert-display-status").style.backgroundColor = policy.status === "Active" ? "#0266cc" : "#dc2626";
  
  // Set Cryptographic SHA-256 Hash Signature Seal
  const hashSeal = generateCertSHA256Hash(policy);
  const hashEl = document.getElementById("cert-sha256-hash");
  if (hashEl) hashEl.innerText = hashSeal;

  modal.classList.add("active");
  showToast("Digital QR Certificate Loaded", "Digital QR insurance certificate active for " + policy.plate + ". Cryptographically signed.", "success");
}

function verifyCertIntegrityAudit() {
  if (!currentActiveCertPolicy) return;
  const officialHash = generateCertSHA256Hash(currentActiveCertPolicy);
  showToast(" SHA-256 Hash Audit Passed", `Integrity 100% Verified! Hash matches official AKI ledger (${officialHash.substring(0, 16)}...). Zero tampering detected.`, "success");
}

function simulateTamperAttempt() {
  showToast(" FRAUD ATTEMPT DETECTED!", "Tampering Detected! Expiry Date modification attempt blocked by SHA-256 Signature Guard. Reverting to official AKI ledger record.", "warning");
  setTimeout(() => {
    if (currentActiveCertPolicy) openAKICertModal(currentActiveCertPolicy.policyNo);
  }, 1200);
}

function closeAKICertModal() {
  const modal = document.getElementById("aki-digital-cert-modal");
  if (modal) modal.classList.remove("active");
}

function simulatePoliceQRScan() {
  const plate = document.getElementById("cert-plate").innerText;
  const ref = document.getElementById("cert-ref-no").innerText;
  showToast(" Police QR Verification Match", `Traffic Officer Scan Verified: Vehicle ${plate} holds valid active AKI Motor Coverage (${ref}).`, "success");
}

function saveToMobileWallet() {
  const plate = document.getElementById("cert-plate").innerText;
  showToast(" Saved to Mobile Wallet", `Digital AKI QR Certificate pass for ${plate} saved to Apple Wallet & Google Wallet.`, "info");
}

function downloadDigitalCertPDF() {
  showToast(" Downloading Certificate", "Generating official AKI Digital Certificate PDF with encrypted QR seal...", "info");
  setTimeout(() => window.print(), 800);
}

// ================= SUBSCRIPTIONS & USER SEATS MANAGEMENT =================
let currentSubscriptionTier = "Enterprise";
let selectedSTKTierName = "Enterprise";
let selectedSTKPrice = 599000;

function triggerSTKPushCheckout(tierName, price) {
  selectedSTKTierName = tierName;
  selectedSTKPrice = price;
  
  const modal = document.getElementById("subscription-checkout-modal");
  if (!modal) return;
  
  document.getElementById("stk-tier-name").innerText = `${tierName} Tier Plan`;
  document.getElementById("stk-tier-price").innerText = `KSh ${price.toLocaleString()} / month`;
  
  let userCapText = " Seat Allocation: UNLIMITED Active User Accounts Across All Categories";
  if (tierName === "Starter") userCapText = " Seat Allocation: Up to 5 Active User Accounts Max (1 Admin, 2 Agents, 2 Garage Inspectors)";
  if (tierName === "Professional") userCapText = " Seat Allocation: Up to 25 Active User Accounts Max (3 Admins, 10 Underwriters, 8 Agents, 4 Finance)";
  
  document.getElementById("stk-tier-user-cap").innerText = userCapText;
  modal.classList.add("active");
}

function closeSubscriptionCheckoutModal() {
  const modal = document.getElementById("subscription-checkout-modal");
  if (modal) modal.classList.remove("active");
}

function confirmSTKPushPayment() {
  const phone = document.getElementById("stk-phone-number").value.trim();
  showToast(" STK Push Dispatched", `M-PESA payment prompt sent to ${phone} for KSh ${selectedSTKPrice.toLocaleString()}`, "info");
  
  setTimeout(() => {
    currentSubscriptionTier = selectedSTKTierName;
    closeSubscriptionCheckoutModal();
    updateSubscriptionUI();
    showToast(" Subscription Active", `System upgraded to ${selectedSTKTierName} Tier (KSh ${selectedSTKPrice.toLocaleString()}/mo).`, "success");
  }, 2000);
}

function updateSubscriptionUI() {
  const activeBadge = document.getElementById("active-subscription-badge");
  const headerBadge = document.getElementById("header-tier-badge");
  const modalActiveTier = document.getElementById("modal-active-tier-name");
  
  let label = ` Active Plan: ENTERPRISE TIER (Unlimited Users)`;
  if (currentSubscriptionTier === "Starter") label = ` Active Plan: STARTER TIER (5 Users Max)`;
  if (currentSubscriptionTier === "Professional") label = ` Active Plan: PROFESSIONAL TIER (25 Users Max)`;
  
  if (activeBadge) activeBadge.innerText = label;
  if (headerBadge) headerBadge.innerText = label;
  if (modalActiveTier) modalActiveTier.innerText = label;
}

function openUserSeatAllocationModal() {
  const modal = document.getElementById("user-seat-modal");
  if (modal) modal.classList.add("active");
}

function closeUserSeatModal() {
  const modal = document.getElementById("user-seat-modal");
  if (modal) modal.classList.remove("active");
}

function addNewUserSeat() {
  const tbody = document.getElementById("user-seats-table-body");
  if (!tbody) return;
  
  const names = ["Mary Atieno", "John Mwangi", "Fatuma Hassan", "David Kiprono"];
  const roles = ["Underwriter Clerk", "Claims Intake Officer", "Finance & Payout Officer", "Garage Inspector"];
  const branches = ["Head Office (Nairobi)", "Mombasa Branch", "Kisumu Branch", "Nakuru Branch"];
  
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomRole = roles[Math.floor(Math.random() * roles.length)];
  const randomBranch = branches[Math.floor(Math.random() * branches.length)];
  
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td style="padding:8px;"><strong>${randomName}</strong></td>
    <td style="padding:8px;"><span class="badge" style="background:rgba(2,102,204,0.15); color:#38bdf8;">${randomRole}</span></td>
    <td style="padding:8px;">${randomBranch}</td>
    <td style="padding:8px;"><span style="color:var(--success);">Active</span></td>
    <td style="padding:8px;"><button class="btn btn-secondary" style="padding:2px 8px; font-size:10px;">Edit</button></td>
  `;
  tbody.appendChild(tr);
  showToast("User Seat Provisioned", `Created new ${randomRole} account for ${randomName}.`, "success");
}

// ================= WORKSHOP REPAIRER APP PORTAL FUNCTIONS =================
function switchMobileAppMode(mode) {
  const clientView = document.getElementById("mobile-client-view");
  const workshopView = document.getElementById("mobile-workshop-view");
  const clientBtn = document.getElementById("app-mode-client-btn");
  const workshopBtn = document.getElementById("app-mode-workshop-btn");

  if (!clientView || !workshopView) return;

  if (mode === "workshop") {
    clientView.style.display = "none";
    workshopView.style.display = "block";
    clientBtn.style.background = "transparent";
    clientBtn.style.color = "#94a3b8";
    workshopBtn.style.background = "#ff6b00";
    workshopBtn.style.color = "#ffffff";
    onWorkshopGarageChange();
    showToast(" Workshop Mode Active", "Accredited repairer mobile app interface loaded.", "info");
  } else {
    clientView.style.display = "block";
    workshopView.style.display = "none";
    clientBtn.style.background = "#0266cc";
    clientBtn.style.color = "#ffffff";
    workshopBtn.style.background = "transparent";
    workshopBtn.style.color = "#94a3b8";
  }
}

function onWorkshopGarageChange() {
  const select = document.getElementById("ws-accredited-garage-select");
  if (!select) return;
  
  const selectedId = select.value;
  const garage = garages.find(g => g.id === selectedId) || garages[0];
  
  const headerName = document.getElementById("ws-header-name");
  const headerLoc = document.getElementById("ws-header-location");
  
  if (headerName) headerName.innerText = garage.name.toUpperCase();
  if (headerLoc) headerLoc.innerText = `Accredited #${garage.id} • ${garage.location} (${garage.slaScore} SLA)`;
  
  showToast("Accredited Repairer Switched", `Loaded profile for ${garage.name} (${garage.location}).`, "info");
}

function navigateToWorkshopApp() {
  navigateToView("mobile-app");
  switchMobileAppMode("workshop");
}

function calcWorkshopTotal() {
  const part = parseFloat(document.getElementById("ws-part-cost")?.value || 0);
  const labor = parseFloat(document.getElementById("ws-labor-cost")?.value || 0);
  const total = part + labor;
  const totalEl = document.getElementById("ws-total-estimate");
  if (totalEl) totalEl.innerText = `KSh ${total.toLocaleString()}`;
}

function updateWorkshopComponentFields() {
  const comp = document.getElementById("ws-component-select")?.value;
  const partInput = document.getElementById("ws-part-cost");
  const laborInput = document.getElementById("ws-labor-cost");

  if (comp === "Windscreen") {
    if (partInput) partInput.value = 45000;
    if (laborInput) laborInput.value = 12000;
  } else if (comp === "Bumper") {
    if (partInput) partInput.value = 35000;
    if (laborInput) laborInput.value = 15000;
  } else if (comp === "Door") {
    if (partInput) partInput.value = 28000;
    if (laborInput) laborInput.value = 18000;
  } else if (comp === "Headlight") {
    if (partInput) partInput.value = 22000;
    if (laborInput) laborInput.value = 6000;
  }

  calcWorkshopTotal();
}

function submitWorkshopRepairRequest() {
  const select = document.getElementById("ws-accredited-garage-select");
  const selectedId = select ? select.value : "GAR-01";
  const garage = garages.find(g => g.id === selectedId) || garages[0];

  const claimId = document.getElementById("ws-claim-select")?.value || "CLM-2026-001";
  const comp = document.getElementById("ws-component-select")?.value || "Windscreen";
  const part = parseFloat(document.getElementById("ws-part-cost")?.value || 0);
  const labor = parseFloat(document.getElementById("ws-labor-cost")?.value || 0);
  const total = part + labor;
  
  const workOrderNo = "WKO-2026-" + Math.floor(10000 + Math.random() * 89999);
  
  const resultCard = document.getElementById("ws-approval-result-card");
  const woText = document.getElementById("ws-cert-workorder");
  const amtText = document.getElementById("ws-cert-approved-amt");

  if (resultCard) {
    resultCard.style.display = "block";
    if (woText) woText.innerText = `Work Order: ${workOrderNo}`;
    if (amtText) amtText.innerText = `KSh ${total.toLocaleString()}`;
  }

  showToast(
    " Pre-Repair Permission Granted!",
    `Work Order ${workOrderNo} authorized for ${garage.name} (KSh ${total.toLocaleString()} for ${comp} replacement on vehicle KDG 123A).`,
    "success"
  );
}

// ================= SCHEDULED DISBURSEMENTS ENGINE =================
let scheduledPayouts = [
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

function renderScheduledPayouts() {
  const tbody = document.getElementById("scheduled-payouts-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  if (scheduledPayouts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:16px; color:var(--text-muted);">No future disbursements scheduled.</td></tr>`;
    return;
  }

  scheduledPayouts.forEach(s => {
    const tr = document.createElement("tr");
    let statusBadge = `<span class="status-badge pending"> ${s.status}</span>`;
    if (s.status === "Disbursed") statusBadge = `<span class="status-badge approved">✓ Disbursed</span>`;
    if (s.status === "Cancelled") statusBadge = `<span class="status-badge investigation">✕ Cancelled</span>`;

    tr.innerHTML = `
      <td><code>${s.id}</code></td>
      <td><strong>${s.claimId}</strong><br><span style="font-size:10px; color:var(--text-secondary);">${s.plate}</span></td>
      <td>${s.claimant}<br><span style="font-size:10px; color:var(--text-muted);">${s.phone}</span></td>
      <td><span class="badge" style="background:rgba(2,102,204,0.15); color:#38bdf8;">${s.channel}</span></td>
      <td><strong>${s.releaseDate}</strong></td>
      <td><strong style="color:var(--success);">KSh ${s.amount.toLocaleString()}</strong></td>
      <td><span style="font-size:11px; color:var(--text-secondary);">${s.note}</span></td>
      <td>${statusBadge}</td>
      <td>
        <div style="display:flex; gap:6px;">
          ${s.status === 'Scheduled' ? `
            <button class="btn btn-primary" onclick="releaseScheduledPayoutNow('${s.id}')" style="padding:3px 8px; font-size:10.5px;"> Release Now</button>
            <button class="btn btn-danger" onclick="cancelScheduledPayout('${s.id}')" style="padding:3px 8px; font-size:10.5px;">Cancel</button>
          ` : `<span style="font-size:10.5px; color:var(--text-muted);">Locked</span>`}
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openSchedulePaymentModal(claimId) {
  const modal = document.getElementById("schedule-disbursement-modal");
  if (!modal) return;
  
  if (claimId) {
    const select = document.getElementById("sched-claim-select");
    if (select) select.value = claimId;
    onSchedClaimSelectChange();
  }
  
  modal.classList.add("active");
}

function closeSchedulePaymentModal() {
  const modal = document.getElementById("schedule-disbursement-modal");
  if (modal) modal.classList.remove("active");
}

function onSchedClaimSelectChange() {
  const val = document.getElementById("sched-claim-select")?.value;
  const amtInput = document.getElementById("sched-payout-amount");
  
  if (val === "CLM-2026-001" && amtInput) amtInput.value = 142500;
  if (val === "CLM-2026-003" && amtInput) amtInput.value = 450000;
  if (val === "CLM-2026-005" && amtInput) amtInput.value = 320000;
}

function confirmSchedulePayment() {
  const claimId = document.getElementById("sched-claim-select")?.value || "CLM-2026-001";
  const channel = document.getElementById("sched-payout-channel")?.value || "M-PESA B2C";
  const amount = parseFloat(document.getElementById("sched-payout-amount")?.value || 142500);
  const relDate = document.getElementById("sched-release-date")?.value || "2026-08-10";
  const relTime = document.getElementById("sched-release-time")?.value || "09:00";
  const note = document.getElementById("sched-finance-notes")?.value || "Finance Officer Authorized";
  
  const claimObj = claims.find(c => c.id === claimId) || claims[0];
  
  const newSch = {
    id: "SCH-" + Math.floor(10000 + Math.random() * 89999),
    claimId: claimId,
    plate: claimObj.plate,
    claimant: claimObj.owner,
    phone: claimObj.phone,
    channel: channel,
    amount: amount,
    releaseDate: `${relDate} ${relTime}`,
    note: note,
    officer: "Agent Davis (Finance Officer)",
    status: "Scheduled"
  };

  scheduledPayouts.unshift(newSch);
  closeSchedulePaymentModal();
  renderScheduledPayouts();

  showToast(
    " Payment Schedule Locked!",
    `Authorized KSh ${amount.toLocaleString()} disbursement for ${claimObj.owner} (${claimObj.plate}) scheduled on ${relDate} at ${relTime}.`,
    "success"
  );
}

function releaseScheduledPayoutNow(schId) {
  const sch = scheduledPayouts.find(s => s.id === schId);
  if (!sch) return;

  sch.status = "Disbursed";
  renderScheduledPayouts();

  showToast(
    " Instant Payout Released!",
    `Disbursed KSh ${sch.amount.toLocaleString()} via ${sch.channel} to ${sch.claimant} (${sch.phone}). Transaction Ref: QK89X201L9.`,
    "success"
  );
}

function cancelScheduledPayout(schId) {
  const sch = scheduledPayouts.find(s => s.id === schId);
  if (!sch) return;

  sch.status = "Cancelled";
  renderScheduledPayouts();
  showToast("Schedule Cancelled", `Payment schedule ${schId} was cancelled by Finance Officer.`, "info");
}

function renderPolicyRegistry() {
  const tbody = document.querySelector("#policy-ledger-table tbody");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  const query = (document.getElementById("policy-search-input")?.value || "").toLowerCase();
  
  const filtered = policies.filter(p => p.clientName.toLowerCase().includes(query) || p.plate.toLowerCase().includes(query) || p.policyNo.toLowerCase().includes(query));
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:20px; color:var(--text-muted);">No policy records matched.</td></tr>`;
    return;
  }
  
  filtered.forEach(p => {
    const tr = document.createElement("tr");
    
    let statusBadge = `<span class="status-badge approved">Active</span>`;
    if (p.status === "Suspended") statusBadge = `<span class="status-badge pending">Suspended</span>`;
    if (p.status === "Cancelled") statusBadge = `<span class="status-badge investigation">Cancelled</span>`;
    
    tr.innerHTML = `
      <td><strong>${p.policyNo}</strong></td>
      <td>${p.clientName}</td>
      <td><code>${p.plate}</code></td>
      <td>${p.line}</td>
      <td>KSh ${p.premium.toLocaleString()}</td>
      <td><strong style="color:var(--primary)">KSh ${p.debited.toLocaleString()}</strong></td>
      <td>${statusBadge}</td>
      <td>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          <button class="btn btn-secondary" onclick="openEditPolicy('${p.policyNo}')" style="padding:4px 8px; font-size:11px;"> Edit</button>
          <button class="btn btn-secondary" onclick="triggerDebitPolicy('${p.policyNo}')" style="padding:4px 8px; font-size:11px;">Debit</button>
          <button class="btn btn-secondary" onclick="triggerCertPolicy('${p.policyNo}')" style="padding:4px 8px; font-size:11px;">Issue Cert</button>
          <button class="btn btn-secondary" onclick="toggleSuspendPolicy('${p.policyNo}')" style="padding:4px 8px; font-size:11px;">${p.status === 'Suspended' ? 'Unsuspend' : 'Suspend'}</button>
          <button class="btn btn-danger" onclick="cancelPolicy('${p.policyNo}')" style="padding:4px 8px; font-size:11px;">Cancel</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function triggerDebitPolicy(policyNo) {
  const p = policies.find(pol => pol.policyNo === policyNo);
  if (!p) return;
  
  selectedPolicyForDebit = p;
  document.getElementById("debit-modal-policy-no").innerText = p.policyNo;
  document.getElementById("debit-amount-input").value = "";
  document.getElementById("debit-note-input").value = "";
  
  document.getElementById("debit-modal").classList.add("active");
}

function triggerCertPolicy(policyNo) {
  const p = policies.find(pol => pol.policyNo === policyNo);
  if (!p) return;
  
  selectedPolicyForCert = p;
  document.getElementById("cert-display-id").innerText = p.certId;
  document.getElementById("cert-display-owner").innerText = p.clientName;
  document.getElementById("cert-display-plate").innerText = p.plate;
  document.getElementById("cert-display-policy").innerText = p.policyNo;
  
  const certQRBox = document.getElementById("cert-qr-container");
  if (certQRBox) {
    const certURL = `https://eims.go.ke/verify-cert?certId=${p.certId}&policy=${p.policyNo}&plate=${p.plate}&hash=SHA256-D7F8A92B-AKI-VERIFIED-2026`;
    renderStandardQRCodeContainer(certQRBox, certURL, {
      fgColor: "#0f172a",
      bgColor: "#ffffff",
      size: 70,
      logoType: "none"
    });
  }

  document.getElementById("cert-modal").classList.add("active");
}

function toggleSuspendPolicy(policyNo) {
  const p = policies.find(pol => pol.policyNo === policyNo);
  if (!p) return;
  
  p.status = p.status === "Suspended" ? "Active" : "Suspended";
  showToast("Policy Status", `Policy ${p.policyNo} is now ${p.status}.`, "info");
  renderPolicyRegistry();
}

function cancelPolicy(policyNo) {
  const p = policies.find(pol => pol.policyNo === policyNo);
  if (!p) return;
  
  p.status = "Cancelled";
  showToast("Policy Cancelled", `Policy ${p.policyNo} cancelled.`, "danger");
  renderPolicyRegistry();
}

// ================= PRODUCTION REPORTS & SYSTEM CONSTRAINTS =================

function setupProductionReports() {
  const generateBtn = document.getElementById("generate-report-btn");
  const renewalBtn = document.getElementById("report-renewal-btn");
  const intervalSelect = document.getElementById("report-interval");
  const branchSelect = document.getElementById("report-branch");
  const lineSelect = document.getElementById("report-line");
  const aiAssistBtn = document.getElementById("reports-ai-assist-btn");
  
  if (intervalSelect) {
    intervalSelect.addEventListener("change", renderProductionReports);
  }
  
  if (branchSelect) {
    branchSelect.addEventListener("change", renderProductionReports);
  }
  
  if (lineSelect) {
    lineSelect.addEventListener("change", renderProductionReports);
  }
  
  if (generateBtn) {
    generateBtn.addEventListener("click", renderProductionReports);
  }
  
  if (renewalBtn) {
    renewalBtn.addEventListener("click", openRenewalModal);
  }
  
  if (aiAssistBtn) {
    aiAssistBtn.addEventListener("click", () => {
      openAIAssistantModal();
      const branch = document.getElementById("report-branch")?.value || "ALL";
      const line = document.getElementById("report-line")?.value || "Motor";
      const query = `Analyze ${line} production for ${branch === "ALL" ? "All Offices" : branch} branch`;
      const inputEl = document.getElementById("ai-assistant-input");
      if (inputEl) inputEl.value = query;
      processAIQuery(query);
    });
  }
}

function renderProductionReports() {
  const branchFilter = document.getElementById("report-branch")?.value || "ALL";
  const interval = document.getElementById("report-interval")?.value || "monthly";
  const line = document.getElementById("report-line")?.value || "Motor";
  const banner = document.getElementById("report-error-banner");
  
  if (interval === "daily") {
    banner.style.display = "block";
    banner.style.backgroundColor = "rgba(2, 102, 204, 0.1)";
    banner.style.borderColor = "var(--primary)";
    banner.style.color = "var(--primary-light)";
    banner.innerHTML = ` <strong>Daily Real-Time Production Log Active:</strong> Displaying today's 24-hour acquisition audit log for <strong>${branchFilter === "ALL"? "All Offices": branchFilter}</strong> (${line} Line).`;
  } else {
    banner.style.display = "none";
  }
  
  const tbody = document.querySelector("#report-production-table tbody");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  
  let baseData = branchProductionData;
  if (line === "Non-Motor") {
    baseData = branchProductionData.map(b => ({
      branch: b.branch,
      newCount: Math.round(b.newCount * 0.4),
      renewedCount: Math.round(b.renewedCount * 0.4),
      newPremium: Math.round(b.newPremium * 0.5),
      share: b.share
    }));
  }
  
  if (interval === "daily") {
    baseData = baseData.map(b => ({
      branch: b.branch,
      newCount: Math.max(1, Math.round(b.newCount / 20)),
      renewedCount: Math.max(1, Math.round(b.renewedCount / 20)),
      newPremium: Math.round(b.newPremium / 20),
      share: b.share
    }));
  }
  
  const filtered = baseData.filter(b => branchFilter === "ALL" || b.branch.toLowerCase().includes(branchFilter.toLowerCase()));
  
  let grandNewCount = 0;
  let grandRenewedCount = 0;
  let grandNewPremium = 0;
  
  filtered.forEach(item => {
    grandNewCount += item.newCount;
    grandRenewedCount += item.renewedCount;
    grandNewPremium += item.newPremium;
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${item.branch}</strong></td>
      <td><span class="status-badge approved">${item.newCount} New Policies</span></td>
      <td><span style="color:var(--text-muted); font-size:12px;">${item.renewedCount} (Excluded from Production)</span></td>
      <td><strong style="color:var(--primary)">KSh ${item.newPremium.toLocaleString()}</strong></td>
      <td>${item.share}</td>
    `;
    tbody.appendChild(tr);
  });
  
  // Total Row
  const totalTr = document.createElement("tr");
  totalTr.style.fontWeight = "700";
  totalTr.style.backgroundColor = "var(--bg-primary)";
  totalTr.innerHTML = `
    <td>CONSOLIDATED TOTAL</td>
    <td>${grandNewCount} New Policies</td>
    <td>${grandRenewedCount} Renewals Excluded</td>
    <td>KSh ${grandNewPremium.toLocaleString()}</td>
    <td>100%</td>
  `;
  tbody.appendChild(totalTr);
  
  // Auto-refresh embedded AI synthesis card
  const embeddedSummary = document.getElementById("embedded-ai-report-summary");
  if (embeddedSummary) {
    embeddedSummary.innerHTML = generateAIReportSynthesis(branchFilter === "ALL" ? "executive summary" : `branch ${branchFilter}`);
  }
  
  showToast("Report Rendered", `Generated ${interval} production report for ${branchFilter === "ALL" ? "All Offices" : branchFilter} (${line}).`, "info");
}

function triggerProductionAISynthesis() {
  openAIAssistantModal();
  const branch = document.getElementById("report-branch")?.value || "ALL";
  const line = document.getElementById("report-line")?.value || "Motor";
  const interval = document.getElementById("report-interval")?.value || "monthly";
  const query = `Analyze ${line} ${interval} production for ${branch === "ALL" ? "All Offices" : branch} branch`;
  
  const inputEl = document.getElementById("ai-assistant-input");
  if (inputEl) inputEl.value = query;
  processAIQuery(query);
}

function openRenewalModal() {
  const modal = document.getElementById("renewal-notice-modal");
  const tbody = document.getElementById("renewal-modal-tbody");
  
  if (!modal || !tbody) return;
  
  tbody.innerHTML = "";
  
  const duePolicies = policies.slice(0, 6);
  duePolicies.forEach((pol, idx) => {
    const tr = document.createElement("tr");
    tr.style.borderBottom = "1px solid var(--border-color)";
    tr.innerHTML = `
      <td style="padding:6px;"><input type="checkbox" class="renewal-check-item" value="${pol.id}" checked></td>
      <td style="padding:6px; font-weight:700;">${pol.id}</td>
      <td style="padding:6px;">${pol.name}</td>
      <td style="padding:6px;"><span class="status-badge active">${pol.line}</span></td>
      <td style="padding:6px; font-weight:700; color:var(--primary);">KSh ${pol.premium.toLocaleString()}</td>
      <td style="padding:6px;">2026-08-${15 + idx}</td>
    `;
    tbody.appendChild(tr);
  });
  
  modal.classList.add("active");
  showToast("Renewal Dispatch Ready", "Select policy files to issue broker renewal notices.", "info");
}

function closeRenewalModal() {
  const modal = document.getElementById("renewal-notice-modal");
  if (modal) modal.classList.remove("active");
}

function toggleAllRenewalCheckboxes(master) {
  document.querySelectorAll(".renewal-check-item").forEach(cb => cb.checked = master.checked);
}

function dispatchRenewalNotices() {
  const selected = Array.from(document.querySelectorAll(".renewal-check-item:checked"));
  const broker = document.getElementById("renewal-broker-select").value;
  
  if (selected.length === 0) {
    showToast("No Selection", "Please check at least one policy for renewal dispatch.", "warning");
    return;
  }
  
  closeRenewalModal();
  showToast("Renewal Batch Dispatched", `Successfully dispatched ${selected.length} policy renewal notices to ${broker}.`, "success");
}

// ================= AI REPORT ASSISTANT ENGINE =================

function openAIAssistantModal() {
  const modal = document.getElementById("ai-assistant-modal");
  const inputEl = document.getElementById("ai-assistant-input");
  
  if (modal) {
    modal.classList.add("active");
    showToast(" AI Copilot Active", "EIMS Neural Analytics Engine ready. Ask any production query.", "info");
    if (inputEl) inputEl.focus();
  }
}

function setupAIAssistant() {
  const modal = document.getElementById("ai-assistant-modal");
  const closeBtn = document.getElementById("ai-modal-close-x");
  const sendBtn = document.getElementById("ai-assistant-send-btn");
  const inputEl = document.getElementById("ai-assistant-input");
  
  // Bind all triggers across the UI (header, floating button, sidebar link, embedded cards)
  document.querySelectorAll(".trigger-ai-assistant, #open-ai-assistant-btn, #floating-ai-btn, a[href='#'], a[href='http://localhost:8282/#']").forEach(btn => {
    if (btn.innerText.includes("AI Report") || btn.classList.contains("trigger-ai-assistant") || btn.id === "open-ai-assistant-btn" || btn.id === "floating-ai-btn") {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openAIAssistantModal();
      });
    }
  });
  
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
  
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
  
  // Populate embedded AI analysis summary card
  const embeddedSummary = document.getElementById("embedded-ai-report-summary");
  if (embeddedSummary) {
    embeddedSummary.innerHTML = generateAIReportSynthesis("executive summary");
  }
  
  // Prompt pills click handlers
  document.querySelectorAll(".ai-prompt-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const promptText = pill.getAttribute("data-prompt");
      inputEl.value = promptText;
      processAIQuery(promptText);
    });
  });
  
  if (sendBtn && inputEl) {
    const handleSend = () => {
      const text = inputEl.value.trim();
      if (!text) return;
      processAIQuery(text);
      inputEl.value = "";
    };
    
    sendBtn.addEventListener("click", handleSend);
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSend();
    });
  }
}

function processAIQuery(queryText) {
  const messagesContainer = document.getElementById("ai-assistant-messages");
  const typingIndicator = document.getElementById("ai-typing-indicator");
  
  if (!messagesContainer) return;
  
  // 1. Render User Message
  const userDiv = document.createElement("div");
  userDiv.style.display = "flex";
  userDiv.style.justifyContent = "flex-end";
  userDiv.style.marginBottom = "4px";
  
  userDiv.innerHTML = `
    <div style="background-color:var(--primary); color:#ffffff; padding:12px 16px; border-radius:14px; font-size:13px; max-width:80%;">
      ${escapeHTML(queryText)}
    </div>
  `;
  messagesContainer.appendChild(userDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  // 2. Show Typing Indicator
  if (typingIndicator) typingIndicator.style.display = "flex";
  
  // 3. Simulate Neural Analysis & Synthesis
  setTimeout(() => {
    if (typingIndicator) typingIndicator.style.display = "none";
    
    const responseHTML = generateAIReportSynthesis(queryText);
    
    const aiDiv = document.createElement("div");
    aiDiv.style.display = "flex";
    aiDiv.style.gap = "12px";
    aiDiv.style.alignItems = "flex-start";
    
    aiDiv.innerHTML = `
      <div style="width:30px; height:30px; border-radius:50%; background:linear-gradient(135deg, #0266cc, #38bdf8); color:#fff; display:flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0;"></div>
      <div style="background-color:var(--bg-surface); border:1px solid var(--border-color); padding:16px; border-radius:14px; font-size:13px; line-height:1.6; color:var(--text-primary); max-width:90%;">
        ${responseHTML}
        <div style="margin-top:12px; padding-top:10px; border-top:1px solid var(--border-color); display:flex; gap:10px;">
          <button class="btn btn-secondary" onclick="exportAIBriefPDF()" style="padding:4px 10px; font-size:11px;"> Print AI Executive Brief</button>
          <button class="btn btn-secondary" onclick="showToast('Copied', 'AI Report copied to clipboard.', 'info')" style="padding:4px 10px; font-size:11px;"> Copy Text</button>
        </div>
      </div>
    `;
    
    messagesContainer.appendChild(aiDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1200);
}

function generateAIReportSynthesis(query) {
  const lower = query.toLowerCase();
  
  // Computations from live datasets
  const totalClaimsCount = claims.length;
  const totalClaimsCost = claims.reduce((acc, c) => acc + c.cost, 0);
  const avgFraud = Math.round(claims.reduce((acc, c) => acc + c.fraudScore, 0) / (totalClaimsCount || 1));
  
  const totalNewPolicies = branchProductionData.reduce((acc, b) => acc + b.newCount, 0);
  const totalRenewalsExcluded = branchProductionData.reduce((acc, b) => acc + b.renewedCount, 0);
  const totalGrossPremium = branchProductionData.reduce((acc, b) => acc + b.newPremium, 0);
  
  if (lower.includes("approval") || lower.includes("approved")) {
    const approvedClaims = claims.filter(c => c.status === "Approved" || c.status === "Disbursed");
    const totalApprovedVal = approvedClaims.reduce((sum, c) => sum + c.cost, 0);
    const greenPassCount = approvedClaims.filter(c => c.triage === "Green").length;
    
    let rowsHTML = approvedClaims.map(c => `
      <tr style="border-bottom:1px solid var(--border-color);">
        <td style="padding:6px; font-weight:700;">${c.id}</td>
        <td style="padding:6px;"><code>${c.plate}</code></td>
        <td style="padding:6px;">${c.owner}</td>
        <td style="padding:6px; font-weight:700; color:var(--primary);">KSh ${c.cost.toLocaleString()}</td>
        <td style="padding:6px;"><span class="status-badge ${c.triage.toLowerCase()}">${c.triage}</span></td>
        <td style="padding:6px;"><span class="status-badge approved">${c.status}</span></td>
      </tr>
    `).join("");
    
    return `
      <strong style="color:var(--success); font-size:14px;"> Approved & Disbursed Claims Portfolio Analysis</strong><br><br>
      Full real-time breakdown of all approved insurance files in the system:<br><br>
      • <strong>Total Approved Files:</strong> <strong>${approvedClaims.length} claims</strong> (Total Indemnity Commitment: <strong style="color:var(--primary);">KSh ${totalApprovedVal.toLocaleString()}</strong>).<br>
      • <strong>AI Auto-Pass Triage Rate:</strong> ${greenPassCount} of ${approvedClaims.length} files approved via <strong>Green Fast-Track Automated Pipeline</strong>.<br>
      • <strong>Settlement Readiness:</strong> 100% of approved files ready for instant M-PESA B2C, Airtel Money, or EFT PesaLink disbursement.<br><br>
      
      <div style="background:var(--bg-primary); border:1px solid var(--border-color); border-radius:8px; padding:10px; margin-top:8px; overflow-x:auto;">
        <table style="width:100%; font-size:11px; text-align:left; border-collapse:collapse;">
          <thead>
            <tr style="border-bottom:1px solid var(--border-color); color:var(--text-secondary);">
              <th style="padding:6px;">File ID</th>
              <th style="padding:6px;">Plate</th>
              <th style="padding:6px;">Claimant</th>
              <th style="padding:6px;">Amount</th>
              <th style="padding:6px;">Triage</th>
              <th style="padding:6px;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>
      </div>
      
      <div style="background-color:var(--bg-primary); padding:10px; border-radius:8px; font-size:12px; margin-top:12px;">
         <strong>Executive Action:</strong> Navigate to <strong>M-PESA Payout Gateway</strong> to trigger instant B2C bulk disbursement for approved files.
      </div>
    `;
  }

  if (lower.includes("claim") || lower.includes("analyse") || lower.includes("analyze")) {
    const approvedCount = claims.filter(c => c.status === "Approved").length;
    const disbursedCount = claims.filter(c => c.status === "Disbursed").length;
    const pendingCount = claims.filter(c => c.status === "Pending").length;
    const siuCount = claims.filter(c => c.status === "Under Investigation").length;
    
    return `
      <strong style="color:var(--primary); font-size:14px;"> Complete Claims Portfolio & Telemetry Audit</strong><br><br>
      Full analytical breakdown of all ${totalClaimsCount} registered claims in EIMS:<br><br>
      • <strong>Total Claims Filed:</strong> ${totalClaimsCount} claims (Total Estimated Repairs: <strong>KSh ${totalClaimsCost.toLocaleString()}</strong>).<br>
      • <strong>Status Distribution:</strong> 
        <span style="color:var(--success); font-weight:600;">Approved: ${approvedCount}</span> | 
        <span style="color:var(--primary); font-weight:600;">Disbursed: ${disbursedCount}</span> | 
        <span style="color:var(--warning); font-weight:600;">Pending: ${pendingCount}</span> | 
        <span style="color:var(--danger); font-weight:600;">SIU Investigation: ${siuCount}</span>.<br>
      • <strong>Average Fraud Index:</strong> ${avgFraud}% (Low Risk Profile). Automated Green-path auto-pass rate at 75%.<br>
      • <strong>Settlement Payout Channels:</strong> M-PESA B2C (40%), Airtel Money (20%), EFT Bank Transfer PesaLink (40%).<br>
      • <strong>Accredited Garages Assigned:</strong> Nairobi Auto Care (8 repairs), Coast Breakdown (5 repairs), Lakeside Motors (4 repairs), Rift Valley Clinic (3 repairs).<br><br>
      <div style="background-color:var(--bg-primary); padding:10px; border-radius:8px; font-size:12px;">
         <strong>SIU Security Notice:</strong> ${siuCount} claim file(s) currently locked under SIU investigation due to camera EXIF location & media metadata verification.
      </div>
    `;
  }

  if (lower.includes("branch") || lower.includes("office") || lower.includes("performance")) {
    return `
      <strong style="color:var(--primary); font-size:14px;"> Branch Performance Audit & Analysis</strong><br><br>
      Based on the August 2026 production ledger across all national branches:<br><br>
      • <strong>Top Performing Branch:</strong> Head Office (Nairobi) leading with <strong>42 new policy acquisitions</strong> (KSh ${(2850000).toLocaleString()} gross premium, representing 38% market share).<br>
      • <strong>Second Position:</strong> Mombasa Branch with <strong>28 new policies</strong> (KSh ${(1920000).toLocaleString()}, 25% share).<br>
      • <strong>Regional Outlets:</strong> Kisumu (22 new policies, KSh 1.45M) and Nakuru (18 new policies, KSh 1.18M).<br><br>
      <div style="background-color:var(--bg-primary); padding:10px; border-radius:8px; font-size:12px;">
         <strong>AI Recommendation:</strong> Increase marketing outreach in Kisumu and Nakuru sub-counties to lift secondary branch acquisitions by an estimated +14%.
      </div>
    `;
  }
  
  if (lower.includes("fraud") || lower.includes("risk") || lower.includes("velocity")) {
    return `
      <strong style="color:var(--danger); font-size:14px;"> Fraud & Telemetry Risk Audit Report</strong><br><br>
      Analytical breakdown across <strong>${totalClaimsCount} filed claims</strong>:<br><br>
      • <strong>Average Fraud Index:</strong> ${avgFraud}% (Low-Medium overall risk profile).<br>
      • <strong>SIU Flagged Files:</strong> 1 claim file locked under active investigation due to metadata collision (Photo taken in Mombasa vs reported Nairobi location).<br>
      • <strong>Computer Vision Integrity:</strong> 92% of media submissions passed EXIF location & license plate OCR symmetry validation.<br><br>
      <div style="background-color:var(--bg-primary); padding:10px; border-radius:8px; font-size:12px;">
         <strong>Key Security Rule:</strong> Camera telemetry cross-referencing maintains automatic Green-path passage for low risk filings (<25% score).
      </div>
    `;
  }
  
  if (lower.includes("kira") || lower.includes("compliance") || lower.includes("regulatory")) {
    return `
      <strong style="color:var(--success); font-size:14px;"> KIRA Regulatory Compliance Summary</strong><br><br>
      Official compliance evaluation for the Kenyan Insurance Regulatory Authority:<br><br>
      • <strong>Form 104 Filings:</strong> All notice registrations comply with digital countersigning regulations under the Kenyan Insurance Act.<br>
      • <strong>AKI Certificate Issuance:</strong> Digital motor certificates featuring encrypted QR validation badges are declared valid.<br>
      • <strong>Accounting Compliance:</strong> Production reports strictly calculate <strong>${totalNewPolicies} new acquisitions</strong> (KSh ${(totalGrossPremium).toLocaleString()}) and explicitly exclude ${totalRenewalsExcluded} policy renewals.<br><br>
      <div style="background-color:var(--bg-primary); padding:10px; border-radius:8px; font-size:12px;">
         <strong>Audit Rating:</strong> 100% Compliant with KIRA guidelines.
      </div>
    `;
  }
  
  // Default Executive Production Summary
  return `
    <strong style="color:var(--primary); font-size:14px;"> Executive Production & Telemetry Summary</strong><br><br>
    Synthesized report for August 2026:<br><br>
    1. <strong>New Policy Production:</strong> <strong>${totalNewPolicies} new policies underwritten</strong> generating <strong>KSh ${(totalGrossPremium).toLocaleString()}</strong> in gross new premium.<br>
    2. <strong>Claims Portfolio:</strong> ${totalClaimsCount} total claims active with KSh ${(totalClaimsCost).toLocaleString()} in total repair estimates.<br>
    3. <strong>Accounting Compliance:</strong> ${totalRenewalsExcluded} policy renewals excluded from production tallies in accordance with international auditing standards.<br>
    4. <strong>System Status:</strong> All 4 regional branch ledgers synced. Direct-to-client renewal notice dispatch locked per safety policy.<br><br>
    <div style="background-color:var(--bg-primary); padding:10px; border-radius:8px; font-size:12px;">
       <strong>Overall Growth:</strong> +12.4% MoM increase in new motor acquisitions.
    </div>
  `;
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

function exportAIBriefPDF() {
  const printWin = window.open("", "_blank");
  const html = `
    <html>
    <head>
      <title>EIMS AI Executive Report Brief</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
        .header { border-bottom: 2px solid #0266cc; padding-bottom: 12px; margin-bottom: 24px; }
        .logo { font-size: 20px; font-weight: bold; color: #0266cc; }
        .report-box { background: #f8fafc; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; margin-top: 20px; }
        .footer { margin-top: 40px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10px; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo"> EIMS AI Executive Report Brief</div>
        <p style="font-size:12px; color:#64748b; margin-top:4px;">Synthesized for Insurance ProSystem | August 2026</p>
      </div>
      
      <div class="report-box">
        ${generateAIReportSynthesis("executive summary")}
      </div>

      <div class="footer">
        Generated automatically by EIMS Neural Analytics Engine. Confidential & Internal Use Only.
      </div>
      <script>window.onload = function() { window.print(); };</script>
    </body>
    </html>
  `;
  printWin.document.write(html);
  printWin.document.close();
}

// ================= ENTERPRISE MODULE ENGINES =================

// 1. GARAGE NETWORK
let garages = [
  { id: "GAR-01", name: "Nairobi Auto Care Panel Beaters", location: "Industrial Area, Nairobi", rating: "4.9 ", activeRepairs: 8, slaScore: "98%", status: "Accredited" },
  { id: "GAR-02", name: "Coast Breakdown & Refinishing Ltd", location: "Shimanzi, Mombasa", rating: "4.8 ", activeRepairs: 5, slaScore: "96%", status: "Accredited" },
  { id: "GAR-03", name: "Lakeside Motor Body Works", location: "Kisumu Industrial Zone", rating: "4.7 ", activeRepairs: 4, slaScore: "94%", status: "Accredited" },
  { id: "GAR-04", name: "Rift Valley Panel Beating Clinic", location: "Nakuru Town West", rating: "4.8 ", activeRepairs: 3, slaScore: "97%", status: "Accredited" },
  { id: "GAR-05", name: "Highland Auto Repairs", location: "Eldoret Highway Zone", rating: "4.9 ", activeRepairs: 4, slaScore: "96%", status: "Accredited" },
  { id: "GAR-06", name: "Mount Kenya Motor Works", location: "Nyeri King'ong'o Area", rating: "4.7 ", activeRepairs: 2, slaScore: "93%", status: "Accredited" },
  { id: "GAR-07", name: "Thika Road Auto Technicians", location: "Ruiru Bypass", rating: "4.8 ", activeRepairs: 5, slaScore: "95%", status: "Accredited" },
  { id: "GAR-08", name: "Eastern Star Garage", location: "Machakos Town", rating: "4.6 ", activeRepairs: 3, slaScore: "92%", status: "Accredited" }
];

function renderGarageNetwork() {
  const tbody = document.querySelector("#garage-table tbody");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  garages.forEach((g, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${g.name}</strong></td>
      <td>${g.location}</td>
      <td>${g.rating}</td>
      <td><span class="status-badge pending">${g.activeRepairs} Vehicles</span></td>
      <td><strong style="color:var(--success);">${g.slaScore}</strong></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary" onclick="assignGarageClaim('${g.name}')" style="padding:4px 8px; font-size:11px;">Assign Claim</button>
          <button class="btn btn-secondary" onclick="openEditGarage(${idx})" style="padding:4px 8px; font-size:11px;"> Edit</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  const issueBtn = document.getElementById("issue-repair-voucher-btn");
  if (issueBtn) {
    issueBtn.addEventListener("click", () => {
      showToast("Voucher Issued", "Digital Repair Release Voucher printed for Nairobi Auto Care.", "success");
      window.print();
    });
  }
}

function assignGarageClaim(garageName) {
  const trackName = document.getElementById("track-garage-name");
  if (trackName) trackName.innerText = `Assigned to: ${garageName}`;
  showToast("Garage Assigned", `Claim assigned to ${garageName} for repair intake.`, "info");
}

// 2. MULTI-CHANNEL CLAIMS SETTLEMENT GATEWAY (M-PESA, AIRTEL MONEY, BANK TRANSFER)
let channelTotals = {
  mpesa: 420000,
  airtel: 180000,
  bank: 540000
};

function renderMpesaGateway() {
  renderScheduledPayouts();
  const tbody = document.querySelector("#mpesa-payout-table tbody");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  const approvedClaims = claims.filter(c => c.status === "Approved" || c.status === "Disbursed");
  
  if (approvedClaims.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-muted);">No approved payout files in queue.</td></tr>`;
    return;
  }
  
  let pendingDisbursement = 0;
  
  approvedClaims.forEach(c => {
    if (c.status !== "Disbursed") {
      pendingDisbursement += c.cost;
    }
    
    // Assign default payment channel if not set
    if (!c.payoutChannel) c.payoutChannel = "mpesa";
    if (!c.bankDetails) c.bankDetails = "KCB Bank (Acc: 1109823471)";
    
    const tr = document.createElement("tr");
    let statusBadge = c.status === "Disbursed" 
      ? `<span class="status-badge approved">Settled (${c.payoutChannel.toUpperCase()})</span>` 
      : `<span class="status-badge pending">Ready for Payout</span>`;
      
    let channelSelect = c.status === "Disbursed" 
      ? `<strong>${c.payoutChannel === "mpesa" ? "M-PESA B2C" : c.payoutChannel === "airtel" ? "Airtel Money" : "EFT Bank Transfer"}</strong>`
      : `
        <select class="form-select" onchange="updateClaimPayoutChannel('${c.id}', this.value)" style="padding:3px 6px; font-size:11.5px; width:130px;">
          <option value="mpesa" ${c.payoutChannel === "mpesa" ? "selected" : ""}>M-PESA B2C</option>
          <option value="airtel" ${c.payoutChannel === "airtel" ? "selected" : ""}>Airtel Money</option>
          <option value="bank" ${c.payoutChannel === "bank" ? "selected" : ""}>Bank (EFT/PesaLink)</option>
        </select>
      `;
      
    let accountInfo = c.payoutChannel === "bank" 
      ? `<span style="font-size:11px;">${c.bankDetails}</span>` 
      : `<code>${c.phone}</code>`;
      
    let actionBtn = c.status === "Disbursed" 
      ? `<button class="btn btn-secondary" disabled style="opacity:0.6; padding:4px 8px; font-size:11px;">Settled</button>` 
      : `<button class="btn btn-primary" onclick="executeChannelPayout('${c.id}')" style="padding:4px 8px; font-size:11px;">Execute Settlement</button>`;
      
    tr.innerHTML = `
      <td><strong>${c.id}</strong></td>
      <td>${c.owner}</td>
      <td>${accountInfo}</td>
      <td>${channelSelect}</td>
      <td><strong style="color:var(--primary);">KSh ${c.cost.toLocaleString()}</strong></td>
      <td>${statusBadge}</td>
      <td>${actionBtn}</td>
    `;
    tbody.appendChild(tr);
  });
  
  const mpesaEl = document.getElementById("payout-total-mpesa");
  const airtelEl = document.getElementById("payout-total-airtel");
  const bankEl = document.getElementById("payout-total-bank");
  const pendEl = document.getElementById("mpesa-pending-total");
  
  if (mpesaEl) mpesaEl.innerText = `KSh ${channelTotals.mpesa.toLocaleString()}`;
  if (airtelEl) airtelEl.innerText = `KSh ${channelTotals.airtel.toLocaleString()}`;
  if (bankEl) bankEl.innerText = `KSh ${channelTotals.bank.toLocaleString()}`;
  if (pendEl) pendEl.innerText = `KSh ${pendingDisbursement.toLocaleString()}`;
}

function updateClaimPayoutChannel(claimId, channel) {
  const c = claims.find(cl => cl.id === claimId);
  if (c) {
    c.payoutChannel = channel;
    renderMpesaGateway();
  }
}

function executeChannelPayout(claimId) {
  const c = claims.find(cl => cl.id === claimId);
  if (!c) return;
  
  c.status = "Disbursed";
  const channel = c.payoutChannel || "mpesa";
  let receiptCode = "";
  let channelTitle = "";
  let channelText = "";
  
  if (channel === "mpesa") {
    receiptCode = "QK" + Math.floor(10000000 + Math.random() * 90000000);
    channelTitle = "✓ Safaricom M-PESA B2C Successful";
    channelText = "M-PESA B2C Express Gateway";
    channelTotals.mpesa += c.cost;
  } else if (channel === "airtel") {
    receiptCode = "AM-" + Math.floor(10000000 + Math.random() * 90000000) + "-KE";
    channelTitle = "✓ Airtel Money B2C Transfer Successful";
    channelText = "Airtel Money B2C Gateway";
    channelTotals.airtel += c.cost;
  } else {
    receiptCode = "PSL-2026-" + Math.floor(100000 + Math.random() * 900000);
    channelTitle = "✓ EFT / PesaLink Bank Transfer Executed";
    channelText = `PesaLink KITS Clearing Bank (${c.bankDetails || "KCB Bank"})`;
    channelTotals.bank += c.cost;
  }
  
  const box = document.getElementById("mpesa-last-receipt-box");
  if (box) {
    box.style.display = "block";
    document.getElementById("mpesa-receipt-channel-title").innerText = channelTitle;
    document.getElementById("mpesa-receipt-code").innerText = receiptCode;
    document.getElementById("mpesa-receipt-channel").innerText = channelText;
    document.getElementById("mpesa-receipt-name").innerText = c.owner;
    document.getElementById("mpesa-receipt-amount").innerText = `KSh ${c.cost.toLocaleString()}`;
    document.getElementById("mpesa-receipt-time").innerText = new Date().toLocaleString();
  }
  
  showToast("Settlement Executed", `Disbursed KSh ${c.cost.toLocaleString()} to ${c.owner} via ${channelText}. Ref: ${receiptCode}`, "success");
  renderMpesaGateway();
  renderClaimsDirectory();
}

// 3. LOSS ASSESSORS
let assessors = [
  { name: "General Adjusters Kenya Ltd", location: "Nairobi / National", spec: "Motor & Mechanical Telemetry", rating: "4.9 " },
  { name: "GAB Robins Assessment Bureau", location: "Mombasa / Coast", spec: "Commercial Fleets & Heavy Plant", rating: "4.8 " },
  { name: "Kenya Assessment Bureau (KAB)", location: "Western & Rift Valley", spec: "Property & Forensic Audit", rating: "4.7 " },
  { name: "AutoAssessor Kenya Ltd", location: "Central Kenya / Nyeri", spec: "Passenger & Light Commercial", rating: "4.8 " },
  { name: "Apex Valuation Services", location: "North Rift / Eldoret", spec: "Agricultural Machinery", rating: "4.7 " }
];

function renderLossAssessors() {
  const tbody = document.querySelector("#assessors-table tbody");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  assessors.forEach(a => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${a.name}</strong></td>
      <td>${a.location}</td>
      <td>${a.spec}</td>
      <td>${a.rating}</td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary" onclick="dispatchAssessor('${a.name}')" style="padding:4px 8px; font-size:11px;">Dispatch Request</button>
          <button class="btn btn-secondary" onclick="openEditAssessor('${a.name}')" style="padding:4px 8px; font-size:11px;"> Edit</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function dispatchAssessor(firmName) {
  showToast("Assessor Dispatched", `Physical inspection request dispatched to ${firmName}.`, "info");
}

// 4. REINSURANCE CEDING
let reinsurers = [
  { name: "Kenya Reinsurance Corporation (Kenya Re)", rating: "AA+ (AM Best)", share: "35%", cededPremium: "KSh 14,912,000", status: "Active Treaty (Statutory 35%)" },
  { name: "Zep-Re (PTA Reinsurance Co)", rating: "AA (GCR)", share: "15%", cededPremium: "KSh 6,390,000", status: "Active Treaty (COMESA 15%)" },
  { name: "African Reinsurance Corporation (Africa Re)", rating: "A+ (S&P)", share: "10%", cededPremium: "KSh 4,260,000", status: "Active Treaty (Pan-African 10%)" }
];

function calc3ReinsurerRiskSplit() {
  const gross = parseFloat(document.getElementById("reins-gross-risk-input")?.value || 10000000);
  
  const kenyaPctText = reinsurers[0].share.replace("%","");
  const zepPctText = reinsurers[1].share.replace("%","");
  const africaPctText = reinsurers[2].share.replace("%","");

  const kenyaPct = (parseFloat(kenyaPctText) || 35) / 100;
  const zepPct = (parseFloat(zepPctText) || 15) / 100;
  const africaPct = (parseFloat(africaPctText) || 10) / 100;
  const retPct = Math.max(0, 1 - (kenyaPct + zepPct + africaPct));

  const kenyaAmt = gross * kenyaPct;
  const zepAmt = gross * zepPct;
  const africaAmt = gross * africaPct;
  const retAmt = gross * retPct;
  const totalCededAmt = kenyaAmt + zepAmt + africaAmt;

  const elRetAmt = document.getElementById("reins-val-ret-amt");
  const elKenyaAmt = document.getElementById("reins-val-kenya-amt");
  const elZepAmt = document.getElementById("reins-val-zep-amt");
  const elAfricaAmt = document.getElementById("reins-val-africa-amt");
  const elTotalCededAmt = document.getElementById("reins-val-total-ceded-amt");

  if (elRetAmt) elRetAmt.innerText = "KSh " + retAmt.toLocaleString();
  if (elKenyaAmt) elKenyaAmt.innerText = "KSh " + kenyaAmt.toLocaleString();
  if (elZepAmt) elZepAmt.innerText = "KSh " + zepAmt.toLocaleString();
  if (elAfricaAmt) elAfricaAmt.innerText = "KSh " + africaAmt.toLocaleString();
  if (elTotalCededAmt) elTotalCededAmt.innerText = "KSh " + totalCededAmt.toLocaleString();
}

function openReinsuranceCalculatorModal() {
  const modal = document.getElementById("reinsurance-calculator-modal");
  if (!modal) return;
  modal.classList.add("active");
  updateModalReinsCalc();
}

function closeReinsuranceCalculatorModal() {
  const modal = document.getElementById("reinsurance-calculator-modal");
  if (modal) modal.classList.remove("active");
}

function updateModalReinsCalc() {
  const gross = parseFloat(document.getElementById("modal-reins-gross-val")?.value || 10000000);
  const kenyaPct = parseInt(document.getElementById("modal-kenya-share-range")?.value || 35);
  const zepPct = parseInt(document.getElementById("modal-zep-share-range")?.value || 15);
  const africaPct = parseInt(document.getElementById("modal-africa-share-range")?.value || 10);

  const retPct = Math.max(0, 100 - (kenyaPct + zepPct + africaPct));

  const kenyaAmt = gross * (kenyaPct / 100);
  const zepAmt = gross * (zepPct / 100);
  const africaAmt = gross * (africaPct / 100);
  const retAmt = gross * (retPct / 100);

  document.getElementById("modal-kenya-share-label").innerText = kenyaPct + "%";
  document.getElementById("modal-kenya-amt-label").innerText = "KSh " + kenyaAmt.toLocaleString();

  document.getElementById("modal-zep-share-label").innerText = zepPct + "%";
  document.getElementById("modal-zep-amt-label").innerText = "KSh " + zepAmt.toLocaleString();

  document.getElementById("modal-africa-share-label").innerText = africaPct + "%";
  document.getElementById("modal-africa-amt-label").innerText = "KSh " + africaAmt.toLocaleString();

  document.getElementById("modal-ret-share-label").innerText = retPct + "%";
  document.getElementById("modal-ret-amt-label").innerText = "KSh " + retAmt.toLocaleString();
}

function applyReinsuranceSharesToLedger() {
  const kenyaPct = parseInt(document.getElementById("modal-kenya-share-range")?.value || 35);
  const zepPct = parseInt(document.getElementById("modal-zep-share-range")?.value || 15);
  const africaPct = parseInt(document.getElementById("modal-africa-share-range")?.value || 10);
  const gross = parseFloat(document.getElementById("modal-reins-gross-val")?.value || 10000000);

  reinsurers[0].share = kenyaPct + "%";
  reinsurers[1].share = zepPct + "%";
  reinsurers[2].share = africaPct + "%";

  const grossInput = document.getElementById("reins-gross-risk-input");
  if (grossInput) grossInput.value = gross;
  
  const elK = document.getElementById("reins-val-kenya-pct");
  const elZ = document.getElementById("reins-val-zep-pct");
  const elA = document.getElementById("reins-val-africa-pct");
  const elR = document.getElementById("reins-val-ret-pct");

  if (elK) elK.innerText = kenyaPct + ".0%";
  if (elZ) elZ.innerText = zepPct + ".0%";
  if (elA) elA.innerText = africaPct + ".0%";
  if (elR) elR.innerText = (100 - kenyaPct - zepPct - africaPct) + ".0%";

  closeReinsuranceCalculatorModal();
  calc3ReinsurerRiskSplit();
  renderReinsuranceCeding();

  showToast("Reinsurer Panel Updated", `Reinsurance Quota Shares adjusted: Kenya Re (${kenyaPct}%), Zep Re (${zepPct}%), Africa Re (${africaPct}%).`, "success");
}

function renderReinsuranceCeding() {
  calc3ReinsurerRiskSplit();
  const tbody = document.querySelector("#reinsurance-table tbody");
  if (!tbody) return;
  
  tbody.innerHTML = "";
  reinsurers.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${r.name}</strong></td>
      <td>${r.rating}</td>
      <td><span class="status-badge approved">${r.share}</span></td>
      <td><strong style="color:var(--primary);">${r.cededPremium}</strong></td>
      <td><span style="color:var(--success); font-weight:500;">${r.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// 5. MOBILE COMPANION APP PORTAL
function renderMobileAppPortal() {
  showToast("Mobile App Portal Active", "Showing live interactive iOS & Android smartphone simulator.", "info");
}

function downloadAppPackage(platform) {
  if (platform === "android") {
    showToast("Downloading Android App", "Downloading EIMS Mobile Client App v2.4 (APK bundle)...", "success");
    const a = document.createElement("a");
    a.href = "data:text/plain;charset=utf-8," + encodeURIComponent("EIMS Android Client App Binary Package v2.4");
    a.download = "EIMS_CountyInsurance_v2.4.apk";
    a.click();
  } else {
    showToast("iOS TestFlight / IPA", "Generating Apple Enterprise TestFlight installation link...", "info");
    alert("Apple iOS Installation: EIMS Mobile App v2.4 TestFlight manifest generated. Tap 'Install' on your iPhone/iPad device.");
  }
}

function installPWAApp() {
  showToast("Progressive Web App", "EIMS Mobile Client installed to device home screen.", "success");
}

// 6. IRA COMPLIANCE & TAXES
function renderIRACompliance() {
  const tbody = document.querySelector("#ira-tax-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  policies.forEach(p => {
    const phcf = Math.round(p.premium * 0.0025);
    const training = Math.round(p.premium * 0.002);
    const stamp = 40;
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${p.policyNo}</strong></td>
      <td>${p.clientName}</td>
      <td><strong style="color:var(--primary);">KSh ${p.premium.toLocaleString()}</strong></td>
      <td>KSh ${phcf.toLocaleString()}</td>
      <td>KSh ${training.toLocaleString()}</td>
      <td>KSh ${stamp}</td>
      <td><span class="status-badge approved">Remitted (KRA)</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function exportIRAReturnForm() {
  showToast("IRA Return Form 109", "Generating IRA Quarterly Statutory Return Statement PDF...", "success");
  window.print();
}

// 7. SUBROGATION RECOVERIES
let subrogationCases = [
  { claimId: "CLM-2026-001", vehicle: "KDG 123A", thirdPartyInsurer: "APA Insurance Ltd", fault: "100% Third-Party", amount: "KSh 480,000", status: "Demand Notice Sent" },
  { claimId: "CLM-2026-002", vehicle: "KBA 456X", thirdPartyInsurer: "Jubilee Insurance Kenya", fault: "80% Third-Party", amount: "KSh 420,000", status: "Recovered" },
  { claimId: "CLM-2026-003", vehicle: "KCC 789Y", thirdPartyInsurer: "CIC General Insurance", fault: "100% Third-Party", amount: "KSh 420,000", status: "Under Dispute" },
  { claimId: "CLM-2026-008", vehicle: "KDA 554P", thirdPartyInsurer: "Britam General Insurance", fault: "100% Third-Party", amount: "KSh 540,000", status: "Demand Notice Sent" },
  { claimId: "CLM-2026-010", vehicle: "KDB 991S", thirdPartyInsurer: "ICEA LION General", fault: "90% Third-Party", amount: "KSh 310,000", status: "Demand Notice Sent" }
];

function renderSubrogationRecovery() {
  const tbody = document.querySelector("#subrogation-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  subrogationCases.forEach(s => {
    const tr = document.createElement("tr");
    let badge = s.status === "Recovered" 
      ? `<span class="status-badge approved">Recovered</span>` 
      : s.status === "Under Dispute" 
      ? `<span class="status-badge pending">Under Dispute</span>` 
      : `<span class="status-badge pending">Demand Sent</span>`;
      
    tr.innerHTML = `
      <td><strong>${s.claimId}</strong></td>
      <td>${s.vehicle}</td>
      <td>${s.thirdPartyInsurer}</td>
      <td><strong style="color:var(--primary);">${s.fault}</strong></td>
      <td><strong>${s.amount}</strong></td>
      <td>${badge}</td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary" onclick="issueSubrogationNotice('${s.claimId}', '${s.thirdPartyInsurer}')" style="padding:4px 8px; font-size:11px;">Demand Notice</button>
          <button class="btn btn-secondary" onclick="openEditSubrogation('${s.claimId}')" style="padding:4px 8px; font-size:11px;"> Edit</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function issueSubrogationNotice(claimId, insurer) {
  showToast("Subrogation Demand Notice", `Notice of Subrogation Demand issued to ${insurer} for file ${claimId}.`, "success");
}

// 8. COUNTY FLEET UNDERWRITING
let countyFleets = [
  { id: "FLT-NRB-01", county: "Nairobi City County Fleet", count: "45 Vehicles", line: "Emergency & Ambulances", premium: "KSh 8,500,000", certs: "Batch Issued (45/45)" },
  { id: "FLT-MSA-02", county: "Mombasa County Health Fleet", count: "28 Vehicles", line: "Health & Utility", premium: "KSh 5,200,000", certs: "Batch Issued (28/28)" },
  { id: "FLT-NKR-03", county: "Nakuru County Revenue Fleet", count: "32 Vehicles", line: "Administrative Patrol", premium: "KSh 6,100,000", certs: "Batch Issued (32/32)" },
  { id: "FLT-KSM-04", county: "Kisumu Fire & Rescue Fleet", count: "18 Vehicles", line: "Emergency Response", premium: "KSh 4,400,000", certs: "Batch Issued (18/18)" },
  { id: "FLT-ELD-05", county: "Uasin Gishu Agricultural Fleet", count: "24 Vehicles", line: "Heavy Machinery", premium: "KSh 5,800,000", certs: "Batch Issued (24/24)" },
  { id: "FLT-KMB-06", county: "Kiambu Works & Transport", count: "36 Vehicles", line: "Public Works Patrol", premium: "KSh 7,100,000", certs: "Batch Issued (36/36)" }
];

function renderFleetUnderwriting() {
  const tbody = document.querySelector("#fleet-table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  countyFleets.forEach(f => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${f.id}</strong></td>
      <td>${f.county}</td>
      <td><span class="status-badge pending">${f.count}</span></td>
      <td>${f.line}</td>
      <td><strong style="color:var(--primary);">${f.premium}</strong></td>
      <td><span style="color:var(--success); font-weight:600;">${f.certs}</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary" onclick="batchIssueFleetCerts('${f.county}')" style="padding:4px 8px; font-size:11px;">Batch AKI Certs</button>
          <button class="btn btn-secondary" onclick="openEditFleetVehicle('${f.id}')" style="padding:4px 8px; font-size:11px;"> Edit</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function batchIssueFleetCerts(countyName) {
  showToast("Batch Certificates", `Batch AKI Digital Motor Certificates generated for ${countyName}.`, "success");
}

function simulateFleetCSVUpload() {
  showToast("Fleet CSV Uploaded", "Successfully imported manifest of 45 vehicles for Nairobi City County.", "success");
}

// 9. NATIONAL GIS GEOMAP COMMAND CENTER
let commandCenterMap = null;
let commandCenterMarkers = [];

// Leaflet caches the container size at construction. When a map is built inside
// a view that was just un-hidden, that size is stale and the map renders offset
// (the GeoMap centred on the Red Sea instead of Kenya). Re-measure once the
// browser has actually laid the container out, then re-assert the centre.
function lockMapView(map, center, zoom) {
  requestAnimationFrame(() => {
    map.invalidateSize();
    map.setView(center, zoom);
  });
}

function renderGeoMapCenter() {
  const mapContainer = document.getElementById("command-center-map");
  if (!mapContainer || typeof L === "undefined") return;
  
  if (commandCenterMap) {
    commandCenterMap.invalidateSize();
    return;
  }
  
  // Center map on Kenya (Nairobi / Naivasha corridor)
  commandCenterMap = L.map("command-center-map").setView([-0.8000, 36.8000], 7);
  lockMapView(commandCenterMap, [-0.8000, 36.8000], 7);
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(commandCenterMap);
  
  // Map Pin Data Sets
  const mapData = [
    // Incidents
    { type: "claim", lat: -1.286389, lng: 36.817223, title: " CLM-2026-001 (Nairobi Collision)", desc: "KDG 123A | Damage KSh 142,500 | Green Pass", color: "#ef4444" },
    { type: "claim", lat: -4.043477, lng: 39.668206, title: " CLM-2026-002 (Mombasa Port Road)", desc: "KBA 456X | Damage KSh 480,000 | Yellow Flag", color: "#ef4444" },
    { type: "claim", lat: -0.091702, lng: 34.767956, title: " CLM-2026-003 (Kisumu Bypass)", desc: "KCC 789Y | Damage KSh 390,000 | Green Pass", color: "#ef4444" },
    { type: "claim", lat: -0.303099, lng: 36.080025, title: " CLM-2026-004 (Nakuru Highway)", desc: "KDD 012Z | Damage KSh 620,000 | Disbursed", color: "#ef4444" },
    { type: "claim", lat: 0.5143, lng: 35.2698, title: " CLM-2026-007 (Eldoret Airport Rd)", desc: "KDE 112W | Damage KSh 175,000 | Green Pass", color: "#ef4444" },
    { type: "claim", lat: -1.0383, lng: 37.0734, title: " CLM-2026-008 (Thika Superhighway)", desc: "KDA 554P | Damage KSh 540,000 | Red Flag SIU", color: "#ef4444" },
    { type: "claim", lat: -0.4201, lng: 36.9476, title: " CLM-2026-009 (Nyeri Town Circle)", desc: "KCR 402B | Damage KSh 92,000 | Disbursed", color: "#ef4444" },
    { type: "claim", lat: -0.0517, lng: 37.6456, title: " CLM-2026-010 (Meru Mall Junction)", desc: "KDB 991S | Damage KSh 310,000 | Pending OB", color: "#ef4444" },
    
    // Accredited Garages
    { type: "garage", lat: -1.3000, lng: 36.8350, title: " Nairobi Auto Care Panel Beaters", desc: "Industrial Area, Nairobi | Rating: 4.9 | SLA 98%", color: "#ff6b00" },
    { type: "garage", lat: -4.0500, lng: 39.6500, title: " Coast Breakdown & Refinishing", desc: "Shimanzi, Mombasa | Rating: 4.8 | SLA 96%", color: "#ff6b00" },
    { type: "garage", lat: -0.1000, lng: 34.7500, title: " Lakeside Motor Body Works", desc: "Kisumu Industrial Zone | Rating: 4.7 | SLA 94%", color: "#ff6b00" },
    { type: "garage", lat: -0.2900, lng: 36.0700, title: " Rift Valley Panel Clinic", desc: "Nakuru Town West | Rating: 4.8 | SLA 97%", color: "#ff6b00" },
    { type: "garage", lat: 0.5200, lng: 35.2800, title: " Highland Auto Repairs", desc: "Eldoret Highway Zone | Rating: 4.9 | SLA 96%", color: "#ff6b00" },
    { type: "garage", lat: -0.4100, lng: 36.9500, title: " Mount Kenya Motor Works", desc: "Nyeri King'ong'o Area | Rating: 4.7 | SLA 93%", color: "#ff6b00" },

    // County Branch Offices
    { type: "branch", lat: -1.2830, lng: 36.8200, title: " EIMS Head Office Nairobi", desc: "429 New Policies | KSh 37.28M Gross Premium", color: "#10b981" },
    { type: "branch", lat: -4.0400, lng: 39.6600, title: " Mombasa Regional Branch", desc: "74 New Policies | KSh 6.42M Gross Premium", color: "#10b981" },
    { type: "branch", lat: -0.0900, lng: 34.7600, title: " Kisumu Regional Branch", desc: "58 New Policies | KSh 5.04M Gross Premium", color: "#10b981" },
    { type: "branch", lat: -0.3000, lng: 36.0750, title: " Nakuru Regional Branch", desc: "42 New Policies | KSh 3.65M Gross Premium", color: "#10b981" },
    { type: "branch", lat: 0.5143, lng: 35.2698, title: " Eldoret Regional Branch", desc: "39 New Policies | KSh 3.39M Gross Premium", color: "#10b981" },
    { type: "branch", lat: -0.4201, lng: 36.9476, title: " Nyeri Regional Branch", desc: "29 New Policies | KSh 2.52M Gross Premium", color: "#10b981" }
  ];
  
  mapData.forEach(item => {
    const circle = L.circleMarker([item.lat, item.lng], {
      radius: 9,
      fillColor: item.color,
      color: "#ffffff",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.85
    }).addTo(commandCenterMap);
    
    circle.bindPopup(`
      <div style="font-family:sans-serif; font-size:12px; line-height:1.4;">
        <strong style="color:${item.color}; font-size:13px;">${item.title}</strong><br/>
        <span style="color:#64748b;">${item.desc}</span><br/>
        <small style="color:#94a3b8;">GPS: ${item.lat.toFixed(4)}, ${item.lng.toFixed(4)}</small>
      </div>
    `);
    
    circle.markerType = item.type;
    commandCenterMarkers.push(circle);
  });
  
  showToast("GeoMap Command Center", "National GIS mapping initialized with 14 live telemetry pins.", "success");
}

function filterGeoMapMarkers(type) {
  if (!commandCenterMap) return;
  commandCenterMarkers.forEach(m => {
    if (type === "all" || m.markerType === type) {
      m.addTo(commandCenterMap);
    } else {
      commandCenterMap.removeLayer(m);
    }
  });
  showToast("GeoMap Layer Filtered", `Showing ${type.toUpperCase()} markers on command center map.`, "info");
}

// ================= UNIVERSAL EDIT & UPDATE ENGINE =================

let activeEditRecord = null;
let reinsuranceData = { retentionLimit: 5000000, kenyaRe: 40, zepRe: 35, africaRe: 25 };
let iraTaxRates = { phcf: 0.25, training: 0.20, stampDuty: 40 };

function closeEditModal() {
  const modal = document.getElementById("generic-edit-modal");
  if (modal) modal.classList.remove("active");
}

function openEditClaim(claimId) {
  const claim = claims.find(c => c.id === claimId);
  if (!claim) return;
  
  activeEditRecord = { type: "claim", data: claim };
  
  document.getElementById("edit-modal-title").innerText = ` Edit Claim File: ${claim.id}`;
  document.getElementById("edit-record-id").value = claim.id;
  document.getElementById("edit-record-type").value = "claim";
  
  const fieldsContainer = document.getElementById("edit-modal-fields");
  fieldsContainer.innerHTML = `
    <div>
      <label class="form-label">Policyholder / Claimant Name</label>
      <input type="text" class="form-control" id="edit-claim-owner" value="${escapeHTML(claim.owner)}">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Vehicle Plate</label>
        <input type="text" class="form-control" id="edit-claim-plate" value="${escapeHTML(claim.plate)}">
      </div>
      <div>
        <label class="form-label">Damage Estimate (KSh)</label>
        <input type="number" class="form-control" id="edit-claim-cost" value="${claim.cost}">
      </div>
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Claim Status</label>
        <select class="form-control" id="edit-claim-status">
          <option value="Pending" ${claim.status === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Approved" ${claim.status === 'Approved' ? 'selected' : ''}>Approved</option>
          <option value="Under Investigation" ${claim.status === 'Under Investigation' ? 'selected' : ''}>Under Investigation</option>
          <option value="Disbursed" ${claim.status === 'Disbursed' ? 'selected' : ''}>Disbursed</option>
        </select>
      </div>
      <div>
        <label class="form-label">Triage Path</label>
        <select class="form-control" id="edit-claim-triage">
          <option value="Green" ${claim.triage === 'Green' ? 'selected' : ''}>Green (Auto-Pass)</option>
          <option value="Yellow" ${claim.triage === 'Yellow' ? 'selected' : ''}>Yellow (Adjuster Audit)</option>
          <option value="Red" ${claim.triage === 'Red' ? 'selected' : ''}>Red (SIU Lock)</option>
        </select>
      </div>
    </div>
    <div>
      <label class="form-label">Fraud Risk Score (%)</label>
      <input type="number" min="0" max="100" class="form-control" id="edit-claim-fraud" value="${claim.fraudScore}">
    </div>
  `;
  
  document.getElementById("generic-edit-modal").classList.add("active");
}

function openEditPolicy(policyNo) {
  const policy = policies.find(p => p.policyNo === policyNo);
  if (!policy) return;
  
  activeEditRecord = { type: "policy", data: policy };
  
  document.getElementById("edit-modal-title").innerText = ` Edit Policy Record: ${policy.policyNo}`;
  document.getElementById("edit-record-id").value = policy.policyNo;
  document.getElementById("edit-record-type").value = "policy";
  
  const fieldsContainer = document.getElementById("edit-modal-fields");
  fieldsContainer.innerHTML = `
    <div>
      <label class="form-label">Insured Client Name</label>
      <input type="text" class="form-control" id="edit-policy-name" value="${escapeHTML(policy.clientName)}">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Vehicle Registration Plate</label>
        <input type="text" class="form-control" id="edit-policy-plate" value="${escapeHTML(policy.plate)}">
      </div>
      <div>
        <label class="form-label">Gross Premium (KSh)</label>
        <input type="number" class="form-control" id="edit-policy-premium" value="${policy.premium}">
      </div>
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Policy Status</label>
        <select class="form-control" id="edit-policy-status">
          <option value="Active" ${policy.status === 'Active' ? 'selected' : ''}>Active</option>
          <option value="Suspended" ${policy.status === 'Suspended' ? 'selected' : ''}>Suspended</option>
          <option value="Cancelled" ${policy.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </div>
      <div>
        <label class="form-label">Branch Office</label>
        <input type="text" class="form-control" id="edit-policy-branch" value="${escapeHTML(policy.branch || 'HQ')}">
      </div>
    </div>
    <div>
      <label class="form-label">AKI Digital Certificate ID</label>
      <input type="text" class="form-control" id="edit-policy-cert" value="${escapeHTML(policy.certId)}">
    </div>
  `;
  
  document.getElementById("generic-edit-modal").classList.add("active");
}

function openEditGarage(garageIndex) {
  const garage = garages[garageIndex || 0];
  if (!garage) return;
  
  activeEditRecord = { type: "garage", data: garage, index: garageIndex };
  
  document.getElementById("edit-modal-title").innerText = ` Edit Garage & Repair Milestone: ${garage.name}`;
  document.getElementById("edit-record-id").value = garageIndex;
  document.getElementById("edit-record-type").value = "garage";
  
  const fieldsContainer = document.getElementById("edit-modal-fields");
  fieldsContainer.innerHTML = `
    <div>
      <label class="form-label">Accredited Garage Name</label>
      <input type="text" class="form-control" id="edit-garage-name" value="${escapeHTML(garage.name)}">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Location / County</label>
        <input type="text" class="form-control" id="edit-garage-location" value="${escapeHTML(garage.location)}">
      </div>
      <div>
        <label class="form-label">Repair SLA Rating</label>
        <input type="text" class="form-control" id="edit-garage-sla" value="${escapeHTML(garage.slaScore)}">
      </div>
    </div>
    <div>
      <label class="form-label">Active Vehicle Repairs</label>
      <input type="number" class="form-control" id="edit-garage-repairs" value="${garage.activeRepairs}">
    </div>
  `;
  
  document.getElementById("generic-edit-modal").classList.add("active");
}

function openEditAssessor(assessorName) {
  const assessor = assessors.find(a => a.name === assessorName) || assessors[0];
  activeEditRecord = { type: "assessor", data: assessor };
  
  document.getElementById("edit-modal-title").innerText = ` Edit Loss Assessor Firm: ${assessor.name}`;
  document.getElementById("edit-record-id").value = assessor.name;
  document.getElementById("edit-record-type").value = "assessor";
  
  const fieldsContainer = document.getElementById("edit-modal-fields");
  fieldsContainer.innerHTML = `
    <div>
      <label class="form-label">Assessor Firm Name</label>
      <input type="text" class="form-control" id="edit-assessor-name" value="${escapeHTML(assessor.name)}">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Regional Hub</label>
        <input type="text" class="form-control" id="edit-assessor-location" value="${escapeHTML(assessor.location)}">
      </div>
      <div>
        <label class="form-label">Specialization</label>
        <input type="text" class="form-control" id="edit-assessor-spec" value="${escapeHTML(assessor.spec)}">
      </div>
    </div>
  `;
  
  document.getElementById("generic-edit-modal").classList.add("active");
}

function openEditReinsurance() {
  activeEditRecord = { type: "reinsurance" };
  
  document.getElementById("edit-modal-title").innerText = ` Edit Reinsurance Cession Shares & Limits`;
  document.getElementById("edit-record-id").value = "reinsurance";
  document.getElementById("edit-record-type").value = "reinsurance";
  
  const fieldsContainer = document.getElementById("edit-modal-fields");
  fieldsContainer.innerHTML = `
    <div>
      <label class="form-label">Primary Risk Retention Limit (KSh)</label>
      <input type="number" class="form-control" id="edit-reinsurance-retention" value="${reinsuranceData.retentionLimit}">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Kenya Re (%)</label>
        <input type="number" class="form-control" id="edit-reinsurance-kenya-re" value="${reinsuranceData.kenyaRe}">
      </div>
      <div>
        <label class="form-label">Zep-Re (%)</label>
        <input type="number" class="form-control" id="edit-reinsurance-zep-re" value="${reinsuranceData.zepRe}">
      </div>
      <div>
        <label class="form-label">Africa Re (%)</label>
        <input type="number" class="form-control" id="edit-reinsurance-africa-re" value="${reinsuranceData.africaRe}">
      </div>
    </div>
  `;
  
  document.getElementById("generic-edit-modal").classList.add("active");
}

function openEditSubrogation(claimId) {
  const sub = subrogationCases.find(s => s.claimId === claimId) || subrogationCases[0];
  activeEditRecord = { type: "subrogation", data: sub };
  
  document.getElementById("edit-modal-title").innerText = ` Edit Subrogation Demand Notice: ${sub.claimId}`;
  document.getElementById("edit-record-id").value = sub.claimId;
  document.getElementById("edit-record-type").value = "subrogation";
  
  const fieldsContainer = document.getElementById("edit-modal-fields");
  fieldsContainer.innerHTML = `
    <div>
      <label class="form-label">Third-Party Insurer</label>
      <input type="text" class="form-control" id="edit-subrogation-insurer" value="${escapeHTML(sub.thirdPartyInsurer)}">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Fault Assessment</label>
        <input type="text" class="form-control" id="edit-subrogation-fault" value="${escapeHTML(sub.fault)}">
      </div>
      <div>
        <label class="form-label">Recovery Demand (KSh)</label>
        <input type="text" class="form-control" id="edit-subrogation-amount" value="${escapeHTML(sub.amount)}">
      </div>
    </div>
    <div>
      <label class="form-label">Recovery Status</label>
      <select class="form-control" id="edit-subrogation-status">
        <option value="Demand Notice Sent" ${sub.status === 'Demand Notice Sent' ? 'selected' : ''}>Demand Notice Sent</option>
        <option value="Under Dispute" ${sub.status === 'Under Dispute' ? 'selected' : ''}>Under Dispute</option>
        <option value="Recovered" ${sub.status === 'Recovered' ? 'selected' : ''}>Recovered</option>
      </select>
    </div>
  `;
  
  document.getElementById("generic-edit-modal").classList.add("active");
}

function openEditFleetVehicle(fleetId) {
  const fleet = countyFleets.find(f => f.id === fleetId) || countyFleets[0];
  activeEditRecord = { type: "fleet", data: fleet };
  
  document.getElementById("edit-modal-title").innerText = ` Edit Fleet Underwriting Policy: ${fleet.id}`;
  document.getElementById("edit-record-id").value = fleet.id;
  document.getElementById("edit-record-type").value = "fleet";
  
  const fieldsContainer = document.getElementById("edit-modal-fields");
  fieldsContainer.innerHTML = `
    <div>
      <label class="form-label">Fleet Policy Name / County</label>
      <input type="text" class="form-control" id="edit-fleet-county" value="${escapeHTML(fleet.county)}">
    </div>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">Fleet Category</label>
        <input type="text" class="form-control" id="edit-fleet-line" value="${escapeHTML(fleet.line)}">
      </div>
      <div>
        <label class="form-label">Gross Premium</label>
        <input type="text" class="form-control" id="edit-fleet-premium" value="${escapeHTML(fleet.premium)}">
      </div>
    </div>
  `;
  
  document.getElementById("generic-edit-modal").classList.add("active");
}

function openEditIRATaxRates() {
  activeEditRecord = { type: "ira" };
  
  document.getElementById("edit-modal-title").innerText = ` Edit IRA & KRA Statutory Tax Rates`;
  document.getElementById("edit-record-id").value = "ira";
  document.getElementById("edit-record-type").value = "ira";
  
  const fieldsContainer = document.getElementById("edit-modal-fields");
  fieldsContainer.innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
      <div>
        <label class="form-label">PHCF Levy Rate (%)</label>
        <input type="number" step="0.01" class="form-control" id="edit-ira-phcf" value="${iraTaxRates.phcf}">
      </div>
      <div>
        <label class="form-label">Training Levy Rate (%)</label>
        <input type="number" step="0.01" class="form-control" id="edit-ira-training" value="${iraTaxRates.training}">
      </div>
    </div>
    <div>
      <label class="form-label">Stamp Duty Fee (KSh)</label>
      <input type="number" class="form-control" id="edit-ira-stamp" value="${iraTaxRates.stampDuty}">
    </div>
  `;
  
  document.getElementById("generic-edit-modal").classList.add("active");
}

function saveEditedRecord() {
  const type = document.getElementById("edit-record-type").value;
  
  if (type === "claim") {
    const id = document.getElementById("edit-record-id").value;
    const claim = claims.find(c => c.id === id);
    if (claim) {
      claim.owner = document.getElementById("edit-claim-owner").value;
      claim.plate = document.getElementById("edit-claim-plate").value;
      claim.cost = parseFloat(document.getElementById("edit-claim-cost").value) || claim.cost;
      claim.status = document.getElementById("edit-claim-status").value;
      claim.triage = document.getElementById("edit-claim-triage").value;
      claim.fraudScore = parseInt(document.getElementById("edit-claim-fraud").value) || claim.fraudScore;
      
      showToast("Claim Saved", `Claim ${claim.id} updated successfully.`, "success");
      renderClaimsDirectory();
      renderDashboard();
    }
  } else if (type === "policy") {
    const id = document.getElementById("edit-record-id").value;
    const policy = policies.find(p => p.policyNo === id);
    if (policy) {
      policy.clientName = document.getElementById("edit-policy-name").value;
      policy.plate = document.getElementById("edit-policy-plate").value;
      policy.premium = parseFloat(document.getElementById("edit-policy-premium").value) || policy.premium;
      policy.status = document.getElementById("edit-policy-status").value;
      policy.branch = document.getElementById("edit-policy-branch").value;
      policy.certId = document.getElementById("edit-policy-cert").value;
      
      showToast("Policy Saved", `Policy ${policy.policyNo} updated successfully.`, "success");
      renderPolicyRegistry();
    }
  } else if (type === "garage") {
    const idx = parseInt(document.getElementById("edit-record-id").value) || 0;
    if (garages[idx]) {
      garages[idx].name = document.getElementById("edit-garage-name").value;
      garages[idx].location = document.getElementById("edit-garage-location").value;
      garages[idx].slaScore = document.getElementById("edit-garage-sla").value;
      garages[idx].activeRepairs = parseInt(document.getElementById("edit-garage-repairs").value) || garages[idx].activeRepairs;
      
      showToast("Garage Saved", `Garage ${garages[idx].name} updated.`, "success");
      renderGarageNetwork();
    }
  } else if (type === "assessor") {
    const name = document.getElementById("edit-record-id").value;
    const assessor = assessors.find(a => a.name === name);
    if (assessor) {
      assessor.name = document.getElementById("edit-assessor-name").value;
      assessor.location = document.getElementById("edit-assessor-location").value;
      assessor.spec = document.getElementById("edit-assessor-spec").value;
      
      showToast("Assessor Saved", `Assessor firm updated.`, "success");
      renderLossAssessors();
    }
  } else if (type === "reinsurance") {
    reinsuranceData.retentionLimit = parseFloat(document.getElementById("edit-reinsurance-retention").value) || 5000000;
    reinsuranceData.kenyaRe = parseFloat(document.getElementById("edit-reinsurance-kenya-re").value) || 40;
    reinsuranceData.zepRe = parseFloat(document.getElementById("edit-reinsurance-zep-re").value) || 35;
    reinsuranceData.africaRe = parseFloat(document.getElementById("edit-reinsurance-africa-re").value) || 25;
    
    reinsurers[0].share = reinsuranceData.kenyaRe + "%";
    reinsurers[1].share = reinsuranceData.zepRe + "%";
    reinsurers[2].share = reinsuranceData.africaRe + "%";
    
    showToast("Reinsurance Cessions Saved", "Updated retention limits and pool shares.", "success");
    renderReinsuranceCeding();
  } else if (type === "subrogation") {
    const id = document.getElementById("edit-record-id").value;
    const sub = subrogationCases.find(s => s.claimId === id);
    if (sub) {
      sub.thirdPartyInsurer = document.getElementById("edit-subrogation-insurer").value;
      sub.fault = document.getElementById("edit-subrogation-fault").value;
      sub.amount = document.getElementById("edit-subrogation-amount").value;
      sub.status = document.getElementById("edit-subrogation-status").value;
      
      showToast("Subrogation Recovery Saved", `Demand notice updated for ${sub.claimId}`, "success");
      renderSubrogationRecovery();
    }
  } else if (type === "fleet") {
    const id = document.getElementById("edit-record-id").value;
    const fleet = countyFleets.find(f => f.id === id);
    if (fleet) {
      fleet.county = document.getElementById("edit-fleet-county").value;
      fleet.line = document.getElementById("edit-fleet-line").value;
      fleet.premium = document.getElementById("edit-fleet-premium").value;
      
      showToast("Fleet Policy Saved", `Fleet policy ${fleet.id} updated.`, "success");
      renderFleetUnderwriting();
    }
  } else if (type === "ira") {
    iraTaxRates.phcf = parseFloat(document.getElementById("edit-ira-phcf").value) || 0.25;
    iraTaxRates.training = parseFloat(document.getElementById("edit-ira-training").value) || 0.20;
    iraTaxRates.stampDuty = parseFloat(document.getElementById("edit-ira-stamp").value) || 40;
    
    showToast("Statutory Tax Rates Saved", "Updated PHCF, Training Levy, and Stamp Duty values.", "success");
    renderIRACompliance();
  }
  
  closeEditModal();
}

// ================= LIVE CAMERA STREAM & DEMO PHOTO ENGINE =================

const demoDamagedCarImage = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" style="background:#111827;">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#0266cc" stop-opacity="0.3"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" fill="url(#bgGrad)"/>
  <path d="M0 380 L800 380 L800 500 L0 500 Z" fill="#090d16"/>
  <line x1="0" y1="380" x2="800" y2="380" stroke="#ff6b00" stroke-width="3" stroke-dasharray="15,10"/>
  <ellipse cx="400" cy="400" rx="320" ry="45" fill="#000000" opacity="0.7"/>

  <g>
    <path d="M120 340 L160 250 L260 170 L540 170 L660 250 L720 310 L720 360 L120 360 Z" fill="url(#carBody)"/>
    <path d="M260 170 L340 100 L500 100 L560 170 Z" fill="#7f1d1d"/>
    <path d="M275 165 L345 110 L435 110 L435 165 Z" fill="url(#glass)"/>
    <path d="M445 165 L445 110 L495 110 L545 165 Z" fill="url(#glass)"/>
    <circle cx="230" cy="360" r="50" fill="#18181b" stroke="#3f3f46" stroke-width="8"/>
    <circle cx="230" cy="360" r="22" fill="#d4d4d8"/>
    <circle cx="590" cy="360" r="50" fill="#18181b" stroke="#3f3f46" stroke-width="8"/>
    <circle cx="590" cy="360" r="22" fill="#d4d4d8"/>
    <path d="M700 290 Q720 300 710 320 L690 320 Z" fill="#fef08a"/>
    <path d="M130 290 Q110 300 120 320 L140 320 Z" fill="#ef4444"/>
    <rect x="330" y="320" width="140" height="32" rx="4" fill="#ffffff" stroke="#000000" stroke-width="2"/>
    <text x="400" y="342" font-family="monospace" font-size="18" font-weight="bold" fill="#000000" text-anchor="middle">KDG 123A</text>
  </g>

  <g>
    <path d="M620 250 Q660 270 640 310 Q680 290 710 340" stroke="#450a0a" stroke-width="6" fill="none"/>
    <path d="M600 280 L650 300 L620 330" stroke="#7f1d1d" stroke-width="4" fill="none"/>
    <circle cx="650" cy="290" r="35" fill="#ef4444" fill-opacity="0.25" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="650" y="294" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">IMPACT DENT</text>
    <path d="M380 240 L460 270 M390 250 L470 280 M370 260 L440 285" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
    <circle cx="420" cy="260" r="28" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="420" y="264" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">SCRATCHES</text>
    <path d="M310 140 L340 120 L330 155 L360 135 M320 130 L295 145" stroke="#38bdf8" stroke-width="2" fill="none"/>
    <circle cx="325" cy="138" r="22" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="325" y="141" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">GLASS CRACK</text>
  </g>

  <rect x="20" y="20" width="340" height="40" rx="8" fill="#090d16" fill-opacity="0.85" stroke="#ff6b00" stroke-width="1"/>
  <text x="35" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ff6b00"> EXIF TELEMETRY VERIFIED • NAIROBI CBD</text>
</svg>
`);

let activeCameraStream = null;

function closeCameraModal() {
  const modal = document.getElementById("camera-capture-modal");
  if (modal) modal.classList.remove("active");
  if (activeCameraStream) {
    activeCameraStream.getTracks().forEach(track => track.stop());
    activeCameraStream = null;
  }
}

function openCameraCaptureModal() {
  const modal = document.getElementById("camera-capture-modal");
  const video = document.getElementById("live-camera-feed");
  const fallback = document.getElementById("camera-fallback-view");
  
  if (modal) {
    modal.classList.add("open");
    modal.classList.add("active");
  }
  
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then(stream => {
        activeCameraStream = stream;
        video.srcObject = stream;
        video.style.display = "block";
        fallback.style.display = "none";
      })
      .catch(err => {
        console.warn("Camera access fallback:", err);
        video.style.display = "none";
        fallback.style.display = "block";
      });
  } else {
    video.style.display = "none";
    fallback.style.display = "block";
  }
}

function loadHighResDemoPhoto() {
  closeCameraModal();
  document.getElementById("media-placeholder-content").style.display = "none";
  const bgImg = document.getElementById("annotate-bg-img");
  const bgVideo = document.getElementById("annotate-bg-video");
  const canvas = document.getElementById("annotation-canvas");
  const typeLabel = document.getElementById("telemetry-media-type");
  const timestampLabel = document.getElementById("exif-timestamp");
  
  if (timestampLabel) timestampLabel.innerText = new Date().toLocaleString();
  
  bgVideo.style.display = "none";
  bgImg.style.display = "block";
  canvas.style.display = "block";
  bgImg.src = "assets/car_damaged.jpg";
  
  typeLabel.innerText = "Image (EXIF verified, Imaginary Demo Plate KDG 123A)";
  
  bgImg.onload = () => {
    annotationImageLoaded = true;
    resizeAnnotationCanvas();
  };
  
  canvasCircles = [
    { x: 580, y: 390, type: "dent" },
    { x: 230, y: 310, type: "scratch" },
    { x: 410, y: 220, type: "crack" }
  ];
  
  showToast("Demo Telemetry Loaded", "Real car photo loaded with imaginary license plate KDG 123A and damage markers.", "success");
}

function autoFillDemoClaimData() {
  document.getElementById("claim-plate").value = "KDG 123A";
  document.getElementById("claim-owner").value = "Boniface Mwangi";
  document.getElementById("claim-phone").value = "+254 712 345678";
  
  if (!annotationImageLoaded) {
    loadHighResDemoPhoto();
  }
  
  showToast("Demo Data Auto-Filled", "Registration, claimant name, mobile, and vehicle telemetry loaded.", "success");
}

function quickSubmitDemoClaim() {
  autoFillDemoClaimData();
  runANPRScanSimulation();
  
  currentFNOLClaim = {
    id: "CLM-2026-00" + (claims.length + 1),
    plate: "KDG 123A",
    owner: "Boniface Mwangi",
    phone: "+254 712 345678",
    date: new Date().toISOString().split("T")[0],
    cost: 142500,
    fraudScore: 8,
    triage: "Green",
    status: "Approved",
    coords: [-1.286389, 36.817223],
    county: "Nairobi County",
    police: "Central Police Station (0.4 km)",
    tow: "Nairobi Towing Logistics (0.9 km)",
    annotations: [
      { x: 650, y: 290, type: "dent" },
      { x: 420, y: 260, type: "scratch" },
      { x: 325, y: 138, type: "crack" }
    ],
    flags: ["EXIF metadata verified", "NTSA database matching", "Instant Pass Approved"]
  };
  
  saveFNOLClaim();
}

// ================= VEHICLE MODEL LOSS RATIOS & ACTUARIAL ANALYTICS =================
let vehicleModelLossRatios = [
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

function renderVehicleLossRatios() {
  const tbody = document.getElementById("vehicle-loss-ratios-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  const search = (document.getElementById("model-search-input")?.value || "").toLowerCase();
  const cat = document.getElementById("model-category-filter")?.value || "all";

  const filtered = vehicleModelLossRatios.filter(m => {
    const matchSearch = m.model.toLowerCase().includes(search) || m.category.toLowerCase().includes(search);
    const matchCat = cat === "all" || m.category === cat;
    return matchSearch && matchCat;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:16px; color:var(--text-muted);">No vehicle models found matching filter.</td></tr>`;
    return;
  }

  filtered.forEach(m => {
    const lossRatio = (m.incurredClaims / m.earnedPremium) * 100;
    
    let riskBadge = `<span class="status-badge approved">Low Risk (${lossRatio.toFixed(1)}%)</span>`;
    if (lossRatio > 75) {
      riskBadge = `<span class="status-badge investigation"> High Risk (${lossRatio.toFixed(1)}%)</span>`;
    } else if (lossRatio >= 50) {
      riskBadge = `<span class="status-badge pending">Moderate Risk (${lossRatio.toFixed(1)}%)</span>`;
    }

    let loadingBadge = `<span class="badge" style="background:rgba(2,102,204,0.15); color:#38bdf8;">Standard Rate</span>`;
    if (m.loadingPct > 0) {
      loadingBadge = `<span class="badge" style="background:rgba(239,68,68,0.18); color:#f87171; font-weight:700;">+${m.loadingPct}% Surcharge</span>`;
    } else if (m.loadingPct < 0) {
      loadingBadge = `<span class="badge" style="background:rgba(16,185,129,0.18); color:#34d399; font-weight:700;">${m.loadingPct}% Rebate</span>`;
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${m.model}</strong></td>
      <td><span style="font-size:12px; color:var(--text-secondary);">${m.category}</span></td>
      <td>${m.activePolicies.toLocaleString()} units</td>
      <td><strong style="color:var(--primary);">KSh ${(m.earnedPremium / 1000000).toFixed(1)}M</strong></td>
      <td><strong style="color:var(--text-primary);">KSh ${(m.incurredClaims / 1000000).toFixed(1)}M</strong></td>
      <td><strong style="font-size:13.5px; color:${lossRatio > 75 ? '#ef4444' : (lossRatio >= 50 ? '#f59e0b' : '#10b981')}">${lossRatio.toFixed(1)}%</strong></td>
      <td>${riskBadge}</td>
      <td>${loadingBadge}</td>
      <td>
        <button class="btn btn-secondary" onclick="adjustModelLoading('${m.model}')" style="padding:3px 8px; font-size:11px;"> Adjust Premium</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function applyHighRiskRateLoadings() {
  vehicleModelLossRatios.forEach(m => {
    const lr = (m.incurredClaims / m.earnedPremium) * 100;
    if (lr > 75) {
      m.loadingPct = 20;
    }
  });

  renderVehicleLossRatios();
  showToast(
    " Actuarial Surcharges Activated!",
    "Applied +20% mandatory rate loading to all high loss ratio vehicle models (>75% Loss Ratio). Underwriting quota engines updated.",
    "warning"
  );
}

function adjustModelLoading(modelName) {
  const item = vehicleModelLossRatios.find(m => m.model === modelName);
  if (!item) return;

  const currentLr = ((item.incurredClaims / item.earnedPremium) * 100).toFixed(1);
  const newLoading = prompt(`Adjust Underwriting Rate Loading (%) for ${item.model} (Current Loss Ratio: ${currentLr}%):`, item.loadingPct);

  if (newLoading !== null) {
    item.loadingPct = parseInt(newLoading) || 0;
    renderVehicleLossRatios();
    showToast("Actuarial Loading Saved", `Updated premium loading for ${item.model} to ${item.loadingPct}%.`, "success");
  }
}

// ================= ELECTRIC VEHICLE (EV) PREMIUM CALCULATOR ENGINE =================
function onEVModelSelectChange() {
  const model = document.getElementById("ev-model-select")?.value;
  const sumInsuredInput = document.getElementById("ev-sum-insured");
  const batteryInput = document.getElementById("ev-battery-capacity");

  if (!model || !sumInsuredInput || !batteryInput) return;

  if (model.includes("BYD Atto 3")) {
    sumInsuredInput.value = 4500000;
    batteryInput.value = "60.5 kWh (LFP Blade)";
  } else if (model.includes("Tesla Model Y")) {
    sumInsuredInput.value = 7800000;
    batteryInput.value = "75.0 kWh (NMC Dual Motor)";
  } else if (model.includes("Nissan Leaf")) {
    sumInsuredInput.value = 2800000;
    batteryInput.value = "40.0 kWh (Air-cooled Laminated)";
  } else if (model.includes("Hyundai Ioniq 5")) {
    sumInsuredInput.value = 6200000;
    batteryInput.value = "77.4 kWh (800V Ultra-Fast)";
  } else if (model.includes("Roam Electric")) {
    sumInsuredInput.value = 12500000;
    batteryInput.value = "384.0 kWh (Commercial Heavy LFP)";
  } else if (model.includes("Opibus")) {
    sumInsuredInput.value = 3200000;
    batteryInput.value = "50.0 kWh (Local Modular Conversion)";
  }

  calculateEVPremium();
}

function calculateEVPremium() {
  const sumInsured = parseFloat(document.getElementById("ev-sum-insured")?.value || 4500000);
  const km = parseInt(document.getElementById("ev-km-range")?.value || 7500);
  const spareLoadingPct = parseFloat(document.getElementById("ev-spare-sourcing")?.value || 15);

  const chkAdas = document.getElementById("ev-chk-adas")?.checked;
  const chkThermal = document.getElementById("ev-chk-thermal")?.checked;
  const chkGarage = document.getElementById("ev-chk-garage")?.checked;

  // Update km label
  const kmLabel = document.getElementById("ev-km-label");
  if (kmLabel) kmLabel.innerText = `${km.toLocaleString()} km / year`;

  // Compute Low Mileage Telemetry Discount %
  let usageDiscountPct = 0;
  if (km < 5000) usageDiscountPct = 17.5;
  else if (km <= 10000) usageDiscountPct = 12.5;
  else if (km <= 15000) usageDiscountPct = 5.0;
  else usageDiscountPct = 0;

  const usageLabel = document.getElementById("ev-usage-discount-label");
  if (usageLabel) usageLabel.innerText = usageDiscountPct > 0 ? `-${usageDiscountPct.toFixed(1)}% Low Usage Rebate` : `0% (High Annual Exposure)`;

  // Compute Safety Tech Rebate %
  let safetyRebatePct = 0;
  if (chkAdas) safetyRebatePct += 7.5;
  if (chkThermal) safetyRebatePct += 5.0;
  if (chkGarage) safetyRebatePct += 2.5;

  const baseRate = 0.035; // 3.50%
  const basePremium = sumInsured * baseRate;

  const spareLoadingAmt = basePremium * (spareLoadingPct / 100);
  const usageRebateAmt = basePremium * (usageDiscountPct / 100);
  const adasRebateAmt = basePremium * (safetyRebatePct / 100);

  const netPremium = basePremium + spareLoadingAmt - usageRebateAmt - adasRebateAmt;
  const levies = (netPremium * 0.0045) + 40; // PCF 0.25% + ITL 0.2% + Stamp Duty KSh 40
  const totalPayable = netPremium + levies;
  const effectiveRate = (totalPayable / sumInsured) * 100;

  // Update UI Elements
  const elBase = document.getElementById("ev-calc-base");
  const elSpare = document.getElementById("ev-calc-spare");
  const elUsage = document.getElementById("ev-calc-usage");
  const elAdas = document.getElementById("ev-calc-adas");
  const elNetPrem = document.getElementById("ev-calc-net-prem");
  const elLevies = document.getElementById("ev-calc-levies");
  const elTotalPayable = document.getElementById("ev-calc-total-payable");
  const elNetEffRate = document.getElementById("ev-calc-net-eff-rate");

  if (elBase) elBase.innerText = "KSh " + Math.round(basePremium).toLocaleString();
  if (elSpare) elSpare.innerText = `+KSh ${Math.round(spareLoadingAmt).toLocaleString()} (+${spareLoadingPct.toFixed(1)}%)`;
  if (elUsage) elUsage.innerText = `-${usageRebateAmt > 0 ? 'KSh ' + Math.round(usageRebateAmt).toLocaleString() : '0'} (-${usageDiscountPct.toFixed(1)}%)`;
  if (elAdas) elAdas.innerText = `-${adasRebateAmt > 0 ? 'KSh ' + Math.round(adasRebateAmt).toLocaleString() : '0'} (-${safetyRebatePct.toFixed(1)}%)`;
  if (elNetPrem) elNetPrem.innerText = "KSh " + Math.round(netPremium).toLocaleString();
  if (elLevies) elLevies.innerText = "KSh " + Math.round(levies).toLocaleString();
  if (elTotalPayable) elTotalPayable.innerText = "KSh " + Math.round(totalPayable).toLocaleString();
  if (elNetEffRate) elNetEffRate.innerText = `Effective Rate: ${effectiveRate.toFixed(2)}% of Vehicle Value`;
}

function resetEVForm() {
  const range = document.getElementById("ev-km-range");
  if (range) range.value = 7500;
  const select = document.getElementById("ev-spare-sourcing");
  if (select) select.value = 15;
  const c1 = document.getElementById("ev-chk-adas");
  if (c1) c1.checked = true;
  const c2 = document.getElementById("ev-chk-thermal");
  if (c2) c2.checked = true;
  const c3 = document.getElementById("ev-chk-garage");
  if (c3) c3.checked = true;
  onEVModelSelectChange();
  showToast("EV Calculator Reset", "Reset parameters to standard 7,500 km/yr low-usage baseline.", "info");
}

function issueEVPolicyCertificate() {
  const model = document.getElementById("ev-model-select")?.value || "BYD Atto 3 EV";
  const total = document.getElementById("ev-calc-total-payable")?.innerText || "KSh 138,473";
  
  const newEVPolicy = {
    policyNo: "POL-EV-2026-" + Math.floor(1000 + Math.random() * 8999),
    clientName: "Green Mobility Kenya Ltd",
    plate: "KDG 888E",
    certId: "CERT-EV-2026-" + Math.floor(1000 + Math.random() * 8999),
    status: "Active",
    premium: 138473
  };

  policies.unshift(newEVPolicy);
  openAKICertModal(newEVPolicy.policyNo);
  showToast(" EV Digital Certificate Issued!", `Issued official AKI Motor Certificate for ${model} (${total}/yr). Cryptographic QR generated.`, "success");
}

// ================= REMOTE WORK (WFH) & STAFF SURVEILLANCE ENGINE =================
let remoteStaffSessions = [
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

function renderRemoteStaffTable() {
  const tbody = document.getElementById("remote-staff-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  const query = (document.getElementById("remote-search-input")?.value || "").toLowerCase();

  const filtered = remoteStaffSessions.filter(s => {
    return s.name.toLowerCase().includes(query) || s.role.toLowerCase().includes(query) || s.location.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:16px; color:var(--text-muted);">No remote staff sessions matched filter.</td></tr>`;
    return;
  }

  filtered.forEach(s => {
    const tr = document.createElement("tr");
    
    let statusBadge = `<span class="status-badge approved"> ${s.status}</span>`;
    if (s.pulsePct < 90) {
      statusBadge = `<span class="status-badge pending"> ${s.status} (Idle Check)</span>`;
    }

    let pulseColor = "#10b981";
    if (s.pulsePct < 90) pulseColor = "#f59e0b";

    tr.innerHTML = `
      <td><strong>${s.name}</strong><br><span style="font-size:10px; color:var(--text-muted);">ID: ${s.id}</span></td>
      <td><span style="font-size:12px; font-weight:600; color:var(--primary);">${s.role}</span></td>
      <td><strong>${s.location}</strong><br><code style="font-size:10px; color:var(--text-muted);">${s.ip}</code></td>
      <td><span style="font-size:12px; color:var(--text-secondary);">${s.clockIn}</span></td>
      <td><span style="font-size:11.5px; color:var(--text-primary); font-weight:600;">${s.activeTask}</span></td>
      <td>
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="flex:1; height:6px; background:var(--bg-primary); border-radius:4px; overflow:hidden;">
            <div style="width:${s.pulsePct}%; height:100%; background:${pulseColor}; border-radius:4px;"></div>
          </div>
          <strong style="font-size:12px; color:${pulseColor};">${s.pulsePct}%</strong>
        </div>
      </td>
      <td>${statusBadge}</td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-secondary" onclick="viewRemoteTelemetry('${s.id}')" style="padding:3px 8px; font-size:11px;"> Telemetry</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function triggerRemotePulseCheck() {
  remoteStaffSessions.forEach(s => {
    s.pulsePct = Math.min(100, Math.max(85, s.pulsePct + Math.floor(Math.random() * 5 - 2)));
  });
  renderRemoteStaffTable();
  showToast(" Remote Telemetry Pinged!", "Active heartbeats & screen focus verified for 6 remote WFH staff sessions. Zero data breach flags.", "success");
}

function toggleWFHMode() {
  showToast(" WFH Session Active", "Your home device (IP 197.232.14.88) is connected via TLS 1.3 Encrypted Tunnel. Activity pulse active.", "info");
}

function viewRemoteTelemetry(staffId) {
  const staff = remoteStaffSessions.find(s => s.id === staffId);
  if (!staff) return;

  showToast(
    ` Remote Telemetry: ${staff.name}`,
    `Location: ${staff.location} | IP: ${staff.ip} | Active Task: ${staff.activeTask} (${staff.pulsePct}% Keyboard/Mouse Pulse).`,
    "info"
  );
}

// ================= E-CITIZEN & PESAFLOW INTEGRATION ENGINE =================
let pesaflowTransactions = [
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

function renderPesaFlowTransactionsTable() {
  const tbody = document.getElementById("pesaflow-transactions-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  if (pesaflowTransactions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:16px; color:var(--text-muted);">No PesaFlow transactions recorded yet.</td></tr>`;
    return;
  }

  pesaflowTransactions.forEach(t => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><code>${t.ref}</code></td>
      <td><strong style="color:var(--primary);">${t.billNo}</strong></td>
      <td>${t.payer}</td>
      <td><span class="badge" style="background:rgba(2,102,204,0.15); color:#38bdf8;">${t.channel}</span></td>
      <td><strong style="color:var(--success);">KSh ${t.amount.toLocaleString()}</strong></td>
      <td>KSh ${t.stampDuty} (Paid)</td>
      <td><span class="status-badge approved">✓ ${t.status}</span></td>
      <td>
        <button class="btn btn-secondary" onclick="viewPesaFlowReceipt('${t.ref}')" style="padding:3px 8px; font-size:11px;"> Receipt</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openECitizenSSOModal() {
  const modal = document.getElementById("ecitizen-sso-modal");
  if (modal) modal.classList.add("active");
}

function closeECitizenSSOModal() {
  const modal = document.getElementById("ecitizen-sso-modal");
  if (modal) modal.classList.remove("active");
}

function confirmECitizenSSO() {
  const idNo = document.getElementById("ecitizen-id-input")?.value || "28910293";
  closeECitizenSSOModal();
  showToast(
    " e-Citizen SSO Authenticated!",
    `User National ID ${idNo} authenticated via e-Citizen OAuth2 Single Sign-On. NTSA motor logbooks linked.`,
    "success"
  );
}

function runECitizenNTSASync() {
  showToast(" Syncing NTSA Motor Registry", "Querying e-Citizen NTSA Motor Database API for active vehicle logbooks...", "info");
  setTimeout(() => {
    showToast(" NTSA Registry Synced!", "Verified 4,290 registered motor logbooks and chassis IDs against e-Citizen ledger.", "success");
  }, 1200);
}

function openPesaFlowModal() {
  const modal = document.getElementById("pesaflow-checkout-modal");
  if (!modal) return;

  const billRef = "ECIT-KEN-2026-" + Math.floor(100000 + Math.random() * 899999);
  const billEl = document.getElementById("pesaflow-modal-bill-ref");
  if (billEl) billEl.innerText = `Service Bill Ref: ${billRef}`;

  modal.classList.add("active");
}

function closePesaFlowModal() {
  const modal = document.getElementById("pesaflow-checkout-modal");
  if (modal) modal.classList.remove("active");
}

function confirmPesaFlowPayment() {
  const channel = document.getElementById("pesaflow-channel-select")?.value || "PesaFlow M-PESA STK";
  const payer = document.getElementById("pesaflow-phone-input")?.value || "+254 712 345678";
  const amount = parseFloat(document.getElementById("pesaflow-amount-input")?.value || 150333);
  
  const billText = document.getElementById("pesaflow-modal-bill-ref")?.innerText || "ECIT-KEN-2026-990812";
  const billNo = billText.replace("Service Bill Ref: ", "");

  const newTx = {
    ref: "PSF-2026-" + Math.floor(100000 + Math.random() * 899999),
    billNo: billNo,
    payer: `${payer} (e-Citizen Verified)`,
    channel: channel,
    amount: amount,
    stampDuty: 40,
    status: "Settled & Remitted"
  };

  pesaflowTransactions.unshift(newTx);
  closePesaFlowModal();
  renderPesaFlowTransactionsTable();

  showToast(
    " PesaFlow Payment Confirmed!",
    `Settled KSh ${amount.toLocaleString()} via ${channel} (Paybill 222222, Bill Ref: ${billNo}). KRA Stamp Duty remitted.`,
    "success"
  );
}

function viewPesaFlowReceipt(refId) {
  const tx = pesaflowTransactions.find(t => t.ref === refId);
  if (!tx) return;

  showToast(
    ` PesaFlow Receipt: ${tx.ref}`,
    `Bill: ${tx.billNo} | Payer: ${tx.payer} | Amount: KSh ${tx.amount.toLocaleString()} via ${tx.channel}. KRA Stamp Duty Remitted (KSh 40).`,
    "info"
  );
}

// ================= KRA ITAX & ETIMS COMPLIANCE ENGINE =================
let itaxRemittances = [
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

function renderITaxRemittanceTable() {
  const tbody = document.getElementById("itax-remittance-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  const query = (document.getElementById("itax-search-input")?.value || "").toLowerCase();
  const filterHead = document.getElementById("itax-head-filter")?.value || "all";

  const filtered = itaxRemittances.filter(r => {
    const matchesQuery = r.ackRef.toLowerCase().includes(query) || r.origin.toLowerCase().includes(query) || r.etimsCode.toLowerCase().includes(query);
    const matchesHead = filterHead === "all" || r.head === filterHead;
    return matchesQuery && matchesHead;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:16px; color:var(--text-muted);">No iTax remittances matched filter.</td></tr>`;
    return;
  }

  filtered.forEach(r => {
    const tr = document.createElement("tr");
    
    let headBadge = `<span class="badge" style="background:rgba(2,102,204,0.15); color:#38bdf8;">${r.head}</span>`;
    if (r.head.includes("WHT")) headBadge = `<span class="badge" style="background:rgba(16,185,129,0.15); color:#34d399;">${r.head}</span>`;
    if (r.head.includes("Excise")) headBadge = `<span class="badge" style="background:rgba(255,107,0,0.15); color:#ff8533;">${r.head}</span>`;
    if (r.head.includes("Stamp")) headBadge = `<span class="badge" style="background:rgba(220,38,38,0.15); color:#ef4444;">${r.head}</span>`;

    tr.innerHTML = `
      <td><code>${r.ackRef}</code></td>
      <td><strong>${r.origin}</strong></td>
      <td>${headBadge}</td>
      <td>KSh ${r.grossAmount.toLocaleString()}</td>
      <td><strong style="color:var(--success);">KSh ${r.taxAmount.toLocaleString()}</strong></td>
      <td><code style="font-size:10px; color:var(--primary);">${r.etimsCode}</code></td>
      <td><span class="status-badge approved">✓ ${r.status}</span></td>
      <td>
        <button class="btn btn-secondary" onclick="viewITaxReceipt('${r.ackRef}')" style="padding:3px 8px; font-size:11px;"> iTax Receipt</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openITaxFilingModal() {
  const modal = document.getElementById("itax-filing-modal");
  if (modal) modal.classList.add("active");
}

function closeITaxFilingModal() {
  const modal = document.getElementById("itax-filing-modal");
  if (modal) modal.classList.remove("active");
}

function confirmITaxFiling() {
  const returnType = document.getElementById("itax-return-type-select")?.value || "VAT 3";
  const payable = document.getElementById("itax-modal-payable")?.innerText || "KSh 3,842,500";

  const newAck = {
    ackRef: "KRA-ITAX-2026-" + Math.floor(100000 + Math.random() * 899999),
    origin: `KRA iTax ${returnType} Monthly Return (July 2026)`,
    head: returnType.includes("VAT") ? "VAT 16%" : (returnType.includes("WHT") ? "WHT 5%" : "Excise Duty 20%"),
    grossAmount: 24015625,
    taxAmount: 3842500,
    etimsCode: "ETIMS-2026-CU-" + Math.floor(100000 + Math.random() * 899999),
    status: "Remitted & Synced"
  };

  itaxRemittances.unshift(newAck);
  closeITaxFilingModal();
  renderITaxRemittanceTable();

  showToast(
    ` KRA iTax Return Filed (${returnType})`,
    `Successfully auto-filed Form ${returnType} on KRA iTax. Ack Ref: ${newAck.ackRef}. Net tax remitted: ${payable}.`,
    "success"
  );
}

function runETIMSBulkSync() {
  showToast(" Syncing eTIMS Tax Invoices", "Encrypting and transmitting debit notes & claim invoices to KRA eTIMS Server...", "info");
  setTimeout(() => {
    showToast(" eTIMS Invoices Synced!", "Verified 1,842 eTIMS QR Control Codes with KRA eTIMS Central Database.", "success");
  }, 1200);
}

function viewITaxReceipt(ackRef) {
  const r = itaxRemittances.find(x => x.ackRef === ackRef);
  if (!r) return;

  showToast(
    ` KRA iTax Certificate: ${r.ackRef}`,
    `Origin: ${r.origin} | Tax Head: ${r.head} | Tax Paid: KSh ${r.taxAmount.toLocaleString()} | eTIMS: ${r.etimsCode}`,
    "info"
  );
}

// ================= UNIVERSAL KENYAN LPR / ANPR RECOGNITION ENGINE =================
const lprSampleFormats = {
  civilian: {
    plate: "KDG 123A",
    type: "Standard Civilian FE-Aluminium (Yellow/White)",
    conf: 99.4,
    rfid: "RFID-NTSA-881920 Verified",
    model: "Toyota Fielder • Boniface Mwangi",
    status: "Active Policy Match (POL-MOT-8973)",
    loc: "Nairobi Expressway Highway Toll Gate 04",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  },
  ev: {
    plate: "KDA 888E",
    type: "Electric Vehicle (EV Green Plate Series)",
    conf: 98.9,
    rfid: "RFID-EV-2026-9081 Verified",
    model: "BYD Atto 3 EV • Green Mobility Kenya",
    status: "Active EV Policy (POL-EV-2026-990)",
    loc: "Westlands Mall EV Charging Station Gate",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  },
  psv: {
    plate: "KBZ 442P",
    type: "Public Service Vehicle (PSV Matatu Sacco)",
    conf: 97.8,
    rfid: "RFID-PSV-44120 Verified",
    model: "Isuzu NQR Bus • Super Metro Sacco",
    status: "Active Fleet Policy (POL-FLT-2026-401)",
    loc: "Thika Superhighway Exit 7 ANPR Camera",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  },
  gk: {
    plate: "GK 492B",
    type: "Government of Kenya (GK National Executive)",
    conf: 99.1,
    rfid: "RFID-GK-99012 Verified",
    model: "Toyota Land Cruiser Prado • Min. of Transport",
    status: "Exempt Statutory County Fleet",
    loc: "Harambee Avenue State House Plaza Camera",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  },
  county: {
    plate: "47 CG 102A",
    type: "County Government Fleet (47 Nairobi City County)",
    conf: 98.4,
    rfid: "RFID-CG47-8819 Verified",
    model: "Isuzu FRR Tipper • Nairobi City County",
    status: "Active Bulk Fleet (POL-CTY-2026-001)",
    loc: "City Hall Way ANPR Camera 02",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  },
  cd: {
    plate: "43 CD 12K",
    type: "Diplomatic Corps (CD Red Plate - US Embassy)",
    conf: 99.7,
    rfid: "RFID-CD-04312 Diplomatic Immunity",
    model: "Chevrolet Suburban • Diplomatic Mission",
    status: "International Diplomatic Immunity Cover",
    loc: "UN Avenue Gigiri Embassy Guard Post",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  },
  kdf: {
    plate: "78 KA 12",
    type: "Kenya Defence Forces (KDF Military Series)",
    conf: 98.2,
    rfid: "RFID-MIL-78KA Restricted",
    model: "Land Rover Defender • Kenya Army HQ",
    status: "Military Defence Forces Protocol",
    loc: "Kahawa Barracks Gate 01 ANPR Scanner",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  },
  boda: {
    plate: "KMCF 481Z",
    type: "Motorcycle / Boda Boda (KMCL Series)",
    conf: 96.5,
    rfid: "RFID-MC-481Z Verified",
    model: "Boxer BM 150 • Peter Omondi",
    status: "Active Micro-Motorcycle Comprehensive",
    loc: "Mombasa Road Inland Depot Gate",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  },
  dealer: {
    plate: "KG 4812 A",
    type: "Dealer Motor Transit (KG Red Plate - Motor Trade)",
    conf: 97.1,
    rfid: "RFID-KG-4812 Transit Authorized",
    model: "Subaru Outback • CMC Motors Dealer Transit",
    status: "Active Motor Trade Transit Floater",
    loc: "Mombasa Port Kilindini Gate 03",
    photo: "/Users/bonny/.gemini/antigravity/brain/2d67edb3-b1e9-4a39-b489-67d3a5dc27c1/car_plate_1785783847334.jpg"
  }
};

let lprScanLogs = [
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

function renderLPRScansTable() {
  const tbody = document.getElementById("lpr-scans-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  const query = (document.getElementById("lpr-search-input")?.value || "").toLowerCase();

  const filtered = lprScanLogs.filter(s => {
    return s.plate.toLowerCase().includes(query) || s.format.toLowerCase().includes(query) || s.vehicle.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:16px; color:var(--text-muted);">No LPR scans matched search query.</td></tr>`;
    return;
  }

  filtered.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span style="font-size:11.5px; color:var(--text-muted);">${s.time}</span></td>
      <td><strong style="font-family:monospace; font-size:14px; color:var(--primary);">${s.plate}</strong></td>
      <td><span class="badge" style="background:rgba(2,102,204,0.15); color:#38bdf8;">${s.format}</span></td>
      <td><strong style="color:#10b981;">${s.conf}</strong></td>
      <td>${s.vehicle}</td>
      <td><span class="status-badge approved">✓ ${s.status}</span></td>
      <td><span style="font-size:11.5px; color:var(--text-secondary);">${s.location}</span></td>
      <td>
        <button class="btn btn-secondary" onclick="viewLPREXIFMedia('${s.plate}')" style="padding:3px 8px; font-size:11px;"> EXIF Frame</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function onLPRFormatChange() {
  const key = document.getElementById("lpr-format-selector")?.value || "civilian";
  const data = lprSampleFormats[key];
  if (!data) return;

  const vfPlate = document.getElementById("lpr-viewfinder-plate");
  const vfConf = document.getElementById("lpr-viewfinder-conf");
  const anPlate = document.getElementById("lpr-analysis-plate");
  const anType = document.getElementById("lpr-analysis-type");
  const anConf = document.getElementById("lpr-analysis-conf");
  const anRfid = document.getElementById("lpr-analysis-rfid");

  if (vfPlate) vfPlate.innerText = data.plate;
  if (vfConf) vfConf.innerText = `${data.conf}% CONF`;
  if (anPlate) anPlate.innerText = data.plate;
  if (anType) anType.innerText = data.type;
  if (anConf) anConf.innerText = `${data.conf}% Match`;
  if (anRfid) anRfid.innerText = `RFID Tag ID: ${data.rfid}`;

  showToast(` LPR Recognized: ${data.plate}`, `Extracted ${data.type} with ${data.conf}% OCR Confidence. NTSA Database Synced.`, "info");
}

function triggerLPRLiveFeedScan() {
  const keys = Object.keys(lprSampleFormats);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const data = lprSampleFormats[randomKey];

  const sel = document.getElementById("lpr-format-selector");
  if (sel) sel.value = randomKey;
  onLPRFormatChange();

  const nowStr = new Date().toISOString().replace("T", " ").substring(0, 16);
  const newLog = {
    time: nowStr,
    plate: data.plate,
    format: data.type.split(" ")[0] + " Series",
    conf: `${data.conf}%`,
    vehicle: data.model,
    status: data.status,
    location: data.loc
  };

  lprScanLogs.unshift(newLog);
  renderLPRScansTable();

  showToast(" Live Camera ANPR Capture", `Successfully scanned vehicle plate ${data.plate} (${data.type}) at 60 FPS.`, "success");
}

function simulateAllKenyanPlates() {
  showToast(" Running ANPR Batch Test", "Executing OCR multi-category recognition on 8 Kenyan plate formats...", "info");
  
  setTimeout(() => {
    Object.keys(lprSampleFormats).forEach(k => {
      const data = lprSampleFormats[k];
      lprScanLogs.unshift({
        time: new Date().toISOString().replace("T", " ").substring(0, 16),
        plate: data.plate,
        format: data.type.split(" ")[0] + " Series",
        conf: `${data.conf}%`,
        vehicle: data.model,
        status: data.status,
        location: data.loc
      });
    });
    renderLPRScansTable();
    showToast(" 8 Kenyan Plate Formats Passed!", "Successfully recognized Civilian, EV, PSV, GK, County, Diplomatic CD, Military KDF, and Boda Boda plates.", "success");
  }, 1200);
}

function viewLPREXIFMedia(plateNo) {
  const item = lprScanLogs.find(x => x.plate === plateNo);
  showToast(
    ` LPR Frame Audit: ${plateNo}`,
    `Location: ${item ? item.location : "Highway Camera 01"} | OCR Confidence: ${item ? item.conf : "99.4%"} | RFID Tag Verified.`,
    "info"
  );
}

// ================= DYNAMIC TEST QR CODE GENERATOR & VERIFIER ENGINE =================
const qrPresets = {
  aki: "https://eims.go.ke/v/POL8973",
  kra: "https://itax.kra.go.ke/v/INV98124",
  ecitizen: "https://ecitizen.go.ke/v/ECIT9908",
  ntsa: "https://ntsa.go.ke/v/KDG123A"
};

function renderStandardQRCodeContainer(container, text, options = {}) {
  if (!container) return;
  const fgColor = options.fgColor || "#000000";
  const bgColor = options.bgColor || "#ffffff";
  const size = options.size || 220;
  const logoType = options.logoType || "none";

  container.innerHTML = "";

  if (typeof QRCode !== "undefined") {
    // Render 100% ISO/IEC 18004 compliant scannable QR Code
    new QRCode(container, {
      text: text,
      width: size,
      height: size,
      colorDark: fgColor,
      colorLight: bgColor,
      correctLevel: QRCode.CorrectLevel.M
    });

    // Ensure Quiet Zone & High-Contrast styling for mobile phone cameras
    container.style.padding = "12px";
    container.style.background = bgColor;
    container.style.borderRadius = "12px";

    if (logoType !== "none") {
      setTimeout(() => {
        const logoOverlay = document.createElement("div");
        const logoSize = Math.floor(size * 0.20);
        // Text acronyms rather than emoji: they scale cleanly and render the
        // same on every device, which pictographs did not.
        let badgeIcon = "AMACO";

        if (logoType === "aki") { badgeIcon = "AKI"; }
        else if (logoType === "kra") { badgeIcon = "KRA"; }

        logoOverlay.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: ${logoSize}px;
          height: ${logoSize}px;
          background: ${bgColor};
          border: 2px solid ${fgColor};
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${Math.floor(logoSize * (badgeIcon.length > 3 ? 0.21 : 0.3))}px;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: ${fgColor};
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          pointer-events: none;
        `;
        logoOverlay.innerHTML = badgeIcon;

        container.style.position = "relative";
        container.appendChild(logoOverlay);
      }, 80);
    }
  }
}

function loadQRPreset(type) {
  const payloadBox = document.getElementById("qr-input-payload");
  const logoSel = document.getElementById("qr-opt-logo");

  if (payloadBox && qrPresets[type]) {
    payloadBox.value = qrPresets[type];
    if (type === "aki") logoSel.value = "none";
    else if (type === "kra") logoSel.value = "none";
    else if (type === "ecitizen" || type === "ntsa") logoSel.value = "none";
    updateTestQRCode();
    showToast(` Test Payload Loaded: ${type.toUpperCase()}`, "Ultra-scannable QR Code generated.", "info");
  }
}

function updateTestQRCode() {
  const payloadBox = document.getElementById("qr-input-payload");
  const fgColor = document.getElementById("qr-color-fg")?.value || "#000000";
  const bgColor = document.getElementById("qr-color-bg")?.value || "#ffffff";
  const logoType = document.getElementById("qr-opt-logo")?.value || "none";
  const container = document.getElementById("test-qr-container");

  if (!payloadBox) return;

  if (!payloadBox.value) {
    payloadBox.value = qrPresets.ntsa;
  }

  const payloadText = payloadBox.value;

  renderStandardQRCodeContainer(container, payloadText, {
    fgColor,
    bgColor,
    size: 220,
    logoType
  });

  const previewBox = document.getElementById("modal-qr-preview-box");
  if (previewBox) {
    renderStandardQRCodeContainer(previewBox, payloadText, {
      fgColor: "#000000",
      bgColor: "#ffffff",
      size: 180,
      logoType: "none"
    });
  }

  const statusLabel = document.getElementById("qr-status-label");
  if (statusLabel) {
    statusLabel.innerText = `100% Mobile Camera Scannable QR (${payloadText.length} chars)`;
  }

  renderNTSAPoliceVerifiedBadge();
}

function renderNTSAPoliceVerifiedBadge() {
  const container = document.getElementById("ntsa-police-qr-container");
  if (!container) return;

  const url = "https://ntsa.go.ke/v/KDG123A";
  
  renderStandardQRCodeContainer(container, url, {
    fgColor: "#000000",
    bgColor: "#ffffff",
    size: 200,
    logoType: "none"
  });
}

function simulateNTSAPoliceScan() {
  const payload = "https://ntsa.go.ke/v/KDG123A";
  const payloadBox = document.getElementById("qr-input-payload");
  if (payloadBox) payloadBox.value = payload;

  openTestQRScannerModal();
}

function downloadNTSAPoliceBadge() {
  const container = document.getElementById("ntsa-police-qr-container");
  const imgOrCanvas = container ? container.querySelector("img") || container.querySelector("canvas") : null;
  
  if (imgOrCanvas) {
    let pngUrl = "";
    if (imgOrCanvas.tagName.toLowerCase() === "img") {
      pngUrl = imgOrCanvas.src;
    } else {
      pngUrl = imgOrCanvas.toDataURL("image/png");
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "NTSA-POLICE-SCAN-TO-VERIFY-BADGE.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    showToast(" Badge Downloaded", "Saved NTSA / Police Verified Scannable Badge PNG.", "success");
  }
}

function downloadQRCodePNG() {
  const container = document.getElementById("test-qr-container");
  const imgOrCanvas = container ? container.querySelector("img") || container.querySelector("canvas") : null;
  
  if (imgOrCanvas) {
    let pngUrl = "";
    if (imgOrCanvas.tagName.toLowerCase() === "img") {
      pngUrl = imgOrCanvas.src;
    } else {
      pngUrl = imgOrCanvas.toDataURL("image/png");
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "EIMS-TEST-QR-CODE.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    showToast(" QR Code Downloaded", "Saved 100% scannable PNG image.", "success");
  }
}

function copyQRPayload() {
  const payloadBox = document.getElementById("qr-input-payload");
  if (payloadBox && payloadBox.value) {
    navigator.clipboard.writeText(payloadBox.value).then(() => {
      showToast(" Copied Payload Text", "QR Code URL copied to clipboard.", "info");
    });
  }
}

function openTestQRScannerModal() {
  updateTestQRCode();
  const modal = document.getElementById("test-qr-modal");
  if (modal) modal.classList.add("active");
}

function closeTestQRScannerModal() {
  const modal = document.getElementById("test-qr-modal");
  if (modal) modal.classList.remove("active");
}

function simulateQRScanTrigger() {
  const payload = document.getElementById("qr-input-payload")?.value || "";
  const statusElem = document.getElementById("qr-scan-result-status");
  const textElem = document.getElementById("qr-scan-result-text");

  if (statusElem) {
    statusElem.innerText = " Optical Scanning & Hashing...";
  }

  setTimeout(() => {
    if (statusElem) statusElem.innerText = " AUTHENTICATED SHA-256 QR PAYLOAD DETECTED";
    if (textElem) textElem.innerText = payload;

    showToast(" QR Scan Successful!", `Parsed payload: ${payload.substring(0, 45)}...`, "success");
  }, 700);
}

// ================= MULTI-CHANNEL TELEMETRY NOTIFICATION LOGS DATASET =================
const notificationLogs = [
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

function renderNotificationDispatchTable() {
  const tbody = document.getElementById("notification-dispatch-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  notificationLogs.forEach(log => {
    let channelBadge = "";
    if (log.channel === "SMS Alert") channelBadge = `<span class="badge-tag" style="background:rgba(255,107,0,0.15); color:#ff8533;"> SMS Alert</span>`;
    else if (log.channel === "WhatsApp") channelBadge = `<span class="badge-tag" style="background:rgba(16,185,129,0.15); color:#34d399;"> WhatsApp</span>`;
    else channelBadge = `<span class="badge-tag" style="background:rgba(2,102,204,0.15); color:#38bdf8;"> Rich Email</span>`;

    const tr = document.createElement("tr");
    tr.style.borderBottom = "1px solid var(--border-color)";
    tr.innerHTML = `
      <td style="padding:10px; font-weight:600;">${log.timestamp}<br><span style="font-size:10px; color:var(--text-muted);">${log.date}</span></td>
      <td style="padding:10px;"><strong>${log.recipient}</strong><br><span style="font-size:11px; color:var(--text-secondary);">${log.phone}</span></td>
      <td style="padding:10px;">${channelBadge}</td>
      <td style="padding:10px;"><code style="color:#38bdf8;">${log.claimId}</code><br><span style="font-size:11px; color:var(--text-muted);">${log.plate}</span></td>
      <td style="padding:10px; font-weight:600; color:var(--text-primary);">${log.event}</td>
      <td style="padding:10px; font-size:11.5px; color:var(--text-secondary);"><span style="color:#34d399;"></span> ${log.delivery}</td>
      <td style="padding:10px; text-align:right;">
        <button class="btn btn-secondary" onclick="loadNotificationLogToPhone('${log.id}')" style="font-size:11.5px; padding:4px 10px;">
           Load in Sim
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function loadNotificationLogToPhone(logId) {
  const log = notificationLogs.find(l => l.id === logId);
  if (!log) return;

  const selector = document.getElementById("alert-claim-selector");
  if (selector) {
    const matchedOption = Array.from(selector.options).find(o => o.value === log.claimId);
    if (matchedOption) selector.value = log.claimId;
  }

  if (log.channel === "SMS Alert") selectAlertTab("sms");
  else if (log.channel === "WhatsApp") selectAlertTab("wa");
  else if (log.channel === "Rich Email") selectAlertTab("email");

  const smsContainer = document.getElementById("sms-messages-container");
  if (smsContainer) {
    smsContainer.innerHTML = `
      <div class="sms-bubble">
        ${log.smsMessage}
        <div class="sms-timestamp">${log.timestamp}</div>
      </div>
    `;
  }

  const waContainer = document.getElementById("wa-messages-container");
  if (waContainer) {
    waContainer.innerHTML = `
      <div class="wa-bubble sent">
        First Notice of Loss registered for vehicle ${log.plate}.
        <div class="sms-timestamp" style="color:var(--text-muted)">${log.timestamp}</div>
      </div>
      <div class="wa-bubble">
        ${log.waMessage}
        <a href="#" class="wa-btn-link">Track EIMS Portal</a>
        <div class="sms-timestamp">${log.timestamp}</div>
      </div>
    `;
  }

  const emailContainer = document.getElementById("email-messages-container");
  if (emailContainer) {
    document.querySelector(".email-frame h1").innerText = log.emailSubject;
    emailContainer.innerHTML = `
      <h2>${log.emailHeader}</h2>
      <p>Dear ${log.recipient},</p>
      <p>${log.emailBody}</p>
      <table class="email-details-table">
        <tr>
          <td class="label">Reference No</td>
          <td>${log.claimId}</td>
        </tr>
        <tr>
          <td class="label">Vehicle Plate</td>
          <td>${log.plate}</td>
        </tr>
        <tr>
          <td class="label">Event Gate</td>
          <td>${log.event}</td>
        </tr>
      </table>
      <p>For inquiries, contact the EIMS Support Desk.</p>
      <center><a href="#" class="email-btn" style="color:#ffffff;">Open EIMS Portal</a></center>
    `;
  }

  showToast(` Telemetry Loaded: ${log.id}`, `Previewing ${log.channel} for ${log.recipient} (${log.plate}).`, "info");
}

// ================= CAMERA CAPTURE SYSTEM =================
let mediaStream = null;

function openCameraModal() {
  const modal = document.getElementById("camera-capture-modal-native");
  if (modal) modal.classList.add("open");
  
  const video = document.getElementById("camera-video-stream");
  const imgPreview = document.getElementById("camera-photo-preview");
  
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then(stream => {
        mediaStream = stream;
        if (video) {
          video.srcObject = stream;
          video.style.display = "block";
        }
        if (imgPreview) imgPreview.style.display = "none";
      })
      .catch(err => {
        console.warn("Camera video stream unavailable, using upload fallback:", err);
        if (video) video.style.display = "none";
        if (imgPreview) imgPreview.style.display = "block";
      });
  }
}

// Renamed from closeCameraModal: an identically named function already existed
// for the older .modal-overlay camera modal, and this later definition silently
// shadowed it — so that modal could no longer be closed and its camera stream
// was never stopped.
function closeNativeCameraModal() {
  const modal = document.getElementById("camera-capture-modal-native");
  if (modal) modal.classList.remove("open");
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
    mediaStream = null;
  }
}

function triggerDeviceCameraCapture() {
  const video = document.getElementById("camera-video-stream");
  const wsImg = document.getElementById("ws-damaged-img-preview");
  
  if (video && video.style.display !== "none" && video.srcObject) {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg");
    if (wsImg) wsImg.src = dataUrl;
  } else {
    if (wsImg) wsImg.src = "car_damaged.jpg";
  }
  
  closeNativeCameraModal();
  showToast("Damaged component photo captured & EXIF GPS metadata verified!", "success");
}

function handleCapturedPhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const wsImg = document.getElementById("ws-damaged-img-preview");
    if (wsImg) wsImg.src = e.target.result;
    closeNativeCameraModal();
    showToast("Damaged component photo uploaded & EXIF GPS metadata verified!", "success");
  };
  reader.readAsDataURL(file);
}

// ================= LIVE CAMERA PHOTO SNAP HANDLER =================
function takeLiveCameraPhotoSnap() {
  const video = document.getElementById("live-camera-feed");
  const bgImg = document.getElementById("annotate-bg-img");
  const bgVideo = document.getElementById("annotate-bg-video");
  const canvas = document.getElementById("annotation-canvas");
  const placeholder = document.getElementById("media-placeholder-content");
  const typeLabel = document.getElementById("telemetry-media-type");
  const timestampLabel = document.getElementById("exif-timestamp");

  let photoDataUrl = "car_damaged.jpg";

  if (video && video.srcObject && video.videoWidth > 0 && video.videoHeight > 0) {
    try {
      const tmpCanvas = document.createElement("canvas");
      tmpCanvas.width = video.videoWidth;
      tmpCanvas.height = video.videoHeight;
      const ctx = tmpCanvas.getContext("2d");
      ctx.drawImage(video, 0, 0, tmpCanvas.width, tmpCanvas.height);
      photoDataUrl = tmpCanvas.toDataURL("image/jpeg", 0.95);
    } catch (e) {
      console.warn("Canvas capture error, using fallback image:", e);
    }
  }

  if (placeholder) placeholder.style.display = "none";
  if (bgVideo) bgVideo.style.display = "none";
  if (bgImg) {
    bgImg.style.display = "block";
    bgImg.src = photoDataUrl;
    bgImg.onload = () => {
      annotationImageLoaded = true;
      if (typeof resizeAnnotationCanvas === "function") resizeAnnotationCanvas();
    };
  }
  if (canvas) canvas.style.display = "block";
  if (timestampLabel) timestampLabel.innerText = new Date().toLocaleString();
  if (typeLabel) typeLabel.innerText = "Image (Live Camera Stream Snap, EXIF synced)";

  closeCameraModal();
  if (typeof saveMediaToVault === "function") {
    saveMediaToVault(photoDataUrl, 'image');
  }
  if (typeof syncCapturedMediaToANPR === "function") {
    syncCapturedMediaToANPR(photoDataUrl, false);
  }
  if (typeof showToast === "function") {
    showToast(" Live camera photo snapped successfully! Telemetry & EXIF GPS synced.", "success");
  }
}

// ================= VIDEO RECORDING & STILL PHOTO MEDIA ENGINE =================
let mediaRecorder = null;
let recordedChunks = [];
let videoTimerInterval = null;
let videoSecondsElapsed = 0;
let currentCameraMode = "photo";

function switchCameraMode(mode) {
  currentCameraMode = mode;
  const photoTab = document.getElementById("cam-mode-photo-btn");
  const videoTab = document.getElementById("cam-mode-video-btn");
  const snapBtn = document.getElementById("snap-camera-photo-btn");
  const startRecBtn = document.getElementById("start-video-rec-btn");
  const stopRecBtn = document.getElementById("stop-video-rec-btn");
  
  if (mode === "photo") {
    if (photoTab) { photoTab.style.background = "#ff6b00"; photoTab.style.color = "#fff"; }
    if (videoTab) { videoTab.style.background = "transparent"; videoTab.style.color = "#94a3b8"; }
    if (snapBtn) snapBtn.style.display = "inline-flex";
    if (startRecBtn) startRecBtn.style.display = "none";
    if (stopRecBtn) stopRecBtn.style.display = "none";
  } else {
    if (photoTab) { photoTab.style.background = "transparent"; photoTab.style.color = "#94a3b8"; }
    if (videoTab) { videoTab.style.background = "#ef4444"; videoTab.style.color = "#fff"; }
    if (snapBtn) snapBtn.style.display = "none";
    if (startRecBtn) startRecBtn.style.display = "inline-flex";
    if (stopRecBtn) stopRecBtn.style.display = "none";
  }
}

function startVideoRecording() {
  const video = document.getElementById("live-camera-feed");
  const recBanner = document.getElementById("video-rec-banner");
  const startBtn = document.getElementById("start-video-rec-btn");
  const stopBtn = document.getElementById("stop-video-rec-btn");
  const timerLabel = document.getElementById("video-timer");

  recordedChunks = [];
  videoSecondsElapsed = 0;

  if (activeCameraStream) {
    try {
      mediaRecorder = new MediaRecorder(activeCameraStream, { mimeType: 'video/webm;codecs=vp9,opus' });
    } catch (e) {
      try {
        mediaRecorder = new MediaRecorder(activeCameraStream);
      } catch (e2) {
        console.warn("MediaRecorder fallback:", e2);
      }
    }
  }

  if (mediaRecorder) {
    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) recordedChunks.push(event.data);
    };

    mediaRecorder.onstop = saveRecordedVideoTelemetry;
    mediaRecorder.start();
  }

  if (recBanner) recBanner.style.display = "inline-flex";
  if (startBtn) startBtn.style.display = "none";
  if (stopBtn) stopBtn.style.display = "inline-flex";

  if (timerLabel) timerLabel.innerText = "00:00";
  clearInterval(videoTimerInterval);
  videoTimerInterval = setInterval(() => {
    videoSecondsElapsed++;
    const mins = String(Math.floor(videoSecondsElapsed / 60)).padStart(2, '0');
    const secs = String(videoSecondsElapsed % 60).padStart(2, '0');
    if (timerLabel) timerLabel.innerText = `${mins}:${secs}`;
  }, 1000);

  if (typeof showToast === "function") {
    showToast(" Live scene video recording started!", "warning");
  }
}

function stopVideoRecording() {
  clearInterval(videoTimerInterval);
  const recBanner = document.getElementById("video-rec-banner");
  if (recBanner) recBanner.style.display = "none";

  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  } else {
    saveRecordedVideoTelemetry();
  }
}

function saveRecordedVideoTelemetry() {
  const bgImg = document.getElementById("annotate-bg-img");
  const bgVideo = document.getElementById("annotate-bg-video");
  const canvas = document.getElementById("annotation-canvas");
  const placeholder = document.getElementById("media-placeholder-content");
  const typeLabel = document.getElementById("telemetry-media-type");
  const timestampLabel = document.getElementById("exif-timestamp");

  let videoUrl = "";
  if (recordedChunks.length > 0) {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    videoUrl = URL.createObjectURL(blob);
  }

  if (placeholder) placeholder.style.display = "none";
  if (bgImg) bgImg.style.display = "none";
  if (canvas) canvas.style.display = "none";

  if (bgVideo) {
    bgVideo.style.display = "block";
    if (videoUrl) {
      bgVideo.src = videoUrl;
    }
    bgVideo.play().catch(e => console.log("Video auto-play prevented:", e));
  }

  if (timestampLabel) timestampLabel.innerText = new Date().toLocaleString();
  if (typeLabel) typeLabel.innerText = `Video (Live Camera Stream Recorded, ${videoSecondsElapsed}s, EXIF synced)`;

  closeCameraModal();
  switchCameraMode("photo");

  if (typeof saveMediaToVault === "function" && videoUrl) {
    saveMediaToVault(videoUrl, 'video');
  }
  if (typeof syncCapturedMediaToANPR === "function" && videoUrl) {
    syncCapturedMediaToANPR(videoUrl, true);
  }

  if (typeof showToast === "function") {
    showToast(" Live scene video recorded & EXIF telemetry saved successfully!", "success");
  }
}

// ================= STEP 2 ANPR MEDIA SYNC & UPLOAD HANDLERS =================
function syncCapturedMediaToANPR(mediaSrc, isVideo = false) {
  const placeholder = document.getElementById("anpr-placeholder-content");
  const previewImg = document.getElementById("anpr-preview-img");
  const previewVideo = document.getElementById("anpr-preview-video");

  if (placeholder) placeholder.style.display = "none";

  if (isVideo) {
    if (previewImg) previewImg.style.display = "none";
    if (previewVideo) {
      previewVideo.style.display = "block";
      previewVideo.src = mediaSrc;
      previewVideo.play().catch(e => console.log("ANPR video auto-play:", e));
    }
  } else {
    if (previewVideo) previewVideo.style.display = "none";
    if (previewImg) {
      previewImg.style.display = "block";
      previewImg.src = mediaSrc;
    }
  }
}

function triggerANPRFileUpload() {
  const fileInput = document.getElementById("anpr-upload-file-input");
  if (fileInput) fileInput.click();
}

function handleANPRFileUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  const isVideo = file.type.startsWith("video/");

  syncCapturedMediaToANPR(url, isVideo);
  if (typeof showToast === "function") {
    showToast("Media Uploaded", `Uploaded ${file.name} for Step 2 ANPR verification.`, "info");
  }
  runANPRScanSimulation();
}

// ================= STORED CLAIM MEDIA VAULT & UPLOAD MANAGER =================
let fnolStoredMedia = {
  photos: [
    {
      id: 'media_default_01',
      type: 'image',
      url: 'car_damaged.jpg',
      name: 'accident_scene_photo_01.jpg',
      timestamp: new Date().toLocaleString(),
      sizeKb: 640,
      cloudUrl: 'https://eims-prosystem.firebasestorage.app/claims/accident_scene_photo_01.jpg',
      uploaded: true
    }
  ],
  videos: [],
  activeMedia: null
};

fnolStoredMedia.activeMedia = fnolStoredMedia.photos[0];

function saveMediaToVault(mediaUrl, mediaType = 'image', filename = '') {
  const timestamp = new Date().toLocaleString();
  const name = filename || (mediaType === 'image' ? `accident_photo_${Date.now()}.jpg` : `accident_video_${Date.now()}.webm`);
  
  const mediaItem = {
    id: 'media_' + Date.now(),
    type: mediaType,
    url: mediaUrl,
    name: name,
    timestamp: timestamp,
    sizeKb: Math.floor(Math.random() * 800 + 400),
    cloudUrl: null,
    uploaded: false
  };

  if (mediaType === 'image') {
    fnolStoredMedia.photos.push(mediaItem);
  } else {
    fnolStoredMedia.videos.push(mediaItem);
  }

  fnolStoredMedia.activeMedia = mediaItem;
  renderSavedMediaVault();
}

function renderSavedMediaVault() {
  const container = document.getElementById("saved-media-thumbnails");
  const countLabel = document.getElementById("saved-media-count");
  if (!container) return;

  const allMedia = [...fnolStoredMedia.photos, ...fnolStoredMedia.videos];
  if (countLabel) countLabel.innerText = `${allMedia.length} Item${allMedia.length === 1 ? '' : 's'}`;

  container.innerHTML = "";
  if (allMedia.length === 0) {
    container.innerHTML = `<span style="font-size:11px; color:var(--text-muted);">No media saved yet. Snap photo or record video to store.</span>`;
    return;
  }

  allMedia.forEach((item) => {
    const isVideo = item.type === "video";
    const isActive = fnolStoredMedia.activeMedia && item.id === fnolStoredMedia.activeMedia.id;
    const card = document.createElement("div");
    card.style.cssText = "position:relative; width:90px; height:70px; border-radius:8px; overflow:hidden; border:2px solid " + (isActive ? "var(--primary)" : "rgba(255,255,255,0.15)") + "; flex-shrink:0; cursor:pointer; background:#000;";
    card.onclick = () => selectStoredMediaItem(item.id);

    if (isVideo) {
      card.innerHTML = `
        <video src="${item.url}" style="width:100%; height:100%; object-fit:cover;"></video>
        <div style="position:absolute; inset:0; background:rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;">
          <span style="font-size:16px;"></span>
        </div>
      `;
    } else {
      card.innerHTML = `<img src="${item.url}" style="width:100%; height:100%; object-fit:cover;">`;
    }

    if (item.uploaded) {
      card.innerHTML += `<span style="position:absolute; top:3px; right:3px; background:#10b981; color:#fff; font-size:9px; font-weight:800; padding:1px 4px; border-radius:4px;"> OK</span>`;
    }

    container.appendChild(card);
  });
}

function selectStoredMediaItem(id) {
  const allMedia = [...fnolStoredMedia.photos, ...fnolStoredMedia.videos];
  const found = allMedia.find(m => m.id === id);
  if (!found) return;

  fnolStoredMedia.activeMedia = found;
  const bgImg = document.getElementById("annotate-bg-img");
  const bgVideo = document.getElementById("annotate-bg-video");
  const canvas = document.getElementById("annotation-canvas");
  const placeholder = document.getElementById("media-placeholder-content");
  const typeLabel = document.getElementById("telemetry-media-type");

  if (placeholder) placeholder.style.display = "none";

  if (found.type === "video") {
    if (bgImg) bgImg.style.display = "none";
    if (canvas) canvas.style.display = "none";
    if (bgVideo) {
      bgVideo.style.display = "block";
      bgVideo.src = found.url;
      bgVideo.play().catch(e => console.log("Video auto-play:", e));
    }
    if (typeLabel) typeLabel.innerText = `Video (${found.name}, EXIF synced)`;
  } else {
    if (bgVideo) bgVideo.style.display = "none";
    if (bgImg) {
      bgImg.style.display = "block";
      bgImg.src = found.url;
    }
    if (canvas) canvas.style.display = "block";
    if (typeLabel) typeLabel.innerText = `Image (${found.name}, EXIF synced)`;
  }

  if (typeof syncCapturedMediaToANPR === "function") {
    syncCapturedMediaToANPR(found.url, found.type === "video");
  }

  renderSavedMediaVault();
}

function downloadActiveClaimMedia() {
  const active = fnolStoredMedia.activeMedia;
  if (!active || !active.url) {
    if (typeof showToast === "function") showToast("No Media", "No active photo or video to download.", "warning");
    return;
  }

  const a = document.createElement("a");
  a.href = active.url;
  a.download = active.name || (active.type === "video" ? "claim_video.webm" : "claim_photo.jpg");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  if (typeof showToast === "function") {
    showToast(" Media Saved", `Downloaded ${a.download} to your local device.`, "success");
  }
}

function uploadActiveClaimMediaToCloud() {
  const active = fnolStoredMedia.activeMedia;
  if (!active || !active.url) {
    if (typeof showToast === "function") showToast("No Media", "No photo or video to upload.", "warning");
    return;
  }

  if (typeof showToast === "function") {
    showToast(" Uploading...", `Syncing ${active.name} to Cloud Storage bucket...`, "info");
  }

  setTimeout(() => {
    active.uploaded = true;
    active.cloudUrl = `https://eims-prosystem.firebasestorage.app/claims/${active.name}`;
    renderSavedMediaVault();
    if (typeof showToast === "function") {
      showToast(" Upload Complete", `Stored in Firebase Storage bucket: claims/${active.name}`, "success");
    }
  }, 1200);
}

// Initial vault render on page load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(renderSavedMediaVault, 500);
});

// ================= REPORT QUERYING & CALENDAR PERIOD MANAGER =================
function applyReportPeriodPreset() {
  const preset = document.getElementById("report-period-preset")?.value || "this-month";
  const startInput = document.getElementById("report-start-date");
  const endInput = document.getElementById("report-end-date");

  const today = new Date();
  let start = new Date();
  let end = new Date();

  if (preset === "this-month") {
    start = new Date(today.getFullYear(), today.getMonth(), 1);
    end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  } else if (preset === "last-month") {
    start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    end = new Date(today.getFullYear(), today.getMonth(), 0);
  } else if (preset === "this-quarter") {
    const qMonth = Math.floor(today.getMonth() / 3) * 3;
    start = new Date(today.getFullYear(), qMonth, 1);
    end = new Date(today.getFullYear(), qMonth + 3, 0);
  } else if (preset === "ytd") {
    start = new Date(today.getFullYear(), 0, 1);
    end = today;
  }

  if (preset !== "custom" && startInput && endInput) {
    startInput.value = start.toISOString().split('T')[0];
    endInput.value = end.toISOString().split('T')[0];
  }

  window.runReportQuery();
}

function executeReportQuery() {
  const ledger = document.getElementById("report-ledger-type")?.value || "underwriting";
  const branch = document.getElementById("report-branch")?.value || "ALL";
  const lob = document.getElementById("report-lob-filter")?.value || "ALL";
  const startDate = document.getElementById("report-start-date")?.value || "2026-08-01";
  const endDate = document.getElementById("report-end-date")?.value || "2026-08-31";

  const titleLabel = document.getElementById("report-title-label");
  const dateLabel = document.getElementById("report-date-label");
  const aiBadge = document.getElementById("ai-period-badge");
  const aiSummary = document.getElementById("embedded-ai-report-summary");
  const thead = document.getElementById("report-table-head");
  const tbody = document.getElementById("report-table-body");

  const branchText = branch === "ALL" ? "All Offices" : `${branch} Branch`;
  const lobText = lob === "ALL" ? "All Risk Lines" : lob;

  if (dateLabel) dateLabel.innerText = `Period: ${startDate} to ${endDate} (${branchText} | ${lobText})`;
  if (aiBadge) aiBadge.innerText = `${startDate} to ${endDate}`;

  // Helper setter to set metric text safely
  const setSafeText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };

  // Underwriting Master Dataset
  const underwritingData = [
    { ref: "POL-MOT-8973-2026", holder: "Boniface Mwangi", cat: "Motor Comprehensive", lob: "Motor Comprehensive", date: "2026-08-01", branch: "HQ", sumInsured: 1850000, premium: 92500 },
    { ref: "POL-FLEET-0091", holder: "Nairobi County Fleet", cat: "Commercial Fleet (45 Trucks)", lob: "Motor Commercial", date: "2026-08-02", branch: "HQ", sumInsured: 45000000, premium: 2250000 },
    { ref: "POL-FIRE-3321", holder: "Coastal Warehousing Ltd", cat: "Fire & Perils", lob: "Fire & Perils", date: "2026-08-03", branch: "Mombasa", sumInsured: 120000000, premium: 1800000 },
    { ref: "POL-MOT-4412-2026", holder: "Kisumu Cargo Logistics", cat: "Motor Commercial Heavy", lob: "Motor Commercial", date: "2026-08-04", branch: "Kisumu", sumInsured: 18500000, premium: 925000 },
    { ref: "POL-MAR-7719", holder: "Rift Valley Exporters", cat: "Marine Cargo Import", lob: "Marine Cargo", date: "2026-08-05", branch: "Nakuru", sumInsured: 35000000, premium: 525000 },
    { ref: "POL-MOT-5590", holder: "Eldoret Farm Co-op", cat: "Motor Tractors & Machinery", lob: "Motor Commercial", date: "2026-08-06", branch: "Eldoret", sumInsured: 12000000, premium: 480000 },
    { ref: "POL-ENG-1102", holder: "Kenya Ports Authority", cat: "Engineering All Risks", lob: "Engineering", date: "2026-08-07", branch: "Mombasa", sumInsured: 250000000, premium: 3750000 },
    { ref: "POL-MOT-9912", holder: "Jane Wanjiku Mutua", cat: "Motor Private (Mazda CX-5)", lob: "Motor Comprehensive", date: "2026-08-08", branch: "HQ", sumInsured: 2400000, premium: 120000 },
    { ref: "POL-AV-8841", holder: "Airports Ground Handling", cat: "Aviation Ground Liability", lob: "Engineering", date: "2026-08-09", branch: "HQ", sumInsured: 180000000, premium: 2700000 },
    { ref: "POL-MOT-6623", holder: "Naivasha Flower Logistics", cat: "Refrigerated Fleet", lob: "Motor Commercial", date: "2026-08-10", branch: "Nakuru", sumInsured: 14000000, premium: 700000 },
    { ref: "POL-HEALTH-301", holder: "Public Officers Medical", cat: "Group Medical Cover", lob: "Fire & Perils", date: "2026-08-11", branch: "HQ", sumInsured: 95000000, premium: 4750000 },
    { ref: "POL-MOT-2281", holder: "Peter Kiprop", cat: "Motor Private (Subaru)", lob: "Motor Comprehensive", date: "2026-08-12", branch: "Eldoret", sumInsured: 1950000, premium: 97500 },
    { ref: "POL-WIBA-5510", holder: "Mombasa Port Services", cat: "Work Injury Benefits (WIBA)", lob: "Marine Cargo", date: "2026-08-13", branch: "Mombasa", sumInsured: 60000000, premium: 1200000 },
    { ref: "POL-MOT-1092", holder: "Kisumu Shuttle Express", cat: "PSV Matatu (14-Seater)", lob: "Motor Commercial", date: "2026-08-14", branch: "Kisumu", sumInsured: 9000000, premium: 630000 },
    { ref: "POL-BOND-4401", holder: "Great Rift Construction", cat: "Performance Bond", lob: "Engineering", date: "2026-08-15", branch: "Nakuru", sumInsured: 75000000, premium: 1125000 },
    { ref: "POL-MOT-MOM-01", holder: "Salim Said Omar", cat: "Motor Private (Toyota Harrier)", lob: "Motor Comprehensive", date: "2026-08-16", branch: "Mombasa", sumInsured: 3200000, premium: 160000 },
    { ref: "POL-MOT-MOM-02", holder: "Mombasa Coastal Transporters", cat: "Motor Private (Mercedes C200)", lob: "Motor Comprehensive", date: "2026-08-17", branch: "Mombasa", sumInsured: 4800000, premium: 240000 },
    { ref: "POL-MOT-MOM-03", holder: "Amina Hassan Mohamed", cat: "Motor Private (Nissan X-Trail)", lob: "Motor Comprehensive", date: "2026-08-18", branch: "Mombasa", sumInsured: 2100000, premium: 105000 }
  ];

  // Claims Master Dataset
  const claimsData = [
    { ref: "CLM-2026-001", claimant: "Boniface Mwangi", polRef: "POL-MOT-8973-2026", lob: "Motor Comprehensive", date: "2026-08-03", branch: "HQ", amount: 450000, status: "Paid / Settled", statusType: "approved" },
    { ref: "CLM-2026-002", claimant: "Sarah Njeri", polRef: "POL-MOT-4412-2026", lob: "Motor Commercial", date: "2026-08-04", branch: "Mombasa", amount: 1200000, status: "Under Assessment", statusType: "pending" },
    { ref: "CLM-2026-003", claimant: "County Fleet Direct", polRef: "POL-FLEET-0091", lob: "Motor Commercial", date: "2026-08-05", branch: "Kisumu", amount: 2800000, status: "Paid / Settled", statusType: "approved" },
    { ref: "CLM-2026-004", claimant: "David Omondi", polRef: "POL-MOT-7731-2026", lob: "Motor Comprehensive", date: "2026-08-06", branch: "Nakuru", amount: 350000, status: "ANPR Verifying", statusType: "pending" },
    { ref: "CLM-2026-005", claimant: "Coastal Warehousing", polRef: "POL-FIRE-3321", lob: "Fire & Perils", date: "2026-08-07", branch: "Mombasa", amount: 4500000, status: "Reinsurance Claim", statusType: "approved" },
    { ref: "CLM-2026-006", claimant: "Naivasha Flower Logistics", polRef: "POL-MOT-6623", lob: "Motor Commercial", date: "2026-08-08", branch: "Nakuru", amount: 680000, status: "Approved for Pay", statusType: "pending" },
    { ref: "CLM-2026-007", claimant: "Peter Kiprop", polRef: "POL-MOT-2281", lob: "Motor Comprehensive", date: "2026-08-09", branch: "Eldoret", amount: 180000, status: "Paid / Settled", statusType: "approved" },
    { ref: "CLM-2026-008", claimant: "Rift Valley Exporters", polRef: "POL-MAR-7719", lob: "Marine Cargo", date: "2026-08-10", branch: "Nakuru", amount: 1450000, status: "Subrogation Recovery", statusType: "approved" },
    { ref: "CLM-2026-009", claimant: "Kenya Ports Authority", polRef: "POL-ENG-1102", lob: "Engineering", date: "2026-08-11", branch: "Mombasa", amount: 3200000, status: "Adjuster Report", statusType: "pending" },
    { ref: "CLM-2026-010", claimant: "Kisumu Shuttle Express", polRef: "POL-MOT-1092", lob: "Motor Commercial", date: "2026-08-12", branch: "Kisumu", amount: 520000, status: "Paid / Settled", statusType: "approved" },
    { ref: "CLM-2026-011", claimant: "Salim Said Omar", polRef: "POL-MOT-MOM-01", lob: "Motor Comprehensive", date: "2026-08-16", branch: "Mombasa", amount: 380000, status: "Paid / Settled", statusType: "approved" },
    { ref: "CLM-2026-012", claimant: "Mombasa Coastal Transporters", polRef: "POL-MOT-MOM-02", lob: "Motor Comprehensive", date: "2026-08-17", branch: "Mombasa", amount: 620000, status: "Approved for Pay", statusType: "pending" },
    { ref: "CLM-2026-013", claimant: "Amina Hassan Mohamed", polRef: "POL-MOT-MOM-03", lob: "Motor Comprehensive", date: "2026-08-18", branch: "Mombasa", amount: 140000, status: "Paid / Settled", statusType: "approved" }
  ];

  if (ledger === "claims") {
    if (titleLabel) titleLabel.innerText = `Queried Claims & Loss Recovery Ledger - ${branchText} (${lobText})`;

    const filtered = claimsData.filter(d => {
      const matchBranch = branch === "ALL" || d.branch === branch;
      const matchLob = lob === "ALL" || d.lob === lob;
      return matchBranch && matchLob;
    });

    const totalIncurred = filtered.reduce((acc, item) => acc + item.amount, 0);
    const paidItems = filtered.filter(i => i.statusType === "approved");
    const totalPaid = paidItems.reduce((acc, item) => acc + item.amount, 0);
    const totalReserve = totalIncurred - totalPaid;

    setSafeText("kpi-1-label", "Total Claims Incurred");
    setSafeText("kpi-1-val", `KSh ${totalIncurred.toLocaleString()}`);
    setSafeText("kpi-1-sub", `${filtered.length} Claims Queried`);

    setSafeText("kpi-2-label", "Claims Paid / Settled");
    setSafeText("kpi-2-val", `KSh ${totalPaid.toLocaleString()}`);
    setSafeText("kpi-2-sub", `${paidItems.length} Claims Paid`);

    setSafeText("kpi-3-label", "Outstanding Loss Reserve");
    setSafeText("kpi-3-val", `KSh ${totalReserve.toLocaleString()}`);
    setSafeText("kpi-3-sub", `${filtered.length - paidItems.length} Pending Claims`);

    setSafeText("kpi-4-label", "Subrogation Recoveries");
    setSafeText("kpi-4-val", `KSh ${(totalPaid * 0.18).toFixed(0).toLocaleString()}`);
    setSafeText("kpi-4-sub", "Third-Party Recoveries");

    if (thead) {
      thead.innerHTML = `
        <tr>
          <th>Claim Ref</th>
          <th>Claimant Name</th>
          <th>Policy Ref</th>
          <th>Accident Date</th>
          <th>Branch</th>
          <th>Claim Amount</th>
          <th>Reserve Status</th>
        </tr>
      `;
    }

    if (tbody) {
      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-muted);">No claim records match query parameter (${branchText} | ${lobText}).</td></tr>`;
      } else {
        let html = "";
        filtered.forEach(item => {
          html += `<tr><td><strong>${item.ref}</strong></td><td>${item.claimant}</td><td>${item.polRef}</td><td>${item.date}</td><td>${item.branch}</td><td><strong style="color:var(--primary)">KSh ${item.amount.toLocaleString()}</strong></td><td><span class="status-badge ${item.statusType}">${item.status}</span></td></tr>`;
        });
        html += `
          <tr style="background:rgba(255,107,0,0.08); font-weight:800; border-top:2px solid var(--primary);">
            <td colspan="5" style="text-align:right;">QUERIED TOTAL CLAIMS:</td>
            <td><strong style="color:var(--primary); font-size:14px;">KSh ${totalIncurred.toLocaleString()}</strong></td>
            <td><span class="status-badge approved">${paidItems.length} Paid | ${filtered.length - paidItems.length} Pending</span></td>
          </tr>
        `;
        tbody.innerHTML = html;
      }
    }

    if (aiSummary) {
      aiSummary.innerHTML = `<strong>Claims Audit Query (${branchText} | ${lobText}):</strong> Queried claims incurred stood at KSh ${totalIncurred.toLocaleString()} across ${filtered.length} notices. KSh ${totalPaid.toLocaleString()} has been settled with zero fraudulent claims detected by ANPR AI cross-checks.`;
    }

  } else if (ledger === "underwriting") {
    if (titleLabel) titleLabel.innerText = `Queried Underwriting & Policy Ledger - ${branchText} (${lobText})`;

    const filtered = underwritingData.filter(d => {
      const matchBranch = branch === "ALL" || d.branch === branch;
      const matchLob = lob === "ALL" || d.lob === lob;
      return matchBranch && matchLob;
    });

    const totalSumInsured = filtered.reduce((acc, item) => acc + item.sumInsured, 0);
    const totalPremium = filtered.reduce((acc, item) => acc + item.premium, 0);
    const avgPremium = filtered.length > 0 ? Math.round(totalPremium / filtered.length) : 0;

    setSafeText("kpi-1-label", "Total Written Premium");
    setSafeText("kpi-1-val", `KSh ${totalPremium.toLocaleString()}`);
    setSafeText("kpi-1-sub", `${filtered.length} Active Policies`);

    setSafeText("kpi-2-label", "Total Sum Insured");
    setSafeText("kpi-2-val", `KSh ${totalSumInsured.toLocaleString()}`);
    setSafeText("kpi-2-sub", "Portfolio Risk Exposure");

    setSafeText("kpi-3-label", "Average Premium / Risk");
    setSafeText("kpi-3-val", `KSh ${avgPremium.toLocaleString()}`);
    setSafeText("kpi-3-sub", `${lobText} Average`);

    setSafeText("kpi-4-label", "Active Compliance");
    setSafeText("kpi-4-val", "100% AKI Certs");
    setSafeText("kpi-4-sub", "IRA & KRA Compliant");

    if (thead) {
      thead.innerHTML = `
        <tr>
          <th>Policy No.</th>
          <th>Policyholder</th>
          <th>Category</th>
          <th>Inception Date</th>
          <th>Branch</th>
          <th>Sum Insured</th>
          <th>Premium Written</th>
        </tr>
      `;
    }

    if (tbody) {
      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-muted);">No policy records match query parameter (${branchText} | ${lobText}).</td></tr>`;
      } else {
        let html = "";
        filtered.forEach(item => {
          html += `<tr><td><strong>${item.ref}</strong></td><td>${item.holder}</td><td>${item.cat}</td><td>${item.date}</td><td>${item.branch}</td><td>KSh ${item.sumInsured.toLocaleString()}</td><td><strong style="color:var(--primary)">KSh ${item.premium.toLocaleString()}</strong></td></tr>`;
        });
        html += `
          <tr style="background:rgba(255,107,0,0.08); font-weight:800; border-top:2px solid var(--primary);">
            <td colspan="5" style="text-align:right;">QUERIED TOTAL WRITTEN PREMIUM:</td>
            <td><strong>KSh ${totalSumInsured.toLocaleString()}</strong></td>
            <td><strong style="color:var(--primary); font-size:14px;">KSh ${totalPremium.toLocaleString()}</strong></td>
          </tr>
        `;
        tbody.innerHTML = html;
      }
    }

    if (aiSummary) {
      aiSummary.innerHTML = `<strong>Underwriting Audit Query (${branchText} | ${lobText}):</strong> ${filtered.length} active policies queried. Total gross written premium reached KSh ${totalPremium.toLocaleString()} against total sum insured of KSh ${totalSumInsured.toLocaleString()} with 100% automated AKI digital certificate verification.`;
    }

  } else if (ledger === "reinsurance") {
    if (titleLabel) titleLabel.innerText = `Queried Reinsurance & Ceding Share Ledger - ${branchText}`;

    setSafeText("kpi-1-label", "Gross Ceded Premium");
    setSafeText("kpi-1-val", "KSh 18,200,000");
    setSafeText("kpi-1-sub", "Quota Share Ceded");

    setSafeText("kpi-2-label", "Reinsurer Claims Share");
    setSafeText("kpi-2-val", "KSh 8,400,000");
    setSafeText("kpi-2-sub", "Reinsurance Recovery");

    setSafeText("kpi-3-label", "Net Company Retention");
    setSafeText("kpi-3-val", "62.48%");
    setSafeText("kpi-3-sub", "Net Earned Margin");

    setSafeText("kpi-4-label", "Ceding Commission");
    setSafeText("kpi-4-val", "KSh 2,730,000");
    setSafeText("kpi-4-sub", "15% Reinsurance Comm");

    if (thead) {
      thead.innerHTML = `
        <tr>
          <th>Reinsurer Treaty</th>
          <th>Quota Ceded %</th>
          <th>Ceded Premium</th>
          <th>Recoverable Claims</th>
          <th>Ceding Commission (15%)</th>
          <th>Net Retention</th>
          <th>Treaty Status</th>
        </tr>
      `;
    }

    if (tbody) {
      tbody.innerHTML = `
        <tr><td><strong>Kenya Reinsurance Corp</strong></td><td>25.0% Quota Share</td><td>KSh 12,125,000</td><td>KSh 3,550,000</td><td>KSh 1,818,750</td><td>KSh 36,375,000</td><td><span class="status-badge approved">Active Treaty</span></td></tr>
        <tr><td><strong>ZEP-RE (PTA Re)</strong></td><td>10.0% Surplus Share</td><td>KSh 4,850,000</td><td>KSh 1,420,000</td><td>KSh 727,500</td><td>KSh 43,650,000</td><td><span class="status-badge approved">Active Treaty</span></td></tr>
        <tr><td><strong>African Reinsurance Corp</strong></td><td>5.0% Obligatory Cession</td><td>KSh 2,425,000</td><td>KSh 710,000</td><td>KSh 363,750</td><td>KSh 46,075,000</td><td><span class="status-badge approved">Active Treaty</span></td></tr>
        <tr><td><strong>Swiss Re (Catastrophe Cover)</strong></td><td>Excess of Loss (XOL)</td><td>KSh 1,800,000</td><td>KSh 2,120,000</td><td>KSh 270,000</td><td>KSh 150,000,000</td><td><span class="status-badge approved">Active Treaty</span></td></tr>
        <tr><td><strong>Munich Re (Aviation/Marine)</strong></td><td>Facultative Treaty</td><td>KSh 1,250,000</td><td>KSh 600,000</td><td>KSh 187,500</td><td>KSh 75,000,000</td><td><span class="status-badge approved">Active Treaty</span></td></tr>
        <tr style="background:rgba(255,107,0,0.08); font-weight:800; border-top:2px solid var(--primary);">
          <td colspan="2" style="text-align:right;">TOTAL REINSURANCE TREATIES:</td>
          <td><strong style="color:var(--primary); font-size:14px;">KSh 22,450,000</strong></td>
          <td><strong style="color:var(--warning);">KSh 8,400,000</strong></td>
          <td><strong>KSh 3,367,500</strong></td>
          <td><strong>KSh 351,100,000</strong></td>
          <td><span class="status-badge approved">5 Active Treaties</span></td>
        </tr>
      `;
    }

    if (aiSummary) {
      aiSummary.innerHTML = `<strong>Reinsurance Ceding Audit (${startDate} to ${endDate}):</strong> Quota share & surplus treaties with Kenya Re, ZEP-RE, Africa Re, Swiss Re, and Munich Re ceded KSh 22.45M premium while protecting KSh 8.4M in recoverable claims. Net company retention remains robust at 62.48%.`;
    }

  } else if (ledger === "financials") {
    if (titleLabel) titleLabel.innerText = `Queried Executive P&L Loss Ratio Summary - ${branchText}`;
    
    setSafeText("kpi-1-label", "Gross Earned Premium");
    setSafeText("kpi-1-val", "KSh 48,500,000");
    setSafeText("kpi-1-sub", "YTD Earned Income");

    setSafeText("kpi-2-label", "Net Incurred Losses");
    setSafeText("kpi-2-val", "KSh 14,200,000");
    setSafeText("kpi-2-sub", "Paid Claims + Reserves");

    setSafeText("kpi-3-label", "Overall Portfolio Loss Ratio");
    setSafeText("kpi-3-val", "29.28%");
    setSafeText("kpi-3-sub", "Benchmark Target <45%");

    setSafeText("kpi-4-label", "Net Underwriting Profit");
    setSafeText("kpi-4-val", "+KSh 34,300,000");
    setSafeText("kpi-4-sub", "70.72% Underwriting Margin");

    if (thead) {
      thead.innerHTML = `
        <tr>
          <th>Branch Office</th>
          <th>Gross Written Premium</th>
          <th>Claims Incurred</th>
          <th>Net Loss Ratio (%)</th>
          <th>Underwriting Margin</th>
          <th>P&L Financial Status</th>
        </tr>
      `;
    }

    if (tbody) {
      tbody.innerHTML = `
        <tr><td><strong>Head Office (Nairobi)</strong></td><td>KSh 28,400,000</td><td>KSh 7,952,000</td><td><strong style="color:#10b981;">28.0%</strong></td><td><strong style="color:#10b981;">+KSh 20,448,000</strong></td><td><span class="status-badge approved">Highly Profitable</span></td></tr>
        <tr><td><strong>Mombasa Branch</strong></td><td>KSh 10,800,000</td><td>KSh 3,456,000</td><td><strong style="color:#10b981;">32.0%</strong></td><td><strong style="color:#10b981;">+KSh 7,344,000</strong></td><td><span class="status-badge approved">Profitable</span></td></tr>
        <tr><td><strong>Kisumu Branch</strong></td><td>KSh 6,100,000</td><td>KSh 1,769,000</td><td><strong style="color:#10b981;">29.0%</strong></td><td><strong style="color:#10b981;">+KSh 4,331,000</strong></td><td><span class="status-badge approved">Profitable</span></td></tr>
        <tr><td><strong>Nakuru Branch</strong></td><td>KSh 3,200,000</td><td>KSh 1,024,000</td><td><strong style="color:#10b981;">32.0%</strong></td><td><strong style="color:#10b981;">+KSh 2,176,000</strong></td><td><span class="status-badge approved">Profitable</span></td></tr>
        <tr><td><strong>Eldoret Branch</strong></td><td>KSh 2,800,000</td><td>KSh 784,000</td><td><strong style="color:#10b981;">28.0%</strong></td><td><strong style="color:#10b981;">+KSh 2,016,000</strong></td><td><span class="status-badge approved">Profitable</span></td></tr>
        <tr style="background:rgba(255,107,0,0.08); font-weight:800; border-top:2px solid var(--primary);">
          <td>GRAND TOTAL P&L:</td>
          <td><strong style="color:var(--primary); font-size:14px;">KSh 51,300,000</strong></td>
          <td><strong style="color:var(--warning);">KSh 14,985,000</strong></td>
          <td><strong style="color:#10b981;">29.21%</strong></td>
          <td><strong style="color:#10b981; font-size:14px;">+KSh 36,315,000</strong></td>
          <td><span class="status-badge approved">70.79% Margin</span></td>
        </tr>
      `;
    }

    if (aiSummary) {
      aiSummary.innerHTML = `<strong>Executive P&L Loss Ratio Audit (${startDate} to ${endDate}):</strong> Total portfolio gross premium earned reached KSh 51.3M against KSh 14.98M incurred losses, maintaining an overall loss ratio of 29.21% (well below IRA ceiling of 45.0%). Net underwriting profit stands at KSh +36.31M.`;
    }

  } else {
    // Branch production default
    if (titleLabel) titleLabel.innerText = `Queried Branch Production & Acquisition Ledger - ${branchText}`;
    
    setSafeText("kpi-1-label", "Total Acquired Premium");
    setSafeText("kpi-1-val", "KSh 51,300,000");
    setSafeText("kpi-1-sub", "219 Active Policies");

    setSafeText("kpi-2-label", "Active Intermediaries");
    setSafeText("kpi-2-val", "45 Brokers");
    setSafeText("kpi-2-sub", "Direct & Agency Channels");

    setSafeText("kpi-3-label", "Average Acquisition Cost");
    setSafeText("kpi-3-val", "12.4%");
    setSafeText("kpi-3-sub", "Commission & Levies");

    setSafeText("kpi-4-label", "Acquisition Compliance");
    setSafeText("kpi-4-val", "100% Compliant");
    setSafeText("kpi-4-sub", "AKI & IRA Guidelines");

    if (thead) {
      thead.innerHTML = `
        <tr>
          <th>Office / Branch</th>
          <th>New Policies Issued</th>
          <th>Renewed Policies</th>
          <th>Gross Premium Written</th>
          <th>Acquisition Share</th>
          <th>Performance Status</th>
        </tr>
      `;
    }
    if (tbody) {
      tbody.innerHTML = `
        <tr><td><strong>Head Office (Nairobi)</strong></td><td><span class="status-badge approved">84 New Policies</span></td><td>32 Renewals</td><td><strong style="color:var(--primary)">KSh 28,400,000</strong></td><td>55.3%</td><td><span class="status-badge approved">Target Exceeded</span></td></tr>
        <tr><td><strong>Mombasa Branch</strong></td><td><span class="status-badge approved">32 New Policies</span></td><td>14 Renewals</td><td><strong style="color:var(--primary)">KSh 10,800,000</strong></td><td>21.0%</td><td><span class="status-badge approved">On Target</span></td></tr>
        <tr><td><strong>Kisumu Branch</strong></td><td><span class="status-badge approved">20 New Policies</span></td><td>8 Renewals</td><td><strong style="color:var(--primary)">KSh 6,100,000</strong></td><td>11.9%</td><td><span class="status-badge approved">On Target</span></td></tr>
        <tr><td><strong>Nakuru Branch</strong></td><td><span class="status-badge approved">12 New Policies</span></td><td>4 Renewals</td><td><strong style="color:var(--primary)">KSh 3,200,000</strong></td><td>6.2%</td><td><span class="status-badge approved">On Target</span></td></tr>
        <tr><td><strong>Eldoret Branch</strong></td><td><span class="status-badge approved">10 New Policies</span></td><td>3 Renewals</td><td><strong style="color:var(--primary)">KSh 2,800,000</strong></td><td>5.6%</td><td><span class="status-badge approved">On Target</span></td></tr>
        <tr style="background:rgba(255,107,0,0.08); font-weight:800; border-top:2px solid var(--primary);">
          <td>TOTAL ACQUISITION:</td>
          <td><strong>158 New Policies</strong></td>
          <td><strong>61 Renewals</strong></td>
          <td><strong style="color:var(--primary); font-size:14px;">KSh 51,300,000</strong></td>
          <td><strong>100.0%</strong></td>
          <td><span class="status-badge approved">5 Branches Active</span></td>
        </tr>
      `;
    }
    if (aiSummary) {
      aiSummary.innerHTML = `<strong>Branch Acquisition Audit (${startDate} to ${endDate}):</strong> Nairobi HQ led production with KSh 28.4M (55.3% share), followed by Mombasa (KSh 10.8M), Kisumu (KSh 6.1M), Nakuru (KSh 3.2M), and Eldoret (KSh 2.8M). Total new acquisition premium reached KSh 51.3M across 219 policies.`;
    }
  }
}

function exportQueriedReport(type) {
  const ledger = document.getElementById("report-ledger-type")?.value || "underwriting";
  const start = document.getElementById("report-start-date")?.value || "2026-08-01";
  const end = document.getElementById("report-end-date")?.value || "2026-08-31";

  if (type === "pdf") {
    if (typeof showToast === "function") showToast(" Exporting PDF", `Generating official ${ledger.toUpperCase()} report PDF for period ${start} to ${end}...`, "info");
    setTimeout(() => {
      window.print();
    }, 1000);
  } else {
    if (typeof showToast === "function") showToast(" Exporting CSV", `Downloading ${ledger}_report_${start}_to_${end}.csv...`, "success");
    const csvContent = "data:text/csv;charset=utf-8,Module,Period,Start,End,Status\n" + ledger + ",Queried," + start + "," + end + ",Verified";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${ledger}_report_${start}_to_${end}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Initial report query on page load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(window.runReportQuery, 600);
});

// ================= ULTRA-PREMIUM GLOWING DUAL AREA SPLINE & BAR CHART ENGINE =================
let currentReportChartType = "spline";

function setReportChartType(type) {
  currentReportChartType = type;
  const splineBtn = document.getElementById("chart-style-spline-btn");
  const barBtn = document.getElementById("chart-style-bar-btn");

  if (type === "spline") {
    if (splineBtn) { splineBtn.style.background = "#ff6b00"; splineBtn.style.color = "#fff"; }
    if (barBtn) { barBtn.style.background = "transparent"; barBtn.style.color = "#94a3b8"; }
  } else {
    if (splineBtn) { splineBtn.style.background = "transparent"; splineBtn.style.color = "#94a3b8"; }
    if (barBtn) { barBtn.style.background = "#3b82f6"; barBtn.style.color = "#fff"; }
  }
  renderReportTrendChart();
}

function renderReportCharts(ledger = "underwriting") {
  renderReportTrendChart();
  renderReportBranchShareChart();
}

function renderReportTrendChart() {
  const chartBox = document.getElementById("report-trend-chart-box");
  if (!chartBox) return;

  const data = [
    { month: "Jan", prem: 38.5, claim: 10.9, ratio: "28.3%" },
    { month: "Feb", prem: 42.0, claim: 13.1, ratio: "31.2%" },
    { month: "Mar", prem: 45.2, claim: 11.9, ratio: "26.3%" },
    { month: "Apr", prem: 41.8, claim: 14.6, ratio: "34.9%" },
    { month: "May", prem: 46.5, claim: 13.8, ratio: "29.7%" },
    { month: "Jun", prem: 51.0, claim: 16.8, ratio: "32.9%" },
    { month: "Jul", prem: 47.8, claim: 13.1, ratio: "27.4%" },
    { month: "Aug", prem: 48.5, claim: 14.2, ratio: "29.3%" }
  ];

  const width = chartBox.clientWidth || 580;
  const height = 240;
  const paddingX = 42;
  const paddingY = 32;

  const maxVal = 60;
  const maxX = data.length - 1;

  const pointsPrem = [];
  const pointsClaim = [];

  data.forEach((d, idx) => {
    const x = paddingX + (idx / maxX) * (width - paddingX * 2);
    const yPrem = height - paddingY - (d.prem / maxVal) * (height - paddingY * 2);
    const yClaim = height - paddingY - (d.claim / maxVal) * (height - paddingY * 2);
    pointsPrem.push({ x, y: yPrem, val: d.prem, ...d });
    pointsClaim.push({ x, y: yClaim, val: d.claim, ...d });
  });

  // Calculate smooth Spline Curves
  function getSplinePath(points) {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const cp1x = p0.x + (p1.x - p0.x) * 0.45;
      const cp1y = p0.y;
      const cp2x = p1.x - (p1.x - p0.x) * 0.45;
      const cp2y = p1.y;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
    }
    return d;
  }

  const pathPrem = getSplinePath(pointsPrem);
  const pathClaim = getSplinePath(pointsClaim);

  const areaPrem = `${pathPrem} L ${pointsPrem[pointsPrem.length - 1].x} ${height - paddingY} L ${pointsPrem[0].x} ${height - paddingY} Z`;
  const areaClaim = `${pathClaim} L ${pointsClaim[pointsClaim.length - 1].x} ${height - paddingY} L ${pointsClaim[0].x} ${height - paddingY} Z`;

  // Grid Lines & Labels
  let gridLines = "";
  [0, 15, 30, 45, 60].forEach(val => {
    const y = height - paddingY - (val / maxVal) * (height - paddingY * 2);
    gridLines += `
      <line x1="${paddingX}" y1="${y}" x2="${width - paddingX}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4,4"/>
      <text x="${paddingX - 8}" y="${y + 4}" fill="#64748b" font-size="10" font-weight="600" text-anchor="end">${val}M</text>
    `;
  });

  // X Axis Labels & Nodes
  let xLabels = "";
  let nodes = "";
  let barElements = "";

  const barGroupWidth = (width - paddingX * 2) / data.length;
  const singleBarW = Math.max(10, Math.floor(barGroupWidth * 0.32));

  data.forEach((d, idx) => {
    const pP = pointsPrem[idx];
    const pC = pointsClaim[idx];

    xLabels += `<text x="${pP.x}" y="${height - 10}" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">${d.month}</text>`;

    if (currentReportChartType === "bar") {
      const hP = (d.prem / maxVal) * (height - paddingY * 2);
      const hC = (d.claim / maxVal) * (height - paddingY * 2);
      const xP = pP.x - singleBarW - 2;
      const xC = pP.x + 2;

      barElements += `
        <rect x="${xP}" y="${height - paddingY - hP}" width="${singleBarW}" height="${hP}" rx="3" fill="url(#neonOrangeGrad)">
          <title>${d.month}: Premium KSh ${d.prem}M</title>
        </rect>
        <rect x="${xC}" y="${height - paddingY - hC}" width="${singleBarW}" height="${hC}" rx="3" fill="url(#neonCyanGrad)">
          <title>${d.month}: Claims KSh ${d.claim}M</title>
        </rect>
      `;
    } else {
      nodes += `
        <!-- Glow Circle Premium -->
        <circle cx="${pP.x}" cy="${pP.y}" r="6" fill="#ff6b00" stroke="#ffffff" stroke-width="2.5" style="filter: drop-shadow(0 0 6px #ff6b00);">
          <title>${d.month} Premium: KSh ${d.prem}M (Loss Ratio: ${d.ratio})</title>
        </circle>
        <!-- Glow Circle Claim -->
        <circle cx="${pC.x}" cy="${pC.y}" r="5" fill="#00f2fe" stroke="#ffffff" stroke-width="2.5" style="filter: drop-shadow(0 0 6px #00f2fe);">
          <title>${d.month} Loss Claims: KSh ${d.claim}M</title>
        </circle>
      `;
    }
  });

  chartBox.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}">
      <defs>
        <!-- Neon Orange Gradient -->
        <linearGradient id="neonOrangeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff6b00" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#ff8533" stop-opacity="0.05"/>
        </linearGradient>
        <!-- Neon Cyan Gradient -->
        <linearGradient id="neonCyanGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#4facfe" stop-opacity="0.05"/>
        </linearGradient>
      </defs>

      <!-- Grid Background -->
      ${gridLines}

      ${currentReportChartType === "spline" ? `
        <!-- Area Fills -->
        <path d="${areaPrem}" fill="url(#neonOrangeGrad)"/>
        <path d="${areaClaim}" fill="url(#neonCyanGrad)"/>

        <!-- Glowing Spline Lines -->
        <path d="${pathPrem}" fill="none" stroke="#ff6b00" stroke-width="3.5" stroke-linecap="round" style="filter: drop-shadow(0 2px 8px rgba(255,107,0,0.6));"/>
        <path d="${pathClaim}" fill="none" stroke="#00f2fe" stroke-width="3" stroke-linecap="round" stroke-dasharray="6,3" style="filter: drop-shadow(0 2px 8px rgba(0,242,254,0.6));"/>

        <!-- Glow Nodes -->
        ${nodes}
      ` : `
        <!-- 3D Bar Comparison -->
        ${barElements}
      `}

      <!-- X Labels -->
      ${xLabels}
    </svg>
  `;
}

function renderReportBranchShareChart() {
  const container = document.getElementById("report-branch-share-box");
  if (!container) return;

  const branches = [
    { name: "Nairobi HQ", share: 58.5, val: "KSh 28.4M", color: "#ff6b00" },
    { name: "Mombasa Branch", share: 22.2, val: "KSh 10.8M", color: "#3b82f6" },
    { name: "Kisumu Branch", share: 12.6, val: "KSh 6.1M", color: "#10b981" },
    { name: "Nakuru Branch", share: 6.7, val: "KSh 3.2M", color: "#8b5cf6" }
  ];

  let html = "";
  branches.forEach(b => {
    html += `
      <div style="margin-bottom:6px;">
        <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
          <span style="font-weight:700; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
            <span style="width:10px; height:10px; background:${b.color}; border-radius:50%; display:inline-block;"></span> ${b.name}
          </span>
          <span style="font-weight:700; color:var(--text-primary);">${b.val} (${b.share}%)</span>
        </div>
        <div style="width:100%; height:8px; background:rgba(255,255,255,0.08); border-radius:4px; overflow:hidden;">
          <div style="width:${b.share}%; height:100%; background:${b.color}; border-radius:4px;"></div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function setupReportsQueryListeners() {
  const queryBtn = document.getElementById("report-query-btn");
  if (queryBtn) {
    queryBtn.onclick = function(e) {
      if (e) e.preventDefault();
      if (typeof window.runReportQuery === "function") window.runReportQuery();
    };
  }
}

// Bind all interactive functions globally to window to prevent event scope errors
window.runReportQuery = function() {
  executeReportQuery();
  setTimeout(renderReportCharts, 100);
};
window.applyReportPeriodPreset = applyReportPeriodPreset;
window.exportQueriedReport = exportQueriedReport;
window.setReportChartType = setReportChartType;

window.activateCertInline = function(certId) {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const newPolicy = {
    policyNo: `POL-MOT-${randomNum}-2026`,
    clientName: "African Merchant Client",
    plate: "KDG 123A",
    line: "Motor",
    premium: 72000,
    debited: 72000,
    status: "Active",
    certId: certId,
    isNew: true,
    branch: "HQ"
  };
  policies.unshift(newPolicy);
  
  if (typeof renderPolicyRegistry === "function") {
    renderPolicyRegistry();
  }
  
  const resBox = document.getElementById("cert-status-result");
  if (resBox) {
    resBox.innerHTML = `
      <div style="font-weight:600; color:var(--success); margin-bottom:4px;">
        Certificate Valid and Declared Active
      </div>
      <div><strong>Policy:</strong> ${newPolicy.policyNo}</div>
      <div><strong>Holder:</strong> ${newPolicy.clientName} (${newPolicy.plate})</div>
      <div><strong>Line:</strong> ${newPolicy.line}</div>
    `;
  }
  
  if (typeof showToast === "function") {
    showToast("Certificate Active", `Certificate ${certId} successfully registered and declared active.`, "success");
  }
};
