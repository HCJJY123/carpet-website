import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const dataFile = path.join(root, "src/lib/data.ts");
const outputDir = path.join(root, "docs/ai-commerce");
const siteUrl = "https://www.vishomecarpet.com";

function loadSiteData() {
  const source = fs.readFileSync(dataFile, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText;
  const compiledModule = { exports: {} };
  new Function("exports", "module", compiled)(compiledModule.exports, compiledModule);
  return compiledModule.exports;
}

function csvCell(value) {
  const text = value == null ? "" : String(value);
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(columns, rows) {
  return [columns.join(","), ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(","))].join("\n") + "\n";
}

function productUrl(product) {
  return `${siteUrl}/products/${product.category}/${product.id}`;
}

function assetUrl(assetPath) {
  return `${siteUrl}${assetPath.startsWith("/") ? assetPath : `/${assetPath}`}`;
}

function itemId(productId) {
  return `VISHOME${productId.replace(/[^a-z0-9]/gi, "").toUpperCase()}`.slice(0, 100);
}

function productCategory(category) {
  if (category === "carpet-tiles") return "Home & Garden > Decor > Rugs & Carpets > Commercial Carpet Tiles";
  if (category === "wall-to-wall") return "Home & Garden > Decor > Rugs & Carpets > Wall-to-Wall Commercial Carpet";
  return "Home & Garden > Decor > Rugs & Carpets > Specialty Commercial Carpet";
}

function imageFormat(imagePath) {
  return path.extname(imagePath).replace(".", "").toLowerCase() || "unknown";
}

const { products, brandInfo } = loadSiteData();
fs.mkdirSync(outputDir, { recursive: true });

const feedColumns = [
  "is_eligible_search",
  "is_eligible_checkout",
  "item_id",
  "mpn",
  "title",
  "description",
  "url",
  "brand",
  "condition",
  "product_category",
  "material",
  "image_url",
  "additional_image_urls",
  "price",
  "availability",
  "listing_has_variations",
  "variant_dict",
  "seller_name",
  "seller_url",
  "return_policy",
  "target_countries",
  "store_country",
];

const feedRows = products.map((product) => ({
  is_eligible_search: "false",
  is_eligible_checkout: "false",
  item_id: itemId(product.id),
  mpn: itemId(product.id).slice(0, 70),
  title: product.name.slice(0, 150),
  description: (product.longDescription || product.description).slice(0, 5000),
  url: productUrl(product),
  brand: "Vishomecarpet",
  condition: "new",
  product_category: productCategory(product.category),
  material: product.spec.material.slice(0, 100),
  image_url: assetUrl(product.image),
  additional_image_urls: (product.gallery || []).map((image) => assetUrl(image.src)).join(","),
  price: "",
  availability: "unknown",
  listing_has_variations: String(Boolean(product.spec.colors.length || /option|custom/i.test(product.spec.material))),
  variant_dict: JSON.stringify({
    material: product.spec.material,
    size: product.spec.size,
    ...(product.spec.colors.length ? { colors: product.spec.colors.map((color) => color.name).join(" | ") } : {}),
  }),
  seller_name: brandInfo.name.slice(0, 70),
  seller_url: siteUrl,
  return_policy: "",
  target_countries: "US",
  store_country: "CN",
}));

const gapColumns = [
  "item_id",
  "product",
  "url",
  "current_fob_price_range",
  "feed_price",
  "price_status",
  "feed_availability",
  "availability_status",
  "main_image_format",
  "image_status",
  "return_policy_status",
  "store_country_status",
  "is_eligible_search",
  "blocking_fields",
  "recommended_action",
];

const gapRows = products.map((product) => {
  const format = imageFormat(product.image);
  const blockers = ["price", "return_policy"];
  if (!["jpg", "jpeg", "png"].includes(format)) blockers.push("image_url_format");
  blockers.push("store_country_program_eligibility", "availability_confirmation");

  return {
    item_id: itemId(product.id),
    product: product.name,
    url: productUrl(product),
    current_fob_price_range: product.fobPrice?.display || "Not published",
    feed_price: "",
    price_status: product.fobPrice
      ? "BLOCKED - site has a range; OpenAI requires one accurate number plus currency"
      : "BLOCKED - no price field available",
    feed_availability: "unknown",
    availability_status: "REVIEW - confirm in_stock, pre_order, backorder, or keep unknown",
    main_image_format: format,
    image_status: ["jpg", "jpeg", "png"].includes(format)
      ? "READY"
      : "BLOCKED - stable file-upload schema currently specifies JPEG/PNG",
    return_policy_status: "BLOCKED - no dedicated public return-policy URL confirmed",
    store_country_status: "BLOCKED - truthful store country is CN while the current stable schema lists US",
    is_eligible_search: "false",
    blocking_fields: blockers.join(" | "),
    recommended_action:
      "Confirm one sellable unit and exact price; confirm availability; publish return policy; create JPEG/PNG feed image; confirm eligibility for a China-based B2B manufacturer before enabling search.",
  };
});

const validation = {
  generatedAt: new Date().toISOString(),
  sourceProducts: products.length,
  draftRows: feedRows.length,
  searchEligibleRows: feedRows.filter((row) => row.is_eligible_search === "true").length,
  rowsMissingPrice: feedRows.filter((row) => !row.price).length,
  rowsMissingReturnPolicy: feedRows.filter((row) => !row.return_policy).length,
  rowsWithUnsupportedImageFormat: gapRows.filter((row) => row.image_status.startsWith("BLOCKED")).length,
  rowsWithUnknownAvailability: feedRows.filter((row) => row.availability === "unknown").length,
};

fs.writeFileSync(path.join(outputDir, "openai-product-feed-draft.csv"), toCsv(feedColumns, feedRows));
fs.writeFileSync(path.join(outputDir, "openai-price-availability-gaps.csv"), toCsv(gapColumns, gapRows));
fs.writeFileSync(path.join(outputDir, "openai-product-feed-validation.json"), `${JSON.stringify(validation, null, 2)}\n`);

const summary = `# OpenAI Product Feed Draft Validation - 2026-07-30

## Status

- Source products: ${validation.sourceProducts}
- Draft feed rows: ${validation.draftRows}
- Search-eligible rows: ${validation.searchEligibleRows}
- Rows missing one exact price: ${validation.rowsMissingPrice}
- Rows using unknown availability: ${validation.rowsWithUnknownAvailability}
- Rows missing a public return-policy URL: ${validation.rowsMissingReturnPolicy}
- Rows whose main image is not JPEG/PNG: ${validation.rowsWithUnsupportedImageFormat}

The feed is intentionally a non-submittable draft. All rows use \`is_eligible_search=false\` and \`is_eligible_checkout=false\` so incomplete commercial data cannot be published accidentally.

## Blocking Decisions

1. Select a sellable unit for each product, such as one tile, one square meter, one sample box, or one standard roll.
2. Confirm one accurate price and currency for that unit. A low-to-high FOB range is not used as a single price.
3. Confirm real availability for the selected unit.
4. Publish a public return-policy page appropriate for made-to-order B2B products.
5. Create JPEG or PNG feed images without replacing the website's optimized WebP delivery images.
6. Confirm OpenAI merchant eligibility for a China-based manufacturer because the current stable schema lists \`US\` as the supported store country.

## Source Specification

- Stable file-upload schema: https://developers.openai.com/commerce/specs/file-upload/products
- Required fields represented in the draft include eligibility flags, item ID, title, description, URL, brand, image URL, price, availability, seller information, return policy, target country, and store country.
`;

fs.writeFileSync(path.join(outputDir, "openai-product-feed-validation.md"), summary);
console.log(JSON.stringify(validation, null, 2));
