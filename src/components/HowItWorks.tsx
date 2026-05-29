import { motion } from 'motion/react';
import { howItWorksContent } from '../constants/content';
import shoppingCartImage from '../assets/showing-cart-trolley-shopping-online-sign-graphic.jpg';
import influencerVlogImage from '../assets/influencer-filming-fashion-vlog.jpg';
import sellerLaptopImage from '../assets/person-setting-up-online-store-uploading-products-laptop.jpg';

interface HowItWorksProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

const images = [shoppingCartImage, influencerVlogImage, sellerLaptopImage];

export const HowItWorks = ({ activeStep, setActiveStep }: HowItWorksProps) => {
  return (
    <section id="how-it-works" className="py-xl px-4 sm:px-6 overflow-hidden bg-background dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tighter text-secondary dark:text-zinc-50 font-display">How Markt Works</h2>
            <p className="text-tertiary dark:text-zinc-400 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-medium font-sans">
              A seamless transition from discovering inspiration to buying with total confidence.
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[850px] sm:min-h-[750px] md:min-h-[600px] flex items-center justify-center">
          {howItWorksContent.map((step, i) => {
            const isActive = activeStep === i;
            const isPrev = activeStep === (i + 1) % 3;
            return (
              <motion.div
                key={i}
                className="absolute inset-x-0 top-0 flex flex-col md:flex-row items-center gap-xl w-full"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : (isPrev ? -50 : 50),
                  scale: isActive ? 1 : 0.95,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="aspect-square max-w-[320px] sm:max-w-[420px] w-full rounded-lg bg-neutral dark:bg-zinc-900 border border-outline dark:border-zinc-800 shadow-kinetic overflow-hidden group relative">
                    <motion.div
                      className="w-full h-full"
                      animate={isActive ? { scale: [1.1, 1] } : { scale: 1.1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      <img 
                        src={images[i]} 
                        alt={step.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </motion.div>
                    <div className="absolute top-6 left-6 text-5xl sm:text-7xl font-black text-white mix-blend-difference tabular-nums tracking-tighter font-display opacity-50">
                      {step.num}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-8 text-center md:text-left">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-secondary dark:text-zinc-50 font-display">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-tertiary dark:text-zinc-400 leading-relaxed font-medium font-sans">
                      {step.desc}
                    </p>
                  </div>
                  
                  <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {step.features.map((feature) => (
                      <li 
                        key={feature}
                        className="px-4 py-2 rounded-full bg-neutral dark:bg-zinc-800 border border-outline dark:border-zinc-700 text-sm font-bold text-secondary dark:text-zinc-50 font-display shadow-sm"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 hidden md:block">
                    <button 
                      onClick={() => setActiveStep((i + 1) % 3)}
                      className="group flex items-center gap-2 text-primary font-bold font-display uppercase tracking-widest text-xs hover:gap-4 transition-all"
                    >
                      Next Step
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 gap-4">
          {howItWorksContent.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ease-out ${activeStep === i
                ? "w-16 bg-primary"
                : "w-6 bg-outline dark:bg-zinc-800 hover:bg-tertiary/30 dark:hover:bg-zinc-700"
                }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

