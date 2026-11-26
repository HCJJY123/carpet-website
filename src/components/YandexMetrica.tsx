"use client";

import { useEffect } from "react";
import { analyticsConsentEvent, hasAnalyticsConsent } from "@/lib/consent";

const counterId = 111239007;

export default function YandexMetrica() {
  useEffect(() => {
    let tag: HTMLScriptElement | undefined;
    let initialized = false;
    let pendingCalls: unknown[][] | undefined;

    function stop() {
      if (!tag) return;
      if (pendingCalls) pendingCalls.length = 0;
      tag.onload = null;
      tag.remove();
      tag = undefined;
      if (initialized) {
        initialized = false;
        window.ym?.(counterId, "destruct");
      }
    }

    function sync() {
      if (!hasAnalyticsConsent()) {
        stop();
        return;
      }
      if (tag) return;

      // The vendor bootstrap expects a queue when its library first loads.
      if (!window.ym) {
        const queue = Object.assign((...args: unknown[]) => { queue.a.push(args); }, {
          a: [] as unknown[][],
          l: Date.now(),
        });
        pendingCalls = queue.a;
        window.ym = queue;
      }
      const script = document.createElement("script");
      tag = script;
      script.async = true;
      script.onload = () => {
        // A user can withdraw while the optional library is still in flight.
        if (tag !== script || !hasAnalyticsConsent() || initialized) return;
        initialized = true;
        window.ym?.(counterId, "init", {
          ssr: true, webvisor: true, clickmap: true, ecommerce: "dataLayer",
          referrer: document.referrer, url: location.href,
          accurateTrackBounce: true, trackLinks: true,
        });
      };
      script.src = "https://mc.yandex.ru/metrika/tag.js";
      document.head.appendChild(script);
    }

    // Handle revocation immediately, before the preferences UI reloads. Storage
    // events apply the same change to an already open tab without a navigation.
    window.addEventListener(analyticsConsentEvent, sync);
    window.addEventListener("storage", sync);
    sync();
    return () => {
      window.removeEventListener(analyticsConsentEvent, sync);
      window.removeEventListener("storage", sync);
      stop();
    };
  }, []);

  // Consent lives in the browser. Without JavaScript there is no verified
  // opt-in, so the server must not render a Yandex noscript tracking pixel.
  return null;
}
