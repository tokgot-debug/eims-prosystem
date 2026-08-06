"use client";
import React from "react";
import { useEIMS } from "@/hooks/useEIMS";

export default function Sidebar() {
  const { navigateToView } = useEIMS();

  const toggleAccordion = (id) => {
    if (typeof window !== "undefined" && window.toggleAccordion) {
      window.toggleAccordion(id);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand" onClick={() => navigateToView("landing-page")} style={{ cursor: "pointer" }}>
        <img src="/amaco_logo.png" alt="AMACO Insurance Logo" className="brand-logo" />
        <div className="brand-title">
          <h2>AMACO Insurance</h2>
          <p>EIMS PROSYSTEM</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        {/* Module 1: Core Operations */}
        <div className="accordion-module active" id="mod-core">
          <button className="accordion-header" onClick={() => toggleAccordion("mod-core")}>
            <span className="header-left">
              <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>Core Operations</span>
            </span>
            <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="accordion-body">
            <button className="accordion-item" onClick={() => navigateToView("landing-page")}>Portal Home</button>
            <button className="accordion-item" onClick={() => navigateToView("dashboard")}>Executive Dashboard</button>
            <button className="accordion-item" onClick={() => navigateToView("geomap-center")}>National GIS GeoMap</button>
          </div>
        </div>

        {/* Module 2: Claims & Recovery */}
        <div className="accordion-module" id="mod-claims">
          <button className="accordion-header" onClick={() => toggleAccordion("mod-claims")}>
            <span className="header-left">
              <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>Claims & Recovery</span>
            </span>
            <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="accordion-body">
            <button className="accordion-item" onClick={() => navigateToView("create-claim")}>Incident Scene Intake</button>
            <button className="accordion-item" onClick={() => navigateToView("claims-directory")}>Claims Directory</button>
            <button className="accordion-item" onClick={() => navigateToView("garage-network")}>Garage Network</button>
            <button className="accordion-item" onClick={() => navigateToView("subrogation-recovery")}>Subrogation Recovery</button>
          </div>
        </div>

        {/* Module 3: Underwriting & Fleet */}
        <div className="accordion-module" id="mod-underwriting">
          <button className="accordion-header" onClick={() => toggleAccordion("mod-underwriting")}>
            <span className="header-left">
              <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>Underwriting & Fleet</span>
            </span>
            <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="accordion-body">
            <button className="accordion-item" onClick={() => navigateToView("policy-registry")}>Policy Registry</button>
            <button className="accordion-item" onClick={() => navigateToView("fleet-underwriting")}>Fleet Underwriting</button>
            <button className="accordion-item" onClick={() => navigateToView("ev-underwriting")}>EV Telemetry</button>
            <button className="accordion-item" onClick={() => navigateToView("reinsurance-ceding")}>Reinsurance Ceding</button>
          </div>
        </div>

        {/* Module 4: Finance & Compliance */}
        <div className="accordion-module" id="mod-finance">
          <button className="accordion-header" onClick={() => toggleAccordion("mod-finance")}>
            <span className="header-left">
              <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              <span>Finance & Compliance</span>
            </span>
            <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="accordion-body">
            <button className="accordion-item" onClick={() => navigateToView("mpesa-gateway")}>M-PESA Gateway</button>
            <button className="accordion-item" onClick={() => navigateToView("ecitizen-pesaflow")}>eCitizen PesaFlow</button>
            <button className="accordion-item" onClick={() => navigateToView("itax-compliance")}>KRA iTax Compliance</button>
            <button className="accordion-item" onClick={() => navigateToView("ira-compliance")}>IRA Statutory Returns</button>
          </div>
        </div>

        {/* Module 5: Analytics & Staff */}
        <div className="accordion-module" id="mod-analytics">
          <button className="accordion-header" onClick={() => toggleAccordion("mod-analytics")}>
            <span className="header-left">
              <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              <span>Analytics & Staff</span>
            </span>
            <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="accordion-body">
            <button className="accordion-item" onClick={() => navigateToView("production-reports")}>Production Reports</button>
            <button className="accordion-item" onClick={() => navigateToView("vehicle-loss-ratios")}>Loss Ratio Telemetry</button>
          </div>
        </div>

        {/* Module 6: AI Tools & OCR */}
        <div className="accordion-module" id="mod-tools">
          <button className="accordion-header" onClick={() => toggleAccordion("mod-tools")}>
            <span className="header-left">
              <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
              <span>AI Tools & OCR</span>
            </span>
            <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="accordion-body">
            <button className="accordion-item" onClick={() => navigateToView("remote-monitoring")}>Live Video Stream</button>
            <button className="accordion-item" onClick={() => navigateToView("lpr-scanner")}>NTSA ANPR Scanner</button>
            <button className="accordion-item" onClick={() => navigateToView("qr-generator")}>AKI QR Generator</button>
            <button className="accordion-item" onClick={() => navigateToView("alerts-simulator")}>Alerts Simulator</button>
            <button className="accordion-item" onClick={() => navigateToView("mobile-app")}>Mobile Intake App</button>
          </div>
        </div>

        {/* Module 7: Settings */}
        <div className="accordion-module" id="mod-settings">
          <button className="accordion-header" onClick={() => toggleAccordion("mod-settings")}>
            <span className="header-left">
              <svg className="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              <span>Settings</span>
            </span>
            <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="accordion-body">
            <button className="accordion-item" onClick={() => navigateToView("subscription-pricing")}>💳 Subscriptions & Licenses</button>
          </div>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">AD</div>
          <div className="user-info">
            <span className="user-name">Agent Davis</span>
            <span className="user-role">Claims Administrator</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
