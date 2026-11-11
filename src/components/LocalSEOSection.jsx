import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, MEDAVAKKAM_LANDMARKS, NEAR_PLACES_LIST } from '../data/siteData';
import { useScrollParallax, Reveal } from '../hooks/useParallaxAndReveal';
import {
  MapPin,
  CheckCircle2,
  Building2,
  ArrowRight,
  Phone,
  Compass
} from 'lucide-react';

export default function LocalSEOSection({ activePage, onNavigate }) {
  const [selectedHub, setSelectedHub] = useState(
    activePage === 'medavakkam' ? 'medavakkam' : 'chennai'
  );
  const scrollY = useScrollParallax();
  const parallaxShift = ((scrollY % 1200) - 400) * 0.08;

  useEffect(() => {
    if (activePage === 'medavakkam') setSelectedHub('medavakkam');
    if (activePage === 'chennai') setSelectedHub('chennai');
  }, [activePage]);

  return (
    <section
      id="local-seo-hub"
      className="relative py-20 bg-sky-50/70 border-y border-blue-100 bg-light-grid overflow-hidden"
      aria-label="Website Development in Chennai and Medavakkam Authority Guide"
    >
      {/* Parallax Decorative Background Elements */}
      <div
        className="pointer-events-none absolute -top-16 right-12 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl"
        style={{ transform: `translate3d(0, ${parallaxShift}px, 0)` }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Heading & Hub Switcher */}
        <Reveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-200">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-brand-accent" />
                Local Web Design & SEO Excellence
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Why Businesses Trust AmigoWebster for{' '}
                <span className="text-brand-accent">Website Development in Chennai</span> &{' '}
                <span className="text-brand-accent">Medavakkam</span>
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Headquartered at Sudarkodi Apartments, Manikandan Nagar 1st Street (Kovilambakkam / Medavakkam, Chennai –
                600117), we combine neighborhood accessibility with enterprise-grade web engineering.
              </p>
            </div>

            {/* Interactive Hub Tab Selector */}
            <div className="inline-flex rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedHub('chennai')}
                className={`rounded-lg px-4 py-2.5 text-xs sm:text-sm font-bold transition ${
                  selectedHub === 'chennai'
                    ? 'bg-brand-navy text-white shadow'
                    : 'text-slate-600 hover:text-brand-navy'
                }`}
              >
                Website Development in Chennai
              </button>
              <button
                type="button"
                onClick={() => setSelectedHub('medavakkam')}
                className={`rounded-lg px-4 py-2.5 text-xs sm:text-sm font-bold transition ${
                  selectedHub === 'medavakkam'
                    ? 'bg-brand-accent text-white shadow'
                    : 'text-slate-600 hover:text-brand-navy'
                }`}
              >
                Website Development in Medavakkam
              </button>
            </div>
          </div>
        </Reveal>

        {/* Near Me Quick-Intent Feature Bar */}
        <Reveal direction="up" delay={50}>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy p-4 sm:p-5 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-900/50">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center shrink-0">
                <Compass className="h-5 w-5 text-brand-accent" />
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Looking for a Website Designer Near Me or Website Development Near Me?</span>
                  <span className="hidden sm:inline-block rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold px-2 py-0.5 border border-emerald-500/30">Doorstep Visits</span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  In-person meetings across Chromepet, Tambaram, Medavakkam, OMR, Velachery, Guindy &amp; all Chennai neighborhoods.
                </p>
              </div>
            </div>
            <a
              href="/blog/website-development-near-me"
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand-accent px-4 py-2 text-xs font-bold text-white hover:bg-brand-accentHover transition shrink-0 shadow-sm"
            >
              <span>Explore Near Me Guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        {/* Website Development Near You - Hyper-Local Search Cloud */}
        <Reveal direction="up" delay={75}>
          <div className="mt-5 rounded-2xl bg-white p-5 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-accent shrink-0" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Website Development Near You • Local Chennai Neighborhoods
                </h4>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                Click any locality for local pricing, doorstep visits &amp; SEO
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {NEAR_PLACES_LIST.map((item) => (
                <a
                  key={item.name}
                  href={`/blog/${item.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 hover:bg-brand-navy hover:text-white text-slate-700 text-xs font-semibold px-3 py-1.5 transition border border-slate-200 hover:border-brand-navy group"
                  title={`Website Development Near ${item.name}`}
                >
                  <MapPin className="h-3 w-3 text-brand-accent group-hover:text-amber-300 transition" />
                  <span>Website Development Near {item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Two-Column Semantic SEO Pillar Blocks */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Pillar 1: Website Development in Chennai */}
          <Reveal direction="left" delay={100}>
            <article
              className={`card-3d-hover h-full rounded-2xl bg-white p-7 sm:p-8 shadow-md transition ring-2 ${
                selectedHub === 'chennai' ? 'ring-brand-navy' : 'ring-transparent border border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold text-brand-blue">
                  <Building2 className="h-4 w-4 text-brand-accent" />
                  Chennai City-Wide Web Engineering
                </span>
                <span className="text-xs font-semibold text-emerald-600">250+ Projects Delivered</span>
              </div>

              <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                Website Development in Chennai for Startups, SMEs & Enterprises
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Chennai is one of India’s fastest-growing technology, healthcare, retail, and manufacturing corridors.
                When customers search online for your products or services, your website is your first impression. Our{' '}
                <strong className="text-slate-900">website development in Chennai</strong> service focuses on three
                pillars: <strong className="text-slate-800">blazing speed</strong>,{' '}
                <strong className="text-slate-800">clean corporate aesthetics</strong>, and{' '}
                <strong className="text-slate-800">first-page Google rankings</strong>.
              </p>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  What Makes Us the Top Web Design Company in Chennai:
                </h4>
                {[
                  {
                    title: 'SEO-First Architecture from Day One',
                    desc: 'Every React JS and WordPress site is built with semantic HTML5, Schema.org markup, optimized meta tags, and XML sitemaps.'
                  },
                  {
                    title: 'Industry-Specific Custom Workflows',
                    desc: 'Tailored web solutions for OMR IT firms, Guindy & Ambattur manufacturers, T. Nagar retailers, and Anna Nagar clinics.'
                  },
                  {
                    title: 'Conversion-Focused Mobile UI/UX',
                    desc: 'Over 78% of Chennai searches happen on smartphones. We integrate sticky WhatsApp chat, instant click-to-call, and fast forms.'
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{item.title}</h5>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Covering <strong className="text-slate-800">OMR, Guindy, Velachery, T. Nagar, Anna Nagar, Porur</strong>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand-navy px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-blue transition"
                >
                  <span>Get Chennai Web Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          </Reveal>

          {/* Pillar 2: Website Development in Medavakkam */}
          <Reveal direction="right" delay={180}>
            <article
              className={`card-3d-hover h-full rounded-2xl bg-white p-7 sm:p-8 shadow-md transition ring-2 ${
                selectedHub === 'medavakkam' ? 'ring-brand-accent' : 'ring-transparent border border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-3 py-1 text-xs font-bold text-brand-accent">
                  <Compass className="h-4 w-4 text-brand-accent" />
                  Your Neighborhood Medavakkam Agency
                </span>
                <span className="text-xs font-semibold text-brand-navy">PIN: 600100 / 600117</span>
              </div>

              <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                Website Development in Medavakkam & South Chennai Corridor
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Searching for reliable <strong className="text-slate-900">website development in Medavakkam</strong>?
                Unlike distant agencies or freelancers who disappear after launch,{' '}
                <strong className="text-slate-900">AmigoWebster</strong> is located right in your neighborhood at{' '}
                <strong className="text-slate-800">Manikandan Nagar 1st Street (Kovilambakkam / Medavakkam)</strong> with
                a second branch at <strong className="text-slate-800">Anna Main Road, Vengambakkam</strong>.
              </p>

              {/* Medavakkam Hyper-Local Landmarks Grid */}
              <div className="mt-6 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Hyper-Local Zones We Serve Around Medavakkam:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {MEDAVAKKAM_LANDMARKS.map((loc) => (
                    <div
                      key={loc.area}
                      className="rounded-xl bg-orange-50/50 border border-orange-100 p-3 hover:bg-orange-50 transition"
                    >
                      <div className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                        <span>{loc.area}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-600 leading-snug">{loc.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-brand-navy text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-amber-300">Visit Our Medavakkam / Kovilambakkam Office</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    No. 9 & 10, S4, 2nd Floor, Sudarkodi Apartments, Chennai – 600117
                  </div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-accent px-3.5 py-2 text-xs font-bold text-white shrink-0 hover:bg-brand-accentHover transition"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        {/* 4-Step SEO-Driven Web Development Workflow */}
        <Reveal direction="up" delay={200}>
          <div className="mt-14 rounded-2xl bg-white p-7 sm:p-9 shadow-sm border border-slate-200/80">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Our Proven 4-Step Engineering Process
              </span>
              <h3 className="mt-1 font-heading text-2xl font-extrabold text-brand-navy">
                How We Build Websites That Rank #1 on Google
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Local Keyword & Competitor Audit',
                  desc: 'We research exact search terms your customers use in Medavakkam, Chennai, and your industry before writing a single line of code.'
                },
                {
                  step: '02',
                  title: 'Clean UI/UX & Mobile Wireframing',
                  desc: 'Neat, distraction-free corporate design using your brand colors with clear call-to-action buttons and fast navigation.'
                },
                {
                  step: '03',
                  title: 'React JS / CMS Development & Schema',
                  desc: 'Clean code implementation with JSON-LD LocalBusiness schema, OpenGraph tags, compressed assets, and SSL security.'
                },
                {
                  step: '04',
                  title: 'Google Indexing & Local Map Ranking',
                  desc: 'We submit your XML sitemap to Google Search Console, connect Google Analytics 4, and optimize your Google Business Profile.'
                }
              ].map((item) => (
                <div
                  key={item.step}
                  className="card-3d-hover relative rounded-xl bg-slate-50 p-5 border border-slate-100"
                >
                  <span className="font-heading text-3xl font-extrabold text-brand-accent/30">{item.step}</span>
                  <h4 className="mt-2 font-heading text-base font-bold text-brand-navy">{item.title}</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
