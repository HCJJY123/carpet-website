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
    content: "Detailed analysis of carpet tiles and broadloom for commercial fit-outs. Carpet tiles are modular pieces, commonly supplied in square formats such as 50x50 cm or 24x24 inches. They are widely used in offices, retail spaces, schools, airports, and flexible commercial interiors. Broadloom carpet is supplied in rolls and creates a more seamless surface. It is often preferred for hotels, guest rooms, corridors, ballrooms, luxury retail, and hospitality projects.",
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
    content: "Standard 50x50cm tiles offer the best balance of logistics and installation speed. They are easy to transport, flexible to install, and simple to replace after installation. For buyers managing office, hotel, school, or public-area projects, this size offers a practical balance between design flexibility and site efficiency.",
    suggestedLinks: [{ label: "Technical Specs", href: "/products/carpet-tiles/nylon-tiles-elite" }]
  },
  {
    slug: "fire-rated-commercial-carpet-guide",
    title: "Fire-Rated Commercial Carpet Guide",
    seoTitle: "Technical Standards | Visfurn",
    description: "ASTM E648 and Class I compliance.",
    keywords: ["fire rated", "ASTM E648"],
    date: "2026-06-19",
    author: "Carpet Expert",
    category: "Technical",
    image: "/images/blog-installation-maintenance.jpg",
    content: "Fire rating is one of the most important checks in commercial carpet procurement. For hotels, offices, and public buildings, flooring must meet project safety requirements. Common standards include ASTM E648 and EN 13501-1.",
    suggestedLinks: [{ label: "Contact Factory", href: "/contact" }]
  },
  {
    slug: "hotel-carpet-buying-guide",
    title: "Hotel Carpet Buying Guide",
    seoTitle: "Hospitality Solutions | Visfurn",
    description: "Luxury and durability for guest rooms.",
    keywords: ["hotel carpet", "broadloom"],
    date: "2026-06-19",
    author: "Carpet Expert",
    category: "Hospitality",
    image: "/images/blog-hotel-carpet.jpg",
    content: "Hotel carpet must handle guest traffic, luggage wheels, and fire safety requirements. Guest rooms usually need comfort, while corridors need denser pile for durability.",
    suggestedLinks: [{ label: "Hotel Collections", href: "/products/wall-to-wall" }]
  }
];
// (Note: The remaining 11 posts are being added in the next step to ensure file buffer capacity)
