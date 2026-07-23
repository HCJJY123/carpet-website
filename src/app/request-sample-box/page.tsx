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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
            <div className="order-2 lg:order-1">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Before We Dispatch</p>
              <h2 className="mb-6 text-3xl font-black uppercase leading-tight text-primary md:text-4xl">
                Know the Sample Cost and Timing Before You Commit
              </h2>
              <p className="mb-8 text-base leading-relaxed text-muted">
                Choose the carpet family first. Our export team then confirms available colors, courier charge, technical documents, and preparation time before anything is dispatched.
              </p>
              <div className="divide-y divide-border border-y border-border">
                {[
                  ["1", "Select sample family", "Carpet tiles, hotel broadloom, or a mixed commercial set"],
                  ["2", "Confirm availability", "We match current colors, backing, fire-rating, and TDS options"],
                  ["3", "Approve courier cost", "DHL, FedEx, or UPS is confirmed for your delivery country"],
                  ["4", "Prepare and dispatch", "Typical preparation is 3-5 days for available samples"],
                ].map(([step, title, detail]) => (
                  <div key={step} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-black text-white">{step}</span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.08em] text-primary">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-l-4 border-accent pl-4 text-sm leading-relaxed text-muted">
                Available standard samples may be free; the buyer normally covers international courier cost. Custom-developed samples are quoted separately before production.
              </p>
            </div>

            <div id="sample-request-form" className="order-1 scroll-mt-28 lg:order-2">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-accent">Short Sample Request</p>
              <h3 className="mb-3 text-2xl font-black uppercase text-primary md:text-3xl">Choose Samples and Delivery Country</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">Only name, business email, and destination are required. Project details remain optional.</p>
              <LeadCaptureForm
                formName="request_sample_box"
                submitLabel="REQUEST SAMPLE OPTIONS"
                productDefault={product || "Commercial carpet sample box"}
                projectTypeDefault="Sample request"
                variant="sample"
              />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp-placement="sample_box_page"
                data-whatsapp-product={product || "Commercial carpet sample box"}
                data-whatsapp-intent="sample_box_request"
                className="mt-4 flex min-h-11 items-center justify-center rounded-sm border border-[#25D366]/35 bg-white px-5 py-3 text-center text-[10px] font-black uppercase tracking-[0.12em] text-[#168B43] transition-colors hover:bg-[#25D366]/10"
              >
                Ask a Sample Question on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
