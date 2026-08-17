// Renders the real app in headless Edge and asserts what the user actually sees.
// check-ui.js greps source and cannot catch an unapplied stylesheet; this can.
// Run: node check-render.js   (needs the emulator: npm run dev)
const fs = require("fs");
const puppeteer = require("puppeteer-core");
const probeIdleCost = require("./perf-probe");

const URL = process.env.EIMS_URL || "http://127.0.0.1:8282/";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const OUT = "screenshots";

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

  // Service worker + PWA caches would serve a stale build to this run too.
  await page.goto(URL, { waitUntil: "networkidle2" });
  await page.evaluate(async () => {
    for (const r of await navigator.serviceWorker.getRegistrations()) await r.unregister();
    for (const k of await caches.keys()) await caches.delete(k);
  });
  await page.goto(URL, { waitUntil: "networkidle2" });
  await page.evaluate(() => sessionStorage.clear());
  await page.reload({ waitUntil: "networkidle2" });

  const shot = (name) => page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
  const box = (sel) => page.$eval(sel, (el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return { x: r.x, y: r.y, w: r.width, h: r.height, display: s.display,
             position: s.position, visible: r.width > 0 && r.height > 0 };
  }).catch(() => null);

  // --- 1. Public landing page, app hidden ---------------------------------
  await shot("1-landing");
  need((await box("#public-shell"))?.visible, "landing page does not render");
  need(!(await box("#app-layout"))?.visible, "app shell is visible before login");
  need(!(await box("#floating-ai-btn"))?.visible, "app chrome (AI Assist widget) leaks onto the public site");
  const overlay = await box("#login-overlay");
  need(overlay?.display === "none", `login overlay is not hidden at rest (display: ${overlay?.display}) -> stylesheet did not apply`);

  // --- 2. Login overlay ----------------------------------------------------
  await page.click("#public-shell .landing-top-bar button");
  await new Promise((r) => setTimeout(r, 400));
  await shot("2-login");
  const card = await box(".login-card");
  const open = await box("#login-overlay");
  need(open?.position === "fixed" && open?.display === "flex",
    `login overlay is not a fixed, centered layer (position: ${open?.position}, display: ${open?.display})`);
  need(card && card.w > 280 && card.w <= 440,
    `login card is ${Math.round(card?.w)}px wide -> it is not rendering as a card`);
  need(card && card.y > 0 && card.y + card.h <= 900 + 1,
    "login card does not fit the viewport");
  need((await box(".login-logo"))?.h < 80, "login logo is rendering at full image size");
  // Stacked labels/inputs, not an inline run-on row.
  const emailBox = await box("#login-email");
  const pwBox = await box("#login-password");
  need(pwBox && emailBox && pwBox.y > emailBox.y + 20,
    "login fields sit on one line -> form styling is not applied");

  // --- 3. Rejects bad credentials -----------------------------------------
  await page.type("#login-email", "nope");
  await page.type("#login-password", "1");
  await page.click(".login-submit");
  await new Promise((r) => setTimeout(r, 300));
  need(!(await box("#app-layout"))?.visible, "invalid credentials still opened the app");

  // --- 4. Sign in reaches the dashboard ------------------------------------
  await page.$eval("#login-email", (el) => (el.value = ""));
  await page.type("#login-email", "agent.davis@amaco.co.ke");
  await page.$eval("#login-password", (el) => (el.value = ""));
  await page.type("#login-password", "demo1234");
  await page.click(".login-submit");
  await new Promise((r) => setTimeout(r, 700));
  await shot("3-dashboard");
  need((await box("#app-layout"))?.visible, "sign in did not open the app");
  need(!(await box("#public-shell"))?.visible, "landing page still showing after sign in");
  need(await page.$eval("#view-dashboard", (el) => el.classList.contains("active")),
    "sign in did not land on the dashboard");
  need(await page.$eval("#user-name", (el) => el.textContent.trim() === "Agent Davis"),
    "signed-in identity was not applied to the sidebar");

  // --- 5. Sign out returns to the public site ------------------------------
  await page.click(".sidebar-signout");
  await new Promise((r) => setTimeout(r, 500));
  await shot("4-signed-out");
  need((await box("#public-shell"))?.visible, "sign out did not return to the landing page");
  need(!(await box("#app-layout"))?.visible, "app shell still visible after sign out");

  // --- 6. The landing page must not deep-link into the system --------------
  const links = await page.$$eval("#public-shell [onclick]", (els) =>
    els.map((e) => e.getAttribute("onclick")));
  need(links.every((l) => /openLogin|closeLogin|submitLogin/.test(l)),
    `landing page still navigates into the system: ${links.filter((l) => !/Login/.test(l)).join(", ")}`);

  // --- 7. Mobile -----------------------------------------------------------
  await page.setViewport({ width: 390, height: 844 });
  await page.click("#public-shell .landing-top-bar button");
  await new Promise((r) => setTimeout(r, 400));
  await shot("5-login-mobile");
  const mcard = await box(".login-card");
  need(mcard && mcard.x >= 0 && mcard.x + mcard.w <= 390,
    "login card overflows the mobile viewport");
  need(!(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)),
    "public site scrolls horizontally on mobile");

  // --- 8. Idle rendering cost ----------------------------------------------
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(URL, { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 800));
  const perf = await probeIdleCost(page);
  console.log(`  idle scroll: ${perf.styleRecalcs} style recalcs, ${perf.styleSeconds}s style, ` +
    `${perf.layouts} layouts, ${perf.taskSeconds}s cpu over ${perf.frames} frames`);
  need(perf.styleRecalcs < 30,
    `landing page recalculates style ${perf.styleRecalcs} times while idle -> something animates a non-composited property again`);
  need(perf.styleSeconds < 0.05, `${perf.styleSeconds}s of style recalculation while idle`);
  need(perf.layouts < 30, `${perf.layouts} layouts while idle -> an animation is moving a layout property`);

  need(errors.length === 0, `console errors: ${errors.slice(0, 3).join(" | ")}`);
  await browser.close();

  if (fail.length) {
    console.error(`FAIL (${fail.length}):\n  ` + fail.join("\n  "));
    process.exit(1);
  }
  console.log(`ok: rendered login gate holds (screenshots in ${OUT}/)`);
})();
