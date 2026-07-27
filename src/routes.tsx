import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { comingSoonPages } from './constants/content';
import { PageLoader } from './components/PageLoader';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Vision = lazy(() => import('./pages/Vision').then(m => ({ default: m.Vision })));
const HowItWorks = lazy(() => import('./pages/HowItWorks').then(m => ({ default: m.HowItWorks })));
const Features = lazy(() => import('./pages/Features').then(m => ({ default: m.Features })));
const FAQ = lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })));
const ComingSoon = lazy(() => import('./pages/ComingSoon').then(m => ({ default: m.ComingSoon })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse').then(m => ({ default: m.TermsOfUse })));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy').then(m => ({ default: m.CookiePolicy })));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faqs" element={<FAQ />} />
        
        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfUse />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Dynamic Coming Soon Routes */}
        {Object.entries(comingSoonPages).map(([path, title]) => (
          <Route key={path} path={path} element={<ComingSoon title={title} />} />
        ))}

        {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
