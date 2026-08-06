"use client";
import React from "react";
import { useEIMS } from "@/hooks/useEIMS";

export default function Header() {
  const { navigateToView, openModal } = useEIMS();

  return (
    <header className="app-header">
      <div className="header-search">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search claims, vehicle plates, policy numbers..." />
      </div>
      <div className="header-actions">
        <button className="btn btn-outline" onClick={() => navigateToView("garage-network")}>
          🛠️ Workshop App
        </button>
        <button className="btn btn-outline" onClick={() => navigateToView("policy-registry")}>
          📜 Digital QR Cert
        </button>
        <button className="btn btn-outline" onClick={() => navigateToView("qr-generator")}>
          📱 Test QR Engine
        </button>
        <button className="btn btn-primary" onClick={openModal}>
          ✨ AI Report Assist
        </button>
        <button className="icon-btn">🔔</button>
        <button className="icon-btn">☀️</button>
      </div>
    </header>
  );
}
