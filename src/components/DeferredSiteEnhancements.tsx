"use client";

import { usePathname } from "next/navigation";
import { lazy, Suspense, useEffect, useState } from "react";

const MarketingTracking = lazy(() => import("@/components/MarketingTracking"));
const VisitorBeacon = lazy(() => import("@/components/VisitorBeacon"));
const CookieConsent = lazy(() => import("@/components/CookieConsent"));
const ImageProtection = lazy(() => import("@/components/ImageProtection"));

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function DeferredSiteEnhancements() {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isHighIntentPage = pathname.startsWith("/products/") || pathname.startsWith("/contact");
    if (isHighIntentPage) {
      setReady(true);
      return;
    }

    const idleWindow = window as IdleWindow;
    const show = () => setReady(true);

    if (document.readyState === "complete") {
      const handle = idleWindow.requestIdleCallback?.(show, { timeout: 2_500 });
      if (handle) return () => idleWindow.cancelIdleCallback?.(handle);
    }

    const timer = window.setTimeout(show, 1_800);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <MarketingTracking />
      <VisitorBeacon />
      <CookieConsent />
      <ImageProtection />
    </Suspense>
  );
}
