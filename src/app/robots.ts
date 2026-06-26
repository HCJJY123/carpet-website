import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        // Allow AI crawlers explicitly
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Googlebot", "Bingbot"],
        allow: "/",
      },
    ],
    sitemap: "https://www.visfurn.com/sitemap.xml",
    host: "https://www.visfurn.com",
  };
}
