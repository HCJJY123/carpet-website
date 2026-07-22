import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { brandInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Vishome Carpet",
  description:
    "Read the Vishome Carpet privacy policy for lead form inquiries, including information collection, cookies, third-party services, data security, and contact details.",
  alternates: { canonical: "https://www.vishomecarpet.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Vishome Carpet",
    description:
      "Privacy policy for Vishome Carpet inquiries, lead forms, cookies, third-party services, and data protection practices.",
    url: "https://www.vishomecarpet.com/privacy-policy",
    type: "website",
  },
};

const policySections = [
  {
    title: "Information We Collect",
    body: [
      "When you submit a form, request a sample, ask for a quotation, contact us through WhatsApp, email our sales team, or otherwise communicate with Vishome Carpet, we may collect the information you choose to provide. This may include your name, company name, job title, email address, phone number, WhatsApp number, country or region, project details, product interests, estimated order quantity, shipping requirements, and any files or notes you send to us.",
      "We may also collect basic technical information when you visit our website, such as your IP address, browser type, device information, pages viewed, referring pages, and the date and time of your visit.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to inquiries, prepare quotations, arrange samples, provide product and project support, communicate about commercial carpet requirements, process business requests, improve our website, measure marketing performance, and maintain the security and reliability of our services.",
      "We may use contact information to follow up on your inquiry or lead form submission. We do not sell your personal information.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our website may use cookies and similar technologies to keep the website functioning, understand visitor behavior, improve page performance, and support advertising or analytics measurement.",
      "You can adjust cookie settings through your browser. Disabling cookies may affect how some website features work.",
    ],
  },
  {
    title: "Third-party Services",
    body: [
      "We may use third-party services such as Google Ads, Google Analytics, Google Tag Manager, website hosting providers, form processing tools, email services, and communication platforms to operate the website, process inquiries, measure campaigns, and improve customer support.",
      "These third-party providers may process limited information according to their own privacy policies and service terms. We use these services to support legitimate business operations and lead form communication.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable administrative, technical, and organizational measures to protect information submitted through our website from unauthorized access, loss, misuse, alteration, or disclosure.",
      "No online transmission or storage method is completely secure, so we cannot guarantee absolute security. We keep inquiry information only as long as reasonably needed for business communication, legal compliance, dispute prevention, and recordkeeping.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      `If you have questions about this Privacy Policy or want to contact us about your personal information, please email ${brandInfo.email}.`,
      `Company: ${brandInfo.name}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <PageHero
        title="Privacy Policy"
        eyebrow="Website & Lead Form Privacy"
        description="How Vishome Carpet handles inquiry details, website data, cookies, and third-party services for B2B project communication."
        image="/images/about/about-us-hero-banner.webp"
        imageAlt="Vishome commercial carpet showroom and project consultation background"
        objectPosition="center 45%"
      />

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border-l-4 border-accent bg-surface p-6">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-primary/50">
                  Policy Summary
                </p>
                <h2 className="mb-5 text-2xl font-black uppercase leading-tight text-primary">
                  Vishome Carpet Website Privacy
                </h2>
                <p className="text-sm font-medium leading-relaxed text-muted">
                  This policy applies to information submitted through vishomecarpet.com, Google lead forms,
                  project quote requests, sample requests, email, and business communication channels.
                </p>
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/45">
                    Contact Email
                  </p>
                  <a
                    href={`mailto:${brandInfo.email}`}
                    className="mt-2 block break-words text-sm font-black text-accent transition-colors hover:text-primary"
                  >
                    {brandInfo.email}
                  </a>
                </div>
              </div>
            </aside>

            <div className="space-y-10">
              <div className="border-b border-border pb-8">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-accent">
                  Effective Date: July 22, 2026
                </p>
                <p className="max-w-4xl text-lg leading-relaxed text-muted">
                  Vishome Global Commercial Carpet Co., Ltd. ("Vishome Carpet," "we," "us," or "our") respects
                  your privacy. This Privacy Policy explains what information we collect, how we use it, and how
                  you can contact us about privacy-related questions.
                </p>
              </div>

              {policySections.map((section, index) => (
                <section key={section.title} className="group border-l-2 border-border py-2 pl-6 transition-colors hover:border-accent md:pl-8">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-xs font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-black uppercase tracking-[0.08em] text-primary md:text-2xl">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base font-medium leading-relaxed text-muted md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="container-fox flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-accent">
              Need Privacy Support?
            </p>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-[0.06em] md:text-4xl">
              Contact Vishome Carpet
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/65 md:text-base">
              For questions about this policy, lead form data, or project inquiry information, contact our sales team.
            </p>
          </div>
          <Link
            href={`mailto:${brandInfo.email}`}
            className="bg-white px-8 py-5 text-xs font-black uppercase tracking-[0.18em] text-primary shadow-xl transition-all hover:bg-gray-100 md:px-12 md:tracking-[0.24em]"
          >
            {brandInfo.email}
          </Link>
        </div>
      </section>
    </div>
  );
}
