import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data/siteData';
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare
} from 'lucide-react';

export default function FAQAndContactSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Medavakkam / South Chennai',
    service: 'Business Website Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const whatsappMessage = `Hi AmigoWebster,
Name: ${formState.name}
Phone: ${formState.phone}
Email: ${formState.email}
Location: ${formState.location}
Service: ${formState.service}
Requirement: ${formState.message || 'Please call me to discuss website development.'}`;

    window.open(
      `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="bg-[#F4F8FD]">
      {/* FAQ Section */}
      <section id="faq" className="py-20 border-t border-blue-100 bg-sky-50/70">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue ring-1 ring-sky-200">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Questions About Website Development in Chennai & Medavakkam
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Everything you need to know about our pricing, timelines, React JS & WordPress stacks, and local SEO.
            </p>
          </div>

          <div className="mt-10 space-y-3.5">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-heading text-sm sm:text-base font-bold text-brand-navy hover:bg-slate-100/80 transition"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-brand-accent shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-[#F4F8FD] border-t border-blue-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: NAP Details & Branch Offices */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue ring-1 ring-sky-200">
                  Get In Touch Today
                </span>
                <h2 className="mt-3 font-heading text-3xl font-extrabold text-brand-navy">
                  Let’s Build Your Website in Medavakkam & Chennai
                </h2>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Visit our Medavakkam / Kovilambakkam office for a face-to-face consultation or request a free website
                  & SEO roadmap over phone or WhatsApp.
                </p>
              </div>

              {/* Direct Call & Email Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-4 rounded-2xl bg-brand-navy p-4 text-white shadow-md hover:bg-brand-blue transition"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent text-white shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-300">Direct Phone / WhatsApp Consulting</span>
                    <span className="font-heading text-lg font-extrabold">{COMPANY_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 text-slate-900 border border-slate-200 shadow-sm hover:border-brand-accent transition"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-brand-accent shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Official Email Address</span>
                    <span className="font-heading text-base font-bold text-brand-navy">{COMPANY_INFO.email}</span>
                  </div>
                </a>
              </div>

              {/* Headquarters & Branches Card */}
              <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy">{COMPANY_INFO.headquarters.label}</h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {COMPANY_INFO.headquarters.address}
                    </p>
                  </div>
                </div>

                {COMPANY_INFO.branches.map((branch) => (
                  <div key={branch.city} className="flex items-start gap-3 border-t border-slate-100 pt-3.5">
                    <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{branch.city}</h4>
                      <p className="mt-0.5 text-xs text-slate-500">{branch.address}</p>
                    </div>
                  </div>
                ))}

                <div className="flex items-center gap-2 border-t border-slate-100 pt-3.5 text-xs text-slate-600">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span>Mon – Sat: 9:00 AM – 8:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quote Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-6 sm:p-9 border border-slate-200 shadow-lg">
                <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
                  Request a Free Quote & Local SEO Audit
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  Fill in your details below — our Chennai web development team responds within 15 minutes.
                </p>

                {submitted && (
                  <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-emerald-50 p-4 text-xs sm:text-sm font-semibold text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span>
                      Thank you! Your inquiry is ready on WhatsApp, or call us directly at {COMPANY_INFO.phone}.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., S. रमेश / Karthik"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Business Email</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-accent focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Location in Chennai</label>
                      <select
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm bg-white focus:border-brand-accent focus:outline-none"
                      >
                        <option>Medavakkam / Kovilambakkam</option>
                        <option>Pallikaranai / Velachery</option>
                        <option>Vengambakkam / Tambaram</option>
                        <option>OMR / Sholinganallur / Perumbakkam</option>
                        <option>Guindy / T. Nagar / Central Chennai</option>
                        <option>Anna Nagar / Porur / Ambattur</option>
                        <option>Bangalore / Other City</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Required *</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm bg-white focus:border-brand-accent focus:outline-none"
                    >
                      <option>Starter Single-Page Website (₹7,000 Plan)</option>
                      <option>Multi-Page Business Website Development in Chennai</option>
                      <option>Local Website Development in Medavakkam + SEO</option>
                      <option>E-Commerce Website with Payment Gateway</option>
                      <option>Custom React JS / Laravel Web Application</option>
                      <option>Local SEO, Google Ads & Digital Marketing</option>
                      <option>GST Billing Software / Logo & Branding</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Details / Goals</label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your business, target keywords, or reference websites..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-brand-accent focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-brand-accentHover transition"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Inquiry & Get Instant Quote</span>
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3.5 text-sm font-bold text-brand-navy hover:bg-slate-100 transition"
                    >
                      <Phone className="h-4 w-4 text-brand-accent" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Quick Connect Button (Bottom Right) */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
          'Hi AmigoWebster, I visited your website and need assistance with Website Development in Chennai / Medavakkam.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-xl hover:bg-emerald-700 transition"
        aria-label="Chat on WhatsApp with AmigoWebster"
      >
        <MessageSquare className="h-4 w-4 fill-white" />
        <span>WhatsApp Us</span>
      </a>
    </div>
  );
}
