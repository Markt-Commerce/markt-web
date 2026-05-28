import { motion } from 'motion/react';
import { Users, ShieldCheck, LayoutGrid } from 'lucide-react';
import authenticConnectionsImage from '../assets/beautiful-three-welldressed-afro-american-girls-with-colored-shopping-bags-walking-mall.jpg';
import interactiveLiveSellingImage from '../assets/cute-african-american-woman-making-video-her-blog-using-tripod-mounted-digital-camera-young-female-blogger-vlogger-camera.jpg';
import cleanInterfaceImage from '../assets/close-up-delivery-person-giving-parcel-client.jpg';

export const Features = () => {
  return (
    <>
      <section id="features" className="py-xl px-6 bg-neutral/50 dark:bg-zinc-900/20 border-t border-outline dark:border-zinc-800 hidden md:block">
        <div className="max-w-6xl mx-auto">
          <div className="mb-xl space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-secondary dark:text-white font-display">The ultimate marketplace app.</h2>
            <p className="text-tertiary dark:text-zinc-400 max-w-2xl text-xl md:text-2xl font-medium text-balance font-sans">Engineered from the ground up to empower buyers and sellers with modern tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md auto-rows-[340px]">
            {/* Bento Box 1: Large Social Feature */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 group bg-white dark:bg-zinc-900 rounded-lg border border-outline dark:border-zinc-800 overflow-hidden relative flex flex-col justify-between hover:shadow-kinetic transition-all duration-300 min-h-[340px]">
              <img src={authenticConnectionsImage} alt="Lifestyle Shopping" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent"></div>
              <div className="relative z-10 max-w-md p-md flex flex-col h-full justify-between">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-md flex items-center justify-center mb-8 border border-white/10 shadow-lg">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-white font-display tracking-tight">Authentic Connections</h3>
                  <p className="text-zinc-200 text-lg font-medium leading-relaxed font-sans">Profiles feel personal, not transactional. Build an audience, establish trust, and turn one-time buyers into loyal followers.</p>
                </div>
              </div>
            </motion.div>

            {/* Bento Box 2: Secure Payments */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group bg-white dark:bg-zinc-900 rounded-lg border border-outline dark:border-zinc-800 overflow-hidden relative flex flex-col justify-between p-md hover:shadow-kinetic transition-all duration-300 min-h-[340px]">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-neutral dark:bg-zinc-800 text-secondary dark:text-zinc-100 rounded-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white font-display tracking-tight">Total Safety</h3>
                <p className="text-tertiary dark:text-zinc-400 font-medium font-sans">Protected payments, encrypted chats, and meticulously verified sellers keep you safe.</p>
              </div>
            </motion.div>

            {/* Bento Box 3: Minimal UX */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group bg-white dark:bg-zinc-900 rounded-lg border border-outline dark:border-zinc-800 overflow-hidden relative flex flex-col justify-between hover:shadow-kinetic transition-all duration-300 min-h-[340px]">
              <img src={cleanInterfaceImage} alt="Minimal Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-white/80 dark:via-zinc-900/80 to-transparent"></div>
              <div className="relative z-10 p-md flex flex-col h-full justify-between">
                <div className="w-14 h-14 bg-white dark:bg-zinc-800 text-secondary dark:text-zinc-100 rounded-md flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform border border-outline dark:border-white/10">
                  <LayoutGrid size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white font-display tracking-tight">Clean Interface</h3>
                  <p className="text-tertiary dark:text-zinc-400 font-medium font-sans">No intrusive ads. No clutter. Just a buttery smooth design that stays out of your way.</p>
                </div>
              </div>
            </motion.div>

            {/* Bento Box 4: Live Selling Wide */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="md:col-span-2 group bg-secondary text-white rounded-lg overflow-hidden relative flex flex-col justify-between p-md shadow-xl border border-zinc-800 dark:border-zinc-700 min-h-[340px]">
              <img src={interactiveLiveSellingImage} alt="E-commerce Experience" className="absolute top-0 right-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
              <div className="relative z-10 max-w-lg mt-auto">
                <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md mb-6 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  Live Feature
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-5 shadow-sm text-white font-display tracking-tight">Interactive Live Selling.</h3>
                <p className="text-zinc-300 text-lg font-medium drop-shadow font-sans">The physical market, brought to your phone. Showcase items in real-time and let buyers ask questions before adding them to cart directly from the stream.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fallback layout for mobile bento grid */}
      <section className="py-xl px-4 sm:px-6 bg-neutral dark:bg-zinc-900 border-t border-outline dark:border-zinc-800 md:hidden pb-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tighter text-secondary dark:text-white font-display">App Features</h2>
          <p className="text-lg sm:text-xl text-tertiary dark:text-zinc-400 font-sans">Built to empower.</p>
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-950 rounded-lg p-8 shadow-sm border border-outline dark:border-zinc-800">
            <Users size={32} className="text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-3 text-secondary dark:text-white font-display">Authentic Connections</h3>
            <p className="text-tertiary dark:text-zinc-400 font-medium font-sans">Build an audience, establish trust, and turn buyers into followers.</p>
          </div>
          <div className="bg-white dark:bg-zinc-950 rounded-lg p-8 shadow-sm border border-outline dark:border-zinc-800">
            <ShieldCheck size={32} className="text-secondary dark:text-white mb-6" />
            <h3 className="text-2xl font-bold mb-3 text-secondary dark:text-white font-display">Total Safety</h3>
            <p className="text-tertiary dark:text-zinc-400 font-medium font-sans">Protected payments, encrypted chats, and verified sellers.</p>
          </div>
          <div className="bg-secondary dark:bg-zinc-100 dark:text-secondary text-white rounded-lg p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md mb-6 shadow-md">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div> Live
            </div>
            <h3 className="text-2xl font-bold mb-3 font-display">Live Selling</h3>
            <p className="text-zinc-400 dark:text-secondary font-medium font-sans">Showcase items in real-time and take orders natively in-stream.</p>
          </div>
        </div>
      </section>
    </>
  );
};
