import type { Metadata } from "next";
import Link from "next/link";
import { faqSections } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import FactoryCtaBackground from "@/components/FactoryCtaBackground";

export const metadata: Metadata = {
  title: "Commercial Carpet FAQ | MOQ, Samples, RFQ & Project Sourcing | VCARPETS",
  description: "Answers to commercial carpet sourcing questions about carpet tiles, hotel carpet, MOQ, samples, custom designs, lead time, specifications, shipping and project quotations from VCARPETS.",
  alternates: { canonical: absoluteUrl("/faq") },
};

const rfqFields = ["Country / Destination", "Application", "Estimated Area", "Product Type", "Construction / Backing", "Color / Design", "Required Standards", "Required Delivery Date"];
const checklist = [
  { title: "Project information", details: "Country and city or port; project type; new build or renovation; target installation date." },
  { title: "Quantity", details: "Floor area, rooms, floors and zones; waste allowance only if already calculated from the pattern, layout, tile direction, roll width and installation plan." },
  { title: "Product", details: "Carpet tiles, hotel or other broadloom, printed carpet, natural sisal, event or stair carpet; say if undecided." },
  { title: "Technical specification", details: "If known: fiber, construction, pile, size, backing, weight, thickness, color, pattern and required test method. Optional — VCARPETS can help review these items." },
  { title: "Samples", details: "State whether you need a stock sample, color or material swatch, or custom strike-off before bulk approval." },
  { title: "Commercial requirements", details: "Target budget if available, preferred Incoterm, destination and requested ready or arrival date. Available trade and delivery terms are confirmed by destination and project." },
];

const questionLinks: Record<string, { label: string; href: string }> = {
  "What carpet tile material is commonly used for high-traffic offices?": { label: "Compare office tiles", href: "/products/carpet-tiles/nylon-office-carpet-tile" },
  "What does 50x50 carpet tile mean?": { label: "Compare 50x50 products", href: "/products/carpet-tiles" },
  "What backing should I choose for commercial carpet tiles?": { label: "Backing comparison", href: "/blog/commercial-carpet-tile-backing-comparison-guide" },
  "What information is needed to quote hotel carpet?": { label: "Hotel broadloom options", href: "/products/wall-to-wall" },
  "How should hotel buyers approve carpet before mass production?": { label: "Sample approval checklist", href: "/blog/commercial-carpet-sample-approval-checklist" },
  "Is there one fixed MOQ for all commercial carpet products?": { label: "Carpet tile MOQ guide", href: "/blog/commercial-carpet-tile-moq-sample-trial-project-guide" },
};

export default function FAQPage() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/faq"),
    url: absoluteUrl("/faq"),
    name: "Commercial Carpet Procurement, RFQ & Project FAQ",
    description: metadata.description,
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "FAQ", item: absoluteUrl("/faq") },
    ],
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(webpageJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <PageHero
        title="Commercial Carpet Procurement, RFQ & Project FAQ"
        eyebrow="B2B Knowledge Hub"
        description="Practical answers for commercial carpet buyers preparing specifications, samples and project quotations."
        image="/images/about/quality-control-inspection.webp"
        imageAlt="Commercial carpet quality inspection background"
        objectPosition="center 45%"
      />

      <section className="section-padding border-b border-border bg-surface">
        <div className="container-fox">
          <p className="max-w-4xl text-base leading-8 text-muted">VCARPETS helps distributors, flooring contractors, hotel procurement teams, designers and project owners compare commercial carpet options before ordering. Start with the application, project area, destination and target date; then review construction, samples and test requirements for the exact product. This page explains which details make a quotation comparable, which questions can wait until specification review and where to find a relevant product or buying guide. MOQ, stock, lead time and available documents depend on the selected construction and must be confirmed in a written project quotation. Use the checklist below even if you have not finalized the material.</p>
          <h2 className="mt-12 text-2xl font-black text-primary md:text-3xl">What Should I Send for a Commercial Carpet Quote?</h2>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-muted">Send the project country or destination, application, estimated floor area, preferred carpet type, construction or backing if known, color or pattern reference, technical or fire-performance requirements, target delivery date and whether you need samples. If some specifications are undecided, ask VCARPETS to narrow the options before pricing.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rfqFields.map((field) => <div key={field} className="border border-border bg-white p-4 text-sm font-bold text-primary">{field}</div>)}
          </div>
          <Link href="/contact?source=%2Ffaq#quote-form" className="btn-fox-orange mt-7 inline-flex">Prepare My RFQ</Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <h2 className="text-2xl font-black text-primary md:text-3xl">Commercial Carpet RFQ Checklist</h2>
          <div className="mt-7 overflow-x-auto border border-border">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead><tr className="bg-primary text-white"><th scope="col" className="p-4">Buyer input</th><th scope="col" className="p-4">What to provide</th></tr></thead>
              <tbody>{checklist.map((item) => <tr key={item.title} className="border-t border-border align-top"><th scope="row" className="w-1/4 p-4 font-bold text-primary">{item.title}</th><td className="p-4 leading-7 text-muted">{item.details}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="border border-border bg-surface p-6"><h3 className="text-xl font-black text-primary">Fast budget quote</h3><p className="mt-3 text-sm leading-7 text-muted">At early sourcing stage, provide product type, area, destination and application. Ask for a reference product range, indicative quotation direction and sample route. This is not a final fixed project price.</p></article>
            <article className="border border-border bg-surface p-6"><h3 className="text-xl font-black text-primary">Complete project quote</h3><p className="mt-3 text-sm leading-7 text-muted">For formal comparison, confirm construction, dimensions, quantity, design, backing, testing, packing, destination and schedule. Ask the written quote to state product, quantity, price basis, Incoterm, packing, lead time, validity and freight inclusions or exclusions.</p></article>
          </div>
          <Link href="/blog/commercial-carpet-sourcing-directory" className="mt-8 inline-block font-bold text-accent underline">Read the Commercial Carpet Sourcing Directory</Link>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 items-start">
             {faqSections.map((section) => (
               <div key={section.title} className="mb-12 md:mb-20">
                 <div className="mb-8 flex items-center gap-4 border-b-4 border-primary pb-4 md:mb-10">
                   <h2 className="text-xl font-black uppercase tracking-[0.12em] text-primary md:text-2xl md:tracking-widest">{section.title}</h2>
                 </div>
                 
                 <div className="space-y-8 md:space-y-12">
                   {section.questions.map((item) => (
                     <div key={item.q} className="group border-l-2 border-border py-2 pl-5 transition-colors hover:border-accent md:pl-8">
                       <h3 className="text-lg font-bold text-primary mb-4 leading-snug flex items-start gap-4">
                         <span className="text-accent italic font-black">Q.</span>
                         {item.q}
                       </h3>
                       <div className="flex items-start gap-4">
                         <span className="text-primary/10 font-black italic text-sm">A.</span>
                         <div><p className="text-muted text-base leading-relaxed font-medium">{item.a}</p>{questionLinks[item.q] ? <Link href={questionLinks[item.q].href} className="mt-3 inline-block text-sm font-bold text-accent underline">{questionLinks[item.q].label}</Link> : null}</div>
                       </div>
                     </div>
                   ))}
                 </div>
                 
                 <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-border bg-surface p-5 sm:flex-row sm:items-center md:mt-12 md:p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/50">Still have specific project questions?</span>
                    <Link href="/contact?source=%2Ffaq#quote-form" className="text-[10px] font-black uppercase tracking-widest text-accent hover:text-primary transition-all flex items-center gap-2">
                      Inquire Technical Team <span>→</span>
                    </Link>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-surface"><div className="container-fox">
        <h2 className="text-2xl font-black text-primary md:text-3xl">Questions You Can Send Our Carpet Project Team</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {[
            ["Office buyer", "We are planning an office floor with rolling-chair traffic. Which tile fibers and backing systems should we compare, and what samples and test documents can you confirm?"],
            ["Hotel buyer", "We are sourcing guest-room and corridor carpet for a renovation. What floor-plan, pattern and sample approvals do you need for a comparable quotation?"],
            ["Distributor", "We are comparing standard carpet tile ranges for repeat orders. Which constructions have available colors, and what MOQ and packing details apply?"],
            ["Contractor", "We have floor plans but no final carpet specification. Can you review the application, area, substrate and project schedule before pricing?"],
          ].map(([buyer, question]) => <article key={buyer} className="border border-border bg-white p-6"><h3 className="font-black text-primary">{buyer}</h3><p className="mt-3 text-sm leading-7 text-muted">“{question}”</p></article>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-accent"><Link href="/products/carpet-tiles" className="underline">Carpet tiles</Link><Link href="/products/wall-to-wall" className="underline">Hotel broadloom</Link><Link href="/blog/commercial-carpet-sourcing-directory" className="underline">Buyer directory</Link><Link href="/resources/technical-library" className="underline">Technical documents</Link></div>
      </div></section>

      {/* Global Support CTA */}
      <FactoryCtaBackground className="py-16 text-center md:py-24">
        <div className="container-fox relative z-10">
          <h2 className="mb-8 text-3xl font-black uppercase leading-tight tracking-[0.08em] md:text-5xl md:tracking-widest">
            Ready to Start Your <br />Technical Assessment?
          </h2>
          <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Our specialized B2B project management team is ready to assist with material selection, technical drawings (CAD), fire rating verification, and global logistics planning.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap md:gap-8">
            <Link href="/contact" className="bg-white px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-2xl transition-all hover:bg-gray-100 md:px-16 md:py-6 md:tracking-[0.3em]">
              Contact Factory Experts
            </Link>
            <Link href="/contact?subject=Samples" className="border-2 border-white/20 px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10 md:px-16 md:py-6 md:tracking-[0.3em]">
              Request Project Samples
            </Link>
          </div>
        </div>
      </FactoryCtaBackground>
    </div>
  );
}
