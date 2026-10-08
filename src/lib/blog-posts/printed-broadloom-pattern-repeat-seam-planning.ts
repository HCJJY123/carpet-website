import type { BlogPost } from "@/lib/blog-data";
import { contentGrowthAssets, illustrationCaption } from "@/lib/content-growth-assets";

const hero = contentGrowthAssets.P08;

export const printedBroadloomPatternRepeatGuide: BlogPost = {
  slug: "printed-broadloom-pattern-repeat-seam-planning",
  title: "Printed Broadloom Carpet: Pattern Repeat and Seam Planning Before Ordering",
  subtitle: "Connect artwork, roll direction, seams and quantity before releasing a commercial carpet order.",
  painPoint: "A design image and net floor area leave unanswered questions about pattern alignment, cutting allowance and the final order quantity.",
  seoTitle: "Printed Broadloom: Pattern Repeat & Seam Planning | Vcarpets",
  description: "Check pattern repeat, roll direction, seams and order quantity before approving printed broadloom. A practical guide for commercial carpet project buyers.",
  keywords: ["printed broadloom pattern repeat", "carpet seam planning", "patterned carpet quantity", "broadloom cutting plan", "printed carpet artwork approval"],
  date: "2026-10-08",
  dateModified: "2026-10-08",
  author: "Vcarpets Editorial Team",
  category: "Buying Guide",
  image: hero.src,
  imageAlt: hero.alt,
  h1Image: hero.src,
  h1ImageAlt: hero.alt,
  h1ImageCaption: illustrationCaption,
  h1ImageFit: "contain",
  h1ImageAspectRatio: `${hero.width} / ${hero.height}`,
  excerpt: "A buyer's planning checklist for repeat dimensions, roll format, seam layout, sample approval and a comparable printed broadloom RFQ.",
  suggestedLinks: [
    { label: "Review Printed Carpet Options", href: "/products/printed-carpet" },
    { label: "Broadloom Waste Calculator: Preliminary Planning", href: "/tools/broadloom-carpet-waste-calculator" },
    { label: "Commercial Carpet Sample Approval Checklist", href: "/blog/commercial-carpet-sample-approval-checklist" },
    { label: "Carpet Printing: Design to Installation", href: "/blog/carpet-printing-technology-design-to-installation-guide" },
    { label: "Send Your Printed Broadloom Project Brief", href: "/contact?product=Printed%20Broadloom%20Carpet#quote-form" },
    { label: "CRI: Commercial Carpet Installation Information", href: "https://carpet-rug.org/carpet-for-business/carpet-installation-information/" },
    { label: "Joy Carpets: Installation and Care", href: "https://joycarpets.com/resources/installation-and-care/" },
    { label: "Industry Example: Repeat and Width on a Product Record", href: "https://joycarpets.com/carpet/cinematic" },
  ],
  sections: [
    {
      title: "Approve the Layout Together with the Pattern",
      paragraphs: [
        "For a patterned broadloom order, approve the design together with its repeat, roll direction and installation layout. Net floor area alone is not enough to establish the final purchase quantity or where the pattern will join.",
        "This guide is for commercial project buyers preparing printed carpet for hospitality and other patterned interiors. It organises the questions for the supplier, designer and installer; the nominated product's installation instructions and a professional cutting plan remain necessary.",
      ],
    },
    {
      title: "Four Measurements to Keep Separate",
      paragraphs: [],
      blocks: [{ type: "table", headers: ["Measurement", "What it describes", "Purchasing implication"], rows: [
        ["Net floor area", "Measured area intended to receive carpet", "Excludes layout-dependent cuts and retained spare material"],
        ["Roll width", "Confirmed width of the nominated carpet", "Determines possible strip arrangements"],
        ["Pattern repeat", "Distance over which the design repeats across and along the roll", "Affects alignment between adjacent pieces"],
        ["Purchase quantity", "Quantity ordered after layout and allowance review", "Needs a written basis beyond net area alone"],
      ], note: "Also distinguish gross roll length from usable length, and installation allowance from spare stock retained for later repairs." }],
    },
    {
      title: "Start with a Dimensioned Drawing",
      paragraphs: [
        "Identify rooms, circulation routes, doorways, columns and transitions. Mark the principal viewing direction and any change in design. Separate zones with different shapes, installation access or flooring interfaces instead of quoting one undifferentiated area.",
        "If the plan is preliminary, label its status in the RFQ. Record the drawing revision used for the estimate. Final purchasing should follow the approved geometry and installation review; a later drawing revision can change the scope even when the total area looks similar.",
      ],
    },
    {
      title: "Record the Repeat in Both Directions",
      paragraphs: [
        "A motif can repeat differently across the roll and along its length. Ask for both dimensions and their units, as well as the roll format proposed for the selected construction. A pattern image without these values leaves the join between adjacent strips undefined.",
        "Joy Carpets publishes repeat and width separately on its Cinematic broadloom product record. This is an industry example of the information to request, not a specification or availability statement for Vcarpets products.",
        "Record the artwork version, repeat dimensions, orientation and colour reference. A border, centrepiece or other placement-dependent graphic needs a layout review before its position is fixed. Ask which changes require revised artwork or another approval sample.",
      ],
    },
    {
      title: "Review Joins Before Approving Artwork",
      paragraphs: [
        "Ask the installer to show strip direction, proposed joins, transitions and cuts. Review the visual design against that plan. Where motifs need alignment, agree how the join will be assessed and request the product-specific tolerances and instructions.",
        "Doors, recesses, room width and pattern orientation can change the layout. A rendering does not prove a seam-free installation. Agree how adjacent zones meet before material is cut.",
        "The Carpet and Rug Institute's commercial installation information calls for accurate measurements and drawings showing seams and carpet direction, and links to CRI 104. Joy Carpets also publishes patterned-broadloom instructions and recommends a certified installation contractor for its products. Use these as industry references alongside the nominated carpet and attachment-system instructions.",
      ],
    },
    {
      title: "Why a Flat Waste Percentage Can Mislead",
      paragraphs: [
        "Two rooms with the same net area can require different quantities because their shapes, strip arrangements and pattern positions differ. An initial percentage can help estimate a budget; a cutting schedule must resolve the actual layout.",
        "The broadloom waste calculator linked below is a preliminary RFQ tool. It depends on the area, allowance and roll inputs entered. It does not resolve motif placement, seams, repeated rooms or usable offcuts automatically.",
        "For a simple arithmetic illustration, one piece cut 5 m long from an assumed 4 m wide roll represents 20 m². That assumption is not a Vcarpets width promise or a quantity recommendation for a real room. Pattern alignment, trimming and the approved layout still need review.",
        "Ask the cutting plan to identify where offcuts can genuinely be reused. Area alone is insufficient if their direction, pattern position or dimensions do not fit the receiving zone. Record replacement stock separately so it is not counted as installation allowance twice.",
      ],
    },
    {
      title: "Use the Sample to Approve More Than Colour",
      paragraphs: [
        "Review the physical sample under representative lighting and record the fibre, pile appearance, backing and quoted construction. Distinguish a small colour swatch from a pattern approval large enough to show the agreed scale.",
        "The artwork file, sample reference and order schedule should identify the same design version. Ask whether the proposed sample uses the nominated construction and printing route. A visual match alone does not confirm the backing, traffic suitability or technical documents.",
        "State what the sample is intended to approve and the target review date. Request confirmation of sample availability, development and courier costs, and preparation timing. A late colour or repeat change may require another review and affect quantity or scheduling.",
      ],
    },
    {
      title: "Keep Performance and Installation Review Separate",
      paragraphs: [
        "A suitable-looking pattern does not establish traffic performance, acoustic results or fire compliance. Request documents for the exact proposed construction. Provide the project's required test method and acceptance criteria so the document review addresses the actual requirement.",
        "Ask the local installer to confirm subfloor condition, moisture assessment, attachment compatibility, storage, acclimation and access. Agree the parties responsible for technical acceptance. A decorative image should never be used as an installation specification or certification record.",
      ],
    },
    {
      title: "Ask for a Comparable Quote and Approval Schedule",
      paragraphs: [],
      blocks: [
        { type: "table", headers: ["Question", "Information to request"], rows: [
          ["What affects the price?", "Separate construction, design development, sample work, confirmed order quantity and packing assumptions"],
          ["What is the minimum order?", "Confirm MOQ for the specific construction and each colour or design; do not assume a generic shop MOQ applies"],
          ["When can production start?", "Identify required drawing, artwork, sample and commercial approvals, plus the schedule start condition"],
          ["When must the carpet arrive?", "Separate sample review, production-ready date, freight, customs and site receiving milestones"],
          ["Where is it being shipped?", "State the actual receiving city or port and any buyer-appointed forwarder; buyer location can differ from cargo destination"],
          ["What does the quotation include?", "Confirm named shipment point, trade term, packing dimensions, gross weight and exclusions in writing"],
        ] },
        { type: "paragraph", text: "For alternatives, ask for separate construction and approval records. A lower unit price is not a like-for-like offer if fibre, backing, pattern development, order quantity or transport scope differs. If a deadline is fixed, share it before sample development and request a feasibility review rather than assuming an estimate is a delivery commitment." },
      ],
    },
    {
      title: "Keep One Approval Record Before Ordering",
      paragraphs: [],
      blocks: [{ type: "list", ordered: true, items: [
        { text: "Dimensioned drawing, measured-area schedule and revision used for pricing." },
        { text: "Selected construction, backing and confirmed roll format." },
        { text: "Artwork version, colour reference, repeat and direction." },
        { text: "Seam and cutting plan reviewed by the installer." },
        { text: "Physical sample reference, approval conditions and relevant document review." },
        { text: "Order quantity, allowance basis and separately agreed replacement stock." },
        { text: "Packing, shipment point, quotation scope and confirmed approval-to-production schedule." },
      ] }],
    },
    {
      title: "Buyer Questions Before Sending the RFQ",
      paragraphs: [],
      blocks: [{ type: "list", items: [
        { title: "Can I approve from a screen image?", text: "Use it to discuss direction and layout. Final visual approval should also consider the physical sample and recorded construction. Screens and small images do not establish the installed colour or floor-scale result." },
        { title: "Can I use ten percent waste for every project?", text: "There is no universal allowance for every layout. Have the installer review width, geometry, repeat, joins and offcut use before fixing the quantity." },
        { title: "Does broadloom mean there will be no seams?", text: "Broadloom is a roll format. Room dimensions and the approved layout determine whether and where joins are needed." },
        { title: "What if the design is not final?", text: "Send application, destination, approximate area, current drawing, pattern reference and target date. Identify undecided items so the preliminary proposal remains distinct from a purchase specification." },
        { title: "Does a sample approve every material alternative?", text: "Record each nominated construction and sample separately. Similar colour or artwork does not establish equivalent material or performance." },
      ] }],
    },
    {
      title: "Send a Useful Printed Broadloom Brief to Vcarpets",
      paragraphs: [
        "Use the project quotation link below. The existing form requires company, business email, product type and quantity or area. Add the intended use, destination and target receiving date; phone and WhatsApp details are optional.",
        "Summarise the current floor plan, pattern reference, repeat information, sample needs and required documents. Mark estimates and unapproved artwork as preliminary. The form has no file-upload field: mention that drawings are available, then arrange file exchange through the sales conversation or sales@vcarpets.com.",
        "Ask for a written proposal identifying construction, quantity basis, MOQ, sample steps, shipment scope and production timing. The printed carpet range below provides a product shortlist; final suitability and availability need confirmation for the nominated configuration.",
      ],
    },
    {
      title: "Industry References and Scope",
      paragraphs: [
        "The CRI installation information, Joy Carpets installation resources and example product record linked below were reviewed on 8 October 2026. They explain industry planning considerations and do not certify Vcarpets products, establish a supplier relationship or replace project-specific instructions.",
      ],
    },
  ],
};
