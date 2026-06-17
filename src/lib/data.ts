export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: "carpet-tiles" | "broadloom";
  description: string;
  image: string;
  spec: {
    material: string;
    gauge?: string;
    size: string;
    weight?: string;
    pileHeight?: string;
    colors: ProductColor[];
  };
  features: string[];
}

export const products: Product[] = [
  {
    id: "ct-premium",
    name: "Premium Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "High-performance modular carpet tiles designed for heavy-traffic commercial spaces. Featuring stain-resistant fiber technology and superior sound absorption for office environments.",
    image: "/images/carpet-tile-premium.jpg",
    spec: {
      material: "100% Solution-Dyed Nylon",
      gauge: "1/10",
      size: '24" x 24" (610mm x 610mm)',
      weight: "28 oz/yd²",
      pileHeight: "5.5mm",
      colors: [
        { name: "Steel Grey", hex: "#71797E" },
        { name: "Navy Blue", hex: "#0F2B4A" },
        { name: "Charcoal", hex: "#36454F" },
        { name: "Beige", hex: "#D5C9B1" },
        { name: "Warm Grey", hex: "#A9A495" },
      ],
    },
    features: [
      "Soil-resistant NanoGuard treatment",
      "25-year limited wear warranty",
      "Class I Fire Rating (ASTM E648)",
      "Recyclable backing system",
      "Antimicrobial protection",
    ],
  },
  {
    id: "ct-luxury",
    name: "Luxury Velvet Carpet Tiles",
    category: "carpet-tiles",
    description: "Premium velvet-finish carpet tiles with a plush surface ideal for executive offices, conference rooms, and boutique hotel spaces.",
    image: "/images/carpet-tile-luxury.jpg",
    spec: {
      material: "Polyester / Nylon Blend",
      gauge: "1/12",
      size: '24" x 24" (610mm x 610mm)',
      weight: "32 oz/yd²",
      pileHeight: "6.5mm",
      colors: [
        { name: "Ivory", hex: "#FFFFF0" },
        { name: "Silver Mist", hex: "#C0C0C0" },
        { name: "Espresso", hex: "#4A3728" },
        { name: "Slate", hex: "#708090" },
        { name: "Moss Green", hex: "#5F7355" },
      ],
    },
    features: [
      "Ultra-soft velvet texture",
      "High-density construction for shape retention",
      "Sound absorption NRC 0.50",
      "CRI Green Label Plus certified",
      "Easy modular installation with adhesive tabs",
    ],
  },
  {
    id: "ct-hexagonal",
    name: "Hexagonal Designer Tiles",
    category: "carpet-tiles",
    description: "Innovative hexagonal carpet tiles for creative floor designs. Perfect for reception areas, showrooms, and spaces requiring a distinctive visual identity.",
    image: "/images/carpet-tile-hex.jpg",
    spec: {
      material: "Recycled PET / Nylon",
      size: '19.7" (500mm) each side',
      weight: "24 oz/yd²",
      pileHeight: "4.5mm",
      colors: [
        { name: "Ocean Blue", hex: "#2E5E8E" },
        { name: "Terracotta", hex: "#C4664A" },
        { name: "Forest Green", hex: "#2E5E3E" },
        { name: "Stone Grey", hex: "#928E85" },
        { name: "Mustard Yellow", hex: "#D4A84B" },
      ],
    },
    features: [
      "Unique hexagonal shape for custom patterns",
      "Eco-friendly recycled materials",
      "Low-VOC adhesive-free installation",
      "Replaceable individual tiles for easy maintenance",
      "Ideal for accent zones and branding",
    ],
  },
  {
    id: "bl-premium",
    name: "Premium Hotel Broadloom",
    category: "broadloom",
    description: "Woven broadloom carpet engineered for the hospitality industry. Superior durability with a refined aesthetic suitable for guest rooms, corridors, and lobbies.",
    image: "/images/broadloom-premium.jpg",
    spec: {
      material: "80% Wool / 20% Nylon Blend",
      gauge: "1/8",
      size: "13' 2\" x 100' (4m x 30m) rolls",
      weight: "50 oz/yd²",
      pileHeight: "8mm",
      colors: [
        { name: "Warm Sand", hex: "#C2B280" },
        { name: "Deep Burgundy", hex: "#6E2C3D" },
        { name: "Pearl Grey", hex: "#D3D3D1" },
        { name: "Chocolate Brown", hex: "#4A2C2A" },
        { name: "Sage Green", hex: "#8CA88A" },
      ],
    },
    features: [
      "Premium wool blend for natural softness",
      "StainGuard Pro treatment for hospitality",
      "Acoustic underlay compatible",
      "ASTM E648 Class I & II Fire Rating",
      "Anti-static fiber technology",
      "Custom color and pattern available",
    ],
  },
  {
    id: "bl-commercial",
    name: "Commercial Grade Broadloom",
    category: "broadloom",
    description: "Cost-effective yet durable broadloom carpet for large-scale commercial installations.",
    image: "/images/broadloom-commercial.jpg",
    spec: {
      material: "100% Polypropylene (Solution Dyed)",
      gauge: "1/10",
      size: "13' 2\" x 100' (4m x 30m) rolls",
      weight: "36 oz/yd²",
      pileHeight: "5mm",
      colors: [
        { name: "Light Beige", hex: "#E8DCC8" },
        { name: "Grey Blue", hex: "#7E8B9D" },
        { name: "Taupe", hex: "#8B7D6B" },
        { name: "Dark Grey", hex: "#5A5A5A" },
      ],
    },
    features: [
      "Budget-friendly commercial solution",
      "Stain and fade resistant",
      "Mildew and moisture resistant backing",
      "High traffic 10-year warranty",
      "Quick ship availability on standard colors",
    ],
  },
  {
    id: "bl-patterned",
    name: "Patterned Jacquard Broadloom",
    category: "broadloom",
    description: "Custom jacquard-woven patterned broadloom for high-end hotel lobbies, casinos, and luxury residences.",
    image: "/images/broadloom-patterned.jpg",
    spec: {
      material: "70% New Zealand Wool / 30% Nylon",
      gauge: "5/64",
      size: "13' 2\" x custom length",
      weight: "60 oz/yd²",
      pileHeight: "7mm",
      colors: [
        { name: "Custom", hex: "#000000" },
      ],
    },
    features: [
      "Custom jacquard patterns (your design or ours)",
      "Premium New Zealand wool pile",
      "Unlimited color combinations",
      "CRI Green Label Plus certified",
      "MOQ: 500 m² per design",
      "Lead time: 6-8 weeks for custom orders",
    ],
  },
];

export const categories = [
  {
    id: "carpet-tiles",
    name: "Carpet Tiles",
    subtitle: "Modular Flooring Solutions",
    description: "Flexible, durable, and easy to install. Our carpet tiles are designed for modern commercial spaces requiring high traffic resilience and design versatility.",
    image: "/images/category-tiles.jpg",
    slug: "carpet-tiles",
  },
  {
    id: "broadloom",
    name: "Broadloom Carpets",
    subtitle: "Premium Rolled Flooring",
    description: "Traditional rolled carpet for large-scale seamless installations. Ideal for hotels, hospitality, and luxury residential projects.",
    image: "/images/category-broadloom.jpg",
    slug: "broadloom",
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  category: "carpet-tiles" | "broadloom";
  area: string;
  description: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "hilton-garden",
    title: "Hilton Garden Inn - Full Renovation",
    client: "Hilton Garden Inn",
    location: "Shanghai, China",
    category: "broadloom",
    area: "3,200 m²",
    description: "Supplied premium wool blend broadloom for guest rooms and corridors. Custom color match with the hotel's brand palette.",
    image: "/images/case-hilton.jpg",
  },
  {
    id: "tech-park",
    title: "Shenzhen Tech Park - Office Complex",
    client: "Shenzhen High-Tech Industrial Park",
    location: "Shenzhen, China",
    category: "carpet-tiles",
    area: "8,500 m²",
    description: "Supplied heavy-duty carpet tiles across 12 office buildings with NanoGuard stain resistance treatment.",
    image: "/images/case-techpark.jpg",
  },
  {
    id: "luxury-resort",
    title: "Sanya Luxury Beach Resort",
    client: "InterContinental Sanya",
    location: "Sanya, Hainan, China",
    category: "broadloom",
    area: "5,600 m²",
    description: "Provided custom jacquard broadloom with tropical motifs for lobbies, restaurants, and VIP suites.",
    image: "/images/case-resort.jpg",
  },
  {
    id: "coworking-space",
    title: "WeWork Flagship - Beijing CBD",
    client: "WeWork China",
    location: "Beijing, China",
    category: "carpet-tiles",
    area: "4,100 m²",
    description: "Installed hexagonal designer tiles in collaborative zones and premium tiles in private offices.",
    image: "/images/case-wework.jpg",
  },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const faqItems: FAQItem[] = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "For standard in-stock carpet tiles, MOQ is 50 m². For custom colors or broadloom, MOQ varies by product.",
  },
  {
    q: "What are the payment terms?",
    a: "We accept T/T (30% deposit, 70% before shipment), L/C at sight for larger orders, and PayPal/Wise for samples and small orders.",
  },
  {
    q: "How long is production lead time?",
    a: "Standard products: 10-15 working days. Custom colors/patterns: 20-30 working days. Express production available for rush orders.",
  },
  {
    q: "Do you provide free samples?",
    a: "Yes, we provide free sample swatches (A4 size) for standard products. Shipping costs are covered for orders of 5+ samples.",
  },
  {
    q: "What certifications do your products have?",
    a: "Our products carry CE, ISO 9001:2015, CRI Green Label Plus, ASTM E648 Fire Rating, and Oeko-Tex Standard 100 certifications.",
  },
  {
    q: "Can I request custom colors or patterns?",
    a: "Absolutely. Our R&D team can match any Pantone color and create custom jacquard patterns.",
  },
  {
    q: "What shipping methods do you use?",
    a: "We ship via sea freight (FOB Shanghai / CIF), air freight for urgent orders, and express courier (DHL/FedEx) for samples.",
  },
  {
    q: "Do you offer installation guidance?",
    a: "Yes, we provide detailed installation manuals and video guides for all our products.",
  },
];

export const blogPosts = [
  {
    slug: "choosing-carpet-tiles-vs-broadloom",
    title: "Carpet Tiles vs Broadloom: Which Is Right for Your Project?",
    excerpt: "A comprehensive comparison between modular carpet tiles and traditional broadloom carpets for commercial and hospitality applications.",
    date: "2026-06-10",
    author: "Carpet Expert",
    category: "Buying Guide",
    image: "/images/blog-comparison.jpg",
  },
  {
    slug: "hospitality-carpet-trends-2026",
    title: "Top Hospitality Carpet Trends for 2026",
    excerpt: "Discover the latest carpet design trends shaping hotels, resorts, and luxury hospitality spaces this year.",
    date: "2026-06-03",
    author: "Carpet Expert",
    category: "Industry Trends",
    image: "/images/blog-trends.jpg",
  },
  {
    slug: "sustainable-commercial-flooring",
    title: "Sustainable Commercial Flooring: Eco-Friendly Carpet Solutions",
    excerpt: "Learn about eco-friendly carpet options including recycled materials, low-VOC production, and sustainable manufacturing practices.",
    date: "2026-05-22",
    author: "Carpet Expert",
    category: "Sustainability",
    image: "/images/blog-sustainable.jpg",
  },
  {
    slug: "carpet-maintenance-hotel",
    title: "Carpet Maintenance Guide for Hotels & Hospitality",
    excerpt: "Essential tips for extending the life of your hotel carpet through proper cleaning, maintenance scheduling, and stain management.",
    date: "2026-05-15",
    author: "Carpet Expert",
    category: "Maintenance",
    image: "/images/blog-maintenance.jpg",
  },
  {
    slug: "office-carpet-acoustics",
    title: "How Carpet Improves Office Acoustics & Productivity",
    excerpt: "The science behind carpet's acoustic benefits and how the right flooring choice can boost office productivity and comfort.",
    date: "2026-05-08",
    author: "Carpet Expert",
    category: "Industry Insights",
    image: "/images/blog-acoustics.jpg",
  },
  {
    slug: "custom-carpet-design-process",
    title: "The Custom Carpet Design Process: From Concept to Installation",
    excerpt: "A step-by-step guide to working with our design team to create bespoke carpet solutions for your project.",
    date: "2026-04-28",
    author: "Carpet Expert",
    category: "Design",
    image: "/images/blog-custom.jpg",
  },
];

export const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "CE Marking", description: "European Conformity" },
  { name: "CRI Green Label Plus", description: "Indoor Air Quality" },
  { name: "Oeko-Tex Standard 100", description: "Harmful Substances Tested" },
  { name: "ASTM E648", description: "Fire Rating Class I & II" },
  { name: "CFT (China Floor Covering)", description: "National Quality Standard" },
];
