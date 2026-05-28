import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { CTA } from '../components/CTA';
import { rotatingWords } from '../constants/content';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import ComparisonPanel from '../components/ComparisonPanel';

export const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [activeCarouselStep, setActiveCarouselStep] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <SEO
        title="Home"
        description="Markt is a social-first commerce platform where discovery, trust, and checkout happen in one smooth experience."
      />
      <main className="relative z-10 pt-20 sm:pt-24 md:pt-32">
        <Hero wordIndex={wordIndex} rotatingWords={rotatingWords} />
        <HowItWorks activeStep={activeCarouselStep} setActiveStep={setActiveCarouselStep} />

        <ComparisonPanel />

        <Features />
        <CTA />
      </main>
    </Layout>
  );
};
