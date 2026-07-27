import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { userJourneyContent } from '../constants/content';
import { UserPlus, Search, MessageCircle, ShoppingBag, Truck } from 'lucide-react';

const iconMap: Record<string, any> = {
  'user-plus': UserPlus,
  'search': Search,
  'message-circle': MessageCircle,
  'shopping-bag': ShoppingBag,
  'truck': Truck,
};

export const UserJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-xl px-4 sm:px-6 bg-background dark:bg-zinc-950 overflow-hidden relative">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary font-display mb-6">Experience Flow</p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-secondary dark:text-zinc-50 font-display leading-[0.9]">
              The <span className="text-primary italic">Markt</span> Path
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Progress Line Container */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-outline/50 dark:bg-zinc-800/50 -translate-x-1/2 overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-primary"
            />
          </div>

          <div className="flex flex-col gap-32 relative">
            {userJourneyContent.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;

              return (
                <div key={step.step} className="relative">
                  {/* Step Node Marker */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 top-10 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-4 border-primary shadow-[0_0_15px_rgba(233,76,42,0.3)]"
                    />
                  </div>

                  <div className={`flex flex-col md:flex-row items-start w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                    >
                      <div className="group relative p-8 rounded-lg bg-white dark:bg-zinc-900 border border-outline dark:border-zinc-800 shadow-sm hover:shadow-kinetic hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                        {/* Background Step Number */}
                        <div className="absolute -top-6 -right-4 text-9xl font-black text-neutral/40 dark:text-zinc-800/40 font-display select-none pointer-events-none group-hover:text-primary/5 transition-colors">
                          {step.step}
                        </div>

                        <div className="relative z-10 flex flex-col gap-4">
                          <div className="w-12 h-12 rounded-lg bg-neutral dark:bg-zinc-800 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-500">
                            <Icon className="w-6 h-6" />
                          </div>

                          <h3 className="text-2xl font-black tracking-tight text-secondary dark:text-zinc-50 font-display">
                            {step.title}
                          </h3>

                          <p className="text-tertiary dark:text-zinc-400 font-medium font-sans leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Spacer for desktop layout */}
                    <div className="hidden md:block md:w-[10%]" />
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Call */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <button
            className="px-12 py-5 rounded-DEFAULT bg-secondary dark:bg-white text-white dark:text-secondary font-bold text-sm uppercase tracking-[0.2em] font-display shadow-kinetic hover:bg-primary transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Start Your Story</span>
            <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
