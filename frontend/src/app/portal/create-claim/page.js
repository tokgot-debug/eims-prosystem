"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ViewHeader from "@/components/ui/ViewHeader";
import { useToast } from "@/components/ui/Toast";
import { REFERENCE, insert, nextId, useCollection } from "@/lib/db";
import { fraudClass, money, triageFor } from "@/lib/models";

const STEPS = ["Vehicle & Policy", "Incident Details", "Scene Media", "Triage & Submit"];

const BLANK = {
  plate: "", owner: "", phone: "", date: new Date().toISOString().slice(0, 10),
  cost: "", county: "", description: "", annotations: 0, lat: "", lng: "",
};

export default function CreateClaimPage() {
  const router = useRouter();
  const toast = useToast();
  const claims = useCollection("claims");
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(BLANK);
  const [lookup, setLookup] = useState(null);
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Mirrors functions/rules.js scoreFraud so the desk sees the same number the
  // server will compute. The server's value is authoritative.
  const preview = previewScore(form, claims);

  function verifyPlate() {
    const plate = form.plate.trim().toUpperCase();
    const hit = REFERENCE.ntsaRegistry[plate];
    setLookup(hit ? { plate, ...hit } : { plate, notFound: true });
    if (hit) {
      setForm((f) => ({ ...f, owner: f.owner || hit.owner }));
      toast("NTSA Match", `${plate} verified: ${hit.make} (${hit.year}).`, "success");
    } else {
      toast("No NTSA Record", `${plate} is not in the national registry.`, "warning");
    }
  }

  function validateStep(index) {
    const e = {};
    if (index === 0) {
      if (!/^K[A-Z]{2} ?\d{3}[A-Z]$/i.test(form.plate.trim())) e.plate = "Use a Kenyan plate, e.g. KDG 123A";
      if (!form.owner.trim()) e.owner = "Claimant name is required";
      if (!/^\+?[\d ]{9,}$/.test(form.phone.trim())) e.phone = "A reachable mobile number is required";
    }
    if (index === 1) {
      if (!form.date) e.date = "Loss date is required";
      if (new Date(form.date) > new Date()) e.date = "Loss date cannot be in the future";
      if (!(Number(form.cost) > 0)) e.cost = "Damage estimate must be greater than zero";
      if (!form.county.trim()) e.county = "County is required for dispatch";
    }
    setErrors(e);
    return !Object.keys(e).length;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function submit() {
    if (!validateStep(0) || !validateStep(1)) {
      setStep(0);
      return;
    }
    const resource = REFERENCE.countyResources.find((r) => r.county.includes(form.county)) || {};
    const claim = {
      id: nextId("claims", "CLM-2026-"),
      plate: form.plate.trim().toUpperCase(),
      owner: form.owner.trim(),
      phone: form.phone.trim(),
      date: form.date,
      cost: Number(form.cost),
      fraudScore: preview.score,
      triage: preview.triage,
      status: "Pending",
      coords: form.lat && form.lng ? [Number(form.lat), Number(form.lng)] : (resource.coords || null),
      county: form.county.trim(),
      police: resource.police || "Nearest station to be assigned",
      tow: resource.tow || "Towing to be assigned",
      annotations: Number(form.annotations) || 0,
      flags: preview.reasons.length > 2 ? ["auto-flagged at intake"] : [],
    };

    try {
      insert("claims", claim);
      toast("Claim Registered", `${claim.id} filed on the ${claim.triage} path.`, "success");
      router.push(`/portal/claims-directory?claim=${claim.id}`);
    } catch (err) {
      toast("Could not register", err.message, "danger");
    }
  }

  return (
    <section className="app-view active">
      <ViewHeader title="Register Claim (FNOL)"
                  subtitle="First notice of loss intake with NTSA verification and automatic triage" />

      <ol className="fnol-stepper">
        {STEPS.map((label, i) => (
          <li key={label} className={i === step ? "active" : i < step ? "done" : ""}>
            <span className="fnol-step-num">{i + 1}</span>
            {label}
          </li>
        ))}
      </ol>

      <div className="dashboard-card fnol-card">
        {step === 0 && (
          <div className="form-grid">
            <Field label="Vehicle Registration" error={errors.plate}>
              <div className="input-with-btn">
                <input className="form-control" value={form.plate} onChange={set("plate")}
                       placeholder="KDG 123A" />
                <button type="button" className="btn btn-secondary" onClick={verifyPlate}>
                  Verify NTSA
                </button>
              </div>
            </Field>
            <Field label="Claimant Name" error={errors.owner}>
              <input className="form-control" value={form.owner} onChange={set("owner")} />
            </Field>
            <Field label="Mobile Number" error={errors.phone}>
              <input className="form-control" value={form.phone} onChange={set("phone")}
                     placeholder="+254 712 345678" />
            </Field>
            {lookup && (
              <div className="ntsa-result">
                {lookup.notFound ? (
                  <p className="form-error">No NTSA record for {lookup.plate}.</p>
                ) : (
                  <>
                    <h4>NTSA registry match</h4>
                    <p>{lookup.make} &bull; {lookup.year} &bull; chassis {lookup.chassis}</p>
                    <p>Registered owner: {lookup.owner} &bull; policy {lookup.policy}</p>
                    <p>Valuation {money(lookup.valuation)}</p>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {step === 1 && (
          <div className="form-grid">
            <Field label="Loss Date" error={errors.date}>
              <input type="date" className="form-control" value={form.date} onChange={set("date")}
                     max={new Date().toISOString().slice(0, 10)} />
            </Field>
            <Field label="Damage Estimate (KSh)" error={errors.cost}>
              <input type="number" min="0" className="form-control" value={form.cost} onChange={set("cost")} />
            </Field>
            <Field label="County" error={errors.county}>
              <input className="form-control" value={form.county} onChange={set("county")}
                     list="county-list" placeholder="Nairobi County" />
              <datalist id="county-list">
                {REFERENCE.countyResources.map((r) => <option key={r.county} value={r.county} />)}
              </datalist>
            </Field>
            <Field label="Incident Description">
              <textarea className="form-control" rows={3} value={form.description} onChange={set("description")} />
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="form-grid">
            <Field label="Damage Annotations Marked">
              <input type="number" min="0" className="form-control" value={form.annotations}
                     onChange={set("annotations")} />
            </Field>
            <Field label="EXIF Latitude">
              <input className="form-control" value={form.lat} onChange={set("lat")} placeholder="-1.286389" />
            </Field>
            <Field label="EXIF Longitude">
              <input className="form-control" value={form.lng} onChange={set("lng")} placeholder="36.817223" />
            </Field>
            <p className="form-hint">
              Scene media with GPS lowers the fraud index. Claims with no location and no
              annotations are scored 30 points higher at intake.
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="triage-preview">
            <div className="triage-preview-score">
              <span className={`fraud-pill ${fraudClass(preview.score)}`}>{preview.score}%</span>
              <strong className={`status-badge ${preview.triage.toLowerCase()}`}>{preview.triage} Path</strong>
            </div>
            <h4>Why this score</h4>
            <ul className="reason-list">
              {preview.reasons.length
                ? preview.reasons.map((r) => <li key={r}>{r}</li>)
                : <li>No risk indicators found on this notice of loss.</li>}
            </ul>
            <p className="form-hint">
              The server re-scores every claim on write; this preview shows the same rules.
            </p>
          </div>
        )}

        <div className="fnol-actions">
          <button className="btn btn-secondary" disabled={!step}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}>
            Back
          </button>
          {step < STEPS.length - 1 ? (
            <button className="btn btn-primary" onClick={next}>Continue</button>
          ) : (
            <button className="btn btn-primary" onClick={submit}>Submit Notice of Loss</button>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="form-field">
      <label>{label}</label>
      {children}
      {error && <span className="form-error">{error}</span>}
    </div>
  );
}

/** Same indicators as functions/rules.js scoreFraud, for an at-desk preview. */
function previewScore(form, history) {
  const reasons = [];
  let score = 5;
  if (!form.lat || !form.lng) { score += 20; reasons.push("no EXIF/GPS location on the incident media"); }
  if (!Number(form.annotations)) { score += 10; reasons.push("no damage annotations captured at the scene"); }

  const priors = history.filter((c) => c.plate === form.plate.trim().toUpperCase()).length;
  if (priors >= 3) { score += 30; reasons.push(`${priors} prior claims on this plate`); }
  else if (priors) { score += 10 * priors; reasons.push(`${priors} prior claim(s) on this plate`); }

  const days = form.date ? Math.floor((Date.now() - new Date(form.date).getTime()) / 86_400_000) : 0;
  if (days > 30) { score += 15; reasons.push(`reported ${days} days after the loss date`); }
  if (Number(form.cost) > 1_000_000) { score += 15; reasons.push("damage estimate above the KSh 1M review threshold"); }

  score = Math.max(0, Math.min(100, score));
  return { score, triage: triageFor(score), reasons };
}
