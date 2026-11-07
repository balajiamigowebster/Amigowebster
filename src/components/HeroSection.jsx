import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, PORTFOLIO_ITEMS } from '../data/siteData';
import { useScrollParallax, useMouseParallax, Reveal } from '../hooks/useParallaxAndReveal';
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Zap,
  MapPin,
  Star,
  Globe2,
  TrendingUp,
  Sparkles,
  Code2,
  ExternalLink,
  Layers,
  Award,
  Play
} from 'lucide-react';

export default function HeroSection({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('showcase');
  const [selectedGoal, setSelectedGoal] = useState('business');
  const [slideIndex, setSlideIndex] = useState(0);
  const scrollY = useScrollParallax();
  const mouse = useMouseParallax();

  const heroProjects = PORTFOLIO_ITEMS.slice(0, 8);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroProjects.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [heroProjects.length]);

  const currentProject = heroProjects[slideIndex];

  const quickEstimates = {
    starter: {
      title: 'Single-Page Starter Website',
      price: '₹7,000 / yr',
      timeline: '3–5 Days Delivery',
      includes: ['Responsive 1-Page Design', '1 Yr Hosting + Free SSL', 'WhatsApp & Call CTA', 'Basic Local SEO Setup']
    },
    business: {
      title: 'Multi-Page Corporate & SEO Website',
      price: '₹11,999 onwards',
      timeline: '7–12 Days Delivery',
      includes: [
        '5–12 Custom React / CMS Pages',
        'Full On-Page SEO for Chennai & Medavakkam',
        'Domain + 1 Yr Cloud Hosting + SSL',
        'Google Business & Search Console Setup'
      ]
    },
    ecommerce: {
      title: 'E-Commerce Store with Payment Gateway',
      price: '₹19,999 onwards',
      timeline: '2–3 Weeks Delivery',
      includes: [
        'Unlimited Products & Inventory Admin',
        'Razorpay / UPI / Card Checkout',
        'Automated GST Invoice & Order Alerts',
        'Google Shopping & Product Schema SEO'
      ]
    }
  };

  const activeEstimate = quickEstimates[selectedGoal];

  const marqueeKeywords = [
    '★ Website Development in Chennai',
    '★ Website Development in Medavakkam',
    '★ 37+ Live Client Websites Delivered',
    '★ React JS & Next-Gen Web Apps',
    '★ Starter Websites from ₹7,000/yr',
    '★ Quick Commerce & E-Commerce Stores',
    '★ #1 Local SEO in Kovilambakkam, Velachery & OMR',
    '★ Custom GST Billing & IT Help Desk Software'
  ];

  return (
    <section className="relative overflow-hidden bg-[#071936] text-white pt-8 pb-0 lg:pt-14 bg-grid-pattern">
      {/* Multi-Layered Glowing Ocean & Electric Sky Blue Mesh Background */}
      <div
        className="pointer-events-none absolute -top-36 left-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/25 via-blue-500/20 to-transparent blur-3xl animate-pulse-glow"
        style={{
          transform: `translate3d(${mouse.x * -30}px, ${scrollY * 0.22 + mouse.y * -30}px, 0)`
        }}
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-blue-600/25 via-cyan-400/20 to-transparent blur-3xl animate-pulse-glow"
        style={{
          transform: `translate3d(${mouse.x * 25}px, ${scrollY * -0.18 + mouse.y * 25}px, 0)`
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: High-Impact Headline, SEO Keywords & Interactive CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up">
              {/* Top Pill with Live Status & Rating */}
              <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full bg-blue-950/80 px-4 py-1.5 text-xs font-semibold text-sky-200 ring-1 ring-sky-400/35 backdrop-blur-md shadow-xl">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <MapPin className="h-3.5 w-3.5 text-sky-400" />
                <span>#1 Rated Web Design & SEO Agency in Medavakkam & Chennai</span>
                <span className="hidden sm:inline text-blue-400">|</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-white font-bold">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.9/5
                </span>
              </div>

              {/* Primary Semantic H1 */}
              <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.12]">
                Elevate Your Brand with{' '}
                <span className="text-shimmer">Website Development in Chennai</span> &{' '}
                <span className="underline decoration-sky-400 decoration-wavy underline-offset-8">
                  Medavakkam
                </span>
              </h1>

              {/* Compelling Value Proposition */}
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-blue-100/90 leading-relaxed">
                <strong className="text-white">{COMPANY_INFO.tagline}</strong> At{' '}
                <strong className="text-white">AmigoWebster</strong>, we combine sleek modern design, interactive React
                JS & WordPress engineering, and hyper-local Google SEO. From{' '}
                <strong className="text-sky-300">₹7,000 starter websites</strong> in{' '}
                <strong className="text-white">Medavakkam</strong> to custom E-Commerce, Quick Commerce, and Billing
                Software across <strong className="text-white">Chennai</strong>.
              </p>

              {/* 4 High-Contrast Royal Blue Feature Badges */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-blue-50">
                <div className="flex items-center gap-3 rounded-xl bg-blue-950/60 px-4 py-3 ring-1 ring-sky-400/25 backdrop-blur-sm hover:bg-blue-900/60 transition">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">Starter Plan @ ₹7,000/yr</span>
                    <span className="text-[11px] text-blue-200/80">1 Yr Hosting + Free SSL + WhatsApp CTA</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-blue-950/60 px-4 py-3 ring-1 ring-sky-400/25 backdrop-blur-sm hover:bg-blue-900/60 transition">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">100% SEO-Engineered</span>
                    <span className="text-[11px] text-blue-200/80">Rank on Google in Chennai & Medavakkam</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-blue-950/60 px-4 py-3 ring-1 ring-sky-400/25 backdrop-blur-sm hover:bg-blue-900/60 transition">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/25 text-sky-300">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">13+ Yrs Combined Experience</span>
                    <span className="text-[11px] text-blue-200/80">250+ Websites & 37+ Featured Portals</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-blue-950/60 px-4 py-3 ring-1 ring-sky-400/25 backdrop-blur-sm hover:bg-blue-900/60 transition">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-white">Medavakkam & Chennai Offices</span>
                    <span className="text-[11px] text-blue-200/80">In-person support & same-day response</span>
                  </div>
                </div>
              </div>

              {/* Primary CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-4 text-sm sm:text-base font-extrabold text-white shadow-xl shadow-blue-500/30 hover:from-blue-700 hover:to-sky-600 transition transform hover:-translate-y-0.5"
                >
                  <span>Get Free Website Quote</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-900/80 px-6 py-4 text-sm sm:text-base font-bold text-white ring-1 ring-sky-400/40 backdrop-blur hover:bg-blue-800 transition transform hover:-translate-y-0.5"
                >
                  <Layers className="h-4 w-4 text-sky-300" />
                  <span>Explore 37+ Live Projects</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-sky-400/35 bg-blue-950/90 px-5 py-4 text-sm font-bold text-sky-100 hover:border-sky-400 transition"
                >
                  <PhoneCall className="h-4 w-4 text-sky-400" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive 3D Dual-Mode Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Floating Parallax Orbit Badge Top-Left */}
            <div
              style={{
                transform: `translate3d(${mouse.x * -14}px, ${mouse.y * -14}px, 0)`
              }}
              className="hidden sm:flex absolute -top-5 -left-5 z-20 items-center gap-2 rounded-2xl bg-[#061529] border border-sky-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-2xl backdrop-blur-md animate-float-slow"
            >
              <Sparkles className="h-4 w-4 text-sky-400" />
              <span>37+ Live Websites Built</span>
            </div>

            {/* Floating Parallax Orbit Badge Bottom-Right */}
            <div
              style={{
                transform: `translate3d(${mouse.x * 16}px, ${mouse.y * 16}px, 0)`
              }}
              className="hidden sm:flex absolute -bottom-5 -right-4 z-20 items-center gap-2 rounded-2xl bg-brand-navy border border-sky-400/40 px-3.5 py-2 text-xs font-bold text-white shadow-2xl backdrop-blur-md animate-float-reverse"
            >
              <Code2 className="h-4 w-4 text-sky-400" />
              <span>PageSpeed 98/100 • SEO Ready</span>
            </div>

            {/* Main 3D Tilt Interactive Card */}
            <div
              style={{
                transform: `perspective(1100px) rotateY(${mouse.x * 3.5}deg) rotateX(${mouse.y * -3.5}deg)`
              }}
              className="relative z-10 rounded-3xl bg-[#0B2545]/90 p-5 sm:p-6 text-white shadow-2xl ring-1 ring-sky-400/35 backdrop-blur-xl transition-transform duration-150 ease-out"
            >
              {/* Mode Switcher Tabs */}
              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-[#061529] p-1.5 ring-1 ring-blue-800/80">
                <button
                  type="button"
                  onClick={() => setActiveTab('showcase')}
                  className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-extrabold transition ${
                    activeTab === 'showcase'
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md'
                      : 'text-blue-200 hover:text-white'
                  }`}
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Live Client Showcase</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('estimator')}
                  className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-extrabold transition ${
                    activeTab === 'estimator'
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md'
                      : 'text-blue-200 hover:text-white'
                  }`}
                >
                  <Zap className="h-3.5 w-3.5" />
                  <span>Instant Price Quote</span>
                </button>
              </div>

              {activeTab === 'showcase' ? (
                /* TAB 1: Auto-Cycling Live Screenshot Browser Showcase */
                <div className="mt-4">
                  <div className="rounded-2xl overflow-hidden border border-sky-400/30 bg-[#040E1C] shadow-inner">
                    <div className="flex items-center justify-between bg-[#061529] px-3.5 py-2.5 border-b border-blue-900/70">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-md bg-blue-950 px-2.5 py-0.5 text-[11px] font-mono text-sky-300 hover:bg-blue-900 transition"
                      >
                        <Globe2 className="h-3 w-3" />
                        <span>{currentProject.domain}</span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                      <span className="text-[10px] font-bold text-emerald-400">LIVE</span>
                    </div>

                    <div
                      onClick={() => onNavigate('portfolio')}
                      className="relative aspect-[16/8.6] w-full cursor-pointer overflow-hidden bg-[#061529] group"
                    >
                      <img
                        key={currentProject.id}
                        src={currentProject.screenshot}
                        alt={`${currentProject.title} - Designed by AmigoWebster`}
                        className="h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040E1C]/95 via-transparent to-transparent flex items-end justify-between p-4">
                        <div>
                          <span className="inline-block rounded bg-brand-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                            {currentProject.category}
                          </span>
                          <h3 className="mt-1 font-heading text-base font-extrabold text-white">
                            {currentProject.title}
                          </h3>
                          <p className="text-[11px] text-sky-200">{currentProject.industry}</p>
                        </div>
                        <span className="rounded-xl bg-blue-950/90 px-3 py-1.5 text-xs font-bold text-white ring-1 ring-sky-400/40 group-hover:bg-brand-accent transition">
                          View All 37 →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Slide Dots */}
                  <div className="mt-3.5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      {heroProjects.map((proj, idx) => (
                        <button
                          key={proj.id}
                          type="button"
                          onClick={() => setSlideIndex(idx)}
                          className={`h-2 rounded-full transition-all ${
                            slideIndex === idx ? 'w-6 bg-sky-400' : 'w-2 bg-blue-800 hover:bg-sky-500'
                          }`}
                          aria-label={`Preview ${proj.title}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('estimator')}
                      className="text-xs font-bold text-sky-300 hover:underline"
                    >
                      Check Website Cost →
                    </button>
                  </div>

                  {/* Quick Bottom Action */}
                  <div className="mt-4 pt-3.5 border-t border-blue-800/70 flex items-center justify-between gap-3">
                    <div className="text-xs text-blue-100">
                      Want a website like <strong className="text-white">{currentProject.title}</strong>?
                    </div>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hi AmigoWebster, I liked the "${currentProject.title}" website on your home page and want a quote for my business.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-brand-accent px-4 py-2 text-xs font-bold text-white hover:bg-brand-accentHover transition shadow"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                /* TAB 2: Interactive Instant Price Estimator */
                <div className="mt-4">
                  <div className="grid grid-cols-3 gap-2 rounded-xl bg-[#061529] p-1">
                    {[
                      { id: 'starter', label: 'Starter (₹7k)' },
                      { id: 'business', label: 'Business SEO' },
                      { id: 'ecommerce', label: 'E-Commerce' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setSelectedGoal(tab.id)}
                        className={`rounded-lg py-2 px-2 text-xs font-bold transition ${
                          selectedGoal === tab.id
                            ? 'bg-brand-accent text-white shadow-sm'
                            : 'text-blue-200 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl bg-[#061529]/90 p-4 border border-blue-800/80">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-heading text-sm sm:text-base font-bold text-white">{activeEstimate.title}</h3>
                      <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md shrink-0">
                        {activeEstimate.timeline}
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-heading text-2xl font-extrabold text-sky-300">
                        {activeEstimate.price}
                      </span>
                      <span className="text-xs text-blue-300">+ GST as applicable</span>
                    </div>

                    <ul className="mt-3.5 space-y-2 text-xs text-blue-100">
                      {activeEstimate.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hi AmigoWebster, I'm interested in the ${activeEstimate.title} (${activeEstimate.price}) for my business in Chennai/Medavakkam.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-accent to-blue-600 py-3 text-xs sm:text-sm font-bold text-white hover:from-sky-500 hover:to-blue-700 transition shadow-lg"
                  >
                    <Globe2 className="h-4 w-4" />
                    <span>Book This Package on WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Glassmorphic Royal Blue Stats Bar */}
        <Reveal direction="up" delay={150}>
          <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl bg-blue-950/75 p-6 ring-1 ring-sky-400/30 backdrop-blur-md sm:grid-cols-4">
            {COMPANY_INFO.stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-sky-300 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Infinite Scrolling Marquee Ticker of SEO Keywords & Capabilities */}
      <div className="border-t border-blue-900/80 bg-[#040E1C] py-3.5 overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 text-xs font-bold uppercase tracking-wider text-blue-100">
          {[...marqueeKeywords, ...marqueeKeywords].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="text-sky-400">{item.slice(0, 1)}</span>
              <span>{item.slice(2)}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
