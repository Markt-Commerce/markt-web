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
    { name: 'Marketplace', href: '/features' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
          animate={{ opacity: 1, clipPath: 'circle(150% at right top)' }}
          exit={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-zinc-950 text-white flex flex-col items-center justify-center overflow-hidden"
          onMouseMove={onMouseMove}
        >
          {/* Custom moving cursor */}
          <motion.div
            className="hidden lg:block absolute w-8 h-8 rounded-full bg-brand mix-blend-screen pointer-events-none z-50 blur-sm"
            animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors z-50 shadow-xl border border-white/10"
          >
            <X size={24} className="sm:w-8 sm:h-8" />
          </button>

          <div className="flex flex-col gap-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black items-center text-center z-10 w-full px-6 font-display">
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1), ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                className="w-full relative group overflow-visible"
              >
                <button
                  onClick={() => { navigate(link.href); onClose(); }}
                  className="block relative z-10 hover:text-primary transition-colors duration-500 py-4 flex items-center justify-center gap-6 w-full tracking-tighter"
                >
                  <span className="group-hover:-translate-x-4 transition-transform duration-500">{link.name}</span>
                  <ArrowRight strokeWidth={3} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-12 transition-all duration-500 w-12 h-12 md:w-16 md:h-16 text-primary" />
                </button>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.02, 1] 
              }}
              transition={{ 
                opacity: { delay: 0.4, duration: 0.8 },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="bg-white text-secondary hover:bg-primary hover:text-white transition-all duration-300 px-12 py-6 rounded-DEFAULT mt-10 text-2xl font-black shadow-kinetic relative font-display tracking-tighter hover:-translate-y-1"
              onClick={() => { navigate('/download-app'); onClose(); }}
            >
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 bg-white rounded-DEFAULT -z-10"
              />
              Download App
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
