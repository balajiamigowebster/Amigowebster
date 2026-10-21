import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  Globe,
  Headphones,
  Receipt,
  ShoppingBag
} from 'lucide-react';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  const projectSubItems = [
    {
      id: 'portfolio',
      label: 'WebSite Design',
      desc: '34+ Live Client Websites & Screenshots',
      href: '/website',
      icon: Globe
    },
    {
      id: 'helpdesk',
      label: 'IT Help Desk',
      desc: 'Handle 10x More Support Cases (2026)',
      href: '/helpdesk',
      icon: Headphones
    },
    {
      id: 'billing',
      label: 'Billing Software',
      desc: 'GST Invoicing, Appointments & Finances',
      href: '/billing-software',
      icon: Receipt
    },
    {
      id: 'quickcommerce',
      label: 'Quick Commerce Website',
      desc: 'Hyper-Local Delivery & Online Store',
      href: '/quick-commerce-website',
      icon: ShoppingBag
    }
  ];

  const isProjectSubpage = ['portfolio', 'helpdesk', 'billing', 'quickcommerce'].includes(activePage);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 shadow-sm border-b border-blue-100 backdrop-blur-md">
      {/* Top Bar in Deep Royal Blue */}
      <div className="bg-brand-navy text-sky-100 text-xs py-2 px-4 border-b border-blue-900/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin className="h-3.5 w-3.5 text-sky-400 shrink-0" />
              <span>Medavakkam / Kovilambakkam, Chennai – 600117</span>
            </span>
            <span className="hidden md:inline-block text-blue-400/50">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-sky-300 font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              Website Development in Chennai & Medavakkam from ₹7,000/yr
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-sky-300 transition"
            >
              <Mail className="h-3.5 w-3.5 text-sky-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-sky-300 transition"
            >
              <Phone className="h-3.5 w-3.5 text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        {/* Official AmigoWebster Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/logo-1.png"
            alt="AmigoWebster - Website Development in Chennai & Medavakkam"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Nav Links: Home, About, Projects (with 4 subpages dropdown), Services, Pricing, Contact */}
        <div className="hidden lg:flex items-center gap-1.5">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activePage === 'home'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-slate-700 hover:bg-sky-50 hover:text-brand-navy'
            }`}
          >
            Home
          </a>

          <a
            href="/about-us"
            onClick={(e) => handleNavClick(e, 'about')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activePage === 'about'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-slate-700 hover:bg-sky-50 hover:text-brand-navy'
            }`}
          >
            About
          </a>

          {/* Projects Dropdown with 4 Official Subpages */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                isProjectSubpage
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'text-slate-700 hover:bg-sky-50 hover:text-brand-navy'
              }`}
            >
              <span>Projects</span>
              <span
                className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${
                  isProjectSubpage ? 'bg-brand-accent text-white' : 'bg-sky-100 text-brand-accent'
                }`}
              >
                34+
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown Menu */}
            {projectsDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50">
                <div className="rounded-2xl border border-blue-100 bg-white p-2.5 shadow-2xl ring-1 ring-brand-navy/10">
                  <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-brand-accent">
                    Projects & Product Showcases
                  </div>
                  {projectSubItems.map((sub) => {
                    const SubIcon = sub.icon;
                    const active = activePage === sub.id;
                    return (
                      <a
                        key={sub.id}
                        href={sub.href}
                        onClick={(e) => handleNavClick(e, sub.id)}
                        className={`flex items-start gap-3 rounded-xl p-3 transition ${
                          active ? 'bg-brand-navy text-white' : 'text-slate-800 hover:bg-sky-50'
                        }`}
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                            active ? 'bg-brand-accent text-white' : 'bg-sky-100 text-brand-navy'
                          }`}
                        >
                          <SubIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-extrabold ${active ? 'text-white' : 'text-brand-navy'}`}>
                            {sub.label}
                          </div>
                          <div className={`text-[11px] mt-0.5 ${active ? 'text-sky-200' : 'text-slate-500'}`}>
                            {sub.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <a
            href="/services"
            onClick={(e) => handleNavClick(e, 'services')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activePage === 'services'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-slate-700 hover:bg-sky-50 hover:text-brand-navy'
            }`}
          >
            Services
          </a>

          <a
            href="/pricing"
            onClick={(e) => handleNavClick(e, 'pricing')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activePage === 'pricing'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-slate-700 hover:bg-sky-50 hover:text-brand-navy'
            }`}
          >
            Pricing
          </a>

          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activePage === 'contact'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-slate-700 hover:bg-sky-50 hover:text-brand-navy'
            }`}
          >
            Contact
          </a>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              'Hi AmigoWebster, I am looking for Website Development in Chennai / Medavakkam. Please share details.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/25 hover:from-blue-800 hover:to-sky-600 transition"
          >
            <span>Get Free Quote</span>
            <ArrowUpRight className="h-4 w-4 text-sky-100" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-brand-navy hover:bg-sky-50"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-100 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-1">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                activePage === 'home' ? 'bg-brand-navy text-white' : 'text-slate-700 hover:bg-sky-50'
              }`}
            >
              Home
            </a>
            <a
              href="/about-us"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                activePage === 'about' ? 'bg-brand-navy text-white' : 'text-slate-700 hover:bg-sky-50'
              }`}
            >
              About
            </a>

            {/* Mobile Projects Subpages Group */}
            <div className="rounded-xl bg-sky-50/80 p-2.5 space-y-1">
              <div className="px-2 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-accent">
                Projects & Software Subpages
              </div>
              {projectSubItems.map((sub) => (
                <a
                  key={sub.id}
                  href={sub.href}
                  onClick={(e) => handleNavClick(e, sub.id)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold ${
                    activePage === sub.id ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-white'
                  }`}
                >
                  <span>{sub.label}</span>
                  <span className="text-[10px] opacity-75">{sub.desc.split(' ')[0]}</span>
                </a>
              ))}
            </div>

            <a
              href="/services"
              onClick={(e) => handleNavClick(e, 'services')}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                activePage === 'services' ? 'bg-brand-navy text-white' : 'text-slate-700 hover:bg-sky-50'
              }`}
            >
              Services
            </a>
            <a
              href="/pricing"
              onClick={(e) => handleNavClick(e, 'pricing')}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                activePage === 'pricing' ? 'bg-brand-navy text-white' : 'text-slate-700 hover:bg-sky-50'
              }`}
            >
              Pricing
            </a>
            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                activePage === 'contact' ? 'bg-brand-navy text-white' : 'text-slate-700 hover:bg-sky-50'
              }`}
            >
              Contact
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-blue-100 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-sky-50 py-2.5 text-sm font-bold text-brand-navy"
            >
              <Phone className="h-4 w-4 text-brand-accent" />
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
