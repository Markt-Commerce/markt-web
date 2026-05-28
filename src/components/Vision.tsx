import { motion, Variants } from 'motion/react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const Vision = () => {
  return (
    <section id="what-is-markt" className="py-xl bg-neutral/50 dark:bg-zinc-900/30 border-y border-outline dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 tracking-tighter text-secondary dark:text-white font-display">
            Not just products. <span className="text-tertiary dark:text-zinc-500 block sm:inline mt-2 sm:mt-0">People.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-tertiary dark:text-zinc-400 leading-relaxed font-medium font-sans">
            Markt is a next-generation platform designed to replicate the natural, social experience of buying and selling in physical markets. Unlike traditional e-commerce platforms that feel transactional and restrictive, we focus on <strong className="text-secondary dark:text-zinc-100">trust, interaction, and control</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
