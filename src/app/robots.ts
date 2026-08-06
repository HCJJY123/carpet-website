import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        // Search and answer-engine crawlers that may surface Vishome content.
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
      },
    ],
    sitemap: [
      "https://www.vishomecarpet.com/sitemap.xml",
      "https://www.vishomecarpet.com/sitemaps/pages.xml",
      "https://www.vishomecarpet.com/sitemaps/products.xml",
      "https://www.vishomecarpet.com/sitemaps/projects.xml",
      "https://www.vishomecarpet.com/sitemaps/resources.xml",
      "https://www.vishomecarpet.com/sitemaps/blog.xml",
      "https://www.vishomecarpet.com/sitemap-ru.xml",
      "https://www.vishomecarpet.com/sitemap-markets.xml",
    ],
    host: "www.vishomecarpet.com",
  };
}
