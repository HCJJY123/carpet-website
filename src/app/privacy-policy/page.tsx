import type { Metadata } from "next";
import Link from "next/link";

const companyName = "Vcarpets Global Commercial Carpet Co., Ltd.";
const contactEmail = "sales@vcarpets.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for VCARPETS website visitors, commercial carpet inquiries, cookies and consent-based marketing measurement.",
  alternates: { canonical: "https://www.vcarpets.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | VCARPETS",
    description: "How VCARPETS handles website, inquiry form, cookie and consent-based tracking information.",
    url: "https://www.vcarpets.com/privacy-policy",
    siteName: "VCARPETS",
    type: "website",
  },
};

const sections = [
  {
    title: "Who We Are",
    body: [
      `${companyName} operates the VCARPETS website at www.vcarpets.com and supplies commercial carpet products, samples, technical information and project quotation support.`,
      "This policy explains how we handle information collected through the website, inquiry forms, sample requests, WhatsApp or email links, and consent-based measurement tools.",
    ],
  },
  {
    title: "Scope and Information We Collect",
    body: [
      "If you submit an inquiry, we may receive the name, company, email, telephone or WhatsApp number, country, project details, product interests, quantity, timing, message and any files or details you choose to provide.",
      "For website operation and security, our hosting and form infrastructure may process technical information such as IP address, browser, device, language, approximate location, request time and error logs.",
      "When optional consent is active, we may process pseudonymous page paths, campaign parameters, AI-referral source labels, engagement events and randomly generated visitor or session identifiers. We do not intentionally send inquiry names, email addresses, phone numbers, messages or company names to analytics, advertising, UET, Clarity, Yandex or the browser dataLayer.",
    ],
  },
  {
    title: "How We Collect and Use Information",
    body: [
      "We collect information directly from forms and communications, from necessary website storage, and from optional tools only after the relevant consent category is selected.",
      "We use inquiry information to respond to project requests, prepare quotations, recommend samples, provide technical documents, arrange follow-up, prevent abuse, operate the website and maintain business communication records.",
      "With Analytics consent, we use anonymous or pseudonymous measurement to understand page performance, product interest and conversion paths. With Advertising consent, we measure advertising interactions and campaign conversions. These categories can be selected separately and withdrawn at any time.",
    ],
  },
  {
    title: "Cookies and Tracking Choices",
    body: [
      "Necessary storage supports consent preferences, language behavior, security and form-related functionality. It remains active because the site cannot reliably operate without it.",
      "Analytics tools are loaded only after Analytics consent. Advertising tools are loaded only after Advertising consent. The Cookie Preferences control in the footer lets you change or withdraw optional choices.",
      "See the separate Cookie Policy for the technologies observed in this implementation and their purpose.",
    ],
  },
  {
    title: "Microsoft Advertising and UET",
    body: [
      "Microsoft Advertising Universal Event Tracking (UET) is used only when Advertising consent is active. Before a choice, the implementation does not load the UET script and uses denied advertising storage when consent signaling is initialized.",
      "When Advertising consent is active, Microsoft may collect or receive Personal Data from users or from us through Microsoft Advertising technologies, including Universal Event Tracking (UET), in order to provide Microsoft Advertising services, including conversion measurement and advertising performance measurement.",
      "After Advertising consent, UET may receive consent-based conversion or interaction events such as a form completion, WhatsApp click or sample-request click. These events use limited business context and do not include raw inquiry email, telephone number, name, message or company fields.",
      "Browser testing showed that Microsoft UET can also request Microsoft Clarity-related endpoints as part of the UET service when Advertising consent is active. This is distinct from the standalone VCARPETS Clarity tag, which remains assigned to Analytics consent. The Microsoft account-side UET and Clarity integration setting requires separate verification.",
      "Microsoft's privacy information is available at https://privacy.microsoft.com/en-us/privacystatement. Microsoft account configuration, regional settings and provider-side retention are not independently verified by this website implementation.",
    ],
  },
  {
    title: "Other Configured Services",
    body: [
      "Depending on the deployed environment and consent choice, the site may use Google Analytics 4, Google Ads, Google Tag Manager, Microsoft Clarity and Yandex Metrica. Google Analytics, Clarity and Yandex are treated as Analytics tools; Google Ads, UET and advertising-related tags are treated as Advertising tools.",
      "Meta Pixel was not found in the reviewed repository implementation. If a future deployment adds a new provider, this policy and the Cookie Policy should be updated before activation.",
    ],
  },
  {
    title: "Service Providers and Recipients",
    body: [
      "Inquiry information may be sent to our configured form or lead-processing provider so that VCARPETS can receive and answer the request. The reviewed implementation uses Formspree and may use a configured lead-ingest endpoint; provider-side account access, retention and deletion settings require separate account verification.",
      "Optional measurement data may be processed by the analytics and advertising providers described above. We do not treat the presence of an advertising click or a pseudonymous visitor label as proof of a person's identity or employer.",
    ],
  },
  {
    title: "Retention and International Transfers",
    body: [
      "We retain inquiry information for as long as reasonably necessary to respond to the project, maintain legitimate business records, meet legal obligations and resolve disputes. Exact mailbox, Formspree, lead-ingest, analytics and advertising-provider retention periods were not verified in this code review and must not be inferred from this page.",
      "VCARPETS and its service providers may process information in countries different from the visitor's country. The applicable safeguards, contractual terms and regional transfer settings depend on the provider accounts and are not fully verifiable from the website source code.",
    ],
  },
  {
    title: "Privacy Rights and Consent Withdrawal",
    body: [
      "Subject to applicable law, you may ask us to access, correct, delete or clarify personal information submitted to VCARPETS, or ask about how it is used. You may also withdraw optional Analytics or Advertising consent through Cookie Preferences without affecting necessary functionality.",
      "To make a request, email sales@vcarpets.com with enough information for us to locate the inquiry. We may need to verify the request before taking action and may retain limited information where required for security, legal compliance or legitimate business records.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable technical and organizational safeguards appropriate to the website and inquiry workflow, including HTTPS, restricted server-side delivery of form data, same-origin checks for visitor measurement and allowlisted analytics payloads. No internet transmission or storage system can be guaranteed completely secure.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "VCARPETS is a business-to-business commercial flooring website and is not directed to children. We do not knowingly request personal information from children through project inquiry forms.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this policy when the website, providers or legal requirements change. The Last Updated date on this page identifies the current published version.",
    ],
  },
  {
    title: "Contact",
    body: [
      `Privacy questions and requests can be sent to ${contactEmail}. Please do not send payment card details, passwords or unrelated sensitive information through a website inquiry form.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-[#102A43] py-20 text-white md:py-28">
        <div className="container-fox">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-accent">Website Privacy Notice</p>
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">Privacy Policy</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">How VCARPETS handles website inquiries, necessary storage and consent-based analytics and advertising measurement.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-border bg-surface p-6">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-primary/50">Company</p>
                <p className="text-sm font-bold leading-6 text-primary">{companyName}</p>
                <div className="my-6 h-px bg-border" />
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-primary/50">Last Updated</p>
                <p className="text-sm font-bold leading-6 text-primary">September 22, 2026</p>
                <div className="my-6 h-px bg-border" />
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-primary/50">Contact</p>
                <a className="break-words text-sm font-bold text-accent hover:text-primary" href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </div>
            </aside>

            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <p className="text-sm leading-7 text-muted">Effective date: September 22, 2026. This policy applies to <Link href="/" className="font-bold text-primary hover:text-accent">www.vcarpets.com</Link> and related VCARPETS commercial carpet inquiry forms.</p>
              </div>
              {sections.map((section) => (
                <section key={section.title} className="border-b border-border pb-8">
                  <h2 className="mb-5 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">{section.title}</h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-muted">{paragraph}</p>)}
                    {section.title === "Microsoft Advertising and UET" ? (
                      <p className="text-base leading-8 text-muted">
                        Read the <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:text-primary">Microsoft Privacy Statement</a>.
                      </p>
                    ) : null}
                  </div>
                </section>
              ))}
              <section className="bg-primary p-8 text-white md:p-10">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-accent">Related Controls</p>
                <h2 className="mb-4 text-2xl font-black uppercase tracking-tight md:text-3xl">Review Cookie Choices</h2>
                <p className="mb-6 max-w-3xl text-sm leading-7 text-white/70">Use Cookie Preferences in the footer to review or withdraw optional Analytics and Advertising consent.</p>
                <div className="flex flex-wrap gap-3">
                  <Link className="inline-block bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-primary transition hover:bg-gray-100" href="/cookie-policy">Read Cookie Policy</Link>
                  <a className="inline-block border border-white/30 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:border-white" href={`mailto:${contactEmail}`}>Contact Privacy Team</a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
