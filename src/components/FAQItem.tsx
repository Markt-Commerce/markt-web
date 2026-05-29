import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 sm:p-8 rounded-lg border transition-all duration-300 ${
          isOpen 
            ? 'bg-white dark:bg-zinc-900 border-primary shadow-kinetic ring-1 ring-primary/10' 
            : 'bg-white dark:bg-zinc-900 border-outline dark:border-zinc-800 hover:border-tertiary/30 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className={`text-lg sm:text-xl font-bold tracking-tight font-display transition-colors ${
            isOpen ? 'text-primary' : 'text-secondary dark:text-zinc-50'
          }`}>
            {question}
          </h3>
          <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-neutral dark:bg-zinc-800 border-outline dark:border-zinc-700 text-tertiary dark:text-zinc-400'
          }`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-base sm:text-lg text-tertiary dark:text-zinc-400 leading-relaxed font-sans font-medium">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.article>
  );
};

