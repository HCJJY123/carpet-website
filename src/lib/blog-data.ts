export interface BlogPost { slug: string; title: string; seoTitle: string; description: string; keywords: string[]; date: string; author: string; category: string; image: string; content: string; suggestedLinks: { label: string; href: string }[]; }
export const blogPosts: BlogPost[] = [
  {
    slug: "carpet-tiles-vs-broadloom-commercial-projects",
    title: "Carpet Tiles vs Broadloom: Which Is Better for Your Project?",
    seoTitle: "Comparison Guide | Visfurn",
    description: "Modular vs Rolls for B2B flooring.",
    keywords: ["carpet tiles", "broadloom"],
    date: "2026-06-19",
    author: "Carpet Expert",
    category: "Buying Guide",
    image: "/images/blog-material-comparison.jpg",
    content: "Detailed analysis of carpet tiles and broadloom for commercial fit-outs...",
    suggestedLinks: [{ label: "Commercial Tiles", href: "/products/carpet-tiles" }]
  },
  {
    slug: "50x50-carpet-tiles-buying-guide",
    title: "50x50 Carpet Tiles Buying Guide",
    seoTitle: "Office Sourcing | Visfurn",
    description: "Standardized sourcing for contractors.",
    keywords: ["50x50", "carpet tiles"],
    date: "2026-06-19",
    author: "Carpet Expert",
    category: "Buying Guide",
    image: "/images/carpet-tile-premium.jpg",
    content: "Standard 50x50cm tiles offer the best balance of logistics and installation speed...",
    suggestedLinks: [{ label: "Request Quote", href: "/contact" }]
  }
];
// Batching additional posts...
