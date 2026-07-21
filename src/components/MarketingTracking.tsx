"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { trackAnalyticsEvent } from "@/lib/tracking";

// 你需要在这里填入你的 Google Ads ID (AW-XXXXX)
const GOOGLE_ADS_ID = "AW-18306142236"; 

export default function MarketingTracking() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. 全站点击追踪 (WhatsApp, Email, Phone)
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;

      const href = anchor.href || "";
      const text = anchor.innerText.toLowerCase();
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
          link_text: anchor.innerText,
          page_path: window.location.pathname,
        });
      }

      // WhatsApp 追踪
      if (href.includes("wa.me") || href.includes("whatsapp.com") || text.includes("whatsapp")) {
        window.gtag?.("event", "conversion", {
          send_to: `${GOOGLE_ADS_ID}/whatsapp_click`, // 转换操作标签
          event_category: "Engagement",
          event_label: "WhatsApp Click",
        });
      }

      // Email 追踪
      if (href.startsWith("mailto:")) {
        window.gtag?.("event", "conversion", {
          send_to: `${GOOGLE_ADS_ID}/email_click`,
          event_category: "Engagement",
          event_label: "Email Click",
        });
      }

      // 电话点击追踪
      if (href.startsWith("tel:")) {
        window.gtag?.("event", "conversion", {
          send_to: `${GOOGLE_ADS_ID}/phone_click`,
          event_category: "Engagement",
          event_label: "Phone Click",
        });
      }

      // 样品申请点击追踪
      if (text.includes("sample") || text.includes("get sample")) {
        window.gtag?.("event", "conversion", {
          send_to: `${GOOGLE_ADS_ID}/sample_request_click`,
          event_category: "Lead",
          event_label: "Request Sample Click",
        });
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  useEffect(() => {
    // 2. Thank You 页面浏览追踪 (核心转化)
    if (pathname === "/thank-you") {
      window.gtag?.("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/form_submission_success`, // 转换操作标签
        value: 10.0,
        currency: "USD",
      });
      console.log("GA4/Ads: Thank-you conversion tracked");
    }
  }, [pathname]);

  return (
    <>
      {/* Google Ads Global Site Tag */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}', {
            'linker': { 'domains': ['vishomecarpet.com'] }
          });
        `}
      </Script>
    </>
  );
}

// 补充：为了让 TS 不报错
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
