import { MarktLogo } from './Icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 text-zinc-500 dark:text-zinc-400 md:pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 mb-16 ">
        <div className="">
          <div className="flex items-center gap-3 text-zinc-900 dark:text-white mb-6">
            <Link to="/" className="w-8 h-8 rounded-[0.6rem] bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700">
              <MarktLogo className="w-full h-full" />
            </Link>
            <span className="font-bold text-xl tracking-tight">Markt</span>
          </div>
          <p className="md:w-2/3 text-base font-medium leading-relaxed mb-6">
            The next-generation mobile platform for social commerce and real-time selling.
          </p>
        </div>
        <div className='mx-auto grid grid-cols-2 gap-10 sm:gap-12  w-full'>
          <div>
            <h4 className="text-zinc-900 dark:text-white font-bold mb-6 text-base tracking-tight">Platform</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/download-app" className="hover:text-brand transition-colors">Download App</Link></li>
              <li><Link to="/discover" className="hover:text-brand transition-colors">Discover</Link></li>
              <li><Link to="/live-selling" className="hover:text-brand transition-colors">Live Selling</Link></li>
              <li><Link to="/trust-safety" className="hover:text-brand transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-900 dark:text-white font-bold mb-6 text-base tracking-tight">Company</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold text-zinc-400 dark:text-zinc-500">
        <p>© {currentYear} Markt Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
};
