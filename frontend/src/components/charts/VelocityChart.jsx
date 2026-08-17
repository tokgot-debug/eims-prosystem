"use client";
import { useState } from "react";

// Faithful port of the legacy hand-built spline chart. viewBox keeps it fluid
// instead of the old clientWidth measurement + re-render on resize.
const W = 560;
const H = 230;
const PAD_X = 45;
const PAD_Y = 35;

export default function VelocityChart({ data }) {
  const [hover, setHover] = useState(null);
  const maxY = Math.max(...data.map((d) => d.claims)) + 12;

  const pts = data.map((d, i) => ({
    ...d,
    x: PAD_X + (i / (data.length - 1)) * (W - PAD_X * 2),
    y: H - PAD_Y - (d.claims / maxY) * (H - PAD_Y * 2),
  }));

  // Catmull-Rom-ish smoothing: control points at the midpoint of each segment.
  const line = pts
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = pts[i - 1];
      const cx = (prev.x + p.x) / 2;
      return `C ${cx} ${prev.y}, ${cx} ${p.y}, ${p.x} ${p.y}`;
    })
    .join(" ");
  const area = `${line} L ${pts.at(-1).x} ${H - PAD_Y} L ${pts[0].x} ${H - PAD_Y} Z`;

  const ticks = [0, 16, 32, 48, 64].filter((t) => t <= maxY);

  return (
    <div className="velocity-chart">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="240" role="img"
           aria-label="Claims filed per month, March to August 2026">
        <defs>
          <linearGradient id="velocity-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {ticks.map((t) => {
          const y = H - PAD_Y - (t / maxY) * (H - PAD_Y * 2);
          return (
            <g key={t}>
              <line x1={PAD_X} x2={W - PAD_X} y1={y} y2={y}
                    stroke="var(--border-color)" strokeDasharray="3 4" />
              <text x={PAD_X - 10} y={y + 4} textAnchor="end"
                    fontSize="10" fill="var(--text-muted)">{t}</text>
            </g>
          );
        })}

        <path d={area} fill="url(#velocity-fill)" />
        <path d={line} fill="none" stroke="var(--primary)" strokeWidth="2.5"
              strokeLinecap="round" />

        {pts.map((p) => (
          <g key={p.month}>
            <text x={p.x} y={H - PAD_Y + 20} textAnchor="middle"
                  fontSize="10" fill="var(--text-muted)">{p.month}</text>
            <circle cx={p.x} cy={p.y} r={hover?.month === p.month ? 6 : 4}
                    fill="var(--bg-surface)" stroke="var(--primary)" strokeWidth="2.5" />
            {/* Generous invisible hit area, the visible dot is too small to aim at. */}
            <rect x={p.x - 24} y={PAD_Y - 20} width="48" height={H - PAD_Y}
                  fill="transparent" style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHover(p)} onMouseLeave={() => setHover(null)} />
          </g>
        ))}
      </svg>

      {hover && (
        <div className="chart-tip" style={{ left: `${(hover.x / W) * 100}%` }}>
          <strong>{hover.month} 2026 Telemetry</strong>
          <span>Filed Claims: <b>{hover.claims} claims</b> ({hover.mom} MoM)</span>
          <span>Est. Payout: KSh {hover.cost}</span>
        </div>
      )}
    </div>
  );
}
