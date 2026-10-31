# Ahmedmokrane.com

Static site for Ahmed Mokrane: Director and Cinematographer (Montréal).

## What's here

Premium filmmaker brand experience: cinematic opening reel, editorial portfolio, signature films, live productions, music videos, four disciplines, approach manifesto, about chapters, camera report, Azar Films, and an on-site brief form. Portfolio video plays in a page lightbox.

## Files

- `index.html`: structure, SEO meta, structured data
- `styles.css`: design tokens and layout
- `app.js`: reel ScrollTrigger, portfolio, case overlay, player, brief form
- `img/`: stills and portraits
- `robots.txt`, `sitemap.xml`: crawl hints

## Local preview

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765`. Fonts and GSAP load from CDN.

## Hosting

Serve the repo root as a static site (for example GitHub Pages from `/`). Relative asset paths.
