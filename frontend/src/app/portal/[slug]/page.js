"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import { ALL_VIEWS } from "@/lib/nav";

// Every view that still lives in the legacy SPA. Replacing one means adding
// src/app/portal/<slug>/page.js -- the static segment wins over this route.
export default function PendingView({ params }) {
  const { slug } = use(params);
  const view = ALL_VIEWS.find((v) => v.slug === slug);
  if (!view) notFound();

  return (
    <section className="app-view active">
      <div className="view-title-block">
        <div>
          <h1>{view.label}</h1>
          <p>This module is still being ported from the legacy portal.</p>
        </div>
      </div>
      <div className="dashboard-card pending-view">
        <h2>Not yet migrated</h2>
        <p>
          <strong>{view.label}</strong> currently runs in the legacy build. It keeps working
          there while the Next.js port lands module by module.
        </p>
        <code>src/app/portal/{slug}/page.js</code>
      </div>
    </section>
  );
}
