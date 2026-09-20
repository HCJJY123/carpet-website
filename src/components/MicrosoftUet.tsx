"use client";

import Script from "next/script";
import { useAnalyticsAllowed } from "@/lib/useAnalyticsConsent";

const microsoftUetTagId = process.env.NEXT_PUBLIC_MICROSOFT_UET_TAG_ID || "97259674";

export default function MicrosoftUet() {
  const analyticsAllowed = useAnalyticsAllowed();

  if (!analyticsAllowed || !microsoftUetTagId) return null;

  return (
    <Script id="microsoft-uet" strategy="afterInteractive">
      {`
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
