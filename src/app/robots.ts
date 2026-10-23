import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        // Search and answer-engine crawlers that may surface VCARPETS content.
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "GoogleOther",
          "GoogleOther-Image",
          "GoogleOther-Video",
          "OAI-SearchBot",
          "OAI-AdsBot",
          "ChatGPT-User",
          "GPTBot",
          "PerplexityBot",
          "Perplexity-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "CCBot",
          "Applebot",
          "Applebot-Extended",
          "Google-Extended",
        ],
        allow: "/",
        // Specific crawler groups do not inherit the wildcard exclusions.
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: new URL(siteUrl).hostname,
  };
}
