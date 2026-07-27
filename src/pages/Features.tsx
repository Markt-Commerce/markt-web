import { Features as FeaturesSection } from '../components/Features';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

export const Features = () => {
  return (
    <Layout>
      <SEO title="Marketplace Features" description="Explore the ultimate marketplace app engineered to empower buyers and sellers." />
      <div className="pt-20 sm:pt-24 md:pt-32">
        <FeaturesSection />
      </div>
    </Layout>
  );
};
