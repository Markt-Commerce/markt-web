import { ReactNode, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';
import { useDarkMode } from '../hooks/useDarkMode';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export const Layout = ({ children, showNav = true }: LayoutProps) => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background dark:bg-zinc-950 text-secondary dark:text-zinc-50 font-sans transition-colors duration-300 overflow-x-hidden selection:bg-primary selection:text-white pb-10 md:pb-0">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {showNav && (
        <>
          <Header 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            toggleMenu={toggleMenu} 
            mobileMenuOpen={mobileMenuOpen} 
          />

          <MobileMenu 
            isOpen={mobileMenuOpen} 
            onClose={closeMenu} 
            mousePos={mousePos} 
            onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })} 
          />
        </>
      )}

      {children}

      {showNav && <Footer />}
    </div>
  );
};
