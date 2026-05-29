import { MarktLogo } from './Icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background dark:bg-zinc-950 border-t border-outline dark:border-zinc-800 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 text-tertiary dark:text-zinc-400 md:pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 text-secondary dark:text-zinc-50 mb-6">
            <Link to="/" className="w-8 h-8 rounded-[0.6rem] bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm overflow-hidden ring-1 ring-outline dark:ring-zinc-700">
              <MarktLogo className="w-full h-full" />
            </Link>
            <span className="font-bold text-xl tracking-tight font-display">Markt</span>
          </div>
          <p className="md:w-2/3 text-base font-medium leading-relaxed mb-6 font-sans">
            The next-generation mobile platform for social commerce and real-time selling.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-10 sm:gap-12 w-full">
          <div>
            <h4 className="text-secondary dark:text-zinc-50 font-bold mb-6 text-base tracking-tight font-display uppercase tracking-widest text-xs">Platform</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium font-sans">
              <li><Link to="/download-app" className="hover:text-primary transition-colors">Download App</Link></li>
              <li><Link to="/discover" className="hover:text-primary transition-colors">Discover</Link></li>
              <li><Link to="/live-selling" className="hover:text-primary transition-colors">Live Selling</Link></li>
              <li><Link to="/trust-safety" className="hover:text-primary transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-secondary dark:text-zinc-50 font-bold mb-6 text-base tracking-tight font-display uppercase tracking-widest text-xs">Company</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium font-sans">
              <li><Link to="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-outline dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold text-tertiary/60 dark:text-zinc-500 font-sans">
        <p>© {currentYear} Markt Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-secondary dark:hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-secondary dark:hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-secondary dark:hover:text-white transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
};
