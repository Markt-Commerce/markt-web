import { useNavigate } from 'react-router-dom';
import { MarktLogo } from '../components/Icons';
import { FAQItem } from '../components/FAQItem';
import { faqItems } from '../constants/content';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';

export const FAQ = () => {
  const navigate = useNavigate();

  return (
    <Layout showNav={false}>
      <SEO title="FAQs" description="Have questions? We have answers. Everything you need to know about Markt." />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative z-10">
        <div className="flex items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-DEFAULT bg-white dark:bg-zinc-900 overflow-hidden border border-outline dark:border-zinc-700 shadow-sm">
              <MarktLogo className="w-full h-full" />
            </div>
            <span className="text-2xl font-bold tracking-tighter font-display text-secondary dark:text-white">Markt</span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-DEFAULT text-sm font-bold bg-secondary text-white dark:bg-white dark:text-secondary hover:scale-[1.02] transition-transform shadow-sm font-display"
          >
            Back Home
          </button>
        </div>

        <section className="relative overflow-hidden rounded-lg border border-outline dark:border-zinc-800 bg-neutral/50 dark:bg-zinc-900/40 backdrop-blur-sm p-8 sm:p-12 mb-12">
          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4 font-display">Support</p>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tighter mb-6 text-secondary dark:text-white font-display">Frequently Asked Questions</h1>
            <p className="text-tertiary dark:text-zinc-400 text-lg max-w-2xl font-medium font-sans">
              Hover each question to reveal details. On desktop, items alternate right and left for a premium editorial layout.
            </p>
          </div>
        </section>

        <section className="relative space-y-6 pb-20">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline dark:bg-zinc-800 -translate-x-1/2" />
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
};

