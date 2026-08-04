export type CaseDecisionFact = {
  label: string;
  value: string;
};

export type CaseBuyerQuestion = {
  question: string;
  answer: string;
};

export type CaseSeoProfile = {
  slug: string;
  cardTitle: string;
  h1: string;
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  directAnswer: string;
  decisionFacts: CaseDecisionFact[];
  buyerChecks: string[];
  suitableFor: string[];
  limitations: string[];
  evidenceNote: string;
  buyerQuestions: CaseBuyerQuestion[];
  topics: string[];
  heroImage?: string;
  heroImageAlt?: string;
  sectionImages?: Record<string, { src: string; alt: string }>;
};

export const caseSeoProfiles: Record<string, CaseSeoProfile> = {
  "case-1": {
    slug: "hotel-lobby-axminster-carpet-dubai",
    cardTitle: "Hotel Lobby Axminster Carpet Planning - Dubai",
    h1: "Hotel Lobby Axminster Carpet: Dubai Specification Guide",
    metadataTitle: "Hotel Lobby Axminster Carpet Specification | Dubai Guide",
    metadataDescription: "Plan Axminster hotel lobby carpet for Dubai projects: wool-nylon construction, custom pattern, fire requirements, roll planning and phased installation.",
    eyebrow: "Hospitality Carpet Application Guide",
    directAnswer: "For a large luxury hotel lobby in Dubai, woven Axminster is a strong option when the buyer needs a premium wool-nylon surface, custom pattern control, and coordinated broadloom planning across connected areas. Approval should cover density, pile weight, fire performance, pattern repeat, roll plan, installation phasing, cleaning access, and replacement stock before production.",
    decisionFacts: [
      { label: "Application", value: "Hotel lobby, corridors and connected hospitality zones" },
      { label: "Planning Scale", value: "5,000+ SQM reference scenario" },
      { label: "Construction Direction", value: "Custom woven Axminster broadloom" },
      { label: "Primary Decision", value: "Pattern continuity, fire documents and phased installation" },
    ],
    buyerChecks: ["Confirm 80/20 wool-nylon blend, density and pile weight", "Approve artwork, yarn colors, pattern repeat and strike-off", "Check local fire requirement, roll width and waste allowance", "Reserve attic stock for future local repair"],
    suitableFor: ["Luxury hotel lobbies, corridors and high-presentation hospitality areas", "Projects with approved custom artwork and coordinated roll planning"],
    limitations: ["Small areas below the custom weaving minimum", "Projects requiring immediate stock delivery before design approval"],
    evidenceNote: "This is an application-planning reference based on stated project conditions and carpet specifications, not a named hotel endorsement. Final performance and compliance must be verified against the quoted construction and current test documents.",
    buyerQuestions: [
      { question: "Is Axminster carpet suitable for a high-traffic hotel lobby?", answer: "It can be suitable when density, pile weight, wool-nylon blend, backing, fire performance and maintenance are specified for the expected traffic. The buyer should approve the exact woven construction rather than rely on the Axminster name alone." },
      { question: "What should a buyer send for a custom hotel lobby carpet quote?", answer: "Send the floor plan, total area, design file, color references, traffic zones, fire standard, destination, installation schedule and required delivery date. These inputs allow the supplier to prepare a roll plan, waste estimate, sample route and comparable quotation." },
    ],
    topics: ["hotel lobby carpet", "Axminster carpet", "Dubai hotel flooring", "custom hospitality broadloom"],
  },
  "case-2": {
    slug: "department-store-carpet-tiles-india",
    cardTitle: "Department Store Carpet Tiles Planning - India",
    h1: "Department Store Carpet Tiles: India Retail Specification Guide",
    metadataTitle: "Department Store Carpet Tiles | India Retail Guide",
    metadataDescription: "Plan department store carpet tiles for Indian retail projects: zoning, wayfinding, nylon performance, phased installation and local tile replacement.",
    eyebrow: "Retail Carpet Tile Application Guide",
    directAnswer: "Commercial carpet tiles suit a large department store when the flooring must support department zoning, overnight installation, and local replacement without closing the full sales floor. Buyers should prioritize nylon performance, backing stability, pattern direction, color batch control, rolling-load requirements, fire documents, adhesive compatibility, and spare-tile planning rather than selecting by print alone.",
    decisionFacts: [
      { label: "Application", value: "Department store sales floors and branded departments" },
      { label: "Planning Scale", value: "4,800 SQM reference scenario" },
      { label: "Format", value: "Modular commercial carpet tiles" },
      { label: "Primary Decision", value: "Wayfinding, phased installation and local replacement" },
    ],
    buyerChecks: ["Select nylon or equivalent fiber for traffic and appearance retention", "Confirm backing, adhesive and rolling-load suitability", "Approve zoning colors, pattern direction and batch tolerance", "Order replacement stock for department-level repairs"],
    suitableFor: ["Department stores, branded retail zones and live renovation programs", "Layouts that need visual zoning and replaceable floor modules"],
    limitations: ["Wet retail areas without a compatible flooring system", "Projects that cannot control dye lot, layout direction or subfloor moisture"],
    evidenceNote: "This guide translates a retail planning scenario into procurement checks. Traffic performance, fire compliance and installation suitability remain construction-specific and require current technical documents and site review.",
    buyerQuestions: [
      { question: "Why use carpet tiles in a department store?", answer: "Carpet tiles allow phased installation, local replacement and visual zoning by department. They are especially useful where the store must remain operational and future layout changes are expected." },
      { question: "Which carpet tile fiber is better for busy retail traffic?", answer: "Commercial nylon is commonly preferred for appearance retention in demanding traffic, while polypropylene may suit lower-budget moderate-use zones. The decision should use traffic, cleaning, rolling loads and replacement strategy, not fiber name alone." },
    ],
    topics: ["department store carpet tiles", "retail carpet tiles", "India retail flooring", "commercial nylon carpet"],
  },
  "case-3": {
    slug: "casino-carpet-nylon-broadloom-las-vegas",
    cardTitle: "Casino Nylon Broadloom Carpet Planning - Las Vegas",
    h1: "Casino Carpet: Nylon Broadloom Specification Guide for Las Vegas",
    metadataTitle: "Casino Carpet Nylon Broadloom | Las Vegas Guide",
    metadataDescription: "Specify patterned nylon casino carpet for high-traffic gaming floors: dense construction, soil-concealing design, fire requirements and seam planning.",
    eyebrow: "Casino Flooring Application Guide",
    directAnswer: "A casino gaming floor generally needs dense commercial nylon broadloom or an equivalent contract construction that can retain appearance under continuous traffic while using pattern and color to reduce visible soil. Buyers should verify fiber, pile density, stain treatment, fire standard, acoustic underlay, seam plan, pattern repeat, cleaning access, and replacement strategy before approving artwork.",
    decisionFacts: [
      { label: "Application", value: "Gaming floors, casino circulation and entertainment areas" },
      { label: "Planning Scale", value: "3,500 SQM reference scenario" },
      { label: "Construction Direction", value: "Dense patterned Nylon 6,6 broadloom" },
      { label: "Primary Decision", value: "Appearance retention, soil concealment and seam planning" },
    ],
    buyerChecks: ["Confirm commercial nylon construction and pile density", "Test pattern scale under gaming-floor lighting", "Review fire documents, seams, underlay and cleaning access", "Plan spare material by dye lot and pattern repeat"],
    suitableFor: ["Casinos, entertainment venues and high-traffic patterned interiors", "Projects using custom design to support atmosphere and soil concealment"],
    limitations: ["Areas exposed to standing water or outdoor conditions", "Artwork approval without a physical sample under project lighting"],
    evidenceNote: "The page is a casino specification-planning reference. Any durability, fire or stain-performance decision must be tied to the exact quoted product and verified documentation.",
    buyerQuestions: [
      { question: "What type of carpet is commonly specified for casino floors?", answer: "Dense commercial nylon broadloom is commonly considered because it can combine resilient traffic performance with complex custom patterning. Exact suitability depends on construction, density, backing, fire requirement and maintenance." },
      { question: "Why do casino carpets often use complex patterns?", answer: "Pattern can support the venue's visual identity and make daily soil or minor staining less visible between cleaning cycles. It should still preserve clear circulation and avoid interfering with safety signage." },
    ],
    topics: ["casino carpet", "nylon broadloom carpet", "Las Vegas casino flooring", "patterned commercial carpet"],
  },
  "case-4": {
    slug: "healthcare-hospital-carpet-tiles-singapore",
    cardTitle: "Healthcare Carpet Tiles Planning - Singapore",
    h1: "Healthcare Carpet Tiles: Singapore Hospital Specification Guide",
    metadataTitle: "Healthcare Carpet Tiles | Singapore Hospital Guide",
    metadataDescription: "Plan healthcare carpet tiles for suitable hospital interiors: cleanability, low static, acoustic comfort, fire documents and selective replacement.",
    eyebrow: "Healthcare Flooring Application Guide",
    directAnswer: "Healthcare carpet tiles may suit selected non-clinical hospital interiors where acoustic comfort, low static performance, cleanability, stain resistance, and local replacement are required. They should not be assumed suitable for every care area. Buyers must align the exact construction with infection-control policy, cleaning chemicals, moisture conditions, fire requirements, indoor-air documentation, and facility approval.",
    decisionFacts: [
      { label: "Application", value: "Selected non-clinical hospital and healthcare interiors" },
      { label: "Planning Scale", value: "1,200 SQM reference scenario" },
      { label: "Format", value: "Modular healthcare carpet tile option" },
      { label: "Primary Decision", value: "Cleanability, low static, acoustics and room suitability" },
    ],
    buyerChecks: ["Obtain approval from infection-control and facilities teams", "Confirm cleaning chemical compatibility and stain treatment", "Verify low-static, fire and indoor-air documentation", "Exclude rooms where resilient seamless flooring is required"],
    suitableFor: ["Administrative, consultation, waiting and selected circulation areas after approval", "Healthcare spaces prioritizing acoustics and selective replacement"],
    limitations: ["Operating rooms, wet clinical zones or spaces requiring seamless resilient floors", "Any room not approved by the facility's infection-control protocol"],
    evidenceNote: "This is a planning guide, not a medical or infection-control certification. Room suitability must be approved by the healthcare facility and supported by current product test documents and cleaning protocols.",
    buyerQuestions: [
      { question: "Can carpet tiles be used in hospitals?", answer: "They may be used in selected non-clinical areas when facility policy permits and the product meets cleaning, static, fire and indoor-air requirements. They are not a universal substitute for seamless resilient clinical flooring." },
      { question: "What should be checked before approving healthcare carpet?", answer: "Confirm room classification, infection-control policy, cleaning chemicals, stain resistance, moisture conditions, static performance, fire documents, indoor-air data and replacement procedures with the facility team." },
    ],
    topics: ["healthcare carpet tiles", "hospital carpet", "Singapore healthcare flooring", "low static commercial carpet"],
  },
  "case-5": {
    slug: "multi-floor-office-carpet-tiles-tokyo",
    cardTitle: "Multi-Floor Office Carpet Tiles Planning - Tokyo",
    h1: "Multi-Floor Office Carpet Tiles: Tokyo Workplace Planning Guide",
    metadataTitle: "Multi-Floor Office Carpet Tiles | Tokyo Guide",
    metadataDescription: "Plan office carpet tiles across multiple floors: nylon performance, acoustic comfort, floor identity, phased installation and replacement stock.",
    eyebrow: "Office Flooring Application Guide",
    directAnswer: "For a multi-floor occupied office, modular carpet tiles provide a practical balance of acoustic comfort, floor-by-floor identity, phased installation, and local replacement. Buyers should standardize core construction and backing while controlling color families, dye lots, layout direction, raised-floor compatibility, chair-caster performance, adhesive, and spare stock across the rollout.",
    decisionFacts: [
      { label: "Application", value: "Eight-floor occupied workplace program" },
      { label: "Planning Scale", value: "5,000 SQM reference scenario" },
      { label: "Format", value: "Commercial modular office carpet tiles" },
      { label: "Primary Decision", value: "Standardized performance with floor-level visual identity" },
    ],
    buyerChecks: ["Keep fiber, backing and tile format consistent across floors", "Verify rolling-chair and raised-access-floor requirements", "Control color batches and installation direction", "Allocate spare tiles by floor and color family"],
    suitableFor: ["Corporate offices, coworking floors and occupied refurbishment", "Projects requiring phased work and local tile replacement"],
    limitations: ["Wet service areas without a suitable alternative floor finish", "Rollouts without batch, inventory and floor-by-floor installation control"],
    evidenceNote: "The guide presents a workplace planning model. Acoustic, caster, fire and dimensional-stability claims must be verified for the selected construction and site system.",
    buyerQuestions: [
      { question: "How should carpet tiles be standardized across multiple office floors?", answer: "Use one approved core specification for fiber, backing, size and performance, then vary color or pattern within a controlled family. This simplifies replacement stock, maintenance and future floor changes." },
      { question: "How much spare office carpet tile should a project retain?", answer: "The correct allowance depends on layout, color count, damage risk and future availability. It should be calculated by floor and dye lot during procurement rather than added after installation." },
    ],
    topics: ["office carpet tiles", "multi-floor office flooring", "Tokyo workplace carpet", "modular nylon carpet tiles"],
  },
  "case-6": {
    slug: "airport-terminal-carpet-tiles-singapore",
    cardTitle: "Airport Terminal Carpet Tiles Planning - Singapore",
    h1: "Airport Terminal Carpet Tiles: Singapore High-Traffic Guide",
    metadataTitle: "Airport Terminal Carpet Tiles | Singapore Guide",
    metadataDescription: "Plan airport terminal carpet tiles for passenger circulation: high traffic, wayfinding, overnight replacement, fire requirements and maintenance.",
    eyebrow: "Airport Flooring Application Guide",
    directAnswer: "Airport terminal carpet tiles are appropriate where continuous passenger traffic, rapid local replacement, acoustic comfort, and controlled installation windows matter more than a seamless broadloom appearance. The buyer should verify heavy-commercial construction, rolling-load performance, fire and smoke documents, pattern direction, subfloor and adhesive, overnight work sequencing, cleaning access, and replacement inventory.",
    decisionFacts: [
      { label: "Application", value: "Airport terminal circulation and waiting areas" },
      { label: "Planning Scale", value: "8,000 SQM reference scenario" },
      { label: "Format", value: "Heavy-duty modular public-area carpet" },
      { label: "Primary Decision", value: "Passenger flow, service continuity and local replacement" },
    ],
    buyerChecks: ["Verify heavy traffic and rolling-load performance", "Confirm airport fire, smoke and indoor-air requirements", "Coordinate pattern direction with signs and circulation", "Plan night installation zones and replacement inventory"],
    suitableFor: ["Airport waiting, circulation and selected passenger-facing zones", "Live terminals requiring isolated overnight replacement"],
    limitations: ["Security, baggage or wet zones needing a different flooring system", "Projects without airport-specific fire and operational approval"],
    evidenceNote: "This page is an airport application-planning reference rather than a named terminal endorsement. Final approval depends on the airport authority, exact construction, test reports, installation system and operational method statement.",
    buyerQuestions: [
      { question: "Why are carpet tiles useful in an airport terminal?", answer: "They allow worn or damaged areas to be replaced locally during controlled maintenance windows. They can also contribute acoustic comfort and subtle wayfinding when pattern direction is coordinated with the terminal plan." },
      { question: "What airport carpet documents should a buyer request?", answer: "Request the exact construction sheet, fire and smoke reports required by the authority, rolling-load data where applicable, indoor-air information, cleaning guidance, adhesive recommendation and installation method statement." },
    ],
    topics: ["airport terminal carpet tiles", "high traffic airport carpet", "Singapore airport flooring", "public area carpet"],
    heroImage: "/images/products/public-area/public-area-heavy-duty/01-main-public-area-heavy-duty-carpet.webp",
    heroImageAlt: "Heavy-duty modular carpet for airport terminal passenger circulation",
    sectionImages: {
      "Patterning for Passenger Flow": { src: "/images/products/public-area/public-area-heavy-duty/02-public-area-heavy-duty-installation.webp", alt: "Airport terminal carpet installation with directional pattern planning" },
      "Replacement Logic in a Live Terminal": { src: "/images/products/public-area/public-area-heavy-duty/03-public-area-heavy-duty-detail.webp", alt: "Heavy-duty public-area carpet detail for local terminal replacement" },
    },
  },
  "case-7": {
    slug: "luxury-residential-custom-carpet-mumbai",
    cardTitle: "Luxury Residential Custom Carpet Planning - Mumbai",
    h1: "Luxury Residential Custom Carpet: Mumbai High-Rise Guide",
    metadataTitle: "Luxury Residential Custom Carpet | Mumbai Guide",
    metadataDescription: "Plan custom carpet for luxury high-rise residences: room measurement, wool or nylon construction, motif scale, edge finish and installation.",
    eyebrow: "Luxury Residential Carpet Guide",
    directAnswer: "Custom carpet can support a premium high-rise residence when room measurements, construction, comfort, motif scale, edge treatment, and installation details are approved as one package. Buyers should distinguish fitted broadloom, stair carpet, and loose rugs; verify wool or nylon options, underlay, stain expectations, doorway clearances, pattern placement, sample approval, and future repair material.",
    decisionFacts: [
      { label: "Application", value: "Six luxury high-rise residential units" },
      { label: "Planning Scale", value: "600 SQM reference scenario" },
      { label: "Construction Direction", value: "Custom broadloom, runner or decorative rug by room" },
      { label: "Primary Decision", value: "Comfort, motif placement and room-specific finish" },
    ],
    buyerChecks: ["Separate fitted carpet, stair runner and rug requirements", "Confirm room measurements, doors, joins and edge finishes", "Approve fiber, underlay, color and motif scale physically", "Retain matching material for future localized repair"],
    suitableFor: ["Luxury apartments, villas, suites and premium residential common areas", "Projects needing room-specific colors, crests or decorative motifs"],
    limitations: ["Wet rooms and balconies", "Custom production before final site measurement and sample approval"],
    evidenceNote: "This is a residential design and procurement reference. Final comfort, wear and stain performance depend on the approved construction, underlay, installation and maintenance plan.",
    buyerQuestions: [
      { question: "Should luxury residential carpet use wool or nylon?", answer: "Wool offers a premium natural feel, while nylon can provide strong resilience and easier performance targeting. The best choice depends on room traffic, comfort expectations, maintenance, budget and whether the carpet is fitted or loose-laid." },
      { question: "What must be measured before ordering custom residential carpet?", answer: "Measure finished room dimensions, door clearances, stairs, recesses, seam locations and pattern orientation. The supplier also needs edge treatment, underlay, installation method and final artwork or color approval." },
    ],
    topics: ["luxury residential carpet", "custom carpet Mumbai", "high-rise apartment carpet", "custom wool carpet"],
  },
  "case-8": {
    slug: "university-campus-carpet-tiles-australia",
    cardTitle: "University Campus Carpet Tiles Planning - Australia",
    h1: "University Campus Carpet Tiles: Australia Specification Guide",
    metadataTitle: "University Campus Carpet Tiles | Australia Guide",
    metadataDescription: "Plan university carpet tiles for libraries and student spaces: durability, acoustics, branding, fire standards and phased replacement.",
    eyebrow: "Education Flooring Application Guide",
    directAnswer: "University carpet tiles work well in libraries, learning commons, offices, and student social spaces where acoustics, durability, visual zoning, and local replacement are important. Buyers should map use intensity by area and confirm commercial fiber, backing, fire requirement, indoor-air data, chair-caster use, stain strategy, installation windows, color batches, and spare-tile inventory.",
    decisionFacts: [
      { label: "Application", value: "Campus learning and high-use student spaces" },
      { label: "Planning Scale", value: "4,200 SQM reference scenario" },
      { label: "Format", value: "Durable modular education carpet tiles" },
      { label: "Primary Decision", value: "Acoustics, daily wear, zoning and replacement" },
    ],
    buyerChecks: ["Map traffic and furniture use by campus zone", "Verify fire, indoor-air and cleaning requirements", "Use branding without reducing wayfinding clarity", "Plan installation around academic occupancy and retain spares"],
    suitableFor: ["Libraries, learning commons, offices and student collaboration areas", "Education projects needing acoustic comfort and local replacement"],
    limitations: ["Laboratories, food-preparation or wet areas requiring another finish", "Projects without campus fire, indoor-air and maintenance approval"],
    evidenceNote: "This guide is an education flooring planning reference. Product suitability must be verified for each campus zone and supported by the exact technical and environmental documentation requested by the institution.",
    buyerQuestions: [
      { question: "Where are carpet tiles most useful on a university campus?", answer: "They are commonly useful in libraries, teaching offices, learning commons and student collaboration areas where acoustics and flexible replacement matter. Wet, laboratory and food-service zones usually require different flooring." },
      { question: "How should campus branding be used in carpet design?", answer: "Use controlled color zones, directional accents or selected motifs to support identity and wayfinding. Branding should not create visual confusion, complicate replacement stock or override performance requirements." },
    ],
    topics: ["university carpet tiles", "education carpet tiles", "Australia campus flooring", "library carpet"],
  },
  "case-9": {
    slug: "extended-stay-hotel-carpet-tiles-south-korea",
    cardTitle: "Extended-Stay Hotel Carpet Tiles - South Korea",
    h1: "Extended-Stay Hotel Carpet Tiles: South Korea Planning Guide",
    metadataTitle: "Extended-Stay Hotel Carpet Tiles | South Korea Guide",
    metadataDescription: "Plan modular carpet for extended-stay hotels: guest-unit comfort, stain strategy, local replacement, batch control and operating continuity.",
    eyebrow: "Extended-Stay Hospitality Guide",
    directAnswer: "Carpet tiles can suit extended-stay guestrooms and circulation areas when operators need residential comfort with the ability to replace individual damaged modules between stays. Buyers should confirm guest-area construction, stain and cleaning expectations, acoustic backing, layout direction, underfloor conditions, batch consistency, spare stock, installation access, and whether broadloom is preferable in premium zones.",
    decisionFacts: [
      { label: "Application", value: "45 extended-stay units and hospitality circulation" },
      { label: "Planning Scale", value: "2,800 SQM reference scenario" },
      { label: "Format", value: "Modular hospitality carpet tiles" },
      { label: "Primary Decision", value: "Guest comfort with unit-level replacement flexibility" },
    ],
    buyerChecks: ["Separate guestroom and corridor performance requirements", "Confirm stain treatment, acoustics and cleaning process", "Control layout direction, batches and unit-level spare stock", "Compare modular tile and broadloom appearance before approval"],
    suitableFor: ["Extended-stay hotels, serviced apartments and phased unit refurbishment", "Operators needing room-by-room replacement between occupancies"],
    limitations: ["Premium seamless interiors where broadloom appearance is mandatory", "Wet kitchenette or bathroom zones requiring resilient flooring"],
    evidenceNote: "This is an operating-model planning reference. Guest comfort, stain performance and acoustics depend on the selected tile, backing, subfloor and installation system.",
    buyerQuestions: [
      { question: "Are carpet tiles suitable for extended-stay hotel guestrooms?", answer: "They can be suitable when acoustic comfort, appearance, cleaning and replacement strategy are properly specified. Operators often value the ability to replace a local damaged area without removing the whole room floor." },
      { question: "Should an extended-stay hotel choose carpet tiles or broadloom?", answer: "Choose carpet tiles for modular maintenance and phased refurbishment; consider broadloom where a seamless premium appearance is the priority. Many projects use different constructions by guestroom, corridor and public area." },
    ],
    topics: ["extended stay hotel carpet", "hotel carpet tiles", "South Korea hospitality flooring", "serviced apartment carpet"],
  },
  "case-10": {
    slug: "luxury-retail-custom-carpet-paris",
    cardTitle: "Luxury Retail Custom Carpet Planning - Paris",
    h1: "Luxury Retail Custom Carpet: Paris Flagship Specification Guide",
    metadataTitle: "Luxury Retail Custom Carpet | Paris Flagship Guide",
    metadataDescription: "Plan custom carpet for a luxury retail flagship: brand pattern, color approval, traffic performance, fire documents, seams and installation timing.",
    eyebrow: "Luxury Retail Flooring Guide",
    directAnswer: "A luxury retail flagship can use custom broadloom or made-to-order carpet as part of its brand environment, but the design must still perform under entrance traffic, display changes, cleaning, and public-access rules. Buyers should approve fiber, density, fire documents, color standard, pattern scale, seam placement, edge transitions, lighting sample, installation window, and replacement material.",
    decisionFacts: [
      { label: "Application", value: "Luxury flagship retail and boutique presentation" },
      { label: "Planning Scale", value: "1,500 SQM reference scenario" },
      { label: "Construction Direction", value: "Custom patterned commercial broadloom" },
      { label: "Primary Decision", value: "Brand expression balanced with traffic and replacement" },
    ],
    buyerChecks: ["Review entrance and display-zone traffic separately", "Approve color and pattern under actual retail lighting", "Confirm fire, seams, edge transitions and cleaning", "Reserve matching carpet for display changes and repair"],
    suitableFor: ["Luxury boutiques, flagship stores and branded hospitality retail", "Projects where a custom floor pattern supports brand presentation"],
    limitations: ["Entrance zones without adequate soil-control planning", "Artwork approval without traffic, seam and replacement review"],
    evidenceNote: "This page is a flagship retail specification reference, not a named brand endorsement. Final visual and performance results depend on the approved carpet, lighting, installation and maintenance plan.",
    buyerQuestions: [
      { question: "How can custom carpet support a luxury retail brand?", answer: "Color, pattern scale and motif placement can reinforce the interior identity and guide movement through display zones. The design should remain serviceable, replaceable and compatible with public-access requirements." },
      { question: "What sample should a luxury retail buyer approve?", answer: "Approve a physical sample or strike-off showing the actual color, pattern scale, pile and construction under project lighting. Digital artwork alone cannot confirm surface texture or lighting response." },
    ],
    topics: ["luxury retail carpet", "custom carpet Paris", "flagship store carpet", "custom commercial broadloom"],
  },
  "case-11": {
    slug: "reusable-exhibition-carpet-expo-booths-johannesburg",
    cardTitle: "Reusable Exhibition Carpet for Expo Booths - Johannesburg",
    h1: "Reusable Exhibition Carpet: Expo Booth Specification Guide",
    metadataTitle: "Reusable Exhibition Carpet for Expo Booths | Buyer Guide",
    metadataDescription: "Specify reusable exhibition carpet for expo booths: needle-punch pile, backing, fire rating, roll dimensions, installation and multi-show packing.",
    eyebrow: "Exhibition Flooring Procurement Guide",
    directAnswer: "For an expo booth used across several shows, specify a low-pile needle-punched exhibition carpet with backing and fire documentation matched to the venue rather than buying disposable felt by color alone. Confirm roll width, cut plan, edge finish, tape or adhesive, cleaning, packing, storage, reuse cycles, print requirements, delivery deadline, and venue rules before ordering.",
    decisionFacts: [
      { label: "Application", value: "Expo booths, convention halls and temporary event floors" },
      { label: "Use Model", value: "One-time or multi-show reuse" },
      { label: "Construction Direction", value: "Low-pile needle-punched exhibition carpet" },
      { label: "Primary Decision", value: "Fire approval, roll plan, installation and reuse logistics" },
    ],
    buyerChecks: ["Obtain the venue's exact fire-document requirement", "Confirm roll width, booth cut plan and edge treatment", "Select installation tape or adhesive for the subfloor", "Plan cleaning, rolling, labeling and storage between shows"],
    suitableFor: ["Trade-show booths, exhibition halls and temporary branded event areas", "Programs that need reusable rolls and predictable installation"],
    limitations: ["Permanent heavy-commercial interiors unless separately specified", "Venues where the proposed fire report or fixing method is not accepted"],
    evidenceNote: "This is a technical procurement reference for exhibition flooring. Fire acceptance, reuse life and installation method depend on the exact construction, venue rules, handling and storage conditions.",
    buyerQuestions: [
      { question: "Can exhibition carpet be reused for multiple trade shows?", answer: "Yes, when pile, backing, edge condition, installation method, cleaning and storage are selected for reuse. Disposable felt and reusable backed exhibition carpet should be treated as different products." },
      { question: "What fire document is needed for expo booth carpet?", answer: "The required document depends on the venue and country. Ask the organizer for the exact standard and acceptance format, then match the quoted construction and report before shipment." },
    ],
    topics: ["reusable exhibition carpet", "expo booth carpet", "needle punch event carpet", "Johannesburg exhibition flooring"],
  },
  "case-12": {
    slug: "gold-mining-sluice-carpet-peru",
    cardTitle: "Gold Mining Sluice Carpet Planning - Peru",
    h1: "Gold Mining Sluice Carpet: Peru Roll and Container Guide",
    metadataTitle: "Gold Mining Sluice Carpet | Roll & Container Guide",
    metadataDescription: "Specify gold mining sluice carpet by pile weight, roll size, flow and feed conditions, backing durability, samples, FOB terms and container loading.",
    eyebrow: "Gold Recovery Mat Procurement Guide",
    directAnswer: "Gold-mining sluice carpet should be selected by particle size, feed rate, water velocity, riffle system, cleaning frequency, pile weight, backing strength, and roll dimensions rather than by thickness alone. Bulk buyers should test stocked weights first, match roll length to common sluice sizes, confirm wet handling and UV conditions, and calculate container loading from the exact rolled diameter.",
    decisionFacts: [
      { label: "Application", value: "Alluvial gold sluices and bulk distributor programs" },
      { label: "Material Direction", value: "Polyester entrapment pile with reinforced backing" },
      { label: "Standard Roll Reference", value: "2 m × 35 m; custom lengths available" },
      { label: "Primary Decision", value: "Recovery conditions, roll fit and container efficiency" },
    ],
    buyerChecks: ["Describe feed size, flow velocity and sluice construction", "Compare stocked pile weights with field samples", "Match roll width and length to equipment in the target market", "Confirm FOB specification, packing and 40HC loading calculation"],
    suitableFor: ["Alluvial mining operations, sluice-box users and regional distributors", "Bulk programs needing custom roll length and container planning"],
    limitations: ["Applications where field conditions have not been described or sampled", "Claims of one universal pile weight for every recovery system"],
    evidenceNote: "This is a field-specification and logistics guide, not a guaranteed recovery-rate claim. Gold capture depends on the complete sluice system, operating conditions, feed preparation and cleaning method as well as the mat.",
    buyerQuestions: [
      { question: "Which sluice carpet weight gives the best gold recovery?", answer: "There is no universal best weight. Lighter or heavier pile changes flow interaction, holding capacity and cleaning frequency, so selection should be tested against particle size, water velocity and the full sluice system." },
      { question: "Why should a distributor customize gold carpet roll length?", answer: "Matching roll length to common local sluice sizes reduces off-cut waste and improves resale economics. The change also affects rolled diameter and container loading, so it should be calculated before the order is fixed." },
    ],
    topics: ["gold mining sluice carpet", "gold recovery mat", "miners moss alternative", "Peru alluvial mining"],
  },
  "case-13": {
    slug: "gold-mining-carpet-colombia-distributor-guide",
    cardTitle: "Gold Mining Carpet Distributor Planning - Colombia",
    h1: "Gold Mining Carpet: Colombia Distributor Roll and Sample Guide",
    metadataTitle: "Gold Mining Carpet Colombia | Distributor Roll Guide",
    metadataDescription: "Plan gold mining carpet for Colombia distributors: stocked weights, sample testing, custom roll length, wet handling, FOB packing and container loading.",
    eyebrow: "Gold Recovery Mat Procurement Guide",
    directAnswer: "For Colombia gold-recovery distributors, gold mining carpet should be specified by feed size, sluice width, water flow, stocked pile weight, backing strength, roll length, packing volume and sample route. Buyers should test 1400, 1700 and 2100 g/m² samples before committing to a custom weight, then align roll dimensions with common local sluice equipment to reduce off-cut waste.",
    decisionFacts: [
      { label: "Application", value: "Alluvial gold sluices and distributor resale programs" },
      { label: "Country Focus", value: "Colombia mining supply and regional reselling" },
      { label: "Material Direction", value: "Polyester entrapment pile with reinforced anti-tear backing" },
      { label: "Primary Decision", value: "Sample validation, roll fit and container efficiency" },
    ],
    buyerChecks: ["Compare stocked pile weights before requesting a custom run", "Match roll width and length to local sluice box sizes", "Confirm wet lifting, backing tear resistance and cleaning frequency", "Calculate rolled diameter before confirming 40HC loading"],
    suitableFor: ["Colombia mining-supply distributors selling into alluvial recovery users", "Bulk buyers needing repeatable roll sizes, packing data and sample-based selection"],
    limitations: ["Projects asking for a guaranteed recovery rate without field testing", "Small one-off orders where container economics and custom roll planning are not needed"],
    evidenceNote: "This is a procurement-planning reference for gold-recovery matting. Capture performance depends on the complete sluice system, feed preparation, water velocity, operator cleaning method and selected mat construction.",
    buyerQuestions: [
      { question: "Should Colombia distributors start with stocked or custom gold mining carpet weights?", answer: "Start with stocked 1400, 1700 and 2100 g/m² samples. They give a fast comparison of fibre hold, drainage, cleaning and backing feel before paying for a custom-weight production setup." },
      { question: "What information is needed for a Colombia gold carpet quotation?", answer: "Send target roll width and length, expected order quantity, destination port, preferred pile weight, feed conditions, color preference and whether the order is for direct mine use or distributor resale." },
    ],
    topics: ["gold mining carpet Colombia", "gold recovery mat", "sluice carpet distributor", "alluvial mining carpet"],
    heroImage: "/images/products/gold-mining-carpet-mat/10-gold-washing-mining-site-application.webp",
    heroImageAlt: "Gold mining carpet mat used in an alluvial recovery washing setup for Colombia distributor planning",
  },
  "case-14": {
    slug: "office-carpet-tiles-canada-phased-renovation-guide",
    cardTitle: "Office Carpet Tiles Phased Renovation - Canada",
    h1: "Office Carpet Tiles: Canada Phased Renovation Procurement Guide",
    metadataTitle: "Office Carpet Tiles Canada | Phased Renovation Guide",
    metadataDescription: "Plan office carpet tiles for Canada projects: 50x50 modular format, low-disruption installation, attic stock, winter delivery and replacement strategy.",
    eyebrow: "Office Carpet Tile Procurement Guide",
    directAnswer: "For Canada office renovation projects, 50x50 commercial carpet tiles are a practical choice when the buyer needs phased installation, local replacement, stable backing, neutral design, acoustic comfort and clear spare-tile planning. The quotation should define yarn, backing, tile size, carton quantity, attic stock, winter delivery timing, adhesive compatibility and replacement rules before the purchase order is fixed.",
    decisionFacts: [
      { label: "Application", value: "Corporate office floors, meeting rooms and circulation corridors" },
      { label: "Country Focus", value: "Canada commercial renovation and tenant-improvement projects" },
      { label: "Format", value: "50 x 50 cm modular commercial carpet tiles" },
      { label: "Primary Decision", value: "Phased installation, acoustic comfort and long-term replacement" },
    ],
    buyerChecks: ["Confirm tile construction, backing stability and traffic class", "Reserve attic stock by color batch for future repairs", "Plan delivery timing around winter weather and site access", "Check adhesive or tackifier compatibility with the existing slab"],
    suitableFor: ["Office renovations that must stay partially occupied during installation", "Property managers needing easy replacement by tile rather than full-floor removal"],
    limitations: ["Areas requiring a single seamless broadloom appearance", "Sites where subfloor moisture or adhesive residue has not been checked"],
    evidenceNote: "This is a procurement and installation planning guide for office carpet tile projects. Final suitability should be confirmed against site conditions, traffic level, fire documents, adhesive system and maintenance plan.",
    buyerQuestions: [
      { question: "Why use carpet tiles instead of broadloom for Canada office renovation?", answer: "Carpet tiles allow phased work, local replacement and easier attic-stock control. This matters when offices remain occupied or when future tenant changes may require isolated repairs." },
      { question: "How much attic stock should an office carpet tile buyer keep?", answer: "Many projects reserve extra tiles from the same color batch for future repairs. The exact percentage depends on floor area, layout complexity, expected churn and whether the design uses multiple colors." },
    ],
    topics: ["office carpet tiles Canada", "commercial carpet tiles", "50x50 carpet tiles", "phased office renovation flooring"],
    heroImage: "/images/products/nylon-office-carpet-tile/01-hero-commercial-office.webp",
    heroImageAlt: "Commercial office carpet tiles used for a Canada phased renovation planning guide",
  },
};

export function getCaseSeoProfile(caseId: string) {
  return caseSeoProfiles[caseId];
}

export function caseIdFromRoute(routeValue: string) {
  if (caseSeoProfiles[routeValue]) return routeValue;
  return Object.entries(caseSeoProfiles).find(([, profile]) => profile.slug === routeValue)?.[0];
}

export function projectPath(caseId: string) {
  const profile = getCaseSeoProfile(caseId);
  return `/projects/${profile?.slug ?? caseId}`;
}
