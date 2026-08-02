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
} from "@/lib/funnel";
import { getVisitorIdentity } from "@/lib/visitorIdentity";
import { useAnalyticsAllowed } from "@/lib/useAnalyticsConsent";

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-T2VYHXTK1F";
const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "GT-NMDDTW67";
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18306142236";
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "xgg9z07tsm";
const gtmContainerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
const yandexMetricaId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;

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

  useEffect(() => {
    if (!analyticsAllowed) return;

    captureAttributionOnce();

    const attribution = getAttributionForEvent();
    if (
      attribution.traffic_channel === "ai_referral" &&
      !window.sessionStorage.getItem("vishome_ai_referral_landing")
    ) {
      window.sessionStorage.setItem("vishome_ai_referral_landing", "1");
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
      page_path: `${pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    };

    if (ga4MeasurementId) {
      window.gtag("config", ga4MeasurementId, pageViewPayload);
    }

    if (googleTagId) {
      window.gtag("config", googleTagId, pageViewPayload);
    }

    if (googleAdsId) {
      window.gtag("config", googleAdsId, pageViewPayload);
    }
  }, [analyticsAllowed, pathname]);

  useEffect(() => {
    if (!analyticsAllowed) return;

    const productMatch = pathname.match(/^\/(?:[a-z]{2}\/)?products\/([^/]+)\/([^/]+)$/);

    function maybeTrackHighIntentSession() {
      const signals = getFunnelSessionSignals();
      const highIntent =
        signals.productViewCount >= 2 &&
        (signals.maxEngagedSeconds >= 60 || signals.sectionViewCount > 0);

      if (!highIntent || !markFunnelEventOnce("high_intent_session")) return;
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

      if (result.isNew) {
        trackAnalyticsEvent("product_detail_view", {
          item_id: productId,
          item_category: category,
          page_path: pathname,
          product_view_count: result.signals.productViewCount,
        });
      }

      for (const threshold of [2, 3]) {
        if (
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

      if (visibleSeconds === 30 || visibleSeconds === 60) {
        const signals = recordEngagedSeconds(visibleSeconds);
        const eventName = `engaged_${visibleSeconds}s`;
        if (markFunnelEventOnce(`${eventName}:${pathname}`)) {
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
          if (result.isNew) {
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
    if (!analyticsAllowed) return;

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      let href = anchor.getAttribute("href") || "";
      const resolvedUrl = new URL(anchor.href, window.location.origin);
      const isSameOrigin = resolvedUrl.origin === window.location.origin;
      const normalizedPath = `${resolvedUrl.pathname}${resolvedUrl.search}${resolvedUrl.hash}`;
      const text = anchor.textContent?.trim() || "";
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
          price: anchor.dataset.price ? Number(anchor.dataset.price) : undefined,
          currency: anchor.dataset.currency,
          href,
          link_text: text,
          page_path: window.location.pathname,
        });
      }

      if (href === "#quote-form" || (isSameOrigin && (resolvedUrl.pathname === "/contact" || normalizedPath.startsWith("/contact")))) {
        trackAnalyticsEvent("quote_form_click", {
          href: isSameOrigin ? normalizedPath : href,
          link_text: text,
          page_path: window.location.pathname,
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
          href,
          link_text: text,
          page_path: window.location.pathname,
          ...leadData,
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackInteractionConversion("email_click", {
          href,
          link_text: text,
          page_path: window.location.pathname,
        });
        return;
      }

      if (href.startsWith("tel:")) {
        trackInteractionConversion("phone_click", {
          href,
          link_text: text,
          page_path: window.location.pathname,
        });
        return;
      }

      if (isSameOrigin && resolvedUrl.pathname === "/request-sample-box") {
        trackInteractionConversion("request_sample_box_click", {
          href: normalizedPath,
          link_text: text,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [analyticsAllowed]);

  return (
    <>
      {analyticsAllowed && gtmContainerId ? (
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

      {analyticsAllowed && (googleTagId || ga4MeasurementId || googleAdsId) && (
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
              ${googleTagId ? `gtag('config', '${googleTagId}', { send_page_view: false });` : ""}
              ${ga4MeasurementId ? `gtag('config', '${ga4MeasurementId}', { send_page_view: false });` : ""}
              ${googleAdsId ? `gtag('config', '${googleAdsId}', { send_page_view: false });` : ""}
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

      {analyticsAllowed && yandexMetricaId ? (
        <Script id="yandex-metrica" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            window.ym(${JSON.stringify(yandexMetricaId)}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
          `}
        </Script>
      ) : null}
    </>
  );
}
