import { useNavigate } from 'react-router-dom';
import { MarktLogo } from '../components/Icons';
import authenticConnectionsImage from '../assets/beautiful-three-welldressed-afro-american-girls-with-colored-shopping-bags-walking-mall.jpg';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';

interface ComingSoonProps {
  title: string;
}

export const ComingSoon = ({ title }: ComingSoonProps) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="relative min-h-screen text-white font-sans overflow-hidden">
        <SEO title={`${title} - Coming Soon`} description={`The ${title} page is currently in production. Stay tuned for authentic connections and live commerce on Markt.`} />
        <img src={authenticConnectionsImage} alt="Coming soon background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-zinc-950/80" />

        <div className="relative z-10 min-h-screen px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 flex flex-col">
          <section className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-4xl text-center rounded-lg border border-white/20 bg-secondary/10 backdrop-blur-xl p-10 sm:p-20 shadow-kinetic">
              <p className="inline-flex items-center px-4 py-1.5 rounded-md text-xs font-bold tracking-[0.2em] uppercase bg-primary text-white mb-8 font-display">
                Coming Soon
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 font-display drop-shadow-sm">{title}</h1>
              <p className="text-zinc-100/90 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-sans font-medium">
                A premium experience is on the way. This page is currently in production and will launch soon with full functionality.
              </p>
              <button
                onClick={() => navigate('/')}
                className="px-10 py-4 rounded-DEFAULT font-bold bg-white text-secondary hover:scale-[1.02] hover:-translate-y-0.5 transition-all shadow-lg font-display"
              >
                Redirect To Home
              </button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};
