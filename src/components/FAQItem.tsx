import { motion } from 'motion/react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative w-full md:w-[48%] rounded-lg border border-outline dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-sm hover:shadow-kinetic transition-all duration-300 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
        }`}
    >
      {index % 2 === 0 ? (
        <span className="hidden md:block absolute top-8 -left-8 w-3 h-3 rounded-full bg-primary ring-4 ring-white dark:ring-zinc-950" />
      ) : (
        <span className="hidden md:block absolute top-8 -right-8 w-3 h-3 rounded-full bg-primary ring-4 ring-white dark:ring-zinc-950" />
      )}
      <h2 className="text-lg sm:text-xl font-bold tracking-tighter text-secondary dark:text-white font-display">{question}</h2>
      <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-tertiary dark:text-zinc-500 mt-2 font-display">Hover to view answer</p>
      <div className="grid transition-all duration-300 ease-out grid-rows-[0fr] opacity-0 mt-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-focus-within:mt-4">
        <p className="overflow-hidden text-tertiary dark:text-zinc-400 leading-relaxed font-sans font-medium">{answer}</p>
      </div>
    </motion.article>
  );
};
