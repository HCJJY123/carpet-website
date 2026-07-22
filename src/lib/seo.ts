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

function productAvailability(productId: string) {
  return ["custom-luxury-hotel-room-carpet", "custom-floral-printed-hotel-carpet", "custom-sculpted-wool-lobby-rug"].includes(productId)
    ? "https://schema.org/PreOrder"
    : "https://schema.org/InStock";
}

function productImages(product: Product) {
  return [product.image, ...(product.gallery?.map((item) => item.src) ?? [])].map(absoluteUrl);
}

export function productJsonLd(product: Product) {
  const productUrl = absoluteUrl(productPath(product.id));
  const priceValidUntil = new Date();
  priceValidUntil.setFullYear(priceValidUntil.getFullYear() + 1);

  const offer = product.fobPrice
    ? {
        "@type": "AggregateOffer",
        url: productUrl,
        availability: productAvailability(product.id),
        itemCondition: "https://schema.org/NewCondition",
        priceCurrency: product.fobPrice.currency,
        lowPrice: product.fobPrice.lowPrice,
        highPrice: product.fobPrice.highPrice,
        priceValidUntil: priceValidUntil.toISOString().slice(0, 10),
        offerCount: "1",
        seller: { "@type": "Organization", name: brandInfo.name, url: brandInfo.url },
      }
    : {
        "@type": "Offer",
        url: productUrl,
        availability: productAvailability(product.id),
        itemCondition: "https://schema.org/NewCondition",
        priceCurrency: "USD",
        seller: { "@type": "Organization", name: brandInfo.name, url: brandInfo.url },
      };

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
    offers: offer,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Minimum Order Quantity", value: product.moq },
      { "@type": "PropertyValue", name: "Lead Time", value: product.leadTime },
      { "@type": "PropertyValue", name: "Availability", value: productAvailability(product.id).endsWith("PreOrder") ? "Made to Order" : "InStock" },
      { "@type": "PropertyValue", name: "Product Category", value: categoryName(product.category) },
      { "@type": "PropertyValue", name: "Target Buyer", value: "Contractors, distributors, hotels, offices, and commercial renovation projects" },
      ...(product.fobPrice
        ? [{ "@type": "PropertyValue", name: "FOB Price Range", value: product.fobPrice.display }]
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
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: absoluteUrl(product.image),
          url: absoluteUrl(productPath(product.id)),
          category: categoryName(product.category),
          additionalProperty: [
            { "@type": "PropertyValue", name: "Minimum Order Quantity", value: product.moq },
            { "@type": "PropertyValue", name: "Availability", value: productAvailability(product.id).endsWith("PreOrder") ? "Made to Order" : "InStock" },
          ],
          offers: product.fobPrice
            ? {
                "@type": "AggregateOffer",
                url: absoluteUrl(productPath(product.id)),
                priceCurrency: product.fobPrice.currency,
                lowPrice: product.fobPrice.lowPrice,
                highPrice: product.fobPrice.highPrice,
                availability: productAvailability(product.id),
                itemCondition: "https://schema.org/NewCondition",
                seller: { "@type": "Organization", name: brandInfo.name, url: brandInfo.url },
              }
            : undefined,
        },
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
