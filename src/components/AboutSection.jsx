import React from 'react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/siteData';
import { useScrollParallax, Reveal } from '../hooks/useParallaxAndReveal';
import {
  Award,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Sparkles,
  MapPin,
  ArrowRight,
  PhoneCall,
  Star,
  Quote,
  ShieldCheck,
  TrendingUp,
  Layers
} from 'lucide-react';

export default function AboutSection({ onNavigate }) {
  const scrollY = useScrollParallax();
  const slowOffset = ((scrollY % 1500) - 500) * 0.12;

  return (
    <div className="bg-[#F4F8FD]">
      {/* Dedicated About Us Parallax Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#061529] via-[#0B2545] to-[#134074] py-20 lg:py-24 text-white bg-grid-pattern border-b border-blue-900">
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-brand-accent/25 blur-3xl animate-pulse-glow"
          style={{ transform: `translate3d(0, ${slowOffset}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
          style={{ transform: `translate3d(0, ${-slowOffset}px, 0)` }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 ring-1 ring-white/15">
                <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
                <span>About AmigoWebster • Established Digital & IT Partner</span>
              </div>
              <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Best Powerful Business Consulting &{' '}
                <span className="text-shimmer">Website Development in Chennai & Medavakkam</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                Welcome to <strong className="text-white">AmigoWebster</strong> –{' '}
                <em className="text-amber-300">{COMPANY_INFO.tagline}</em> We are more than just a digital marketing
                and IT services provider; we build your digital presence by crafting functional, SEO-engineered, and
                awe-inspiring websites that drive measurable business growth.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-brand-accentHover transition"
                >
                  <span>Explore All 34+ Website Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition"
                >
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story, Experience & Mission/Vision Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left: 13+ Years Team Experience & Core Values */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="left">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent ring-1 ring-orange-200">
                  <Award className="h-3.5 w-3.5" />
                  <span>Award-Winning Digital Agency</span>
                </div>
                <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight">
                  We Make the Most Creative Digital Solutions for Brand Success
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Headquartered in <strong className="text-slate-900">Kovilambakkam / Medavakkam, Chennai</strong> with
                  branches in <strong className="text-slate-900">Vengambakkam (Chennai)</strong> and{' '}
                  <strong className="text-slate-900">Hosa Road (Bangalore)</strong>, AmigoWebster brings together over{' '}
                  <strong className="text-brand-navy">13+ years of combined leadership and engineering expertise</strong>.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    'Most Powerful & Expert Team',
                    'Data-Driven Insights for Consulting',
                    'Innovative Strategies for Business',
                    'Client-Centric Approach to Marketing'
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3.5 border border-slate-200/80"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-brand-navy">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Achievement Counters */}
                <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl bg-brand-navy p-6 text-white shadow-xl">
                  <div className="text-center">
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-400">13+ Yrs</div>
                    <div className="mt-1 text-[11px] sm:text-xs text-slate-300">Combined Pro Experience</div>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-400">250+</div>
                    <div className="mt-1 text-[11px] sm:text-xs text-slate-300">Works Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-400">99%</div>
                    <div className="mt-1 text-[11px] sm:text-xs text-slate-300">Satisfaction Rate</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Mission & Vision Cards */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal direction="right" delay={120}>
                <div className="card-3d-hover rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-white shadow-md">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">Our Mission</span>
                      <h3 className="font-heading text-xl font-extrabold text-brand-navy">
                        Our Mission to Top Success
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    To be the trusted leader in IT Services and{' '}
                    <strong className="text-slate-800">Website Development in Chennai and Medavakkam</strong> — building
                    on modern technologies, engineering competencies, and customer interests to create lasting value for
                    startups, SMEs, and global enterprises.
                  </p>
                </div>

                <div className="card-3d-hover mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white shadow-md">
                      <Eye className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Our Vision</span>
                      <h3 className="font-heading text-xl font-extrabold text-brand-navy">
                        Our Vision to Top Success
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    To be a best-in-class organization delivering knowledge-intensive, information-based digital
                    services, custom software, e-commerce ecosystems, and high-ROI local SEO across India and
                    international markets.
                  </p>
                </div>

                {/* Dedicated Leadership & Consultant Pillars */}
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-brand-navy to-brand-blue p-6 text-white shadow-lg">
                  <h4 className="font-heading text-base font-bold text-amber-300">
                    Dedicated Expert Consultants & Engineering Team
                  </h4>
                  <p className="mt-1 text-xs text-slate-200 leading-relaxed">
                    Led directly by our CEO & Principal Architect alongside dedicated Full-Stack Web Developers (React
                    JS, WordPress, Laravel) and Digital Marketing / SEO Strategists in Medavakkam, Chennai.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Execution Process from About Us */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80 bg-light-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                How We Deliver Excellence
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-navy">
                Finished Tasks Follow Our Proven 4-Step Process
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  num: '01',
                  title: 'Commercial Planning for Business',
                  desc: 'We align your website architecture, pricing tier, and digital roadmap with your exact commercial goals in Chennai.'
                },
                {
                  num: '02',
                  title: 'Information Gathering & Security',
                  desc: 'Structuring brand assets, SSL security protocols, domain setup, and responsive wireframes for maximum trust.'
                },
                {
                  num: '03',
                  title: 'Related Competitor & SEO Research',
                  desc: 'Deep local keyword analysis for Medavakkam & Chennai so your website outranks competitors on Google.'
                },
                {
                  num: '04',
                  title: 'Finished Process with High Impact',
                  desc: 'Rigorous speed testing, Google Search Console indexing, and launch with ongoing technical support.'
                }
              ].map((step) => (
                <div
                  key={step.num}
                  className="card-3d-hover rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm"
                >
                  <span className="font-heading text-3xl font-extrabold text-brand-accent/35">{step.num}</span>
                  <h3 className="mt-3 font-heading text-base font-extrabold text-brand-navy">{step.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Client Feedback Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Reviewed by Satisfied Clients
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-brand-navy">
                What Our Satisfied Clients Say About AmigoWebster
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.name}
                  className="card-3d-hover rounded-2xl bg-slate-50 p-6 border border-slate-200/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="h-6 w-6 text-slate-200" />
                    </div>
                    <p className="text-sm text-slate-700 italic leading-relaxed">"{item.text}"</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/60">
                    <div className="font-heading text-sm font-bold text-brand-navy">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
