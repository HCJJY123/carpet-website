export type AnalyticsConsent = "accepted" | "necessary" | null;

export type ConsentPreferences = {
  analytics: boolean;
  advertising: boolean;
};

export const analyticsConsentKey = "vh_analytics_consent";
export const consentPreferencesKey = "VCARPETS_consent_preferences";
export const analyticsConsentEvent = "vh-analytics-consent-change";
export const consentPreferencesEvent = "vcarpets-consent-preferences-change";

let cachedConsentRaw: string | null | undefined;
let cachedConsentPreferences: ConsentPreferences | null = null;

declare global {
  interface Window {
    uetq?: { push?: (...args: unknown[]) => void } | unknown[];
  }
}

export function getAnalyticsConsent(): AnalyticsConsent {
  if (typeof window === "undefined") return null;
  const preferences = getConsentPreferences();
  if (preferences) return preferences.analytics ? "accepted" : "necessary";
  const value = window.localStorage.getItem(analyticsConsentKey);
  return value === "accepted" || value === "necessary" ? value : null;
}

export function hasAnalyticsConsent() {
  return getAnalyticsConsent() === "accepted";
}

export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(consentPreferencesKey);
  if (stored === cachedConsentRaw) return cachedConsentPreferences;
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Partial<ConsentPreferences>;
      if (typeof parsed.analytics === "boolean" && typeof parsed.advertising === "boolean") {
        cachedConsentRaw = stored;
        cachedConsentPreferences = { analytics: parsed.analytics, advertising: parsed.advertising };
        return cachedConsentPreferences;
      }
    } catch {
      window.localStorage.removeItem(consentPreferencesKey);
    }
  }

  const legacy = window.localStorage.getItem(analyticsConsentKey);
  cachedConsentRaw = stored;
  cachedConsentPreferences = legacy === "accepted"
    ? { analytics: true, advertising: false }
    : legacy === "necessary"
      ? { analytics: false, advertising: false }
      : null;
  return cachedConsentPreferences;
}

export function hasAdvertisingConsent() {
  return getConsentPreferences()?.advertising === true;
}

function updateUetConsent(advertising: boolean) {
  if (typeof window === "undefined") return;
  const queue = window.uetq as { push?: (...args: unknown[]) => void } | undefined;
  if (typeof queue?.push !== "function") return;
  queue.push("consent", "update", { ad_storage: advertising ? "granted" : "denied" });
}

export function setConsentPreferences(preferences: ConsentPreferences) {
  if (typeof window === "undefined") return;
  const serialized = JSON.stringify(preferences);
  cachedConsentRaw = serialized;
  cachedConsentPreferences = preferences;
  window.localStorage.setItem(consentPreferencesKey, serialized);
  window.localStorage.setItem(analyticsConsentKey, preferences.analytics ? "accepted" : "necessary");
  updateUetConsent(preferences.advertising);
  window.dispatchEvent(new CustomEvent(consentPreferencesEvent, { detail: preferences }));
  window.dispatchEvent(new CustomEvent(analyticsConsentEvent, { detail: preferences.analytics ? "accepted" : "necessary" }));
}

export function setAnalyticsConsent(value: Exclude<AnalyticsConsent, null>) {
  setConsentPreferences({
    analytics: value === "accepted",
    advertising: getConsentPreferences()?.advertising ?? false,
  });
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(consentPreferencesEvent, { detail: { open: true } }));
}
