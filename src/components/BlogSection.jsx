import React, { useState } from 'react';
import { BLOG_POSTS, KEYWORD_ANALYSIS_MATRIX } from '../data/blogData';
import { COMPANY_INFO } from '../data/siteData';
import { Reveal } from '../hooks/useParallaxAndReveal';
import {
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Calendar,
  Tag,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Search,
  ChevronLeft,
  PhoneCall,
  HelpCircle
} from 'lucide-react';

export default function BlogSection({
  isFullPage = false,
  activeBlogSlug = null,
  onNavigate,
  onOpenBlog
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const activeArticle = activeBlogSlug
    ? BLOG_POSTS.find((b) => b.slug === activeBlogSlug) || null
    : null;

  const categories = ['All', ...new Set(BLOG_POSTS.map((b) => b.category))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.secondaryKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const displayedPosts = isFullPage ? filteredPosts : BLOG_POSTS.slice(0, 3);

  const handleBlogClick = (e, slug) => {
    e.preventDefault();
    if (onOpenBlog) {
      onOpenBlog(slug);
    }
  };

  const handleTargetClick = (e, pageId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  /* ============================================================================
   * MODE 1: SINGLE BLOG ARTICLE READER (/blog/:slug)
   * ============================================================================ */
  if (isFullPage && activeArticle) {
    const relatedPosts = BLOG_POSTS.filter((b) => b.slug !== activeArticle.slug).slice(0, 3);

    return (
      <article className="bg-[#F4F8FD] pb-20" itemScope itemType="https://schema.org/BlogPosting">
        {/* Article Hero Banner */}
        <section className="relative overflow-hidden bg-[#071936] py-14 lg:py-20 text-white bg-grid-pattern border-b border-blue-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-sky-300">
              <a
                href="/"
                onClick={(e) => handleTargetClick(e, 'home')}
                className="hover:text-white transition"
              >
                Home
              </a>
              <span>/</span>
              <a
                href="/blog"
                onClick={(e) => handleTargetClick(e, 'blog')}
                className="hover:text-white transition"
              >
                SEO Blogs &amp; Guides
              </a>
              <span>/</span>
              <span className="text-white font-semibold truncate max-w-xs sm:max-w-md">
                {activeArticle.primaryKeyword}
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-300 ring-1 ring-sky-400/30">
              <Sparkles className="h-3.5 w-3.5 text-sky-400" />
              <span>{activeArticle.category} • {activeArticle.badge}</span>
            </div>

            <h1
              itemProp="headline"
              className="mt-4 font-heading text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight"
            >
              {activeArticle.title}
            </h1>

            <p itemProp="description" className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed">
              {activeArticle.excerpt}
            </p>

            {/* Author, Date & Target Keyword Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-sky-200 border-t border-blue-800/70 pt-5">
              <span itemProp="author" className="font-bold text-white">
                By {activeArticle.author}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-sky-400" />
                <time itemProp="datePublished" dateTime={activeArticle.publishDate}>
                  {activeArticle.publishDate}
                </time>
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-sky-400" />
                <span>{activeArticle.readTime}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-2.5 py-1 font-bold text-white">
                <Tag className="h-3 w-3" />
                <span>Target Keyword: {activeArticle.primaryKeyword}</span>
              </span>
            </div>
          </div>
        </section>

        {/* Main Article Body */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          {/* Featured Screenshot Card */}
          <div className="overflow-hidden rounded-3xl bg-brand-navy p-2.5 shadow-2xl ring-1 ring-blue-200">
            <img
              itemProp="image"
              src={activeArticle.heroImage}
              alt={`${activeArticle.title} - AmigoWebster Chennai & Medavakkam`}
              className="w-full max-h-[420px] object-cover object-top rounded-2xl"
            />
          </div>

          {/* Content Sections */}
          <div
            itemProp="articleBody"
            className="mt-8 rounded-3xl bg-white p-6 sm:p-10 shadow-md border border-blue-100 space-y-8"
          >
            {activeArticle.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-brand-navy">
                  {sec.heading}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{sec.body}</p>
                {sec.bullets && (
                  <ul className="space-y-2.5 rounded-2xl bg-sky-50/70 p-5 border border-blue-100">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Internal SEO Link Callout Banner (Passes Authority to Money Page) */}
            <div className="rounded-2xl bg-gradient-to-r from-[#061529] via-[#0B2545] to-[#134074] p-6 sm:p-8 text-white shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                    Official Solution by AmigoWebster Chennai &amp; Medavakkam
                  </span>
                  <h3 className="mt-1 font-heading text-lg sm:text-xl font-extrabold text-white">
                    Ready to Rank #1 or Launch {activeArticle.primaryKeyword}?
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-blue-100">
                    Call {COMPANY_INFO.phone} or explore our dedicated solution page with live screenshots.
                  </p>
                </div>
                <a
                  href={activeArticle.targetPageUrl}
                  onClick={(e) => handleTargetClick(e, activeArticle.targetPageId)}
                  className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg hover:from-blue-700 hover:to-sky-600 transition"
                >
                  <span>{activeArticle.targetPageLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Article-Specific FAQ Section */}
            {activeArticle.faqs && activeArticle.faqs.length > 0 && (
              <div className="pt-4 border-t border-blue-100">
                <h2 className="font-heading text-xl font-extrabold text-brand-navy mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-brand-accent" />
                  <span>Frequently Asked Questions About {activeArticle.primaryKeyword}</span>
                </h2>
                <div className="space-y-3">
                  {activeArticle.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl bg-sky-50/60 p-4 border border-blue-100">
                      <h3 className="font-heading text-sm sm:text-base font-bold text-brand-navy">{faq.question}</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Secondary LSI Keywords Tag Cloud */}
            <div className="pt-4 border-t border-blue-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Indexed Google Search Keywords in This Article:
              </div>
              <div className="flex flex-wrap gap-2">
                {[activeArticle.primaryKeyword, ...activeArticle.secondaryKeywords].map((kw) => (
                  <span
                    key={kw}
                    className="rounded-lg bg-sky-50 px-3 py-1 text-xs font-semibold text-brand-navy ring-1 ring-blue-200"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back to Blogs & Related Articles */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-2xl font-extrabold text-brand-navy">
                More SEO Guides &amp; Keyword Articles
              </h2>
              <a
                href="/blog"
                onClick={(e) => handleTargetClick(e, 'blog')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-accent hover:text-brand-navy"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back to All Blogs</span>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((rel) => (
                <a
                  key={rel.id}
                  href={rel.path}
                  onClick={(e) => handleBlogClick(e, rel.slug)}
                  className="card-3d-hover group rounded-2xl bg-white p-5 border border-blue-100 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block rounded-md bg-sky-50 px-2.5 py-0.5 text-[10px] font-bold uppercase text-brand-accent">
                      {rel.category}
                    </span>
                    <h3 className="mt-2.5 font-heading text-sm font-extrabold text-brand-navy group-hover:text-brand-accent transition">
                      {rel.title}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-accent">
                    Read Article →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  /* ============================================================================
   * MODE 2: BLOG HUB PAGE (/blog) OR HOME PAGE BLOG PREVIEW
   * ============================================================================ */
  return (
    <div id="blog" className="bg-[#F0F7FF]">
      {/* Dedicated Hero Banner when viewing /blog */}
      {isFullPage && (
        <section className="relative overflow-hidden bg-[#071936] py-16 lg:py-20 text-white bg-grid-pattern border-b border-blue-900">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 ring-1 ring-sky-400/30">
                <TrendingUp className="h-3.5 w-3.5 text-sky-400" />
                <span>AmigoWebster SEO Knowledge Hub &amp; Keyword Analysis</span>
              </div>
              <h1 className="mt-4 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                SEO Blogs &amp; <span className="text-shimmer">Google Ranking Guides</span> for Chennai &amp; Medavakkam
              </h1>
              <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed">
                Explore our in-depth keyword articles on <strong className="text-white">IT Help Desk Software</strong>,{' '}
                <strong className="text-white">Website Development in Chennai &amp; Medavakkam</strong>,{' '}
                <strong className="text-white">GST Billing Software</strong>, and{' '}
                <strong className="text-white">Quick Commerce</strong>—engineered to connect local businesses with
                proven digital solutions.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 border-t border-blue-100 bg-light-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Keyword Analysis Matrix (Shown on /blog Full Page) */}
          {isFullPage && (
            <Reveal direction="up">
              <div className="mb-16 rounded-3xl bg-white p-6 sm:p-8 shadow-md border border-blue-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-blue-100">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent">
                      <Sparkles className="h-3.5 w-3.5" />
                      Live Google Keyword Analysis &amp; Topic Cluster Strategy
                    </span>
                    <h2 className="mt-1 font-heading text-2xl font-extrabold text-brand-navy">
                      Target Keywords Engineered to Rank #1 on Google
                    </h2>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-4 py-2.5 text-xs font-bold text-white hover:bg-brand-blue transition shrink-0"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-sky-300" />
                    <span>Free SEO Consultation: {COMPANY_INFO.phone}</span>
                  </a>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-blue-100 bg-sky-50/80 text-brand-navy font-heading font-bold">
                        <th className="py-3 px-4 rounded-tl-xl">Topic Cluster</th>
                        <th className="py-3 px-4">Primary Google Keyword</th>
                        <th className="py-3 px-4">Hyper-Local Variant</th>
                        <th className="py-3 px-4">Competition &amp; Speed</th>
                        <th className="py-3 px-4 rounded-tr-xl">Target Landing Page</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-50">
                      {KEYWORD_ANALYSIS_MATRIX.map((row) => (
                        <tr key={row.cluster} className="hover:bg-sky-50/50 transition">
                          <td className="py-3.5 px-4 font-bold text-brand-navy">{row.cluster}</td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block rounded-md bg-blue-50 px-2.5 py-1 font-bold text-brand-accent ring-1 ring-blue-200">
                              {row.primaryKeyword}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 font-medium">{row.localVariant}</td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                              <CheckCircle2 className="h-3 w-3" /> {row.competition}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-mono text-xs text-brand-blue font-bold">{row.targetUrl}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          )}

          {/* Section Header (Home Page or Blog Hub) */}
          <Reveal direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue ring-1 ring-sky-200">
                  <BookOpen className="h-3.5 w-3.5 text-brand-accent" />
                  <span>SEO Blog &amp; Digital Growth Insights</span>
                </span>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                  Latest Guides on <span className="text-brand-accent">HelpDesk, Web Development &amp; Local SEO</span>
                </h2>
              </div>

              {isFullPage ? (
                <div className="relative w-full lg:w-80 shrink-0">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles or keywords..."
                    className="w-full rounded-xl border border-blue-200 bg-white pl-10 pr-4 py-2.5 text-xs font-medium text-slate-800 shadow-sm focus:border-brand-accent focus:outline-none"
                  />
                </div>
              ) : (
                <a
                  href="/blog"
                  onClick={(e) => handleTargetClick(e, 'blog')}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-brand-accent transition shrink-0"
                >
                  <span>View All {BLOG_POSTS.length} SEO Articles &amp; Keyword Matrix</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </Reveal>

          {/* Category Filter Pills (on Full Page) */}
          {isFullPage && (
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                    selectedCategory === cat
                      ? 'bg-brand-navy text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-sky-50 ring-1 ring-blue-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedPosts.map((post, idx) => (
              <Reveal key={post.id} direction="up" delay={(idx % 3) * 70} className="h-full">
                <article
                  className="card-3d-hover group flex h-full flex-col justify-between rounded-3xl bg-white overflow-hidden shadow-sm border border-blue-100"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div>
                    <a
                      href={post.path}
                      onClick={(e) => handleBlogClick(e, post.slug)}
                      className="block relative aspect-[16/9] w-full overflow-hidden bg-brand-navy"
                    >
                      <img
                        itemProp="image"
                        src={post.heroImage}
                        alt={`${post.title} - AmigoWebster`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-brand-navy/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-300 ring-1 ring-sky-400/30 backdrop-blur">
                          {post.category}
                        </span>
                      </div>
                    </a>

                    <div className="p-6">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2.5">
                        <span className="inline-flex items-center gap-1 font-semibold text-brand-accent">
                          <Tag className="h-3 w-3" />
                          {post.primaryKeyword}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3
                        itemProp="headline"
                        className="font-heading text-lg font-extrabold text-brand-navy group-hover:text-brand-accent transition leading-snug"
                      >
                        <a href={post.path} onClick={(e) => handleBlogClick(e, post.slug)}>
                          {post.title}
                        </a>
                      </h3>

                      <p itemProp="description" className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-blue-50 flex items-center justify-between">
                    <a
                      href={post.path}
                      onClick={(e) => handleBlogClick(e, post.slug)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-navy group-hover:text-brand-accent transition"
                    >
                      <span>Read Full Guide</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>

                    <a
                      href={post.targetPageUrl}
                      onClick={(e) => handleTargetClick(e, post.targetPageId)}
                      className="text-[11px] font-bold text-brand-accent hover:underline"
                    >
                      {post.targetPageUrl === '/helpdesk'
                        ? 'HelpDesk Page →'
                        : post.targetPageUrl === '/billing-software'
                        ? 'Billing Page →'
                        : post.targetPageUrl === '/quick-commerce-website'
                        ? 'Quick Commerce →'
                        : 'View Solution →'}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
