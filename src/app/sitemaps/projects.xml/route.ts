import { caseStudies } from "@/lib/data";
import { projectPath } from "@/lib/case-seo";
import { siteUrl } from "@/lib/seo";
import { sitemapResponse } from "@/lib/sitemap-xml";
import { projectPlanningReferences } from "@/lib/project-planning-references";

const BASE = siteUrl;

export function GET() {
  return sitemapResponse([...caseStudies.map((project) => ({
    url: `${BASE}${projectPath(project.id)}`,
    lastModified: "2026-08-06",
    changeFrequency: "monthly" as const,
    priority: 0.78,
  })), ...projectPlanningReferences.map((reference) => ({
    url: `${BASE}/projects/${reference.slug}`,
    lastModified: "2026-09-30",
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }))]);
}
