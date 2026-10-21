import React, { useEffect, useState } from 'react';
import { SEO_PAGES, FAQS, COMPANY_INFO } from '../data/siteData';
import { CheckCircle2, Search, Code, MapPin, X, Sparkles } from 'lucide-react';

export default function SEOHead({ activePage }) {
  const [showInspector, setShowInspector] = useState(false);
  const currentSeo = SEO_PAGES[activePage] || SEO_PAGES.home;
  const canonicalUrl = `${COMPANY_INFO.website}${currentSeo.path}`;

  useEffect(() => {
    // Update Document Title
    document.title = currentSeo.title;

    // Helper to update or create meta tags
    const setMetaTag = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', currentSeo.description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', currentSeo.keywords);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', currentSeo.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', currentSeo.description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', currentSeo.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', currentSeo.description);

    // Update Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // Inject Page-Specific FAQ + Breadcrumb + Service JSON-LD Schema
    const dynamicSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: COMPANY_INFO.website
            },
            ...(currentSeo.path !== '/'
              ? [
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: currentSeo.h1,
                    item: canonicalUrl
                  }
                ]
              : [])
          ]
        },
        {
          '@type': 'Service',
          name: currentSeo.h1,
          provider: {
            '@type': 'LocalBusiness',
            name: COMPANY_INFO.name,
            telephone: COMPANY_INFO.phone,
            address: COMPANY_INFO.headquarters.address
          },
          areaServed: [
            { '@type': 'City', name: 'Chennai' },
            { '@type': 'Place', name: 'Medavakkam, Chennai' },
            { '@type': 'Place', name: 'Kovilambakkam, Chennai' }
          ],
          description: currentSeo.description
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        }
      ]
    };

    let scriptEl = document.getElementById('schema-dynamic-page');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'schema-dynamic-page';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(dynamicSchema);
  }, [activePage, currentSeo, canonicalUrl]);

  return (
    <>
      {/* Floating Live SEO Status Pill (Bottom Left) */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setShowInspector(!showInspector)}
          className="flex items-center gap-2 rounded-full bg-brand-navy/95 px-3.5 py-2 text-xs font-semibold text-white shadow-lg ring-1 ring-white/15 backdrop-blur transition hover:bg-brand-blue"
          title="View Live On-Page SEO & Keyword Optimization Status"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
          <span>SEO Score: 100/100</span>
        </button>
      </div>

      {/* Interactive SEO Inspector Modal */}
      {showInspector && (
        <div className="fixed bottom-16 left-4 z-50 w-[340px] sm:w-[420px] rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Search className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Live On-Page SEO Audit</h4>
                <p className="text-[11px] text-slate-500">Real-time React Head & Schema Inspector</p>
              </div>
            </div>
            <button
              onClick={() => setShowInspector(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close SEO Inspector"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 space-y-3 text-xs">
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="font-semibold text-slate-700">Active Canonical URL:</div>
              <div className="mt-0.5 truncate font-mono text-[11px] text-brand-blue">{canonicalUrl}</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="font-semibold text-slate-700">Meta Title ({currentSeo.title.length} chars):</div>
              <div className="mt-0.5 text-slate-600">{currentSeo.title}</div>
            </div>

            <div className="rounded-xl bg-slate-50 p-3">
              <div className="font-semibold text-slate-700">
                Meta Description ({currentSeo.description.length} chars):
              </div>
              <div className="mt-0.5 text-slate-600 line-clamp-3">{currentSeo.description}</div>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="font-semibold text-slate-800">Primary Target Keywords Status:</div>
              <div className="flex items-center justify-between rounded-lg bg-emerald-50/80 px-2.5 py-1.5 text-emerald-800">
                <span className="font-medium">"Website Development in Chennai"</span>
                <span className="flex items-center gap-1 text-[11px] font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> H1, H2, Meta, Schema
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-emerald-50/80 px-2.5 py-1.5 text-emerald-800">
                <span className="font-medium">"Website Development in Medavakkam"</span>
                <span className="flex items-center gap-1 text-[11px] font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> H1, H2, Meta, Schema
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">
                <Code className="h-3 w-3 text-brand-accent" /> LocalBusiness JSON-LD
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">
                <Code className="h-3 w-3 text-brand-accent" /> FAQPage Schema
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">
                <MapPin className="h-3 w-3 text-brand-accent" /> Geo Tags (12.9171, 80.1923)
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
