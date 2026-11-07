import fs from 'node:fs';
import path from 'node:path';
import { BLOG_POSTS } from '../src/data/blogData.js';

const distDir = path.resolve('dist');
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// Extract Vite-injected <script type="module" ...> and <link rel="stylesheet" ...> tags from dist/index.html
const assetTagsMatch = baseHtml.match(/(<script type="module"[^>]*><\/script>\s*<link rel="stylesheet"[^>]*>|<link rel="stylesheet"[^>]*>\s*<script type="module"[^>]*><\/script>)/s);
const assetTags = assetTagsMatch ? assetTagsMatch[0] : '';

function writeStaticSeoPage({ dir, url, title, description, keywords, schema, bodyHtml }) {
  const targetDir = path.join(distDir, dir);
  fs.mkdirSync(targetDir, { recursive: true });

  const html = `<!doctype html>
<html lang="en-IN" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta name="author" content="AmigoWebster" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${url}" />
    <meta name="geo.region" content="IN-TN" />
    <meta name="geo.placename" content="Medavakkam, Chennai, Tamil Nadu" />
    <meta name="geo.position" content="12.9171;80.1923" />
    <meta name="ICBM" content="12.9171, 80.1923" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:site_name" content="AmigoWebster" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
      rel="stylesheet"
    />
    <script type="application/ld+json">
      ${JSON.stringify(schema)}
    </script>
    ${assetTags}
  </head>
  <body class="bg-[#F4F8FD] text-slate-900 antialiased selection:bg-brand-accent selection:text-white">
    <!-- Branded Logo Loading Screen (Smooth transition into React, hides pre-rendered flash) -->
    <div id="app-loading-screen" style="position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;background:linear-gradient(135deg,#061529 0%,#0B2545 50%,#134074 100%);z-index:9999999;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity 0.35s ease;pointer-events:all;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:24px;">
        <div style="width:130px;height:130px;border-radius:28px;background:rgba(255,255,255,0.06);padding:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 20px 40px rgba(0,0,0,0.45);border:1px solid rgba(255,255,255,0.15);animation:amigoPulse 1.8s ease-in-out infinite;">
          <img src="/logo-1.png" alt="AmigoWebster" style="width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.3));" />
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
          <div style="width:120px;height:4px;background:rgba(255,255,255,0.12);border-radius:99px;overflow:hidden;position:relative;">
            <div style="position:absolute;top:0;left:0;height:100%;width:45%;background:linear-gradient(90deg,#0ea5e9,#38bdf8);border-radius:99px;animation:amigoLoading 1.4s cubic-bezier(0.65,0,0.35,1) infinite;"></div>
          </div>
          <span style="color:#94a3b8;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;">Loading AmigoWebster</span>
        </div>
      </div>
      <style>
        @keyframes amigoPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 20px 40px rgba(0,0,0,0.45), 0 0 0 0 rgba(56,189,248,0.2); }
          50% { transform: scale(1.05); box-shadow: 0 25px 50px rgba(0,0,0,0.55), 0 0 28px 6px rgba(56,189,248,0.4); }
        }
        @keyframes amigoLoading {
          0% { left: -45%; width: 40%; }
          50% { left: 35%; width: 55%; }
          100% { left: 105%; width: 40%; }
        }
      </style>
    </div>
    <noscript>
      <style>
        #app-loading-screen { display: none !important; }
      </style>
    </noscript>

    <div id="root">${bodyHtml}</div>
  </body>
</html>`;

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  console.log(`Generated pre-rendered SEO page: dist/${dir}/index.html`);
}

// 1. Pre-render Core Subpages
const subpages = [
  {
    dir: 'helpdesk',
    url: 'https://amigowebster.in/helpdesk',
    title: 'IT Help Desk Software in Chennai & Medavakkam | HelpDesk 2026 – AmigoWebster',
    description:
      'Best IT Help Desk Software in Chennai & Medavakkam by AmigoWebster (https://amigowebster.in/helpdesk). Handle 10x more support cases, ticket management, SLA alerts, email automation & multi-channel support.',
    keywords:
      'it help desk software in chennai, helpdesk software medavakkam, it ticketing system chennai, customer support software chennai, amigowebster helpdesk, help desk ticketing software india, sla monitoring software chennai',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://amigowebster.in/helpdesk#software',
          name: 'AmigoWebster IT Help Desk Software 2026',
          applicationCategory: 'BusinessApplication',
          applicationSubCategory: 'IT Help Desk & Support Ticketing System',
          operatingSystem: 'Web, Cloud, Windows, macOS, Android, iOS',
          url: 'https://amigowebster.in/helpdesk',
          image: 'https://amigowebster.com/wp-content/uploads/2026/05/1-img-e1779434796527.jpg',
          description:
            'IT Help Desk Software in Chennai & Medavakkam by AmigoWebster. Handle 10x more support cases with multi-channel inbox, 60% quicker response time with automations, SLA monitoring alerts, and role-based ticket management.',
          offers: {
            '@type': 'Offer',
            price: '11999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: 'https://amigowebster.in/helpdesk'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            bestRating: '5',
            ratingCount: '68'
          }
        }
      ]
    },
    bodyHtml: `
      <main>
        <article>
          <h1>IT Help Desk Software in Chennai &amp; Medavakkam – Handle 10x More Support Cases</h1>
          <p>
            <strong>Discover HelpDesk 2026 by AmigoWebster:</strong> A helpdesk is a support system that helps users resolve
            technical issues, answer queries, and provide assistance related to products or services. Commonly used in IT
            companies, schools, banks, healthcare organizations, and businesses across <strong>Chennai &amp; Medavakkam</strong>
            to ensure smooth support operations.
          </p>
          <ul>
            <li>Messages from many channels in one place</li>
            <li>60% quicker response time with automations</li>
            <li>AI tools for writing, summarizing, and support</li>
          </ul>
          <p><a href="/blog/it-help-desk-software-in-chennai">Read Complete Guide: Best IT Help Desk Software in Chennai &amp; Medavakkam</a></p>
        </article>
      </main>`
  },
  {
    dir: 'billing-software',
    url: 'https://amigowebster.in/billing-software',
    title: 'Billing Software in Medavakkam & Chennai | GST Billing 2026 – AmigoWebster',
    description:
      'Best GST Billing Software in Medavakkam & Chennai by AmigoWebster (https://amigowebster.in/billing-software). All invoices, payments, appointments, and expenses in one place with 70% faster billing.',
    keywords:
      'billing software in medavakkam, billing software in chennai, gst billing software medavakkam, clinic hospital billing software chennai, amigowebster billing software, pos billing software chennai',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          name: 'AmigoWebster GST Billing Software 2026',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Cloud, Windows, Android, iOS',
          url: 'https://amigowebster.in/billing-software',
          description:
            'Cloud GST Billing Software in Medavakkam & Chennai. 70% faster billing, instant GST invoices, inventory management, clinic doctor appointment scheduling, and profit reports.',
          offers: {
            '@type': 'Offer',
            price: '11999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            bestRating: '5',
            ratingCount: '74'
          }
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the best billing software in Medavakkam for retail and clinics?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'AmigoWebster Billing Software 2026 is the top-rated GST billing and retail/clinic management software in Medavakkam, offering barcode billing, thermal receipt printing, patient appointment records, and GST filing reports.'
              }
            }
          ]
        }
      ]
    },
    bodyHtml: `
      <main>
        <article>
          <h1>Billing Software in Medavakkam &amp; Chennai – Streamline Your Business Finances</h1>
          <p>Cloud-ready GST Billing &amp; Practice/Retail Management Software for retail shops, clinics, and hospitals in Medavakkam and Chennai.</p>
          <p><a href="/blog/gst-billing-software-in-medavakkam-chennai">Read Complete Guide: GST Billing Software in Medavakkam &amp; Chennai</a></p>
          <p><a href="/">Return to AmigoWebster: Website Development in Medavakkam &amp; Chennai</a></p>
        </article>
      </main>`
  },
  {
    dir: 'quick-commerce-website',
    url: 'https://amigowebster.in/quick-commerce-website',
    title: 'Quick Commerce Website Development in Chennai & Medavakkam – AmigoWebster',
    description:
      'Accelerate your business growth with Quick Commerce Website Development in Chennai & Medavakkam by AmigoWebster (https://amigowebster.in/quick-commerce-website).',
    keywords:
      'quick commerce website development chennai, hyperlocal delivery website medavakkam, grocery delivery app chennai, amigowebster quick commerce',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AmigoWebster Quick Commerce Platform 2026',
      applicationCategory: 'BusinessApplication',
      url: 'https://amigowebster.in/quick-commerce-website'
    },
    bodyHtml: `
      <main>
        <article>
          <h1>Quick Commerce Website Development in Chennai &amp; Medavakkam</h1>
          <p>Deliver groceries, food, medicines, and retail essentials to customers in minutes with real-time inventory sync and UPI/Razorpay checkout.</p>
        </article>
      </main>`
  },
  {
    dir: 'website',
    url: 'https://amigowebster.in/website',
    title: 'Website Design Projects & Live Screenshots | AmigoWebster Chennai & Medavakkam',
    description:
      'Explore all 37+ live website development projects with full screenshots by AmigoWebster in Chennai & Medavakkam.',
    keywords:
      'website development projects chennai, amigowebster portfolio, web design examples medavakkam chennai',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'AmigoWebster Website Design Projects & Live Portfolio',
      url: 'https://amigowebster.in/website'
    },
    bodyHtml: `
      <main>
        <article>
          <h1>Our Complete Website Design Projects &amp; Live Screenshots in Chennai &amp; Medavakkam</h1>
          <p>Browse 37+ live client websites designed, developed, and SEO-optimized by AmigoWebster in Medavakkam and Chennai.</p>
        </article>
      </main>`
  },
  {
    dir: 'about-us',
    url: 'https://amigowebster.in/about-us',
    title: 'About AmigoWebster | Website Development Company in Medavakkam & Chennai',
    description:
      'Learn about AmigoWebster – your gateway to making an eminent digital presence. Best website development in Chennai and Medavakkam with 13+ years of combined team expertise.',
    keywords:
      'about amigowebster, web design agency medavakkam, website development company chennai',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About AmigoWebster – Website Development in Chennai & Medavakkam',
      url: 'https://amigowebster.in/about-us'
    },
    bodyHtml: `
      <main>
        <article>
          <h1>About AmigoWebster – Best Website Development in Chennai &amp; Medavakkam</h1>
          <p>Headquartered in Kovilambakkam / Medavakkam, Chennai, AmigoWebster brings 13+ years of combined engineering experience and 250+ completed websites.</p>
        </article>
      </main>`
  },
  {
    dir: 'blog',
    url: 'https://amigowebster.in/blog',
    title: 'SEO Blogs & Google Ranking Guides | Website Development & HelpDesk Chennai – AmigoWebster',
    description:
      'Read expert SEO blogs and guides by AmigoWebster on IT Help Desk Software in Chennai, Website Development in Medavakkam & Chennai, GST Billing Software, and Quick Commerce.',
    keywords:
      'amigowebster blog, website development in chennai blog, it help desk software chennai guide, billing software medavakkam guide',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'AmigoWebster SEO Blogs & Google Ranking Guides',
      url: 'https://amigowebster.in/blog'
    },
    bodyHtml: `
      <main>
        <section>
          <h1>SEO Blogs &amp; Google Ranking Guides for Chennai &amp; Medavakkam</h1>
          <ul>
            ${BLOG_POSTS.map((b) => `<li><a href="${b.path}">${b.title}</a> — ${b.excerpt}</li>`).join('\n            ')}
          </ul>
        </section>
      </main>`
  },
  {
    dir: 'pricing',
    url: 'https://amigowebster.in/pricing',
    title: 'Website Development Cost in Chennai & Medavakkam (2026 Price List) – AmigoWebster',
    description:
      'Transparent 2026 Website Development Cost in Chennai: ₹7,000 Starter Single-Page Website, ₹11,999 Corporate Business Website & ₹19,999 E-Commerce Store with Domain, Hosting & Free SSL.',
    keywords:
      'website development cost in chennai, low cost website design chennai, 7000 website package chennai, business website price in chennai, website development in medavakkam, web design cost chennai 2026',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          name: 'Website Development in Chennai & Medavakkam',
          description:
            'Professional Website Development in Chennai & Medavakkam by AmigoWebster. Transparent pricing: ₹7,000 Starter, ₹11,999 Business, ₹19,999 E-Commerce.',
          brand: {
            '@type': 'Brand',
            name: 'AmigoWebster'
          },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: '7000',
            highPrice: '19999',
            offerCount: '3'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            bestRating: '5',
            reviewCount: '148'
          }
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the average website development cost in Chennai?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'At AmigoWebster, website development cost in Chennai starts from ₹7,000 for a Single-Page Starter Website, ₹11,999 for a 5-12 Page Corporate Business Website with SEO, and ₹19,999 for custom E-Commerce stores.'
              }
            },
            {
              '@type': 'Question',
              name: 'Are domain, hosting, and SSL included in the ₹7,000 package?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! Both the ₹7,000 Starter and ₹11,999 Corporate packages include 1 year of high-speed cloud hosting, free SSL security certificate, domain registration, and mobile-responsive UI with zero hidden fees.'
              }
            }
          ]
        }
      ]
    },
    bodyHtml: `
      <main>
        <article>
          <h1>Website Development Cost in Chennai &amp; Medavakkam (2026 Transparent Packages)</h1>
          <p>Confused by wildly different website quotes in Chennai? Here is a transparent, itemized 2026 price guide comparing ₹7,000 Starter Websites, ₹11,999 Corporate SEO Websites, and ₹19,999 E-Commerce Stores by AmigoWebster.</p>
          <section>
            <h2>Complete 2026 Website Development Pricing Tiers</h2>
            <ul>
              <li><strong>1. Starter Single-Page Website (₹7,000 / year):</strong> Best for local startups, clinics, and shops in Medavakkam &amp; Chennai. Delivered in 3–5 days with Free Domain (.in/.com), 1 Year Cloud Hosting &amp; WhatsApp CTA.</li>
              <li><strong>2. Professional Business &amp; SEO Website (₹11,999):</strong> 5–12 custom pages, React JS or WordPress CMS, advanced on-page SEO &amp; JSON-LD schema, domain + hosting + SSL. Delivered in 7–12 days.</li>
              <li><strong>3. E-Commerce &amp; Custom Web App (₹19,999 onwards):</strong> Unlimited products, Razorpay/UPI checkout, automated GST invoicing, and admin analytics dashboard. Delivered in 2–3 weeks.</li>
            </ul>
          </section>
          <p><a href="/blog/website-development-cost-in-chennai">Read Complete 2026 Price Comparison Guide: Website Development Cost in Chennai</a></p>
          <p><a href="/">Return to AmigoWebster Home: Website Development in Chennai &amp; Medavakkam</a></p>
        </article>
      </main>`
  },
  {
    dir: 'services',
    url: 'https://amigowebster.in/services',
    title: 'Website Development Services in Chennai & Medavakkam – AmigoWebster',
    description:
      'Full-stack Website Development Services in Chennai & Medavakkam: Custom React JS, WordPress, E-Commerce, Local SEO & GST Billing Software from ₹7,000.',
    keywords:
      'website development services chennai, web design services medavakkam, ecommerce development chennai, react js developers chennai',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Website Development Services in Chennai & Medavakkam',
      provider: {
        '@type': 'LocalBusiness',
        name: 'AmigoWebster'
      },
      areaServed: {
        '@type': 'City',
        name: 'Chennai'
      }
    },
    bodyHtml: `
      <main>
        <article>
          <h1>Full-Stack Website Development Services in Chennai &amp; Medavakkam</h1>
          <p>AmigoWebster provides end-to-end digital solutions for growing businesses, startups, clinics, and manufacturers across Chennai and Medavakkam.</p>
          <ul>
            <li><a href="/">Website Development in Chennai &amp; Medavakkam</a></li>
            <li><a href="/pricing">Website Development Cost in Chennai (₹7,000 / ₹11,999 / ₹19,999)</a></li>
            <li><a href="/helpdesk">IT Help Desk Software 2026</a></li>
            <li><a href="/billing-software">Billing Software in Medavakkam</a></li>
            <li><a href="/quick-commerce-website">Quick Commerce Website Development</a></li>
          </ul>
        </article>
      </main>`
  }
];

for (const page of subpages) {
  writeStaticSeoPage(page);
}

// 2. Pre-render All Individual Blog Articles (/blog/:slug)
for (const post of BLOG_POSTS) {
  const sectionsHtml = post.sections
    .map(
      (sec) => `
          <section>
            <h2>${sec.heading}</h2>
            <p>${sec.body}</p>
            ${sec.bullets ? `<ul>${sec.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>` : ''}
          </section>`
    )
    .join('\n');

  const faqsHtml =
    post.faqs && post.faqs.length > 0
      ? `
          <section>
            <h2>Frequently Asked Questions About ${post.primaryKeyword}</h2>
            ${post.faqs.map((f) => `<h3>${f.question}</h3><p>${f.answer}</p>`).join('\n')}
          </section>`
      : '';

  writeStaticSeoPage({
    dir: `blog/${post.slug}`,
    url: `https://amigowebster.in${post.path}`,
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(', '),
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.metaDescription,
          image: post.heroImage,
          datePublished: post.publishDate,
          dateModified: post.publishDate,
          author: {
            '@type': 'Person',
            name: post.author
          },
          publisher: {
            '@type': 'Organization',
            name: 'AmigoWebster'
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://amigowebster.in${post.path}`
          }
        },
        {
          '@type': 'ProfessionalService',
          '@id': 'https://amigowebster.in/#business',
          name: 'AmigoWebster - Website Designer & Web Development Studio',
          url: 'https://amigowebster.in',
          telephone: '+919445332233',
          priceRange: '₹7,000 - ₹50,000',
          image: 'https://amigowebster.in/favicon-512x512.png',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'No. 9 & 10, S4, Second Floor, Sudarkodi Apartments, Manikandan Nagar 1st Street, Kovilambakkam',
            addressLocality: 'Medavakkam, Chennai',
            addressRegion: 'Tamil Nadu',
            postalCode: '600117',
            addressCountry: 'IN'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 12.9171,
            longitude: 80.1923
          },
          areaServed: [
            'Medavakkam', 'Kovilambakkam', 'Chromepet', 'Tambaram', 'Pallikaranai',
            'Perumbakkam', 'Velachery', 'OMR', 'Sholinganallur', 'Guindy', 'Porur',
            'Ambattur', 'Anna Nagar', 'Nungambakkam', 'T Nagar', 'Adyar', 'Chennai'
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Web Design and Development Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Designer Near Me' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development Near Me' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development in Chennai' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Website Development' } }
            ]
          }
        },
        ...(post.faqs && post.faqs.length > 0
          ? [
              {
                '@type': 'FAQPage',
                mainEntity: post.faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: f.answer
                  }
                }))
              }
            ]
          : [])
      ]
    },
    bodyHtml: `
      <main>
        <article>
          <h1>${post.title}</h1>
          <p>${post.excerpt}</p>
          ${sectionsHtml}
          <p><a href="${post.targetPageUrl}">${post.targetPageLabel}</a></p>
          ${faqsHtml}
        </article>
      </main>`
  });
}

// 3. Backward Compatibility Redirect Pages for Legacy Combined Slugs
const legacyRedirects = [
  {
    dir: 'blog/website-development-in-t-nagar-adyar',
    target: '/blog/website-development-in-t-nagar',
    title: 'Website Development in T Nagar & Adyar',
    links: [
      { url: '/blog/website-development-in-t-nagar', label: 'Website Development in T Nagar' },
      { url: '/blog/website-development-in-adyar', label: 'Website Development in Adyar' }
    ]
  },
  {
    dir: 'blog/website-development-in-omr-sholinganallur',
    target: '/blog/website-development-in-omr',
    title: 'Website Development in OMR & Sholinganallur',
    links: [
      { url: '/blog/website-development-in-omr', label: 'Website Development in OMR' },
      { url: '/blog/website-development-in-sholinganallur', label: 'Website Development in Sholinganallur' }
    ]
  },
  {
    dir: 'blog/website-development-in-tambaram-chromepet',
    target: '/blog/website-development-in-tambaram',
    title: 'Website Development in Tambaram & Chromepet',
    links: [
      { url: '/blog/website-development-in-tambaram', label: 'Website Development in Tambaram' },
      { url: '/blog/website-development-in-chromepet', label: 'Website Development in Chromepet' }
    ]
  },
  {
    dir: 'blog/website-development-in-perumbakkam-sithalapakkam',
    target: '/blog/website-development-in-perumbakkam',
    title: 'Website Development in Perumbakkam & Sithalapakkam',
    links: [
      { url: '/blog/website-development-in-perumbakkam', label: 'Website Development in Perumbakkam' }
    ]
  },
  {
    dir: 'blog/website-development-in-guindy-porur-ambattur',
    target: '/blog/website-development-in-guindy',
    title: 'Website Development in Guindy, Porur & Ambattur',
    links: [
      { url: '/blog/website-development-in-guindy', label: 'Website Development in Guindy' },
      { url: '/blog/website-development-in-porur', label: 'Website Development in Porur' },
      { url: '/blog/website-development-in-ambattur', label: 'Website Development in Ambattur' }
    ]
  },
  {
    dir: 'blog/website-development-in-anna-nagar-nungambakkam',
    target: '/blog/website-development-in-anna-nagar',
    title: 'Website Development in Anna Nagar & Nungambakkam',
    links: [
      { url: '/blog/website-development-in-anna-nagar', label: 'Website Development in Anna Nagar' },
      { url: '/blog/website-development-in-nungambakkam', label: 'Website Development in Nungambakkam' }
    ]
  }
];

for (const redir of legacyRedirects) {
  writeStaticSeoPage({
    dir: redir.dir,
    url: `https://amigowebster.in${redir.target}`,
    title: `${redir.title} – AmigoWebster`,
    description: `Looking for ${redir.title}? Explore our separated, dedicated local web development guides for Chennai.`,
    keywords: 'website development in chennai',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: redir.title,
      url: `https://amigowebster.in${redir.target}`
    },
    bodyHtml: `
      <main>
        <article>
          <h1>${redir.title}</h1>
          <p>This guide has been upgraded into dedicated neighborhood portals for precision SEO:</p>
          <ul>
            ${redir.links.map(l => `<li><a href="${l.url}">${l.label}</a></li>`).join('\n            ')}
          </ul>
          <script>window.location.replace("${redir.target}");</script>
        </article>
      </main>`
  });
}
