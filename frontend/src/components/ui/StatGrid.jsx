import Icon from "@/components/Icon";

/** stats: [{ key, label, value, delta?, trend?, tone?, icon? }] */
export default function StatGrid({ stats }) {
  return (
    <div className="dashboard-stats-grid">
      {stats.map((s) => (
        <div className="stat-card" key={s.key ?? s.label}>
          <div className="stat-info">
            <h3>{s.label}</h3>
            <div className="stat-number">{s.value}</div>
            {s.delta && (
              <div className={`stat-trend ${s.trend || "up"}`}>
                <Icon name={s.trend || "up"} size={12} strokeWidth="3" /> {s.delta}
              </div>
            )}
          </div>
          {s.icon && (
            <div className={`stat-icon-wrapper ${s.tone || "blue"}`}>
              <Icon name={s.icon} size={24} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
