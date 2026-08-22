import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import ProductImage from "@/components/ProductImage";
import PageHero from "@/components/PageHero";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

const blogDescription =
  "Factory-written commercial carpet procurement guides on carpet tile price, MOQ, hotel carpet specifications, samples, shipping, installation risk, and supplier verification.";

export const metadata: Metadata = {
  title: "Commercial Carpet Procurement Intelligence | Blog | VISHOME",
  description: blogDescription,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Commercial Carpet Procurement Intelligence | VISHOME",
    description:
      "B2B buying guides for commercial carpet tiles, hotel carpet, samples, MOQ, logistics, installation and sourcing decisions.",
    url: absoluteUrl("/blog"),
    type: "website",
    images: [{ url: absoluteUrl("/images/blog-material-comparison.webp"), alt: "Commercial carpet procurement guide library" }],
  },
};

const planningTools = [
  {
    title: "Carpet Tile Specification Checklist",
    label: "Spec / RFQ",
    href: "/blog/commercial-carpet-tile-specification-checklist-b2b-buyers",
    text: "Check fiber, backing, fire, VOC, concrete risk, chair-wheel zones and RFQ fields before comparing suppliers.",
  },
  {
    title: "Carpet Tile MOQ Guide",
    label: "MOQ / Samples",
    href: "/blog/commercial-carpet-tile-moq-sample-trial-project-guide",
    text: "Plan sample, trial order and project quantity before asking for commercial carpet tile pricing.",
  },
  {
    title: "Hotel Carpet Supplier Checklist",
    label: "Hotel Spec",
    href: "/blog/hotel-carpet-supplier-checklist-project-order-guide",
    text: "12 questions to verify construction, documents, samples, roll plan and project order risk.",
  },
  {
    title: "Shipping & Project Delivery",
    label: "Logistics",
    href: "/blog/shipping-optimization-5000sqm-mumbai-14days",
    text: "Use packing volume, destination, approval date and installation deadline to plan delivery.",
  },
  {
    title: "Request Sample Box",
    label: "Samples",
    href: "/request-sample-box",
    text: "Check color, backing, pile feel and construction before bulk project production.",
  },
  {
    title: "Request Project Quote",
    label: "Quote",
    href: "/contact?product=Commercial%20Carpet%20Project&source=%2Fblog#quote-form",
    text: "Send product type, area, destination and required date for a factory quotation path.",
  },
];

const buyerPaths = [
  {
    title: "Office Carpet Tiles",
    href: "/products/carpet-tiles",
    text: "Start here for 50x50 modular carpet tiles, PP or nylon options, backing, MOQ and replacement planning.",
  },
  {
    title: "Hotel Carpet Projects",
    href: "/hotel-carpet",
    text: "Start here for guestrooms, corridors, lobbies, broadloom selection, acoustic concerns and sample approval.",
  },
  {
    title: "Gold Mining Carpet Mat",
    href: "/products/public-area/gold-mining-carpet-mat",
    text: "Start here for sluice carpet, miners moss comparison, bulk matting, samples and distributor orders.",
  },
];

const topicClusters = [
  {
    title: "Price, MOQ & Samples",
    intent: "Budget planning before RFQ",
    match: ["moq", "sample", "cost", "cheap", "roi"],
  },
  {
    title: "Carpet Tile Specification",
    intent: "Office and commercial tile selection",
    match: ["carpet-tile", "office", "concrete"],
  },
  {
    title: "Hotel Carpet Procurement",
    intent: "Guestroom, corridor and hospitality carpet decisions",
    match: ["hotel", "hospitality", "axminster", "wilton", "noise", "patterns"],
  },
  {
    title: "Installation, Shipping & Site Risk",
    intent: "Avoid delivery, climate and installation mistakes",
    match: ["shipping", "installation", "climate", "concrete"],
  },
  {
    title: "Supplier Verification",
    intent: "Check factory capability before approval",
    match: ["supplier", "checklist", "reddit", "procurement"],
  },
  {
    title: "Gold Mining Matting",
    intent: "Sluice carpet and fine gold recovery mat sourcing",
    match: ["sluice", "gold", "miners", "vortex"],
  },
];

const blogFaqs = [
  {
    question: "What should I read first before buying commercial carpet from China?",
    answer:
      "Start with the category that matches your project: office carpet tiles, hotel carpet, public-area carpet, or gold mining carpet mat. Then confirm MOQ, samples, backing, fire requirement, destination, and installation timeline before comparing price.",
  },
  {
    question: "How do I compare commercial carpet tile price?",
    answer:
      "Compare fiber, backing, pile weight, tile size, traffic use, sample stage, MOQ, packing, freight and replacement strategy. A square-meter price without construction details is not enough for a project decision.",
  },
  {
    question: "What information is needed for a hotel carpet quote?",
    answer:
      "Send guest area, square meters, corridor width or roll plan, design direction, destination, target date, required fire or acoustic documents, and whether a swatch or strike-off sample is needed.",
  },
  {
    question: "Can I request carpet samples before a bulk order?",
    answer:
      "Yes. Vishomecarpet can discuss material swatches, color review, backing samples and project-specific sample paths before bulk production. Final options depend on the selected construction and quantity.",
  },
  {
    question: "Which documents should be confirmed before ordering?",
    answer:
      "Confirm the technical data sheet, construction details, backing, fire or test document requirement, packing method, commercial terms, quotation validity, and whether documents match the exact quoted product.",
  },
  {
    question: "How do I contact Vishomecarpet for a project quotation?",
    answer:
      "Use the project quote form with product type, estimated area, destination country and business email. The export team can then reply with MOQ, sample options, lead time and quotation basis.",
  },
];

function wordsInPost(post: BlogPost) {
  const values = [post.title, post.subtitle, post.description, post.painPoint || ""];
  (post.sections || []).forEach((section) => {
    values.push(section.title, ...section.paragraphs);
    section.blocks?.forEach((block) => {
      if (block.type === "paragraph") values.push(block.text);
      if (block.type === "subheading") values.push(block.title);
      if (block.type === "callout") values.push(block.label || "", block.text);
      if (block.type === "image") values.push(block.alt, block.caption || "");
      if (block.type === "list") block.items.forEach((item) => values.push(item.title || "", item.text));
      if (block.type === "table") block.rows.forEach((row) => values.push(...row));
    });
  });

  return values.join(" ").split(/\s+/).filter(Boolean).length;
}

function readMinutes(post: BlogPost) {
  return Math.max(4, Math.ceil(wordsInPost(post) / 230));
}

function buyerIntent(post: BlogPost) {
  const text = `${post.slug} ${post.title} ${post.description || post.subtitle} ${post.category}`.toLowerCase();
  if (text.includes("hotel") || text.includes("hospitality") || text.includes("axminster")) return "Hotel buyer";
  if (text.includes("office") || text.includes("carpet tile") || text.includes("concrete")) return "Office / tile buyer";
  if (text.includes("sluice") || text.includes("gold") || text.includes("miners")) return "Mining buyer";
  if (text.includes("shipping") || text.includes("installation") || text.includes("climate")) return "Project manager";
  return "Procurement buyer";
}

function postsForCluster(cluster: (typeof topicClusters)[number]) {
  return blogPosts.filter((post) => {
    const haystack = `${post.slug} ${post.title} ${post.description || post.subtitle} ${post.category}`.toLowerCase();
    return cluster.match.some((term) => haystack.includes(term));
  });
}

function BlogCard({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white transition-all duration-300 hover:border-accent hover:shadow-xl"
    >
      {!compact ? (
        <div className="aspect-[16/10] overflow-hidden bg-surface">
          <ProductImage
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized={post.imageUnoptimized}
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-accent">
          <span>{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
          <span>{readMinutes(post)} min read</span>
        </div>
        <h2 className="text-lg font-black leading-tight text-primary transition-colors group-hover:text-accent md:text-xl">
          {post.title}
        </h2>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">{post.description || post.subtitle}</p>
        <div className="mt-5 grid gap-2 border-t border-border pt-4 text-[10px] font-black uppercase tracking-[0.12em] text-primary sm:grid-cols-2">
          <span>{buyerIntent(post)}</span>
          <span className="text-accent sm:text-right">{post.dateModified || post.date}</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-xs font-black uppercase tracking-[0.14em] text-primary">Read Guide</span>
          <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const featuredPosts = blogPosts.slice(0, 3);
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/blog")}#webpage`,
    url: absoluteUrl("/blog"),
    name: "Commercial Carpet Procurement Intelligence",
    description: blogDescription,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: absoluteUrl(`/blog/${post.slug}`),
      })),
    },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blogFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <PageHero
        title="Commercial Carpet Procurement Intelligence"
        eyebrow="Factory-Written Buyer Guides"
        description="Guides on carpet tile price, MOQ, hotel carpet specifications, samples, shipping, installation risk, supplier checks, and project quotation planning for B2B buyers."
        image="/images/blog-material-comparison.webp"
        imageAlt="Commercial carpet material comparison background"
        objectPosition="center 50%"
      />

      <section className="border-b border-border bg-[#FFF8F1] py-10 md:py-12" aria-labelledby="planning-tools-heading">
        <div className="container-fox">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Start With the Buying Question</p>
              <h2 id="planning-tools-heading" className="mt-2 text-2xl font-black uppercase leading-tight text-primary md:text-4xl">
                Planning Tools for Carpet Buyers
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Use these guides before asking for price. A better RFQ usually produces a faster and more accurate factory quotation.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {planningTools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group border border-[#C8752A]/20 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
                <span className="inline-flex rounded-sm bg-[#FFF8F1] px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#9a5a20]">
                  {tool.label}
                </span>
                <h3 className="mt-4 text-base font-black uppercase leading-tight text-primary group-hover:text-accent">{tool.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{tool.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="buyer-paths-heading">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent">Start Here</p>
            <h2 id="buyer-paths-heading" className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Choose the Guide Path That Matches Your Project
            </h2>
          </div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {buyerPaths.map((path) => (
              <Link key={path.href} href={path.href} className="group bg-white p-7 transition-colors hover:bg-surface md:p-9">
                <h3 className="text-xl font-black uppercase leading-tight text-primary group-hover:text-accent">{path.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{path.text}</p>
                <span className="mt-6 inline-flex text-xs font-black uppercase tracking-[0.14em] text-accent">Open Path →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-primary py-12 text-white md:py-14" data-funnel-section="blog_quote_shortcut">
        <div className="container-fox grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Need Price, MOQ or Sample Advice?</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-4xl">Turn a Buying Question Into a Project Quote</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
              Send product type, estimated area, destination country and target date. Vishomecarpet can recommend a suitable carpet construction and reply with MOQ, sample options, lead time and quotation basis.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/contact?product=Commercial%20Carpet%20Project&source=%2Fblog#quote-form" className="inline-flex min-h-13 items-center justify-center bg-[#d9480f] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#b83a08]">
              Request Project Quote
            </Link>
            <Link href="/request-sample-box" className="inline-flex min-h-13 items-center justify-center border border-white/25 bg-white/10 px-6 py-4 text-center text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-primary">
              Request Samples
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface" aria-labelledby="featured-guides-heading">
        <div className="container-fox">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent">Featured Procurement Guides</p>
              <h2 id="featured-guides-heading" className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">High-Intent Reading First</h2>
            </div>
            <Link href="#all-guides" className="text-xs font-black uppercase tracking-[0.14em] text-accent hover:text-primary">
              View All Guides →
            </Link>
          </div>
          <div className="grid gap-7 lg:grid-cols-3">
            {featuredPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <section id="all-guides" className="section-padding scroll-mt-24" aria-labelledby="all-guides-heading">
        <div className="container-fox">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent">Procurement Topic Clusters</p>
            <h2 id="all-guides-heading" className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
              Read by Buying Intent, Not by Publish Date
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              These clusters help buyers and AI answer engines connect each article to a real sourcing question, product category and quotation path.
            </p>
          </div>
          <div className="space-y-12">
            {topicClusters.map((cluster) => {
              const posts = postsForCluster(cluster);
              if (!posts.length) return null;

              return (
                <section key={cluster.title} aria-labelledby={`${cluster.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-heading`}>
                  <div className="mb-5 flex flex-col gap-2 border-l-4 border-accent pl-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h3 id={`${cluster.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-heading`} className="text-2xl font-black uppercase leading-tight text-primary md:text-3xl">
                        {cluster.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold leading-relaxed text-muted">{cluster.intent}</p>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-accent">{posts.length} Guides</span>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {posts.map((post) => <BlogCard key={`${cluster.title}-${post.slug}`} post={post} compact />)}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface" aria-labelledby="blog-faq-heading">
        <div className="container-fox max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-accent">Buyer FAQ</p>
            <h2 id="blog-faq-heading" className="text-3xl font-black uppercase leading-tight text-primary md:text-4xl">
              Commercial Carpet Blog Questions
            </h2>
          </div>
          <div className="space-y-4">
            {blogFaqs.map((item) => (
              <details key={item.question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
