import React, { useState } from 'react';
import { PRICING_PLANS, COMPANY_INFO } from '../data/siteData';
import { Reveal } from '../hooks/useParallaxAndReveal';
import { Check, Sparkles, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PricingSection() {
  const [siteType, setSiteType] = useState('single');
  const [extraPages, setExtraPages] = useState(0);
  const [addLocalSeo, setAddLocalSeo] = useState(true);
  const [addLogoBranding, setAddLogoBranding] = useState(false);

  const basePrices = {
    single: 7000,
    business: 11999,
    ecommerce: 19999
  };

  const calculatedTotal =
    basePrices[siteType] +
    extraPages * 1000 +
    (addLocalSeo ? (siteType === 'single' ? 1500 : 3000) : 0) +
    (addLogoBranding ? 2500 : 0);

  return (
    <section id="pricing" className="py-24 bg-[#F4F8FD] border-t border-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue ring-1 ring-sky-200">
              Transparent & Affordable Packages
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Website Development Cost in Chennai & Medavakkam
            </h2>
            <p className="mt-4 text-base text-slate-600">
              No hidden charges. Whether you are launching your first shop in{' '}
              <strong className="text-slate-800">Medavakkam</strong> with our{' '}
              <strong className="text-brand-accent">₹7,000 starter plan</strong> or scaling a corporate brand across{' '}
              <strong className="text-slate-800">Chennai</strong>, choose a package that fits your goals.
            </p>
          </div>
        </Reveal>

        {/* 3 Main Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <Reveal key={plan.name} direction="up" delay={index * 100} className="h-full">
              <div
                className={`card-3d-hover relative flex h-full flex-col justify-between rounded-2xl p-7 sm:p-8 ${
                  plan.popular
                    ? 'bg-brand-navy text-white shadow-2xl ring-2 ring-brand-accent lg:-translate-y-2'
                    : 'bg-slate-50 text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-accent px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {!plan.popular && (
                    <span className="inline-block rounded-md bg-slate-200/80 px-2.5 py-1 text-[11px] font-bold text-slate-700 mb-3">
                      {plan.badge}
                    </span>
                  )}

                  <h3
                    className={`font-heading text-xl font-extrabold ${
                      plan.popular ? 'text-white mt-2' : 'text-brand-navy'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span
                      className={`font-heading text-4xl font-extrabold ${
                        plan.popular ? 'text-amber-400' : 'text-brand-navy'
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className={`text-xs font-medium ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {plan.priceRange && (
                    <div className={`mt-1 text-xs ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      Typical Custom Range: <strong>{plan.priceRange}</strong>
                    </div>
                  )}

                  <p className={`mt-3 text-xs leading-relaxed ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-slate-200/20 pt-5 text-xs">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            plan.popular ? 'text-amber-400' : 'text-emerald-600'
                          }`}
                        />
                        <span className={plan.popular ? 'text-slate-100 font-medium' : 'text-slate-700 font-medium'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hi AmigoWebster, I want to get started with the "${plan.name}" (${plan.price}) for my business in Chennai/Medavakkam.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition shadow-md ${
                      plan.popular
                        ? 'bg-brand-accent text-white hover:bg-brand-accentHover'
                        : 'bg-brand-navy text-white hover:bg-brand-blue'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive Custom Website Cost Calculator */}
        <Reveal direction="scale" delay={150}>
          <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-9 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-wider">
                  <Calculator className="h-4 w-4" />
                  <span>Interactive Cost Calculator</span>
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                  Customize Your Chennai / Medavakkam Website Package
                </h3>

                {/* Step 1: Base Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    1. Select Base Platform:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'single', label: 'Single-Page (₹7,000)' },
                      { id: 'business', label: 'Corporate Multi-Page (₹11,999)' },
                      { id: 'ecommerce', label: 'E-Commerce Store (₹19,999)' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSiteType(opt.id)}
                        className={`rounded-xl px-3.5 py-2.5 text-xs font-bold border text-left transition ${
                          siteType === opt.id
                            ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Additional Pages Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                    <span>2. Additional Custom Pages (+₹1,000 / page):</span>
                    <span className="text-brand-accent">{extraPages} Extra Pages</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={extraPages}
                    onChange={(e) => setExtraPages(Number(e.target.value))}
                    className="w-full accent-brand-accent cursor-pointer"
                  />
                </div>

                {/* Step 3: SEO & Branding Add-ons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <label className="flex items-center gap-3 rounded-xl bg-white p-3.5 border border-slate-200 cursor-pointer hover:border-brand-accent transition">
                    <input
                      type="checkbox"
                      checked={addLocalSeo}
                      onChange={(e) => setAddLocalSeo(e.target.checked)}
                      className="h-4 w-4 accent-brand-accent rounded"
                    />
                    <div>
                      <span className="block text-xs font-bold text-brand-navy">
                        Hyper-Local SEO & Google Business Setup
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        Rank in Medavakkam & Chennai (+₹{siteType === 'single' ? '1,500' : '3,000'})
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 rounded-xl bg-white p-3.5 border border-slate-200 cursor-pointer hover:border-brand-accent transition">
                    <input
                      type="checkbox"
                      checked={addLogoBranding}
                      onChange={(e) => setAddLogoBranding(e.target.checked)}
                      className="h-4 w-4 accent-brand-accent rounded"
                    />
                    <div>
                      <span className="block text-xs font-bold text-brand-navy">Logo & Corporate Brochure Design</span>
                      <span className="block text-[11px] text-slate-500">High-res vector brand kit (+₹2,500)</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Right Estimate Box */}
              <div className="lg:col-span-5 rounded-2xl bg-brand-navy p-6 sm:p-7 text-white shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Your Estimated Investment
                </span>
                <div className="mt-2 font-heading text-4xl font-extrabold text-white">
                  ₹{calculatedTotal.toLocaleString('en-IN')}
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  Includes 1 Year Fast Hosting, Free SSL Certificate, Responsive UI & Technical Support.
                </p>

                <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>100% Ownership of Source Code & Domain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span>SEO Optimized for Chennai & Medavakkam Keywords</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hi AmigoWebster, I used your Website Cost Calculator. Estimate: ₹${calculatedTotal.toLocaleString(
                      'en-IN'
                    )} (Base: ${siteType}, Extra Pages: ${extraPages}, Local SEO: ${
                      addLocalSeo ? 'Yes' : 'No'
                    }, Branding: ${addLogoBranding ? 'Yes' : 'No'}). Let's discuss!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent py-3.5 text-sm font-bold text-white hover:bg-brand-accentHover transition"
                >
                  <span>Lock This Estimate via WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
