import React from 'react';
import { COMPANY_INFO, CHENNAI_AREAS, AREA_BLOG_MAP } from '../data/siteData';
import { Phone, Mail, MapPin, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export default function Footer({ onNavigate, onOpenBlog }) {
  const handleLink = (e, pageId) => {
    e.preventDefault();
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAreaClick = (e, area) => {
    e.preventDefault();
    const slug = AREA_BLOG_MAP[area] || 'website-development-in-medavakkam';
    if (onOpenBlog) {
      onOpenBlog(slug);
    } else {
      onNavigate('blog');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-brand-navy text-blue-100 border-t border-blue-900"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Local SEO Service Areas Banner */}
      <div className="border-b border-blue-900/80 bg-[#071930] py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Hyper-Local SEO & Web Development Coverage
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Serving Businesses Across Medavakkam, South Chennai & All Major Chennai Hubs
              </h3>
            </div>
            <button
              onClick={(e) => handleLink(e, 'contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white"
            >
              <span>Request Free Local SEO Consultation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {CHENNAI_AREAS.map((area) => {
              const slug = AREA_BLOG_MAP[area] || 'website-development-in-medavakkam';
              return (
                <a
                  key={area}
                  href={`/blog/${slug}`}
                  onClick={(e) => handleAreaClick(e, area)}
                  className="rounded-lg bg-brand-blue/60 px-3 py-1.5 text-xs text-sky-100 hover:bg-brand-accent hover:text-white transition border border-blue-800/60 inline-flex items-center gap-1.5 focus:outline-none"
                  title={`Website Development in ${area}`}
                >
                  <span>Website Development in {area}</span>
                  <ArrowRight className="h-3 w-3 opacity-60" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Official White AmigoWebster Logo & About */}
          <div>
            <a
              href="/"
              onClick={(e) => handleLink(e, 'home')}
              className="inline-block mb-4 focus:outline-none"
            >
              <img
                src="/amigologo.png"
                alt="AmigoWebster Official Logo"
                itemProp="logo"
                className="h-14 w-auto object-contain rounded-lg"
              />
            </a>
            <span itemProp="name" className="sr-only">
              AmigoWebster
            </span>
            <p className="text-sm text-blue-200/80 leading-relaxed mb-5">
              <strong className="text-white">{COMPANY_INFO.tagline}</strong> We specialize in result-oriented{' '}
              <strong className="text-sky-200">Website Development in Chennai</strong> and{' '}
              <strong className="text-sky-200">Website Development in Medavakkam</strong>, delivering custom React JS,
              WordPress, E-Commerce, and Local SEO solutions.
            </p>
            <div className="flex items-center gap-2 text-xs text-sky-300 font-medium">
              <CheckCircle className="h-4 w-4 text-sky-400" />
              <span>ISO-Standard Clean Code & 99.9% Hosting Uptime</span>
            </div>
          </div>

          {/* Column 2: Core SEO & Project Subpages */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Projects & Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/website"
                  onClick={(e) => handleLink(e, 'portfolio')}
                  className="hover:text-sky-300 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
                  WebSite Design (34+ Live Projects)
                </a>
              </li>
              <li>
                <a
                  href="/helpdesk"
                  onClick={(e) => handleLink(e, 'helpdesk')}
                  className="hover:text-sky-300 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
                  IT Help Desk Software 2026
                </a>
              </li>
              <li>
                <a
                  href="/billing-software"
                  onClick={(e) => handleLink(e, 'billing')}
                  className="hover:text-sky-300 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
                  GST Billing Software 2026
                </a>
              </li>
              <li>
                <a
                  href="/quick-commerce-website"
                  onClick={(e) => handleLink(e, 'quickcommerce')}
                  className="hover:text-sky-300 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
                  Quick Commerce Website 2026
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, 'services')}
                  className="hover:text-sky-300 transition flex items-center gap-1.5"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
                  Local SEO in Medavakkam & Chennai
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  onClick={(e) => handleLink(e, 'pricing')}
                  className="hover:text-sky-300 transition flex items-center gap-1.5 text-sky-300 font-semibold"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-sky-400" />
                  ₹7,000 Starter Website Package
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" onClick={(e) => handleLink(e, 'home')} className="hover:text-white transition">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="/about-us" onClick={(e) => handleLink(e, 'about')} className="hover:text-white transition">
                  About AmigoWebster
                </a>
              </li>
              <li>
                <a href="/website" onClick={(e) => handleLink(e, 'portfolio')} className="hover:text-white transition">
                  Website Projects (34+ Screenshots)
                </a>
              </li>
              <li>
                <a href="/pricing" onClick={(e) => handleLink(e, 'pricing')} className="hover:text-white transition">
                  Website Pricing Plans
                </a>
              </li>
              <li>
                <a href="/blog" onClick={(e) => handleLink(e, 'blog')} className="hover:text-white transition text-sky-300 font-semibold">
                  SEO Blogs &amp; Ranking Guides
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink(e, 'contact')} className="hover:text-white transition">
                  Request Free SEO Audit
                </a>
              </li>
              <li>
                <a
                  href="https://amigowebster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition inline-flex items-center gap-1"
                >
                  <Globe className="h-3.5 w-3.5 text-sky-400" />
                  amigowebster.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Branches */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
              Headquarters & Branches
            </h4>
            <div className="space-y-3.5 text-sm">
              <div
                className="flex items-start gap-2.5"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Medavakkam / Kovilambakkam HQ:</span>
                  <span itemProp="streetAddress" className="text-xs text-blue-200/80 leading-relaxed">
                    No. 9 & 10, S4, Second Floor, Sudarkodi Apartments, Manikandan Nagar 1st Street, Kovilambakkam /
                    Medavakkam, <span itemProp="addressLocality">Chennai</span> –{' '}
                    <span itemProp="postalCode">600117</span>
                  </span>
                </div>
              </div>

              {COMPANY_INFO.branches.map((branch) => (
                <div key={branch.city} className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-sky-100 block text-xs">{branch.city}:</span>
                    <span className="text-xs text-blue-200/80">{branch.address}</span>
                  </div>
                </div>
              ))}

              <div className="pt-2 space-y-2 border-t border-blue-900">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  itemProp="telephone"
                  className="flex items-center gap-2 font-bold text-white hover:text-sky-300 transition"
                >
                  <Phone className="h-4 w-4 text-sky-400" />
                  {COMPANY_INFO.phone}
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  itemProp="email"
                  className="flex items-center gap-2 text-blue-100 hover:text-sky-300 transition"
                >
                  <Mail className="h-4 w-4 text-sky-400" />
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-blue-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-300/80 gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">AmigoWebster</strong> (amigowebster.com). All
            rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Crafted with React JS • Optimized for{' '}
            <strong className="text-white">Website Development in Chennai</strong> &{' '}
            <strong className="text-white">Website Development in Medavakkam</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
