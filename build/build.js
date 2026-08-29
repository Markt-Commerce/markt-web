import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import pages, { siteUrl, siteTitle, defaultDescription } from '../site/pages.config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const DIST = path.join(ROOT, 'dist');

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function read(relPath) {
  return fs.readFileSync(path.join(SITE, relPath), 'utf8');
}

function applyVars(html, vars) {
  if (!vars) return html;
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.split(`{{${key}}}`).join(value),
    html
  );
}

const header = read('partials/header.html');
const mobileMenu = read('partials/mobile-menu.html');
const footer = read('partials/footer.html');

function renderPage({ title, description, canonicalPath, content, extraScripts = [], showNav = true }) {
  const fullTitle = `${title} | ${siteTitle}`;
  const desc = description || defaultDescription;
  const canonicalTag = canonicalPath
    ? `<link rel="canonical" href="${siteUrl}${canonicalPath}" />\n    <meta property="og:url" content="${siteUrl}${canonicalPath}" />`
    : '';
  const defaultScripts = ['analytics.js'];
  const scripts = [...new Set([...defaultScripts, ...extraScripts])];
  const scriptsTag = scripts.map((s) => `<script src="/assets/js/${s}" defer></script>`).join('\n    ');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>${escapeAttr(fullTitle)}</title>
    <meta name="title" content="${escapeAttr(fullTitle)}" />
    <meta name="description" content="${escapeAttr(desc)}" />
    ${canonicalTag}

    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeAttr(fullTitle)}" />
    <meta property="og:description" content="${escapeAttr(desc)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(fullTitle)}" />
    <meta name="twitter:description" content="${escapeAttr(desc)}" />

    ${read('partials/head-meta.html')}
    <link rel="stylesheet" href="/assets/css/main.css" />

    <script>
      (function () {
        try {
          var saved = localStorage.getItem('darkMode');
          var dark = saved !== null ? saved === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (dark) document.documentElement.classList.add('dark');
        } catch (e) {}
      })();
    </script>
  </head>
  <body class="min-h-screen bg-background dark:bg-zinc-950 text-secondary dark:text-zinc-50 font-sans transition-colors duration-300 overflow-x-hidden selection:bg-primary selection:text-white pb-10 md:pb-0">
    <div class="fixed inset-0 z-0 pointer-events-none flex justify-center">
      <div class="w-full max-w-7xl h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>

    ${showNav ? header : ''}
    ${showNav ? mobileMenu : ''}

    ${content}

    ${showNav ? footer : ''}

    <script src="/assets/js/dark-mode.js" defer></script>
    <script src="/assets/js/nav.js" defer></script>
    <script src="/assets/js/reveal.js" defer></script>
    ${scriptsTag}
  </body>
</html>
`;
}

function outDir(slug) {
  return slug === '' ? DIST : path.join(DIST, slug);
}

function buildPages() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  for (const page of pages) {
    const rawContent = read(page.content);
    const content = applyVars(rawContent, page.vars);
    const title = applyVars(page.title, page.vars);
    const description = applyVars(page.description, page.vars);
    const canonicalPath = `/${page.slug ? page.slug + '/' : ''}`;

    const html = renderPage({
      title,
      description,
      canonicalPath,
      content,
      extraScripts: page.extraScripts,
    });

    const dir = outDir(page.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
  }

  // 404 page: written directly as dist/404.html, no canonical (also set as the S3 error document).
  const notFoundContent = read('pages/not-found/content.html');
  const notFoundHtml = renderPage({
    title: '404 - Page Not Found',
    description: "The page you are looking for doesn't exist. Return to Markt to discover authentic social commerce.",
    canonicalPath: null,
    content: notFoundContent,
  });
  fs.writeFileSync(path.join(DIST, '404.html'), notFoundHtml);
}

function copyAssets() {
  fs.cpSync(path.join(SITE, 'assets/img'), path.join(DIST, 'assets/img'), { recursive: true });
  fs.cpSync(path.join(SITE, 'assets/js'), path.join(DIST, 'assets/js'), { recursive: true });
}

function buildCss() {
  execSync(
    `npx @tailwindcss/cli -i "${path.join(SITE, 'assets/css/input.css')}" -o "${path.join(DIST, 'assets/css/main.css')}" --content "${path.join(DIST, '**/*.html')}" --minify`,
    { stdio: 'inherit', cwd: ROOT }
  );
}

function buildSeoFiles() {
  const urls = ['/', ...pages.filter((p) => p.slug).map((p) => `/${p.slug}/`)];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${siteUrl}${u}</loc>\n  </url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, 'robots.txt'), robots);
}

buildPages();
copyAssets();
buildCss();
buildSeoFiles();

console.log(`Built ${pages.length + 1} pages into ${path.relative(ROOT, DIST)}/`);
