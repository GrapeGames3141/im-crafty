# Grape Games — Minecraft portfolio site

Static site published with GitHub Pages from `main` (root): https://grapegames3141.github.io/im-crafty/
No build step: edit the HTML/CSS and push.

## Pages
- `index.html` — portfolio, project sections (`#phoenix`, `#frontiers`, `#garden`, `#relic`, `#hollow`, `#golem`), for-publishers, about, contact
- `press.html` — media kit: logo, store descriptions, fact sheets, key art downloads
- `privacy.html`, `404.html`, `robots.txt`, `sitemap.xml`

## Adding screenshots and trailers
- Screenshots: in-game captures live in `assets/shots/<project>/` (resized copies of `minecraft-bits/screenshots`). Add a
  `<figure><img src="..." alt="..." loading="lazy"><figcaption>...</figcaption></figure>` to that project's `.gallery`.
  Gallery and feature images open full-size on click.
- Trailers: each project section has a commented-out `<div class="video">` YouTube embed. Put in the video ID and remove the comment markers.
- Only use real in-game captures for screenshots; no concept art or mockups.

Art comes from the `GrapeGames3141/minecraft-bits` repo, resized for the web.
