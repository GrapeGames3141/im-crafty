# Grape Games — Minecraft portfolio site

Static site published with GitHub Pages from `main` (root): https://grapegames3141.github.io/im-crafty/
No build step: edit the HTML/CSS and push.

## Pages
- `index.html` — portfolio, project sections (`#garden`, `#golem`), for-publishers, about, contact
- `press.html` — media kit: logo, store descriptions, fact sheets, key art downloads
- `privacy.html`, `404.html`, `robots.txt`, `sitemap.xml`

## Adding screenshots and trailers
- Screenshots: save 1920×1080 JPGs in `assets/garden/` or `assets/golem/` and add a
  `<figure><img src="..." alt="..." loading="lazy"><figcaption>...</figcaption></figure>` to that project's `.gallery`.
  Gallery and feature images open full-size on click.
- Trailers: each project section has a commented-out `<div class="video">` YouTube embed. Put in the video ID and remove the comment markers.
- Once real screenshots replace the concept art, remove the "concept art" notes in `index.html` and `press.html`.

Art comes from the `GrapeGames3141/minecraft-bits` repo, resized for the web.
