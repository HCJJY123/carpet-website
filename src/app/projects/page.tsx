import { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/lib/data";
import { getCaseSeoProfile, projectPath } from "@/lib/case-seo";
import { absoluteUrl, safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Commercial Carpet Case Studies & Specification Guides | VISHOME",
  description: "Explore 14 commercial carpet application guides for hotels, offices, retail, airports, healthcare, education, exhibitions and gold-recovery projects.",
  alternates: { canonical: "/projects" },
};
export default function ProjectsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/projects")}#collection`,
    name: "Commercial Carpet Case Studies and Specification Guides",
    description: "Application-based commercial carpet specification and procurement guides for international project buyers.",
    url: absoluteUrl("/projects"),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: caseStudies.length,
      itemListElement: caseStudies.map((project, index) => {
        const profile = getCaseSeoProfile(project.id);
        return {
          "@type": "ListItem",
          position: index + 1,
          name: profile.cardTitle,
          url: absoluteUrl(projectPath(project.id)),
        };
      }),
    },
  };

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(collectionJsonLd) }} />
      <PageHero
        title="Commercial Carpet Case Studies & Buyer Guides"
        eyebrow="Application-Based Flooring Decisions"
        description="Fourteen specification and procurement guides covering hospitality, office, retail, airport, healthcare, education, exhibition, residential and industrial carpet applications."
        image="/images/case-series/case-1/Case_1_Lobby_Grand_Reveal.webp"
        imageAlt="Luxury hotel lobby carpet project background"
        objectPosition="center 48%"
      />

      <section className="border-b border-border bg-surface">
        <div className="container-fox grid gap-8 py-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-12">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Direct Answer</p>
            <h2 className="text-2xl font-black uppercase leading-tight text-primary md:text-3xl">How to Use These Carpet Application Guides</h2>
          </div>
          <p className="text-base leading-8 text-muted">
            Start with the guide closest to your building type, then compare application, traffic, construction, fire requirements, cleaning, installation constraints, MOQ and replacement strategy. Each page distinguishes suitable uses from limitations, links to relevant products and categories, and provides the information needed for a project-specific quotation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {caseStudies.map((cs) => {
              const profile = getCaseSeoProfile(cs.id);
              return (
              <Link key={cs.id} href={projectPath(cs.id)} className="group block border-b border-border pb-10 md:pb-16">
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-sm shadow-xl md:mb-10">
                  <ProductImage
                    src={profile.cardImage ?? profile.heroImage ?? cs.image}
                    alt={profile.cardImageAlt ?? profile.heroImageAlt ?? cs.imageAlt ?? profile.cardTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-6 left-6 bg-primary px-4 py-2 text-[10px] font-black text-white uppercase tracking-widest">
                    {profile.eyebrow.replace(" Application Guide", "").replace(" Guide", "")}
                  </div>
                </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 uppercase tracking-tight group-hover:text-accent transition-colors">{profile.cardTitle}</h2>
              <p className="mb-6 text-base leading-relaxed text-muted md:mb-10 md:h-24 md:overflow-hidden md:text-lg">{profile.metadataDescription}</p>
              <div className="flex items-center gap-4 text-xs font-black text-primary uppercase tracking-[0.2em]">
                   View Buyer Guide <span className="text-accent">→</span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
