"use client";
import React from "react";
import { useEIMS } from "@/hooks/useEIMS";

export default function NewPolicyModal() {
  const { isModalOpen, closeModal } = useEIMS();

  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" style={{ display: "flex", position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 9999, justifyContent: "center", alignItems: "center" }}>
      <div className="modal-card glass-card" style={{ background: "#0f172a", border: "1px solid rgba(236,72,153,0.3)", padding: "24px", borderRadius: "16px", maxWidth: "500px", width: "90%", color: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
          <h3 style={{ margin: 0 }}>✨ AI Production & Fraud Assistant</h3>
          <button onClick={closeModal} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "18px" }}>✕</button>
        </div>
        <p style={{ color: "#94a3b8", fontSize: "14px" }}>Synthesizing real-time analytics for County Underwriting & Claims Triage...</p>
        <div style={{ background: "rgba(15, 23, 42, 0.9)", padding: "12px", borderRadius: "8px", border: "1px solid rgba(56,189,248,0.2)", fontSize: "13px", color: "#38bdf8", marginBottom: "16px" }}>
          🤖 AI Insights: All 47 County fleet policies active. 99.4% ANPR OCR accuracy confirmed across Nairobi & Mombasa outlets.
        </div>
        <button onClick={closeModal} className="btn btn-primary" style={{ width: "100%" }}>Close Assistant</button>
      </div>
    </div>
  );
}
