import { Metadata } from "next";
import Link from "next/link";
import { faqSections } from "@/lib/data";
import { safeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "B2B Carpet Sourcing FAQ | Project & Technical Support | VISHOME",
  description: "Expert answers on commercial carpet types, custom design matching, project lead times, fire ratings (ASTM E648), and global logistics for hotel and office contractors.",
  keywords: "carpet tile FAQ, hotel carpet sourcing guide, commercial flooring technical support, custom carpet design process, carpet fire rating certification"
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
      {/* Header */}
      <section className="bg-[#102A43] py-20 text-center relative overflow-hidden">
        <div className="container-fox relative z-10">
          <span className="text-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">B2B Knowledge Hub</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-widest leading-tight">
            Procurement & Project FAQ
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-xs uppercase tracking-widest font-bold leading-loose">
            Addressing Technical Concerns for Architects, Contractors, and Hotel Groups
          </p>
        </div>
      </section>

      {/* FAQ Main Content */}
      <section className="section-padding">
        <div className="container-fox">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
             {faqSections.map((section) => (
               <div key={section.title} className="mb-20">
                 <div className="flex items-center gap-4 mb-10 border-b-4 border-primary pb-4">
                   <h2 className="text-2xl font-black text-primary uppercase tracking-widest">{section.title}</h2>
                 </div>
                 
                 <div className="space-y-12">
                   {section.questions.map((item) => (
                     <div key={item.q} className="group border-l-2 border-border pl-8 py-2 hover:border-accent transition-colors">
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
                 
                 <div className="mt-12 bg-surface p-6 border border-border flex items-center justify-between">
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
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0B2E4A] opacity-50"></div>
        <div className="container-fox relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-widest leading-tight">
            Ready to Start Your <br />Technical Assessment?
          </h2>
          <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Our specialized B2B project management team is ready to assist with material selection, technical drawings (CAD), fire rating verification, and global logistics planning.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/contact" className="bg-white text-primary font-black px-16 py-6 uppercase tracking-[0.3em] text-xs hover:bg-gray-100 transition-all shadow-2xl">
              Contact Factory Experts
            </Link>
            <Link href="/contact?subject=Samples" className="border-2 border-white/20 text-white font-black px-16 py-6 uppercase tracking-[0.3em] text-xs hover:bg-white/10 transition-all">
              Request Free Sample Box
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
