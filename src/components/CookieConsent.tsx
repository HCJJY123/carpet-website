"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getConsentPreferences, setConsentPreferences } from "@/lib/consent";
import { useConsentPreferences } from "@/lib/useAnalyticsConsent";

export default function CookieConsent() {
  const preferences = useConsentPreferences();
  const [isPreferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    const handlePreferencesEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ open?: boolean }>).detail;
      if (detail?.open) {
        const current = getConsentPreferences();
        setAnalytics(current?.analytics ?? false);
        setAdvertising(current?.advertising ?? false);
        setPreferencesOpen(true);
      }
    };
    window.addEventListener("vcarpets-consent-preferences-change", handlePreferencesEvent);
    return () => window.removeEventListener("vcarpets-consent-preferences-change", handlePreferencesEvent);
  }, []);

  const save = (nextAnalytics: boolean, nextAdvertising: boolean) => {
    const requiresReload = Boolean(
      preferences &&
      ((preferences.analytics && !nextAnalytics) || (preferences.advertising && !nextAdvertising))
    );
    setConsentPreferences({ analytics: nextAnalytics, advertising: nextAdvertising });
    setPreferencesOpen(false);
    if (requiresReload) window.location.reload();
  };

  if (preferences && !isPreferencesOpen) return null;

  return (
    <section
      className="fixed inset-x-3 bottom-3 z-[80] rounded-md border border-border bg-white p-4 shadow-2xl md:left-auto md:right-5 md:w-[460px]"
      aria-label="Cookie consent"
      role={isPreferencesOpen ? "dialog" : undefined}
      aria-modal={isPreferencesOpen ? true : undefined}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent">VCARPETS privacy choices</p>
          <h2 className="mt-1 text-sm font-black uppercase tracking-[0.08em] text-primary">
            {isPreferencesOpen ? "Cookie Preferences" : "Cookies and tracking"}
          </h2>
        </div>
        {isPreferencesOpen && preferences ? (
          <button type="button" className="text-xs font-bold text-muted hover:text-primary" onClick={() => setPreferencesOpen(false)} aria-label="Close cookie preferences">
            Close
          </button>
        ) : null}
      </div>
      <p className="mt-2 text-xs font-semibold leading-6 text-muted">
        Necessary storage keeps the site working. Analytics helps us understand page performance. Advertising helps measure campaigns. Optional categories stay off unless you choose them.
      </p>

      {isPreferencesOpen ? (
        <div className="mt-4 space-y-3">
          <div className="flex items-start justify-between gap-4 rounded-sm border border-border p-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.08em] text-primary">Necessary</p>
              <p className="mt-1 text-[11px] leading-5 text-muted">Always on for consent, security, language and form functionality.</p>
            </div>
            <span className="pt-1 text-[11px] font-black uppercase text-muted">Always on</span>
          </div>
          <label className="flex cursor-pointer items-start justify-between gap-4 rounded-sm border border-border p-3">
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.08em] text-primary">Analytics</span>
              <span className="mt-1 block text-[11px] leading-5 text-muted">GA4, Clarity, Yandex when configured, and anonymous visitor measurement.</span>
            </span>
            <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="mt-1 h-4 w-4 accent-[#102A43]" />
          </label>
          <label className="flex cursor-pointer items-start justify-between gap-4 rounded-sm border border-border p-3">
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.08em] text-primary">Advertising</span>
              <span className="mt-1 block text-[11px] leading-5 text-muted">Microsoft UET, Google Ads and advertising-related tags.</span>
            </span>
            <input type="checkbox" checked={advertising} onChange={(event) => setAdvertising(event.target.checked)} className="mt-1 h-4 w-4 accent-[#102A43]" />
          </label>
          <button type="button" className="w-full rounded-sm bg-primary px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-primary/90" onClick={() => save(analytics, advertising)}>
            Save Preferences
          </button>
        </div>
      ) : (
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <button type="button" className="rounded-sm bg-primary px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-primary/90" onClick={() => save(true, true)}>
            Accept All
          </button>
          <button type="button" className="rounded-sm border border-border px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-primary transition-colors hover:border-primary hover:bg-surface" onClick={() => save(false, false)}>
            Reject Non-Essential
          </button>
          <button type="button" className="rounded-sm border border-border px-4 py-3 text-xs font-black uppercase tracking-[0.08em] text-primary transition-colors hover:border-primary hover:bg-surface" onClick={() => setPreferencesOpen(true)}>
            Cookie Preferences
          </button>
        </div>
      )}

      <p className="mt-3 text-[11px] font-medium leading-5 text-muted">
        You can change your choice at any time. Read our <Link href="/privacy-policy" className="font-bold text-accent hover:text-primary">Privacy Policy</Link> and <Link href="/cookie-policy" className="font-bold text-accent hover:text-primary">Cookie Policy</Link>.
      </p>
    </section>
  );
}
