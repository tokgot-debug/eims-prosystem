import path from "node:path";

const here = path.dirname(new URL(import.meta.url).pathname.slice(1));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Root is the repo, not frontend/, so seed.js at the top level resolves.
  // Both the app (at runtime) and seed-firestore.mjs read that one file.
  turbopack: {
    root: path.resolve(here, ".."),
  },
  // The dev indicator sits bottom-left, right on top of the sidebar user card.
  devIndicators: false,
};

export default nextConfig;
