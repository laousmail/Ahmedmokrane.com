/* Ahmed Mokrane — scroll-driven camera reel + site chrome */
document.documentElement.classList.add("js");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- projects (preserved from V1) ---------- */
const P = [
  {
    id: "entre-deux-mondes",
    f: "fiction",
    t: "Entre Deux Mondes",
    c: "Short film · Fiction",
    r: "Writer, Director",
    loc: "Montréal",
    img: "edm",
    gal: ["edm-1", "edm-2", "edm-3", "edm-4"],
    story: [
      "An immigrant student in Montréal, building a new life while still emotionally tied to the one he left behind.",
      "Through an intimate, cinematic approach, the film looks at immigration as a human and emotional experience, not only a change of address.",
    ],
    links: [
      ["Watch the film", "https://youtu.be/lpXYwm2c-lg"],
      ["Watch the teaser", "https://youtu.be/czXuh4hBuzg"],
    ],
  },
  {
    id: "sonrie",
    f: "fiction",
    t: "Sonrié",
    c: "Short film · Fiction",
    r: "Director",
    loc: "Dominican Republic",
    award: "Top 2 · Mix Film Festival Laval",
    img: "sonrie",
    gal: ["sonrie-carpet", "sonrie-festival"],
    story: [
      "A clown has lost the passion that once gave meaning to his work. Behind a character built to make others smile is someone struggling to find his own smile again.",
      "A film about loneliness, lost passion and the search for meaning, and an important step in Ahmed’s development as a narrative filmmaker.",
    ],
    links: [
      ["Watch the film", "https://youtu.be/BeT4udZhZUc"],
      ["Watch the teaser", "https://www.instagram.com/reel/DMGZdxaMNUX/"],
    ],
  },
  {
    id: "humanite",
    f: "post",
    t: "Humanité",
    c: "Feature film · Fiction",
    r: "Editor, Colorist",
    loc: "Directed by Rida Amrani",
    img: "humanite",
    story: [
      "A feature film directed by Rida Amrani. Ahmed edited and graded it, shaping the film’s visual tone from the edit bay to the final grade.",
    ],
    links: [],
  },
  {
    id: "music-videos",
    f: "music",
    t: "Music Videos",
    c: "Artist visuals",
    r: "Creative direction, Cinematography, Post",
    loc: "Montréal",
    img: "music",
    story: [
      "Music videos shaped Ahmed’s visual language. He combines creative direction, storytelling, cinematography and post-production to build a world around each artist.",
      "Work for Yacine Yafsah, Said Saidj and Inder Khedewala, alongside collaborations across the North African and international music scene. More than one million views across projects.",
    ],
    links: [
      ["Yacine Yafsah · Ssver n Tmara", "https://youtu.be/vD9WzlaM1D0"],
      ["Said Saidj · Tuzma", "https://youtu.be/fb_vwNqY9y0"],
      ["Inder Khedewala · Ik Kudi Hundi Si", "https://youtu.be/Z76Tm12dh_s"],
    ],
  },
  {
    id: "concerts",
    f: "live",
    t: "Concerts",
    c: "Concert · Live production",
    r: "Director, Filmmaker",
    loc: "L’Olympia de Montréal · Salle Désilets · RaÏFest",
    img: "concerts",
    story: [
      "Two Soolking performances at L’Olympia de Montréal, plus festival work at RaÏFest. The goal is never just to film the artist, but the energy running between the stage and the room.",
      "Artists, audience, backstage, reactions and the spontaneous moments in between, cut into a story that makes you feel you were there.",
    ],
    links: [["Follow on Instagram", "https://www.instagram.com/ahmed.inspires/"]],
  },
  {
    id: "amine-radi",
    f: "comedy",
    t: "Amine Radi",
    c: "Montréal tour 2026 · Live comedy",
    r: "Director, Filmmaker",
    loc: "Montréal",
    img: "amine",
    wide: true,
    story: [
      "Amine Radi’s 2026 Montréal tour: capturing a comedian’s energy, personality and timing across multiple shows.",
      "Live comedy demands fast decisions and an ear for rhythm, so the cut keeps the spontaneity that makes the room laugh.",
    ],
    links: [["Follow on Instagram", "https://www.instagram.com/ahmed.inspires/"]],
  },
  {
    id: "paul-mirabel",
    f: "comedy",
    t: "Paul Mirabel",
    c: "Stand-up · Arena",
    r: "Filmmaker",
    loc: "Place Bell, Laval · Centre Vidéotron, Québec",
    img: "mirabel",
    story: [
      "Arena stand-up: catching one performer’s personality while keeping the energy of thousands of people living the same moment.",
      "Further live comedy work includes Meriem Benoua (Montréal, 2026) and Camille Lorente (Montréal, 2025).",
    ],
    links: [["Follow on Instagram", "https://www.instagram.com/ahmed.inspires/"]],
  },
  {
    id: "dominican-republic",
    f: "doc",
    t: "Dominican Republic",
    c: "Documentary · Travel",
    r: "Director, Filmmaker",
    loc: "Dominican Republic",
    img: "dominican",
    story: [
      "A documentary-driven take on travel film. Instead of postcards, the focus is people, places, culture and the emotions found along the way.",
      "Telling a place through the people who live there.",
    ],
    links: [["Follow on Instagram", "https://www.instagram.com/ahmed.inspires/"]],
  },
  {
    id: "directing",
    f: "live",
    t: "Directing",
    c: "Multi-camera · Creative direction",
    r: "Director",
    loc: "Montréal",
    img: "directing",
    story: [
      "From intimate fiction to multi-camera arenas, directing means understanding the emotion and identity behind a project and translating it into images.",
    ],
    links: [],
  },
  {
    id: "post-production",
    f: "post",
    t: "Post-Production",
    c: "Edit · Colour · Finishing",
    r: "Editor, Colorist",
    loc: "DaVinci Resolve",
    img: "post",
    story: [
      "Editing, colour correction, grading and finishing, all in-house. One creative direction from the first shot to the final delivery.",
    ],
    links: [],
  },
];

/* ---------- work index ---------- */
const idx = document.getElementById("index");
const arrow =
  '<svg class="arw" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M2 9h14M10 3l6 6-6 6"/></svg>';
idx.innerHTML = P.map(
  (p, i) => `<li data-f="${p.f}"><button data-id="${p.id}" data-img="${p.img}">
  <img class="thumb" src="img/${p.img}.webp" alt="" loading="lazy">
  <span class="no">${String(i + 1).padStart(2, "0")}</span><span class="t">${p.t}</span><span class="c">${p.c}</span><span class="r">${p.r}</span>${arrow}</button></li>`
).join("");

document.querySelectorAll(".filters .chip").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filters .chip").forEach((x) => x.setAttribute("aria-pressed", x === b));
    const f = b.dataset.f;
    idx.querySelectorAll("li").forEach((li) => (li.hidden = !(f === "all" || li.dataset.f === f)));
  })
);

const peek = document.getElementById("peek");
const peekImg = document.getElementById("peekImg");
let px = 0,
  py = 0,
  tx = 0,
  ty = 0,
  raf;
function loop() {
  px += (tx - px) * 0.18;
  py += (ty - py) * 0.18;
  peek.style.left = px + "px";
  peek.style.top = py + "px";
  raf = requestAnimationFrame(loop);
}
idx.addEventListener("pointermove", (e) => {
  tx = e.clientX + 180;
  ty = e.clientY;
  if (!raf) {
    px = tx;
    py = ty;
    loop();
  }
});
idx.addEventListener("pointerover", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  peekImg.src = "img/" + b.dataset.img + ".webp";
  peek.classList.add("on");
});
idx.addEventListener("pointerleave", () => {
  peek.classList.remove("on");
  cancelAnimationFrame(raf);
  raf = null;
});
idx.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) location.hash = b.dataset.id;
});

/* ---------- case overlay ---------- */
const caseEl = document.getElementById("case");
let lastFocus = null;
function renderCase(p) {
  const i = P.indexOf(p);
  const n = P[(i + 1) % P.length];
  caseEl.innerHTML = `
  <div class="case-bar"><div class="wrap"><span class="mono dim">${String(i + 1).padStart(2, "0")} / ${String(P.length).padStart(2, "0")} · ${p.c}</span><button class="btn" id="caseClose">Close</button></div></div>
  <div class="case-hero ${p.wide ? "" : "portrait"}"><img src="img/${p.img}.webp" alt="${p.t}"></div>
  <div class="wrap">
    <div class="case-body">
      <div><p class="mono dim">${p.c}</p><h2 id="case-title">${p.t}</h2><div class="story">${p.story.map((s) => `<p>${s}</p>`).join("")}</div></div>
      <aside class="case-side">
        <dl class="facts" style="margin:0;border:0;padding:0;grid-template-columns:1fr">
          <div><dt>Role</dt><dd>${p.r}</dd></div><div><dt>Where</dt><dd>${p.loc}</dd></div>${
            p.award ? `<div><dt>Recognition</dt><dd style="color:var(--tungsten)">${p.award}</dd></div>` : ""
          }
        </dl>
        ${
          p.links.length
            ? `<div class="ctas">${p.links
                .map(([l, u], k) => `<a class="btn ${k ? "" : "solid"}" href="${u}" target="_blank" rel="noopener">${l}<span>↗</span></a>`)
                .join("")}</div>`
            : ""
        }
      </aside>
    </div>
    ${p.gal ? `<div class="case-gallery">${p.gal.map((g) => `<img src="img/${g}.webp" alt="Still from ${p.t}" loading="lazy">`).join("")}</div>` : ""}
  </div>
  <div class="case-next"><div class="wrap"><button data-next="${n.id}"><span class="mono dim">Next project</span><span class="t">${n.t} →</span></button></div></div>`;
  caseEl.querySelector("#caseClose").onclick = closeCase;
  caseEl.querySelector("[data-next]").onclick = () => {
    location.hash = n.id;
  };
}
function openFromHash() {
  const p = P.find((x) => x.id === location.hash.slice(1));
  if (p) {
    if (caseEl.hidden) lastFocus = document.activeElement;
    renderCase(p);
    caseEl.hidden = false;
    caseEl.scrollTop = 0;
    document.body.style.overflow = "hidden";
    caseEl.querySelector("#caseClose").focus();
  } else if (!caseEl.hidden) {
    caseEl.hidden = true;
    document.body.style.overflow = "";
    lastFocus && lastFocus.focus && lastFocus.focus();
  }
}
function closeCase() {
  history.pushState("", "", location.pathname + location.search);
  openFromHash();
  document.getElementById("work").scrollIntoView({ block: "start" });
}
addEventListener("hashchange", openFromHash);
openFromHash();
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!caseEl.hidden) closeCase();
    else if (!sheet.hidden) closeSheet();
  }
  if (e.key === "Tab" && !caseEl.hidden) {
    const f = [...caseEl.querySelectorAll("a,button")];
    if (!f.length) return;
    const a = f[0],
      z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) {
      e.preventDefault();
      z.focus();
    } else if (!e.shiftKey && document.activeElement === z) {
      e.preventDefault();
      a.focus();
    }
  }
});

/* ---------- mobile sheet ---------- */
const sheet = document.getElementById("sheet");
const mo = document.getElementById("menuOpen");
function closeSheet() {
  sheet.hidden = true;
  mo.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
  mo.focus();
}
mo.onclick = () => {
  sheet.hidden = false;
  mo.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
  sheet.querySelector("a").focus();
};
document.getElementById("menuClose").onclick = closeSheet;
sheet.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    sheet.hidden = true;
    mo.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  })
);

/* ---------- header scroll state ---------- */
const topbar = document.getElementById("topbar");
addEventListener(
  "scroll",
  () => {
    topbar.classList.toggle("scrolled", scrollY > 40);
  },
  { passive: true }
);

/* ---------- timecode ---------- */
const tc = document.getElementById("tc");
const t0 = performance.now();
const pad = (n) => String(n).padStart(2, "0");
function tick() {
  const s = (performance.now() - t0) / 1000;
  const f = Math.floor(s * 24) % 24;
  const S = Math.floor(s);
  if (tc)
    tc.textContent = `TC ${pad(Math.floor(S / 3600))}:${pad(Math.floor(S / 60) % 60)}:${pad(S % 60)}:${pad(f)}`;
  if (!reduce) requestAnimationFrame(tick);
}
tick();
if (reduce) setInterval(tick, 1000);

/* ---------- grain ---------- */
(function () {
  const c = document.getElementById("grain");
  const x = c.getContext("2d");
  const S = 160;
  c.width = S;
  c.height = S;
  const img = x.createImageData(S, S);
  function draw() {
    for (let i = 0; i < img.data.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    x.putImageData(img, 0, 0);
  }
  draw();
  c.style.imageRendering = "pixelated";
  if (!reduce) {
    let last = 0;
    (function g(t) {
      if (t - last > 83) {
        draw();
        last = t;
      }
      requestAnimationFrame(g);
    })(0);
  }
})();

/* ---------- copy + toast ---------- */
const toast = document.getElementById("toast");
let tt;
function say(m) {
  toast.textContent = m;
  toast.hidden = false;
  clearTimeout(tt);
  tt = setTimeout(() => (toast.hidden = true), 1800);
}
function copyText(text, el) {
  const done = () => say("Copied");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, () => sel(el));
  } else sel(el);
  function sel(n) {
    if (!n) return;
    const r = document.createRange();
    r.selectNodeContents(n);
    const s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    say("Selected. Press copy");
  }
}
document.querySelectorAll("[data-copy]").forEach((b) =>
  b.addEventListener("click", () => copyText(b.dataset.copy, b.previousElementSibling.querySelector(".v")))
);

/* ---------- brief builder ---------- */
let ptype = "Music video";
document.querySelectorAll(".types .chip").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".types .chip").forEach((x) => x.setAttribute("aria-pressed", x === b));
    ptype = b.dataset.t;
  })
);
const form = document.getElementById("brief");
const err = document.getElementById("err");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const name = (d.get("name") || "").trim();
  const mail = (d.get("mail") || "").trim();
  const msg = (d.get("msg") || "").trim();
  if (!name) {
    err.textContent = "Add your name so Ahmed knows who to reply to.";
    form.querySelector("#f-name").focus();
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(mail)) {
    err.textContent = "Add an email address Ahmed can reply to, like you@studio.com.";
    form.querySelector("#f-mail").focus();
    return;
  }
  if (!msg) {
    err.textContent = "Describe the project in a sentence or two.";
    form.querySelector("#f-msg").focus();
    return;
  }
  err.textContent = "";
  const co = (d.get("co") || "").trim();
  const date = (d.get("date") || "").trim();
  const text = `Hi Ahmed,\n\nProject: ${ptype}\nFrom: ${name}${co ? " · " + co : ""}\nReply to: ${mail}\nShoot date: ${date || "Flexible"}\nBudget: ${d.get("budget")}\n\n${msg}\n`;
  document.getElementById("briefText").textContent = text;
  document.getElementById("mailBrief").href =
    "mailto:ahmedmkrne@gmail.com?subject=" +
    encodeURIComponent(ptype + " inquiry · " + name) +
    "&body=" +
    encodeURIComponent(text);
  const out = document.getElementById("briefOut");
  out.hidden = false;
  out.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
});
form.querySelectorAll("input,textarea").forEach((i) => i.addEventListener("input", () => (err.textContent = "")));
document.getElementById("copyBrief").onclick = () =>
  copyText(document.getElementById("briefText").textContent, document.getElementById("briefText"));

/* ---------- reveal ---------- */
if (!reduce && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.remove("pre");
          io.unobserve(e.target);
        }
      }),
    { rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".lift").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top > innerHeight) {
      el.classList.add("pre");
      io.observe(el);
    }
  });
}

/* ---------- REEL: scroll-driven camera UI ---------- */
const TAKES = [
  {
    label: "Take 01 · Slate",
    title: "Mark the frame.",
    sub: "Letterbox closes. The viewfinder wakes.",
    ratio: 2.39,
    read: "ISO 800 · T2.8 · 23.976",
    ar: "2.39:1",
    peaking: 0,
    guides: 0.3,
    cross: 0,
  },
  {
    label: "Take 02 · Live",
    title: "The room is rolling.",
    sub: "REC · timecode · aperture readouts lock on.",
    ratio: 1.85,
    read: "ISO 1600 · T2.0 · 23.976",
    ar: "1.85:1",
    peaking: 0,
    guides: 1,
    cross: 1,
  },
  {
    label: "Take 03 · Fiction",
    title: "Entre Deux Mondes.",
    sub: "Focus peaking finds the edge between two worlds.",
    ratio: 2.39,
    read: "ISO 800 · T1.8 · 23.976",
    ar: "2.39:1",
    peaking: 1,
    guides: 1,
    cross: 0.4,
  },
  {
    label: "Take 04 · Sonrié",
    title: "A smile, lost then found.",
    sub: "Top 2 · Mix Film Festival Laval.",
    ratio: 1.33,
    read: "ISO 400 · T4 · 24.000",
    ar: "1.33:1",
    peaking: 0.35,
    guides: 1,
    cross: 1,
  },
  {
    label: "Take 05 · Music",
    title: "Give the song a face.",
    sub: "1M+ views across music video projects.",
    ratio: 0.8,
    read: "ISO 3200 · T2.2 · 23.976",
    ar: "4:5",
    peaking: 0,
    guides: 0.6,
    cross: 0,
  },
  {
    label: "Take 06 · Cut",
    title: "Scrub the timeline.",
    sub: "NLE playhead · clips · waveform — then the work below.",
    ratio: 1.78,
    read: "ISO 800 · T2.8 · 23.976",
    ar: "16:9",
    peaking: 0,
    guides: 0.2,
    cross: 0,
  },
];

function applyMattes(ratio) {
  const vf = document.getElementById("viewfinder");
  const mt = document.getElementById("mt");
  const mb = document.getElementById("mb");
  const ml = document.getElementById("ml");
  const mr = document.getElementById("mr");
  const guides = document.getElementById("guides");
  if (!vf) return;
  const W = vf.clientWidth;
  const H = vf.clientHeight;
  const own = W / H;
  let ih = H,
    iw = W;
  if (ratio > own) ih = W / ratio;
  else iw = H * ratio;
  const vt = Math.max(0, (H - ih) / 2);
  const vb = H - ih - vt;
  const h = (W - iw) / 2;
  mt.style.height = vt + "px";
  mb.style.height = vb + "px";
  ml.style.width = mr.style.width = h + "px";
  guides.style.inset = `${vt + 10}px ${h + 10}px ${vb + 10}px`;
}

function setBeat(i, progressWithin = 0) {
  const take = TAKES[i];
  const imgs = document.querySelectorAll("#vfMedia img");
  imgs.forEach((img, n) => img.classList.toggle("is-active", n === i));
  document.getElementById("takeLabel").textContent = take.label;
  document.getElementById("takeTitle").textContent = take.title;
  document.getElementById("takeSub").textContent = take.sub;
  document.getElementById("camRead").textContent = take.read;
  document.getElementById("arRead").textContent = take.ar;
  document.getElementById("scopeBeat").textContent = String(i + 1).padStart(2, "0");
  document.getElementById("peaking").style.opacity = take.peaking;
  document.getElementById("guides").style.opacity = take.guides;
  document.getElementById("cross").style.opacity = take.cross;
  applyMattes(take.ratio);

  document.querySelectorAll("#beatRail span").forEach((s, n) => s.classList.toggle("on", n === i));
  document.querySelectorAll("#tlTrack .tl-clip").forEach((c, n) => c.classList.toggle("is-hot", n === i));

  const head = document.getElementById("playhead");
  const track = document.getElementById("tlTrack");
  if (head && track) {
    const w = track.clientWidth;
    const seg = w / TAKES.length;
    head.style.left = seg * i + seg * progressWithin + "px";
  }
}

function initReel() {
  const stage = document.getElementById("reel");
  const hudTop = document.getElementById("hudTop");
  const hudBot = document.getElementById("hudBot");
  const takeLabel = document.getElementById("takeLabel");
  const takeTitle = document.getElementById("takeTitle");
  const takeSub = document.getElementById("takeSub");
  const scopeRail = document.getElementById("scopeRail");
  const timelineStrip = document.getElementById("timelineStrip");
  const heroImg = document.getElementById("heroImg");

  // Hero subtle Ken Burns (non-scroll)
  if (!reduce && heroImg && typeof gsap !== "undefined") {
    gsap.to(heroImg, { scale: 1.12, duration: 18, ease: "none", yoyo: true, repeat: -1 });
  }

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    setBeat(0);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  if (reduce) {
    // Show final-ish composed state without scrubbing
    gsap.set([hudTop, hudBot, takeLabel, takeTitle, takeSub, scopeRail, timelineStrip], { opacity: 1, y: 0 });
    setBeat(0);
    applyMattes(2.39);
    return;
  }

  // Initial hidden copy / HUD
  gsap.set([hudTop, hudBot], { opacity: 0, y: 8 });
  gsap.set([takeLabel, takeTitle, takeSub], { opacity: 0, y: 16 });
  gsap.set([scopeRail, timelineStrip], { opacity: 0 });
  setBeat(0);
  applyMattes(2.8); // start more open, then squeeze

  let lastBeat = -1;

  ScrollTrigger.create({
    trigger: stage,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.65,
    onUpdate: (self) => {
      const p = self.progress; // 0 → 1 across 6 beats
      const beats = TAKES.length;
      const raw = p * beats;
      const i = Math.min(beats - 1, Math.floor(raw));
      const local = raw - i;

      // Intro chrome (first ~12% of stage): reveal HUD + copy
      const intro = Math.min(1, p / 0.08);
      gsap.set(hudTop, { opacity: intro, y: 8 * (1 - intro) });
      gsap.set(hudBot, { opacity: intro, y: 8 * (1 - intro) });
      gsap.set(takeLabel, { opacity: intro, y: 10 * (1 - intro) });
      gsap.set(takeTitle, { opacity: intro, y: 16 * (1 - intro) });
      gsap.set(takeSub, { opacity: intro * 0.95, y: 12 * (1 - intro) });

      // Scopes + timeline fade in mid-reel
      const scopesOn = Math.min(1, Math.max(0, (p - 0.12) / 0.1));
      gsap.set(scopeRail, { opacity: scopesOn });
      const tlOn = Math.min(1, Math.max(0, (p - 0.2) / 0.12));
      gsap.set(timelineStrip, { opacity: tlOn });

      if (i !== lastBeat) {
        lastBeat = i;
        // Soft crossfade handled by class swap
      }
      setBeat(i, local);

      // Continuous matte squeeze between beats for filmic feel
      const a = TAKES[i];
      const b = TAKES[Math.min(beats - 1, i + 1)];
      const ratio = a.ratio + (b.ratio - a.ratio) * local;
      applyMattes(ratio);

      // Media scale push within beat
      const active = document.querySelector("#vfMedia img.is-active");
      if (active) {
        const sc = 1.04 + local * 0.06;
        active.style.transform = `scale(${sc})`;
      }
    },
  });

  // Keep mattes correct on resize
  addEventListener("resize", () => {
    const i = Math.max(0, lastBeat);
    applyMattes(TAKES[i].ratio);
  });
}

initReel();
