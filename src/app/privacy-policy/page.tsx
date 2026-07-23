import type { Metadata } from "next";
import Link from "next/link";

const companyName = "Vishome Global Commercial Carpet Co., Ltd.";
const contactEmail = "sales@vishomecarpet.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Vishome Carpet",
  description:
    "Privacy Policy for Vishome Carpet. Learn how Vishome Global Commercial Carpet Co., Ltd. collects, uses, protects, and manages information submitted through website forms and Google Ads lead forms.",
  alternates: { canonical: "https://www.vishomecarpet.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Vishome Carpet",
    description:
      "How Vishome Global Commercial Carpet Co., Ltd. handles website and lead form information, cookies, third-party services, data security, and contact requests.",
    url: "https://www.vishomecarpet.com/privacy-policy",
    siteName: "Vishome Carpet",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Vishome Carpet",
    description:
      "Privacy information for Vishome Carpet website visitors, project inquiry forms, and Google Ads lead form submissions.",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact Vishome Carpet through our website, request a quotation, submit a sample request, or complete a Google Ads lead form, we may collect your name, company name, email address, phone number, country or region, project requirements, product interests, message content, and other details you choose to provide.",
      "We may also collect basic technical information such as browser type, device information, referring page, IP address, approximate location, form submission time, and website usage activity for security, analytics, and service improvement purposes.",
      "For business analytics, we may process IP-derived organization information such as ASN, organization name, country, and company domain where available. We use hashed IP values for visit grouping and do not use this data to identify individual people.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information you provide to respond to inquiries, prepare quotations, arrange sample support, communicate about commercial carpet projects, provide product information, improve our website, and support customer service and sales follow-up.",
      "We may also use submitted information to understand lead quality, measure marketing performance, prevent spam or abuse, and maintain business records related to project communication.",
      "Project inquiry data may be assigned an internal lead score based on the information submitted and non-sensitive website engagement signals. This score helps our sales team prioritize relevant B2B requests; it does not produce legal or similarly significant automated decisions.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our website may use cookies and similar technologies to keep the site functional, understand visitor behavior, measure advertising performance, and improve the user experience.",
      "You can control cookies through your browser settings. Disabling cookies may affect some website features, analytics, or form-related functionality.",
    ],
  },
  {
    title: "Third-party Services",
    body: [
      "We may use third-party services such as Google Ads, Google Analytics, website hosting providers, form processing tools, email systems, and communication platforms to operate the website, process inquiries, analyze traffic, and manage marketing campaigns.",
      "We may also use Cloudflare and IPinfo Lite to help understand company-level website traffic, filter non-business traffic, protect the website, and improve B2B sales follow-up.",
      "Website inquiry details are delivered through Formspree and may also be stored in Vishome's access-controlled Cloudflare D1 database so our team can manage quotations, follow-up status, lead quality, and advertising attribution in one record.",
      "These third-party services may process information according to their own privacy policies. We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable administrative, technical, and organizational measures to protect submitted information against unauthorized access, loss, misuse, alteration, or disclosure.",
      "No internet transmission or electronic storage method can be guaranteed as completely secure, but we work to keep inquiry and lead form information protected and accessible only for legitimate business purposes.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      `If you have questions about this Privacy Policy, want to update your information, or would like to request removal from our business contact records, please contact ${companyName}`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-[#102A43] py-20 text-white md:py-28">
        <div className="container-fox">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-accent">
            Website Privacy Notice
          </p>
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
            Privacy Policy | Vishome Carpet
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            This Privacy Policy explains how {companyName} collects, uses, and protects information submitted through Vishome Carpet website forms, project inquiries, and advertising lead forms.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-border bg-surface p-6">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-primary/50">
                  Company
                </p>
                <p className="text-sm font-bold leading-6 text-primary">{companyName}</p>
                <div className="my-6 h-px bg-border" />
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-primary/50">
                  Contact
                </p>
                <a className="break-words text-sm font-bold text-accent hover:text-primary" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </div>
            </aside>

            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <p className="text-sm leading-7 text-muted">
                  Effective date: July 22, 2026. This policy applies to information collected on
                  {" "}
                  <Link href="/" className="font-bold text-primary hover:text-accent">
                    www.vishomecarpet.com
                  </Link>
                  {" "}
                  and related Vishome Carpet lead forms used for commercial carpet inquiries.
                </p>
              </div>

              {sections.map((section) => (
                <section key={section.title} className="border-b border-border pb-8">
                  <h2 className="mb-5 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-muted">
                        {paragraph}
                      </p>
                    ))}
                    {section.title === "Contact Us" ? (
                      <p className="text-base leading-8 text-muted">
                        Email:{" "}
                        <a className="font-bold text-accent hover:text-primary" href={`mailto:${contactEmail}`}>
                          {contactEmail}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </section>
              ))}

              <section className="bg-primary p-8 text-white md:p-10">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-accent">
                  Project Support
                </p>
                <h2 className="mb-4 text-2xl font-black uppercase tracking-tight md:text-3xl">
                  Need to Update an Inquiry?
                </h2>
                <p className="mb-6 max-w-3xl text-sm leading-7 text-white/70">
                  If you submitted a project inquiry or lead form and need to correct, update, or remove your contact information, contact our team by email.
                </p>
                <a className="inline-block bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-primary transition hover:bg-gray-100" href={`mailto:${contactEmail}`}>
                  Contact Privacy Team
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
