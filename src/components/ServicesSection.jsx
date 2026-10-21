import React from 'react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/siteData';
import { useScrollParallax, Reveal } from '../hooks/useParallaxAndReveal';
import {
  Globe,
  ShoppingCart,
  TrendingUp,
  Code2,
  Megaphone,
  Layers,
  Check,
  ArrowUpRight
} from 'lucide-react';

const iconMap = {
  Globe,
  ShoppingCart,
  TrendingUp,
  Code2,
  Megaphone,
  Layers
};

export default function ServicesSection() {
  const scrollY = useScrollParallax();
  const bgParallax = ((scrollY % 1400) - 500) * 0.1;

  return (
    <section id="services" className="relative py-24 bg-[#F4F8FD] overflow-hidden">
      {/* Subtle Floating Parallax Background Orbs */}
      <div
        className="pointer-events-none absolute top-20 -right-24 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
        style={{ transform: `translate3d(0, ${bgParallax}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute bottom-20 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
        style={{ transform: `translate3d(0, ${-bgParallax}px, 0)` }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue ring-1 ring-sky-200">
              End-to-End Digital Solutions
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Full-Stack Website Development in Chennai & Medavakkam
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              From affordable ₹7,000 single-page websites for neighborhood businesses in{' '}
              <strong className="text-slate-800">Medavakkam</strong> to custom React JS, E-Commerce, and SEO campaigns
              for enterprises across <strong className="text-slate-800">Chennai</strong>, AmigoWebster delivers
              measurable digital growth.
            </p>
          </div>
        </Reveal>

        {/* Services Grid with Staggered Reveal & 3D Hover Lift */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <Reveal key={service.id} direction="up" delay={index * 80} className="h-full">
                <article className="card-3d-hover group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white shadow-md group-hover:bg-brand-accent group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-700 group-hover:bg-orange-50 group-hover:text-brand-accent transition">
                        {service.keywordTag}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-brand-navy group-hover:text-brand-accent transition">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{service.shortDesc}</p>

                    {/* Feature List */}
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                        `Hi AmigoWebster, I would like to enquire about ${service.title} in Chennai / Medavakkam.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-accent transition"
                    >
                      <span>Enquire About {service.title.split(' ')[0]}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Technology Strip */}
        <Reveal direction="up" delay={200}>
          <div className="mt-14 rounded-2xl bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy p-7 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Modern Technology Stack
              </span>
              <h3 className="font-heading text-xl font-bold mt-1">
                Built with Clean, Future-Proof Frameworks for Maximum SEO Performance
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5 text-xs font-bold">
              {[
                'React JS 18',
                'Node.js',
                'WordPress & WooCommerce',
                'PHP & Laravel',
                'Shopify & OpenCart',
                'Tailwind CSS',
                'Schema.org JSON-LD',
                'Google Ads & GA4'
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl bg-white/10 px-3.5 py-2 text-slate-100 ring-1 ring-white/15 backdrop-blur hover:bg-brand-accent hover:text-white transition cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
