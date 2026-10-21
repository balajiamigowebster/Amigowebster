import React from 'react';
import { PORTFOLIO_ITEMS } from '../data/siteData';
import { Reveal } from '../hooks/useParallaxAndReveal';
import {
  Globe,
  ShoppingBag,
  Receipt,
  Headphones,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  MapPin
} from 'lucide-react';

export default function HomeBentoShowcase({ onNavigate }) {
  const ribbonProjects = PORTFOLIO_ITEMS.slice(0, 12);

  return (
    <section className="py-20 bg-[#F0F7FF] overflow-hidden border-b border-blue-100">
      {/* Part 1: Auto-Scrolling Live Client Screenshot Ribbon */}
      <div className="mb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 250+ Brands Across Chennai & Medavakkam
            </span>
            <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Live Websites Designed & Hosted by AmigoWebster
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-brand-accent hover:text-brand-navy transition"
          >
            <span>Browse All 34+ Live Website Screenshots</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Infinite Horizontal Screenshot Strip */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="animate-marquee flex items-center gap-6 px-4">
            {[...ribbonProjects, ...ribbonProjects].map((proj, idx) => (
              <div
                key={`${proj.id}-${idx}`}
                onClick={() => onNavigate('portfolio')}
                className="group relative w-72 sm:w-80 shrink-0 cursor-pointer rounded-2xl border border-blue-200 bg-brand-navy p-2 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-accent"
              >
                <div className="flex items-center justify-between px-2 pb-1.5 text-[10px] text-blue-200 font-mono">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="truncate max-w-[150px] text-sky-300">{proj.domain}</span>
                  <span className="text-emerald-400 font-bold">●</span>
                </div>
                <div className="aspect-[16/8.5] w-full overflow-hidden rounded-xl bg-[#061529]">
                  <img
                    src={proj.screenshot}
                    alt={proj.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between px-2 py-1 text-white">
                  <span className="font-heading text-xs font-extrabold truncate">{proj.title}</span>
                  <span className="text-[10px] text-sky-300 font-bold group-hover:underline">View →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 2: Creative Blue-Themed Bento Grid of AmigoWebster Flagship Solutions */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue ring-1 ring-sky-200">
              Flagship Digital Ecosystem
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-[42px]">
              Everything Your Business Needs to Grow Online
            </h2>
            <p className="mt-3 text-base text-slate-600">
              From high-ranking corporate websites in <strong className="text-brand-navy">Chennai & Medavakkam</strong>{' '}
              to specialized Quick Commerce, GST Billing Software, and IT Help Desk platforms.
            </p>
          </div>
        </Reveal>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Large Bento Card 1: Custom Website Development (7 cols) */}
          <Reveal direction="left" className="lg:col-span-7">
            <div className="card-3d-hover relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#061529] via-[#0B2545] to-[#134074] p-7 sm:p-9 text-white shadow-xl border border-sky-400/30">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                      <Globe className="h-3.5 w-3.5" />
                      Custom Website Development
                    </span>
                    <span className="rounded-full bg-blue-900/90 px-3 py-1 text-xs font-bold text-sky-300 ring-1 ring-sky-400/30">
                      Starts at ₹7,000/yr
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl sm:text-3xl font-extrabold leading-tight">
                    SEO-Friendly Website Development in Chennai & Medavakkam
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl">
                    We build ultra-fast React JS, WordPress, and corporate websites engineered with Schema.org JSON-LD,
                    95+ PageSpeed scores, and mobile-first conversion funnels.
                  </p>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-blue-50">
                    {[
                      'React JS & Next-Gen UI',
                      'WordPress & WooCommerce',
                      '1 Yr Hosting + Free SSL',
                      'Local SEO Schema Setup',
                      'WhatsApp Lead Funnel',
                      'Same-Day Local Support'
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-1.5 rounded-xl bg-blue-950/60 px-3 py-2 ring-1 ring-sky-400/25"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-blue-800/80 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('portfolio')}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-brand-accentHover transition shadow-lg"
                  >
                    <span>Explore 34+ Website Projects</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('pricing')}
                    className="text-xs sm:text-sm font-bold text-sky-300 hover:underline"
                  >
                    Compare Pricing Plans →
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bento Card 2: Quick Commerce Website (5 cols) */}
          <Reveal direction="right" delay={80} className="lg:col-span-5">
            <div className="card-3d-hover relative h-full overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-sky-100/80 via-white to-blue-50 p-7 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-sky-300 shadow-md">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-blue ring-1 ring-sky-200">
                    Quick Commerce
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-2xl font-extrabold text-brand-navy">
                  Quick Commerce & Online Store Platforms
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Launch your own hyper-local grocery, food (like <em>Idlish</em>, <em>Chettinad Bites</em>), or retail
                  delivery portal with instant UPI/Razorpay checkout, live order tracking, and slot delivery.
                </p>

                <ul className="mt-5 space-y-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand-accent" />
                    <span>Razorpay, PhonePe, UPI & COD Checkout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand-accent" />
                    <span>Automated WhatsApp Order Notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand-accent" />
                    <span>Inventory, Coupon & Delivery Zone Control</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-blue-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onNavigate('quickcommerce')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-brand-navy hover:text-brand-accent transition"
                >
                  <span>Explore Quick Commerce Subpage</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                  2–3 Weeks Launch
                </span>
              </div>
            </div>
          </Reveal>

          {/* Bento Card 3: GST Billing Software (4 cols) */}
          <Reveal direction="up" delay={100} className="lg:col-span-4">
            <div className="card-3d-hover h-full rounded-3xl border border-blue-100 bg-white p-7 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-sky-300 shadow">
                    <Receipt className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-bold text-brand-blue ring-1 ring-sky-200">
                    Cloud POS & ERP
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-brand-navy">
                  Custom GST Billing & Inventory Software
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fast barcode & thermal POS billing, GST-compliant invoicing, stock alerts, and daily sales analytics
                  for retail shops and clinics in Chennai.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('billing')}
                className="mt-6 inline-flex items-center gap-1 text-xs font-extrabold text-brand-accent hover:text-brand-navy transition"
              >
                <span>View Billing Software Screenshots</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          {/* Bento Card 4: IT Help Desk Portal (4 cols) */}
          <Reveal direction="up" delay={160} className="lg:col-span-4">
            <div className="card-3d-hover h-full rounded-3xl border border-blue-100 bg-white p-7 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue text-white shadow">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-[11px] font-bold text-brand-blue ring-1 ring-sky-200">
                    IT Help Desk
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-brand-navy">
                  IT Help Desk & Support Ticketing System
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Streamline internal IT support and customer service with automated ticket routing, SLA tracking,
                  multi-branch dashboards, and email alerts.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('helpdesk')}
                className="mt-6 inline-flex items-center gap-1 text-xs font-extrabold text-brand-accent hover:text-brand-navy transition"
              >
                <span>View HelpDesk 2026 Screenshots</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          {/* Bento Card 5: Hyper-Local SEO Medavakkam & Chennai (4 cols) */}
          <Reveal direction="up" delay={220} className="lg:col-span-4">
            <div className="card-3d-hover h-full rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-blue-100/70 p-7 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent text-white shadow">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-navy px-2.5 py-0.5 text-[11px] font-bold text-white">
                    <MapPin className="h-3 w-3 text-sky-300" /> Local SEO #1
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-brand-navy">
                  Website Development in Chennai & Medavakkam SEO
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rank in the Top 3 Google Map Pack and organic results for searches in Medavakkam, Kovilambakkam,
                  Velachery, Tambaram, and across Chennai.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="mt-6 inline-flex items-center gap-1 text-xs font-extrabold text-brand-navy hover:text-brand-accent transition"
              >
                <span>Get Free Local SEO Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
