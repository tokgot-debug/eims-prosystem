"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Icon from "@/components/Icon";
import { NAV, groupForSlug } from "@/lib/nav";
import { initials, signOut } from "@/lib/session";

export default function Sidebar({ session, mobileOpen, onNavigate }) {
  const pathname = usePathname();
  const router = useRouter();
  const active = pathname.split("/")[2] || "dashboard";
  // Single-open accordion, same rule the legacy sidebar enforced.
  const [open, setOpen] = useState(() => groupForSlug(active) || "core");
  const [collapsed, setCollapsed] = useState(false);

  function onSignOut() {
    signOut();
    router.push("/");
  }

  return (
    <aside
      className={`app-sidebar${collapsed ? " collapsed" : ""}${mobileOpen ? " mobile-open" : ""}`}
      id="main-sidebar"
    >
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <Image src="/amaco_logo.png" alt="AMACO Insurance" width={74} height={36} priority />
          <div className="sidebar-title">
            <h2>AMACO Insurance</h2>
            <p>EIMS ProSystem</p>
          </div>
        </div>
        <button
          className="sidebar-collapse-btn"
          onClick={() => setCollapsed((c) => !c)}
          title="Collapse / Expand Menu"
          aria-expanded={!collapsed}
        >
          <Icon name="chevron" size={18} />
        </button>
      </div>

      <nav className="sidebar-menu">
        {NAV.map((group) => {
          const isOpen = open === group.id;
          return (
            <div
              key={group.id}
              className={`accordion-group${isOpen ? " open" : ""}${
                groupForSlug(active) === group.id ? " active-group" : ""
              }`}
            >
              <button
                className="accordion-header"
                onClick={() => setOpen(isOpen ? null : group.id)}
                aria-expanded={isOpen}
              >
                <div className="accordion-header-left">
                  <span className="accordion-icon"><Icon name={group.icon} size={16} /></span>
                  <span>{group.label}</span>
                </div>
                <span className="accordion-chevron" aria-hidden="true" />
              </button>
              <div className="accordion-content">
                {group.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/portal/${item.slug}`}
                    className={`accordion-item${active === item.slug ? " active" : ""}`}
                    onClick={onNavigate}
                  >
                    <Icon name={item.icon} size={16} />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="user-avatar" id="user-initials">{initials(session.name)}</div>
          <div className="user-info">
            <h4 id="user-name">{session.name}</h4>
            <p id="user-role">{session.role}</p>
          </div>
          <button className="sidebar-signout" onClick={onSignOut} title="Sign out of the staff portal">
            <Icon name="logout" size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
