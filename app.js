/* Ahmed Mokrane: scroll-driven camera reel + site chrome */
document.documentElement.classList.add("js");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- on-site video player (YouTube embed stays on page) ---------- */
function ytId(url) {
  if (!url) return null;
  const m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{6,})/);
  return m ? m[1] : null;
}

const YT_THUMB_Q = ["maxresdefault", "sddefault", "hqdefault", "mqdefault"];

function ytThumbUrl(id, q = "maxresdefault") {
  return id ? `https://i.ytimg.com/vi/${id}/${q}.jpg` : "";
}

function primaryYt(p) {
  for (const link of (p && p.links) || []) {
    const id = ytId(link[1]);
    if (id) return id;
  }
  return null;
}

/** Official YouTube thumb with maxres → sd → hq fallback (handles 120px placeholder). */
function setYtThumb(img, id) {
  if (!img || !id) return;
  let i = 0;
  const apply = () => {
    img.dataset.ytThumb = id;
    img.src = ytThumbUrl(id, YT_THUMB_Q[i]);
  };
  const advance = () => {
    if (i >= YT_THUMB_Q.length - 1) return false;
    i += 1;
    apply();
    return true;
  };
  img.onload = () => {
    if (img.naturalWidth <= 120) advance();
  };
  img.onerror = () => {
    advance();
  };
  apply();
}

function bindYtThumbs(root = document) {
  root.querySelectorAll("img[data-yt-thumb]").forEach((img) => {
    const id = img.getAttribute("data-yt-thumb");
    if (id) setYtThumb(img, id);
  });
}

const player = document.getElementById("player");
const playerFrame = document.getElementById("playerFrame");
const playerTitle = document.getElementById("player-title");
let playerReturnFocus = null;

function openPlayer(id, title) {
  if (!id || !player) return;
  playerReturnFocus = document.activeElement;
  playerTitle.textContent = title || "Watch";
  const origin = encodeURIComponent(location.origin);
  playerFrame.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${origin}" title="${(title || "Video").replace(/"/g, "")}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  player.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("playerClose").focus();
}

function closePlayer() {
  if (!player || player.hidden) return;
  player.hidden = true;
  playerFrame.innerHTML = "";
  const caseOpen = document.getElementById("case");
  if (!caseOpen || caseOpen.hidden) document.body.style.overflow = "";
  if (playerReturnFocus && playerReturnFocus.focus) playerReturnFocus.focus();
}

document.getElementById("playerClose").onclick = closePlayer;
player.addEventListener("click", (e) => {
  if (e.target === player) closePlayer();
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-yt]");
  if (!btn) return;
  e.preventDefault();
  openPlayer(btn.dataset.yt, btn.dataset.title || btn.textContent.trim());
});

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
    sound: true,
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
    sound: true,
    gal: ["sonrie-carpet", "sonrie-festival"],
    story: [
      "A clown has lost the passion that once gave meaning to his work. Behind a character built to make others smile is someone struggling to find his own smile again.",
      "A film about loneliness, lost passion and the search for meaning, and an important step in Ahmed’s development as a narrative filmmaker. Official selection and Top 2 at Mix Film Festival Laval.",
    ],
    links: [
      ["Watch the film", "https://youtu.be/BeT4udZhZUc"],
      ["Watch the teaser", "https://youtu.be/czXuh4hBuzg"],
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
      "Worked with Soolking, an artist, across two nights at L’Olympia de Montréal, plus festival work at RaÏFest. The goal is never just to film the artist, but the energy running between the stage and the room.",
      "Artists, audience, backstage, reactions and the spontaneous moments in between, cut into a story that makes you feel you were there.",
    ],
    links: [["Start a brief", "#contact"]],
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
      "Worked with Amine Radi, a comedian, on the 2026 Montréal tour: capturing energy, personality and timing across multiple shows.",
      "Live comedy demands fast decisions and an ear for rhythm, so the cut keeps the spontaneity that makes the room laugh.",
    ],
    links: [["Start a brief", "#contact"]],
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
      "Worked with Paul Mirabel, a stand-up comedian, on arena dates at Place Bell and Centre Vidéotron: catching one performer’s personality while keeping the energy of thousands of people living the same moment.",
      "Further live comedy work includes Meriem Benoua (Montréal, 2026) and Camille Lorente (Montréal, 2025).",
    ],
    links: [["Start a brief", "#contact"]],
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
    links: [["Start a brief", "#contact"]],
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

/* ---------- editorial portfolio ---------- */
const idx = document.getElementById("index");
const layout = ["", "wide", "tall", "", "wide", "", "tall", "", "wide", ""];

function projectView(p) {
  const lang = window.AM ? window.AM.currentLang() : "en";
  const m = (window.AM && window.AM.META[lang] && window.AM.META[lang][p.id]) || {};
  return {
    ...p,
    t: m.t || p.t,
    c: m.c || p.c,
    r: m.r || p.r,
    loc: m.loc || p.loc,
  };
}

function renderFolio() {
  const active = document.querySelector(".filters .chip[aria-pressed='true']");
  const f = (active && active.dataset.f) || "all";
  idx.innerHTML = P.map((raw, i) => {
    const p = projectView(raw);
    const yt = primaryYt(raw);
    const cls = ["folio-item", layout[i] || ""].filter(Boolean).join(" ");
    const thumb = yt
      ? `<img src="${ytThumbUrl(yt)}" data-yt-thumb="${yt}" alt="" loading="${i < 3 ? "eager" : "lazy"}">`
      : `<img src="img/${p.img}.webp" alt="" loading="${i < 3 ? "eager" : "lazy"}">`;
    return `<article class="${cls}" data-f="${p.f}" ${f === "all" || p.f === f ? "" : "hidden"}>
    <button type="button" data-id="${p.id}" data-img="${p.img}" ${yt ? `data-yt-id="${yt}"` : ""} aria-label="Open ${p.t}">
      <div class="thumb">${thumb}${yt ? `<span class="play-badge" aria-hidden="true"><svg viewBox="0 0 10 10" fill="currentColor"><path d="M1 0l9 5-9 5z"/></svg></span>` : ""}</div>
      <div class="meta"><span class="t">${p.t}</span><span class="c">${p.c}</span><span class="r">${p.r}</span></div>
    </button>
  </article>`;
  }).join("");
  bindYtThumbs(idx);
}
renderFolio();

document.querySelectorAll(".filters .chip").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filters .chip").forEach((x) => x.setAttribute("aria-pressed", x === b));
    const f = b.dataset.f;
    idx.querySelectorAll("article").forEach((el) => (el.hidden = !(f === "all" || el.dataset.f === f)));
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
  if (b.dataset.ytId) setYtThumb(peekImg, b.dataset.ytId);
  else {
    peekImg.onload = null;
    peekImg.onerror = null;
    peekImg.removeAttribute("data-yt-thumb");
    peekImg.src = "img/" + b.dataset.img + ".webp";
  }
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
function renderCase(raw) {
  const p = projectView(raw);
  const i = P.findIndex((x) => x.id === raw.id);
  const n = projectView(P[(i + 1) % P.length]);
  const lang = window.AM ? window.AM.currentLang() : "en";
  const story =
    (window.AM && window.AM.STORIES[lang] && window.AM.STORIES[lang][raw.id]) || raw.story;
  const linkLabel = (l) => {
    if (l === "Watch the film") return tr("watchFilm");
    if (l === "Watch the teaser") return tr("watchTeaser");
    if (l === "Start a brief") return tr("navBrief");
    return l;
  };
  const yt = primaryYt(raw);
  const ytLinks = (raw.links || []).filter(([, u]) => ytId(u));
  const heroImg = yt
    ? `<img src="${ytThumbUrl(yt)}" data-yt-thumb="${yt}" alt="${p.t}">`
    : `<img src="img/${p.img}.webp" alt="${p.t}">`;
  const gallery =
    ytLinks.length > 1
      ? `<div class="case-gallery yt-thumbs">${ytLinks
          .map(([l, u]) => {
            const id = ytId(u);
            const label = linkLabel(l);
            return `<button type="button" class="case-yt-thumb" data-yt="${id}" data-title="${p.t}: ${label}" aria-label="${label}">
              <img src="${ytThumbUrl(id)}" data-yt-thumb="${id}" alt="${label}" loading="lazy">
              <span class="play-badge" aria-hidden="true"><svg viewBox="0 0 10 10" fill="currentColor"><path d="M1 0l9 5-9 5z"/></svg></span>
            </button>`;
          })
          .join("")}</div>`
      : p.gal
        ? `<div class="case-gallery">${p.gal.map((g) => `<img src="img/${g}.webp" alt="${p.t}" loading="lazy">`).join("")}</div>`
        : "";
  caseEl.innerHTML = `
  <div class="case-bar"><div class="wrap"><span class="mono dim">${String(i + 1).padStart(2, "0")} / ${String(P.length).padStart(2, "0")} · ${p.c}</span><button class="btn" id="caseClose">${tr("caseClose")}</button></div></div>
  <div class="case-hero ${p.wide && !yt ? "portrait" : ""} ${yt ? "has-yt" : ""}">${
    yt
      ? `<button type="button" class="case-hero-play" data-yt="${yt}" data-title="${p.t}" aria-label="${tr("watchHere")}">${heroImg}<span class="play-badge" aria-hidden="true"><svg viewBox="0 0 10 10" fill="currentColor"><path d="M1 0l9 5-9 5z"/></svg></span></button>`
      : heroImg
  }</div>
  <div class="wrap">
    <div class="case-body">
      <div><p class="mono dim">${p.c}</p><h2 id="case-title">${p.t}</h2><div class="story">${story.map((s) => `<p>${s}</p>`).join("")}</div></div>
      <aside class="case-side">
        <dl class="facts" style="margin:0;border:0;padding:0;grid-template-columns:1fr">
          <div><dt>${tr("role")}</dt><dd>${p.r}</dd></div><div><dt>${tr("caseWhere")}</dt><dd>${p.loc}</dd></div>${
            p.award ? `<div><dt>${tr("caseRecognition")}</dt><dd style="color:var(--tungsten)">${p.award}</dd></div>` : ""
          }${
            raw.sound
              ? `<div><dt>${tr("creditSound")}</dt><dd>${
                  window.AM && window.AM.t
                    ? window.AM.t("creditSoundBy")
                    : 'Smail Laouchedi · <a href="https://eclipsetone.com" target="_blank" rel="noopener">Eclipse Tone</a>'
                }</dd></div>`
              : ""
          }
        </dl>
        ${
          p.links.length
            ? `<div class="ctas">${p.links
                .map(([l, u], k) => {
                  const id = ytId(u);
                  const label = linkLabel(l);
                  if (id) {
                    return `<button type="button" class="btn ${k ? "" : "solid"}" data-yt="${id}" data-title="${p.t}: ${label}">${label}</button>`;
                  }
                  if (String(u).startsWith("#")) {
                    return `<a class="btn ${k ? "" : "solid"}" href="${u}" data-close-case>${label}</a>`;
                  }
                  return `<a class="btn ${k ? "" : "solid"}" href="${u}" rel="noopener">${label}</a>`;
                })
                .join("")}</div>`
            : ""
        }
      </aside>
    </div>
    ${gallery}
  </div>
  <div class="case-next"><div class="wrap"><button data-next="${n.id}"><span class="mono dim">${tr("caseNext")}</span><span class="t">${n.t} →</span></button></div></div>`;
  bindYtThumbs(caseEl);
  caseEl.querySelector("#caseClose").onclick = closeCase;
  caseEl.querySelector("[data-next]").onclick = () => {
    location.hash = n.id;
  };
  caseEl.querySelectorAll("[data-close-case]").forEach((a) =>
    a.addEventListener("click", () => {
      history.pushState("", "", location.pathname + location.search);
      caseEl.hidden = true;
      document.body.style.overflow = "";
    })
  );
}
function openFromHash() {
  const id = location.hash.slice(1);
  const sig = id && document.getElementById(id);
  if (sig && sig.classList.contains("sig")) {
    if (!caseEl.hidden) {
      caseEl.hidden = true;
      document.body.style.overflow = "";
    }
    return;
  }
  const p = P.find((x) => x.id === id);
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
    if (!player.hidden) closePlayer();
    else if (!caseEl.hidden) closeCase();
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

/* ---------- copy + toast ---------- */
const toast = document.getElementById("toast");
let tt;
function tr(key) {
  return window.AM && window.AM.t ? window.AM.t(key) : key;
}

function say(m) {
  toast.textContent = m;
  toast.hidden = false;
  clearTimeout(tt);
  tt = setTimeout(() => (toast.hidden = true), 1800);
}
function copyText(text, el) {
  const done = () => say(tr("toastCopied"));
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
    say(tr("toastSelect"));
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
    err.textContent = tr("errName");
    form.querySelector("#f-name").focus();
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(mail)) {
    err.textContent = tr("errMail");
    form.querySelector("#f-mail").focus();
    return;
  }
  if (!msg) {
    err.textContent = tr("errMsg");
    form.querySelector("#f-msg").focus();
    return;
  }
  const feel = (d.get("feel") || "").trim();
  if (!feel) {
    err.textContent = tr("errFeel");
    form.querySelector("#f-feel").focus();
    return;
  }
  err.textContent = "";
  const co = (d.get("co") || "").trim();
  const date = (d.get("date") || "").trim();
  const typeLabel = document.querySelector(`.types .chip[data-t="${ptype}"]`)?.textContent.trim() || ptype;
  const text = `Hi Ahmed,\n\nProject: ${typeLabel}\nFrom: ${name}${co ? " · " + co : ""}\nReply to: ${mail}\nShoot date: ${date || "Flexible"}\nBudget: ${d.get("budget")}\n\n${tr("fMsg")}:\n${msg}\n\n${tr("fFeel")}\n${feel}\n`;
  document.getElementById("briefText").textContent = text;
  document.getElementById("mailBrief").href =
    "mailto:ahmedmkrne@gmail.com?subject=" +
    encodeURIComponent(typeLabel + " · " + name) +
    "&body=" +
    encodeURIComponent(text);
  say(tr("toastBrief"));
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

/* ---------- REEL: cinematic scrub with softened camera language ---------- */
const TAKE_KEYS = [
  { label: "take0l", title: "take0t", sub: "take0s", ratio: 2.39, read: "ISO 800 · T2.8 · 23.976", ar: "2.39:1", guides: 0.25 },
  { label: "take1l", title: "take1t", sub: "take1s", ratio: 1.85, read: "ISO 1600 · T2.0 · 23.976", ar: "1.85:1", guides: 0.55 },
  { label: "take2l", title: "take2t", sub: "take2s", ratio: 2.39, read: "ISO 800 · T1.8 · 23.976", ar: "2.39:1", guides: 0.7 },
  { label: "take3l", title: "take3t", sub: "take3s", ratio: 1.33, read: "ISO 400 · T4 · 24.000", ar: "1.33:1", guides: 0.65 },
  { label: "take4l", title: "take4t", sub: "take4s", ratio: 0.8, read: "ISO 3200 · T2.2 · 23.976", ar: "4:5", guides: 0.4 },
  { label: "take5l", title: "take5t", sub: "take5s", ratio: 1.78, read: "ISO 800 · T2.8 · 23.976", ar: "16:9", guides: 0.2 },
];
const TAKES = TAKE_KEYS;

function viewportRatio() {
  const vf = document.getElementById("viewfinder");
  if (!vf || !vf.clientWidth || !vf.clientHeight) return innerWidth / Math.max(1, innerHeight);
  return vf.clientWidth / vf.clientHeight;
}

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
  if (!W || !H) return;
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

let reelBeat = 0;

function setBeat(i, progressWithin = 0) {
  const take = TAKES[i];
  reelBeat = i;
  const imgs = document.querySelectorAll("#vfMedia img");
  imgs.forEach((img, n) => img.classList.toggle("is-active", n === i));
  document.getElementById("takeLabel").textContent = tr(take.label);
  document.getElementById("takeTitle").textContent = tr(take.title);
  document.getElementById("takeSub").textContent = tr(take.sub);
  document.getElementById("camRead").textContent = take.read;
  document.getElementById("arRead").textContent = take.ar;
  document.getElementById("scopeBeat").textContent = String(i + 1).padStart(2, "0");
  document.getElementById("guides").style.opacity = take.guides;

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
  const pin = document.getElementById("reelPin");
  const hudTop = document.getElementById("hudTop");
  const hudBot = document.getElementById("hudBot");
  const takeLabel = document.getElementById("takeLabel");
  const takeTitle = document.getElementById("takeTitle");
  const takeSub = document.getElementById("takeSub");
  const scopeRail = document.getElementById("scopeRail");
  const timelineStrip = document.getElementById("timelineStrip");
  const beatRail = document.getElementById("beatRail");
  const openBrand = document.getElementById("openBrand");
  const heroImg = document.getElementById("heroImg");

  if (!reduce && heroImg && typeof gsap !== "undefined") {
    const narrow = matchMedia("(max-width: 720px)").matches;
    gsap.set(heroImg, { transformOrigin: narrow ? "50% 18%" : "50% 24%" });
    gsap.fromTo(
      heroImg,
      { scale: narrow ? 1.06 : 1.03 },
      { scale: narrow ? 1.1 : 1.06, duration: 24, ease: "none", yoyo: true, repeat: -1 }
    );
    gsap.to(".reveal-line", {
      opacity: 1,
      y: 0,
      duration: 1.05,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.15,
    });
  } else {
    document.querySelectorAll(".reveal-line").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    setBeat(0);
    applyMattes(viewportRatio());
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  if (reduce) {
    gsap.set([hudTop, hudBot, takeLabel, takeTitle, takeSub, scopeRail, timelineStrip, beatRail], {
      opacity: 1,
      y: 0,
    });
    if (openBrand) gsap.set(openBrand, { opacity: 0, pointerEvents: "none" });
    if (pin) pin.classList.add("is-framed");
    setBeat(0);
    applyMattes(2.39);
    return;
  }

  gsap.set([hudTop, hudBot], { opacity: 0, y: 8 });
  gsap.set([takeLabel, takeTitle, takeSub], { opacity: 0, y: 16 });
  gsap.set([scopeRail, timelineStrip, beatRail], { opacity: 0 });
  setBeat(0);
  // Full-bleed first viewport so Ahmed's eyes stay visible before camera framing
  applyMattes(viewportRatio());

  let lastBeat = -1;
  let framed = false;

  ScrollTrigger.create({
    trigger: stage,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.55,
    onUpdate: (self) => {
      const p = self.progress;

      // First ~10%: brand holds, then dissolves into camera UI
      const brandOut = Math.min(1, Math.max(0, (p - 0.02) / 0.08));
      if (openBrand) {
        gsap.set(openBrand, {
          opacity: 1 - brandOut,
          y: brandOut * -28,
          pointerEvents: brandOut > 0.55 ? "none" : "auto",
        });
      }

      const wantFrame = brandOut > 0.35;
      if (wantFrame !== framed && pin) {
        framed = wantFrame;
        pin.classList.toggle("is-framed", framed);
        // Recalc mattes after layout shift
        requestAnimationFrame(() => applyMattes(TAKES[Math.max(0, lastBeat)].ratio));
      }

      // Camera scrub occupies the remaining progress after brand exit
      const scrubP = Math.min(1, Math.max(0, (p - 0.08) / 0.92));
      const beats = TAKES.length;
      const raw = scrubP * beats;
      const i = Math.min(beats - 1, Math.floor(raw));
      const local = raw - i;

      // Softened HUD: present but quieter than brand stage
      const intro = Math.min(1, scrubP / 0.12);
      const soft = 0.55;
      gsap.set(hudTop, { opacity: intro * brandOut * soft, y: 8 * (1 - intro) });
      gsap.set(hudBot, { opacity: intro * brandOut * soft, y: 8 * (1 - intro) });
      gsap.set(takeLabel, { opacity: intro * brandOut, y: 10 * (1 - intro) });
      gsap.set(takeTitle, { opacity: intro * brandOut, y: 16 * (1 - intro) });
      gsap.set(takeSub, { opacity: intro * 0.9 * brandOut, y: 12 * (1 - intro) });
      gsap.set(beatRail, { opacity: intro * brandOut * 0.85 });

      const scopesOn = Math.min(1, Math.max(0, (scrubP - 0.15) / 0.12)) * brandOut * 0.65;
      gsap.set(scopeRail, { opacity: scopesOn });
      const tlOn = Math.min(1, Math.max(0, (scrubP - 0.22) / 0.14)) * brandOut * 0.8;
      gsap.set(timelineStrip, { opacity: tlOn });

      lastBeat = i;
      setBeat(i, local);

      const a = TAKES[i];
      const b = TAKES[Math.min(beats - 1, i + 1)];
      const takeRatio = a.ratio + (b.ratio - a.ratio) * local;
      const own = viewportRatio();
      // Hold full bleed while brand is on; ease into cinematic mattes as framing begins
      const matteBlend = Math.min(1, Math.max(0, (brandOut - 0.15) / 0.55));
      applyMattes(own + (takeRatio - own) * matteBlend);

      const active = document.querySelector("#vfMedia img.is-active");
      if (active) {
        const sc = 1.03 + local * 0.05;
        active.style.transform = `scale(${sc})`;
      }
    },
  });

  addEventListener("resize", () => {
    const i = Math.max(0, lastBeat);
    const framedNow = pin && pin.classList.contains("is-framed");
    applyMattes(framedNow ? TAKES[i].ratio : viewportRatio());
  });
}

/* ---------- offer CTAs preselect project type ---------- */
function selectProjectType(label) {
  const chips = document.querySelectorAll(".types .chip");
  let matched = false;
  chips.forEach((x) => {
    const on = x.dataset.t === label;
    x.setAttribute("aria-pressed", on ? "true" : "false");
    if (on) {
      matched = true;
      ptype = label;
    }
  });
  if (!matched && chips[0]) {
    chips.forEach((x, i) => x.setAttribute("aria-pressed", i === 0 ? "true" : "false"));
    ptype = chips[0].dataset.t;
  }
}

document.querySelectorAll("[data-offer]").forEach((a) =>
  a.addEventListener("click", () => {
    selectProjectType(a.dataset.offer);
  })
);

document.addEventListener("am:lang", () => {
  renderFolio();
  if (caseEl && !caseEl.hidden) {
    const id = location.hash.slice(1);
    const p = P.find((x) => x.id === id);
    if (p) renderCase(p);
  }
  if (typeof setBeat === "function" && TAKES[reelBeat]) {
    setBeat(reelBeat);
  }
});

/* ---------- ambiance: Echoes of Lumen, soft fade, mute in header ---------- */
(function initAmbiance() {
  const audio = document.getElementById("ambiance");
  const btns = [document.getElementById("soundToggle"), document.getElementById("soundToggleSheet")].filter(Boolean);
  if (!audio || !btns.length) return;

  const TARGET = 0.6;
  const FADE_MS = 3200;
  const STORE = "am-ambiance-muted";
  let muted = localStorage.getItem(STORE) === "1";
  let fading = null;
  let started = false;
  let unlockBound = false;

  function labelKey() {
    return muted ? "soundUnmute" : "soundMute";
  }

  function syncUi() {
    const label = tr(labelKey());
    btns.forEach((b) => {
      b.classList.toggle("is-muted", muted);
      b.setAttribute("aria-pressed", muted ? "true" : "false");
      b.setAttribute("aria-label", label);
    });
  }

  function fadeTo(target, ms) {
    if (fading) cancelAnimationFrame(fading);
    const from = audio.volume;
    const t0 = performance.now();
    const dur = Math.max(120, ms);
    function step(now) {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 2.4);
      audio.volume = from + (target - from) * eased;
      if (p < 1) fading = requestAnimationFrame(step);
      else {
        audio.volume = target;
        fading = null;
      }
    }
    fading = requestAnimationFrame(step);
  }

  async function startPlayback() {
    if (started || muted) return;
    try {
      audio.volume = 0;
      await audio.play();
      started = true;
      fadeTo(TARGET, FADE_MS);
      unbindUnlock();
    } catch (_) {
      bindUnlock();
    }
  }

  function onUnlock() {
    if (muted) return;
    startPlayback();
  }

  function bindUnlock() {
    if (unlockBound) return;
    unlockBound = true;
    ["pointerdown", "keydown", "touchstart"].forEach((ev) =>
      document.addEventListener(ev, onUnlock, { passive: true })
    );
  }

  function unbindUnlock() {
    if (!unlockBound) return;
    unlockBound = false;
    ["pointerdown", "keydown", "touchstart"].forEach((ev) =>
      document.removeEventListener(ev, onUnlock)
    );
  }

  function setMuted(next) {
    muted = !!next;
    localStorage.setItem(STORE, muted ? "1" : "0");
    syncUi();
    if (muted) {
      fadeTo(0, 480);
      setTimeout(() => {
        if (muted) audio.pause();
      }, 520);
    } else {
      started = false;
      startPlayback().then(() => {
        if (!audio.paused && audio.volume < TARGET * 0.9) fadeTo(TARGET, 900);
      });
    }
  }

  btns.forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      setMuted(!muted);
    })
  );

  document.addEventListener("am:lang", syncUi);
  syncUi();

  if (muted) {
    audio.pause();
    audio.volume = 0;
  } else {
    startPlayback();
  }
})();

bindYtThumbs();
initReel();
