import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { brandInfo, caseStudies } from "@/lib/data";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";
import ProductImage from "@/components/ProductImage";

const images = [
  {
    src: "/images/products/public-area/public-area-heavy-duty/01-main-public-area-heavy-duty-carpet.webp",
    alt: "Airport terminal public area carpet main view",
  },
  {
    src: "/images/products/public-area/public-area-heavy-duty/02-public-area-heavy-duty-installation.webp",
    alt: "Airport terminal public area carpet installation view",
  },
  {
    src: "/images/products/public-area/public-area-heavy-duty/03-public-area-heavy-duty-detail.webp",
    alt: "Airport terminal heavy-duty public area carpet detail",
  },
];

function getProject() {
  return caseStudies.find((item) => item.id === "case-6");
}

export function generateMetadata(): Metadata {
  const project = getProject();
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Project Case Study | VISHOME`,
    description: project.description,
    alternates: { canonical: "/projects/case-6" },
    openGraph: {
      title: `${project.title} | VISHOME Project Case Study`,
      description: project.description,
      url: absoluteUrl("/projects/case-6"),
      type: "article",
      images: [{ url: absoluteUrl(images[0].src), alt: images[0].alt }],
    },
  };
}

export default function CaseSixPage() {
  const project = getProject();
  if (!project) notFound();

  const sections = project.sections.map((section) => {
    if (section.title === "Patterning for Passenger Flow") {
      return { ...section, image: images[1].src, imageAlt: images[1].alt };
    }
    if (section.title === "Replacement Logic in a Live Terminal") {
      return { ...section, image: images[2].src, imageAlt: images[2].alt };
    }
    return section;
  });

  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    image: absoluteUrl(images[0].src),
    author: {
      "@type": "Organization",
      name: brandInfo.name,
      url: brandInfo.url,
    },
    publisher: {
      "@type": "Organization",
      name: brandInfo.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl("/projects/case-6"),
    articleSection: "Project Case Study",
    about: project.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Projects", item: absoluteUrl("/projects") },
      { "@type": "ListItem", position: 3, name: project.title, item: absoluteUrl("/projects/case-6") },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(caseJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }} />
      <nav className="border-b border-border bg-surface py-4">
        <div className="container-fox">
          <Link href="/projects" className="text-[10px] font-black uppercase text-primary/50 hover:text-primary">Back to Projects</Link>
        </div>
      </nav>

      <section className="py-16 md:py-20">
        <div className="container-fox max-w-6xl">
          <h1 className="mb-4 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">{project.title}</h1>
          {project.subtitle ? <p className="mb-10 max-w-4xl text-lg leading-relaxed text-muted">{project.subtitle}</p> : null}

          <div className="mb-10 aspect-[21/9] overflow-hidden rounded-xl border border-border shadow-2xl">
            <ProductImage src={images[0].src} alt={images[0].alt} className="h-full w-full object-cover" />
          </div>

          <div className="mb-14 grid gap-10 lg:grid-cols-3">
            {project.projectSpecs.map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-surface p-5">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">{item.label}</p>
                <p className="text-sm font-semibold leading-relaxed text-primary">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-14 space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-border pb-10">
                <h2 className="mb-5 text-2xl font-bold uppercase tracking-tight text-primary md:text-3xl">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.title}-${index}`} className="text-lg leading-relaxed text-muted">{paragraph}</p>
                  ))}
                </div>
                {section.image ? (
                  <figure className="mt-8">
                    <div className="overflow-hidden rounded-xl border border-border shadow-md">
                      <ProductImage src={section.image} alt={section.imageAlt || section.title} className="w-full aspect-[16/10]" />
                    </div>
                  </figure>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mb-14 grid gap-10 lg:grid-cols-2">
            <section className="rounded-xl border border-border p-8">
              <h3 className="mb-6 text-xl font-black uppercase tracking-wider text-primary">Technical Details</h3>
              <ul className="space-y-3">
                {project.technicalDetails.map((item) => <li key={item} className="leading-relaxed text-muted">* {item}</li>)}
              </ul>
            </section>
            <section className="rounded-xl border border-border p-8">
              <h3 className="mb-6 text-xl font-black uppercase tracking-wider text-primary">Design Highlights</h3>
              <ul className="space-y-3">
                {project.designHighlights.map((item) => <li key={item} className="leading-relaxed text-muted">* {item}</li>)}
              </ul>
            </section>
          </div>

          <section className="mb-14 rounded-xl border border-border bg-surface p-8">
            <h3 className="mb-6 text-xl font-black uppercase tracking-wider text-primary">Results & Feedback</h3>
            <ul className="space-y-3">
              {project.results.map((item) => <li key={item} className="leading-relaxed text-muted">* {item}</li>)}
            </ul>
          </section>

          <section className="rounded-xl bg-primary p-10 text-center text-white">
            <h3 className="mb-4 text-3xl font-black uppercase tracking-wider">Need a Similar Rollout?</h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">Share your floor plan and timeline. We can build a solution package covering design, technical specification, and phased delivery strategy.</p>
            <Link href="/contact" className="btn-fox-orange !px-10 !py-5">Request Similar Solution</Link>
          </section>
        </div>
      </section>
    </div>
  );
}
