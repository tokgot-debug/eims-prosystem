"use client";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import VelocityChart from "@/components/charts/VelocityChart";
import { useCollection } from "@/lib/db";
import { VELOCITY, dashboardStats, fraudClass, money, triageSplit } from "@/lib/claims";

const STATS = (s) => [
  { key: "total", label: "Total Active Claims", value: s.total, trend: "up", delta: "12.4%", tone: "blue", icon: "file" },
  { key: "settled", label: "Total Settled Value", value: s.settledLabel, trend: "up", delta: "8.2%", tone: "green", icon: "dollar" },
  { key: "siu", label: "In Review (SIU)", value: s.investigating, trend: "down", delta: "4.1%", tone: "warning", icon: "clock" },
  { key: "fraud", label: "Avg. Fraud Index", value: `${s.avgFraud}%`, trend: "down", delta: "2.8%", tone: "danger", icon: "alert" },
];

export default function DashboardPage() {
  const router = useRouter();
  const claims = useCollection("claims");
  const stats = dashboardStats(claims);
  const triage = triageSplit(claims);
  const recent = claims.slice(-3).reverse();

  return (
    <section className="app-view active">
      <div className="view-title-block">
        <div>
          <h1>Claims Overview</h1>
          <p>Real-time analytics and telemetry of insurance files across Kenya</p>
        </div>
        <div className="view-title-actions">
          <button className="btn btn-secondary" onClick={() => router.push("/portal/production-reports")}>
            Reports &amp; Query Center
          </button>
          <button className="btn btn-primary" onClick={() => router.push("/portal/create-claim")}>
            <Icon name="plus" size={16} /> New Notice of Loss
          </button>
        </div>
      </div>

      <div className="dashboard-stats-grid">
        {STATS(stats).map((s) => (
          <div className="stat-card" key={s.key}>
            <div className="stat-info">
              <h3>{s.label}</h3>
              <div className="stat-number">{s.value}</div>
              <div className={`stat-trend ${s.trend}`}>
                <Icon name={s.trend} size={12} strokeWidth="3" /> {s.delta}
              </div>
            </div>
            <div className={`stat-icon-wrapper ${s.tone}`}><Icon name={s.icon} size={24} /></div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h2>
                Claims Velocity (Last 6 Months)
                <span className="status-badge approved">+15.5%</span>
              </h2>
              <p className="card-sub">Monthly claim filing frequency &amp; telemetry volume</p>
            </div>
            <div className="card-meta">
              Avg: <b>29.3/mo</b> &nbsp; Peak: <b className="accent">Aug (52)</b>
            </div>
          </div>
          <VelocityChart data={VELOCITY} />
        </div>

        <div className="dashboard-card">
          <div className="card-header"><h2>Triage Distribution</h2></div>
          <div className="donut-wrap">
            <svg viewBox="0 0 42 42" className="triage-donut" role="img"
                 aria-label={`Auto-pass rate ${triage.green} percent`}>
              <circle className="donut-track" cx="21" cy="21" r="15.9" />
              <circle className="donut-value" cx="21" cy="21" r="15.9"
                      strokeDasharray={`${triage.green} ${100 - triage.green}`}
                      strokeDashoffset="25" />
            </svg>
            <div className="donut-center">
              <strong>{triage.green}%</strong>
              <span>AUTO-PASS</span>
            </div>
          </div>
          <div className="donut-legend">
            <span><i className="dot green" />Green ({triage.green}%)</span>
            <span><i className="dot yellow" />Yellow ({triage.yellow}%)</span>
            <span><i className="dot red" />Red ({triage.red}%)</span>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-header">
          <h2>Recent Notice of Loss Filings</h2>
          <button className="link-btn" onClick={() => router.push("/portal/claims-directory")}>
            View All Claims
          </button>
        </div>
        <div className="table-scroll">
          <table className="claims-table">
            <thead>
              <tr>
                <th>Claim ID</th><th>Plate</th><th>Claimant</th><th>Incident Date</th>
                <th>Damage Estimate</th><th>Fraud Index</th><th>Triage Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((c) => (
                <tr key={c.id} onClick={() => router.push(`/portal/claims-directory?claim=${c.id}`)}
                    style={{ cursor: "pointer" }}>
                  <td><strong>{c.id}</strong></td>
                  <td><code>{c.plate}</code></td>
                  <td>{c.owner}</td>
                  <td>{c.date}</td>
                  <td>{money(c.cost)}</td>
                  <td><span className={`fraud-pill ${fraudClass(c.fraudScore)}`}>{c.fraudScore}%</span></td>
                  <td><span className={`status-badge ${c.triage.toLowerCase()}`}>{c.triage} Path</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
