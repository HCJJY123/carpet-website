import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getWhatsAppBusinessUrl, whatsappBusinessMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Request Commercial Carpet Sample Box | Vishomecarpet",
  description:
    "Request a commercial carpet sample box from Vishomecarpet with carpet tile samples, hotel broadloom samples, custom color matching, backing options, fire-rating support, and TDS support.",
  alternates: { canonical: "/request-sample-box" },
};

interface RequestSampleBoxPageProps {
  searchParams: Promise<{ product?: string }>;
}

export default async function RequestSampleBoxPage({ searchParams }: RequestSampleBoxPageProps) {
  const { product } = await searchParams;
  const whatsappUrl = getWhatsAppBusinessUrl(whatsappBusinessMessages.sampleBox, {
    placement: "sample_box_page",
    product: product || "Commercial carpet sample box",
    intent: "sample_box_request",
    pagePath: "/request-sample-box",
  });

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="Request Commercial Carpet Sample Box"
        eyebrow="Sample Support"
        description="Commercial carpet tile and hotel broadloom sample support for project buyers, distributors, contractors, and design teams."
        image="/images/samples-box.webp"
        imageAlt="Commercial carpet sample box for project procurement"
        objectPosition="center 50%"
      />

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-5xl">
                Commercial Carpet Samples Built for Faster Specification Decisions
              </h2>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Request a sample box for carpet tile projects, hotel carpet programs, office renovations, public-area flooring, and custom project matching. We prepare sample support so buyers can compare texture, color, backing, and specification direction before bulk quotation.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Carpet tile samples",
                  "Hotel broadloom samples",
                  "Custom color matching",
                  "Backing options",
                  "Fire-rating / TDS support",
                  "3-5 days sample preparation",
                  "DHL / FedEx / UPS available",
                  "Project quotation support",
                ].map((item) => (
                  <div key={item} className="border border-border bg-surface px-4 py-4 text-sm font-black uppercase tracking-[0.08em] text-primary">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border bg-surface p-6 md:p-8">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Quick Request</p>
              <h3 className="mb-6 text-2xl font-black uppercase text-primary">Need a Sample Box Fast?</h3>
              <LeadCaptureForm
                formName="request_sample_box"
                submitLabel="REQUEST SAMPLE BOX"
                productDefault={product || "Commercial carpet sample box"}
                projectTypeDefault="Sample request"
                introText="Send your carpet type, country, project type, and target delivery date. We will reply with sample options, courier method, lead time, and related technical data sheet support."
              />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp-placement="sample_box_page"
                data-whatsapp-product={product || "Commercial carpet sample box"}
                data-whatsapp-intent="sample_box_request"
                className="mt-6 flex min-h-12 items-center justify-center bg-[#25D366] px-5 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-[#1ebe5d]"
              >
                WhatsApp Sample Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
