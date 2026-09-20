export type AnalyticsConsent = "accepted" | "necessary" | null;

export const analyticsConsentKey = "vh_analytics_consent";
export const analyticsConsentEvent = "vh-analytics-consent-change";

declare global {
  interface Window {
    uetq?: { push?: (...args: unknown[]) => void } | unknown[];
  }
}

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(analyticsConsentKey);
  return value === "accepted" || value === "necessary" ? value : null;
}

export function hasAnalyticsConsent() {
  return getAnalyticsConsent() === "accepted";
}

export function setAnalyticsConsent(value: Exclude<AnalyticsConsent, null>) {
  window.localStorage.setItem(analyticsConsentKey, value);
  window.uetq = window.uetq || [];
  (window.uetq as { push?: (...args: unknown[]) => void }).push?.("consent", "update", {
    ad_storage: value === "accepted" ? "granted" : "denied",
  });
  window.dispatchEvent(new CustomEvent(analyticsConsentEvent, { detail: value }));
}
