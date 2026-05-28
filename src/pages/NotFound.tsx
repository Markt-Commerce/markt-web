import { useNavigate } from 'react-router-dom';
import { MarktLogo } from '../components/Icons';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO title="404 - Page Not Found" description="The page you are looking for doesn't exist. Return to Markt to discover authentic social commerce." />
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center py-20 relative z-10">
        <div className="w-20 h-20 mb-10 rounded-lg bg-neutral dark:bg-zinc-900 flex items-center justify-center shadow-sm overflow-hidden border border-outline dark:border-zinc-700">
          <MarktLogo className="w-12 h-12" />
        </div>
        <h1 className="text-7xl sm:text-9xl font-black tracking-tighter mb-6 text-primary font-display">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-secondary dark:text-white font-display">Page Not Found</h2>
        <p className="text-tertiary dark:text-zinc-400 text-lg sm:text-xl max-w-md mb-12 leading-relaxed font-sans font-medium">
          The page you are looking for doesn't exist or has been moved to a new URL.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-10 py-4 rounded-DEFAULT font-bold bg-secondary text-white dark:bg-white dark:text-secondary hover:scale-[1.05] hover:-translate-y-1 transition-all shadow-kinetic font-display"
        >
          Return Home
        </button>
      </div>
    </Layout>
  );
};
