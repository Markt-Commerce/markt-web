import { motion } from 'motion/react';
import { AppStoreIcon, PlayStoreIcon } from './Icons';
import { useNavigate } from 'react-router-dom';

interface DownloadButtonProps {
  platform: 'apple' | 'google';
  className?: string;
}

export const DownloadButton = ({ platform, className = '' }: DownloadButtonProps) => {
  const navigate = useNavigate();
  const isApple = platform === 'apple';

  return (
    <div className={`relative ${className}`}>

      <motion.button
        onClick={() => navigate('/download-app')}
        whileHover={{ scale: 1, y: -2 }}
        whileTap={{ scale: 0.98 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className={`group flex items-center justify-center gap-3 px-8 py-4 rounded-DEFAULT transition-all duration-300 min-w-[200px] border border-transparent relative overflow-hidden bg-secondary text-white dark:bg-white dark:text-secondary shadow-kinetic ${className}`}
      >
        {isApple ? <AppStoreIcon /> : <PlayStoreIcon />}
        <div className="text-left flex flex-col justify-center">
          <div className="text-[10px] uppercase font-bold leading-none mb-1 text-zinc-400 dark:text-zinc-500 font-display tracking-wider">
            {isApple ? 'Download on the' : 'GET IT ON'}
          </div>
          <div className="text-lg font-bold leading-none font-display">
            {isApple ? 'App Store' : 'Google Play'}
          </div>
        </div>
      </motion.button>
    </div>
  );
};
