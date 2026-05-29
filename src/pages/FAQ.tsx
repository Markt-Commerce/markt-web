import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MarktLogo } from '../components/Icons';
import { FAQItem } from '../components/FAQItem';
import { faqCategories } from '../constants/content';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { motion } from 'motion/react';

export const FAQ = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

  const currentCategory = faqCategories.find(c => c.id === activeCategory) || faqCategories[0];

  return (
    <Layout>
      <SEO title="FAQs" description="Have questions? We have answers. Everything you need to know about Markt." />
      
      <div className="bg-background dark:bg-zinc-950 min-h-screen pt-20 sm:pt-24 md:pt-32">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar / Category Selection */}
            <aside className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-primary font-display">Support Center</p>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-secondary dark:text-zinc-50 font-display leading-none">
                  Common Questions
                </h1>
                <p className="text-tertiary dark:text-zinc-400 text-lg font-medium font-sans">
                  Everything you need to know about getting started, buying, and selling on Markt.
                </p>
              </div>

              <nav className="flex flex-col gap-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center justify-between p-4 rounded-md font-bold font-display transition-all ${
                      activeCategory === category.id
                        ? 'bg-secondary dark:bg-zinc-50 text-white dark:text-secondary shadow-kinetic'
                        : 'bg-white dark:bg-zinc-900 border border-outline dark:border-zinc-800 text-tertiary dark:text-zinc-400 hover:border-secondary dark:hover:border-primary hover:text-secondary dark:hover:text-zinc-50'
                    }`}
                  >
                    {category.name}
                    {activeCategory === category.id && (
                      <motion.div layoutId="activeCat" className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="p-8 rounded-lg bg-neutral dark:bg-zinc-900 border border-outline dark:border-zinc-800 space-y-4">
                <h4 className="font-bold text-secondary dark:text-zinc-50 font-display">Still need help?</h4>
                <p className="text-sm text-tertiary dark:text-zinc-400 font-medium font-sans">Our support team is available 24/7 to assist you with any inquiries.</p>
                <button className="w-full py-3 rounded-DEFAULT bg-white dark:bg-zinc-800 border border-outline dark:border-zinc-700 font-bold text-xs uppercase tracking-widest text-secondary dark:text-zinc-50 hover:bg-secondary dark:hover:bg-zinc-100 hover:text-white dark:hover:text-secondary hover:border-secondary transition-all font-display">
                  Contact Support
                </button>
              </div>
            </aside>

            {/* FAQ Items */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                <div className="pb-8 border-b border-outline dark:border-zinc-800 mb-8">
                  <h2 className="text-2xl font-black tracking-tight text-secondary dark:text-zinc-50 font-display">
                    {currentCategory.name}
                  </h2>
                </div>
                
                <div className="flex flex-col gap-4">
                  {currentCategory.items.map((item, index) => (
                    <FAQItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </main>
      </div>
    </Layout>
  );
};


