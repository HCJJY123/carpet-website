import Link from "next/link";
import { brandInfo } from "@/lib/data";
import { getWhatsAppBusinessUrl } from "@/lib/whatsapp";

type ConversionProduct = {
  name: string;
  moq?: string;
  leadTime?: string;
  technicalSpecs?: {
    fireRating?: string;
  };
};

function productMessage(product: ConversionProduct, action: string) {
  return `Hello, I am interested in ${product.name} for a project. ${action}. Please send me price, sample options, MOQ, lead time, and technical data sheet.`;
}

function specCards(product: ConversionProduct) {
  return [
    { label: "MOQ", value: product.moq || "Project-Based" },
    { label: "Lead Time", value: product.leadTime || "About 25 Days" },
    { label: "Sample", value: "Free Sample Available" },
    { label: "Fire Rating", value: product.technicalSpecs?.fireRating || "ASTM E648 Available" },
  ];
}

export function ProductConversionPanel({ product }: { product: ConversionProduct }) {
  const whatsappUrl = getWhatsAppBusinessUrl(productMessage(product, "I would like to discuss a project inquiry"));
  const drawingUrl = getWhatsAppBusinessUrl(productMessage(product, "I want to send my project drawing or floor plan"));
  const sampleUrl = getWhatsAppBusinessUrl(productMessage(product, "I want to get a sample before bulk order"));
  const priceUrl = getWhatsAppBusinessUrl(productMessage(product, "I want to ask the factory price"));
  const emailSubject = encodeURIComponent(`Project inquiry: ${product.name}`);
  const emailBody = encodeURIComponent(
    `Hello Vishomecarpet,\n\nI am interested in ${product.name}.\n\nName:\nCountry:\nWhatsApp:\nProduct:\nQuantity:\nProject details:\n`
  );

  return (
    <div className="space-y-4">
      <ProductSpecCards product={product} />

      <div className="border border-border bg-surface p-5">
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Quick Factory Quote</p>
        <p className="text-sm leading-relaxed text-muted">
          Send us your project area, carpet type, quantity, country, and target delivery date. We will reply with FOB price,
          sample option, technical data sheet, and production lead time.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center rounded-sm bg-[#25D366] px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
        >
          WhatsApp
        </a>
        <a
          href={`mailto:${brandInfo.email}?subject=${emailSubject}&body=${emailBody}`}
          className="flex min-h-12 items-center justify-center rounded-sm border border-border bg-white px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-primary transition-all hover:border-primary hover:bg-surface"
        >
          Email
        </a>
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="flex min-h-12 items-center justify-center rounded-sm bg-primary px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:bg-black"
        >
          Request Quote
        </Link>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <a
          href={drawingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border bg-surface px-4 py-4 text-center text-[10px] font-black uppercase tracking-[0.12em] text-primary transition-all hover:border-accent hover:bg-white"
        >
          Send Your Project Drawing
        </a>
        <a
          href={sampleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border bg-surface px-4 py-4 text-center text-[10px] font-black uppercase tracking-[0.12em] text-primary transition-all hover:border-accent hover:bg-white"
        >
          Get Sample
        </a>
        <a
          href={priceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-border bg-surface px-4 py-4 text-center text-[10px] font-black uppercase tracking-[0.12em] text-primary transition-all hover:border-accent hover:bg-white"
        >
          Ask Factory Price
        </a>
      </div>

      <Link
        href={`/request-sample-box?product=${encodeURIComponent(product.name)}`}
        className="block border border-accent bg-white px-4 py-4 text-center text-[10px] font-black uppercase tracking-[0.14em] text-primary transition-all hover:bg-accent hover:text-white"
      >
        Request Free Sample Box
      </Link>
    </div>
  );
}

export function ProductSpecCards({ product }: { product: ConversionProduct }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {specCards(product).map((item) => (
        <div key={item.label} className="border border-border bg-white p-4 shadow-sm">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-muted">{item.label}</p>
          <p className="text-sm font-black uppercase leading-relaxed text-primary">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function BuyerReasons({ product }: { product?: ConversionProduct } = {}) {
  const reasons = [
    { title: "Factory Supply", text: "Direct commercial carpet production with export support." },
    { title: "Custom Pattern", text: "Pattern, color, backing, and size matched to project needs." },
    { title: "MOQ", text: "Clear MOQ guidance for samples, trial orders, and bulk projects." },
    { title: "Lead Time", text: "Project-based production planning and shipping coordination." },
    { title: "Hotel Project Support", text: "Specification help for corridors, lobbies, rooms, and public areas." },
  ];

  return (
    <section className="section-padding border-y border-border bg-surface">
      <div className="container-fox">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Why buyers choose Vishomecarpet</p>
          <h2 className="text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
            Built for Faster B2B Carpet Procurement
          </h2>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-5">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-white p-6">
              <h3 className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-primary">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{reason.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 border border-primary bg-white p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Request Quote Package</p>
              <h3 className="mb-4 text-2xl font-black uppercase leading-tight text-primary md:text-4xl">
                Send Project Details, Get Price + Samples + TDS
              </h3>
              <p className="text-sm leading-relaxed text-muted md:text-base">
                Send us your project area, carpet type, quantity, country, and target delivery date. We will reply with FOB price,
                sample option, technical data sheet, and production lead time.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href={`/contact${product ? `?product=${encodeURIComponent(product.name)}` : ""}`}
                className="flex min-h-12 items-center justify-center bg-primary px-5 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-black"
              >
                Get Factory Quote
              </Link>
              <Link
                href={`/request-sample-box${product ? `?product=${encodeURIComponent(product.name)}` : ""}`}
                className="flex min-h-12 items-center justify-center border border-border bg-surface px-5 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-primary transition-all hover:border-primary hover:bg-white"
              >
                Request Sample Box
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
