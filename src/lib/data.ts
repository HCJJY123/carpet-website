export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: "carpet-tiles" | "broadloom";
  description: string;
  longDescription: string;
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
    description: "High-performance modular carpet tiles for heavy-traffic commercial spaces.",
    longDescription: "Engineered for demanding environments, our premium commercial carpet tiles combine stain-resistant solution-dyed nylon fiber with a durable recycled backing system. Ideal for open-plan offices, retail spaces, and corporate lobbies where appearance retention and easy maintenance are critical. The modular design allows quick replacement of individual tiles, reducing long-term maintenance costs by up to 40% compared to traditional broadloom.",
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
      "Soil-resistant NanoGuard treatment reduces maintenance frequency",
      "25-year limited wear warranty for long-term investment protection",
      "Class I Fire Rating (ASTM E648) — compliant with international building codes",
      "Recyclable EcoBack backing system — CRI Green Label Plus certified",
      "Antimicrobial protection inhibits bacteria and mold growth",
      "High-density 28oz construction for heavy rolling loads (office chairs)",
    ],
  },
  {
    id: "ct-luxury",
    name: "Luxury Velvet Carpet Tiles",
    category: "carpet-tiles",
    description: "Premium velvet-finish tiles for executive offices and boutique hotels.",
    longDescription: "Our Luxury Velvet Carpet Tiles redefine commercial elegance with a plush velvet surface that rivals residential-grade softness while maintaining commercial durability. Perfect for executive suites, conference rooms, high-end retail, and boutique hotel spaces where aesthetics and comfort are paramount. The high-density construction ensures shape retention under furniture loads.",
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
      "Ultra-soft velvet texture for premium aesthetics",
      "High-density construction prevents pile crushing",
      "Sound absorption NRC 0.50 — reduces noise by up to 50%",
      "CRI Green Label Plus certified — low VOC emissions",
      "Easy modular installation with adhesive tabs (no glue needed)",
      "Stain-resistant fiber treatment for easy spot cleaning",
    ],
  },
  {
    id: "ct-hexagonal",
    name: "Hexagonal Designer Tiles",
    category: "carpet-tiles",
    description: "Innovative hexagonal tiles for creative floor designs and accent zones.",
    longDescription: "Break away from traditional square layouts with our innovative hexagonal carpet tiles. Designed for reception areas, showrooms, children's zones, and brand spaces that demand a distinctive visual identity. The unique shape enables six-direction installation patterns, creating honeycomb, ripple, or random effects that become a conversation piece.",
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
      "Unique hexagonal shape enables unlimited layout patterns",
      "Made from eco-friendly recycled PET materials",
      "Low-VOC adhesive-free peel-and-stick installation",
      "Individual tiles replaceable — ideal for accent zones",
      "Perfect for branding and custom logo installations",
    ],
  },
  {
    id: "bl-premium",
    name: "Premium Hotel Broadloom",
    category: "broadloom",
    description: "Woven wool-blend broadloom engineered for the hospitality industry.",
    longDescription: "Our Premium Hotel Broadloom represents the gold standard in hospitality flooring. Woven from an 80/20 wool-nylon blend, it offers the natural luxury of wool with the durability of synthetic fiber. Designed specifically for hotel guest rooms, corridors, ballrooms, and function spaces where noise reduction, comfort underfoot, and refined appearance are non-negotiable.",
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
      "Premium wool blend for natural softness and thermal insulation",
      "StainGuard Pro treatment — hospitality-grade stain resistance",
      "Acoustic underlay compatible — reduces impact noise by 20dB+",
      "ASTM E648 Class I & II Fire Rating — meets global hotel standards",
      "Anti-static carbon fiber technology prevents static buildup",
      "Custom colors and patterns available for brand-consistent interiors",
    ],
  },
  {
    id: "bl-commercial",
    name: "Commercial Grade Broadloom",
    category: "broadloom",
    description: "Cost-effective solution-dyed polypropylene broadloom for large installations.",
    longDescription: "Our Commercial Grade Broadloom delivers exceptional value for large-scale projects without compromising on performance. The solution-dyed polypropylene construction ensures color consistency and fade resistance across vast installations. Perfect for hotel back-of-house areas, convention centers, exhibition halls, and multi-unit residential developments where budget efficiency matters.",
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
      "Budget-friendly — up to 35% cost savings vs wool blend alternatives",
      "Solution-dyed color — fade resistant even in sun-exposed areas",
      "Mildew and moisture resistant backing — ideal for below-grade installations",
      "10-year high-traffic warranty for long-term confidence",
      "Quick ship — standard colors ship within 5 working days",
    ],
  },
  {
    id: "bl-patterned",
    name: "Patterned Jacquard Broadloom",
    category: "broadloom",
    description: "Custom jacquard-woven patterned broadloom for luxury hospitality.",
    longDescription: "Elevate your hospitality project with custom jacquard-woven broadloom carpets. Using state-of-the-art looms and premium New Zealand wool, we create bespoke patterns that reinforce brand identity and architectural vision. From intricate geometrics for casino floors to organic motifs for spa retreats, the design possibilities are truly unlimited.",
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
      "Custom jacquard patterns — your design or our design team",
      "Premium New Zealand wool pile for unmatched softness",
      "Unlimited color combinations — Pantone matching available",
      "CRI Green Label Plus certified — meets environmental standards",
      "MOQ: 500 m² per design pattern",
      "Lead time: 6-8 weeks for custom orders including sampling",
    ],
  },
];

export const productCategories = [
  { id: "carpet-tiles", name: "Carpet Tiles", subtitle: "Modular Flooring Solutions", description: "Flexible, durable, and easy to install modular tiles for modern commercial spaces.", image: "/images/category-tiles.jpg", slug: "carpet-tiles" },
  { id: "broadloom", name: "Broadloom Carpets", subtitle: "Premium Rolled Flooring", description: "Traditional rolled carpet for seamless large-scale hospitality installations.", image: "/images/category-broadloom.jpg", slug: "broadloom" },
];

export const solutions = [
  { name: "Office Carpet", icon: "🏢", desc: "High-traffic durable carpet tiles for open-plan and private offices" },
  { name: "Hotel Carpet", icon: "🏨", desc: "Luxury broadloom and custom patterns for guest rooms and lobbies" },
  { name: "School Carpet", icon: "🏫", desc: "Safe, durable, and acoustically optimized flooring for education" },
  { name: "Healthcare", icon: "🏥", desc: "Antimicrobial, easy-clean carpet for medical facilities" },
  { name: "Retail Carpet", icon: "🛍️", desc: "Designer tiles for brand-consistent retail environments" },
  { name: "Casino Carpet", icon: "🎰", desc: "Custom jacquard patterns for gaming and entertainment venues" },
  { name: "Cinema Carpet", icon: "🎬", desc: "Acoustic carpet solutions for theaters and auditoriums" },
  { name: "Mosque Carpet", icon: "🕌", desc: "Specialized designs for religious and cultural spaces" },
];

export const testimonials = [
  { quote: "Through cooperation with CarpetPro, our design concepts are realized on the carpet. The quality is excellent, the designs are innovative, and their team is highly experienced. We have partnered for 5 years across numerous hotel projects.", name: "Kristen", location: "United States", role: "Interior Designer" },
  { quote: "From initial contact to installation, CarpetPro recommended the perfect carpet tiles for our 1000m² office. They sent free samples promptly and the quality upon delivery exceeded our expectations.", name: "Carlos", location: "Dubai, UAE", role: "Facility Manager" },
  { quote: "We needed a custom hand-tufted carpet for our new villa. CarpetPro designed exactly what we envisioned — the color, quality, and design are truly wonderful. Will order again.", name: "Sarah", location: "United States", role: "Homeowner" },
];

export const processSteps = [
  { step: "01", title: "Requirement Analysis", desc: "Our team analyzes your project needs, space dimensions, traffic levels, and design preferences." },
  { step: "02", title: "Design & Color Matching", desc: "We create custom designs or match your reference. Pantone color matching ensures precision." },
  { step: "03", title: "Free Samples", desc: "Physical sample swatches sent to you for texture and color verification before production." },
  { step: "04", title: "Production", desc: "Manufactured in our ISO 9001 certified facility with strict quality control at every stage." },
  { step: "05", title: "Quality Inspection", desc: "Every batch undergoes rigorous testing for color consistency, dimensional stability, and fire rating." },
  { step: "06", title: "Professional Packaging", desc: "Export-grade packaging (carton + roll wrap) protects carpet during international shipping." },
  { step: "07", title: "Global Logistics", desc: "Reliable shipping partners deliver your order — FOB Shanghai, CIF, or DDP terms available." },
  { step: "08", title: "After-Sales Support", desc: "Installation guidance, maintenance advice, and dedicated support for the lifetime of your project." },
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
    description: "Supplied premium wool blend broadloom for guest rooms and corridors. Custom color matched to the hotel's brand palette. Project completed 2 weeks ahead of schedule.",
    image: "/images/case-hilton.jpg",
  },
  {
    id: "tech-park",
    title: "Shenzhen Tech Park - Office Complex",
    client: "Shenzhen High-Tech Industrial Park",
    location: "Shenzhen, China",
    category: "carpet-tiles",
    area: "8,500 m²",
    description: "Supplied heavy-duty carpet tiles across 12 office buildings. NanoGuard stain resistance treatment ensured low maintenance in high-traffic common areas.",
    image: "/images/case-techpark.jpg",
  },
  {
    id: "luxury-resort",
    title: "Sanya Luxury Beach Resort",
    client: "InterContinental Sanya",
    location: "Sanya, Hainan, China",
    category: "broadloom",
    area: "5,600 m²",
    description: "Provided custom jacquard broadloom with tropical motifs for lobbies, restaurants, and VIP suites across 10 distinct color schemes.",
    image: "/images/case-resort.jpg",
  },
  {
    id: "coworking-space",
    title: "WeWork Flagship - Beijing CBD",
    client: "WeWork China",
    location: "Beijing, China",
    category: "carpet-tiles",
    area: "4,100 m²",
    description: "Installed hexagonal designer tiles in collaborative zones and premium carpet tiles in private offices. Mixed patterns for visual zone differentiation.",
    image: "/images/case-wework.jpg",
  },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const faqItems: FAQItem[] = [
  {
    q: "Who is the leading carpet tiles manufacturer in China for global B2B supply?",
    a: "CarpetPro is a premier China-based manufacturer and global exporter specializing in high-performance commercial carpet tiles and hotel broadloom flooring. We provide factory-direct wholesale pricing with a massive production capacity of 50,000 m² monthly, supporting large-scale B2B requirements with rapid global logistics through our Shanghai port facility.",
  },
  {
    q: "What materials are used in CarpetPro commercial carpet tiles?",
    a: "Our collections are engineered using premium-grade solution-dyed nylon and nylon-blend fibers. Nylon is the industry standard for durability, offering superior crush resistance (ideal for rolling office chairs), ease of cleaning, and long-term appearance retention compared to polypropylene. We also offer eco-friendly recycled PET options for sustainable projects.",
  },
  {
    q: "Are CarpetPro products fire-rated for international building codes?",
    a: "Yes. All CarpetPro products meet stringent ASTM E648 Class I and Class II fire resistance standards and comply with EN 13501-1 European classifications. Our certifications ensure safety for public buildings, high-rise offices, and hospitality venues worldwide. Certification documents available on request.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "For standard stocked carpet tiles, MOQ is 50 m². For custom colors or broadloom rolls, MOQ varies by product (typically 200 m²). Custom jacquard patterns require a minimum of 500 m² per design. Sample orders (up to 10 swatches) have no MOQ — we encourage clients to sample before committing.",
  },
  {
    q: "What are the payment terms?",
    a: "We accept T/T (30% deposit with order, 70% balance before shipment), L/C at sight for larger orders exceeding $50,000, and PayPal/Wise for sample and small orders under $3,000. Long-term contract clients may qualify for net-30 terms after credit review.",
  },
  {
    q: "How long is production lead time?",
    a: "Standard stocked products: 7-10 working days. Custom colors: 15-20 working days. Custom jacquard patterns: 25-35 working days (includes sampling). Express production (rush fee applies): 5-7 working days for standard products. We maintain ample stock of best-selling colors for immediate shipment.",
  },
  {
    q: "Do you provide free samples?",
    a: "Yes, we provide free A4-size sample swatches for all standard products. Shipping is covered for orders of 5 or more samples. Custom color matching samples may incur a nominal R&D fee ($30-80) refundable upon order placement. Sample lead time: 3-5 working days via DHL/FedEx.",
  },
  {
    q: "What certifications do your products carry?",
    a: "Our products carry ISO 9001:2015 (Quality Management), CE Marking (European Conformity), CRI Green Label Plus (Indoor Air Quality), ASTM E648 (Fire Rating Class I & II), Oeko-Tex Standard 100 (Harmful Substances Tested), and Chinese National Standards (GB/T). We welcome third-party inspections.",
  },
  {
    q: "Can I request custom colors or patterns?",
    a: "Absolutely. Our in-house R&D team can match any Pantone color and create custom jacquard patterns. Send us your reference images, architectural drawings, or brand guidelines — we'll provide a design proposal within 3-5 working days. Custom orders include free sample production for approval before full manufacturing.",
  },
  {
    q: "What are the benefits of modular carpet tiles over traditional broadloom?",
    a: "Modular carpet tiles offer three major advantages: (1) Easy Installation — significantly less waste during cutting and faster installation compared to roll carpet; (2) Selective Replacement — stained or damaged tiles can be replaced individually without replacing the entire floor; (3) Design Flexibility — tiles can be installed in monolithic, ashlar, or brick patterns to create custom visual zones.",
  },
  {
    q: "Can CarpetPro tiles withstand heavy office furniture and rolling chairs?",
    a: "Yes. Our nylon carpet tiles are specifically engineered for high-traffic commercial durability with high tuft-bind values and dense construction. The 28-32 oz/yd² weight range prevents pile crushing under heavy desks and constant rolling chair movement. We recommend our Premium Commercial Tiles (28oz) as the minimum for heavy office use.",
  },
  {
    q: "What shipping methods do you use?",
    a: "We ship via sea freight (FOB Shanghai, CIF to major global ports), air freight for urgent orders, and express courier (DHL/FedEx/UPS) for samples and small orders. Our logistics team provides tracking and customs documentation support. Typical shipping: sea 15-30 days, air 5-7 days, express 3-5 days.",
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
  { name: "CRI Green Label Plus", description: "Indoor Air Quality Certified" },
  { name: "Oeko-Tex Standard 100", description: "Harmful Substances Tested" },
  { name: "ASTM E648", description: "Fire Rating Class I & II" },
  { name: "GB/T National Standard", description: "China Quality Certification" },
];
