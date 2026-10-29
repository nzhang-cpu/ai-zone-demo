/* Case + automation walkthrough. Open submit.html?demo=1
   Narration drives everything: audio.currentTime is the clock.
   The automation screen (action.html) is shown in an iframe so the audio keeps playing. */
(function () {
  if (!/[?&]demo=1/.test(window.location.search)) return;
  const browser = document.querySelector(".browser");
  const viewport = document.querySelector(".browser-viewport");
  const form = document.getElementById("case-form");
  if (!browser || !viewport || !form) return;

  const style = document.createElement("style");
  style.textContent = `
    .kd-open { height: 34px; padding: 0 14px; border: 0; border-radius: 999px; background: #fff; color: #020642; font: 700 12px var(--font-sans, system-ui, sans-serif); cursor: pointer; margin-left: auto; }
    .kd-layer { position: absolute; inset: 0; pointer-events: none; z-index: 50; overflow: hidden; }
    .kd-frame { position: absolute; inset: 46px 0 0 0; width: 100%; height: calc(100% - 46px); border: 0; background: #fff; opacity: 0; transition: opacity .45s ease; pointer-events: auto; }
    .kd-frame.is-on { opacity: 1; }
    .kd-cursor { position: absolute; left: 0; top: 0; width: 22px; height: 22px; z-index: 60; opacity: 0; transition: transform calc(.9s / var(--kd-rate, 1)) cubic-bezier(.45,.05,.2,1), opacity .3s; filter: drop-shadow(0 2px 3px rgba(0,0,0,.35)); }
    .kd-cursor.is-on { opacity: 1; }
    .kd-cursor.is-fast { transition-duration: calc(.5s / var(--kd-rate, 1)); }
    .kd-cursor.is-click::after { content: ""; position: absolute; left: -9px; top: -9px; width: 26px; height: 26px; border-radius: 50%; border: 2px solid rgba(80, 90, 255, .8); animation: kd-ping .5s ease-out; }
    @keyframes kd-ping { from { transform: scale(.3); opacity: 1; } to { transform: scale(1.6); opacity: 0; } }
    .kd-dock { flex: none; display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 2px 0 0; }
    .kd-caption { min-height: 52px; max-width: min(820px, 92%); display: flex; align-items: center; justify-content: center; color: #fff; font: 600 18px/1.4 var(--font-sans, "Plus Jakarta Sans", system-ui, sans-serif); text-align: center; opacity: 0; transition: opacity .25s ease; }
    .kd-caption.is-on { opacity: 1; }
    .kd-controls { width: min(560px, 92%); display: flex; align-items: center; gap: 14px; }
    .kd-controls button { flex: none; width: 36px; height: 36px; display: grid; place-items: center; border: 0; border-radius: 50%; background: #fff; color: #020642; cursor: pointer; }
    .kd-controls .kd-quit { width: auto; height: 30px; padding: 0 14px; border-radius: 999px; background: rgba(255,255,255,.14); color: #fff; font: 600 12px var(--font-sans, system-ui, sans-serif); }
    .kd-progress { flex: 1; height: 3px; border-radius: 2px; background: rgba(255,255,255,.22); overflow: hidden; }
    .kd-progress i { display: block; height: 100%; width: 0; background: #fff; }
  `;
  document.head.appendChild(style);

  const audio = new Audio("case%20dub.mp3");
  audio.preload = "auto";

  const layer = document.createElement("div");
  layer.className = "kd-layer";
  layer.innerHTML = `<svg class="kd-cursor" viewBox="0 0 24 24"><path d="M3 2l7 18 2.6-7.4L20 10z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
  browser.appendChild(layer);
  const cursor = layer.querySelector(".kd-cursor");

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
  document.body.classList.add("kd");

  const caption = dock.querySelector(".kd-caption");
  const toggleBtn = dock.querySelector("[data-kd-toggle]");
  const progress = dock.querySelector(".kd-progress i");
  const ICONS = {
    play: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z"/></svg>',
    pause: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',
    replay: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>'
  };
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

  const addressText = browser.querySelector(".browser-address span");
  const CASE_ADDRESS = addressText ? addressText.textContent : "";
  const ACTION_ADDRESS = "help.northline.test/actions/new";

  const SUBJECT = "Payment issue on order 1044";
  const DETAILS = "Order 1044. My card shows two $86 charges. I opened a dispute with my bank on one of them because it said the order never arrived — I have the package. I have not received a refund for the extra charge.";
  const original = {
    subject: form.elements.subject.value,
    details: form.elements.details.value,
    reference: form.elements.reference.value
  };

  const slot = () => document.querySelector("[data-summary-slot]");
  let frame = null;

  /* ---- helpers ---- */
  function moveCursor(el, opts = {}) {
    if (!el) return;
    const b = browser.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    let ox = 0;
    let oy = 0;
    if (el.ownerDocument !== document && frame) {
      const f = frame.getBoundingClientRect();
      ox = f.left;
      oy = f.top;
    }
    const x = ox + r.left - b.left + (opts.dx ?? r.width / 2);
    const y = oy + r.top - b.top + (opts.dy ?? r.height / 2);
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
  let typeTimer = 0;
  function typeInto(input, text, ms) {
    window.clearInterval(typeTimer);
    const per = ms / audio.playbackRate / text.length;
    let i = 0;
    typeTimer = window.setInterval(() => {
      i += 1;
      input.value = text.slice(0, i);
      input.dispatchEvent(new Event("input", { bubbles: true }));
      if (i >= text.length) window.clearInterval(typeTimer);
    }, per);
  }
  const generalSummary = (instant) => window.__caseSummary?.reply({
    parts: [
      { t: "Cases are usually answered within ", mark: false },
      { t: "one business day", mark: true },
      { t: ". Tell us what happened and add an order or payment id, so we can find it faster.", mark: false }
    ],
    ask: "follow-up",
    offers: [],
    clearOffers: true,
    instant,
    meta: "General case information",
    phase: "drafting"
  });

  function openAction() {
    click();
    frame = document.createElement("iframe");
    frame.className = "kd-frame";
    frame.setAttribute("aria-hidden", "true");
    frame.tabIndex = -1;
    frame.src = "action.html?frame=1";
    frame.addEventListener("load", () => {
      
      frame.classList.add("is-on");
    });
    layer.insertBefore(frame, cursor);
    if (addressText) addressText.textContent = ACTION_ADDRESS;
  }
  // In the walkthrough the refund chip opens the automation screen in the frame.
  document.addEventListener("click", (event) => {
    if (!document.body.classList.contains("kd")) return;
    const chip = event.target.closest?.("a.question-btn");
    if (chip && /action\.html/.test(chip.getAttribute("href") || "")) {
      event.preventDefault();
      openAction();
    }
  });

  const fdoc = () => frame?.contentDocument;
  function flashFields() {
    const doc = fdoc();
    if (!doc) return;
    const fields = [...doc.querySelectorAll(".field")].filter((f) => f.querySelector(".carry-tag:not([hidden])"));
    fields.forEach((f, i) => {
      window.setTimeout(() => {
        f.classList.add("kd-flash");
        moveCursor(f.querySelector("input, textarea, select"), { dx: 60 });
      }, (i * 1100) / audio.playbackRate);
    });
  }

  /* ---- timeline (seconds on the narration) ---- */
  const CAPTIONS = [
    [0.0, "Now let’s look at a different challenge."],
    [2.3, "Customers often submit support cases for issues that could be resolved through self-service."],
    [7.6, "Here, a customer is reporting a duplicate charge and preparing to submit a case."],
    [12.5, "As the customer types, AI Zone understands the issue and provides personalized recommendations."],
    [18.3, "Instead of waiting for an agent, AI offers a faster path to request a refund."],
    [23.4, "With one click, the customer moves directly into the refund process."],
    [27.6, "AI carries over the customer’s information and automatically fills out the refund form."],
    [32.6, "The customer simply reviews the details and submits the request."],
    [36.3, "The automation processes the refund without agent involvement."],
    [40.1, "And the refund is successfully completed."],
    [42.8, "What could have been another support ticket is now a completed self-service resolution."],
    [47.6, ""]
  ];

  const CUES = [
    [0.2, () => moveCursorTo(560, 260)],
    [3.0, () => { const t = slot()?.querySelector(".ai-card__text"); if (t) moveCursor(t, { dx: 120, dy: 14 }); }],
    [7.9, () => moveCursor(form.elements.subject, { dx: 120 })],
    [8.4, () => { click(); form.elements.subject.focus(); }],
    [8.7, () => typeInto(form.elements.subject, SUBJECT, 2200)],
    [11.7, () => moveCursor(form.elements.details, { dx: 160, dy: 40 })],
    [12.1, () => { click(); form.elements.details.focus(); }],
    [12.3, () => typeInto(form.elements.details, DETAILS, 5300)],
    [18.8, () => { const c = slot()?.querySelector("a.question-btn"); if (c) moveCursor(c, { dx: 60 }); }],
    [23.7, () => { const c = slot()?.querySelector("a.question-btn"); if (c) c.click(); }],
    [28.2, () => flashFields()],
    [32.0, () => {
      fdoc()?.querySelector("#action-form button[type='submit']")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }],
    [33.6, () => {
      const btn = fdoc()?.querySelector("#action-form button[type='submit']");
      if (btn) moveCursor(btn);
    }],
    [35.4, () => { try { frame.contentWindow.__actionDelay = 4300 / audio.playbackRate; } catch (e) { /* same-origin only */ } click(); fdoc()?.querySelector("#action-form button[type='submit']")?.click(); }],
    [41.4, () => moveCursorTo(900, 420)],
    [47.6, () => { toggle.textContent = "Replay"; }]
  ];

  /* ---- player ---- */
  let fired = 0;
  let capIndex = -1;
  let raf = 0;

  function setCaption(i) {
    if (i === capIndex) return;
    capIndex = i;
    const text = i >= 0 ? CAPTIONS[i][1] : "";
    caption.textContent = text;
    caption.classList.toggle("is-on", Boolean(text));
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
    progress.style.width = `${Math.min(100, (t / (audio.duration || 47.6)) * 100)}%`;
    if (!audio.paused && !audio.ended) raf = requestAnimationFrame(tick);
  }

  function clearFrame() {
    frame?.remove();
    frame = null;
    sessionStorage.removeItem("nl-case-handoff");
    if (addressText) addressText.textContent = CASE_ADDRESS;
  }

  function reset() {
    cancelAnimationFrame(raf);
    window.clearInterval(typeTimer);
    audio.pause();
    audio.currentTime = 0;
    fired = 0;
    capIndex = -1;
    clearFrame();
    viewport.scrollTop = 0;
    form.elements.subject.value = "";
    form.elements.details.value = "";
    form.elements.reference.value = "";
    generalSummary(true);
    cursor.classList.remove("is-on");
    cursor.style.transform = "translate(560px, 260px)";
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
    if (toggle.textContent === "Play walkthrough" || audio.ended || toggle.textContent === "Replay") { reset(); play(); return; }
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
    form.elements.subject.value = original.subject;
    form.elements.details.value = original.details;
    form.elements.reference.value = original.reference;
    form.elements.details.dispatchEvent(new Event("input", { bubbles: true }));
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

  window.setTimeout(() => { reset(); play(); }, 400);
})();
