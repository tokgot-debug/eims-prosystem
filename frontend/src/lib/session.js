"use client";
// ponytail: demo session in sessionStorage, client-side only. Swap readSession
// for a real Firebase Auth listener (and gate /portal in proxy.js with a cookie)
// once staff accounts exist -- until then there is nothing to verify server-side.
import { useEffect, useState } from "react";

const KEY = "eims-session";

export function readSession() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(sessionStorage.getItem(KEY)) || null;
  } catch {
    return null;
  }
}

export function signIn({ email, password, role }) {
  if (!email.includes("@") || password.length < 4) {
    throw new Error("Enter a valid work email and a password of at least 4 characters.");
  }
  const session = { email, role, name: nameFromEmail(email) };
  sessionStorage.setItem(KEY, JSON.stringify(session));
  return session;
}

export function signOut() {
  sessionStorage.removeItem(KEY);
}

export function nameFromEmail(email) {
  return (
    email
      .split("@")[0]
      .split(/[._-]+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ") || "EIMS User"
  );
}

export function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// null while unknown (first client render), then the session or false.
export function useSession() {
  const [session, setSession] = useState(undefined);
  useEffect(() => setSession(readSession()), []);
  return session;
}
