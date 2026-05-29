import { useState, useEffect } from 'react';
import { HowItWorks as HowItWorksSection } from '../components/HowItWorks';
import { UserJourney } from '../components/UserJourney';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

export const HowItWorks = () => {
  const [activeCarouselStep, setActiveCarouselStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarouselStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <SEO title="How It Works" description="Discover how Markt seamlessly transitions from inspiration to purchase with total confidence." />
      <div className="pt-20 sm:pt-24 md:pt-32">
        <HowItWorksSection activeStep={activeCarouselStep} setActiveStep={setActiveCarouselStep} />
        <UserJourney />
      </div>
    </Layout>
  );
};
