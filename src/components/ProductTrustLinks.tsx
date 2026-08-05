import Link from "next/link";

export default function ProductTrustLinks({
  productName,
  quoteHref,
}: {
  productName: string;
  quoteHref: string;
}) {
  const links = [
    { label: "Factory profile", href: "/factory", note: "Production, QC, sample review and export project support" },
    { label: "Technical documents", href: "/technical-documents", note: "Buyer guides, TDS request path and project document limitations" },
    { label: "Commercial terms", href: "/commercial-terms", note: "Reference price, MOQ, availability and quotation validity" },
    { label: "Buyer FAQ", href: "/faq", note: "Common sourcing questions about samples, MOQ, shipping and documents" },
    { label: "Sample support", href: "/request-sample-box", note: "Material sample and trial-order discussion before project purchase" },
  ];

  return (
    <section className="border-y border-border bg-surface" data-funnel-section="trust_links">
      <div className="container-fox py-10 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent">Before RFQ</p>
            <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-primary md:text-3xl">
              Confirm documents, terms and sample path for {productName}
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-sm border border-border bg-white p-4 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-card">
                <span className="block text-xs font-black uppercase tracking-[0.1em] text-primary">{item.label}</span>
                <span className="mt-2 block text-xs font-semibold leading-5 text-muted">{item.note}</span>
              </Link>
            ))}
            <Link href={quoteHref} className="rounded-sm bg-primary p-4 text-white transition hover:-translate-y-0.5 hover:bg-black hover:shadow-card">
              <span className="block text-xs font-black uppercase tracking-[0.1em]">Send inquiry</span>
              <span className="mt-2 block text-xs font-semibold leading-5 text-white/75">Share area, destination, timeline and required documents</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
