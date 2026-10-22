import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import ProductImage from "@/components/ProductImage";
import { ProductTrackedLink, ProductViewEvent } from "@/components/ProductAnalytics";
import { brandInfo, products, type Product } from "@/lib/data";
import { evidenceCopy, referenceSpecs, reviewedOn } from "@/lib/product-evidence-copy";
import { absoluteUrl, categoryName, categoryPath, productBreadcrumbJsonLd, productPath, safeJsonLd } from "@/lib/seo";
import { getContactBridgeUrl } from "@/lib/whatsapp";

function findProduct(id: string) {
  const product = products.find((item) => item.id === id);
  if (!product) notFound();
  return product;
}

export function evidenceProductMetadata(id: string): Metadata {
  const product = findProduct(id);
  const copy = evidenceCopy(product);
  const title = `${copy.name} | VCARPETS`;
  const description = copy.summary.split(/(?<=\.) /)[0];
  const url = absoluteUrl(productPath(id));
  const image = { url: absoluteUrl(product.image), alt: `${copy.name} design reference` };
  return {
    title: { absolute: title }, description,
    alternates: { canonical: productPath(id) },
    openGraph: { title, description, url, type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

function InquiryActions({ product, label }: { product: Product; label: string }) {
  const message = `Hello, I am interested in ${label} for a project. Please send me price, sample options, MOQ, lead time, and technical data sheet.`;
  const whatsapp = getContactBridgeUrl(message, { placement: "product_conversion_panel", product: label, intent: "project_quote" });
  const sku = product.id === "custom-luxury-hotel-room-carpet" ? "VHC-WTW-HRC-001" : product.id === "custom-sculpted-wool-lobby-rug" ? "VHC-PA-SWR-001" : undefined;
  if (sku) return <div className="flex flex-wrap gap-3">
    <ProductTrackedLink href={`/contact?product=${encodeURIComponent(label)}#quote-form`} event="quote_form_click" payload={{ product_id: sku, lead_source: "product_page" }} className="btn-fox-orange !px-5 !py-4 !text-xs">Request Project Quote</ProductTrackedLink>
    <ProductTrackedLink href={whatsapp} event="contact" payload={{ product_id: sku, contact_method: "whatsapp" }} className="inline-flex min-h-12 items-center border border-border px-5 py-3 text-sm font-bold text-primary">WhatsApp</ProductTrackedLink>
    <ProductTrackedLink href={`mailto:${brandInfo.email}?subject=${encodeURIComponent(`Project inquiry: ${label}`)}`} event="contact" payload={{ product_id: sku, contact_method: "email" }} className="inline-flex min-h-12 items-center border border-border px-5 py-3 text-sm font-bold text-primary">Email Sales</ProductTrackedLink>
    <Link href={`/request-sample-box?product=${encodeURIComponent(label)}`} className="inline-flex min-h-12 items-center border border-border px-5 py-3 text-sm font-bold text-primary">Request Sample Details</Link>
  </div>;
  return <div className="flex flex-wrap gap-3">
    <Link href={`/contact?product=${encodeURIComponent(label)}#quote-form`} data-track-event="request_quote_cta_click" data-item-name={label} data-item-category={product.category} data-item-id={product.id} className="btn-fox-orange !px-5 !py-4 !text-xs">Request Project Quote</Link>
    <a href={whatsapp} data-whatsapp-placement="product_conversion_panel" data-whatsapp-product={label} data-whatsapp-intent="project_quote" className="inline-flex min-h-12 items-center border border-border px-5 py-3 text-sm font-bold text-primary">WhatsApp</a>
    <a href={`mailto:${brandInfo.email}?subject=${encodeURIComponent(`Project inquiry: ${label}`)}`} data-email-placement="product_conversion_panel" data-email-product={label} className="inline-flex min-h-12 items-center border border-border px-5 py-3 text-sm font-bold text-primary">Email Sales</a>
    <Link href={`/request-sample-box?product=${encodeURIComponent(label)}`} className="inline-flex min-h-12 items-center border border-border px-5 py-3 text-sm font-bold text-primary">Request Sample Details</Link>
  </div>;
}

const headingClass = "mb-5 text-2xl font-black leading-tight text-primary md:text-3xl";

export default function EvidenceProductPage({ productId }: { productId: string }) {
  const product = findProduct(productId);
  const copy = evidenceCopy(product);
  const url = absoluteUrl(productPath(product.id));
  const catalogSpecs = referenceSpecs(product);
  const imageInputs = [{ src: product.image, alt: `${copy.name} product or design reference` }, ...(product.gallery || [])];
  const images = imageInputs.filter((image, index) => imageInputs.findIndex((other) => other.src === image.src) === index)
    .map((image, index) => ({ src: image.src, alt: `${copy.name}: design or material reference ${index + 1}; verify the physical sample` }));
  const productSchema = {
    "@context": "https://schema.org", "@type": "Product", "@id": `${url}#product`,
    name: copy.name, description: copy.summary, url, mainEntityOfPage: url,
    sku: product.id, brand: { "@type": "Brand", name: "VCARPETS" },
    manufacturer: { "@id": `${brandInfo.url}/#organization` },
    category: categoryName(product.category), material: product.spec.material, size: product.spec.size,
    image: images.map((image) => absoluteUrl(image.src)),
    additionalProperty: catalogSpecs.map(([name, value]) => ({ "@type": "PropertyValue", name: `Catalog reference: ${name}`, value })),
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: copy.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);
  const guide = product.id === "gold-mining-carpet-mat" ? "/products/public-area/gold-mining-carpet-mat#application-checks"
    : product.category === "carpet-tiles" ? "/blog/commercial-carpet-tile-backing-comparison-guide"
    : "/blog/axminster-vs-wilton-vs-tufted-hospitality-guide";

  return <div className="min-h-screen bg-white" data-evidence-product={product.id}>
    {product.id === "custom-luxury-hotel-room-carpet" ? <ProductViewEvent payload={{ item_id: "VHC-WTW-HRC-001", item_name: product.name, item_category: "Wall-to-Wall Carpets", price_low: 3.1, price_high: 9.7, currency: "USD" }} /> : null}
    {product.id === "custom-sculpted-wool-lobby-rug" ? <ProductViewEvent payload={{ item_id: "VHC-PA-SWR-001", item_name: product.name, item_category: "Public Area Carpets", item_variant: "Sand Beige Concentric Square", price: 500, currency: "USD" }} /> : null}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productBreadcrumbJsonLd({ ...product, name: copy.name })) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
    <nav aria-label="Product breadcrumb" className="border-b border-border bg-surface py-4">
      <div className="container-fox flex flex-wrap gap-2 text-sm text-muted">
        <Link href="/products" className="underline">Products</Link><span aria-hidden="true">/</span>
        <Link href={categoryPath(product.category)} className="underline">{categoryName(product.category)}</Link>
      </div>
    </nav>

    <section className="py-10 md:py-16">
      <div className="container-fox grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="min-w-0 lg:order-2">
          <h1 className="mb-6 text-3xl font-black leading-tight text-primary md:text-4xl">{copy.name}</h1>
          <p className="product-summary text-base leading-8 text-muted md:text-lg" data-product-answer>{copy.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#reference-data" className="border border-border px-4 py-3 text-sm font-bold text-primary">Review Specifications</a>
            <a href="#supplier-comparison" className="border border-border px-4 py-3 text-sm font-bold text-primary">Compare Suppliers</a>
            <a href="#order-details" className="btn-fox-orange !px-4 !py-3 !text-xs">Request Quote and Samples</a>
          </div>
        </div>
        <figure className="min-w-0 lg:order-1">
          <ProductGallery key={product.id} mainImage={product.image} gallery={images.slice(0, 4)} productName={copy.name} />
          <figcaption className="mt-3 text-xs leading-6 text-muted">AI-generated or edited scenes are design references, not completed-project or performance evidence. Approve color, texture and construction with a physical sample.</figcaption>
        </figure>
      </div>
    </section>

    <section className="border-y border-border bg-surface py-10 md:py-14" id="construction-data" data-copy-block="construction">
      <div className="container-fox max-w-5xl">
        <h2 className={headingClass}>Construction and Planning Data</h2>
        <p className="leading-8 text-muted">{copy.construction}</p>
        <p className="mt-4 text-sm leading-7 text-muted">Source: the VCARPETS catalog construction record for this product, reviewed {reviewedOn}. Listed dimensions and options are reference data; confirm them against the nominated product sheet and approved sample.</p>
      </div>
    </section>

    <section className="py-10 md:py-14" id="supplier-comparison" data-copy-block="comparison">
      <div className="container-fox">
        <h2 className={headingClass}>Supplier and Construction Comparison</h2>
        <p className="mb-6 max-w-4xl leading-8 text-muted">Compare these {copy.competitors.length + 1} supplier options using the cited product or service pages. Different constructions are not equivalent products. No price advantage, performance ranking or interchangeability is implied. Sources reviewed {reviewedOn}.</p>
        <div className="overflow-x-auto rounded-sm border border-border" role="region" aria-label="Supplier comparison table" tabIndex={0}>
          <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-6">
            <caption className="sr-only">Source-based comparison of {copy.name} and alternative supplier offers</caption>
            <thead className="bg-primary text-white"><tr>{["Supplier / product", "Construction or service", "Listed dimensions / data", "What to confirm / source"].map((label) => <th scope="col" key={label} className="px-5 py-4 align-top">{label}</th>)}</tr></thead>
            <tbody>
              <tr className="border-t border-border bg-surface"><th scope="row" className="px-5 py-4 align-top">VCARPETS<br /><span className="font-normal">{copy.name}</span></th><td className="px-5 py-4 align-top">{catalogSpecs[0][1]}; {catalogSpecs[2][1]}; {catalogSpecs[3][1]}</td><td className="px-5 py-4 align-top">{copy.knownDimension}</td><td className="px-5 py-4 align-top">Approve the selected construction and physical sample.<br /><a className="underline" href="#reference-data">VCARPETS catalog reference</a></td></tr>
              {copy.competitors.map((option) => <tr key={option.source} className="border-t border-border"><th scope="row" className="px-5 py-4 align-top">{option.supplier}<br /><span className="font-normal">{option.product}</span></th><td className="px-5 py-4 align-top">{option.construction}</td><td className="px-5 py-4 align-top">{option.format}</td><td className="px-5 py-4 align-top">{option.nextStep}<br /><a href={option.source} className="underline">Supplier source page</a></td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-surface py-10 md:py-14" id="reference-data">
      <div className="container-fox max-w-5xl">
        <h2 className={headingClass}>Reference Specification and Evidence</h2>
        <p className="mb-6 leading-8 text-muted">Review these {catalogSpecs.length} catalog fields as one selected construction. Options are not interchangeable test results. Fire, acoustic, traffic, static and slip performance require documents identifying the tested product and relevant floor assembly.</p>
        <dl className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {catalogSpecs.map(([label, value]) => <div key={label} className="bg-white p-5"><dt className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">{label}</dt><dd className="text-sm font-bold leading-7 text-primary">{value}</dd></div>)}
        </dl>
        <Link href="/technical-documents" className="mt-5 inline-block text-sm font-bold text-primary underline">Request construction-specific documents</Link>
      </div>
    </section>

    <section className="py-10 md:py-14" id="application-checks">
      <div className="container-fox max-w-5xl">
        <h2 className={headingClass}>Application and Four Approval Checks</h2>
        <p className="leading-8 text-muted">{copy.application}</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">{copy.checks.map((check, index) => <li key={check} className="border border-border bg-surface p-5 leading-7 text-primary"><span className="mr-3 font-mono font-bold">{index + 1}.</span>{check}</li>)}</ol>
      </div>
    </section>

    <section className="border-y border-border bg-surface py-10 md:py-14" id="order-details">
      <div className="container-fox max-w-5xl">
        <h2 className={headingClass}>Samples and Five Quotation Inputs</h2>
        <p className="mb-6 leading-8 text-muted">Send 5 inputs: intended application, dimensions or area, quantity, destination and required date. Samples are paid; the agreed sample charge can be credited against a subsequent order. Confirm sample availability, courier charges, MOQ, FOB Tianjin price and production schedule in writing. Shipping transit is separate from production time.</p>
        <InquiryActions product={product} label={copy.name} />
        <Link href="/blog/commercial-carpet-sample-approval-checklist" className="mt-5 inline-block text-sm font-bold text-primary underline">Physical sample approval checklist</Link>
      </div>
    </section>

    <section className="py-10 md:py-14" id="product-images">
      <div className="container-fox">
        <h2 className={headingClass}>Product and Design References</h2>
        <p className="mb-6 max-w-4xl leading-8 text-muted">Review {images.length} image {images.length === 1 ? "reference" : "references"} for this product. AI-generated or edited scenes communicate appearance and layout; they do not prove a completed installation, exact production color or measured performance. Confirm the physical sample and product sheet before ordering.</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{images.map((image, index) => <figure key={image.src} className="min-w-0 border border-border bg-white"><div className="aspect-[3/2] overflow-hidden"><ProductImage src={image.src} alt={image.alt} className="h-full w-full object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div><figcaption className="p-4 text-xs leading-6 text-muted">Reference {index + 1} — {copy.name}. Verify appearance and construction with the physical sample.</figcaption></figure>)}</div>
      </div>
    </section>

    <section className="border-y border-border bg-surface py-10 md:py-14" id="related-resources">
      <div className="container-fox">
        <h2 className={headingClass}>Related Products and Procurement Resources</h2>
        <p className="mb-6 leading-8 text-muted">Review {related.length} related products in this category and confirm each construction separately. A shared application or similar design does not establish matching test results.</p>
        <div className="grid gap-4 md:grid-cols-3">{related.map((item) => <Link href={productPath(item.id)} key={item.id} className="border border-border bg-white p-5 font-bold leading-7 text-primary underline">{evidenceCopy(item).name}</Link>)}</div>
        <div className="mt-6 flex flex-wrap gap-5 text-sm font-bold text-primary"><Link href={guide} className="underline">Construction and selection guide</Link><Link href="/blog/commercial-carpet-tile-rfq-checklist-b2b-buyers" className="underline">Project RFQ checklist</Link><Link href="/commercial-terms" className="underline">Commercial terms</Link></div>
      </div>
    </section>

    <section className="py-10 md:py-16" id="product-faq" data-copy-block="faq">
      <div className="container-fox max-w-5xl">
        <h2 className={headingClass}>Buyer FAQ</h2>
        <p className="mb-6 leading-8 text-muted">These {copy.faqs.length} questions cover specification, application, supplier comparison, evidence, quotation and image limitations.</p>
        <div className="space-y-4">{copy.faqs.map(({ q, a }) => <details key={q} className="border border-border bg-white p-5 md:p-6"><summary className="cursor-pointer font-bold leading-7 text-primary">{q}</summary><p className="mt-4 leading-8 text-muted">{a}</p></details>)}</div>
      </div>
    </section>
  </div>;
}
