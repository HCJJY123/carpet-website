"use client";

import { useSyncExternalStore } from "react";
import { analyticsConsentEvent, getAnalyticsConsent, hasAnalyticsConsent } from "@/lib/consent";

function subscribe(callback: () => void) {
  window.addEventListener(analyticsConsentEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(analyticsConsentEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useAnalyticsConsentValue() {
  return useSyncExternalStore(subscribe, getAnalyticsConsent, () => null);
}

export function useAnalyticsAllowed() {
  return useSyncExternalStore(subscribe, hasAnalyticsConsent, () => false);
}
