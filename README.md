# Ahmedmokrane.com

Static site for Ahmed Mokrane — Director & Cinematographer (Montréal).

## What’s here

Camera-scroll redesign: brand-first hero, pinned GSAP ScrollTrigger reel (viewfinder / REC HUD / timeline scrub), work index, films, live call sheet, approach, about, kit, and contact brief.

## Files

- `index.html` — structure
- `styles.css` — design system + layout
- `app.js` — reel ScrollTrigger, work index, case overlay, brief form
- `img/` — project stills and portraits

## Local preview

No build step. From the repo root:

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765`. Fonts and GSAP load from CDN.

## Hosting

Serve the repo root as a static site (e.g. GitHub Pages → Deploy from branch → `/` root). Relative asset paths; no `CNAME` or Actions workflows in this repo yet.
