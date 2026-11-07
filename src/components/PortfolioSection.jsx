import React, { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS, PROJECT_SUBPAGES, TESTIMONIALS, COMPANY_INFO } from '../data/siteData';
import { useScrollParallax, Reveal } from '../hooks/useParallaxAndReveal';
import {
  Star,
  Quote,
  ExternalLink,
  Globe,
  Eye,
  X,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Search,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  PhoneCall,
  Headphones,
  Receipt,
  ShoppingBag,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Layers
} from 'lucide-react';

export default function PortfolioSection({
  isFullPage = false,
  activeSubpage = 'portfolio',
  onNavigate
}) {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [subpageLightboxIdx, setSubpageLightboxIdx] = useState(null);
  const scrollY = useScrollParallax();
  const parallaxOffset = ((scrollY % 1500) - 600) * 0.1;

  useEffect(() => {
    setSelectedIndex(null);
    setSubpageLightboxIdx(null);
  }, [activeSubpage]);

  const subpageTabs = [
    {
      id: 'portfolio',
      label: 'WebSite Design',
      badge: `${PORTFOLIO_ITEMS.length}+ Live`,
      icon: Globe,
      desc: 'Live Client Websites & Screenshots'
    },
    {
      id: 'helpdesk',
      label: 'IT Help Desk',
      badge: '2026',
      icon: Headphones,
      desc: 'Support Ticketing & SLA Portal'
    },
    {
      id: 'billing',
      label: 'Billing Software',
      badge: '2026',
      icon: Receipt,
      desc: 'GST Invoicing & Practice ERP'
    },
    {
      id: 'quickcommerce',
      label: 'Quick Commerce Website',
      badge: '2026',
      icon: ShoppingBag,
      desc: 'Hyper-Local Delivery Platform'
    }
  ];

  const categories = [
    { id: 'All', label: `All Projects (${PORTFOLIO_ITEMS.length})` },
    { id: 'IT, Finance & Legal', label: 'IT, Finance & Legal' },
    { id: 'Travel & Logistics', label: 'Travel & Logistics' },
    { id: 'Food, Retail & E-Commerce', label: 'Food & E-Commerce' },
    { id: 'Education & Healthcare', label: 'Education & Healthcare' },
    { id: 'Real Estate & Hospitality', label: 'Real Estate & Stay' },
    { id: 'Industrial, Export & B2B', label: 'Industrial & Export' },
    { id: 'Media, Events & Lifestyle', label: 'Media & Events' }
  ];

  const allFilteredProjects = PORTFOLIO_ITEMS.filter((item) => {
    const matchesCategory = filter === 'All' || item.category === filter;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProjects = isFullPage ? allFilteredProjects : allFilteredProjects.slice(0, 6);
  const selectedProject = selectedIndex !== null ? displayedProjects[selectedIndex] : null;

  const currentProductSubpage = PROJECT_SUBPAGES[activeSubpage] || null;
  const activeSubpageScreenshot =
    currentProductSubpage && subpageLightboxIdx !== null
      ? currentProductSubpage.screenshots[subpageLightboxIdx]
      : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + displayedProjects.length) % displayedProjects.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % displayedProjects.length);
  };

  return (
    <div id="portfolio" className="bg-[#F0F7FF]">
      {/* Dedicated Separate Page Hero & Subpage Switcher Bar (When viewing Projects Page) */}
      {isFullPage && (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#061529] via-[#0B2545] to-[#134074] pt-14 pb-16 lg:pt-18 lg:pb-20 text-white bg-grid-pattern border-b border-blue-900">
          <div
            className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-brand-accent/25 blur-3xl animate-pulse-glow"
            style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
            style={{ transform: `translate3d(0, ${-parallaxOffset}px, 0)` }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* 4-Subpage Switcher Tabs inside Projects Page */}
            <div className="mb-10">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-brand-accent" />
                <span>Select Project Category / Product Subpage:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {subpageTabs.map((tab) => {
                  const TabIcon = tab.icon;
                  const isActive = activeSubpage === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => onNavigate && onNavigate(tab.id)}
                      className={`flex items-start gap-3.5 rounded-2xl p-4 text-left transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-brand-accent to-amber-500 text-white shadow-xl shadow-orange-500/25 ring-2 ring-white/30 scale-[1.02]'
                          : 'bg-white/10 text-slate-200 hover:bg-white/15 ring-1 ring-white/15 backdrop-blur-md'
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          isActive ? 'bg-white/20 text-white' : 'bg-brand-navy/80 text-amber-400'
                        }`}
                      >
                        <TabIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-heading text-sm font-extrabold truncate">{tab.label}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                              isActive ? 'bg-brand-navy text-amber-300' : 'bg-white/15 text-amber-300'
                            }`}
                          >
                            {tab.badge}
                          </span>
                        </div>
                        <p className={`text-[11px] mt-0.5 truncate ${isActive ? 'text-white/90' : 'text-slate-400'}`}>
                          {tab.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Hero Content Based on Selected Subpage */}
            {currentProductSubpage ? (
              /* Subpage Hero: IT Help Desk / Billing Software / Quick Commerce */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-2">
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 ring-1 ring-white/20">
                    <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
                    <span>{currentProductSubpage.badge} • AmigoWebster Chennai & Medavakkam</span>
                  </div>
                  <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                    {currentProductSubpage.headline}
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {currentProductSubpage.overview}
                  </p>

                  {/* Highlight Bullets from Official Page */}
                  <ul className="space-y-2.5 pt-1">
                    {currentProductSubpage.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-center gap-2.5 rounded-xl bg-white/[0.07] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white ring-1 ring-white/10"
                      >
                        <Zap className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3.5 pt-2">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hi AmigoWebster, I am interested in a live demo & quote for ${currentProductSubpage.title} (2026).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-brand-accentHover transition"
                    >
                      <span>Request Free Live Demo</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition"
                    >
                      <PhoneCall className="h-4 w-4 text-amber-400" />
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Featured Hero Screenshot Frame */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() => setSubpageLightboxIdx(0)}
                    className="group cursor-pointer rounded-2xl bg-slate-900 p-2.5 shadow-2xl ring-1 ring-white/20 transition transform hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between px-3 pb-2 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="font-mono text-[11px] text-amber-300">{currentProductSubpage.subheadline}</span>
                      <span className="text-[10px] font-bold text-emerald-400">CLICK TO ZOOM</span>
                    </div>
                    <div className="overflow-hidden rounded-xl bg-slate-950">
                      <img
                        src={currentProductSubpage.heroImage}
                        alt={currentProductSubpage.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Subpage Hero 1: WebSite Design (All 34 Websites) */
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-2">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 ring-1 ring-white/15">
                    <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
                    <span>Official Website Design Portfolio • amigowebster.com/website/</span>
                  </div>
                  <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                    Our Complete <span className="text-shimmer">Website Design Projects</span> & Live Screenshots
                  </h1>
                  <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                    Browse all <strong className="text-white">{PORTFOLIO_ITEMS.length} live client websites</strong>{' '}
                    designed, developed, and SEO-optimized by <strong className="text-white">AmigoWebster</strong> in{' '}
                    <strong className="text-amber-300">Medavakkam, Chennai, and global markets</strong>. Also explore our{' '}
                    <strong className="text-white">IT Help Desk, Billing Software, and Quick Commerce</strong> subpages
                    above!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      'Hi AmigoWebster, I am viewing your Website Projects page and want to build a website for my business.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-brand-accentHover transition"
                  >
                    <span>Start Your Website Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition"
                  >
                    <PhoneCall className="h-4 w-4 text-amber-400" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* BODY CONTENT: Either Product Subpage (HelpDesk / Billing / QuickCommerce) OR 34 Website Projects Grid */}
      {isFullPage && currentProductSubpage ? (
        <section className="py-20 bg-slate-50 bg-light-grid">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section 1: Discover [Product] 2026 Screenshot Gallery */}
            <Reveal direction="up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent ring-1 ring-orange-200">
                  Interactive UI Walkthrough
                </span>
                <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy">
                  {currentProductSubpage.subheadline} — Live Module Screenshots
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600">
                  Click any module screenshot below to inspect full-screen. Built for speed, simplicity, and reliability.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {currentProductSubpage.screenshots.map((shot, idx) => (
                <Reveal key={shot.title} direction="up" delay={(idx % 2) * 80}>
                  <div
                    onClick={() => setSubpageLightboxIdx(idx)}
                    className="card-3d-hover group cursor-pointer rounded-2xl bg-white overflow-hidden shadow-md ring-1 ring-slate-200/90"
                  >
                    {/* Browser Header */}
                    <div className="flex items-center justify-between bg-brand-navy px-4 py-2.5 text-white">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs font-bold text-amber-300 truncate">{shot.title}</span>
                      <Maximize2 className="h-3.5 w-3.5 text-slate-300 group-hover:text-brand-accent transition" />
                    </div>

                    {/* Module Screenshot Image */}
                    <div className="relative aspect-[16/8.2] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img
                        src={shot.image}
                        alt={`${shot.title} - ${currentProductSubpage.title} by AmigoWebster`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-extrabold text-brand-navy shadow-lg">
                          <Maximize2 className="h-4 w-4 text-brand-accent" />
                          Click to Enlarge Screenshot
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-base font-extrabold text-brand-navy group-hover:text-brand-accent transition">
                          {shot.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">{shot.subtitle}</p>
                      </div>
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-brand-navy shrink-0">
                        Module #{idx + 1}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Section 2: Key Functions, Features & Benefits 3-Column Authority Grid */}
            <Reveal direction="up" delay={120}>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Key Functions */}
                <div className="card-3d-hover rounded-2xl bg-white p-7 shadow-sm border border-slate-200">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-accent mb-4">
                    <Zap className="h-4 w-4" />
                    <span>Key Functions</span>
                  </div>
                  <h3 className="font-heading text-xl font-extrabold text-brand-navy mb-4">
                    Key Functions of {currentProductSubpage.title}
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {currentProductSubpage.keyFunctions.map((fn) => (
                      <li key={fn} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                        <span className="font-medium">{fn}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Features */}
                <div className="card-3d-hover rounded-2xl bg-brand-navy p-7 text-white shadow-xl">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-300 mb-4">
                    <Layers className="h-4 w-4 text-brand-accent" />
                    <span>System Features</span>
                  </div>
                  <h3 className="font-heading text-xl font-extrabold text-white mb-4">
                    Features of {currentProductSubpage.title} System
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                    {currentProductSubpage.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Benefits */}
                <div className="card-3d-hover rounded-2xl bg-white p-7 shadow-sm border border-slate-200">
                  <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-4">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Business Impact</span>
                  </div>
                  <h3 className="font-heading text-xl font-extrabold text-brand-navy mb-4">
                    Benefits for Your Organization
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {currentProductSubpage.benefits.map((ben) => (
                      <li key={ben} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Lightbox for Subpage Module Screenshots */}
            {activeSubpageScreenshot && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
                onClick={() => setSubpageLightboxIdx(null)}
              >
                <div
                  className="relative w-full max-w-5xl rounded-2xl bg-brand-navy overflow-hidden shadow-2xl ring-1 ring-white/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between bg-slate-900 px-5 py-3.5 text-white border-b border-white/10">
                    <div>
                      <h4 className="font-heading text-base font-extrabold">{activeSubpageScreenshot.title}</h4>
                      <p className="text-xs text-amber-300">{activeSubpageScreenshot.subtitle}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubpageLightboxIdx(null)}
                      className="rounded-xl bg-white/10 p-2 text-white hover:bg-white/20"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="max-h-[75vh] overflow-y-auto bg-slate-950 p-3">
                    <img
                      src={activeSubpageScreenshot.image}
                      alt={activeSubpageScreenshot.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        /* WebSite Design Showcase (34+ Live Websites Grid) */
        <section
          className="relative py-20 border-t border-slate-200/80 bg-light-grid overflow-hidden"
          aria-label="AmigoWebster Full Website Design Projects & Screenshots"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header & Search */}
            <Reveal direction="up">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                {!isFullPage ? (
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent ring-1 ring-orange-200">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Featured Works • {PORTFOLIO_ITEMS.length} Live Websites & Software Subpages</span>
                    </div>
                    <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                      Recent <span className="text-brand-accent">Website Development Projects</span> in Chennai &
                      Medavakkam
                    </h2>
                    <p className="mt-3 text-base text-slate-600 leading-relaxed">
                      A quick preview of our live client websites. Open our{' '}
                      <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('portfolio')}
                        className="font-bold text-brand-navy underline decoration-brand-accent underline-offset-4 hover:text-brand-accent"
                      >
                        Projects Tab
                      </button>{' '}
                      to explore all {PORTFOLIO_ITEMS.length} website screenshots plus our{' '}
                      <strong className="text-slate-800">IT Help Desk, Billing Software, and Quick Commerce</strong>{' '}
                      subpages.
                    </p>
                  </div>
                ) : (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                      Filter & Search Live Portfolio
                    </span>
                    <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-brand-navy">
                      Website Design Showcase ({allFilteredProjects.length} Projects)
                    </h2>
                  </div>
                )}

                {isFullPage ? (
                  <div className="relative w-full lg:w-80 shrink-0">
                    <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSelectedIndex(null);
                      }}
                      placeholder={`Search ${PORTFOLIO_ITEMS.length} projects (e.g. India Wears, Thoranam, Madhu)...`}
                      className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs font-medium text-slate-800 shadow-sm focus:border-brand-accent focus:outline-none"
                    />
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('portfolio')}
                      className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand-accent transition"
                    >
                      <span>All {PORTFOLIO_ITEMS.length} Websites</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('helpdesk')}
                      className="rounded-xl bg-white px-3.5 py-2.5 text-xs font-bold text-brand-navy ring-1 ring-slate-200 hover:bg-slate-100 transition"
                    >
                      IT Help Desk
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('billing')}
                      className="rounded-xl bg-white px-3.5 py-2.5 text-xs font-bold text-brand-navy ring-1 ring-slate-200 hover:bg-slate-100 transition"
                    >
                      Billing Software
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('quickcommerce')}
                      className="rounded-xl bg-white px-3.5 py-2.5 text-xs font-bold text-brand-navy ring-1 ring-slate-200 hover:bg-slate-100 transition"
                    >
                      Quick Commerce
                    </button>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Interactive Category Filter Bar */}
            <Reveal direction="up" delay={80}>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setFilter(cat.id);
                        setSelectedIndex(null);
                      }}
                      className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                        filter === cat.id
                          ? 'bg-brand-navy text-white shadow-md shadow-slate-900/15 scale-105'
                          : 'bg-white text-slate-600 hover:bg-slate-100 ring-1 ring-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  Showing <strong className="text-brand-navy">{displayedProjects.length}</strong> of{' '}
                  {PORTFOLIO_ITEMS.length} websites
                </span>
              </div>
            </Reveal>

            {/* Projects Grid with Real Website Screenshots */}
            <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {displayedProjects.map((project, index) => (
                <Reveal key={project.id} direction="up" delay={(index % 3) * 60} className="h-full">
                  <article className="card-3d-hover group flex h-full flex-col justify-between rounded-2xl bg-white overflow-hidden shadow-sm ring-1 ring-slate-200/90">
                    <div>
                      {/* Browser Frame Header */}
                      <div className="flex items-center justify-between bg-brand-navy px-3.5 py-2.5 text-white border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-0.5 text-[11px] font-mono text-slate-200 hover:bg-white/20 hover:text-white transition truncate max-w-[190px]"
                          title={`Visit ${project.liveUrl}`}
                        >
                          <Globe className="h-3 w-3 text-brand-accent shrink-0" />
                          <span className="truncate">{project.domain}</span>
                        </a>
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400" title="Live Website" />
                      </div>

                      {/* Actual Website Screenshot with Hover Zoom & Quick Actions Overlay */}
                      <div
                        onClick={() => setSelectedIndex(index)}
                        className="relative aspect-[16/8.2] w-full cursor-pointer overflow-hidden bg-slate-100 border-b border-slate-100"
                      >
                        <img
                          src={project.screenshot}
                          alt={`${project.title} - Website Development by AmigoWebster Chennai & Medavakkam`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Dark Hover Overlay with Full-Screen & Live Link Buttons */}
                        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-brand-navy/65 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedIndex(index);
                            }}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-brand-navy shadow-lg hover:bg-amber-400 transition transform translate-y-2 group-hover:translate-y-0 duration-300"
                          >
                            <Maximize2 className="h-3.5 w-3.5 text-brand-accent" />
                            <span>Full Screenshot</span>
                          </button>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-accent px-3.5 py-2 text-xs font-bold text-white shadow-lg hover:bg-brand-accentHover transition transform translate-y-2 group-hover:translate-y-0 duration-300"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Card Title & Action Footer */}
                    <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-block rounded-md bg-orange-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                            {project.category}
                          </span>
                          <span className="text-[11px] font-medium text-slate-400">
                            #{String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="mt-2 font-heading text-base font-extrabold text-brand-navy group-hover:text-brand-accent transition">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            {project.title}
                          </a>
                        </h3>
                        <p className="mt-0.5 text-xs text-slate-500">{project.industry}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setSelectedIndex(index)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-brand-navy transition"
                        >
                          <Eye className="h-3.5 w-3.5 text-brand-accent" />
                          <span>Zoom Screenshot</span>
                        </button>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy group-hover:text-brand-accent transition"
                        >
                          <span>Visit Website</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Home Page CTA Button to Open Full Separate Projects Page */}
            {!isFullPage && (
              <Reveal direction="up" delay={120}>
                <div className="mt-12 text-center">
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('portfolio')}
                    className="inline-flex items-center gap-2.5 rounded-2xl bg-brand-accent px-8 py-4 text-sm sm:text-base font-extrabold text-white shadow-xl shadow-orange-500/25 hover:bg-brand-accentHover transition transform hover:-translate-y-0.5"
                  >
                    <span>Explore All {PORTFOLIO_ITEMS.length} Website Projects & Software Subpages</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </Reveal>
            )}

            {/* Full-Resolution Screenshot Lightbox Modal */}
            {selectedProject && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-3 sm:p-6 backdrop-blur-md"
                onClick={() => setSelectedIndex(null)}
              >
                <button
                  type="button"
                  onClick={handlePrev}
                  className="hidden md:flex fixed left-5 top-1/2 -translate-y-1/2 z-50 h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-brand-accent transition backdrop-blur"
                  aria-label="Previous Project Screenshot"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-brand-accent transition backdrop-blur"
                  aria-label="Next Project Screenshot"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div
                  className="relative w-full max-w-5xl rounded-2xl bg-brand-navy overflow-hidden shadow-2xl ring-1 ring-white/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 px-5 py-3.5 text-white border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-rose-400" />
                        <span className="h-3 w-3 rounded-full bg-amber-400" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base sm:text-lg font-extrabold text-white leading-none">
                          {selectedProject.title}
                        </h3>
                        <span className="text-[11px] text-amber-300 font-medium">{selectedProject.industry}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 ml-auto">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-brand-accent px-4 py-2 text-xs font-bold text-white hover:bg-brand-accentHover transition shadow"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        <span>Open {selectedProject.domain}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSelectedIndex(null)}
                        className="rounded-xl bg-white/10 p-2 text-white hover:bg-white/20 transition"
                        aria-label="Close Screenshot Lightbox"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="max-h-[72vh] overflow-y-auto bg-slate-950 p-2 sm:p-4">
                    <img
                      src={selectedProject.fullScreenshot || selectedProject.screenshot}
                      alt={selectedProject.title}
                      className="w-full h-auto rounded-lg shadow-2xl mx-auto"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 px-5 py-3 text-xs text-slate-300 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <span>
                        Project <strong>{selectedIndex + 1}</strong> of <strong>{displayedProjects.length}</strong>
                      </span>
                      <span className="text-white/20">|</span>
                      <span>Designed & Hosted by AmigoWebster (Chennai & Medavakkam)</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="md:hidden rounded-lg bg-white/10 px-3 py-1.5 font-bold text-white"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="md:hidden rounded-lg bg-white/10 px-3 py-1.5 font-bold text-white"
                      >
                        Next
                      </button>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                          `Hi AmigoWebster, I liked the "${selectedProject.title}" (${selectedProject.domain}) website in your Projects showcase and want a similar website for my business.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300"
                      >
                        <span>Build Similar Website on WhatsApp</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
