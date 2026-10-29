/* Knowledge demo walkthrough. Open article.html?id=respond-dispute&demo=1
   Narration drives everything: audio.currentTime is the clock. */
(function () {
  if (!/[?&]demo=1/.test(window.location.search)) return;
  const browser = document.querySelector(".browser");
  const viewport = document.querySelector(".browser-viewport");
  if (!browser || !viewport) return;

  document.body.classList.add("kd");
  const style = document.createElement("style");
  style.textContent = `
    .kd-open { height: 34px; padding: 0 14px; border: 0; border-radius: 999px; background: #fff; color: #020642; font: 700 12px var(--font-sans, system-ui, sans-serif); cursor: pointer; margin-left: auto; }
    .kd-controls .kd-quit { width: auto; height: 30px; padding: 0 14px; border-radius: 999px; background: rgba(255,255,255,.14); color: #fff; font: 600 12px var(--font-sans, system-ui, sans-serif); }
    .kd-layer { position: absolute; inset: 0; pointer-events: none; z-index: 50; overflow: hidden; }
    .kd-serp { position: absolute; inset: 46px 0 0 0; background: #fff; overflow: hidden; transition: opacity .45s ease; font-family: Arial, Helvetica, sans-serif; color: #202124; }
    .kd-serp.is-gone { opacity: 0; }
    .kd-serp__top { display: flex; align-items: center; gap: 28px; padding: 20px 32px 0; }
    .kd-logo { font-size: 28px; font-weight: 700; letter-spacing: -1px; }
    .kd-logo i { font-style: normal; }
    .kd-box { flex: 0 1 560px; height: 44px; border: 1px solid #dfe1e5; border-radius: 24px; display: flex; align-items: center; padding: 0 18px; font-size: 16px; box-shadow: 0 1px 6px rgba(32,33,36,.14); }
    .kd-tabs { display: flex; gap: 22px; padding: 14px 32px 0 150px; font-size: 13px; color: #5f6368; border-bottom: 1px solid #ebebeb; }
    .kd-tabs span { padding-bottom: 10px; }
    .kd-tabs .on { color: #1a73e8; border-bottom: 3px solid #1a73e8; }
    .kd-results { padding: 16px 32px 0 150px; max-width: 760px; }
    .kd-meta { font-size: 12px; color: #70757a; margin-bottom: 18px; }
    .kd-res { margin-bottom: 26px; }
    .kd-res .url { font-size: 12px; color: #202124; display: flex; align-items: center; gap: 8px; }
    .kd-res .fav { width: 22px; height: 22px; border-radius: 50%; background: #020642; color: #fff; font-size: 11px; display: grid; place-items: center; font-weight: 700; }
    .kd-res .fav.alt { background: #e8eaed; color: #5f6368; }
    .kd-res .url small { color: #5f6368; font-size: 12px; }
    .kd-res h3 { margin: 4px 0 3px; font-size: 20px; font-weight: 400; color: #1a0dab; }
    .kd-res p { margin: 0; font-size: 14px; line-height: 1.58; color: #4d5156; }
    .kd-res.is-target h3 { text-decoration: none; }
    .kd-res.is-hit h3 { text-decoration: underline; }
    .kd-cursor { position: absolute; left: 0; top: 0; width: 22px; height: 22px; z-index: 60; opacity: 0; transition: transform calc(.9s / var(--kd-rate, 1)) cubic-bezier(.45,.05,.2,1), opacity .3s; filter: drop-shadow(0 2px 3px rgba(0,0,0,.35)); }
    .kd-cursor.is-on { opacity: 1; }
    .kd-cursor.is-fast { transition-duration: calc(.5s / var(--kd-rate, 1)); }
    .kd-cursor.is-click::after { content: ""; position: absolute; left: -9px; top: -9px; width: 26px; height: 26px; border-radius: 50%; border: 2px solid rgba(80, 90, 255, .8); animation: kd-ping .5s ease-out; }
    @keyframes kd-ping { from { transform: scale(.3); opacity: 1; } to { transform: scale(1.6); opacity: 0; } }
    .kd-dock { flex: none; display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 2px 0 0; }
    .kd-caption { min-height: 52px; max-width: min(820px, 92%); display: flex; align-items: center; justify-content: center; color: #fff; font: 600 18px/1.4 var(--font-sans, "Plus Jakarta Sans", system-ui, sans-serif); text-align: center; opacity: 0; transition: opacity .25s ease; }
    .kd-caption.is-on { opacity: 1; }
    .kd-caption .w { opacity: .45; transition: opacity .12s; border-radius: 4px; padding: 0 1px; }
    .kd-caption .w.is-read { opacity: 1; }
    .kd-caption .w.is-now { opacity: 1; background: rgba(140,140,255,.45); }
    .kd-controls { width: min(560px, 92%); display: flex; align-items: center; gap: 14px; }
    .kd-controls button { flex: none; width: 36px; height: 36px; display: grid; place-items: center; border: 0; border-radius: 50%; background: #fff; color: #020642; cursor: pointer; }
    .kd-progress { flex: 1; height: 3px; border-radius: 2px; background: rgba(255,255,255,.22); overflow: hidden; }
    .kd-progress i { display: block; height: 100%; width: 0; background: #fff; }
  `;
  document.head.appendChild(style);

  const audio = new Audio("knowledge%20dub.mp3");
  audio.preload = "auto";

  const layer = document.createElement("div");
  layer.className = "kd-layer";
  layer.innerHTML = `
    <div class="kd-serp">
      <div class="kd-serp__top">
        <div class="kd-logo"><i style="color:#4285f4">G</i><i style="color:#ea4335">o</i><i style="color:#fbbc05">o</i><i style="color:#4285f4">g</i><i style="color:#34a853">l</i><i style="color:#ea4335">e</i></div>
        <div class="kd-box">bank dispute refund not received</div>
      </div>
      <div class="kd-tabs"><span class="on">All</span><span>News</span><span>Images</span><span>Videos</span><span>More</span></div>
      <div class="kd-results">
        <div class="kd-meta">About 2,410,000 results (0.38 seconds)</div>
        <div class="kd-res"><div class="url"><span class="fav alt">W</span><div>wikipedia.org<br><small>› wiki › Chargeback</small></div></div><h3>Chargeback - Wikipedia</h3><p>A chargeback is a return of money to a payer, ordered by a bank or card issuer after a customer disputes a transaction…</p></div>
        <div class="kd-res is-target" data-kd-target><div class="url"><span class="fav">N</span><div>help.northline.test<br><small>› Help › Bank disputes › After you file</small></div></div><h3>What happens after you open a bank dispute — Northline Help</h3><p>Your bank asks Northline about one charge. That review stays on that charge even if another payment for the same order is refunded.</p></div>
        <div class="kd-res"><div class="url"><span class="fav alt">C</span><div>consumerfinance.gov<br><small>› ask-cfpb › what-is-a-chargeback</small></div></div><h3>What is a chargeback? | Consumer Financial Protection Bureau</h3><p>If you dispute a charge on your credit card, the card issuer may reverse the transaction while the dispute is reviewed…</p></div>
      </div>
    </div>
    <svg class="kd-cursor" viewBox="0 0 24 24"><path d="M3 2l7 18 2.6-7.4L20 10z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
  browser.appendChild(layer);

  const dock = document.createElement("div");
  dock.className = "kd-dock";
  dock.innerHTML = `
    <div class="kd-caption" aria-live="polite"></div>
    <div class="kd-controls">
      <button type="button" data-kd-toggle aria-label="Play walkthrough"></button>
      <div class="kd-progress"><i></i></div>
      <button type="button" class="kd-quit" data-kd-speed aria-label="Playback speed">1×</button>
      <button type="button" class="kd-quit" data-kd-quit>Exit</button>
    </div>`;
  (document.querySelector(".studio") || document.body).appendChild(dock);

  const serp = layer.querySelector(".kd-serp");
  const caption = dock.querySelector(".kd-caption");
  const cursor = layer.querySelector(".kd-cursor");
  const toggleBtn = dock.querySelector("[data-kd-toggle]");
  const ICONS = {
    play: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z"/></svg>',
    pause: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',
    replay: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>'
  };
  // state: "Play walkthrough" | "Pause" | "Resume" | "Replay"
  let label = "";
  const toggle = {
    get textContent() { return label; },
    set textContent(v) {
      label = v;
      toggleBtn.innerHTML = v === "Pause" ? ICONS.pause : v === "Replay" ? ICONS.replay : ICONS.play;
      toggleBtn.setAttribute("aria-label", v);
    }
  };
  toggle.textContent = "Play walkthrough";
  const progress = dock.querySelector(".kd-progress i");
  const addressText = browser.querySelector(".browser-address span");
  const SERP_ADDRESS = "google.com/search?q=bank+dispute+refund+not+received";
  const KA_ADDRESS = addressText ? addressText.textContent : "";
  const QUESTION = "Why hasn’t my refund arrived?";

  const slot = () => document.querySelector("[data-summary-slot]");
  const askInput = () => slot()?.querySelector("[data-summary-ask] input");
  const askForm = () => slot()?.querySelector("[data-summary-ask]");
  const marks = () => [...(slot()?.querySelectorAll(".ai-card__text mark") || [])];

  /* ---- helpers ---- */
  function moveCursor(el, opts = {}) {
    if (!el) return;
    const b = browser.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const x = r.left - b.left + (opts.dx ?? r.width / 2);
    const y = r.top - b.top + (opts.dy ?? r.height / 2);
    cursor.classList.add("is-on");
    cursor.classList.toggle("is-fast", Boolean(opts.fast));
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }
  function moveCursorTo(x, y) {
    cursor.classList.add("is-on");
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }
  function click() {
    cursor.classList.remove("is-click");
    void cursor.getBoundingClientRect();
    cursor.classList.add("is-click");
  }
  let scrollRaf = 0;
  function scrollTween(to, from, ms) {
    cancelAnimationFrame(scrollRaf);
    const start = performance.now();
    const base = from ?? viewport.scrollTop;
    (function step(now) {
      const p = Math.min(1, (now - start) * audio.playbackRate / ms);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      viewport.scrollTop = base + (to - base) * eased;
      if (p < 1 && !audio.paused) scrollRaf = requestAnimationFrame(step);
    })(start);
  }
  let typeTimer = 0;
  function typeText(text, ms) {
    window.clearInterval(typeTimer);
    const input = askInput();
    if (!input) return;
    const per = ms / audio.playbackRate / text.length;
    let i = 0;
    typeTimer = window.setInterval(() => {
      i += 1;
      input.value = text.slice(0, i);
      input.dispatchEvent(new Event("input", { bubbles: true }));
      if (i >= text.length) window.clearInterval(typeTimer);
    }, per);
  }
  function hover(el) {
    if (!el) return;
    el.dispatchEvent(new PointerEvent("pointerover", { bubbles: true }));
  }
  function unhover(el) {
    if (!el) return;
    el.dispatchEvent(new PointerEvent("pointerout", { bubbles: true, relatedTarget: document.body }));
  }
  const cites = () => [...(slot()?.querySelectorAll(".cite") || [])];

  /* ---- timeline (seconds on the narration) ---- */
  const CAPTIONS = [
    [0.0, "Customers often arrive at a knowledge article that is related to their issue, but not exactly what they need."],
    [6.5, "Even when the answer exists somewhere in the article, customers may struggle to identify which information applies to their specific situation."],
    [14.7, "With AI Zone, we can turn a static knowledge article into a dynamic, personalized experience."],
    [21.1, "Here, the customer is reading about bank disputes."],
    [24.2, "Instead of reading through the entire article, they simply ask why their refund hasn’t arrived."],
    [29.5, "The AI helper understands the customer’s question and generates a focused summary using the relevant knowledge content."],
    [36.3, "Notice that we’re not just summarizing the article."],
    [39.0, "We’re highlighting the information that matters to this customer, based on their specific situation."],
    [44.7, "This helps customers understand the next step faster, without needing to search through multiple articles or contact a support agent."],
    [51.6, ""]
  ];

  const ORIG = CAPTIONS.map((c) => [c[0], c[1]]);

  // Long captions are cut in two so they never run past three lines. Parts are timed by length.
  (function splitLong() {
    const MAX = 88;
    const out = [];
    CAPTIONS.forEach(([start, text], k) => {
      const next = CAPTIONS[k + 1] ? CAPTIONS[k + 1][0] : start + 3;
      if (text.length <= MAX) { out.push([start, text]); return; }
      const mid = text.length / 2;
      let cut = -1;
      for (let p = 0; p < text.length; p += 1) {
        if (/[,;:.]/.test(text[p]) && text[p + 1] === " " && (cut < 0 || Math.abs(p - mid) < Math.abs(cut - mid))) cut = p;
      }
      if (cut < 0 || Math.abs(cut - mid) > text.length * 0.25) {
        cut = text.lastIndexOf(" ", Math.round(mid));
        cut = cut < 0 ? text.indexOf(" ", Math.round(mid)) : cut;
      } else cut += 1;
      const first = text.slice(0, cut).trim();
      const second = text.slice(cut).trim();
      const span = Math.max(0.5, next - 0.4 - start);
      out.push([start, first, true]);
      out.push([start + span * (first.length / text.length), second]);
    });
    CAPTIONS.splice(0, CAPTIONS.length, ...out);
  })();


  const maxScroll = () => Math.max(0, viewport.scrollHeight - viewport.clientHeight);
  const CUES = [
    [0.2, () => { moveCursorTo(520, 300); }],
    [1.6, () => { moveCursor(layer.querySelector("[data-kd-target] h3"), { dx: 120, dy: 12 }); }],
    [3.4, () => { click(); layer.querySelector("[data-kd-target]").classList.add("is-hit"); }],
    [3.8, () => {
      serp.classList.add("is-gone");
      if (addressText) addressText.textContent = KA_ADDRESS;
      window.__kaSummary?.reply({ parts: window.__kaParts(), ask: "follow-up", offers: [], clearOffers: true, meta: "From this article", phase: "landed" });
      moveCursorTo(900, 330);
    }],
    [6.6, () => { scrollTween(maxScroll() * 0.92, 0, 7400); moveCursorTo(1100, 360); }],
    [14.8, () => { scrollTween(0, viewport.scrollTop, 2000); }],
    [17.0, () => { const i = askInput(); if (i) moveCursor(i, { dx: 70 }); }],
    [18.0, () => { click(); askInput()?.focus(); }],
    [18.6, () => typeText(QUESTION, 5000)],
    [24.6, () => { const b = askForm()?.querySelector("button[type='submit']"); if (b) { moveCursor(b, { fast: true }); } }],
    [25.3, () => { click(); askForm()?.requestSubmit(); }],
    [30.0, () => { const t = slot()?.querySelector(".ai-card__text"); if (t) moveCursor(t, { dx: 80, dy: 14 }); }],
    [32.4, () => { const t = slot()?.querySelector(".ai-card__text"); if (t) moveCursor(t, { dx: 360, dy: 14 }); }],
    [34.4, () => { const c = cites()[0]; if (c) { moveCursor(c); window.setTimeout(() => hover(c), 950 / audio.playbackRate); } }],
    [38.4, () => { cites().forEach(unhover); const t = slot()?.querySelector(".ai-card__text"); if (t) moveCursor(t, { dx: 220, dy: 14 }); }],
    [40.0, () => { const c = cites()[1]; if (c) { moveCursor(c); window.setTimeout(() => hover(c), 950 / audio.playbackRate); } }],
    [44.4, () => { cites().forEach(unhover); }],
    [46.0, () => { const c = cites()[0]; if (c) moveCursor(c, { dx: 140, dy: 120 }); }],
    [51.6, () => { toggle.textContent = "Replay"; }]
  ];

  /* ---- new audio: per-line clips from the manage page ---- */
  let clipTrack = null;
  function applyTrack(track) {
    clipTrack = track;
    const MAX = 88;
    const caps = [];
    track.lines.forEach((ln) => {
      const text = ln.words.map((w) => w.w).join(" ");
      if (text.length <= MAX || ln.words.length < 4) { caps.push([ln.words[0].start, text, false, ln.words]); return; }
      const mid = text.length / 2;
      let acc = 0;
      let cut = 1;
      let best = Infinity;
      ln.words.forEach((w, k) => {
        acc += w.w.length + 1;
        if (k >= ln.words.length - 1) return;
        const punct = /[,;:.]$/.test(w.w) ? 0 : 12;
        const score = Math.abs(acc - mid) + punct;
        if (score < best) { best = score; cut = k + 1; }
      });
      const a = ln.words.slice(0, cut);
      const b = ln.words.slice(cut);
      caps.push([a[0].start, a.map((w) => w.w).join(" "), true, a]);
      caps.push([b[0].start, b.map((w) => w.w).join(" "), false, b]);
    });
    caps.push([track.total, ""]);
    CAPTIONS.splice(0, CAPTIONS.length, ...caps);

    // Move each cue to the same moment of the same line in the new audio.
    const n = track.lines.length;
    const realCount = ORIG.length - 1;
    CUES.forEach((cue) => {
      if (cue.orig === undefined) cue.orig = cue[0];
      const t = cue.orig;
      if (t >= ORIG[realCount][0]) { cue[0] = track.total; return; }
      let idx = 0;
      ORIG.forEach(([start], k) => { if (k < realCount && start <= t) idx = k; });
      const oldDur = Math.max(0.5, ORIG[idx + 1][0] - 0.4 - ORIG[idx][0]);
      const line = track.lines[Math.min(idx, n - 1)];
      const offset = Math.max(0, t - ORIG[idx][0]);
      cue[0] = line.start + Math.min(offset * (line.dur / oldDur), line.dur + 0.35);
    });
    audio.src = track.url;
  }

  /* ---- player ---- */
  let fired = 0;
  let capIndex = -1;
  let raf = 0;

  let capWords = [];
  function setCaption(i) {
    if (i === capIndex) return;
    capIndex = i;
    const text = i >= 0 ? CAPTIONS[i][1] : "";
    caption.textContent = "";
    capWords = text.split(/\s+/).filter(Boolean).map((word) => {
      const span = document.createElement("span");
      span.className = "w";
      span.textContent = word;
      caption.append(span, " ");
      return span;
    });
    caption.classList.toggle("is-on", Boolean(text));
  }

  // Highlight words in proportion to their length across the spoken part of the line.
  function highlightWords(t) {
    if (capIndex < 0 || !capWords.length) return;
    const timed = CAPTIONS[capIndex][3];
    if (timed && timed.length === capWords.length) {
      let now = 0;
      timed.forEach((w, k) => { if (w.start <= t) now = k; });
      capWords.forEach((el, k) => {
        el.classList.toggle("is-read", k < now);
        el.classList.toggle("is-now", k === now && t <= timed[k].end + 0.2);
      });
      return;
    }
    const start = CAPTIONS[capIndex][0];
    const next = CAPTIONS[capIndex + 1] ? CAPTIONS[capIndex + 1][0] : start + 3;
    const end = Math.max(start + 0.5, CAPTIONS[capIndex][2] ? next : next - 0.4);
    const frac = Math.min(1, Math.max(0, (t - start) / (end - start)));
    const weights = capWords.map((w) => w.textContent.length + 2);
    const total = weights.reduce((a, b) => a + b, 0);
    let acc = 0;
    let now = capWords.length - 1;
    for (let k = 0; k < weights.length; k += 1) {
      acc += weights[k];
      if (frac * total <= acc) { now = k; break; }
    }
    capWords.forEach((w, k) => {
      w.classList.toggle("is-read", k < now);
      w.classList.toggle("is-now", k === now && frac < 1);
    });
  }

  function tick() {
    const t = audio.currentTime;
    while (fired < CUES.length && CUES[fired][0] <= t) {
      CUES[fired][1]();
      fired += 1;
    }
    let i = -1;
    CAPTIONS.forEach(([at], idx) => { if (at <= t) i = idx; });
    setCaption(i);
    highlightWords(t);
    progress.style.width = `${Math.min(100, (t / (audio.duration || 51.8)) * 100)}%`;
    if (!audio.paused && !audio.ended) raf = requestAnimationFrame(tick);
  }

  function reset() {
    cancelAnimationFrame(raf);
    cancelAnimationFrame(scrollRaf);
    window.clearInterval(typeTimer);
    audio.pause();
    audio.currentTime = 0;
    fired = 0;
    capIndex = -1;
    viewport.scrollTop = 0;
    const input = askInput();
    if (input) input.value = "";
    cites().forEach(unhover);
    serp.classList.remove("is-gone");
    layer.querySelectorAll(".kd-res").forEach((r) => r.classList.remove("is-hit"));
    if (addressText) addressText.textContent = SERP_ADDRESS;
    window.__kaSummary?.reply({ parts: window.__kaParts(), ask: "follow-up", offers: [], clearOffers: true, instant: true, meta: "From this article", phase: "landed" });
    cursor.classList.remove("is-on");
    cursor.style.transform = "translate(520px, 300px)";
    caption.classList.remove("is-on");
    progress.style.width = "0";
    toggle.textContent = "Play walkthrough";
  }

  function play() {
    toggle.textContent = "Pause";
    audio.play().then(() => { raf = requestAnimationFrame(tick); }).catch(() => {
      // Autoplay blocked: start on the first click or key press instead.
      toggle.textContent = "Play walkthrough";
      const go = (event) => {
        if (event.target.closest?.(".kd-dock")) return;
        document.removeEventListener("pointerdown", go, true);
        document.removeEventListener("keydown", go, true);
        if (label === "Play walkthrough" && document.body.classList.contains("kd")) { reset(); play(); }
      };
      document.addEventListener("pointerdown", go, true);
      document.addEventListener("keydown", go, true);
    });
  }

  toggleBtn.addEventListener("click", () => {
    if (toggle.textContent === "Play walkthrough") { reset(); play(); return; }
    if (audio.ended || toggle.textContent === "Replay") { reset(); play(); return; }
    if (audio.paused) { audio.play(); toggle.textContent = "Pause"; raf = requestAnimationFrame(tick); }
    else { audio.pause(); toggle.textContent = "Resume"; }
  });
  audio.addEventListener("ended", () => { toggle.textContent = "Replay"; setCaption(-1); });

  const SPEEDS = [1, 1.25, 1.5];
  const speedBtn = dock.querySelector("[data-kd-speed]");
  speedBtn.addEventListener("click", () => {
    const next = SPEEDS[(SPEEDS.indexOf(audio.playbackRate) + 1) % SPEEDS.length];
    audio.playbackRate = next;
    speedBtn.textContent = `${next}×`;
    cursor.style.setProperty("--kd-rate", next);
  });

  const openBtn = document.createElement("button");
  openBtn.type = "button";
  openBtn.className = "kd-open";
  openBtn.textContent = "▶ Walkthrough";
  (document.querySelector(".studio-bar") || document.body).appendChild(openBtn);
  openBtn.hidden = true;

  function exitWalkthrough() {
    reset();
    document.body.classList.remove("kd");
    layer.style.display = "none";
    dock.style.display = "none";
    openBtn.hidden = false;
    if (addressText) addressText.textContent = KA_ADDRESS;
  }
  function enterWalkthrough() {
    document.body.classList.add("kd");
    layer.style.display = "";
    dock.style.display = "";
    openBtn.hidden = true;
    reset();
  }
  dock.querySelector("[data-kd-quit]").addEventListener("click", exitWalkthrough);
  openBtn.addEventListener("click", enterWalkthrough);

  // Start state: Google results are showing; the article is behind them.
  if (addressText) addressText.textContent = SERP_ADDRESS;
  const ready = window.buildClipTrack ? window.buildClipTrack("knowledge").then((track) => { if (track) applyTrack(track); }).catch(() => {}) : Promise.resolve();
  ready.then(() => window.setTimeout(() => { reset(); play(); }, 400));
})();
