"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackInteractionConversion } from "@/lib/tracking";

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-WBRQWMXJ7R";
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
    if (!ga4MeasurementId || typeof window.gtag !== "function") return;

    window.gtag("config", ga4MeasurementId, {
      page_path: `${pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const text = anchor.textContent?.trim() || "";

      if (href.startsWith("https://wa.me/") || href.includes("whatsapp")) {
        trackInteractionConversion("whatsapp_click", {
          href,
          link_text: text,
          page_path: window.location.pathname,
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

  useEffect(() => {
    if (pathname !== "/thank-you") return;

    const successRaw = sessionStorage.getItem("vishome_form_success");
    if (!successRaw) return;

    let success: { token?: number; formName?: string } = {};
    try {
      success = JSON.parse(successRaw) as { token?: number; formName?: string };
    } catch {
      success = {};
    }
    const trackedToken = sessionStorage.getItem("vishome_thank_you_tracked");
    if (trackedToken && trackedToken === String(success.token || "")) return;

    trackInteractionConversion("thank_you_page_view", {
      form_name: success.formName || "unknown",
      page_path: window.location.pathname,
    });

    if (success.token) {
      sessionStorage.setItem("vishome_thank_you_tracked", String(success.token));
    }
  }, [pathname]);

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

      {ga4MeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('config', '${ga4MeasurementId}', { send_page_view: false });
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
