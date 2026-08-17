import Image from "next/image";
import Link from "next/link";
import { CAPABILITIES, KPIS, MARQUEE } from "@/lib/landing-content";

// Public marketing site. Renders no portal chrome and links nowhere except
// /login -- the capability cards are copy, not navigation.
export default function LandingPage() {
  return (
    <div id="public-shell">
      <header className="landing-top-bar">
        <div className="landing-brand">
          <Image src="/amaco_logo.png" alt="AMACO Insurance" width={112} height={54} priority />
          <div>
            <h2>AMACO INSURANCE</h2>
            <p>African Merchant Assurance Company Ltd &bull; Enterprise EIMS Portal</p>
          </div>
        </div>
        <Link href="/login" className="landing-login-btn">Staff Login</Link>
      </header>

      <section className="landing-hero">
        <div className="cyber-orb-1" />
        <div className="cyber-orb-2" />
        <div className="cyber-badge">
          AMACO INSURANCE PROSYSTEM 2026 &bull; AI-POWERED ENTERPRISE EIMS
        </div>
        <h1 className="hero-title-text">
          Next-Gen Autonomous Fleet Insurance &amp; Telemetry Infrastructure
        </h1>
        <p className="hero-sub-text">
          Transforming Kenya fleet underwriting and claims processing with real-time NTSA ANPR
          verification, computer vision incident triage, AKI digital motor certificates, and
          instant M-PESA / Airtel / Bank settlements.
        </p>
        <div className="hero-btn-group">
          <Link href="/login" className="btn-glow-primary">Launch Enterprise Portal</Link>
        </div>
      </section>

      <div className="keyword-marquee-container">
        <div className="keyword-marquee-track">
          {/* Duplicated once so the loop has no visible seam. */}
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i}>
              <span className="marquee-item">{word}</span>
              <span className="marquee-divider">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      <div className="kpi-ticker-row">
        {KPIS.map((k) => (
          <div className="kpi-ticker-card" key={k.label}>
            <div className="kpi-ticker-val">{k.value}</div>
            <div className="kpi-ticker-lbl">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="landing-section-head">
        <h2>Enterprise Capability Matrix</h2>
        <p>Everything the licensed staff portal ships with</p>
      </div>

      <div className="feature-grid-3d">
        {CAPABILITIES.map((c) => (
          <article className="cyber-card" key={c.title}>
            <div className="cyber-card-icon" />
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <span className="cyber-card-tag">{c.tag}</span>
          </article>
        ))}
      </div>

      <footer className="landing-footer">
        AMACO &mdash; African Merchant Assurance Company Ltd &bull; Regulated by the Insurance
        Regulatory Authority of Kenya
      </footer>
    </div>
  );
}
