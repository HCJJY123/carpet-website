"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackAnalyticsEvent, trackInteractionConversion } from "@/lib/tracking";
import { captureAttributionOnce, getAttributionForEvent } from "@/lib/attribution";
import {
  getFunnelSessionSignals,
  markFunnelEventOnce,
  recordEngagedSeconds,
  recordProductView,
  recordSectionView,
  savePendingContactFunnel,
} from "@/lib/funnel";
import { getVisitorIdentity } from "@/lib/visitorIdentity";
import { useAdvertisingAllowed, useAnalyticsAllowed } from "@/lib/useAnalyticsConsent";

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-T2VYHXTK1F";
const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "GT-NMDDTW67";
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18306142236";
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "xgg9z07tsm";
const gtmContainerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
const pendingContactSourceKey = "VCARPETS_pending_contact_source";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    ym?: (...args: unknown[]) => void;
  }
}

export default function MarketingTracking() {
  const pathname = usePathname();
  const analyticsAllowed = useAnalyticsAllowed();
  const advertisingAllowed = useAdvertisingAllowed();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: analyticsAllowed ? "granted" : "denied",
      ad_storage: advertisingAllowed ? "granted" : "denied",
      ad_user_data: advertisingAllowed ? "granted" : "denied",
      ad_personalization: advertisingAllowed ? "granted" : "denied",
    });
  }, [advertisingAllowed, analyticsAllowed]);

  useEffect(() => {
    captureAttributionOnce();

    if (!analyticsAllowed) return;

    const attribution = getAttributionForEvent();
    if (
      attribution.traffic_channel === "ai_referral" &&
      !window.sessionStorage.getItem("VCARPETS_ai_referral_landing")
    ) {
      window.sessionStorage.setItem("VCARPETS_ai_referral_landing", "1");
      trackAnalyticsEvent("ai_referral_landing", {
        ai_source: attribution.ai_source,
        landing_page: attribution.landing_page,
        page_path: window.location.pathname,
      });
    }
  }, [analyticsAllowed]);

  useEffect(() => {
    if (!analyticsAllowed) return;
    if (typeof window.gtag !== "function") return;

    const pageViewPayload = {
      page_path: pathname,
      page_location: `${window.location.origin}${pathname}`,
      page_title: document.title,
    };

    if (ga4MeasurementId) {
      window.gtag("config", ga4MeasurementId, pageViewPayload);
    }

    if (analyticsAllowed && googleTagId) {
      window.gtag("config", googleTagId, pageViewPayload);
    }
  }, [analyticsAllowed, pathname]);

  useEffect(() => {
    const productMatch = pathname.match(/^\/(?:[a-z]{2}\/)?products\/([^/]+)\/([^/]+)$/);

    function maybeTrackHighIntentSession() {
      const signals = getFunnelSessionSignals();
      const highIntent =
        signals.productViewCount >= 2 &&
        (signals.maxEngagedSeconds >= 60 || signals.sectionViewCount > 0);

      if (!analyticsAllowed || !highIntent || !markFunnelEventOnce("high_intent_session")) return;
      trackAnalyticsEvent("high_intent_session", {
        page_path: pathname,
        product_view_count: signals.productViewCount,
        max_engaged_seconds: signals.maxEngagedSeconds,
        section_view_count: signals.sectionViewCount,
      });
    }

    if (productMatch) {
      const [, category, productId] = productMatch;
      const result = recordProductView(pathname);

      if (analyticsAllowed && result.isNew) {
        trackAnalyticsEvent("product_detail_view", {
          item_id: productId,
          item_category: category,
          page_path: pathname,
          product_view_count: result.signals.productViewCount,
        });
      }

      for (const threshold of [2, 3]) {
        if (
          analyticsAllowed &&
          result.signals.productViewCount >= threshold &&
          markFunnelEventOnce(`view_${threshold}_products`)
        ) {
          trackAnalyticsEvent(`view_${threshold}_products`, {
            page_path: pathname,
            product_view_count: result.signals.productViewCount,
          });
        }
      }

      maybeTrackHighIntentSession();
    }

    let visibleSeconds = 0;
    const engagementTimer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      visibleSeconds += 1;

      if (visibleSeconds === 8 || visibleSeconds === 30 || visibleSeconds === 60) {
        const signals = recordEngagedSeconds(visibleSeconds);
        const eventName = `engaged_${visibleSeconds}s`;
        if (analyticsAllowed && markFunnelEventOnce(`${eventName}:${pathname}`)) {
          trackAnalyticsEvent(eventName, {
            page_path: pathname,
            engaged_seconds: visibleSeconds,
            product_view_count: signals.productViewCount,
          });
        }
        maybeTrackHighIntentSession();
      }
    }, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const sectionName = element.dataset.funnelSection;
          if (!sectionName) return;

          const sectionKey = `${pathname}:${sectionName}`;
          const result = recordSectionView(sectionKey);
          if (analyticsAllowed && result.isNew) {
            trackAnalyticsEvent(`${sectionName}_view`, {
              page_path: pathname,
              section_name: sectionName,
              product_view_count: result.signals.productViewCount,
            });
          }
          observer.unobserve(element);
          maybeTrackHighIntentSession();
        });
      },
      { threshold: 0.45 }
    );

    document.querySelectorAll<HTMLElement>("[data-funnel-section]").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.clearInterval(engagementTimer);
      observer.disconnect();
    };
  }, [analyticsAllowed, pathname]);

  useEffect(() => {
    function handleContactSourceClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const resolvedUrl = new URL(anchor.href, window.location.origin);
      const isSameOrigin = resolvedUrl.origin === window.location.origin;
      const isQuoteAnchor = href === "#quote-form";
      const isContactLink = isSameOrigin && resolvedUrl.pathname === "/contact";
      if (!isQuoteAnchor && !isContactLink) return;

      const sourcePage = window.location.pathname;
      if (isContactLink && sourcePage && !resolvedUrl.searchParams.get("source")) {
        resolvedUrl.searchParams.set("source", sourcePage);
        anchor.href = `${resolvedUrl.pathname}${resolvedUrl.search}${resolvedUrl.hash}`;
      }
      if (sourcePage) window.sessionStorage.setItem(pendingContactSourceKey, sourcePage);
      savePendingContactFunnel(sourcePage);
    }

    document.addEventListener("click", handleContactSourceClick, true);
    return () => document.removeEventListener("click", handleContactSourceClick, true);
  }, []);

  useEffect(() => {
    if (!analyticsAllowed && !advertisingAllowed) return;

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      let href = anchor.getAttribute("href") || "";
      const resolvedUrl = new URL(anchor.href, window.location.origin);
      const isSameOrigin = resolvedUrl.origin === window.location.origin;
      const normalizedPath = resolvedUrl.pathname;
      const leadData = {
        placement: anchor.dataset.whatsappPlacement,
        product: anchor.dataset.whatsappProduct,
        intent: anchor.dataset.whatsappIntent,
      };
      const trackEvent = anchor.dataset.trackEvent;

      if (trackEvent) {
        trackAnalyticsEvent(trackEvent, {
          item_id: anchor.dataset.itemId,
          item_name: anchor.dataset.itemName,
          item_category: anchor.dataset.itemCategory,
          item_variant: anchor.dataset.itemVariant,
          page_type: anchor.dataset.pageType,
          product_category: anchor.dataset.productCategory,
          product_name: anchor.dataset.productName,
          document_type: anchor.dataset.documentType,
          document_slug: anchor.dataset.documentSlug,
          project_country: anchor.dataset.projectCountry,
          source_platform: anchor.dataset.sourcePlatform,
          cta_location: anchor.dataset.ctaLocation,
          price: anchor.dataset.price ? Number(anchor.dataset.price) : undefined,
          currency: anchor.dataset.currency,
          page_path: window.location.pathname,
        });
      }

      if (href === "#quote-form" || (isSameOrigin && (resolvedUrl.pathname === "/contact" || normalizedPath.startsWith("/contact")))) {
        const signals = getFunnelSessionSignals();
        trackAnalyticsEvent("quote_form_click", {
          page_path: window.location.pathname,
          quote_product: resolvedUrl.searchParams.get("product") || anchor.dataset.itemName || "",
          quote_source: resolvedUrl.searchParams.get("source") || window.location.pathname,
          product_view_count: signals.productViewCount,
          max_engaged_seconds: signals.maxEngagedSeconds,
          section_view_count: signals.sectionViewCount,
        });
      }

      if (href.startsWith("https://wa.me/") || href.includes("whatsapp")) {
        const attribution = getAttributionForEvent();
        if (attribution.ai_source && href.startsWith("https://wa.me/")) {
          const whatsappUrl = new URL(anchor.href);
          const message = whatsappUrl.searchParams.get("text") || "";

          if (!message.includes("AI Referral:")) {
            const { sessionId } = getVisitorIdentity();
            const leadReference = `VH-${sessionId.slice(-8).toUpperCase()}`;
            const aiContext = `AI Referral: ${attribution.ai_source}\nLead Ref: ${leadReference}`;
            whatsappUrl.searchParams.set("text", message ? `${message}\n\n${aiContext}` : aiContext);
            anchor.href = whatsappUrl.toString();
            href = anchor.href;
          }
        }

        trackInteractionConversion("whatsapp_click", {
          link_target: "whatsapp",
          page_path: window.location.pathname,
          ...leadData,
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackInteractionConversion("email_click", {
          link_target: "email",
          page_path: window.location.pathname,
        });
        return;
      }

      if (href.startsWith("tel:")) {
        trackInteractionConversion("phone_click", {
          link_target: "phone",
          page_path: window.location.pathname,
        });
        return;
      }

      if (isSameOrigin && resolvedUrl.pathname === "/request-sample-box") {
        trackInteractionConversion("request_sample_box_click", {
          link_target: normalizedPath,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [analyticsAllowed, advertisingAllowed]);

  return (
    <>
      {advertisingAllowed && gtmContainerId ? (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmContainerId}');
            `}
          </Script>
        </>
      ) : null}

      {(analyticsAllowed || advertisingAllowed) && (googleTagId || ga4MeasurementId || googleAdsId) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId || ga4MeasurementId || googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
              ${analyticsAllowed ? `gtag('config', '${googleTagId || ga4MeasurementId}', { send_page_view: false });` : ""}
              ${analyticsAllowed && ga4MeasurementId ? `gtag('config', '${ga4MeasurementId}', { send_page_view: false });` : ""}
              ${advertisingAllowed && googleAdsId ? `gtag('config', '${googleAdsId}', { send_page_view: false });` : ""}
              gtag('consent', 'update', { analytics_storage: '${analyticsAllowed ? "granted" : "denied"}', ad_storage: '${advertisingAllowed ? "granted" : "denied"}', ad_user_data: '${advertisingAllowed ? "granted" : "denied"}', ad_personalization: '${advertisingAllowed ? "granted" : "denied"}' });
            `}
          </Script>
        </>
      )}

      {analyticsAllowed && clarityProjectId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");
          `}
        </Script>
      )}
    </>
  );
}
