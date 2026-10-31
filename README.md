# Ahmedmokrane.com

Static site for Ahmed Mokrane: Director and Cinematographer (Montréal).

## What's here

Camera-scroll redesign with an early brand-to-viewfinder scrub, on-site video player, offer funnel, work index, films, live call sheet, approach, about, kit, and contact brief.

## Files

- `index.html`: structure
- `styles.css`: design system and layout
- `app.js`: reel ScrollTrigger, work index, case overlay, on-site player, brief form
- `img/`: project stills and portraits

## Local preview

No build step. From the repo root:

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765`. Fonts and GSAP load from CDN.

## Hosting

Serve the repo root as a static site (e.g. GitHub Pages: Deploy from branch, `/` root). Relative asset paths; no `CNAME` or Actions workflows in this repo yet.
