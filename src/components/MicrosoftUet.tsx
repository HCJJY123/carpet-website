"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useAnalyticsConsentValue } from "@/lib/useAnalyticsConsent";

const microsoftUetTagId = process.env.NEXT_PUBLIC_MICROSOFT_UET_TAG_ID || "97259674";

declare global {
  interface Window {
    uetq?: { push?: (...args: unknown[]) => void } | unknown[];
  }
}

export default function MicrosoftUet() {
  const consent = useAnalyticsConsentValue();

  useEffect(() => {
    if (typeof window === "undefined" || !consent) return;
    const queue = window.uetq as { push?: (...args: unknown[]) => void } | undefined;
    if (typeof queue?.push !== "function") return;
    queue.push("consent", "update", {
      ad_storage: consent === "accepted" ? "granted" : "denied",
    });
  }, [consent]);

  return (
    <Script id="microsoft-uet" strategy="afterInteractive">
      {`
        window.uetq = window.uetq || [];
        window.uetq.push("consent", "default", { ad_storage: "denied" });
        (function(w,d,t,r,u){
          var f,n,i;
          w[u]=w[u]||[];
          f=function(){
            var o={ti:"${microsoftUetTagId}", enableAutoSpaTracking:true};
            o.q=w[u];
            w[u]=new UET(o);
            w[u].push("pageLoad");
          };
          n=d.createElement(t);
          n.src=r;
          n.async=1;
          n.onload=n.onreadystatechange=function(){
            var s=this.readyState;
            if(!s||s==="loaded"||s==="complete"){
              f();
              n.onload=n.onreadystatechange=null;
            }
          };
          i=d.getElementsByTagName(t)[0];
          i.parentNode.insertBefore(n,i);
        })(window,document,"script","https://bat.bing.com/bat.js","uetq");
      `}
    </Script>
  );
}
