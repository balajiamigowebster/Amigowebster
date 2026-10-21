import React from 'react';
import { useScrollParallax, Reveal } from '../hooks/useParallaxAndReveal';
import { Sparkles, Rocket, ShieldCheck, Globe, Cpu, ArrowRight, MapPin } from 'lucide-react';

export default function ParallaxShowcase({ onNavigate }) {
  const scrollY = useScrollParallax();

  // Compute bounded parallax offsets for smooth multi-layer depth
  const slowOffset = ((scrollY % 1600) - 600) * 0.12;
  const mediumOffset = ((scrollY % 1600) - 600) * -0.18;
  const fastOffset = ((scrollY % 1600) - 600) * 0.25;

  return (
    <section
      className="relative overflow-hidden bg-brand-navy py-24 text-white border-y border-white/10"
      aria-label="Creative Digital Experience & Parallax Showcase"
    >
      {/* Layer 1: Parallax Grid & Radial Nebula */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60"
        style={{ transform: `translate3d(0, ${slowOffset}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand-accent/25 blur-3xl animate-pulse-glow"
        style={{ transform: `translate3d(${slowOffset * 0.5}px, ${mediumOffset}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl animate-pulse-glow"
        style={{ transform: `translate3d(${mediumOffset * 0.5}px, ${fastOffset}px, 0)` }}
      />

      {/* Layer 2: Floating Geometric Parallax Shapes */}
      <div
        className="pointer-events-none absolute top-16 left-8 hidden lg:flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-xl"
        style={{ transform: `translate3d(0, ${fastOffset}px, 0) rotate(${scrollY * 0.04}deg)` }}
      >
        <Cpu className="h-7 w-7 text-amber-400" />
      </div>

      <div
        className="pointer-events-none absolute bottom-16 right-10 hidden lg:flex h-20 w-20 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-md shadow-xl"
        style={{ transform: `translate3d(0, ${mediumOffset}px, 0) rotate(-${scrollY * 0.03}deg)` }}
      >
        <Globe className="h-9 w-9 text-brand-accent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: Creative Story & Parallax Text */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 ring-1 ring-white/20 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
                <span>Next-Gen Web Design & Local SEO Engineering</span>
              </div>

              <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Crafted for Speed.{' '}
                <span className="text-shimmer block mt-1">
                  Engineered to Dominate Google in Chennai & Medavakkam.
                </span>
              </h2>

              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Most websites look ordinary and load slowly. At <strong className="text-white">AmigoWebster</strong>, we
                blend interactive micro-animations, parallax depth, and ultra-clean React JS architecture so your brand
                stands out in <strong className="text-amber-300">Medavakkam, OMR, Velachery, and across Chennai</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-brand-accentHover transition transform hover:-translate-y-0.5"
                >
                  <Rocket className="h-4 w-4" />
                  <span>Transform Your Website Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 transition"
                >
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>Explore 34+ Live Projects</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right: Multi-Depth Parallax Floating Cards */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Parallax Card 1 */}
              <div
                style={{ transform: `translate3d(0, ${slowOffset * 0.45}px, 0)` }}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl transition hover:border-brand-accent/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent text-white shadow-lg">
                  <Rocket className="h-5 w-5" />
                </div>
                <div className="mt-4 font-heading text-2xl font-extrabold text-white">0.8s Load Time</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                  Core Web Vitals Passed
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Google rewards fast websites. Our React & Vite builds score 95–100 on mobile and desktop speed tests.
                </p>
              </div>

              {/* Parallax Card 2 (Offset downward) */}
              <div
                style={{ transform: `translate3d(0, ${mediumOffset * 0.45}px, 0)` }}
                className="sm:mt-8 rounded-2xl border border-white/15 bg-gradient-to-br from-brand-accent/25 to-white/5 p-6 backdrop-blur-xl shadow-2xl transition hover:border-amber-400/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-brand-navy shadow-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="mt-4 font-heading text-2xl font-extrabold text-white">#1 Local Pack</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                  Medavakkam & Chennai SEO
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Built-in Geo-coordinates, LocalBusiness JSON-LD schema, and neighborhood keyword targeting.
                </p>
              </div>

              {/* Parallax Card 3 */}
              <div
                style={{ transform: `translate3d(0, ${mediumOffset * -0.35}px, 0)` }}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl transition hover:border-emerald-400/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="mt-4 font-heading text-2xl font-extrabold text-white">₹7,000 Starter</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  Zero Hidden Charges
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Complete with 1 year cloud hosting, SSL security certificate, WhatsApp CTA, and responsive UI.
                </p>
              </div>

              {/* Parallax Card 4 */}
              <div
                style={{ transform: `translate3d(0, ${slowOffset * -0.45}px, 0)` }}
                className="sm:mt-8 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl transition hover:border-blue-400/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="mt-4 font-heading text-2xl font-extrabold text-white">Interactive UI/UX</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-blue-300">
                  Modern Brand Experience
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Smooth parallax layers, custom calculators, and instant WhatsApp conversion funnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
