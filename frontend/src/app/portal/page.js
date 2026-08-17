"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Client redirect rather than next/navigation's redirect(): this is a static
// export, so there is no server to issue a 307.
export default function PortalIndex() {
  const router = useRouter();
  useEffect(() => router.replace("/portal/dashboard"), [router]);
  return <div className="portal-booting" aria-busy="true" />;
}
