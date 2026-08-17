// Renders the Next app in headless Edge and asserts what a user actually sees.
// A build that compiles proves nothing about layout, so this drives the real
// routes and screenshots every one. Run: node check-render.js (needs npm run dev)
const fs = require("fs");
const puppeteer = require("puppeteer-core");
const probeIdleCost = require("../tools/perf-probe");

const BASE = process.env.EIMS_URL || "http://localhost:3000";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const OUT = "screenshots";
const CREDS = { email: "agent.davis@amaco.co.ke", password: "demo1234" };

const fail = [];
const need = (cond, msg) => { if (!cond) fail.push(msg); };

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: "shell",
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("response", (r) => r.status() >= 400 && errors.push(`HTTP ${r.status()} ${r.url()}`));

  const shot = (n) => page.screenshot({ path: `${OUT}/${n}.png` });
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const box = (sel) => page.$eval(sel, (el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return { x: r.x, y: r.y, w: r.width, h: r.height, display: s.display,
             bg: s.backgroundColor, visible: r.width > 0 && r.height > 0 };
  }).catch(() => null);
  const overflows = () => page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1);

  // --- Landing --------------------------------------------------------------
  await page.goto(`${BASE}/`, { waitUntil: "networkidle2" });
  await shot("1-landing");
  need((await box("#public-shell"))?.visible, "landing page does not render");
  need(!(await box("#app-layout")), "portal chrome is present on the public site");
  // Stylesheet actually applied, not just linked.
  need((await box(".landing-top-bar"))?.bg !== "rgba(0, 0, 0, 0)",
    "landing top bar has no background -> globals.css did not apply");
  const cards = await page.$$eval(".cyber-card", (e) => e.length);
  need(cards === 8, `expected 8 capability cards, found ${cards}`);
  const links = await page.$$eval("#public-shell a", (a) => a.map((x) => x.getAttribute("href")));
  // trailingSlash:true renders /login/ in the export and /login in dev.
  need(links.every((h) => h.replace(/\/$/, "") === "/login"),
    `public site links outside /login: ${links.join(", ")}`);
  need(!(await overflows()), "landing page scrolls horizontally");

  // --- Portal is gated ------------------------------------------------------
  await page.goto(`${BASE}/portal/dashboard`, { waitUntil: "networkidle2" });
  await wait(600);
  // trailingSlash:true means the export lands on /login/ and dev on /login.
  need(/\/login\/?$/.test(page.url()),
    `direct /portal access was not redirected (landed on ${page.url()})`);

  // --- Login ----------------------------------------------------------------
  await shot("2-login");
  const card = await box(".login-card");
  need(card && card.w > 280 && card.w <= 460, `login card is ${Math.round(card?.w)}px wide`);
  need(card && card.y >= 0 && card.h < 900, "login card does not fit the viewport");
  const email = await box("#email");
  const pw = await box("#password");
  need(pw && email && pw.y > email.y + 20, "login fields are not stacked -> form CSS missing");

  await page.type("#email", "nope");
  await page.type("#password", "1");
  await page.click(".login-submit");
  await wait(300);
  need(await page.$(".login-error"), "invalid credentials produced no error message");
  need(page.url().includes("/login"), "invalid credentials navigated away from /login");

  await page.$eval("#email", (el) => (el.value = ""));
  await page.type("#email", CREDS.email);
  await page.$eval("#password", (el) => (el.value = ""));
  await page.type("#password", CREDS.password);
  await page.click(".login-submit");
  await page.waitForFunction(() => location.pathname.startsWith("/portal"), { timeout: 8000 });
  await wait(900);

  // --- Dashboard ------------------------------------------------------------
  await shot("3-dashboard");
  need((await box("#app-layout"))?.visible, "portal shell did not render after sign in");
  need(await page.$eval("#user-name", (el) => el.textContent === "Agent Davis"),
    "signed-in identity missing from the sidebar");
  const stats = await page.$$eval(".stat-card .stat-number", (e) => e.map((x) => x.textContent));
  need(stats.length === 4 && stats.every((s) => s.trim()), `stat cards are empty: ${stats}`);
  need((await box(".velocity-chart svg"))?.h > 100, "velocity chart did not render");
  need((await box(".triage-donut"))?.visible, "triage donut did not render");
  const rows = await page.$$eval(".claims-table tbody tr", (e) => e.length);
  need(rows === 3, `expected 3 recent claims rows, found ${rows}`);
  need(!(await overflows()), "dashboard scrolls horizontally");

  // --- Navigation -----------------------------------------------------------
  // Claims lives in a collapsed accordion group; expand it the way a user does.
  await page.$$eval(".accordion-header", (hs) =>
    hs.find((h) => h.textContent.includes("Claims & Recovery")).click());
  await wait(400);
  need((await page.$eval('a[href^="/portal/claims-directory"]',
    (el) => el.getBoundingClientRect().height)) > 0,
    "expanding an accordion group did not reveal its items");
  await page.$eval('a[href^="/portal/claims-directory"]', (el) => el.click());
  // Wait on the actual condition, not a guessed duration -- a deployed host is
  // far slower than localhost and a fixed sleep fails there for no real reason.
  await page.waitForFunction(
    () => location.pathname.startsWith("/portal/claims-directory"), { timeout: 15000 },
  ).catch(() => {});
  await wait(400);
  await shot("4-nav-claims");
  need(page.url().includes("/portal/claims-directory"),
    `sidebar navigation did not route (still on ${page.url()})`);
  need(await page.$eval('a[href^="/portal/claims-directory"]',
    (el) => el.classList.contains("active")), "active nav item is not highlighted");

  // --- Sign out -------------------------------------------------------------
  await page.click(".sidebar-signout");
  await page.waitForFunction(() => location.pathname === "/", { timeout: 8000 });
  await wait(400);
  await shot("5-signed-out");
  need(!(await box("#app-layout")), "portal chrome survived sign out");
  await page.goto(`${BASE}/portal/dashboard`, { waitUntil: "networkidle2" });
  await wait(600);
  need(/\/login\/?$/.test(page.url()), `portal reachable after sign out (landed on ${page.url()})`);

  // --- Mobile ---------------------------------------------------------------
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle2" });
  await shot("6-landing-mobile");
  need(!(await overflows()), "landing page scrolls horizontally on mobile");
  await page.goto(`${BASE}/login`, { waitUntil: "networkidle2" });
  await shot("7-login-mobile");
  const m = await box(".login-card");
  need(m && m.x >= 0 && m.x + m.w <= 390, "login card overflows the mobile viewport");

  // --- Idle rendering cost --------------------------------------------------
  // An idle page should recalculate style ~never. See perf-probe.js.
  for (const route of ["/", "/portal/dashboard"]) {
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle2" });
    await wait(900);
    const perf = await probeIdleCost(page);
    console.log(`  ${route} idle: ${perf.styleRecalcs} recalcs, ${perf.styleSeconds}s style, ` +
      `${perf.layouts} layouts, ${perf.taskSeconds}s cpu / ${perf.frames} frames`);
    need(perf.styleRecalcs < 30,
      `${route} recalculates style ${perf.styleRecalcs} times while idle -> a non-composited property is animating`);
    need(perf.styleSeconds < 0.05, `${route}: ${perf.styleSeconds}s of idle style recalculation`);
    need(perf.layouts < 30, `${route}: ${perf.layouts} layouts while idle`);
  }

  need(errors.length === 0, `console/network errors: ${[...new Set(errors)].slice(0, 4).join(" | ")}`);
  await browser.close();

  if (fail.length) {
    console.error(`FAIL (${fail.length}):\n  ` + fail.join("\n  "));
    process.exit(1);
  }
  console.log(`ok: Next portal renders and gates correctly (screenshots in frontend/${OUT}/)`);
})();
