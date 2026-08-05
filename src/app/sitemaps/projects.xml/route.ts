import { caseStudies } from "@/lib/data";
import { projectPath } from "@/lib/case-seo";
import { sitemapResponse } from "@/lib/sitemap-xml";

const BASE = "https://www.vishomecarpet.com";

export function GET() {
  return sitemapResponse(caseStudies.map((project) => ({
    url: `${BASE}${projectPath(project.id)}`,
    lastModified: "2026-08-06",
    changeFrequency: "monthly" as const,
    priority: 0.78,
  })));
}
