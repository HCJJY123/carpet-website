export interface ProductColor { name: string; hex: string; }
export interface TechnicalSpecs { fireRating: string; trafficClass: string; fiber?: string; yarnSystem: string; backing: string; pileWeight: string; totalThickness: string; rollWidth?: string; soundInsulation?: string; antistatic: string; }
export interface FobPriceRange { display: string; lowPrice: string; highPrice: string; currency: "USD"; unit: string; }
export interface Product { id: string; name: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; description: string; longDescription: string; image: string; imageAlt?: string; gallery?: { src: string; alt: string; }[]; moq: string; leadTime: string; fobPrice?: FobPriceRange; spec: { material: string; size: string; colors: ProductColor[]; }; technicalSpecs: TechnicalSpecs; features: string[]; }
export interface CaseSpecItem { label: string; value: string; }
export interface CaseSection { title: string; paragraphs: string[]; image?: string; imageAlt?: string; imageCaption?: string; }
export interface CaseCostItem { item: string; amount: string; }
export interface CaseStudy { id: string; title: string; subtitle?: string; category: "carpet-tiles" | "wall-to-wall" | "public-area"; image: string; description: string; projectSpecs: CaseSpecItem[]; sections: CaseSection[]; technicalDetails: string[]; designHighlights: string[]; results: string[]; gallery?: string[]; costAnalysis?: CaseCostItem[]; }

export const brandInfo = {
  name: "Vishome Global Commercial Carpet Co., Ltd.",
  shortName: "Visfurn",
  url: "https://www.vishomecarpet.com",
  email: "oilero@outlook.com",
  phone: "+86 152 2288 5400",
  whatsapp: "+86 152 2288 5400",
  address: "Cuihuangkou Town, Wuqing District, Tianjin 301700, China",
  stats: { area: "50,000㎡", employees: "900+", markets: "45+", experience: "15+ Years" }
};

export const products: Product[] = [
  // --- CARPET TILES SERIES ---
  {
    id: "nylon-tiles-elite",
    name: "Premium Nylon 6.6 Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Modular 50x50cm tiles engineered for high-traffic corporate offices and hotel corridors.",
    longDescription: "Our Premium Nylon 6.6 series represents the pinnacle of modular flooring performance. Designed for global commercial standards.",
    image: "/images/carpet-tile-premium.jpg",
    moq: "200 SQM",
    leadTime: "10-14 Days",
    fobPrice: { display: "US$5.80-11.50 / SQM", lowPrice: "5.80", highPrice: "11.50", currency: "USD", unit: "SQM" },
    spec: { material: "100% Nylon 6.6", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Heavy Commercial", yarnSystem: "Multi-Level Loop", backing: "Bitumen with Glass Fiber", pileWeight: "20 oz/yd²", totalThickness: "6.5 mm", soundInsulation: "24dB", antistatic: "< 2.0 kV" },
    features: ["Stain Resistance", "Dimensional Stability"]
  },
  {
    id: "ecocore-pe-backing-carpet-tiles",
    name: "Vishomecarpet EcoCore PVC-Free PE Backing Carpet Tiles",
    category: "carpet-tiles",
    description: "Eco-friendly modular carpet tiles with PVC-free PE backing for sustainable green buildings.",
    longDescription: "Developed for LEED-oriented projects where sustainability and durability are non-negotiable.",
    image: "/images/products/ecocore-pe-backing/01-hero-white-background.png",
    moq: "Project-Based",
    leadTime: "10-20 Days",
    fobPrice: { display: "US$4.20-8.90 / SQM", lowPrice: "4.20", highPrice: "8.90", currency: "USD", unit: "SQM" },
    spec: { material: "Solution-Dyed Nylon", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Heavy Commercial", yarnSystem: "Textured Loop", backing: "PVC-Free PE", pileWeight: "550 g/sqm", totalThickness: "6.5mm", soundInsulation: "22dB", antistatic: "Yes" },
    features: ["PVC-Free", "100% Recyclable"]
  },
  {
    id: "ct-premium",
    name: "Elite Patterned Commercial Carpet Tiles",
    category: "carpet-tiles",
    description: "Multi-level loop modular tiles for executive suites and designer office fit-outs.",
    longDescription: "Intricate geometric patterns combined with high-performance backing for demanding commercial interiors.",
    image: "/images/category-tiles.png",
    moq: "500 SQM",
    leadTime: "15-20 Days",
    spec: { material: "Nylon 6.6", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 33", yarnSystem: "Patterned Loop", backing: "Reinforced Bitumen", pileWeight: "24oz", totalThickness: "7.0mm", soundInsulation: "26dB", antistatic: "Yes" },
    features: ["Design Fidelity", "Acoustic Comfort"]
  },
  {
    id: "ct-luxury",
    name: "Luxury Shag Modular Carpet Tiles",
    category: "carpet-tiles",
    description: "High-pile luxury tiles for premium boutique hotels and executive lounges.",
    longDescription: "Modular convenience with the plush underfoot feel of high-end hotel guestroom carpeting.",
    image: "/images/about/custom-design-support.webp",
    moq: "300 SQM",
    leadTime: "20-25 Days",
    spec: { material: "Polyamide", size: "50x50 cm", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 32", yarnSystem: "High Pile", backing: "PVC/Bitumen", pileWeight: "32oz", totalThickness: "9.5mm", soundInsulation: "28dB", antistatic: "Yes" },
    features: ["Soft Texture", "Premium Aesthetic"]
  },
  {
    id: "ct-hexagonal",
    name: "Geometric Hexagonal Modular Carpet Tiles",
    category: "carpet-tiles",
    description: "Unique hexagonal format for creative workplace branding and modern office zoning.",
    longDescription: "Supports complex color pathing and modern biophilic office design layouts.",
    image: "/images/blog-office-carpet.jpg",
    moq: "500 SQM",
    leadTime: "25 Days",
    spec: { material: "Solution-Dyed Nylon", size: "50x50cm Hex", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 33", yarnSystem: "Dense Loop", backing: "Glass Fiber PVC", pileWeight: "22oz", totalThickness: "6.8mm", soundInsulation: "24dB", antistatic: "Yes" },
    features: ["Unique Shape", "Creative Freedom"]
  },

  // --- WALL-TO-WALL SERIES ---
  {
    id: "luxury-hotel-broadloom",
    name: "Axminster 80/20 Wool Blend Hotel Carpet",
    category: "wall-to-wall",
    description: "Custom jacquard woven broadloom specifically for luxury hotel guest rooms.",
    longDescription: "The gold standard for hospitality flooring, combining the luxury of wool with nylon's durability.",
    image: "/images/broadloom-premium.jpg",
    moq: "500 SQM",
    leadTime: "25-35 Days",
    spec: { material: "80% Wool / 20% Nylon", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "Class 32", yarnSystem: "Jacquard Woven", backing: "Jute/Cotton", pileWeight: "40oz", totalThickness: "11mm", soundInsulation: "28dB", antistatic: "Permanent" },
    features: ["Bespoke Patterns", "Wool Luxury"]
  },
  {
    id: "3d-printed-hotel-carpet",
    name: "3D HD Printed Nylon Hotel Carpet",
    category: "wall-to-wall",
    description: "High-definition printed nylon broadloom for hotel corridors and lobbies.",
    longDescription: "Photo-realistic patterns and rich color depth at a faster lead time than traditional weaving.",
    image: "/images/3d-printed-hotel-carpet-corridor.jpg",
    moq: "300 SQM",
    leadTime: "25 Days",
    fobPrice: { display: "US$3.50-7.80 / SQM", lowPrice: "3.50", highPrice: "7.80", currency: "USD", unit: "SQM" },
    spec: { material: "HD Printed Nylon", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "33", yarnSystem: "HD Digital Print", backing: "ActionBac", pileWeight: "32oz", totalThickness: "9mm", rollWidth: "4m", soundInsulation: "25dB", antistatic: "Permanent" },
    features: ["Unlimited Colors", "Fast Production"]
  },
  {
    id: "custom-floral-printed-hotel-carpet",
    name: "Custom Floral Printed Wall-to-Wall Hotel Carpet",
    category: "wall-to-wall",
    description: "Made-to-order floral printed broadloom for hotel and commercial interior projects.",
    longDescription: "Made-to-order custom floral printed wall-to-wall carpet for hospitality and commercial interior projects.",
    image: "/images/products/wall-to-wall/custom-floral-printed-hotel-carpet/01-main-custom-floral-hotel-corridor.webp",
    imageAlt: "Custom floral printed wall-to-wall hotel carpet for corridor and hospitality projects",
    gallery: [
      { src: "/images/products/wall-to-wall/custom-floral-printed-hotel-carpet/01-main-custom-floral-hotel-corridor.webp", alt: "Custom floral printed wall-to-wall hotel carpet installed in a luxury corridor" },
      { src: "/images/products/wall-to-wall/custom-floral-printed-hotel-carpet/02-banquet-hall-floral-carpet.webp", alt: "Custom floral printed broadloom carpet for a hotel banquet hall" },
      { src: "/images/products/wall-to-wall/custom-floral-printed-hotel-carpet/03-hotel-guestroom-printed-carpet.webp", alt: "Floral printed wall-to-wall carpet in a luxury hotel guestroom" },
      { src: "/images/products/wall-to-wall/custom-floral-printed-hotel-carpet/04-office-lobby-custom-carpet.webp", alt: "Custom printed commercial carpet for a premium reception space" },
      { src: "/images/products/wall-to-wall/custom-floral-printed-hotel-carpet/05-banquet-hall-project-view.webp", alt: "Floral printed hotel carpet in a bright banquet and conference hall" },
      { src: "/images/products/wall-to-wall/custom-floral-printed-hotel-carpet/06-hotel-corridor-project-view.webp", alt: "Custom printed broadloom carpet installed along a hotel guestroom corridor" }
    ],
    moq: "100 SQM",
    leadTime: "Confirmed After Artwork and Specification Review",
    fobPrice: { display: "US$3.60-6.40 / SQM", lowPrice: "3.60", highPrice: "6.40", currency: "USD", unit: "SQM" },
    spec: { material: "Polypropylene, Nylon, Polyester or Wool-Blend Options", size: "Project Specification", colors: [] },
    technicalSpecs: { fireRating: "Confirmed According to Project Specification", trafficClass: "Confirmed According to Project Specification", yarnSystem: "Printed Tufted Broadloom", backing: "Confirmed According to Project Specification", pileWeight: "Custom-Made", totalThickness: "Custom-Made", rollWidth: "Confirmed According to Project Specification", antistatic: "Confirmed According to Project Specification" },
    features: ["Custom Floral Pattern", "Custom Colorways", "Multiple Material Options", "Custom Pile Height"]
  },
  {
    id: "3d-printed-luxury-banquet-carpet",
    name: "Custom 3D Printed Banquet Hall Carpet | Hotel Hospitality Wall to Wall Broadloom Carpet",
    category: "wall-to-wall",
    description: "Vishomecarpet custom 3D printed banquet hall carpet — premium wall to wall broadloom for hotel hospitality, banquet rooms, and commercial flooring projects. Durable, fire-rated contract carpet manufacturer direct.",
    longDescription: "Vishomecarpet is a leading commercial carpet manufacturer and wall to wall carpet factory specializing in custom 3D printed banquet hall carpet for the global hospitality industry. As a trusted hotel carpet supplier and contract carpet supplier, we utilize advanced high-speed inkjet printing systems to produce hospitality broadloom carpet with photo-realistic pattern precision and unlimited design flexibility. Unlike traditional woven carpets, our 3D printing process delivers low MOQs while maintaining Class 33 heavy commercial durability for banquet halls, hotel corridors, lobbies, ballrooms, and public areas. Each roll is engineered as a premium hospitality carpet supplier solution — offering stain resistance, acoustic comfort, permanent antistatic properties, and full fire rating to international commercial standards. Whether you need custom hotel carpet for a 5-star property, rolled carpet supplier for a large-scale project, or patterned broadloom carpet for a branded interior, Vishomecarpet delivers as a dedicated wall to wall carpet manufacturer and broadloom carpet factory with competitive wholesale pricing.",
    image: "/images/products/3d-printed-banquet-carpet/01-guest-room-main.jpg",
    imageAlt: "Premium custom 3D printed banquet hall carpet in luxury hotel guest room",
    gallery: [
      { src: "/images/products/3d-printed-banquet-carpet/01-guest-room-main.jpg", alt: "3D printed banquet carpet in luxury hotel guest room" },
      { src: "/images/products/3d-printed-banquet-carpet/02-banquet-hall.jpg", alt: "Custom 3D printed carpet in grand banquet hall" },
      { src: "/images/products/3d-printed-banquet-carpet/03-billiard-room.jpg", alt: "3D printed commercial carpet in billiard room" },
      { src: "/images/products/3d-printed-banquet-carpet/04-corridor-detail.jpg", alt: "3D printed hotel corridor carpet pattern detail" },
      { src: "/images/products/3d-printed-banquet-carpet/05-corridor-view.jpg", alt: "3D printed broadloom carpet hotel corridor view" }
    ],
    moq: "200 SQM",
    leadTime: "15-25 Days",
    fobPrice: { display: "US$4.50-9.80 / SQM", lowPrice: "4.50", highPrice: "9.80", currency: "USD", unit: "SQM" },
    spec: { material: "100% High-Density Nylon / Soft Synthetic Blend", size: "4m width roll", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I / Bfl-s1", trafficClass: "Class 33 Heavy Commercial", yarnSystem: "Cut Pile / High-Speed Tufted", backing: "ActionBac / Reinforced Jute", pileWeight: "32oz - 45oz", totalThickness: "9mm - 12mm", rollWidth: "4m", soundInsulation: "26dB+", antistatic: "Permanent" },
    features: ["Custom Pattern Reproduction", "High Color Fastness", "Flame Retardant", "Eco-Friendly Materials", "Durable Under Heavy Traffic"]
  },
  {
    id: "glitter-hotel-corridor-broadloom-carpet",
    name: "Glitter Hotel Corridor Broadloom Carpet",
    category: "wall-to-wall",
    description: "Blue and gold glitter-pattern broadloom for high-end hospitality corridors.",
    longDescription: "Features a deep navy field with specialized gold glitter effect for memorable interiors.",
    image: "/images/products/hotel-glitter-broadloom/1.jpg",
    moq: "300 SQM",
    leadTime: "25-35 Days",
    spec: { material: "Polyamide/Glitter", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Bfl-s1", trafficClass: "Heavy Commercial", yarnSystem: "Patterned Tufted", backing: "Woven", pileWeight: "30oz", totalThickness: "8.5mm", rollWidth: "4m", antistatic: "Yes" },
    features: ["Glitter Effect", "Custom Pattern"]
  },
  {
    id: "bl-premium",
    name: "Premium Broadloom Solution-Dyed Nylon",
    category: "wall-to-wall",
    description: "High-density broadloom for premium offices and commercial passageways.",
    longDescription: "Engineered for appearance retention in heavy-use public commercial spaces.",
    image: "/images/category-broadloom.jpg",
    moq: "500 SQM",
    leadTime: "20 Days",
    spec: { material: "Solution-Dyed Nylon", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "33", yarnSystem: "Dense Tufted", backing: "ActionBac", pileWeight: "28oz", totalThickness: "8.5mm", soundInsulation: "24dB", antistatic: "Yes" },
    features: ["High Durability", "Stain Protection"]
  },
  {
    id: "bl-patterned",
    name: "Patterned Commercial Broadloom Carpet",
    category: "wall-to-wall",
    description: "Textured broadloom for hotel ballrooms, offices, and conference centers.",
    longDescription: "A versatile series offering balanced aesthetics and heavy-duty performance.",
    image: "/images/blog-material-comparison.jpg",
    moq: "300 SQM",
    leadTime: "25 Days",
    spec: { material: "Nylon/Synthetic", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I", trafficClass: "32", yarnSystem: "Textured Loop", backing: "PVC/Latex", pileWeight: "26oz", totalThickness: "8.0mm", soundInsulation: "22dB", antistatic: "Yes" },
    features: ["Visual Interest", "Versatile Style"]
  },

  // --- PUBLIC AREA SERIES ---
  {
    id: "public-area-heavy-duty",
    name: "High-Traffic Public Area Corridor Carpet",
    category: "public-area",
    description: "Extra-durable broadloom rolls for airports, exhibition centers, and terminals.",
    longDescription: "Designed to withstand intense luggage wheels and high-volume pedestrian traffic.",
    image: "/images/public-area-carpets.webp",
    moq: "300 SQM",
    leadTime: "15-20 Days",
    spec: { material: "Solution-Dyed Nylon", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "ASTM E648 Class I", trafficClass: "Class 33 Extra Heavy", yarnSystem: "Dense Tufted", backing: "Bitumen/PVC", pileWeight: "28 oz/yd²", totalThickness: "8.5 mm", soundInsulation: "22dB", antistatic: "< 2.0 kV" },
    features: ["Wheel Resistance", "Non-slip"]
  },
  {
    id: "natural-sisal-carpet",
    name: "Natural Sisal Linen-Weave Commercial Carpet",
    category: "public-area",
    description: "100% natural plant-fiber sisal carpet for sustainable biophilic office interiors.",
    longDescription: "Woven into a refined linen-look flatweave for sustainable, professional commercial spaces.",
    image: "/images/natural-sisal-carpet-office.jpg",
    moq: "300 SQM",
    leadTime: "30 Days",
    fobPrice: { display: "US$6.50-14.80 / SQM", lowPrice: "6.50", highPrice: "14.80", currency: "USD", unit: "SQM" },
    spec: { material: "100% Natural Sisal", size: "4m Roll", colors: [] },
    technicalSpecs: { fireRating: "Class I (FR)", trafficClass: "Class 32", yarnSystem: "Flatweave", backing: "Natural Latex", pileWeight: "56oz", totalThickness: "7mm", rollWidth: "4m", antistatic: "Permanent" },
    features: ["Biophilic Design", "Natural Fiber"]
  }
];

export const productCategories = [
  { id: "carpet-tiles", name: "Commercial Carpet Tiles", description: "Modular solutions for offices.", image: "/images/category-tiles.png", slug: "carpet-tiles" },
  { id: "wall-to-wall", name: "Wall-to-Wall Carpets", description: "Seamless broadloom for hospitality.", image: "/images/category-broadloom.jpg", slug: "wall-to-wall" },
  { id: "public-area", name: "Public Area Carpets", description: "Heavy-duty specialized flooring.", image: "/images/public-area-carpets.webp", slug: "public-area" }
];

export const faqSections = [
  {
    title: "Product FAQs",
    questions: [
      { q: "What types of commercial carpets do you offer?", a: "We provide Carpet Tiles, Broadloom Carpets, Modular Carpet Systems, Custom Area Rugs, and Entrance Mat Systems suitable for offices, hotels, healthcare, and public facilities." },
      { q: "What is the difference between carpet tiles and broadloom carpet?", a: "Carpet tiles offer flexible installation and easier replacement. Broadloom carpet provides a seamless appearance and is commonly used in hospitality projects." },
      { q: "Are your carpets suitable for high-traffic commercial areas?", a: "Yes. Our commercial flooring solutions are designed for environments such as hotel corridors, office spaces, airports, schools, and healthcare facilities." },
      { q: "How long do commercial carpets typically last?", a: "Service life depends on traffic level, product specification, and maintenance practices. Commercial-grade carpets maintain performance for years." },
      { q: "What carpet solutions are best for office buildings?", a: "Office projects typically prioritize durability and acoustic performance; carpet tiles are often preferred." },
      { q: "What carpet solutions are best for hotels?", a: "We provide customized recommendations for guest rooms, corridors, ballrooms, and lobbies." },
      { q: "What carpet options are suitable for healthcare facilities?", a: "Healthcare projects require hygiene-focused, durable, and easy-to-maintain flooring." }
    ]
  },
  {
    title: "Custom Design FAQs",
    questions: [
      { q: "Can you customize carpet designs?", a: "Yes. We offer custom patterns, custom colors, brand graphics, and bespoke hospitality collections." },
      { q: "Can you match our designer’s color palette?", a: "Yes. We can develop colors based on Pantone references, brand guidelines, or existing samples." },
      { q: "Can you work directly from architectural drawings?", a: "Absolutely. We regularly work with CAD files, PDF layouts, and interior design packages." },
      { q: "Can you provide project samples before production?", a: "Yes. Available samples include material samples, color swatches, and strike-offs." },
      { q: "Can you develop custom hotel carpet collections?", a: "Yes, we provide fully customized hospitality flooring for all hotel zones." }
    ]
  },
  {
    title: "Commercial Project FAQs",
    questions: [
      { q: "What information do you need to provide a quotation?", a: "Please provide floor plans, quantities, project location, design requirements, and delivery schedule." },
      { q: "Can you assist with specification and product selection?", a: "Yes. Our technical team assists with product selection, traffic analysis, and budget planning." },
      { q: "How long does a commercial carpet project take?", a: "Timeline depends on product type, customization level, and quantity." },
      { q: "Can you support phased deliveries?", a: "Yes. We can arrange staged production and shipment according to construction progress." },
      { q: "Can you support international commercial projects?", a: "Yes. We provide export packaging, shipping coordination, and documentation support." },
      { q: "Can you provide third-party inspections before shipment?", a: "Yes, independent inspections can be arranged upon request." },
      { q: "How can commercial carpet reduce lifecycle costs?", a: "High performance reduces maintenance, replacement frequency, and installation downtime." },
      { q: "Why do developers choose carpet instead of hard flooring?", a: "Key advantages include acoustic comfort, walking safety, and design flexibility." }
    ]
  },
  {
    title: "Manufacturing & Logistics FAQs",
    questions: [
      { q: "What is your production capacity?", a: "Our facilities support large-scale commercial projects and multi-location developments." },
      { q: "How do you ensure quality consistency?", a: "Quality control includes raw material inspection, production monitoring, and finished product verification." },
      { q: "What certifications can be provided?", a: "Products comply with standards for fire performance (ASTM E648), indoor air quality, and durability." },
      { q: "What is your MOQ?", a: "MOQ depends on product type and customization; project-specific recommendations are available." },
      { q: "What warranty or after-sales support do you provide?", a: "We provide technical assistance, maintenance guidance, and project coordination." },
      { q: "Why choose us as your commercial carpet supplier?", a: "B2B expertise, custom design capability, large-scale manufacturing, and global export experience." }
    ]
  }
];

export const certifications = [{ name: "ASTM E648", description: "Fire Rating" }, { name: "CRI Green Label Plus", description: "Indoor Air Quality" }];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Luxury Hotel Lobby Transformation — Dubai Property",
    subtitle: "A custom Axminster hospitality program that combined brand expression, fire-compliant performance, and phased overnight installation for a five-star lobby and corridor upgrade.",
    category: "wall-to-wall",
    image: "/images/case-series/case-1/Case_1_Lobby_Grand_Reveal.jpg",
    description: "Delivered a 5,000+ sqm custom Axminster broadloom solution for a luxury Dubai hotel, aligning art-deco design language, ASTM E648 Class I fire requirements, and guest-area installation windows without disrupting live operations.",
    projectSpecs: [
      { label: "Location", value: "Dubai, UAE" },
      { label: "Project Scope", value: "Lobby, arrival corridor, elevator hall, and VIP transition zones" },
      { label: "Size", value: "5,000+ sqm" },
      { label: "Construction", value: "Custom Axminster broadloom with woven hospitality backing" },
      { label: "Lead Time", value: "5 weeks production + phased site delivery" },
      { label: "Compliance", value: "ASTM E648 Class I, project color approval, batch QC documentation" }
    ],
    sections: [
      {
        title: "Project Brief",
        paragraphs: [
          "The hotel operator needed to reposition its arrival experience without a full shutdown of the property. The old floor finish had visible traffic lanes, inconsistent repairs, and a color story that no longer matched the updated interior direction.",
          "The design team wanted a carpet program that felt unmistakably luxury, but still practical for heavy luggage traffic, frequent housekeeping cycles, and round-the-clock guest movement in a warm-climate hospitality environment.",
          "Our role was to translate that brief into a production-ready Axminster program with clear pattern zoning, controlled repeat logic, and an installation sequence that could be executed in narrow overnight windows."
        ],
        image: "/images/case-series/case-1/Case_1_Lobby_Grand_Reveal.jpg",
        imageAlt: "Completed luxury hotel lobby carpet installation in Dubai",
        imageCaption: undefined
      },
      {
        title: "Custom Design Development",
        paragraphs: [
          "The final pattern palette combined deep navy, champagne gold, and warm neutral tones to reflect the hotel's art-deco lighting and brass architectural details. Instead of using a loud logo treatment across the full floor, we integrated subtle brand cues into corner transitions and circulation zones.",
          "This approach protected the premium visual tone while still giving the property a recognizable branded signature. It also helped the design age well over time, because the pattern complexity concealed minor lint, wheel tracks, and early-use shading more effectively than a flatter decorative field would have done.",
          "Before bulk production, we aligned digital artwork, repeat scale, and strike-off approval with the hotel consultant so the on-site team could approve both close-up detail and long-distance lobby visual impact."
        ],
        image: "/images/case-series/case-1/Case_1_Design_Detail.jpg",
        imageAlt: "Detailed carpet design close-up with brand-integrated pattern",
        imageCaption: undefined
      },
      {
        title: "Installation Strategy",
        paragraphs: [
          "Because the site remained operational, installation planning mattered as much as the material specification. We divided the rollout into protected night-shift phases covering lobby islands, corridor stretches, and guest access transitions in sequence.",
          "Pattern matching and seam direction were pre-mapped before material reached site, which reduced fitting errors and shortened the finishing window for each shift. Protection films and temporary walk paths allowed the hotel to reopen each zone for daytime traffic with minimal visual disruption.",
          "For hospitality projects of this type, operational continuity is often the real success metric. Finishing within the agreed access window gave the hotel team confidence to continue later refurbishment phases without delaying guest service."
        ],
        image: "/images/case-series/case-1/Case_1_Installation_Process.jpg",
        imageAlt: "Night installation of hospitality broadloom carpet",
        imageCaption: undefined
      },
      {
        title: "Guest Experience Across Connected Zones",
        paragraphs: [
          "The corridor package was designed as a visual extension of the lobby rather than a separate decorative language. We simplified the geometry, tightened color control, and used directional pattern movement to make long circulation areas feel more composed and less repetitive.",
          "This continuity improved the perceived finish level of the entire guest journey. Instead of a standout lobby followed by weaker support spaces, the project delivered a more unified hospitality story from arrival to room approach.",
          "For hotel buyers, that continuity is commercially important: guests rarely separate design experience by subcontract package. They read the flooring, lighting, and joinery as one promise of quality."
        ],
        image: "/images/case-series/case-1/Case_1_Corridor_View.jpg",
        imageAlt: "Luxury hotel corridor carpet coordinated with lobby design",
        imageCaption: undefined
      },
      {
        title: "Quality Assurance and Handover",
        paragraphs: [
          "The quality plan covered dye-lot alignment, seam review, pile height consistency, and dimensional checks before shipment and again during site acceptance. This was especially important because the project involved high-visibility lighting and reflective finishes that could exaggerate small imperfections.",
          "We also issued documentation for fire performance, production references, and approval samples so the buyer had a complete record for consultant review and future maintenance matching.",
          "That handover discipline matters long after installation. Premium hospitality buyers do not only purchase carpet; they purchase repeatability for future replacement and renovation phases."
        ],
        image: "/images/case-series/case-1/Case_1_Quality_Assurance.jpg",
        imageAlt: "Quality inspection of custom hospitality carpet",
        imageCaption: undefined
      }
    ],
    technicalDetails: [
      "Custom Axminster woven construction engineered for high guest traffic and luggage wheel movement.",
      "Project-specific color registration and strike-off approval before bulk production release.",
      "ASTM E648 Class I fire performance aligned with hospitality procurement requirements.",
      "Pattern repeat and seam-plan coordination prepared in advance for night-phase fitting.",
      "Batch QC documents covered dimensional stability, appearance consistency, and visual match control."
    ],
    designHighlights: [
      "Art-deco inspired palette using navy, champagne, and warm neutrals.",
      "Subtle brand integration instead of oversized logo repetition across public areas.",
      "Pattern zoning that supports both grand lobby reveal and calmer corridor experience.",
      "Visual complexity chosen to hide traffic marks and reduce early wear perception.",
      "Coordinated transition language between arrival, corridor, and VIP circulation zones."
    ],
    costAnalysis: [
      { item: "Full custom Axminster replacement avoided by phased public-area rollout", amount: "Reduced closure risk" },
      { item: "Night installation planning versus full daytime shutdown", amount: "Lower revenue disruption" },
      { item: "Pattern-mapped seaming and pre-approval samples", amount: "Fewer on-site fitting corrections" },
      { item: "Documented QC and repeatability for future replacement", amount: "Lower lifecycle sourcing risk" }
    ],
    results: [
      "The property upgraded the visual standard of its arrival space without a full hotel closure.",
      "Consultant and operator teams approved the final color program and pattern registration with no major post-install revisions.",
      "The project created a stronger premium guest impression across both lobby and connecting corridors.",
      "Phased execution protected operations and reduced the commercial risk normally associated with public-area renovation.",
      "The buyer gained a documented reference standard for future matching, maintenance, and expansion work."
    ],
    gallery: [
      "/images/case-series/case-1/Case_1_Lobby_Grand_Reveal.jpg",
      "/images/case-series/case-1/Case_1_Design_Detail.jpg",
      "/images/case-series/case-1/Case_1_Installation_Process.jpg",
      "/images/case-series/case-1/Case_1_Corridor_View.jpg",
      "/images/case-series/case-1/Case_1_Quality_Assurance.jpg"
    ]
  },
  {
    id: "case-2",
    title: "Retail Department Store Color-Coded Navigation — India, Multi-Department",
    subtitle: "A four-store retail carpet program that turned flooring into a wayfinding system, using digitally printed color zones and modular installation to support navigation, branding, and continued trading during fit-out.",
    category: "carpet-tiles",
    image: "/images/case-series/case-2/Case_2_Store_Entrance.jpg",
    description: "Developed a 4,800 m² color-coded modular carpet system for a premium Indian department store chain, using digitally printed department zoning to improve wayfinding, strengthen brand identity, and support phased installation with no full-store closure.",
    projectSpecs: [
      { label: "Project Type", value: "Premium retail department store navigation system" },
      { label: "Country/Region", value: "India — Bangalore flagship with rollouts in Mumbai, Delhi, and Hyderabad" },
      { label: "Program Size", value: "4,800 m² total across 4 stores" },
      { label: "Material Strategy", value: "Polypropylene in high-traffic zones + Nylon 6 in premium departments" },
      { label: "Print Method", value: "Digital ink-jet printing on undyed base carpet" },
      { label: "Installation Method", value: "1 m × 1 m modular adhesive installation with phased trading continuity" }
    ],
    sections: [
      {
        title: "Retail Navigation Brief",
        paragraphs: [
          "The chain wanted to solve two related commercial problems: customers struggled to locate departments efficiently, and too many visits remained single-purpose rather than cross-departmental. Overhead signage alone was not creating an intuitive shopping journey.",
          "Instead of treating carpet as background finish, the project team chose to make the floor itself part of the navigation system. Each department received its own primary color and supporting motif so customers could move through the store by reading the floor visually.",
          "This transformed the flooring package from a maintenance item into an experience and conversion tool. It also gave the retail brand a more ownable physical identity than conventional stock finishes would have provided."
        ],
        image: "/images/case-series/case-2/Case_2_Store_Entrance.jpg",
        imageAlt: "Department store entrance with color-coded carpet navigation system",
        imageCaption: undefined
      },
      {
        title: "Department-Level Design Language",
        paragraphs: [
          "The design system assigned each key retail category a distinct color family and geometric secondary pattern. Emerald green, navy, rose gold, terracotta, citrus yellow, and metallic-accent neutrals created a visual map that customers could understand almost immediately.",
          "The purpose was not decoration alone. Adjacent color relationships were planned to encourage flow from one department into the next, supporting higher dwell time and stronger basket expansion opportunities for the retailer.",
          "Because the system was integrated with in-store signage and campaign messaging, the carpet became part of the chain's broader navigate-by-color retail concept rather than an isolated interior move."
        ],
        image: "/images/case-series/case-2/Case_2_Pattern_Detail.jpg",
        imageAlt: "Detailed close-up of department carpet pattern and tile precision",
        imageCaption: undefined
      },
      {
        title: "Storewide Traffic Flow Strategy",
        paragraphs: [
          "At the planning level, the carpet program was designed to influence movement as much as aesthetics. Main walkways, transition zones, and destination departments were coordinated so the floor would support intuitive circulation even when displays or promotional fixtures partially interrupted sight lines.",
          "This was especially useful in larger or irregular layouts where first-time visitors often hesitate or backtrack. By making color progression legible from above and across long sightlines, the store reduced wayfinding friction without relying only on hanging signs and decals.",
          "From a B2B perspective, this case is valuable because it shows how flooring can support commercial behavior. The client was not simply buying a pretty pattern; it was buying a more navigable store."
        ],
        image: "/images/case-series/case-2/Case_2_Navigation_Aerial.jpg",
        imageAlt: "Aerial view of color-coded store carpet navigation layout",
        imageCaption: undefined
      },
      {
        title: "Premium Department Execution",
        paragraphs: [
          "The beauty and electronics zones used Nylon 6 to deliver a more refined visual finish and better support extended browsing time. These departments required a slightly more premium underfoot impression and sharper graphic presentation than the chain's highest-throughput aisles.",
          "This two-fiber strategy allowed the retailer to control cost where ultra-high traffic justified polypropylene, while reserving higher-detail, higher-comfort specification for areas where customer experience directly supported premium positioning.",
          "That selective upgrade model is often more commercially effective than applying one uniform specification to the entire store."
        ],
        image: "/images/case-series/case-2/Case_2_Beauty_Department.jpg",
        imageAlt: "Premium beauty department with rose-gold carpet zone",
        imageCaption: undefined
      },
      {
        title: "Installation Under Live Trading Conditions",
        paragraphs: [
          "The chain could not afford full shutdown across four stores, so installation was phased department by department. Modular 1 m × 1 m tiles reduced labor complexity compared with smaller formats while preserving replacement flexibility.",
          "Color sequencing, tile positioning, and seam control had to be coordinated carefully because the visual concept depended on clean transitions between departments. The larger modular format also helped reduce installation time and the number of seams installers needed to align.",
          "Most importantly, the rollout protected ongoing store revenue. Each location remained largely operational during installation, which turned a potentially disruptive refurbishment into a manageable staged upgrade."
        ],
        image: "/images/case-series/case-2/Case_2_Installation_Process.jpg",
        imageAlt: "Modular tile installation for color-coded retail carpet program",
        imageCaption: undefined
      }
    ],
    technicalDetails: [
      "Polypropylene specified in entrance lobbies, main aisles, and transition zones for bleach-cleanability and cost control.",
      "Nylon 6 specified in beauty and electronics departments for finer print detail and more premium hand feel.",
      "Digital ink-jet printing enabled six department color families from a shared base carpet program.",
      "1 m × 1 m modular tile format reduced installation labor versus smaller tile grids while preserving replaceability.",
      "Commercial-grade backing and antimicrobial treatment supported high daily traffic and climate-sensitive retail operation."
    ],
    designHighlights: [
      "Color-coded wayfinding system integrated directly into the floor finish.",
      "Department-specific motifs paired with brand-coherent palette planning.",
      "Traffic flow designed to encourage cross-department movement and longer browsing.",
      "Retail environment transformed into a marketing and social-media asset.",
      "Consistent design language extended across flagship and secondary store rollouts."
    ],
    costAnalysis: [
      { item: "Flagship material cost with split-fiber strategy", amount: "₹44,000" },
      { item: "Custom digital printing premium", amount: "₹5,280" },
      { item: "Domestic shipping and distribution", amount: "₹8,000" },
      { item: "Flagship installation labor", amount: "₹80,000" },
      { item: "Furniture protection and fit-out handling", amount: "₹15,000" },
      { item: "Flagship store total", amount: "₹172,280" },
      { item: "4-store program total", amount: "₹479,000" }
    ],
    results: [
      "Customer survey responses reporting difficulty finding departments dropped materially after installation.",
      "Average basket behavior improved, with more cross-department item inclusion per transaction than the pre-installation baseline.",
      "Average visit duration increased as customers engaged with more of the store layout.",
      "Modular replacement remained manageable, with only limited tile replacement needed during the first 12 months.",
      "The program became a high-visibility marketing asset, generating significantly stronger social media exposure for the retail chain."
    ],
    gallery: [
      "/images/case-series/case-2/Case_2_Store_Entrance.jpg",
      "/images/case-series/case-2/Case_2_Pattern_Detail.jpg",
      "/images/case-series/case-2/Case_2_Navigation_Aerial.jpg",
      "/images/case-series/case-2/Case_2_Beauty_Department.jpg",
      "/images/case-series/case-2/Case_2_Installation_Process.jpg"
    ]
  },
  {
    id: "case-3",
    title: "Casino Gaming Floor — Las Vegas, USA",
    subtitle: "A high-traffic gaming floor carpet program designed to combine strong pattern identity, stain concealment, and long visual life in a continuous entertainment environment.",
    category: "wall-to-wall",
    image: "/images/case-series/case-3/Case_3_Casino_Hall.jpg",
    description: "Supplied a 3,500 m² patterned casino carpet package for a Las Vegas gaming hall, using dense Nylon 6,6 construction and complex multicolor patterning to improve appearance retention and player-environment immersion.",
    projectSpecs: [
      { label: "Location", value: "Las Vegas, USA" },
      { label: "Project Type", value: "Casino gaming floor and customer circulation zones" },
      { label: "Size", value: "3,500 m²" },
      { label: "Construction", value: "Nylon 6,6 with 15-color custom pattern system" },
      { label: "Traffic Profile", value: "Ultra-high footfall, gaming chairs, service carts, beverage movement" },
      { label: "Priority", value: "Pattern complexity, stain concealment, and long-term visual impact" }
    ],
    sections: [
      {
        title: "Entertainment Floor Design Brief",
        paragraphs: [
          "The client needed a carpet program that could support the visual intensity expected in a Las Vegas gaming environment while also handling demanding operational realities. The floor had to stay visually rich under constant foot traffic, beverage movement, gaming-chair use, and late-night maintenance cycles.",
          "Rather than relying on flat decorative color, the project used a highly layered multicolor pattern system to create energy, depth, and visual continuity across the gaming floor. The design language was intended to feel premium without distracting from the tables, machines, and customer pathing.",
          "In casino environments, flooring is not passive decoration. It contributes directly to mood, dwell, and how polished the venue feels during continuous operation."
        ],
        image: "/images/case-series/case-3/Case_3_Casino_Hall.jpg",
        imageAlt: "Large casino gaming floor with custom patterned carpet",
        imageCaption: undefined
      },
      {
        title: "Pattern Complexity as Performance Strategy",
        paragraphs: [
          "The custom pattern was designed not only for aesthetics but also for operational concealment. Multitone geometry and layered color variation helped disguise minor debris, drink incidents, and early-use traffic shading more effectively than a simpler field design would have done.",
          "That is one of the main reasons patterned carpet remains commercially valuable in gaming interiors. A strong pattern can reduce the visibility of daily wear without making the venue feel dark or tired.",
          "The result was a carpet field that looked detailed and premium up close while remaining visually stable under heavy use across larger floor areas."
        ],
        image: "/images/case-series/case-3/Case_3_Pattern_Complexity.jpg",
        imageAlt: "Detailed casino carpet pattern complexity close-up",
        imageCaption: undefined
      },
      {
        title: "Stain Concealment in a Beverage-Heavy Environment",
        paragraphs: [
          "Casino floors are unusually challenging because beverage movement is constant and localized staining risk is high. The carpet therefore needed to conceal incidents quickly between service rounds while still allowing proper cleaning response when needed.",
          "The pattern strategy reduced visibility of minor contamination events and helped maintain a cleaner-looking floor during live trading conditions. This did not replace housekeeping discipline, but it gave the operations team more visual tolerance between interventions.",
          "For the buyer, that translated into stronger appearance retention and less obvious environmental fatigue over time."
        ],
        image: "/images/case-series/case-3/Case_3_Stain_Hiding_Demo.jpg",
        imageAlt: "Comparison of stain visibility in complex casino carpet pattern",
        imageCaption: undefined
      },
      {
        title: "Player Engagement and Environment Quality",
        paragraphs: [
          "The final environment gave the gaming hall a more immersive and deliberate identity. The carpet supported the atmosphere of the room without visually overwhelming gaming equipment or circulation logic.",
          "From an operations standpoint, the floor contributed to a stronger sense of finish and helped the venue sustain a premium feel across long operating hours. That matters in casino environments where customer dwell and comfort are deeply tied to perceived venue quality.",
          "The client reported stronger satisfaction with how the floor balanced theatricality, durability, and maintenance practicality."
        ],
        image: "/images/case-series/case-3/Case_3_Customer_Engagement.jpg",
        imageAlt: "Casino customers interacting within patterned carpet environment",
        imageCaption: undefined
      },
      {
        title: "Design Comparison and Long-Term Use Logic",
        paragraphs: [
          "The project also served as an internal proof point for the operator: more complex, strategically layered patterning outperformed simpler visual concepts in terms of perceived cleanliness and operational resilience.",
          "This made the carpet not just a fit-out decision, but part of the venue's ongoing environmental strategy. In high-intensity hospitality sectors, visual durability often matters as much as structural durability.",
          "For future gaming projects, the operator now uses this installation as a reference when evaluating pattern depth, stain concealment logic, and lifecycle presentation quality."
        ],
        image: "/images/case-series/case-3/Case_3_Pattern_Comparison.jpg",
        imageAlt: "Casino carpet pattern comparison showing design logic",
        imageCaption: undefined
      }
    ],
    technicalDetails: [
      "Dense Nylon 6,6 construction selected for strong appearance retention in high-traffic entertainment use.",
      "15-color custom pattern program designed to balance visual drama with maintenance practicality.",
      "High-density construction supported both long operating hours and repeated service movement.",
      "Pattern layout deliberately used stain-concealment logic suited to beverage-heavy floors.",
      "The project served as a reference model for future gaming-floor visual durability decisions."
    ],
    designHighlights: [
      "Complex geometric gaming-floor pattern language with high visual richness.",
      "Color layering designed for concealment as well as atmosphere.",
      "Pattern scaled to support wide floor coverage without repetitive visual fatigue.",
      "Entertainment identity strengthened without overwhelming the gaming environment.",
      "Aesthetic and operational goals aligned in one continuous floor system."
    ],
    results: [
      "The venue achieved a stronger premium gaming-floor identity with improved perceived finish quality.",
      "Pattern complexity reduced visible day-to-day soiling and improved appearance stability under live operation.",
      "The client used the installation as a benchmark for future casino carpet design decisions.",
      "The project supported longer-lasting visual quality in a demanding beverage- and traffic-heavy setting."
    ],
    gallery: [
      "/images/case-series/case-3/Case_3_Casino_Hall.jpg",
      "/images/case-series/case-3/Case_3_Pattern_Complexity.jpg",
      "/images/case-series/case-3/Case_3_Stain_Hiding_Demo.jpg",
      "/images/case-series/case-3/Case_3_Customer_Engagement.jpg",
      "/images/case-series/case-3/Case_3_Pattern_Comparison.jpg"
    ]
  },
  {
    id: "case-4",
    title: "Medical Facility — Singapore Hospital Wing",
    subtitle: "A healthcare flooring program designed around infection-control priorities, cleanability, and stable long-term performance in a medically sensitive environment.",
    category: "public-area",
    image: "/images/case-series/case-4/Case_4_Hospital_Ward.jpg",
    description: "Installed a 1,200 m² antimicrobial-treated healthcare carpet program for a Singapore hospital wing, balancing comfort, acoustic benefit, and hygiene-led specification logic.",
    projectSpecs: [
      { label: "Location", value: "Singapore" },
      { label: "Project Type", value: "Hospital wing and support circulation" },
      { label: "Size", value: "1,200 m²" },
      { label: "Construction", value: "Antimicrobial-treated polypropylene healthcare carpet" },
      { label: "Priority", value: "Infection control, easy cleaning, and patient-environment comfort" },
      { label: "Performance Goal", value: "Hygiene-sensitive flooring with stable healthcare maintenance profile" }
    ],
    sections: [
      {
        title: "Healthcare Environment Brief",
        paragraphs: [
          "The hospital needed a floor finish that felt calmer and more acoustically comfortable than hard flooring, but still aligned with strict hygiene expectations. The challenge was to create a healthcare-friendly environment without compromising cleaning discipline or infection-control logic.",
          "The selected carpet strategy focused on carefully controlled materials, antimicrobial treatment, and a visual design approach that maintained a clean and professional healthcare appearance.",
          "In this context, carpet was not being used to create luxury. It was being used to improve user comfort while respecting the operational seriousness of the medical setting."
        ],
        image: "/images/case-series/case-4/Case_4_Hospital_Ward.jpg",
        imageAlt: "Hospital ward with healthcare carpet installation",
        imageCaption: undefined
      },
      {
        title: "Infection-Control Design Thinking",
        paragraphs: [
          "The project team approached flooring as one contributor to a broader infection-control system. That meant prioritizing stable cleanability, appropriate material treatment, and clarity around how the carpet would be maintained in practice.",
          "Visual design was intentionally controlled: the pattern language supported a clean, orderly environment while reducing the stark institutional feel often associated with purely hard-surface medical interiors.",
          "This made the floor both operationally disciplined and more supportive of patient and staff comfort."
        ],
        image: "/images/case-series/case-4/Case_4_Infection_Control.jpg",
        imageAlt: "Healthcare flooring design supporting infection-control logic",
        imageCaption: undefined
      },
      {
        title: "Antimicrobial Treatment and Surface Performance",
        paragraphs: [
          "The antimicrobial treatment was specified as part of a broader hygiene strategy rather than as a stand-alone marketing feature. Buyers in healthcare need clarity on what the treatment does, how long it is expected to remain effective, and how it interacts with the cleaning regime.",
          "The carpet construction and treatment package were selected to support a stable maintenance profile under regular hospital cleaning cycles while also reducing the visual harshness of the environment.",
          "This balance of performance and human comfort is often what makes healthcare flooring procurement especially complex."
        ],
        image: "/images/case-series/case-4/Case_4_Antimicrobial_Detail.jpg",
        imageAlt: "Antimicrobial carpet detail for healthcare setting",
        imageCaption: undefined
      },
      {
        title: "Cleaning Workflow and Operational Reality",
        paragraphs: [
          "In medical settings, the credibility of any flooring specification depends heavily on how it supports the actual cleaning workflow. The hospital therefore reviewed the flooring not only with facilities staff, but also with teams responsible for clinical environment standards.",
          "The carpet package helped create a quieter, softer environment while remaining compatible with the cleaning structure the facility could maintain consistently.",
          "That operational realism is essential. A technically appealing floor that cannot be maintained properly in the real hospital routine is not a successful healthcare solution."
        ],
        image: "/images/case-series/case-4/Case_4_Cleaning_Process.jpg",
        imageAlt: "Healthcare carpet cleaning and maintenance workflow",
        imageCaption: undefined
      },
      {
        title: "Comparing Healthcare Flooring Outcomes",
        paragraphs: [
          "The hospital used the project to compare a more comfort-led carpet environment against harder, more institutional surface strategies. While flooring alone is never the sole determinant of clinical outcome, the client viewed the project as a meaningful environmental improvement.",
          "The result was a space that felt less harsh acoustically and visually while preserving operational confidence in maintenance and hygiene management.",
          "For healthcare buyers, this case illustrates that softer flooring solutions can be considered responsibly when the specification, treatment, and maintenance framework are aligned."
        ],
        image: "/images/case-series/case-4/Case_4_Medical_Comparison.jpg",
        imageAlt: "Comparison view of healthcare carpet environment performance",
        imageCaption: undefined
      }
    ],
    technicalDetails: [
      "Antimicrobial-treated polypropylene selected for healthcare-oriented maintenance practicality.",
      "Specification developed with infection-control and facilities logic in mind.",
      "Visual design balanced calm patient experience with professional institutional clarity.",
      "Cleaning compatibility was treated as a core selection criterion rather than a secondary detail.",
      "The system supported acoustic softness and a more human-centered ward atmosphere."
    ],
    designHighlights: [
      "Healthcare-friendly pattern language with clean, calm visual expression.",
      "A more comfortable and less institutional patient environment.",
      "Acoustic softening compared with hard-surface alternatives.",
      "Material and treatment choices aligned to maintenance discipline.",
      "A healthcare flooring model focused on practical infection-control support."
    ],
    results: [
      "The hospital achieved a quieter and more comfortable ward environment.",
      "The project demonstrated that hygiene-led carpet selection can be viable in controlled medical settings.",
      "Facilities and clinical teams had greater confidence in how the flooring would perform within existing cleaning workflows.",
      "The installation became a useful internal benchmark for future healthcare flooring discussions."
    ],
    gallery: [
      "/images/case-series/case-4/Case_4_Hospital_Ward.jpg",
      "/images/case-series/case-4/Case_4_Infection_Control.jpg",
      "/images/case-series/case-4/Case_4_Antimicrobial_Detail.jpg",
      "/images/case-series/case-4/Case_4_Cleaning_Process.jpg",
      "/images/case-series/case-4/Case_4_Medical_Comparison.jpg"
    ]
  },
  {
    id: "case-5",
    title: "Corporate Office Space — Tokyo, Multi-Floor",
    subtitle: "A multi-floor office carpet rollout using color progression, acoustic thinking, and phased delivery to improve workplace coherence.",
    category: "carpet-tiles",
    image: "/images/case-techpark.jpg",
    description: "A 5,000 m² workplace carpet program across eight floors, using tonal progression and performance-led modular specification to support comfort and space identity.",
    projectSpecs: [
      { label: "Location", value: "Tokyo, Japan" },
      { label: "Size", value: "5,000 m² across 8 floors" },
      { label: "Format", value: "Modular workplace carpet system" },
      { label: "Design Strategy", value: "Light-to-dark floor progression for orientation and zoning" }
    ],
    sections: [
      {
        title: "Workplace Rollout Brief",
        paragraphs: [
          "The client was upgrading eight office floors during an active occupancy cycle and needed a flooring strategy that could improve workplace quality without forcing long closures.",
          "A modular carpet system was selected because it supported phased installation, easier future access, and better control of disruption than a single large broadloom replacement.",
          "The design objective was not dramatic branding. It was to create a more coherent, professional office environment that could feel quieter and more intentional from floor to floor."
        ]
      },
      {
        title: "Color Progression as Orientation Tool",
        paragraphs: [
          "Instead of repeating one tone across all levels, the project used a controlled light-to-dark progression to help each floor feel related but distinct.",
          "This created an easy orientation cue for staff and visitors while keeping the overall workplace palette disciplined enough for a corporate setting.",
          "The tonal strategy also helped distribute wear visibility more intelligently, with deeper tones introduced in heavier-use zones where rolling chairs and circulation would be more demanding."
        ],
        image: "/images/blog-office-carpet.jpg",
        imageAlt: "Office carpet zoning and tonal progression across workplace areas",
        imageCaption: undefined
      },
      {
        title: "Phased Installation in an Occupied Building",
        paragraphs: [
          "Installation sequencing was coordinated floor by floor so teams could work around occupancy, furniture moves, and business continuity requirements.",
          "Because the format was modular, small zones could be completed and reopened faster, which reduced pressure on the client's internal relocation planning.",
          "That phased approach turned carpet replacement into a manageable operational program rather than a disruptive one-time construction event."
        ]
      },
      {
        title: "Comfort and Long-Term Flexibility",
        paragraphs: [
          "Beyond appearance, the client valued the acoustic softening that carpet introduced compared with the previous harder-feeling office finish.",
          "The modular system also gave the facilities team more freedom to handle future churn, workstation reconfiguration, or localized replacement without restarting a full-floor renovation.",
          "This made the project commercially attractive not only at handover, but also in terms of long-term workplace management."
        ]
      }
    ],
    technicalDetails: [
      "Tonal zoning by floor created a more structured occupant experience.",
      "Modular format supported phased installation and ongoing workspace flexibility.",
      "Acoustic improvement was part of the commercial value of the project."
    ],
    designHighlights: [
      "Light gray to dark gray progression across floors.",
      "Workplace identity strengthened without visual excess.",
      "Balanced commercial durability with quiet office aesthetics."
    ],
    results: [
      "The office environment achieved better acoustic comfort and stronger floor-by-floor identity.",
      "The client associated the upgrade with improved workplace quality and staff experience."
    ]
  },
  {
    id: "case-6",
    title: "Airport Terminal — Singapore Changi",
    subtitle: "A wayfinding-oriented modular carpet program designed for phased replacement in a live airport environment.",
    category: "public-area",
    image: "/images/public-area-carpets.webp",
    description: "An 8,000 m² airport carpet system integrating circulation logic and modular maintenance strategy for high-traffic terminal use.",
    projectSpecs: [
      { label: "Location", value: "Singapore" },
      { label: "Size", value: "8,000 m²" },
      { label: "Use Type", value: "Airport terminal public circulation" },
      { label: "Priority", value: "Wayfinding support and phased replacement flexibility" }
    ],
    sections: [
      {
        title: "Terminal Environment Brief",
        paragraphs: [
          "The airport operator needed a flooring system that could withstand continuous passenger movement while still supporting a more organized travel experience.",
          "Unlike conventional commercial interiors, the terminal could not be shut down for large-scale flooring work, so the replacement strategy had to be compatible with live operation.",
          "This pushed the project toward a modular public-area system with strong maintenance logic and clear wayfinding potential."
        ]
      },
      {
        title: "Patterning for Passenger Flow",
        paragraphs: [
          "The carpet pattern was developed to reinforce circulation rather than act as decoration alone. Directional movement, calmer waiting areas, and transition thresholds were treated as part of the visual planning brief.",
          "This helped the floor contribute to orientation in subtle ways without competing with terminal signage or creating visual confusion.",
          "For the operator, that meant the carpet could support both environment quality and practical passenger movement."
        ],
        image: "/images/public-area-raw.jpg",
        imageAlt: "Public-area carpet patterning used to guide movement through a circulation zone",
        imageCaption: undefined
      },
      {
        title: "Replacement Logic in a Live Terminal",
        paragraphs: [
          "Modular construction was especially valuable because the airport needed to replace sections in tightly controlled windows rather than through extended shutdowns.",
          "The format made it easier to isolate worn or damaged zones, complete overnight interventions, and reopen circulation routes quickly.",
          "That maintenance flexibility was one of the strongest commercial reasons the system was selected."
        ]
      },
      {
        title: "Operational Outcome",
        paragraphs: [
          "The final result supported a cleaner circulation experience while giving the operator a more realistic long-term maintenance plan.",
          "Because the flooring was no longer treated as a single all-or-nothing field, future refresh cycles became easier to budget and stage.",
          "In a demanding transport environment, that combination of wayfinding value and service continuity was central to project success."
        ]
      }
    ],
    technicalDetails: [
      "Modular format supported replacement without shutting down full terminal areas.",
      "Pattern logic contributed to passenger wayfinding."
    ],
    designHighlights: [
      "Public-area design integrated into circulation strategy.",
      "Maintenance model suited to live terminal operation."
    ],
    results: [
      "The operator reported fewer direction-related service inquiries.",
      "Replacement planning became more manageable under live operations."
    ]
  },
  {
    id: "case-7",
    title: "Luxury Residential — Mumbai High-Rise",
    subtitle: "A multi-unit luxury residential carpet program using individualized brand and crest integration for premium presentation.",
    category: "wall-to-wall",
    image: "/images/case-resort.jpg",
    description: "A 600 m² premium residential carpet package across six units, using tailored decorative identity to enhance exclusivity.",
    projectSpecs: [
      { label: "Location", value: "Mumbai, India" },
      { label: "Size", value: "600 m² across 6 units" },
      { label: "Design Focus", value: "Building identity and unit-level personalization" }
    ],
    sections: [
      {
        title: "Luxury Residential Brief",
        paragraphs: [
          "The developer wanted the flooring to feel tailored to the identity of a premium high-rise rather than function as a generic soft finish.",
          "Each residence needed to maintain a coherent luxury standard while also allowing some degree of unit-level individuality.",
          "That made custom wall-to-wall carpet a better fit than a purely modular or standardized approach."
        ]
      },
      {
        title: "Unit-Level Identity Strategy",
        paragraphs: [
          "Decorative identity was introduced through controlled motif work and crest-related detailing that could signal exclusivity without overwhelming the interior scheme.",
          "This allowed the carpet to reinforce the property's premium narrative while still giving each residence a subtle sense of distinction.",
          "The project treated the floor as part of the interior brand language rather than as background material only."
        ]
      },
      {
        title: "Balancing Presentation and Practicality",
        paragraphs: [
          "Because these were high-end residences, visual continuity and softness of finish were prioritized over the replacement flexibility associated with tiles.",
          "At the same time, specification choices still had to account for private-living maintenance expectations, traffic between entry and lounge zones, and long-term appearance retention.",
          "The outcome was designed to feel refined in daily use rather than simply impressive at first installation."
        ]
      },
      {
        title: "Perceived Value After Handover",
        paragraphs: [
          "The finished carpet contributed to a stronger sense of crafted luxury across the project and helped the residences feel more individualized.",
          "For the developer, this supported both market positioning and the perceived completeness of the interior package.",
          "That perception of exclusivity was one of the main commercial goals behind the custom flooring strategy."
        ]
      }
    ],
    technicalDetails: [
      "Custom visual integration supported premium unit differentiation.",
      "Luxury presentation outweighed modular maintenance flexibility."
    ],
    designHighlights: [
      "Per-unit branding and crest integration.",
      "Decorative identity used as a resale-value enhancer."
    ],
    results: [
      "The project strengthened the premium narrative of the building.",
      "The client linked custom carpet identity to higher perceived property value."
    ]
  },
  {
    id: "case-8",
    title: "Educational Institution — University Campus, Australia",
    subtitle: "A branded student-center carpet program designed for durability, campus identity, and daily public use.",
    category: "carpet-tiles",
    image: "/images/case-wework.jpg",
    description: "A 4,200 m² university flooring package using durable specification and campus branding to improve student experience in a high-use social environment.",
    projectSpecs: [
      { label: "Location", value: "Australia" },
      { label: "Size", value: "4,200 m²" },
      { label: "Use Type", value: "Student center and campus social zones" }
    ],
    sections: [
      {
        title: "Campus Social-Space Brief",
        paragraphs: [
          "The university wanted a flooring upgrade that could stand up to high daily student use while making the student center feel more connected to campus identity.",
          "The environment had to support informal gathering, circulation, and public-facing activity without becoming visually tired too quickly.",
          "That requirement made durability and branding equally important in the specification discussion."
        ]
      },
      {
        title: "Brand Integration for Shared Space",
        paragraphs: [
          "Rather than treating campus branding as signage only, the design integrated identity cues into the floor in a way that felt present but not overly promotional.",
          "This helped the student center read as a more intentional shared environment and strengthened the sense of place for students using the space every day.",
          "The carpet therefore contributed to culture and atmosphere as well as surface performance."
        ]
      },
      {
        title: "Durability for Daily Public Use",
        paragraphs: [
          "High footfall, backpacks, mobile furniture, and all-day occupation meant the material had to prioritize stable wear behavior and manageable maintenance.",
          "The chosen system was designed to remain visually serviceable under repeated public use rather than rely on delicate finish quality.",
          "That made it a practical fit for student circulation and social zones where durability always matters more than formal perfection."
        ]
      },
      {
        title: "Student Experience Outcome",
        paragraphs: [
          "After completion, the flooring helped the student center feel more finished, more welcoming, and more strongly tied to campus identity.",
          "For the institution, that translated into both facility pride and a clearer sense that the space had been designed for student life rather than simple throughput.",
          "This made the project successful on both practical and cultural terms."
        ]
      }
    ],
    technicalDetails: [
      "Durable polypropylene suited to high student traffic.",
      "Brand integration supported stronger campus identity."
    ],
    designHighlights: [
      "University branding embedded into daily-use space.",
      "Durability aligned with campus public-area needs."
    ],
    results: [
      "The institution saw stronger student satisfaction and facility pride.",
      "The flooring helped reinforce the campus environment as a shared social identity."
    ]
  },
  {
    id: "case-9",
    title: "Extended-Stay Hospitality — South Korea Serviced Apartments",
    subtitle: "A modular hospitality floor system designed to support independent unit theming and easier long-term maintenance.",
    category: "carpet-tiles",
    image: "/images/case-hilton.jpg",
    description: "A 2,800 m² extended-stay hospitality carpet program across 45 units, using modular flexibility to balance branding and practical maintenance.",
    projectSpecs: [
      { label: "Location", value: "South Korea" },
      { label: "Size", value: "2,800 m² across 45 units" },
      { label: "Use Type", value: "Serviced apartments / extended-stay hospitality" }
    ],
    sections: [
      {
        title: "Extended-Stay Operating Brief",
        paragraphs: [
          "The operator needed a flooring system suited to longer-duration guest occupancy, where units function more like temporary homes than short-stay hotel rooms.",
          "That created a different maintenance profile from standard hospitality because localized wear, replacement convenience, and room-specific refresh planning all mattered more.",
          "A modular hospitality solution offered the client a more adaptable long-term operating model."
        ]
      },
      {
        title: "Independent Unit Character",
        paragraphs: [
          "While the property still needed overall brand coherence, the operator wanted different unit types to feel slightly individualized rather than fully repetitive.",
          "The carpet strategy supported this by allowing thematic variation within a controlled visual system, helping the environment feel more residential and less standardized.",
          "That subtle differentiation was commercially relevant in an extended-stay positioning context."
        ]
      },
      {
        title: "Maintenance Strategy by Unit",
        paragraphs: [
          "One of the strongest operational advantages of the chosen format was the ability to refresh worn zones within individual units without triggering broad replacement scope.",
          "This helped the operator plan maintenance around occupancy and turnover instead of waiting for full-area decline across many rooms at once.",
          "In extended-stay properties, that flexibility can materially improve lifecycle planning and reduce service disruption."
        ]
      },
      {
        title: "Long-Term Hospitality Value",
        paragraphs: [
          "The completed project balanced guest comfort, unit identity, and practical maintenance in a way that suited the property's business model.",
          "The client saw value not only in the initial presentation, but also in the ability to keep the rooms looking consistent over a longer operating horizon.",
          "That long-run maintainability was central to the success of the flooring rollout."
        ]
      }
    ],
    technicalDetails: [
      "Modular format supported unit-level refresh and simplified maintenance.",
      "Themed variation helped create a more differentiated long-stay environment."
    ],
    designHighlights: [
      "Independent unit theming within a coherent hospitality brand logic.",
      "Operationally efficient replacement structure for long-stay use."
    ],
    results: [
      "The operator associated the environment with stronger occupancy performance.",
      "Maintenance flexibility improved long-term operational planning."
    ]
  },
  {
    id: "case-10",
    title: "Retail Flagship — Paris Luxury Fashion Boutique",
    subtitle: "A custom-dyed fashion retail carpet installation using high-color-detail patterning to strengthen luxury brand storytelling.",
    category: "wall-to-wall",
    image: "/images/case-resort.jpg",
    description: "A 1,500 m² boutique carpet program for a Paris flagship, using intricate custom pattern design as part of brand presentation and marketing identity.",
    projectSpecs: [
      { label: "Location", value: "Paris, France" },
      { label: "Size", value: "1,500 m²" },
      { label: "Design Focus", value: "Luxury authenticity and brand-led pattern storytelling" }
    ],
    sections: [
      {
        title: "Flagship Retail Brief",
        paragraphs: [
          "The Paris flagship required a floor that could support the brand's luxury narrative rather than sit quietly in the background.",
          "Because the boutique relied heavily on atmosphere and presentation, the carpet was treated as part of the storytelling system alongside lighting, merchandising, and material finishes.",
          "This made custom wall-to-wall design the natural direction for the project."
        ]
      },
      {
        title: "Pattern as Brand Language",
        paragraphs: [
          "The carpet design used controlled custom patterning and color detail to reinforce the boutique's sense of exclusivity and visual authorship.",
          "Rather than applying obvious logos, the project translated brand cues into a more immersive floor expression that felt aligned with luxury retail standards.",
          "That approach helped the space communicate identity without becoming overtly graphic."
        ],
        image: "/images/broadloom-patterned.jpg",
        imageAlt: "Luxury patterned carpet reinforcing boutique brand identity",
        imageCaption: undefined
      },
      {
        title: "Supporting a Premium Shopping Environment",
        paragraphs: [
          "Visual continuity was important because interruptions or utilitarian-looking joints would have weakened the mood of the boutique.",
          "The flooring therefore needed to maintain a polished, fashion-led feel while still supporting real retail traffic and daily operational use.",
          "This balance between atmosphere and serviceability was key to the selection process."
        ]
      },
      {
        title: "Marketing and Experience Outcome",
        paragraphs: [
          "Once installed, the carpet became part of the flagship's broader image language and supported both in-person experience and visual marketing content.",
          "The client treated the floor as a brand asset, not just a fit-out material, because it contributed directly to the boutique's premium emotional impact.",
          "That made the project a strong example of carpet functioning as experiential retail design."
        ]
      }
    ],
    technicalDetails: [
      "High-color-detail custom design suited to luxury boutique presentation.",
      "Aesthetic continuity treated as part of retail brand authenticity."
    ],
    designHighlights: [
      "Pattern became part of the flagship's visual identity.",
      "Luxury retail atmosphere strengthened through custom carpet design."
    ],
    results: [
      "The carpet contributed directly to the flagship's premium brand experience.",
      "The design was incorporated into broader visual marketing content."
    ]
  }
];
