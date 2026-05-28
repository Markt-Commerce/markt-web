import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
}

export const SEO = ({ title, description, canonical }: SEOProps) => {
  const siteTitle = 'Markt - Authentic Social Commerce';
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultDescription = 'Discover products through people. Markt is the premiere mobile marketplace for social driven and live commerce.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};
