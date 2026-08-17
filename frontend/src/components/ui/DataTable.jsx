"use client";
import { useMemo, useState } from "react";

/**
 * The table every list view uses. Sorting, text filtering and CSV export are
 * here once rather than reimplemented per view (the legacy app had a bespoke
 * render + export function for each one).
 *
 * columns: [{ key, label, render?, align?, sortValue?, csv? }]
 */
export default function DataTable({
  columns,
  rows,
  empty = "Nothing to show yet.",
  onRowClick,
  filterPlaceholder = "Filter...",
  filterable = true,
  exportName,
  toolbar,
}) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState({ key: null, dir: 1 });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
      columns.some((c) => String(valueFor(c, r) ?? "").toLowerCase().includes(q)));
  }, [rows, query, columns]);

  const sorted = useMemo(() => {
    if (!sort.key) return filtered;
    const col = columns.find((c) => c.key === sort.key);
    return [...filtered].sort((a, b) => {
      const av = col.sortValue ? col.sortValue(a) : valueFor(col, a);
      const bv = col.sortValue ? col.sortValue(b) : valueFor(col, b);
      if (typeof av === "number" && typeof bv === "number") return (av - bv) * sort.dir;
      return String(av).localeCompare(String(bv)) * sort.dir;
    });
  }, [filtered, sort, columns]);

  function toggleSort(key) {
    setSort((s) => (s.key === key ? { key, dir: -s.dir } : { key, dir: 1 }));
  }

  function exportCsv() {
    const head = columns.map((c) => `"${c.label}"`).join(",");
    const body = sorted
      .map((r) => columns.map((c) => `"${String(c.csv ? c.csv(r) : valueFor(c, r) ?? "").replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([`${head}\n${body}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${exportName}_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="data-table">
      {(filterable || exportName || toolbar) && (
        <div className="data-table-bar">
          {filterable && (
            <input
              className="form-control data-table-filter"
              type="search"
              value={query}
              placeholder={filterPlaceholder}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={filterPlaceholder}
            />
          )}
          {toolbar}
          <span className="data-table-count">
            {sorted.length} of {rows.length}
          </span>
          {exportName && (
            <button className="btn btn-secondary" onClick={exportCsv} disabled={!sorted.length}>
              Export CSV
            </button>
          )}
        </div>
      )}

      <div className="table-scroll">
        <table className="claims-table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key} style={{ textAlign: c.align || "left" }}>
                  <button className="th-sort" onClick={() => toggleSort(c.key)}
                          aria-label={`Sort by ${c.label}`}>
                    {c.label}
                    <span className="th-arrow">{sort.key === c.key ? (sort.dir === 1 ? "↑" : "↓") : ""}</span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r, i) => (
              <tr key={r.id ?? r.policyNo ?? r.ref ?? r.ackRef ?? r.claimId ?? r.name ?? i}
                  onClick={onRowClick ? () => onRowClick(r) : undefined}
                  style={onRowClick ? { cursor: "pointer" } : undefined}>
                {columns.map((c) => (
                  <td key={c.key} style={{ textAlign: c.align || "left" }}>
                    {c.render ? c.render(r) : valueFor(c, r)}
                  </td>
                ))}
              </tr>
            ))}
            {!sorted.length && (
              <tr>
                <td colSpan={columns.length} className="table-empty">{empty}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function valueFor(col, row) {
  return col.value ? col.value(row) : row[col.key];
}
