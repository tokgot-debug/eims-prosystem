"use client";
import React from "react";
import { useEIMS } from "@/hooks/useEIMS";

export default function LandingPageView() {
  const { navigateToView, openModal } = useEIMS();

  return (
    <div id="view-landing-page">
      {/* Top Bar */}
      <div
        className="landing-top-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "14px 20px",
          marginBottom: "16px",
          border: "1px solid rgba(236,72,153,0.3)",
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <img
            src="/amaco_logo.png"
            alt="AMACO Insurance Logo"
            style={{
              height: "54px",
              width: "auto",
              borderRadius: "10px",
              background: "#ffffff",
              padding: "6px 12px",
              boxShadow: "0 4px 16px rgba(236,72,153,0.4)",
            }}
          />
          <div>
            <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 900, color: "#ffffff", letterSpacing: "0.8px" }}>
              AMACO INSURANCE
            </h2>
            <p style={{ margin: 0, fontSize: "12px", color: "#f472b6", fontWeight: 700 }}>
              African Merchant Assurance Company Ltd • Enterprise EIMS Portal
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            className="btn"
            onClick={() => navigateToView("dashboard")}
            style={{
              background: "linear-gradient(135deg, #ec4899, #be185d)",
              color: "#ffffff",
              border: "none",
              padding: "9px 18px",
              fontWeight: 700,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 4px 14px rgba(236,72,153,0.4)",
              cursor: "pointer",
            }}
          >
            <span>🚀</span> Launch Staff Portal
          </button>
        </div>
      </div>

      {/* Cyber Hero Section */}
      <div className="landing-hero">
        <div className="cyber-orb-1"></div>
        <div className="cyber-orb-2"></div>

        <div className="cyber-badge">
          <span style={{ fontSize: "14px" }}>✨</span> AMACO INSURANCE PROSYSTEM 2026 • AI-POWERED ENTERPRISE EIMS
        </div>

        <h1 className="hero-title-text">
          Next-Gen Autonomous Fleet Insurance & Telemetry Infrastructure
        </h1>

        <p className="hero-sub-text">
          Transforming Kenya fleet underwriting and claims processing with real-time NTSA ANPR verification, computer vision incident triage, AKI digital motor certificates, and instant M-PESA / Airtel / Bank settlements.
        </p>

        <div className="hero-btn-group">
          <button className="btn-glow-primary" onClick={() => navigateToView("dashboard")}>
            🚀 Launch Enterprise Portal
          </button>
          <button className="btn-glow-secondary" onClick={() => navigateToView("mobile-app")}>
            📱 Mobile App Portal
          </button>
          <button className="btn-glow-secondary" onClick={() => navigateToView("geomap-center")}>
            🗺️ National GIS Map
          </button>
        </div>
      </div>

      {/* Animated Cyber Keyword Marquee Scroll Bar */}
      <div className="keyword-marquee-container">
        <div className="keyword-marquee-track">
          <span className="marquee-item" onClick={() => navigateToView("create-claim")}><span className="marquee-icon">🤖</span> AI Fraud Audit Engine</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("create-claim")}><span className="marquee-icon">🚗</span> NTSA ANPR Plate Telemetry</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("mpesa-gateway")}><span className="marquee-icon">📲</span> M-PESA & Airtel B2C Instant Payouts</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("policy-registry")}><span className="marquee-icon">📜</span> AKI Digital Motor Certificates</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("geomap-center")}><span className="marquee-icon">🗺️</span> National Kenya GIS Incident Mapping</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("policy-registry")}><span className="marquee-icon">🏢</span> County Government Fleet Underwriting</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("policy-registry")}><span className="marquee-icon">⚖️</span> IRA Statutory Tax & Levy Remittance</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("create-claim")}><span className="marquee-icon">🔍</span> EXIF Camera Scene Media Telemetry</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("garage-network")}><span className="marquee-icon">🛠️</span> Accredited Garage SLA Network</span>
          <span className="marquee-divider">•</span>
          <span className="marquee-item" onClick={() => navigateToView("create-claim")}><span className="marquee-icon">📋</span> KIRA Form 104 Electronic Filing</span>
          <span className="marquee-divider">•</span>
        </div>
      </div>

      {/* Live Telemetry KPI Ticker Row */}
      <div className="kpi-ticker-row">
        <div className="kpi-ticker-card">
          <div className="kpi-ticker-val">KSh 37.28M</div>
          <div className="kpi-ticker-lbl">⚡ Gross Underwritten Premium</div>
        </div>
        <div className="kpi-ticker-card">
          <div className="kpi-ticker-val">92%</div>
          <div className="kpi-ticker-lbl">🤖 Auto-Pass AI Triage Accuracy</div>
        </div>
        <div className="kpi-ticker-card">
          <div className="kpi-ticker-val">429</div>
          <div className="kpi-ticker-lbl">🛡️ Active County Policies Issued</div>
        </div>
        <div className="kpi-ticker-card">
          <div className="kpi-ticker-val">&lt; 30s</div>
          <div className="kpi-ticker-lbl">📲 Instant Multi-Channel Payout SLA</div>
        </div>
      </div>

      {/* 3D Feature Grid */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>
          Enterprise Capability Matrix
        </h2>
        <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
          Click any capability to launch the live module
        </p>
      </div>

      <div className="feature-grid-3d">
        <div className="cyber-card">
          <div className="cyber-card-icon">📷</div>
          <h3>Incident Scene Photo Intake</h3>
          <p>Direct photo & video accident scene capture with EXIF GPS location verification and automated damage highlight painting.</p>
          <button className="cyber-card-btn" onClick={() => navigateToView("create-claim")}>Launch Incident Intake →</button>
        </div>

        <div className="cyber-card">
          <div className="cyber-card-icon">🚗</div>
          <h3>NTSA ANPR Plate Telemetry</h3>
          <p>Automated OCR optical license plate scanning cross-referenced against the NTSA national motor vehicle database.</p>
          <button className="cyber-card-btn" onClick={() => navigateToView("create-claim")}>Test ANPR Scan →</button>
        </div>

        <div className="cyber-card">
          <div className="cyber-card-icon">📜</div>
          <h3>AKI Digital Motor Certificates</h3>
          <p>Instant issuance of Association of Kenya Insurers digital motor certificates featuring encrypted QR validation badges.</p>
          <button className="cyber-card-btn" onClick={() => navigateToView("policy-registry")}>View Certificates →</button>
        </div>

        <div className="cyber-card">
          <div className="cyber-card-icon">🔧</div>
          <h3>Accredited Garage & Assessors</h3>
          <p>5-stage repair milestone tracker (*Intake ➔ Parts ➔ Paint ➔ Quality*) and digital repair release vouchers.</p>
          <button className="cyber-card-btn" onClick={() => navigateToView("garage-network")}>Open Garage Network →</button>
        </div>

        <div className="cyber-card">
          <div className="cyber-card-icon">💳</div>
          <h3>Multi-Channel Settlement Gateway</h3>
          <p>Instant 1-click B2C claim disbursement supporting Safaricom M-PESA, Airtel Money, and PesaLink Bank Transfers.</p>
          <button className="cyber-card-btn" onClick={() => navigateToView("mpesa-gateway")}>Launch Settlement →</button>
        </div>

        <div className="cyber-card">
          <div className="cyber-card-icon">🏛️</div>
          <h3>IRA & KRA Statutory Compliance</h3>
          <p>Automatic statutory tax calculations under Insurance Act Cap 487 (PHCF 0.25%, Training Levy 0.20%, Stamp Duty).</p>
          <button className="cyber-card-btn" onClick={() => navigateToView("ira-compliance")}>View IRA Returns →</button>
        </div>

        <div className="cyber-card">
          <div className="cyber-card-icon">🗺️</div>
          <h3>National GIS Command Center</h3>
          <p>Full-screen interactive geospatial command map rendering 14 live telemetry markers for claims, garages, and tow units.</p>
          <button className="cyber-card-btn" onClick={() => navigateToView("geomap-center")}>Open GIS Command Center →</button>
        </div>

        <div className="cyber-card">
          <div className="cyber-card-icon">✨</div>
          <h3>AI Report Assistant</h3>
          <p>Natural language AI analytics engine synthesizing executive production summaries, branch audits, and fraud briefs.</p>
          <button className="cyber-card-btn" onClick={openModal}>Ask AI Assistant →</button>
        </div>
      </div>

      {/* Live Terminal Event Stream Preview */}
      <div className="terminal-box">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", borderBottom: "1px solid rgba(56,189,248,0.2)", paddingBottom: "8px" }}>
          <span style={{ fontWeight: 700, color: "#fff" }}>⚡ EIMS LIVE TELEMETRY LOG STREAM (KENYA NATIONAL BUS)</span>
          <span className="pulse-circle" style={{ display: "inline-block" }}></span>
        </div>
        <div>[23:29:40] <span style={{ color: "#10b981" }}>[NTSA ANPR]</span> License Plate <span style={{ color: "#fff" }}>KDG 123A</span> verified against National Registry. Owner: County Health Dept.</div>
        <div>[23:29:41] <span style={{ color: "#38bdf8" }}>[AI ENGINE]</span> Incident photos processed. EXIF GPS: -1.286389, 36.817222 (Nairobi CBD). Fraud Score: 14% [Green Path].</div>
        <div>[23:29:42] <span style={{ color: "#f59e0b" }}>[AKI CERT]</span> Certificate <span style={{ color: "#fff" }}>AKI-2026-90823</span> issued with encrypted QR verification badge.</div>
        <div>[23:29:43] <span style={{ color: "#10b981" }}>[SETTLEMENT]</span> M-PESA B2C Disbursement: <span style={{ color: "#fff" }}>KSh 142,500</span> sent to 254712345678 (Ref: QK89X201L9). Status: SUCCESS.</div>
      </div>
    </div>
  );
}
