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
    <link rel="icon" type="image/png" href="/logo-1.png" />
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
      '@type': 'SoftwareApplication',
      name: 'AmigoWebster GST Billing Software 2026',
      applicationCategory: 'BusinessApplication',
      url: 'https://amigowebster.in/billing-software'
    },
    bodyHtml: `
      <main>
        <article>
          <h1>Billing Software in Medavakkam &amp; Chennai – Streamline Your Business Finances</h1>
          <p>Cloud-ready GST Billing &amp; Practice/Retail Management Software for retail shops, clinics, and hospitals in Medavakkam and Chennai.</p>
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
      'Explore all 34+ live website development projects with full screenshots by AmigoWebster in Chennai & Medavakkam.',
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
          <p>Browse 34+ live client websites designed, developed, and SEO-optimized by AmigoWebster in Medavakkam and Chennai.</p>
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
