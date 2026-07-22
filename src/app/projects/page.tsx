import { Metadata } from "next";
import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commercial Carpet Project References | Hotel, Retail & Office Application Pages | VISHOME",
  description: "Review VISHOME commercial carpet project reference pages for hotel, retail, office, public area, and multi-site B2B flooring applications across global markets.",
  alternates: { canonical: "/projects" },
};
export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Project Application References"
        eyebrow="Commercial Flooring Solution Examples"
        description="Specification-oriented reference pages for hotel, retail, office, airport, and public-area commercial carpet applications."
        image="/images/case-series/case-1/Case_1_Lobby_Grand_Reveal.webp"
        imageAlt="Luxury hotel lobby carpet project background"
        objectPosition="center 48%"
      />

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {caseStudies.map((cs) => (
              <Link key={cs.id} href={`/projects/${cs.id}`} className="group block border-b border-border pb-10 md:pb-16">
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-sm shadow-xl md:mb-10">
                  <ProductImage
                    src={cs.id === "case-6" ? "/images/products/public-area/public-area-heavy-duty/01-main-public-area-heavy-duty-carpet.webp" : cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-6 left-6 bg-primary px-4 py-2 text-[10px] font-black text-white uppercase tracking-widest">
                    {cs.category === "carpet-tiles" ? "Modular" : "Hospitality"}
                  </div>
                </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 uppercase tracking-tight group-hover:text-accent transition-colors">{cs.title}</h2>
              <p className="mb-6 text-base leading-relaxed text-muted md:mb-10 md:h-24 md:overflow-hidden md:text-lg">{cs.description}</p>
              <div className="flex items-center gap-4 text-xs font-black text-primary uppercase tracking-[0.2em]">
                   View Application Reference <span className="text-accent">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
