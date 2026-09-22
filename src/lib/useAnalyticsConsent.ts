"use client";

import { useSyncExternalStore } from "react";
import {
  analyticsConsentEvent,
  consentPreferencesEvent,
  getAnalyticsConsent,
  getConsentPreferences,
  hasAdvertisingConsent,
  hasAnalyticsConsent,
} from "@/lib/consent";

function subscribe(callback: () => void) {
  window.addEventListener(analyticsConsentEvent, callback);
  window.addEventListener(consentPreferencesEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(analyticsConsentEvent, callback);
    window.removeEventListener(consentPreferencesEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useAnalyticsConsentValue() {
  return useSyncExternalStore(subscribe, getAnalyticsConsent, () => null);
}

export function useAnalyticsAllowed() {
  return useSyncExternalStore(subscribe, hasAnalyticsConsent, () => false);
}

export function useAdvertisingAllowed() {
  return useSyncExternalStore(subscribe, hasAdvertisingConsent, () => false);
}

export function useConsentPreferences() {
  return useSyncExternalStore(subscribe, getConsentPreferences, () => null);
}
