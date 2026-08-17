// Guards the mobile-layout bugs that broke the demo. Run: node check-ui.js
// Each check names a defect that actually shipped, so a regression is obvious.
const fs = require("fs");

const css = fs.readFileSync("public/index.css", "utf8");
const html = fs.readFileSync("public/index.html", "utf8");
const js = fs.readFileSync("public/app.js", "utf8");

// Comments deliberately quote the broken selectors, so strip them first.
const strip = css.replace(/\/\*[\s\S]*?\*\//g, "");
const mobile = (strip.match(/@media[^{]*max-width:\s*768px[^{]*\{[\s\S]*?\n\}/g) || []).join("\n");

const fail = [];
const need = (cond, msg) => { if (!cond) fail.push(msg); };

// --- Sidebar ---------------------------------------------------------------

// An ID selector outranks .app-sidebar.collapsed (0,2,0) and kills the toggle.
for (const rule of strip.split("}")) {
  if (/#main-sidebar/.test(rule) && /(^|[^-])(width|max-width)\s*:/.test(rule)) {
    fail.push("ID selector #main-sidebar sets a width -> .collapsed can never win");
  }
}

// Flex children shrink below content height; overflow:hidden then slices labels.
const group = strip.match(/\.accordion-group\s*\{[^}]*\}/);
need(group && /flex-shrink:\s*0/.test(group[0]),
  ".accordion-group is missing flex-shrink:0 -> menu labels get clipped");

// A hard max-height capped the nav and left the rest of the screen dead black.
need(!/\.sidebar-menu\s*\{[^}]*max-height:\s*\d+px/.test(mobile),
  ".sidebar-menu has a fixed max-height again -> wasted space below the nav");

// overflow-y:auto in a flex column does nothing without min-height:0.
const menu = strip.match(/\.sidebar-menu\s*\{[^}]*\}/);
need(menu && /min-height:\s*0/.test(menu[0]),
  ".sidebar-menu is missing min-height:0 -> it overflows instead of scrolling");

// The drawer must be dismissable by tapping outside it.
need(/\.app-sidebar\.mobile-open\s*~\s*\.nav-scrim/.test(strip), "scrim CSS missing");
need(/class="nav-scrim"/.test(html), "scrim element missing from index.html");

// --- Header ----------------------------------------------------------------

// Four media queries wrap this element; a fixed height makes rows 2+ spill out
// over the page content.
const header = strip.match(/\.app-header\s*\{[^}]*\}/);
need(header && !/(^|[^-])height:\s*\d+px/.test(header[0]),
  ".app-header has a fixed height again -> wrapped rows overlap page content");

// Two duplicate mobile blocks pinned the quick-action row to one scrolling
// line clipped by max-width, so the last button was unreachable.
for (const m of mobile.matchAll(/\.header-actions\s*\{([^}]*)\}/g)) {
  need(!/flex-wrap:\s*nowrap/.test(m[1]),
    ".header-actions is nowrap again -> the last quick-action button is hidden");
  need(!/max-width:\s*calc\(100vw/.test(m[1]),
    ".header-actions has a clipping max-width again -> buttons truncate");
}

// --- Tables ----------------------------------------------------------------

// display:block on a <table> breaks the table layout algorithm, so header cells
// stop lining up with body cells.
need(!/(^|[^-])table\s*\{[^}]*display:\s*block/.test(mobile),
  "table{display:block} is back -> header and body columns stop aligning");

need(/\.claims-table\s*\{[^}]*min-width:\s*\d+px/.test(mobile),
  ".claims-table needs a mobile min-width so it scrolls instead of crushing");

// --- Buttons & spacing -----------------------------------------------------

need(/\.btn\s*\{[^}]*min-height:\s*44px/.test(mobile),
  ".btn is missing its mobile min-height:44px touch target");

need(/\.annotate-tools\s*\{[^}]*width:\s*100%/.test(mobile),
  ".annotate-tools keeps its 200px width on mobile -> buttons get crushed");

const title = strip.match(/\.view-title-block\s*\{[^}]*\}/);
need(title && /flex-wrap:\s*wrap/.test(title[0]),
  ".view-title-block must wrap, or the page title and its button crush each other");

need(/\.app-view\s*>\s*\*\s*\+\s*\*\s*\{[^}]*margin-top/.test(strip),
  "component rhythm rule missing -> stacked cards touch edge to edge");

// --- Emoji -----------------------------------------------------------------

// © is the OpenStreetMap tile attribution, a licence condition. Everything else
// was decoration and the client asked for it gone.
const EMOJI = /(?:\p{Extended_Pictographic}️?|\p{Emoji_Presentation})/gu;
for (const [name, text] of [["index.html", html], ["app.js", js]]) {
  const found = (text.match(EMOJI) || []).filter((e) => !["©", "®", "™"].includes(e[0]));
  need(found.length === 0, `${name} has ${found.length} emoji back: ${[...new Set(found)].join(" ")}`);
}

// Emoji stripping must never close the gap between two HTML attributes.
for (const [name, text] of [["index.html", html], ["app.js", js]]) {
  const damaged = (text.match(/"(?=[a-zA-Z-]+=["'])/g) || []).length;
  need(damaged === 0, `${name} has ${damaged} places where a quote abuts the next attribute`);
}

// --- Caching ---------------------------------------------------------------

// Unhashed filenames + a year-long cache pins every visitor to one build.
const fb = JSON.parse(fs.readFileSync("firebase.json", "utf8"));
const jsCss = (fb.hosting.headers || []).find((h) => /js\|css|css\|js/.test(h.source));
need(jsCss && jsCss.headers.some((h) => /no-cache|max-age=0/.test(h.value)),
  "js/css are long-cached without content hashes -> fixes will not reach viewers");

// --- Public site / login gate ----------------------------------------------

// The landing page lives outside #app-layout; the app only opens after login.
need(html.indexOf('id="public-shell"') < html.indexOf('id="app-layout"'),
  "#public-shell must precede #app-layout -> landing page is back inside the app");
need(/id="app-layout" hidden/.test(html), "#app-layout ships visible -> app leaks before login");
need(/#app-layout\[hidden\]\s*\{\s*display:\s*none/.test(strip),
  "display:flex on #app-layout beats the hidden attribute -> app shows behind the landing page");

// Feature cards and marquee are marketing copy, not navigation.
const landing = html.slice(html.indexOf('id="public-shell"'), html.indexOf('id="app-layout"'));
need(!/navigateToView|openAIAssistantModal/.test(landing),
  "landing page deep-links into the system again -> feature cards must not navigate");
need(!/cyber-card-btn/.test(landing), "landing page still renders clickable capability buttons");

// Login must reach the dashboard and sign-out must reach back.
for (const fn of ["openLogin", "closeLogin", "submitLogin", "signOut", "restoreSession"])
  need(new RegExp(`function ${fn}\\b`).test(js), `app.js is missing ${fn}()`);
need(/enterApp\(session\)/.test(js) && /navigateToView\("dashboard"\)/.test(js),
  "login no longer lands on the dashboard");
for (const id of ["login-email", "login-password", "login-role", "login-error", "user-role"])
  need(html.includes(`id="${id}"`), `index.html is missing #${id} that app.js reads`);

if (fail.length) {
  console.error(`FAIL (${fail.length}):\n  ` + fail.join("\n  "));
  process.exit(1);
}
console.log(`ok: ${26} UI invariants hold (sidebar, header, tables, buttons, spacing, emoji, caching, login gate)`);
