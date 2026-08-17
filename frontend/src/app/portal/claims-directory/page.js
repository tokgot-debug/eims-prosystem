"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import ViewHeader from "@/components/ui/ViewHeader";
import DataTable from "@/components/ui/DataTable";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { useCollection, update } from "@/lib/db";
import { CLAIM_STATUS, TRIAGE, fraudClass, money, statusClass } from "@/lib/models";

export default function ClaimsDirectoryPage() {
  return (
    <Suspense fallback={<section className="app-view active" />}>
      <ClaimsDirectory />
    </Suspense>
  );
}

function ClaimsDirectory() {
  const claims = useCollection("claims");
  const params = useSearchParams();
  const router = useRouter();
  const toast = useToast();

  const [status, setStatus] = useState("All");
  const [triage, setTriage] = useState("All");
  const [openId, setOpenId] = useState(params.get("claim"));

  const rows = useMemo(
    () => claims.filter((c) =>
      (status === "All" || c.status === status) &&
      (triage === "All" || c.triage === triage)),
    [claims, status, triage],
  );

  const active = claims.find((c) => c.id === openId) || null;

  function setClaimStatus(claim, next) {
    update("claims", claim.id, { status: next });
    toast("Claim Updated", `${claim.id} moved to ${next}.`, "success");
  }

  const columns = [
    { key: "id", label: "Claim ID", render: (c) => <strong>{c.id}</strong> },
    { key: "plate", label: "Plate", render: (c) => <code>{c.plate}</code> },
    { key: "owner", label: "Claimant" },
    { key: "date", label: "Loss Date" },
    { key: "cost", label: "Estimate", align: "right", render: (c) => money(c.cost) },
    {
      key: "fraudScore", label: "Fraud Index", align: "right",
      render: (c) => <span className={`fraud-pill ${fraudClass(c.fraudScore)}`}>{c.fraudScore}%</span>,
    },
    {
      key: "triage", label: "Triage",
      render: (c) => <span className={`status-badge ${c.triage.toLowerCase()}`}>{c.triage} Path</span>,
    },
    {
      key: "status", label: "Status",
      render: (c) => <span className={`status-badge ${statusClass(c.status)}`}>{c.status}</span>,
    },
  ];

  return (
    <section className="app-view active">
      <ViewHeader title="Master Claims Directory"
                  subtitle={`${claims.length} notice of loss files across every branch`}>
        <button className="btn btn-primary" onClick={() => router.push("/portal/create-claim")}>
          Register Claim
        </button>
      </ViewHeader>

      <div className="dashboard-card">
        <DataTable
          columns={columns}
          rows={rows}
          exportName="EIMS_Claims"
          filterPlaceholder="Search plate, claimant, claim id..."
          onRowClick={(c) => setOpenId(c.id)}
          empty="No claims match these filters."
          toolbar={
            <>
              <select className="form-control data-table-filter" value={status}
                      onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status">
                <option>All</option>
                {CLAIM_STATUS.map((s) => <option key={s}>{s}</option>)}
              </select>
              <select className="form-control data-table-filter" value={triage}
                      onChange={(e) => setTriage(e.target.value)} aria-label="Filter by triage">
                <option>All</option>
                {TRIAGE.map((t) => <option key={t}>{t}</option>)}
              </select>
            </>
          }
        />
      </div>

      <Modal open={!!active} title={active ? `${active.id} — ${active.plate}` : ""}
             onClose={() => setOpenId(null)} wide
             footer={active && (
               <>
                 <button className="btn btn-secondary" onClick={() => setOpenId(null)}>Close</button>
                 {active.status !== "Approved" && active.status !== "Disbursed" && (
                   <button className="btn btn-primary" onClick={() => setClaimStatus(active, "Approved")}>
                     Approve Claim
                   </button>
                 )}
                 {active.status === "Approved" && (
                   <button className="btn btn-primary"
                           onClick={() => router.push(`/portal/mpesa-gateway?claim=${active.id}`)}>
                     Settle Claim
                   </button>
                 )}
               </>
             )}>
        {active && <ClaimDetail claim={active} onStatus={setClaimStatus} />}
      </Modal>
    </section>
  );
}

function ClaimDetail({ claim, onStatus }) {
  const facts = [
    ["Claimant", claim.owner],
    ["Mobile", claim.phone],
    ["Loss date", claim.date],
    ["Damage estimate", money(claim.cost)],
    ["County", claim.county],
    ["Nearest police", claim.police],
    ["Towing", claim.tow],
    ["Scene annotations", `${claim.annotations ?? 0} marked`],
    ["GPS", claim.coords ? claim.coords.join(", ") : "not captured"],
  ];

  return (
    <div className="claim-detail">
      <div className="claim-detail-head">
        <span className={`fraud-pill ${fraudClass(claim.fraudScore)}`}>Fraud index {claim.fraudScore}%</span>
        <span className={`status-badge ${claim.triage.toLowerCase()}`}>{claim.triage} Path</span>
        <span className={`status-badge ${statusClass(claim.status)}`}>{claim.status}</span>
      </div>

      <dl className="fact-list">
        {facts.map(([k, v]) => (
          <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>

      {!!claim.flags?.length && (
        <div className="flag-list">
          <h4>Desk flags</h4>
          <ul>{claim.flags.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      )}

      <div className="claim-detail-actions">
        <label htmlFor="claim-status">Move to status</label>
        <select id="claim-status" className="form-control" value={claim.status}
                onChange={(e) => onStatus(claim, e.target.value)}>
          {CLAIM_STATUS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
    </div>
  );
}
