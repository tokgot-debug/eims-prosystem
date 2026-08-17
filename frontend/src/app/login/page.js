"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "@/lib/session";

const ROLES = [
  "Claims Administrator",
  "Underwriting Officer",
  "Finance & Settlements",
  "Branch Manager",
];

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    try {
      signIn({
        email: form.get("email").trim(),
        password: form.get("password"),
        role: form.get("role"),
      });
      setBusy(true);
      router.push("/portal/dashboard");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={onSubmit} noValidate>
        <Image src="/amaco_logo.png" alt="AMACO Insurance" width={96} height={46} className="login-logo" priority />
        <h2>Staff Portal Sign In</h2>
        <p className="login-sub">AMACO EIMS ProSystem &bull; authorized personnel only</p>

        <label htmlFor="email">Work Email</label>
        <input id="email" name="email" type="email" autoComplete="username"
               placeholder="agent.davis@amaco.co.ke" required />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password"
               placeholder="********" required />

        <label htmlFor="role">Role</label>
        <select id="role" name="role" defaultValue={ROLES[0]}>
          {ROLES.map((r) => <option key={r}>{r}</option>)}
        </select>

        {error && <div className="login-error" role="alert">{error}</div>}

        <button type="submit" className="btn-glow-primary login-submit" disabled={busy}>
          {busy ? "Signing in..." : "Sign In to Dashboard"}
        </button>
        <Link href="/" className="login-cancel">Back to site</Link>
        <p className="login-demo">Demo build: any valid email + 4&plus; character password.</p>
      </form>
    </div>
  );
}
