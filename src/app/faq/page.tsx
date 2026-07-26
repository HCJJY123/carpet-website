import { Metadata } from "next";
import Link from "next/link";
import { faqSections } from "@/lib/data";
import { safeJsonLd } from "@/lib/seo";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "B2B Carpet Sourcing FAQ | Project & Technical Support | VISHOME",
  description: "Practical answers on commercial carpet specifications, MOQ, samples, quotations, stock, lead times, test reports, quality control, installation, and international shipping.",
  alternates: { canonical: "https://www.vishomecarpet.com/faq" },
};

export default function FAQPage() {
  const allFaqs = faqSections.flatMap((section) => section.questions);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }}
      />
      <PageHero
        title="Procurement & Project FAQ"
        eyebrow="B2B Knowledge Hub"
        description="Addressing technical concerns for architects, contractors, hotel groups, and flooring distributors."
        image="/images/about/quality-control-inspection.webp"
        imageAlt="Commercial carpet quality inspection background"
        objectPosition="center 45%"
      />

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
                         <p className="text-muted text-base leading-relaxed font-medium">
                           {item.a}
                         </p>
                       </div>
                     </div>
                   ))}
                 </div>
                 
                 <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-border bg-surface p-5 sm:flex-row sm:items-center md:mt-12 md:p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/50">Still have specific project questions?</span>
                    <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest text-accent hover:text-primary transition-all flex items-center gap-2">
                      Inquire Technical Team <span>→</span>
                    </Link>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Global Support CTA */}
      <section className="relative overflow-hidden bg-primary py-16 text-center text-white md:py-24">
        <div className="absolute inset-0 bg-[#0B2E4A] opacity-50"></div>
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
      </section>
    </div>
  );
}
