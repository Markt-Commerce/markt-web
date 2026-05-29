import { MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  mousePos: { x: number; y: number };
  onMouseMove: (e: MouseEvent) => void;
}

export const MobileMenu = ({ isOpen, onClose, mousePos, onMouseMove }: MobileMenuProps) => {
  const navigate = useNavigate();

  const menuLinks = [
    { name: 'Vision', href: '/vision' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Marketplace', href: '/features' },
    { name: 'FAQs', href: '/faqs' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
          animate={{ opacity: 1, clipPath: 'circle(150% at right top)' }}
          exit={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-100 bg-zinc-950 text-white flex flex-col items-center justify-center overflow-y-auto px-6 py-20 sm:py-32"
          onMouseMove={onMouseMove}
        >
          {/* Custom moving cursor (hidden on touch) */}
          <motion.div
            className="hidden lg:block absolute left-0 top-0 w-8 h-8 rounded-full bg-primary mix-blend-screen pointer-events-none z-50 blur-sm"
            animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-zinc-900/80 backdrop-blur-md text-primary hover:bg-zinc-800 transition-all z-110 shadow-xl border border-white/10 active:scale-95"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>

          <nav className="flex flex-col gap-2 items-center text-center z-10 w-full max-w-4xl">
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                className="w-full"
              >
                <button
                  onClick={() => { navigate(link.href); onClose(); }}
                  className="group relative py-4 sm:py-2 flex items-center justify-center gap-4 sm:gap-6 w-full text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter font-display hover:text-primary transition-colors duration-300"
                >
                  <span className="group-hover:-translate-x-2 sm:group-hover:-translate-x-4 transition-transform duration-500">
                    {link.name}
                  </span>
                  <ArrowRight
                    strokeWidth={4}
                    className="w-8 h-8 hidden md:flex sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-8 sm:-translate-x-12 transition-all duration-500 text-primary"
                  />
                </button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 sm:mt-12"
            >
              <button
                onClick={() => { navigate('/download-app'); onClose(); }}
                className="relative px-8 sm:px-12 py-4 sm:py-6 rounded-xl bg-primary text-white text-xl sm:text-2xl font-black shadow-kinetic hover:-translate-y-1 active:scale-95 transition-all duration-300 font-display tracking-tight overflow-hidden group"
              >
                <span className="relative z-10">Get the App</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          </nav>

          {/* Bottom Social/Info Links (Simple & Clean) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute md:hidden bottom-10 left-0 right-0 px-6 flex justify-center gap-8 text-zinc-500 text-xs font-black uppercase tracking-widest font-display pointer-events-none md:pointer-events-auto"
          >
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">Twitter / X</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

