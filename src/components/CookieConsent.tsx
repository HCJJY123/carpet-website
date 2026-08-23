"use client";

import Link from "next/link";
import { setAnalyticsConsent } from "@/lib/consent";
import { useAnalyticsConsentValue } from "@/lib/useAnalyticsConsent";

export default function CookieConsent() {
  const consent = useAnalyticsConsentValue();

  if (consent) return null;

  return (
    <section className="fixed inset-x-3 bottom-3 z-[80] rounded-md border border-border bg-white p-4 shadow-2xl md:left-auto md:right-5 md:w-[420px]" aria-label="Cookie consent">
      <h2 className="text-sm font-black uppercase tracking-[0.08em] text-primary">Cookie & analytics</h2>
      <p className="mt-2 text-xs font-semibold leading-6 text-muted">
        Necessary storage keeps the site working. Accept analytics if you want us to measure which pages lead to quote requests and improve the pages buyers actually use.
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          className="rounded-sm bg-primary px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-primary/90"
          onClick={() => setAnalyticsConsent("accepted")}
        >
          Accept analytics
        </button>
        <button
          type="button"
          className="rounded-sm border border-border px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-primary transition-colors hover:border-primary hover:bg-surface"
          onClick={() => setAnalyticsConsent("necessary")}
        >
          Necessary only
        </button>
      </div>
      <p className="mt-3 text-[11px] font-medium leading-5 text-muted">
        You can change this later in the browser, and the privacy policy explains what is collected.
      </p>
      <Link href="/privacy-policy" className="mt-2 inline-block text-xs font-bold text-accent hover:text-primary">Privacy Policy</Link>
    </section>
  );
}
