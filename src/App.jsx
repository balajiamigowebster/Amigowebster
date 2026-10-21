import React, { useState, useEffect } from 'react';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HomeBentoShowcase from './components/HomeBentoShowcase';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import LocalSEOSection from './components/LocalSEOSection';
import ParallaxShowcase from './components/ParallaxShowcase';
import PricingSection from './components/PricingSection';
import PortfolioSection from './components/PortfolioSection';
import FAQAndContactSection from './components/FAQAndContactSection';
import Footer from './components/Footer';
import { SEO_PAGES } from './data/siteData';

function getPageFromPath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean === '/website' || clean === '/blog-grid' || clean === '/portfolio') return 'portfolio';
  if (clean === '/helpdesk') return 'helpdesk';
  if (clean === '/billing-software') return 'billing';
  if (clean === '/quick-commerce-website') return 'quickcommerce';
  if (clean === '/about-us' || clean === '/about-us-2' || clean === '/about') return 'about';
  const match = Object.entries(SEO_PAGES).find(([, cfg]) => cfg.path === clean);
  return match ? match[0] : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => {
      setActivePage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const isProjectPage = ['portfolio', 'helpdesk', 'billing', 'quickcommerce'].includes(activePage);

  const handleNavigate = (pageId) => {
    // Redirect any legacy chennai/medavakkam click to home local-seo-hub section
    if (pageId === 'chennai' || pageId === 'medavakkam') {
      setActivePage('home');
      window.history.pushState({}, '', '/');
      setTimeout(() => {
        const el = document.getElementById('local-seo-hub');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }

    const targetConfig = SEO_PAGES[pageId] || SEO_PAGES.home;
    setActivePage(pageId);
    if (window.location.pathname !== targetConfig.path) {
      window.history.pushState({}, '', targetConfig.path);
    }

    // Separate dedicated pages scroll to top
    if (
      pageId === 'home' ||
      pageId === 'about' ||
      pageId === 'portfolio' ||
      pageId === 'helpdesk' ||
      pageId === 'billing' ||
      pageId === 'quickcommerce'
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Section navigation (Services, Pricing, Contact) scrolls to section once rendered
    const sectionMap = {
      services: 'services',
      pricing: 'pricing',
      contact: 'contact'
    };

    if (sectionMap[pageId]) {
      setTimeout(() => {
        const el = document.getElementById(sectionMap[pageId]);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FD] text-slate-900">
      {/* Dynamic SEO Meta, Canonical & JSON-LD Manager */}
      <SEOHead activePage={activePage} />

      {/* Sticky Header & Navigation */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-grow">
        {activePage === 'about' ? (
          /* Dedicated Separate About Us Page */
          <>
            <AboutSection onNavigate={handleNavigate} />
            <FAQAndContactSection />
          </>
        ) : isProjectPage ? (
          /* Dedicated Separate Projects Page (WebSite 34+, IT Help Desk, Billing Software, Quick Commerce) */
          <>
            <PortfolioSection
              isFullPage={true}
              activeSubpage={activePage}
              onNavigate={handleNavigate}
            />
            <FAQAndContactSection />
          </>
        ) : (
          /* Home Page with Full Keywords ("Website Development in Chennai" & "Website Development in Medavakkam") */
          <>
            <HeroSection activePage="home" onNavigate={handleNavigate} />
            <HomeBentoShowcase onNavigate={handleNavigate} />
            <LocalSEOSection activePage="home" onNavigate={handleNavigate} />
            <ServicesSection onNavigate={handleNavigate} />
            <ParallaxShowcase onNavigate={handleNavigate} />
            <PortfolioSection isFullPage={false} activeSubpage="portfolio" onNavigate={handleNavigate} />
            <PricingSection />
            <FAQAndContactSection />
          </>
        )}
      </main>

      {/* Rich SEO Footer with Local NAP & Area Links */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
