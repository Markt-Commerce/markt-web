import { motion, Variants } from 'motion/react';
import buySafelyImage from '../assets/african-female-happily-shopping-online-using-laptop-smartphone-while-holding-her-credit-card.jpg';
import { DownloadButton } from './DownloadButton';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const CTA = () => {
  return (
    <section className="py-xl px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-7xl mx-auto rounded-lg p-8 sm:p-10 md:p-24 text-center shadow-kinetic relative overflow-hidden bg-secondary border border-outline dark:border-zinc-800"
      >
        <img
          src={buySafelyImage}
          alt="Store background"
          className="absolute inset-0 z-0 w-full h-full object-cover object-[center_25%] md:object-center opacity-65 transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 z-1 bg-linear-to-br from-secondary/70 via-secondary/55 to-secondary/45"></div>
        <div className="absolute inset-0 z-2 bg-linear-to-t from-secondary/45 via-secondary/20 to-primary/20"></div>

        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 z-3 w-96 h-96 bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 z-3 w-96 h-96 bg-primary/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter font-display leading-tight">Buy safely.<br />Sell authentically.</h2>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            Join the platform that is changing the way mobile commerce feels. Available now on iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
            <DownloadButton platform="apple" />
            <DownloadButton platform="google" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
