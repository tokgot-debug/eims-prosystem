// Assembles what Firebase Hosting serves, into deploy/.
//
//   deploy/          the Next export -- landing, login, portal
//   deploy/legacy/   the legacy static build, still the only home of the 21
//                    views not yet ported
//
// Both are plain static files, so Hosting needs no rewrites beyond a 404.
// Run: npm run build:deploy
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname.slice(1)), "..");
const OUT = path.join(root, "deploy");
const NEXT_OUT = path.join(root, "frontend", "out");
const LEGACY = path.join(root, "public");

if (!fs.existsSync(NEXT_OUT)) {
  console.error("frontend/out is missing -- run `npm --prefix frontend run build` first");
  process.exit(1);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(NEXT_OUT, OUT, { recursive: true });
fs.cpSync(LEGACY, path.join(OUT, "legacy"), { recursive: true });

// The legacy build registers a service worker at the origin root and precaches
// absolute paths. Under /legacy/ those paths belong to the Next app, so the
// worker would cache the wrong files and serve them everywhere. Its assets are
// all relative, so dropping the registration is enough.
const legacyIndex = path.join(OUT, "legacy", "index.html");
let html = fs.readFileSync(legacyIndex, "utf8");
const before = html.length;
html = html.replace(
  /<script>\s*if \('serviceWorker' in navigator\)[\s\S]*?<\/script>/,
  "<!-- service worker disabled: this build is served under /legacy/ -->",
);
if (html.length === before) console.warn("  ! service worker registration not found in legacy index.html");
fs.writeFileSync(legacyIndex, html);
fs.rmSync(path.join(OUT, "legacy", "sw.js"), { force: true });

// Next 16's static export writes segment-prefetch payloads into nested
// directories (login/__next.login/__PAGE__.txt) but the router requests them
// dot-joined (login/__next.login.__PAGE__.txt). A dev server resolves that
// internally; a plain static host 404s every prefetch. Write a flat copy at
// the name the router actually asks for.
function flattenPrefetchPayloads(dir) {
  let made = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("__next.")) {
      for (const file of fs.readdirSync(full, { recursive: true, withFileTypes: true })) {
        if (!file.isFile()) continue;
        const rel = path.relative(dir, path.join(file.parentPath ?? file.path, file.name));
        fs.copyFileSync(path.join(dir, rel), path.join(dir, rel.split(path.sep).join(".")));
        made++;
      }
    } else {
      made += flattenPrefetchPayloads(full);
    }
  }
  return made;
}

const flattened = flattenPrefetchPayloads(OUT);
console.log(`flattened ${flattened} segment-prefetch payloads for static hosting`);

const count = (dir) =>
  fs.readdirSync(dir, { recursive: true, withFileTypes: true }).filter((d) => d.isFile()).length;

console.log(`deploy/         ${count(OUT)} files total`);
console.log(`deploy/legacy/  ${count(path.join(OUT, "legacy"))} files (service worker stripped)`);
console.log(`\nroot  -> Next app (landing, login, portal)`);
console.log(`/legacy/ -> legacy build, all 24 views`);
