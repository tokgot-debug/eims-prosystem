"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";

export default function Header({ onMenu }) {
  const router = useRouter();
  const [theme, setTheme] = useState("dark");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("color-scheme", next);
    setTheme(next);
  }

  function onSearch(e) {
    e.preventDefault();
    if (query.trim().length > 2) {
      router.push(`/portal/claims-directory?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="app-header">
      <button className="mobile-nav-toggle" onClick={onMenu} aria-label="Toggle Navigation">
        <Icon name="menu" size={22} />
      </button>

      <form className="header-search" onSubmit={onSearch} role="search">
        <Icon name="search" size={16} />
        <input
          id="global-search"
          type="search"
          placeholder="Search claims, vehicle plates..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="header-actions">
        <button className="btn btn-secondary" onClick={() => router.push("/portal/mobile-app")}>
          Workshop
        </button>
        <button className="btn btn-secondary" onClick={() => router.push("/portal/qr-generator")}>
          QR Cert
        </button>
        <button className="btn btn-secondary" onClick={() => router.push("/portal/lpr-scanner")}>
          QR Engine
        </button>
        <button className="btn btn-primary" onClick={() => router.push("/portal/ai-assistant")}>
          AI Assist
        </button>
        <button className="icon-btn" title="Notifications" onClick={() => router.push("/portal/alerts-simulator")}>
          <Icon name="bell" size={18} />
        </button>
        <button className="icon-btn" id="theme-mode-btn" onClick={toggleTheme}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
        </button>
      </div>
    </header>
  );
}
