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
import BlogSection from './components/BlogSection';
import FAQAndContactSection from './components/FAQAndContactSection';
import Footer from './components/Footer';
import { SEO_PAGES } from './data/siteData';

function parseRouteFromPath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  if (clean.startsWith('/blog/')) {
    const slug = clean.replace('/blog/', '').trim();
    return { page: 'blog', blogSlug: slug || null };
  }
  if (clean === '/blog') return { page: 'blog', blogSlug: null };
  if (clean === '/website' || clean === '/blog-grid' || clean === '/portfolio') {
    return { page: 'portfolio', blogSlug: null };
  }
  if (clean === '/helpdesk') return { page: 'helpdesk', blogSlug: null };
  if (clean === '/billing-software') return { page: 'billing', blogSlug: null };
  if (clean === '/quick-commerce-website') return { page: 'quickcommerce', blogSlug: null };
  if (clean === '/about-us' || clean === '/about-us-2' || clean === '/about') {
    return { page: 'about', blogSlug: null };
  }
  const match = Object.entries(SEO_PAGES).find(([, cfg]) => cfg.path === clean);
  return { page: match ? match[0] : 'home', blogSlug: null };
}

export default function App() {
  const initialRoute = parseRouteFromPath(window.location.pathname);
  const [activePage, setActivePage] = useState(initialRoute.page);
  const [activeBlogSlug, setActiveBlogSlug] = useState(initialRoute.blogSlug);

  useEffect(() => {
    const onPopState = () => {
      const parsed = parseRouteFromPath(window.location.pathname);
      setActivePage(parsed.page);
      setActiveBlogSlug(parsed.blogSlug);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const isProjectPage = ['portfolio', 'helpdesk', 'billing', 'quickcommerce'].includes(activePage);

  const handleOpenBlog = (slug) => {
    setActivePage('blog');
    setActiveBlogSlug(slug);
    const targetPath = slug ? `/blog/${slug}` : '/blog';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (pageId) => {
    setActiveBlogSlug(null);

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

    if (
      pageId === 'home' ||
      pageId === 'about' ||
      pageId === 'blog' ||
      pageId === 'portfolio' ||
      pageId === 'helpdesk' ||
      pageId === 'billing' ||
      pageId === 'quickcommerce'
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
      <SEOHead activePage={activePage} activeBlogSlug={activeBlogSlug} />

      {/* Sticky Header & Navigation */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-grow">
        {activePage === 'about' ? (
          <>
            <AboutSection onNavigate={handleNavigate} />
            <FAQAndContactSection />
          </>
        ) : activePage === 'blog' ? (
          <>
            <BlogSection
              isFullPage={true}
              activeBlogSlug={activeBlogSlug}
              onNavigate={handleNavigate}
              onOpenBlog={handleOpenBlog}
            />
            <FAQAndContactSection />
          </>
        ) : isProjectPage ? (
          <>
            <PortfolioSection
              isFullPage={true}
              activeSubpage={activePage}
              onNavigate={handleNavigate}
            />
            <FAQAndContactSection />
          </>
        ) : (
          <>
            <HeroSection activePage="home" onNavigate={handleNavigate} />
            <HomeBentoShowcase onNavigate={handleNavigate} />
            <LocalSEOSection activePage="home" onNavigate={handleNavigate} />
            <ServicesSection onNavigate={handleNavigate} />
            <ParallaxShowcase onNavigate={handleNavigate} />
            <PortfolioSection isFullPage={false} activeSubpage="portfolio" onNavigate={handleNavigate} />
            <PricingSection />
            <BlogSection
              isFullPage={false}
              activeBlogSlug={null}
              onNavigate={handleNavigate}
              onOpenBlog={handleOpenBlog}
            />
            <FAQAndContactSection />
          </>
        )}
      </main>

      {/* Rich SEO Footer with Local NAP & Area Links */}
      <Footer onNavigate={handleNavigate} onOpenBlog={handleOpenBlog} />
    </div>
  );
}
