import { Vision as VisionSection } from '../components/Vision';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

export const Vision = () => {
  return (
    <Layout>
      <SEO title="Our Vision" description="Learn about the philosophy behind Markt and how we're humanizing e-commerce." />
      <div className="pt-20">
        <VisionSection />
      </div>
    </Layout>
  );
};
