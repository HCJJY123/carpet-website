import { brandInfo, productCategories, products, type Product } from "@/lib/data";

export const siteUrl = brandInfo.url.replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function productPath(productId: string) {
  const product = products.find((item) => item.id === productId);
  return product ? `/products/${product.category}/${product.id}` : "/products";
}

export function categoryPath(categoryId: Product["category"]) {
  return `/products/${categoryId}`;
}

export function categoryName(categoryId: Product["category"]) {
  return productCategories.find((item) => item.id === categoryId)?.name ?? categoryId;
}

function productAvailability(product: Product) {
  return product.availability === "in-stock"
    ? "https://schema.org/InStock"
    : "https://schema.org/PreOrder";
}

function productImages(product: Product) {
  return [product.image, ...(product.gallery?.map((item) => item.src) ?? [])].map(absoluteUrl);
}

export function productJsonLd(product: Product) {
  const productUrl = absoluteUrl(productPath(product.id));
  const availability = productAvailability(product);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    sku: product.id,
    mpn: product.id,
    description: product.longDescription || product.description,
    image: productImages(product),
    url: productUrl,
    mainEntityOfPage: productUrl,
    inLanguage: "en",
    brand: { "@type": "Brand", name: "Vishomecarpet" },
    manufacturer: { "@type": "Organization", name: brandInfo.name, url: brandInfo.url },
    category: categoryName(product.category),
    material: product.spec.material,
    size: product.spec.size,
    ...(product.spec.colors.length ? { color: product.spec.colors.map((color) => color.name).join(", ") } : {}),
    ...(product.fobPrice
      ? {
          offers: {
            "@type": "AggregateOffer",
            url: productUrl,
            availability,
            itemCondition: "https://schema.org/NewCondition",
            priceCurrency: product.fobPrice.currency,
            lowPrice: product.fobPrice.lowPrice,
            highPrice: product.fobPrice.highPrice,
            offerCount: 1,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: product.fobPrice.currency,
              minPrice: product.fobPrice.lowPrice,
              maxPrice: product.fobPrice.highPrice,
              unitText: product.fobPrice.unit,
              valueAddedTaxIncluded: false,
              description: "Reference FOB range only; final price and validity require a written quotation for the selected construction, quantity and destination.",
            },
            seller: { "@id": `${brandInfo.url}/#organization` },
          },
        }
      : {}),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Minimum Order Quantity", value: product.moq },
      { "@type": "PropertyValue", name: "Sample", value: product.moqTiers.sample },
      { "@type": "PropertyValue", name: "Trial Order", value: product.moqTiers.trialOrder },
      { "@type": "PropertyValue", name: "Project MOQ", value: product.moqTiers.project },
      { "@type": "PropertyValue", name: "Lead Time", value: product.leadTime },
      { "@type": "PropertyValue", name: "Availability", value: availability.endsWith("PreOrder") ? "Quotation required / made to order" : "Confirmed in stock" },
      { "@type": "PropertyValue", name: "Product Category", value: categoryName(product.category) },
      { "@type": "PropertyValue", name: "Target Buyer", value: "Contractors, distributors, hotels, offices, and commercial renovation projects" },
      ...(product.fobPrice
        ? [
            { "@type": "PropertyValue", name: "FOB Price Range", value: product.fobPrice.display },
            { "@type": "PropertyValue", name: "Sales Unit", value: product.fobPrice.unit },
            { "@type": "PropertyValue", name: "Price Basis", value: "Reference FOB range; final price and validity require a written quotation" },
          ]
        : []),
      ...product.spec.colors.map((color) => ({ "@type": "PropertyValue", name: "Color Option", value: color.name })),
      ...Object.entries(product.technicalSpecs)
        .filter(([, value]) => Boolean(value))
        .map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
      ...product.features.map((value) => ({ "@type": "PropertyValue", name: "Feature", value })),
    ],
  };
}

export function productBreadcrumbJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: categoryName(product.category), item: absoluteUrl(categoryPath(product.category)) },
      { "@type": "ListItem", position: 4, name: product.name, item: absoluteUrl(productPath(product.id)) },
    ],
  };
}

export function categoryBreadcrumbJsonLd(categoryId: Product["category"]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
      { "@type": "ListItem", position: 3, name: categoryName(categoryId), item: absoluteUrl(categoryPath(categoryId)) },
    ],
  };
}

export function productItemListJsonLd({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: Product[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(url),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(productPath(product.id)),
        name: product.name,
        description: product.description,
      })),
    },
  };
}

export function collectionItemListJsonLd({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; description?: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(url),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.url),
        ...(item.description ? { description: item.description } : {}),
      })),
    },
  };
}

export const priorityRoutes = [
  "/",
  "/products",
  "/commercial-carpet-manufacturer",
  "/products/carpet-tiles",
  "/products/wall-to-wall",
  "/products/public-area",
  "/solutions",
  "/solutions/hotel-hospitality",
  "/natural-sisal-carpet",
  "/projects",
  "/blog",
  "/about-us",
  "/factory",
  "/faq",
  "/contact",
];
