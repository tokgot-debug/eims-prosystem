import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The repo root also has a lockfile (the legacy firebase app), so Turbopack
  // guesses the wrong workspace root without this.
  turbopack: { root: path.dirname(new URL(import.meta.url).pathname.slice(1)) },
  // The dev indicator sits bottom-left, right on top of the sidebar user card.
  devIndicators: false,
};

export default nextConfig;
