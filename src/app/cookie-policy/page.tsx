import type { Metadata } from "next";
import Link from "next/link";
import CookiePreferencesLink from "@/components/CookiePreferencesLink";

export const metadata: Metadata = {
  title: "Cookie Policy | VCARPETS",
  description: "Cookie Policy explaining necessary storage and consent-based analytics and advertising technologies used by VCARPETS.",
  alternates: { canonical: "https://www.vcarpets.com/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | VCARPETS",
    description: "How VCARPETS uses necessary storage, analytics and advertising technologies and how visitors can change consent.",
    url: "https://www.vcarpets.com/cookie-policy",
    siteName: "VCARPETS",
    type: "website",
  },
};

const technologies = [
  {
    name: "Consent preferences",
    category: "Necessary",
    trigger: "Always available",
    purpose: "Stores the visitor's Analytics and Advertising choices in first-party local storage so the site can honor and remember them.",
  },
  {
    name: "Language and functional storage",
    category: "Necessary",
    trigger: "When a visitor selects a language or uses site functionality",
    purpose: "Supports language continuity, security, form flow and other requested website functions.",
  },
  {
    name: "Google Analytics 4",
    category: "Analytics",
    trigger: "Analytics consent",
    purpose: "Measures pseudonymous page paths, engagement and conversion events without intentionally receiving raw inquiry fields.",
  },
  {
    name: "Microsoft Clarity",
    category: "Analytics",
    trigger: "Analytics consent",
    purpose: "Helps VCARPETS understand aggregate website use and interaction patterns. Custom events are limited to generic event names and non-personal business context.",
  },
  {
    name: "Yandex Metrica",
    category: "Analytics",
    trigger: "Analytics consent and only when configured",
    purpose: "Provides optional website engagement measurement in deployments where an ID is configured.",
  },
  {
    name: "Microsoft Advertising UET",
    category: "Advertising",
    trigger: "Advertising consent",
    purpose: "Measures advertising performance and generic conversion events. The UET script is blocked before Advertising consent. Microsoft may request Clarity-related endpoints as part of the UET service; the account-side integration setting requires separate verification.",
  },
  {
    name: "Google Ads",
    category: "Advertising",
    trigger: "Advertising consent",
    purpose: "Measures campaign conversions and advertising performance using limited event metadata.",
  },
  {
    name: "Google Tag Manager",
    category: "Advertising",
    trigger: "Advertising consent and only when configured",
    purpose: "Loads configured advertising-related tags. The reviewed code does not expose a GTM container ID by default.",
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="bg-[#102A43] py-20 text-white md:py-28">
        <div className="container-fox">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-accent">Privacy Controls</p>
          <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">Cookie Policy</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">This policy describes the storage and tracking technologies observed in the VCARPETS website implementation and how consent controls their use.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-fox max-w-5xl space-y-10">
          <div className="border border-border bg-surface p-6 md:p-8">
            <p className="text-sm leading-7 text-muted"><strong className="text-primary">Last Updated:</strong> September 22, 2026. Necessary storage remains active. Analytics and Advertising are separate optional categories and remain off until selected.</p>
          </div>

          <section>
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">What Cookies and Storage Technologies Are</h2>
            <p className="text-base leading-8 text-muted">Cookies, local storage, session storage, pixels and tags are browser technologies that can remember choices, support requested functionality, measure use or attribute advertising interactions. The exact cookies created by a provider can vary by browser, region, provider configuration and consent state.</p>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">Observed Technology Inventory</h2>
            <div className="overflow-x-auto border border-border">
              <table className="min-w-[760px] w-full border-collapse text-left">
                <thead className="bg-primary text-white"><tr><th className="p-4 text-xs uppercase tracking-[0.08em]">Technology</th><th className="p-4 text-xs uppercase tracking-[0.08em]">Category</th><th className="p-4 text-xs uppercase tracking-[0.08em]">Trigger</th><th className="p-4 text-xs uppercase tracking-[0.08em]">Purpose</th></tr></thead>
                <tbody>{technologies.map((item) => <tr key={item.name} className="border-t border-border align-top"><td className="p-4 text-sm font-bold text-primary">{item.name}</td><td className="p-4 text-sm text-muted">{item.category}</td><td className="p-4 text-sm text-muted">{item.trigger}</td><td className="p-4 text-sm leading-6 text-muted">{item.purpose}</td></tr>)}</tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">Consent States</h2>
            <div className="space-y-4 text-base leading-8 text-muted">
              <p><strong className="text-primary">Fresh visitor or Reject Non-Essential:</strong> Analytics and Advertising scripts remain blocked.</p>
              <p><strong className="text-primary">Analytics only:</strong> GA4, Clarity, the anonymous visitor beacon and Yandex when configured may load. Microsoft UET and Google Ads remain blocked.</p>
              <p><strong className="text-primary">Advertising only:</strong> Microsoft UET, Google Ads and advertising-related GTM may load. Analytics-only tools remain blocked.</p>
              <p><strong className="text-primary">Accept All:</strong> Both optional categories may load. Disabling a category in Cookie Preferences prevents future loads and sends updated consent where the loaded provider supports it.</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">Cookie Preferences and Withdrawal</h2>
            <p className="mb-5 text-base leading-8 text-muted">You can reopen Cookie Preferences from the footer at any time, change Analytics and Advertising separately, and save the new choice. Browser settings can also delete stored preferences or provider cookies.</p>
            <div className="inline-flex border border-primary bg-primary px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-white"><CookiePreferencesLink /></div>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="mb-4 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">Related Information</h2>
            <p className="text-base leading-8 text-muted">Read the <Link href="/privacy-policy" className="font-bold text-accent hover:text-primary">Privacy Policy</Link> for information about personal data, providers, retention, international processing, rights and contact details. Microsoft also publishes a <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="font-bold text-accent hover:text-primary">Microsoft Privacy Statement</a>.</p>
          </section>
        </div>
      </section>
    </div>
  );
}
