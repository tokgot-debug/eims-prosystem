"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { readSession } from "@/lib/session";

// Client-side gate: the session lives in sessionStorage, so there is nothing a
// server component could check. See the ponytail note in lib/session.js.
export default function PortalLayout({ children }) {
  const router = useRouter();
  const [session, setSession] = useState(undefined);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const s = readSession();
    if (!s) router.replace("/login");
    else setSession(s);
  }, [router]);

  if (!session) return <div className="portal-booting" aria-busy="true" />;

  return (
    <div id="app-layout">
      <Sidebar session={session} mobileOpen={mobileOpen} onNavigate={() => setMobileOpen(false)} />
      {mobileOpen && <div className="nav-scrim" onClick={() => setMobileOpen(false)} aria-hidden="true" />}
      <main className="app-container">
        <Header onMenu={() => setMobileOpen((o) => !o)} />
        <div className="app-view-container">{children}</div>
      </main>
    </div>
  );
}
