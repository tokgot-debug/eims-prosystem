import path from "node:path";

const here = path.dirname(new URL(import.meta.url).pathname.slice(1));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Firebase Hosting serves static files, so the app is exported rather than
  // run on a server. Every route is prerendered to real HTML at build time.
  output: "export",
  // No Next image optimiser in a static export; the images are already sized.
  images: { unoptimized: true },
  // Emit /portal/dashboard/index.html, which Firebase serves at /portal/dashboard
  // with or without the trailing slash.
  trailingSlash: true,

  // Root is the repo, not frontend/, so seed.js at the top level resolves.
  // Both the app (at runtime) and seed-firestore.mjs read that one file.
  turbopack: {
    root: path.resolve(here, ".."),
  },
  // The dev indicator sits bottom-left, right on top of the sidebar user card.
  devIndicators: false,
};

export default nextConfig;
