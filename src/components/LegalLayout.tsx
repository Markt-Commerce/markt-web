import { ReactNode } from 'react';
import { Layout } from './Layout';
import { SEO } from './SEO';

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated: string;
}

export const LegalLayout = ({ children, title, lastUpdated }: LegalLayoutProps) => {
  return (
    <Layout>
      <SEO title={title} description={`${title} for Markt Commerce. Last updated: ${lastUpdated}`} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 relative z-10">
        <header className="mb-12 border-b border-outline dark:border-zinc-800 pb-8">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-secondary dark:text-white font-display mb-4 uppercase">
            {title}
          </h1>
          <p className="text-tertiary dark:text-zinc-500 font-display font-bold uppercase tracking-widest text-sm">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none 
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:font-display [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-secondary [&_h2]:dark:text-white [&_h2]:tracking-tight
          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:font-display [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-secondary [&_h3]:dark:text-white
          [&_p]:text-tertiary [&_p]:dark:text-zinc-400 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:font-sans [&_p]:font-medium
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-tertiary [&_ul]:dark:text-zinc-400
          [&_li]:mb-2
          [&_strong]:text-secondary [&_strong]:dark:text-white [&_strong]:font-bold
          [&_a]:text-primary [&_a]:underline [&_a]:decoration-primary/30 hover:[&_a]:decoration-primary transition-all
        ">
          {children}
        </div>
      </div>
    </Layout>
  );
};
