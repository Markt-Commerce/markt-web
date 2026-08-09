// Route table for build/build.js. slug '' = site root (dist/index.html).
// Every entry becomes a real folder with its own index.html: dist/<slug>/index.html.
const siteTitle = 'Markt - Authentic Social Commerce';
const defaultDescription = 'Discover products through people. Markt is the premiere mobile marketplace for social driven and live commerce.';

function comingSoon(slug, title) {
  return {
    slug,
    title: `${title} - Coming Soon`,
    description: `The ${title} page is currently in production. Stay tuned for authentic connections and live commerce on Markt.`,
    content: 'pages/coming-soon/content.html',
    vars: { PAGE_TITLE: title },
  };
}

export const siteUrl = 'https://marktcommerce.com';
export { siteTitle, defaultDescription };

export default [
  {
    slug: '',
    title: 'Home',
    description: 'Markt is a social-first commerce platform where discovery, trust, and checkout happen in one smooth experience.',
    content: 'pages/home/content.html',
    extraScripts: ['rotating-words.js', 'how-it-works-carousel.js'],
  },
  {
    slug: 'vision',
    title: 'Our Vision',
    description: "Learn about the philosophy behind Markt and how we're humanizing e-commerce.",
    content: 'pages/vision/content.html',
  },
  {
    slug: 'how-it-works',
    title: 'How It Works',
    description: 'Discover how Markt seamlessly transitions from inspiration to purchase with total confidence.',
    content: 'pages/how-it-works/content.html',
    extraScripts: ['how-it-works-carousel.js'],
  },
  {
    slug: 'features',
    title: 'Marketplace Features',
    description: 'Explore the ultimate marketplace app engineered to empower buyers and sellers.',
    content: 'pages/features/content.html',
  },
  {
    slug: 'faqs',
    title: 'FAQs',
    description: 'Have questions? We have answers. Everything you need to know about Markt.',
    content: 'pages/faqs/content.html',
    extraScripts: ['faq-accordion.js'],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Privacy Policy for Markt Commerce. Last updated: May 04, 2026',
    content: 'pages/privacy-policy/content.html',
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Use',
    description: 'Terms of Use for Markt Commerce. Last updated: April 28, 2026',
    content: 'pages/terms-of-service/content.html',
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    description: 'Cookie Policy for Markt Commerce. Last updated: May 03, 2026',
    content: 'pages/cookie-policy/content.html',
  },
  comingSoon('download-app', 'Download App'),
  comingSoon('discover', 'Discover'),
  comingSoon('live-selling', 'Live Selling'),
  comingSoon('trust-safety', 'Trust & Safety'),
  comingSoon('careers', 'Careers'),
];
