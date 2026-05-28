import { motion } from 'motion/react';
import shoppingCartImage from '../assets/showing-cart-trolley-shopping-online-sign-graphic.jpg';
import influencerVlogImage from '../assets/influencer-filming-fashion-vlog.jpg';
import sellerLaptopImage from '../assets/person-setting-up-online-store-uploading-products-laptop.jpg';

interface HowItWorksProps {
  activeStep: number;
  setActiveStep: (step: number) => void;
}

export const HowItWorks = ({ activeStep, setActiveStep }: HowItWorksProps) => {
  const steps = [
    {
      num: "01",
      title: "Discover through context.",
      desc: "Scroll a dynamic feed of trusted sellers and creators. Instead of static galleries, see products in action, styled, and used by actual people.",
      image: shoppingCartImage
    },
    {
      num: "02",
      title: "Connect and converse.",
      desc: "Send a message, ask a question on a post, or jump into a live stream. Interaction on Markt feels natural, just like chatting with a vendor in person.",
      image: influencerVlogImage
    },
    {
      num: "03",
      title: "Buy with zero friction.",
      desc: "Our native checkout means you never leave the app. Secure payments, comprehensive buyer protection, and tracking in one tap.",
      image: sellerLaptopImage
    }
  ];

  return (
    <section id="how-it-works" className="py-xl px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tighter text-secondary dark:text-white font-display">How Markt Works</h2>
          <p className="text-tertiary dark:text-zinc-400 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-medium font-sans">A seamless transition from discovering inspiration to buying with total confidence.</p>
        </div>

        <div className="relative h-[760px] sm:h-[700px] md:h-[500px] flex items-center justify-center">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            const isPrev = activeStep === (i + 1) % 3;
            return (
              <motion.div
                key={i}
                className="absolute inset-x-0 top-0 flex flex-col md:flex-row items-center gap-md w-full"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : (isPrev ? -50 : 50),
                  scale: isActive ? 1 : 0.95,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="aspect-square max-w-[300px] sm:max-w-[360px] w-full rounded-lg bg-neutral dark:bg-zinc-900 border border-outline dark:border-zinc-800 shadow-kinetic overflow-hidden group">
                    <motion.div
                      className="w-full h-full"
                      animate={isActive ? { scale: [1.1, 1] } : { scale: 1.1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </motion.div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-black text-primary tabular-nums tracking-tighter font-display">
                    {step.num}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-secondary dark:text-white font-display">{step.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-tertiary dark:text-zinc-400 leading-relaxed font-medium font-sans">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${activeStep === i
                ? "w-12 bg-brand"
                : "w-4 bg-zinc-200 dark:bg-zinc-800"
                }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
