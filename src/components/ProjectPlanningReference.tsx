import type { Metadata } from "next";
import ProductImage from "@/components/ProductImage";
import Link from "next/link";
import { illustrationCaption } from "@/lib/content-growth-assets";
import type { ProjectPlanningData } from "@/lib/project-planning-references";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

export function planningReferenceMetadata(reference: ProjectPlanningData): Metadata {
  const path = `/projects/${reference.slug}`;
  return {
    title: `${reference.title} | VCARPETS`,
    description: reference.description,
    alternates: { canonical: path },
    openGraph: { title: reference.title, description: reference.description, url: absoluteUrl(path), type: "article", images: [{ url: absoluteUrl(reference.image.src), width: reference.image.width, height: reference.image.height, alt: reference.image.alt }] },
    twitter: { card: "summary_large_image", title: reference.title, description: reference.description, images: [absoluteUrl(reference.image.src)] },
  };
}

export default function ProjectPlanningReference({ reference }: { reference: ProjectPlanningData }) {
  const path = `/projects/${reference.slug}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "Article", headline: reference.title, description: reference.description, url: absoluteUrl(path), mainEntityOfPage: absoluteUrl(path), image: absoluteUrl(reference.image.src), author: { "@type": "Organization", name: "VCARPETS Technical Team" }, publisher: { "@type": "Organization", name: "Tianjin Vcarpets Global Commercial Carpet Co., Ltd.", url: absoluteUrl("/") }, articleSection: "Project Planning Reference" },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Projects and Applications", item: absoluteUrl("/projects") },
      { "@type": "ListItem", position: 3, name: reference.title, item: absoluteUrl(path) },
    ] },
  ];
  const sections = [
    ["Product Selection Logic", reference.selection], ["Specification Considerations", reference.specification],
    ["Sample and Approval Stage", reference.approval], ["Production Planning", reference.production], ["Shipping and Packaging", reference.shipping],
  ];
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <div className="border-b border-border bg-surface py-4"><nav className="container-fox flex flex-wrap gap-2 text-sm text-muted" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/projects">Projects and Applications</Link><span aria-hidden="true">/</span><span>Planning Reference</span></nav></div>
      <header className="container-fox py-10 md:py-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Project Planning Reference</p>
        <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight text-primary md:text-5xl">{reference.title}</h1>
        <p className="mb-4 max-w-3xl text-lg leading-8 text-muted">{reference.description}</p>
        <p className="mb-8 max-w-3xl border-l border-accent pl-4 text-sm leading-6 text-muted">Hypothetical procurement guidance, not a supplied client project. No verified completed-project evidence is presented. Visuals are AI-generated application illustrations.</p>
        <figure>
          <div className="overflow-hidden rounded-sm" style={{ aspectRatio: `${reference.image.width} / ${reference.image.height}` }}>
            <ProductImage src={reference.image.src} alt={reference.image.alt} sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px" priority className="h-full w-full" fit="contain" />
          </div>
          <figcaption className="mt-3 text-xs leading-5 text-muted">{illustrationCaption}</figcaption>
        </figure>
      </header>
      <article className="container-fox grid gap-10 pb-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-10">
          <section><h2 className="mb-4 text-2xl font-bold text-primary">Project Context</h2><p className="leading-8 text-muted">{reference.context}</p><p className="mt-4 leading-8 text-muted">For: {reference.buyer}</p></section>
          <section><h2 className="mb-4 text-2xl font-bold text-primary">Buyer Requirements</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted">{reference.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul></section>
          {sections.map(([title, text]) => <section key={title}><h2 className="mb-4 text-2xl font-bold text-primary">{title}</h2><p className="leading-8 text-muted">{text}</p></section>)}
          <section><h2 className="mb-4 text-2xl font-bold text-primary">Lessons for Similar Buyers</h2><ul className="list-disc space-y-3 pl-5 leading-7 text-muted">{reference.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></section>
        </div>
        <aside className="min-w-0 self-start border border-border bg-surface p-6 md:p-8">
          <h2 className="mb-4 text-xl font-bold text-primary">Related Products and Buying Guides</h2>
          <ul className="divide-y divide-border">{reference.links.map((link) => <li key={link.href}><Link href={link.href} className="block py-4 leading-6 text-primary underline underline-offset-4 hover:text-accent">{link.label}</Link></li>)}</ul>
          <h2 className="mb-4 mt-8 text-xl font-bold text-primary">Prepare Your Project RFQ</h2>
          <p className="mb-5 text-sm leading-7 text-muted">Send country, application, area by zone, product type, required size, material preference, color or pattern, installation environment, technical requirements and target delivery date. Attach drawings through the existing inquiry process where supported.</p>
          <Link href={`/contact?product=${encodeURIComponent(reference.title)}#quote-form`} className="mb-4 inline-flex min-h-12 w-full items-center justify-center bg-accent px-4 py-3 text-center font-bold text-primary hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Send Your Project Specifications</Link>
          <Link href="/request-sample-box" className="inline-flex min-h-12 w-full items-center justify-center border border-primary px-4 py-3 text-center font-bold text-primary">Request Carpet Samples</Link>
        </aside>
      </article>
    </div>
  );
}
