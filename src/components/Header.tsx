import { motion } from 'motion/react';
import { Sun, Moon, X, Menu } from 'lucide-react';
import { MarktLogo } from './Icons';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  toggleMenu: () => void;
  mobileMenuOpen: boolean;
}

export const Header = ({ darkMode, setDarkMode, toggleMenu, mobileMenuOpen }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4"
    >
      <div className="bg-white/80 dark:bg-secondary/80 backdrop-blur-xl border border-outline dark:border-zinc-800 shadow-kinetic flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-xl w-full max-w-4xl ring-1 ring-black/5 dark:ring-white/10 transition-all">
        <Link 
          to="/"
          className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-DEFAULT bg-white dark:bg-secondary flex items-center justify-center shadow-sm overflow-hidden border border-outline dark:border-zinc-700 group-hover:scale-105 transition-transform">
            <MarktLogo className="w-full h-full" />
          </div>
          <span className="font-bold text-2xl tracking-tighter hidden sm:block font-display">Markt</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-neutral dark:bg-transparent dark:hover:bg-zinc-800 transition-colors text-tertiary dark:text-zinc-400"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <motion.button 
            onClick={() => navigate('/download-app')}
            animate={{ scale: [1, 1.05, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 0.2 }
            }}
            className="hidden sm:flex bg-secondary dark:bg-white text-white dark:text-secondary px-6 py-3 rounded-DEFAULT font-bold text-sm transition-all shadow-kinetic relative border border-transparent font-display"
          >
            <motion.div
              initial={{ scale: 1, opacity: 0.4 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-primary/20 rounded-DEFAULT -z-10"
            />
            Get App
          </motion.button>
          <button
            onClick={toggleMenu}
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};
