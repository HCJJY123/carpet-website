"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackAnalyticsEvent, trackInteractionConversion } from "@/lib/tracking";
import { captureAttributionOnce } from "@/lib/attribution";

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-T2VYHXTK1F";
const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "GT-NMDDTW67";
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18306142236";
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "xgg9z07tsm";
const gtmContainerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export default function MarketingTracking() {
  const pathname = usePathname();

  useEffect(() => {
    captureAttributionOnce();
  }, []);

  useEffect(() => {
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
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
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

      if (href === "#quote-form" || href.startsWith("/contact")) {
        trackAnalyticsEvent("quote_form_click", {
          href,
          link_text: text,
          page_path: window.location.pathname,
        });
      }

      if (href.startsWith("https://wa.me/") || href.includes("whatsapp")) {
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

      if (href.startsWith("/request-sample-box")) {
        trackInteractionConversion("request_sample_box_click", {
          href,
          link_text: text,
          page_path: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <>
      {gtmContainerId ? (
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

      {(googleTagId || ga4MeasurementId || googleAdsId) && (
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

      {clarityProjectId && (
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
