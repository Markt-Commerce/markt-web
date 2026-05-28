import { motion, AnimatePresence } from 'motion/react';
import watchImage from '../assets/closeup-shot-modern-cool-black-digital-watch-with-brown-leather-strap.jpg';
import fashionShoesImage from '../assets/fashion-shoes.jpg';
import graphicTshirtImage from '../assets/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger.jpg';
import handbagImage from '../assets/handbag.jpg';
import { DownloadButton } from './DownloadButton';

interface HeroProps {
  wordIndex: number;
  rotatingWords: string[];
}

export const Hero = ({ wordIndex, rotatingWords }: HeroProps) => {
  return (
    <section className="pt-8 pb-16 sm:pb-20 md:pb-32 px-4 sm:px-6 flex flex-col items-center text-center relative max-w-7xl mx-auto overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] max-w-4xl mx-auto flex flex-col items-center text-secondary dark:text-white font-display"
      >
        <span className="block whitespace-normal sm:whitespace-nowrap">Shopping, the way it</span>
        <span className="text-primary block relative h-[1.25em] overflow-hidden mt-1 w-full max-w-[800px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-x-0 bottom-0 text-center"
            >
              {rotatingWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-tertiary dark:text-zinc-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-4"
      >
        Discover products through people, not just sterile listings. The premiere mobile marketplace for social driven and live commerce.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full"
      >
        <DownloadButton platform="apple" />
        <DownloadButton platform="google" />
      </motion.div>

      {/* Hero Image Grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mt-14 sm:mt-20 md:mt-24 relative"
      >
        <div className="absolute inset-x-0 inset-y-1/4 bg-primary/20 blur-[120px] rounded-[100%] pointer-events-none"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="aspect-[3/4] rounded-lg overflow-hidden shadow-kinetic md:translate-y-12 border border-outline dark:border-zinc-800"
          >
            <img src={fashionShoesImage} alt="Shoes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="aspect-[3/4] rounded-lg overflow-hidden shadow-kinetic border border-outline dark:border-zinc-800"
          >
            <img src={graphicTshirtImage} alt="Fashion" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="aspect-[3/4] rounded-lg overflow-hidden shadow-kinetic md:translate-y-8 border border-outline dark:border-zinc-800"
          >
            <img src={handbagImage} alt="Bag" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
            className="aspect-[3/4] rounded-lg overflow-hidden shadow-kinetic hidden sm:block md:-translate-y-4 border border-outline dark:border-zinc-800"
          >
            <img src={watchImage} alt="Watch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
