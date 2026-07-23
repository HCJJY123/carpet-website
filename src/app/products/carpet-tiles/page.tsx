import type { Metadata } from "next";
import { products } from "@/lib/data";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { absoluteUrl, categoryBreadcrumbJsonLd, productItemListJsonLd, safeJsonLd } from "@/lib/seo";

const categoryPath = "/products/carpet-tiles";

const categoryFaqs = [
  {
    question: "What commercial carpet tiles does Vishomecarpet manufacture?",
    answer: "Vishomecarpet manufactures 50x50 carpet tiles in nylon, Nylon 6.6, polypropylene, and project-specific fiber options. Available ranges include office carpet tiles, hotel carpet tiles, heavy-duty commercial carpet tiles, patterned modular tiles, PVC-free PE backing tiles, and bitumen-backed carpet tiles."
  },
  {
    question: "Do you supply wholesale carpet tiles to distributors and contractors?",
    answer: "Yes. Vishomecarpet supports carpet tile distributors, commercial flooring contractors, importers, and project buyers with wholesale carpet tiles, bulk pricing, samples, OEM colors, backing selection, export packing, and international delivery."
  },
  {
    question: "What is the wholesale price for carpet tiles?",
    answer: "Reference pricing on this page starts at US$1.40 per 50x50cm piece or US$3.80 per square meter, depending on the product. Final carpet tiles wholesale price depends on fiber, backing, pile weight, thickness, quantity, color, packing, and destination."
  },
  {
    question: "Are 50x50cm carpet tiles the same as 24x24 carpet tiles?",
    answer: "No. A 50x50cm tile is approximately 19.7 x 19.7 inches. Buyers requiring 24x24 carpet tiles should state the exact inch or millimeter size so the carpet tile factory can confirm production feasibility and pricing."
  },
  {
    question: "Can carpet tiles be installed loose lay or glue down?",
    answer: "Commercial carpet tile flooring is commonly installed with releasable adhesive or approved tabs over a clean, level subfloor. Loose lay carpet tiles and glue down carpet tiles require the correct backing, floor condition, traffic level, and installation system to be confirmed before ordering."
  },
  {
    question: "Which backing options are available?",
    answer: "Product options include bitumen backed carpet tiles, PVC backing, cushioned backing, and PVC-free PE backing. The best choice depends on dimensional stability, raised floor access, acoustic requirements, sustainability targets, and local installation practice."
  },
  {
    question: "Can these tiles be used in offices, hotels, schools, gyms, airports, or exhibitions?",
    answer: "Yes, selected commercial grade carpet tiles can be specified for offices, hotels, schools, gyms, airports, exhibition spaces, corridors, and public interiors. Traffic class, fire rating, antistatic performance, backing, and maintenance requirements must be confirmed for each application."
  },
  {
    question: "Do you make waterproof, washable, self-adhesive, wool, or polyester carpet tiles?",
    answer: "These terms describe different constructions that are not automatically interchangeable with the six listed products. Send the required fiber, backing, cleaning method, installation system, and test standard for separate confirmation of waterproof carpet tiles, washable carpet tiles, self adhesive carpet tiles, wool carpet tiles, polyester carpet tiles, or cut pile carpet tiles."
  }
];

const productOptions = [
  {
    title: "Luxury Hotel Carpet Tile 50x50cm",
    text: "Nylon or PP modular carpet squares for hotel rooms, corridors, lobbies, meeting rooms, and hospitality renovation projects.",
    href: "/products/carpet-tiles/luxury-hotel-carpet-tile-50x50cm"
  },
  {
    title: "EcoCore PE Backing Carpet Tiles",
    text: "PVC-free 50x50 modular carpet flooring for green offices, raised floors, schools, and sustainability-oriented commercial projects.",
    href: "/products/carpet-tiles/ecocore-pe-backing-carpet-tiles"
  },
  {
    title: "50x50 Nylon PP Office Carpet Tiles",
    text: "Flexible nylon or polypropylene carpet tiles for offices, retail, corridors, and wholesale modular flooring programs.",
    href: "/products/carpet-tiles/50x50-nylon-pp-office-carpet-tiles"
  },
  {
    title: "100% Nylon Office Carpet Tile",
    text: "Class 33 heavy-duty commercial carpet tiles with bitumen backing and antistatic performance for demanding office traffic.",
    href: "/products/carpet-tiles/nylon-office-carpet-tile"
  },
  {
    title: "Gray Line Patterned Carpet Tiles",
    text: "Modern gray, charcoal, blue-accent, and custom-color carpet squares for office and hotel commercial interiors.",
    href: "/products/carpet-tiles/gray-line-nylon-office-hotel-carpet-tiles"
  },
  {
    title: "Premium Nylon 6.6 Carpet Tiles",
    text: "Heavy-duty 50x50 commercial modular tiles for corporate offices, corridors, airports, schools, and contract projects.",
    href: "/products/carpet-tiles/commercial-nylon-tiles"
  }
];

export const metadata: Metadata = {
  title: "Commercial Carpet Tiles Manufacturer & Wholesale | VISHOME",
  description: "50x50 nylon and polypropylene modular carpet tiles for offices and hotels. Compare wholesale prices, backing, thickness, MOQ and specifications.",
  alternates: { canonical: categoryPath },
  openGraph: {
    title: "Commercial Carpet Tiles Manufacturer & Wholesale | VISHOME",
    description: "Compare six commercial carpet tile products by fiber, backing, price, MOQ, and office or hotel application.",
    url: absoluteUrl(categoryPath),
    type: "website",
    images: [{ url: absoluteUrl("/images/category-tiles.webp"), alt: "Commercial modular carpet tiles supplied by Vishomecarpet" }]
  }
};
export default function CategoryPage() {
  const categoryId = "carpet-tiles";
  const categoryProducts = products.filter((p) => p.category === categoryId);
  const jsonLd = productItemListJsonLd({
    name: "Commercial Carpet Tiles and Modular Office Carpet Flooring",
    description: "Six 50x50 commercial carpet tile products for offices, hotels, schools, corridors, airports, and contract flooring projects.",
    url: categoryPath,
    items: categoryProducts,
  });
  const breadcrumbJsonLd = categoryBreadcrumbJsonLd(categoryId);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categoryFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <section className="bg-[#102A43] py-20 text-center md:py-24">
        <div className="container-fox">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#f0a23a]">Carpet Tile Manufacturer, Supplier & Distributor Support</p>
          <h1 className="text-4xl font-black uppercase text-white md:text-6xl">Commercial Carpet Tiles & Modular Flooring</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300">50x50 nylon and polypropylene carpet tiles for offices, hotels, corridors, schools, airports, and commercial projects. Compare wholesale price, backing, thickness, MOQ, and technical performance across six products.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/contact?product=Commercial%20Carpet%20Tiles#quote-form" className="btn-fox-orange">Request Wholesale Quote</Link>
            <Link href="#carpet-tile-products" className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:border-white">Compare Products</Link>
          </div>
        </div>
      </section>
      <section id="carpet-tile-products" className="section-padding scroll-mt-24">
        <div className="container-fox">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-black uppercase text-primary md:text-4xl">Six Commercial Carpet Tile Products</h2>
            <p className="leading-relaxed text-muted">Compare material, backing, traffic class, price, minimum order, and application. Each product page includes technical data, project images, and a direct inquiry form.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryProducts.map((p) => (
              <Link key={p.id} href={`/products/${categoryId}/${p.id}`} className="group block bg-white border border-border p-8 hover:shadow-2xl transition-all duration-500 rounded-sm">
                <div className="aspect-square overflow-hidden mb-8 shadow-md border border-border">
                   <ProductImage src={p.image} alt={p.imageAlt || p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="mb-6 min-h-20 text-xl font-bold uppercase leading-tight text-primary transition-colors group-hover:text-accent">{p.name}</h3>
                <p className="mb-6 min-h-20 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mb-6 space-y-2 border-t border-border pt-5 text-[11px] uppercase">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">FOB Price</span>
                    <span className="text-right font-black text-primary">{p.fobPrice?.display ?? "Quote by project"}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">MOQ</span>
                    <span className="text-right font-black text-primary">{p.moq}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted">Availability</span>
                    <span className="text-right font-black text-primary">In Stock / Made to Order</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-black text-accent uppercase tracking-widest border-t border-border pt-6">
                   <span>Technical Details</span>
                   <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Commercial Modular Flooring Guide</p>
            <h2 className="mb-7 text-3xl font-black uppercase text-primary md:text-5xl">Carpet Tile Manufacturer for Office & Contract Projects</h2>
            <div className="space-y-5 text-base leading-8 text-muted">
              <p>Vishomecarpet manufactures commercial carpet tiles for wholesale buyers, carpet tile distributors, office carpet suppliers, flooring contractors, hotels, and project procurement teams. The collection includes nylon carpet tiles, polypropylene carpet tiles, modular carpet squares, bitumen backed carpet tiles, and PVC-free PE backing options.</p>
              <p>Applications include office floor carpet tiles, commercial office carpet, hotel carpet tiles, raised floor carpet tiles, acoustic carpet tiles, school carpet tiles, gym carpet tiles, airport carpet tiles, exhibition carpet tiles, and heavy-duty commercial carpet tiles. The required traffic class, fire rating, antistatic performance, backing, and installation system must be confirmed for each project.</p>
              <p>Available visual directions include black carpet tiles, blue carpet tiles, navy carpet tiles, green carpet tiles, grey carpet tiles, beige carpet tiles, and patterned carpet tiles. Actual colors depend on the selected product, yarn, MOQ, sample approval, and custom production feasibility.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {productOptions.map((option) => (
              <Link key={option.href} href={option.href} className="group bg-white p-7 transition-colors hover:bg-primary">
                <h3 className="mb-3 text-base font-black uppercase text-primary group-hover:text-white">{option.title}</h3>
                <p className="text-sm leading-relaxed text-muted group-hover:text-white/75">{option.text}</p>
                <span className="mt-5 inline-block text-[10px] font-black uppercase tracking-widest text-accent">View Product →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-fox grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Wholesale Buying Information</p>
            <h2 className="mb-6 text-3xl font-black uppercase text-primary md:text-5xl">Carpet Tiles Wholesale Price & Quote Requirements</h2>
            <p className="leading-8 text-muted">Prices are quoted per piece or per square meter depending on the product. Send the information below so the factory can compare bulk carpet tile options on the same commercial basis.</p>
          </div>
          <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {[
              ["Project Area", "Total SQM, floor plan, waste allowance, and phased delivery needs"],
              ["Application", "Office, hotel, school, gym, airport, exhibition, or other space"],
              ["Material", "Nylon, Nylon 6.6, polypropylene, or specified alternative"],
              ["Backing", "Bitumen, PVC, cushion, PVC-free PE, or raised floor requirement"],
              ["Installation", "Releasable adhesive, tabs, loose-lay system, and layout direction"],
              ["Performance", "Traffic class, fire rating, antistatic, acoustic, and cleaning needs"]
            ].map(([term, detail]) => (
              <div key={term} className="bg-white p-6">
                <dt className="mb-2 text-xs font-black uppercase text-primary">{term}</dt>
                <dd className="text-sm leading-relaxed text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-surface">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-3xl font-black uppercase text-primary md:text-5xl">Commercial Carpet Tiles FAQ</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {categoryFaqs.map((item) => (
              <details key={item.question} className="border border-border bg-white p-6">
                <summary className="cursor-pointer font-black text-primary">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary py-16 text-center">
        <div className="container-fox">
          <h2 className="text-2xl font-black uppercase text-white md:text-4xl">Request a Bulk Carpet Tile Quotation</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">Send your area, application, material, backing, destination, and required date for a product recommendation and wholesale price.</p>
          <Link href="/contact?product=Commercial%20Carpet%20Tiles#quote-form" className="btn-fox-orange mt-8">Send Inquiry</Link>
        </div>
      </section>
    </div>
  );
}
