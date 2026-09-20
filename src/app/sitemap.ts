import { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries().map((entry) => ({
    ...entry,
    lastModified: new Date(`${entry.lastModified}T00:00:00.000Z`),
  }));
}
