// Shared perf probe used by both check-render.js suites.
//
// Measures style recalculations while the page just sits there being scrolled.
// An idle page should recalculate style ~never. Before the 2026-08-17 fix the
// landing page did it on EVERY frame (358 recalcs / 0.34s in 2.5s) because a
// box-shadow animation and blurred layers could not be composited -- that was
// the "horrible lag". Guarding the recalc count stops it coming back.
module.exports = async function probeIdleCost(page, seconds = 2.5) {
  const cdp = await page.target().createCDPSession();
  await cdp.send("Performance.enable");
  const read = async () =>
    Object.fromEntries((await cdp.send("Performance.getMetrics")).metrics.map((m) => [m.name, m.value]));

  const before = await read();
  const frames = await page.evaluate((ms) => new Promise((resolve) => {
    const box = document.getElementById("public-shell")
      || document.querySelector(".app-view-container")
      || document.scrollingElement;
    const times = [];
    let last = performance.now();
    const t0 = last;
    let dir = 1;
    (function tick(now) {
      times.push(now - last);
      last = now;
      box.scrollTop += 22 * dir;
      if (box.scrollTop + box.clientHeight >= box.scrollHeight - 2) dir = -1;
      if (box.scrollTop <= 0) dir = 1;
      if (now - t0 < ms) requestAnimationFrame(tick);
      else resolve({ count: times.length, worst: Math.max(...times) });
    })(last);
  }), seconds * 1000);

  const after = await read();
  const d = (k) => (after[k] - before[k]) || 0;
  return {
    frames: frames.count,
    worstFrameMs: +frames.worst.toFixed(1),
    styleRecalcs: d("RecalcStyleCount"),
    styleSeconds: +d("RecalcStyleDuration").toFixed(3),
    layouts: d("LayoutCount"),
    taskSeconds: +d("TaskDuration").toFixed(3),
  };
};
