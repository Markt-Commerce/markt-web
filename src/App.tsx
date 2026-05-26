import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Video, 
  Users, 
  ArrowRight, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  HeartHandshake, 
  Eye, 
  PlayCircle,
  LayoutGrid,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { AppStoreIcon, PlayStoreIcon, MarktLogo } from './components/Icons';
import watchImage from './assets/closeup-shot-modern-cool-black-digital-watch-with-brown-leather-strap.jpg';
import fashionShoesImage from './assets/fashion-shoes.jpg';
import graphicTshirtImage from './assets/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger.jpg';
import handbagImage from './assets/handbag.jpg';
import shoppingCartImage from './assets/showing-cart-trolley-shopping-online-sign-graphic.jpg';
import influencerVlogImage from './assets/influencer-filming-fashion-vlog.jpg';
import sellerLaptopImage from './assets/person-setting-up-online-store-uploading-products-laptop.jpg';
import authenticConnectionsImage from './assets/beautiful-three-welldressed-afro-american-girls-with-colored-shopping-bags-walking-mall.jpg';
import interactiveLiveSellingImage from './assets/cute-african-american-woman-making-video-her-blog-using-tripod-mounted-digital-camera-young-female-blogger-vlogger-camera.jpg';
import cleanInterfaceImage from './assets/close-up-delivery-person-giving-parcel-client.jpg';
import buySafelyImage from './assets/african-female-happily-shopping-online-using-laptop-smartphone-while-holding-her-credit-card.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const rotatingWords = ["should feel.", "makes sense.", "builds trust.", "connects us."];

const comingSoonPages: Record<string, string> = {
  '/download-app': 'Download App',
  '/discover': 'Discover',
  '/live-selling': 'Live Selling',
  '/trust-safety': 'Trust & Safety',
  '/careers': 'Careers',
  '/privacy-policy': 'Privacy Policy',
  '/terms-of-service': 'Terms of Service',
};

const faqItems = [
  {
    question: 'What is Markt?',
    answer: 'Markt is a social-first commerce platform where discovery, trust, and checkout happen in one smooth experience.',
  },
  {
    question: 'How do buyers stay protected?',
    answer: 'Every order is backed by secure payment processing, transparent tracking, and buyer-protection workflows.',
  },
  {
    question: 'Can I sell through live sessions?',
    answer: 'Yes. Sellers can showcase products in real time, answer questions instantly, and convert interest into purchase quickly.',
  },
  {
    question: 'Is Markt available on iOS and Android?',
    answer: 'Yes. Markt is built for both platforms, with a mobile-first experience optimized for performance and trust.',
  },
  {
    question: 'How do I contact support?',
    answer: 'Use the in-app support channels once live, or reach out through our official communication channels in the footer.',
  },
  {
    question: 'Do I need extra tools to start selling?',
    answer: 'No heavy setup is required. You can onboard quickly and manage listings, audience interactions, and orders in one place.',
  },
];

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path;
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCarouselStep, setActiveCarouselStep] = useState(0);
  const [currentPath, setCurrentPath] = useState(normalizePath(window.location.pathname));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarouselStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);
  const navigateTo = (path: string) => {
    const nextPath = normalizePath(path);
    if (nextPath !== currentPath) {
      window.history.pushState({}, '', nextPath);
      setCurrentPath(nextPath);
    }
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFaqPage = currentPath === '/faqs';
  const comingSoonTitle = comingSoonPages[currentPath];
  const isComingSoonPage = Boolean(comingSoonTitle);

  if (isFaqPage) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300 px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm">
                <MarktLogo className="w-full h-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Markt</span>
            </div>
            <button
              onClick={() => navigateTo('/')}
              className="px-5 py-2.5 rounded-full text-sm font-bold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:scale-[1.02] transition-transform"
            >
              Back Home
            </button>
          </div>

          <section className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-8 sm:p-12 mb-10">
            <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand mb-3">Support</p>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Frequently Asked Questions</h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl">
                Hover each question to reveal details. On desktop, items alternate right and left for a premium editorial layout.
              </p>
            </div>
          </section>

          <section className="relative space-y-5 sm:space-y-6">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />
            {faqItems.map((item, index) => (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative w-full md:w-[48%] rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}
              >
                {index % 2 === 0 ? (
                  <span className="hidden md:block absolute top-8 -left-8 w-3 h-3 rounded-full bg-brand ring-4 ring-white dark:ring-zinc-950" />
                ) : (
                  <span className="hidden md:block absolute top-8 -right-8 w-3 h-3 rounded-full bg-brand ring-4 ring-white dark:ring-zinc-950" />
                )}
                <h2 className="text-lg sm:text-xl font-bold tracking-tight">{item.question}</h2>
                <p className="text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-2">Hover to view answer</p>
                <div className="grid transition-all duration-300 ease-out grid-rows-[0fr] opacity-0 mt-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 group-focus-within:mt-4">
                  <p className="overflow-hidden text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.answer}</p>
                </div>
              </motion.article>
            ))}
          </section>
        </div>
      </div>
    );
  }

  if (isComingSoonPage) {
    return (
      <div className="relative min-h-screen text-zinc-900 dark:text-zinc-50 font-sans overflow-hidden">
        <img src={authenticConnectionsImage} alt="Coming soon background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-zinc-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-zinc-950/80" />
        <div className="relative z-10 min-h-screen px-4 sm:px-6 py-8 sm:py-10 flex flex-col">
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/95 overflow-hidden ring-1 ring-white/40 shadow-sm">
                <MarktLogo className="w-full h-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Markt</span>
            </div>
            <button
              onClick={() => navigateTo('/')}
              className="px-5 py-2.5 rounded-full text-sm font-bold bg-white text-zinc-900 hover:scale-[1.02] transition-transform"
            >
              Back Home
            </button>
          </div>

          <section className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-4xl text-center rounded-[2rem] sm:rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-xl p-10 sm:p-14 shadow-2xl">
              <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-brand text-white mb-5">
                Coming Soon
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">{comingSoonTitle}</h1>
              <p className="text-zinc-100/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                A premium experience is on the way. This page is currently in production and will launch soon with full functionality.
              </p>
              <button
                onClick={() => navigateTo('/')}
                className="px-8 py-3 rounded-full font-bold bg-white text-zinc-900 hover:scale-[1.02] transition-transform"
              >
                Redirect To Home
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300 overflow-x-hidden selection:bg-brand selection:text-white pb-10 md:pb-0">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Professional Floating Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4"
      >
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-black/5 dark:shadow-white/5 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-[2rem] sm:rounded-[2.5rem] w-full max-w-4xl ring-1 ring-black/5 dark:ring-white/10 transition-all">
          <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2">
            <div className="w-10 h-10 rounded-[0.8rem] bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700">
              <MarktLogo className="w-full h-full" />
            </div>
            <span className="font-bold text-2xl tracking-tight hidden sm:block">Markt</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:bg-transparent dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="hidden sm:flex bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95 shadow-sm">
              Get App
            </button>
            <button 
              onClick={toggleMenu} 
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at right top)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at right top)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-zinc-950 text-white flex flex-col items-center justify-center overflow-hidden"
            onMouseMove={(e) => {
              setMousePos({ x: e.clientX, y: e.clientY });
            }}
          >
            {/* Custom moving cursor */}
            <motion.div 
              className="hidden lg:block absolute w-8 h-8 rounded-full bg-brand mix-blend-screen pointer-events-none z-50 blur-sm"
              animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

            <button 
              onClick={closeMenu}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors z-50 shadow-xl border border-white/10"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>

            <div className="flex flex-col gap-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black items-center text-center z-10 w-full px-6">
              {[
                { name: 'Vision', href: '#what-is-markt' },
                { name: 'How it Works', href: '#how-it-works' },
                { name: 'Marketplace', href: '#features' }
              ].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + (i * 0.1), ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                  className="w-full relative group overflow-visible"
                >
                  <a href={link.href} onClick={closeMenu} className="block relative z-10 hover:text-brand transition-colors duration-500 py-4 flex items-center justify-center gap-6">
                    <span className="group-hover:-translate-x-4 transition-transform duration-500">{link.name}</span>
                    <ArrowRight strokeWidth={3} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-12 transition-all duration-500 w-12 h-12 md:w-16 md:h-16 text-brand" />
                  </a>
                </motion.div>
              ))}
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                className="bg-white text-zinc-950 hover:bg-brand hover:text-white transition-colors duration-300 px-12 py-6 rounded-full mt-10 text-2xl font-black shadow-2xl">
                Download App
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-32 sm:pt-36">
        {/* Mobile App Hero Section */}
        <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 md:pt-16 md:pb-32 px-4 sm:px-6 flex flex-col items-center text-center relative max-w-6xl mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold mb-8 shadow-sm"
          >
            <span className="text-brand flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-brand">New</span> Authentic Social Market
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="block whitespace-normal sm:whitespace-nowrap">Shopping, the way it</span>
            <span className="text-brand block relative h-[1.25em] overflow-hidden mt-1 w-full max-w-[800px]">
              <AnimatePresence>
                <motion.span
                  key={wordIndex}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-x-0 bottom-0 text-center"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-4"
          >
            Discover products through people, not just sterile listings. The premiere mobile marketplace for social driven and live commerce.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full"
          >
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-[1.5rem] hover:scale-[1.02] transition-transform shadow-xl shadow-black/10 dark:shadow-white/10 border border-transparent dark:border-white/20">
              <AppStoreIcon />
              <div className="text-left flex flex-col justify-center">
                <div className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 leading-none mb-1">Download on the</div>
                <div className="text-lg font-black leading-none">App Store</div>
              </div>
            </a>
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-black dark:text-white px-8 py-4 rounded-[1.5rem] hover:scale-[1.02] transition-transform shadow-sm">
              <PlayStoreIcon />
              <div className="text-left flex flex-col justify-center">
                <div className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400 leading-none mb-1">GET IT ON</div>
                <div className="text-lg font-black leading-none">Google Play</div>
              </div>
            </a>
          </motion.div>

          {/* Hero Image Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mt-14 sm:mt-20 md:mt-24 relative"
          >
            <div className="absolute inset-x-0 inset-y-1/4 bg-brand/20 blur-[120px] rounded-[100%] pointer-events-none"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
                className="aspect-[3/4] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-2xl md:translate-y-12"
              >
                <img src={fashionShoesImage} alt="Shoes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
                className="aspect-[3/4] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <img src={graphicTshirtImage} alt="Fashion" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
                className="aspect-[3/4] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-2xl md:translate-y-8"
              >
                <img src={handbagImage} alt="Bag" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
                className="aspect-[3/4] rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden shadow-2xl hidden sm:block md:-translate-y-4"
              >
                <img src={watchImage} alt="Watch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* The Vision section */}
        <section id="what-is-markt" className="py-20 md:py-24 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={fadeUp}
             >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 tracking-tight">Not just products. <span className="text-zinc-400 dark:text-zinc-500 block sm:inline mt-2 sm:mt-0">People.</span></h2>
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                Markt is a next-generation platform designed to replicate the natural, social experience of buying and selling in physical markets. Unlike traditional e-commerce platforms that feel transactional and restrictive, we focus on <strong className="text-zinc-900 dark:text-white">trust, interaction, and control</strong>.
              </p>
             </motion.div>
          </div>
        </section>

        {/* Refined How It Works (Carousel) */}
        <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 sm:mb-20 md:mb-24">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 tracking-tight">How Markt Works</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-medium">A seamless transition from discovering inspiration to buying with total confidence.</p>
            </div>

            <div className="relative h-[760px] sm:h-[700px] md:h-[500px] flex items-center justify-center">
              {[
                { 
                  num: "01", 
                  title: "Discover through context.", 
                  desc: "Scroll a dynamic feed of trusted sellers and creators. Instead of static galleries, see products in action, styled, and used by actual people.",
                  image: shoppingCartImage
                },
                { 
                  num: "02", 
                  title: "Connect and converse.", 
                  desc: "Send a message, ask a question on a post, or jump into a live stream. Interaction on Markt feels natural, just like chatting with a vendor in person.",
                  image: influencerVlogImage
                },
                { 
                  num: "03", 
                  title: "Buy with zero friction.", 
                  desc: "Our native checkout means you never leave the app. Secure payments, comprehensive buyer protection, and tracking in one tap.",
                  image: sellerLaptopImage
                }
              ].map((step, i) => {
                const isActive = activeCarouselStep === i;
                const isPrev = activeCarouselStep === (i + 1) % 3;
                return (
                  <motion.div 
                    key={i} 
                    className="absolute inset-x-0 top-0 flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-24 w-full"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : (isPrev ? -50 : 50),
                      scale: isActive ? 1 : 0.95,
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                     <div className="w-full md:w-1/2 flex justify-center">
                        <div className="aspect-square max-w-[300px] sm:max-w-[360px] w-full rounded-[2rem] sm:rounded-[3rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden group">
                           <motion.div 
                             className="w-full h-full"
                             animate={isActive ? { scale: [1.1, 1] } : { scale: 1.1 }}
                             transition={{ duration: 1.5, ease: "easeOut" }}
                           >
                              <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                           </motion.div>
                        </div>
                     </div>
                     <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <div className="text-5xl sm:text-6xl md:text-7xl font-black text-brand tabular-nums tracking-tighter">
                          {step.num}
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{step.title}</h3>
                        <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                          {step.desc}
                        </p>
                     </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-12 gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveCarouselStep(i)}
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    activeCarouselStep === i 
                      ? "w-12 bg-brand" 
                      : "w-4 bg-zinc-200 dark:bg-zinc-800"
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features / Modern Marketplace (Bento Grid) */}
        <section id="features" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/20 border-t border-zinc-200 dark:border-zinc-800 hidden md:block">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20 space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">The ultimate marketplace app.</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-xl md:text-2xl font-medium text-balance">Engineered from the ground up to empower buyers and sellers with modern tools.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
               {/* Bento Box 1: Large Social Feature */}
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 group bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden relative flex flex-col justify-between hover:shadow-2xl transition-all duration-300 min-h-[340px]">
                  <img src={authenticConnectionsImage} alt="Lifestyle Shopping" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                  <div className="relative z-10 max-w-md p-10 flex flex-col h-full justify-between">
                     <div className="w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-lg">
                       <Users size={28} />
                     </div>
                     <div>
                       <h3 className="text-3xl font-bold mb-4 text-white">Authentic Connections</h3>
                       <p className="text-zinc-200 text-lg font-medium leading-relaxed">Profiles feel personal, not transactional. Build an audience, establish trust, and turn one-time buyers into loyal followers.</p>
                     </div>
                  </div>
               </motion.div>

               {/* Bento Box 2: Secure Payments */}
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden relative flex flex-col justify-between p-10 hover:shadow-xl transition-all duration-300 min-h-[340px]">
                  <div className="relative z-10">
                     <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                       <ShieldCheck size={28} />
                     </div>
                     <h3 className="text-2xl font-bold mb-4">Total Safety</h3>
                     <p className="text-zinc-600 dark:text-zinc-400 font-medium">Protected payments, encrypted chats, and meticulously verified sellers keep you safe.</p>
                  </div>
               </motion.div>

               {/* Bento Box 3: Minimal UX */}
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden relative flex flex-col justify-between hover:shadow-xl transition-all duration-300 min-h-[340px]">
                  <img src={cleanInterfaceImage} alt="Minimal Product" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-white/80 dark:via-zinc-900/80 to-transparent"></div>
                  <div className="relative z-10 p-10 flex flex-col h-full justify-between">
                     <div className="w-14 h-14 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform border border-zinc-200 dark:border-white/10">
                       <LayoutGrid size={28} />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold mb-4">Clean Interface</h3>
                       <p className="text-zinc-600 dark:text-zinc-400 font-medium">No intrusive ads. No clutter. Just a buttery smooth design that stays out of your way.</p>
                     </div>
                  </div>
               </motion.div>

               {/* Bento Box 4: Live Selling Wide */}
               <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="md:col-span-2 group bg-zinc-950 text-white rounded-[2.5rem] overflow-hidden relative flex flex-col justify-between p-10 shadow-xl border border-zinc-800 dark:border-zinc-200 min-h-[340px]">
                  <img src={interactiveLiveSellingImage} alt="E-commerce Experience" className="absolute top-0 right-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent pointer-events-none"></div>
                  <div className="relative z-10 max-w-lg mt-auto">
                     <div className="inline-flex items-center gap-2 bg-red-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-xl mb-6 shadow-md">
                       <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                       Live Feature
                     </div>
                     <h3 className="text-3xl md:text-4xl font-bold mb-5 shadow-sm">Interactive Live Selling.</h3>
                     <p className="text-zinc-300 text-lg font-medium drop-shadow">The physical market, brought to your phone. Showcase items in real-time and let buyers ask questions before adding them to cart directly from the stream.</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Fallback layout for mobile bento grid */}
        <section className="py-20 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 md:hidden pb-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">App Features</h2>
            <p className="text-lg sm:text-xl text-zinc-600">Built to empower.</p>
          </div>
          <div className="space-y-6">
             <div className="bg-white dark:bg-zinc-950 rounded-[2rem] p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <Users size={32} className="text-brand mb-6" />
                <h3 className="text-2xl font-bold mb-3">Authentic Connections</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">Build an audience, establish trust, and turn buyers into followers.</p>
             </div>
             <div className="bg-white dark:bg-zinc-950 rounded-[2rem] p-8 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <ShieldCheck size={32} className="text-zinc-900 dark:text-white mb-6" />
                <h3 className="text-2xl font-bold mb-3">Total Safety</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">Protected payments, encrypted chats, and verified sellers.</p>
             </div>
             <div className="bg-zinc-950 dark:bg-zinc-100 dark:text-black text-white rounded-[2rem] p-8 shadow-xl">
                <div className="inline-flex items-center gap-2 bg-red-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-xl mb-6 shadow-md">
                   <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div> Live
                </div>
                <h3 className="text-2xl font-bold mb-3">Live Selling</h3>
                <p className="text-zinc-400 dark:text-zinc-600 font-medium">Showcase items in real-time and take orders natively in-stream.</p>
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-6xl mx-auto rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-24 text-center shadow-2xl relative overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            <img src={buySafelyImage} alt="Store background" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay transition-transform duration-1000 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-brand/40 mix-blend-multiply"></div>
            
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight">Buy safely.<br/>Sell authentically.</h2>
              <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium mb-10 sm:mb-12 max-w-2xl mx-auto">
                Join the platform that is changing the way mobile commerce feels. Available now on iOS and Android.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                  <a href="#" className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-xl">
                    <AppStoreIcon />
                    <div className="text-left flex flex-col justify-center">
                      <div className="text-xs uppercase font-bold text-zinc-400 dark:text-zinc-500 leading-none mb-1">Download on</div>
                      <div className="text-lg font-black leading-none">App Store</div>
                    </div>
                  </a>
                  <a href="#" className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-xl">
                    <PlayStoreIcon />
                    <div className="text-left flex flex-col justify-center">
                      <div className="text-xs uppercase font-bold text-zinc-500 leading-none mb-1">GET IT ON</div>
                      <div className="text-lg font-black leading-none">Google Play</div>
                    </div>
                  </a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 text-zinc-500 dark:text-zinc-400 md:pb-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 text-zinc-900 dark:text-white mb-6">
              <div className="w-8 h-8 rounded-[0.6rem] bg-white dark:bg-zinc-900 flex items-center justify-center shadow-sm overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-700">
                <MarktLogo className="w-full h-full" />
              </div>
              <span className="font-bold text-xl tracking-tight">Markt</span>
            </div>
            <p className="max-w-sm text-base font-medium leading-relaxed mb-6">
              The next-generation mobile platform for social commerce and real-time selling.
            </p>
          </div>
          <div>
            <h4 className="text-zinc-900 dark:text-white font-bold mb-6 text-base tracking-tight">Platform</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="/download-app" onClick={(e) => { e.preventDefault(); navigateTo('/download-app'); }} className="hover:text-brand transition-colors">Download App</a></li>
              <li><a href="/discover" onClick={(e) => { e.preventDefault(); navigateTo('/discover'); }} className="hover:text-brand transition-colors">Discover</a></li>
              <li><a href="/live-selling" onClick={(e) => { e.preventDefault(); navigateTo('/live-selling'); }} className="hover:text-brand transition-colors">Live Selling</a></li>
              <li><a href="/trust-safety" onClick={(e) => { e.preventDefault(); navigateTo('/trust-safety'); }} className="hover:text-brand transition-colors">Trust & Safety</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-900 dark:text-white font-bold mb-6 text-base tracking-tight">Company</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="/faqs" onClick={(e) => { e.preventDefault(); navigateTo('/faqs'); }} className="hover:text-brand transition-colors">FAQs</a></li>
              <li><a href="/careers" onClick={(e) => { e.preventDefault(); navigateTo('/careers'); }} className="hover:text-brand transition-colors">Careers</a></li>
              <li><a href="/privacy-policy" onClick={(e) => { e.preventDefault(); navigateTo('/privacy-policy'); }} className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" onClick={(e) => { e.preventDefault(); navigateTo('/terms-of-service'); }} className="hover:text-brand transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold text-zinc-400 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Markt Technologies. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
