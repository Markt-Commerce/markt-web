Markt is a next-generation e-commerce platform designed to replicate the natural, social
experience of buying and selling in physical markets — but in a digital environment.
Unlike traditional e-commerce platforms that feel transactional and restrictive, Markt focuses
on trust, interaction, and control, giving buyers and sellers a more human and engaging
experience.

Core Concept
Markt blends e-commerce + social interaction.
It allows users to:
• Discover products through people, not just listings
• Interact directly with sellers
• Build familiarity and trust before making purchases
• Participate in real-time buying experiences (e.g. live selling sessions)
The goal is to make online commerce feel as natural as walking through a market, talking to
sellers, and making confident decisions.

## Site

This is a static multi-page site — plain HTML/CSS/JS, no client-side framework or router.
Every route is a real folder with its own `index.html`, so it can be crawled and served
directly from S3 static-website hosting without any rewrite rules.

- `site/` — source: shared partials (`site/partials/`), per-route content
  (`site/pages/<route>/content.html`), the route table (`site/pages.config.js`), and shared
  CSS/JS/images (`site/assets/`).
- `build/build.js` — assembles `site/` into `dist/`: stitches header/footer/meta into each
  route's `index.html`, compiles Tailwind, copies images/JS, and generates `sitemap.xml` /
  `robots.txt`.
- `dist/` — build output. This is what gets deployed.

### Build

```
npm install
npm run build:static
```

### Deploy

Upload the entire `dist/` tree to the S3 bucket root, preserving subfolders (so
`bucket/vision/index.html` etc. exist as real objects). Set the bucket's static-website index
document to `index.html` and its error document to `404.html`.
