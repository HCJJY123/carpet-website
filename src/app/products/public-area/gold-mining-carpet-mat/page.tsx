import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { absoluteUrl, productBreadcrumbJsonLd, productJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";
import { BuyerReasons, ProductConversionPanel } from "@/components/ProductConversion";
import ProcurementSnapshot from "@/components/ProcurementSnapshot";

const productId = "gold-mining-carpet-mat";
const product = products.find((prod) => prod.id === productId);

const mainImages = [
  {
    src: "/images/products/gold-mining-carpet-mat/01-hero-45-degree.webp",
    alt: "Vishomecarpet gold mining carpet mat PVC miners moss for sluice box gold recovery",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/02-full-texture-top-view.webp",
    alt: "Gold panning mat full texture top view for gold washing carpet and mining carpet",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/03-rolled-edge-thickness-backing.webp",
    alt: "Rolled edge gold mining carpet mat showing thickness backing and PVC ribbed structure",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/04-pvc-ribbed-miners-moss-texture.webp",
    alt: "PVC ribbed miners moss texture close up for high recovery rate gold carpet",
  },
];

const detailImages = [
  {
    src: "/images/products/gold-mining-carpet-mat/05-product-overview-detail.webp",
    title: "Sluice Box Matting and Gold Recovery Carpet",
    alt: "Gold mining mat moss product overview for sluice box matting and gold recovery",
    text: "PVC miners moss works as sluice box matting, gold sluice box carpet, gold sluice box mat, gold recovery carpet, and gold recovery sluice mat by creating a dense capture surface for fine particles during water flow.",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/06-layer-structure-drainage-groove.webp",
    title: "Riffle Mat and Drainage Structure",
    alt: "Gold mining rubber mat layer structure with drainage groove for sand discharge",
    text: "Buyers comparing a riffle mat, rubber sluice mat, gold sluice rubber mat, or gold recovery rubber mat should confirm the required profile and backing. This range uses PVC/vinyl coil structure with custom rubber backing available by project.",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/07-oem-odm-custom-size-logo-package.webp",
    title: "Manufacturer, Supplier and Wholesale Support",
    alt: "OEM ODM custom gold mining carpet mat size logo color and package options",
    text: "Gold mining carpet factory support covers wholesale orders, private labels, custom rolls, packaging, gold mining carpet samples, and distributor supply. Send the quantity and destination for an exact quotation.",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/08-pvc-ribbed-wear-resistant-anti-slip.webp",
    title: "PVC Coil and Miners Moss Matting",
    alt: "PVC miners moss gold washing mat wear resistant anti slip ribbed texture",
    text: "The vinyl sluice mat surface is also sourced as PVC coil mat gold mining carpet, miners moss matting, gold mining grass carpet, or loofah mat gold mining material. Texture and thickness are confirmed before bulk production.",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/09-wash-cleaning-sand-discharge.webp",
    title: "Gold Wash Mat Cleaning and Sand Discharge",
    alt: "Gold washing carpet cleaning and sand discharge performance for mining use",
    text: "The open structure supports rinsing and sediment discharge for gold wash mat, gold washing mat, gold trap mat, gold trap carpet, gold mining trap mat, gold catching mat, mining recovery carpet, and gold recovery equipment mat applications.",
  },
  {
    src: "/images/products/gold-mining-carpet-mat/10-gold-washing-mining-site-application.webp",
    title: "Placer, Dredge and Trommel Applications",
    alt: "Gold mining carpet applied in river gold washing and placer gold recovery site",
    text: "Suitable specifications can be selected for alluvial gold mining carpet, placer mining carpet, placer mining mat, placer gold mat, gold dredge mat, trommel matting, gold concentrator mat, gold separator mat, and gold separator carpet systems.",
  },
];

const descriptionParagraphs = [
  "Vishomecarpet supplies PVC miners moss sluice matting for gold sluice boxes, placer recovery, prospecting, and alluvial washing systems. The ribbed coil surface works as gold sluice matting, a gold mining sluice mat, gold prospecting mat, gold sluice carpet, gold recovery carpet, gold carpet for mining, and carpet for gold mining by helping retain fine particles while sand, mud, and water continue through the channel.",
  "The product is supplied as a gold mining carpet roll for sluice box carpet, gold wash carpet, mining sluice carpet, mining sluice mat, recovery trays, dredges, trommels, and separator systems. Standard options include a 1m x 15m roll and 10mm, 15mm, or 20mm thickness; color, width, backing, roll length, logo, and packaging can be customized after technical confirmation.",
  "As a China-based gold mining carpet manufacturer, gold mining mat manufacturer and supplier, and sluice mat supplier, Vishomecarpet supports equipment manufacturers, distributors, and gold mining equipment suppliers with bulk gold mining carpet, wholesale pricing, samples, and OEM packing. Send the application, size, quantity, and destination to compare gold mining carpet price per roll; per-meter supply depends on cut length and MOQ.",
];

const quoteRequirements = [
  ["Equipment", "Sluice box, dredge, trommel, concentrator, separator, or wash plant"],
  ["Mat Profile", "PVC coil, miners moss, riffle profile, or custom rubber-backed option"],
  ["Size", "Width, roll length, thickness, channel dimensions, and cutting requirement"],
  ["Quantity", "Sample request, trial order, wholesale volume, and repeat-order forecast"],
  ["Material Flow", "Water flow, sediment size, feed rate, and target recovery stage"],
  ["Delivery", "Destination country, required date, packaging, logo, and trade terms"],
] as const;

const faqs = [
  {
    q: "What is this gold mining carpet mat used for?",
    a: "It is used inside sluice boxes, gold washing machines, gold panning systems, and placer gold recovery equipment to help trap fine gold during water washing.",
  },
  {
    q: "Is this the same as miners moss or sluice box matting?",
    a: "These are common buyer terms for related capture mat products. This product is a PVC/vinyl coil miners moss mat used as sluice matting, sluice box mat, gold sluice box carpet, gold recovery mat, mining carpet, and gold capture matting. Confirm the required profile against your sluice or equipment drawing.",
  },
  {
    q: "What sizes and thicknesses are available?",
    a: "Common roll size is 1m x 15m, so the standard gold mining carpet 1m width is easy to specify for many channels. Available thicknesses include 10mm, 15mm, and 20mm. A 10mm sluice mat is a standard option. Requests for 18mm gold carpet, 3D gold mining mat, custom riffle matting, width, color, or backing require separate feasibility confirmation.",
  },
  {
    q: "Can Vishomecarpet provide OEM or ODM service?",
    a: "Yes. Vishomecarpet supports custom color, size, thickness, logo, packaging, and bulk supply for distributors and gold mining equipment manufacturers.",
  },
  {
    q: "What is the MOQ and lead time?",
    a: "Typical MOQ is 100 rolls, with normal production lead time around 15-25 days after order confirmation and packaging details.",
  },
  {
    q: "How do I request gold mining carpet price, samples, or per-meter supply?",
    a: "Send the mat profile, width, thickness, roll length, quantity, destination, and equipment application. We will quote the gold mining carpet price by roll and confirm sample availability. Gold mining carpet per meter or cut-length supply depends on the requested size and MOQ.",
  },
  {
    q: "Do you supply complete gold sluice equipment?",
    a: "This page offers the sluice mat and mining carpet component, not a complete machine. Gold sluice equipment manufacturers and gold mining equipment suppliers can source the mat for integration into sluice boxes, dredges, trommels, concentrators, and recovery systems.",
  },
];

export const metadata: Metadata = product
  ? {
      title: "Sluice Box Matting & Gold Mining Carpet | VISHOME",
      description:
        "PVC miners moss sluice mat and sluice box matting for gold recovery. Compare 10/15/20mm carpet rolls, wholesale price, samples and OEM supply.",
      alternates: {
        canonical: productPath(product.id),
        languages: {
          en: absoluteUrl(productPath(product.id)),
          ru: absoluteUrl("/ru/products/public-area/gold-mining-carpet-mat"),
          "x-default": absoluteUrl(productPath(product.id)),
        },
      },
      openGraph: {
        title: "Sluice Box Matting & Gold Mining Carpet | VISHOME",
        description: "PVC miners moss sluice mat and sluice box matting for gold recovery. Compare 10/15/20mm rolls, wholesale price, samples, and OEM supply.",
        url: absoluteUrl(productPath(product.id)),
        type: "website",
        images: [{ url: absoluteUrl(product.image), alt: product.imageAlt || product.name }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Sluice Box Matting & Gold Mining Carpet | VISHOME",
        description: "PVC miners moss sluice mat and sluice box matting for gold recovery. Compare 10/15/20mm rolls, wholesale price, samples, and OEM supply.",
        images: [absoluteUrl(product.image)],
      },
    }
  : { title: "Gold Mining Carpet Mat | Vishomecarpet" };

export default function GoldMiningCarpetMatPage() {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return <div>Product Not Found</div>;

  const jsonLd = productJsonLd(p);
  const breadcrumbJsonLd = productBreadcrumbJsonLd(p);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

      <nav className="border-b border-border bg-surface py-3 md:py-4">
        <div className="container-fox">
          <Link href="/products/public-area" className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted hover:text-primary">
            Back to Public Area Carpets
          </Link>
        </div>
      </nav>

      <section className="py-12 md:py-20">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
                <ProductImage src={mainImages[0].src} alt={mainImages[0].alt} className="h-full w-full" fit="contain" priority sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {mainImages.slice(1).map((image) => (
                  <div key={image.src} className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
                    <ProductImage src={image.src} alt={image.alt} className="h-full w-full" fit="contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Sluice Mat Manufacturer & Wholesale Supplier</p>
              <h1 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Sluice Box Matting & Gold Mining Carpet
              </h1>
              <p className="product-summary mb-8 text-lg leading-relaxed text-muted">{p.description}</p>
              <div className="mb-8 grid gap-3 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <div key={feature} className="rounded-xl border border-border bg-surface px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-primary">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="mb-8 space-y-4 border border-border bg-surface p-5 md:p-8">
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Project MOQ</span>
                  <span className="text-right font-bold">{p.moq}</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Lead Time</span>
                  <span className="text-right font-bold">{p.leadTime}</span>
                </div>
                {p.fobPrice && (
                  <div className="flex justify-between gap-6 text-xs uppercase">
                    <span>FOB Price</span>
                    <span className="text-right font-bold">{p.fobPrice.display}</span>
                  </div>
                )}
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Roll Size</span>
                  <span className="text-right font-bold">1m x 15m</span>
                </div>
                <div className="flex justify-between gap-6 text-xs uppercase">
                  <span>Availability</span>
                  <span className="text-right font-bold">In Stock / Made to Order</span>
                </div>
              </div>
              <ProductConversionPanel product={p} />
            </div>
          </div>
        </div>
      </section>

      <ProcurementSnapshot
        title="Gold Mining Mat Wholesale Facts"
        facts={[
          { label: "Project MOQ", value: "100 Rolls", detail: "Samples and trial orders are confirmed separately." },
          { label: "Production", value: "15-25 Days", detail: "Final timing follows size, thickness, packaging, and quantity." },
          { label: "Standard Roll", value: "1m x 15m", detail: "10mm, 15mm, and 20mm thickness options are available." },
          { label: "OEM Supply", value: "Size / Logo / Pack", detail: "Custom color, width, roll length, logo, and packing by order." },
        ]}
        quoteHref="/contact?product=Gold%20Mining%20Carpet%20Mat#quote-form"
        downloadHref="/downloads/gold-mining-mat-rfq-checklist.pdf"
        downloadName="Gold Mining Mat RFQ Checklist"
      />

      <section className="section-padding bg-primary text-white">
        <div className="container-fox grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-accent">Sluice Matting and Miners Moss</p>
            <h2 className="mb-6 text-3xl font-black uppercase leading-tight md:text-5xl">
              Gold Recovery Carpet for Sluice, Dredge and Trommel Systems
            </h2>
            <div className="space-y-5 text-white/72">
              {descriptionParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 52)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
            <ProductImage src="/images/products/gold-mining-carpet-mat/02-full-texture-top-view.webp" alt="Gold mining carpet mat full texture for sluice box and gold washing carpet" className="h-full w-full" fit="contain" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-accent">Six Product Details</p>
            <h2 className="text-3xl font-black uppercase text-primary md:text-5xl">Sluice Mat Structure, Supply and Applications</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {detailImages.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[4/3] bg-surface">
                  <ProductImage src={item.src} alt={item.alt} className="h-full w-full" fit="contain" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-lg font-black uppercase text-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface" data-funnel-section="quote_requirements">
        <div className="container-fox grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-accent">Factory Quote Checklist</p>
            <h2 className="mb-6 text-3xl font-black uppercase text-primary md:text-5xl">Gold Mining Carpet Price, Samples & Wholesale Orders</h2>
            <p className="leading-8 text-muted">Gold mining mat price depends on profile, material, thickness, width, roll length, quantity, packaging, and destination. Provide these six details for an accurate sluice matting wholesale quotation and product recommendation.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?product=Gold%20Mining%20Carpet%20Mat#quote-form" className="btn-fox-orange">Request Wholesale Quote</Link>
              <Link href="/request-sample-box" className="inline-flex min-h-12 items-center justify-center border border-primary px-7 py-3 text-xs font-black uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white">Request Samples</Link>
            </div>
          </div>
          <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {quoteRequirements.map(([term, detail]) => (
              <div key={term} className="bg-white p-6">
                <dt className="mb-2 text-xs font-black uppercase text-primary">{term}</dt>
                <dd className="text-sm leading-relaxed text-muted">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-padding border-y border-border bg-surface" data-funnel-section="technical_specs">
        <div className="container-fox">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-[0.08em] text-primary md:mb-12 md:text-3xl md:tracking-widest">
            Technical Data Sheet (TDS)
          </h2>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(p.technicalSpecs).map(([k, v]) => (
              <div key={k} className="group bg-white p-5 transition-all hover:bg-primary md:p-8">
                <p className="mb-3 text-[10px] font-bold uppercase text-muted group-hover:text-white/50">
                  {k.replace(/([A-Z])/g, " $1").toUpperCase()}
                </p>
                <p className="text-sm font-black uppercase leading-relaxed text-primary group-hover:text-white">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black uppercase text-primary md:text-5xl">Sluice Mat & Gold Mining Carpet FAQ</h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-base font-black uppercase tracking-wide text-primary">{item.q}</h3>
                <p className="leading-relaxed text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BuyerReasons product={p} />
    </div>
  );
}
