import { notFound } from "next/navigation";
import { ALL_VIEWS } from "@/lib/nav";

// Server component so the static export can prerender one page per view.
// Every view still living in the legacy build lands here; replacing one means
// adding src/app/portal/<slug>/page.js, which wins over this dynamic segment.
export function generateStaticParams() {
  return ALL_VIEWS.map((v) => ({ slug: v.slug }));
}

export const dynamicParams = false;

export default async function PendingView({ params }) {
  const { slug } = await params;
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
          <strong>{view.label}</strong> currently runs in the legacy build, which stays
          available at <a href="/legacy/">/legacy/</a> while the port lands module by module.
        </p>
        <code>src/app/portal/{slug}/page.js</code>
      </div>
    </section>
  );
}
