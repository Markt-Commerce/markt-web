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
    slug: 'privacy-policy/logistics-partners',
    title: 'Delivery Partner Privacy Policy',
    description: 'Privacy Policy for delivery partners using the Markt Logistics app. Last updated: October 21, 2026',
    content: 'pages/privacy-policy/logistics-partners/content.html',
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Use',
    description: 'Terms of Use for Markt Commerce. Last updated: October 15, 2026',
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
  {
    slug: 'trust-safety',
    title: 'Trust & Safety',
    description: 'Learn how Markt protects buyers and sellers with identity checks, moderation, refunds, and safer discovery.',
    content: 'pages/trust-safety/content.html',
  },
  {
    slug: 'delete-account',
    title: 'Delete Account',
    description: 'Learn how to delete your account on Markt and remove your personal information from our platform.',
    content: 'pages/delete-account/content.html',
  },
  comingSoon('careers', 'Careers'),

  // --- Markt Business ------------------------------------------------------
  {
    slug: 'business',
    title: 'Markt Business',
    description: 'Discover producers, manufacturers and suppliers through one connected commerce platform. Find partners, post procurement requests and coordinate transactions on Markt.',
    content: 'pages/business/home/content.html',
    extraScripts: ['faq-accordion.js'],
  },
  {
    slug: 'business/producers',
    title: 'Markt Business for Producers',
    description: 'Your produce deserves a bigger market. Reach manufacturers and business buyers, list your supply and respond to procurement requests on Markt.',
    content: 'pages/business/producers/content.html',
    extraScripts: ['faq-accordion.js'],
  },
  {
    slug: 'business/manufacturers',
    title: 'Markt Business for Manufacturers',
    description: 'Find the suppliers your business needs. Source raw materials, packaging and industrial inputs and post procurement requests on Markt.',
    content: 'pages/business/manufacturers/content.html',
  },
  {
    slug: 'business/suppliers',
    title: 'Markt Business for Suppliers',
    description: 'List packaging, machinery, equipment and inputs with business terms, and respond to businesses looking for what you supply.',
    content: 'pages/business/suppliers/content.html',
  },
  {
    slug: 'business/how-it-works',
    title: 'How Markt Business Works',
    description: 'From creating a business account to completing a transaction: how producers, manufacturers and suppliers trade on Markt.',
    content: 'pages/business/how-it-works/content.html',
  },
  {
    slug: 'business/about',
    title: 'About Markt Business',
    description: 'Markt Business extends Markt to commerce between businesses, connecting producers, manufacturers and suppliers on one platform.',
    content: 'pages/business/about/content.html',
  },
  {
    slug: 'business/faqs',
    title: 'Markt Business FAQs',
    description: 'Answers for businesses: registering, finding suppliers, procurement requests, negotiation, payments, delivery and pricing.',
    content: 'pages/business/faqs/content.html',
    extraScripts: ['faq-accordion.js'],
  },
  {
    slug: 'business/contact',
    title: 'Contact Markt Business',
    description: 'Get in touch about getting your business on Markt, partnerships, verification or feedback.',
    content: 'pages/business/contact/content.html',
  },
  {
    slug: 'business/register',
    title: 'Get Started with Markt Business',
    description: 'Set up your business on Markt with your existing Markt account. Free to join.',
    content: 'pages/business/register/content.html',
  },
  {
    slug: 'business/login',
    title: 'Markt Business Login',
    description: 'Log in to Markt Business with your Markt account.',
    content: 'pages/business/login/content.html',
  },
];
