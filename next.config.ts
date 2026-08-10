import type { NextConfig } from "next";

const projectRedirects = [
  ["case-1", "hotel-lobby-axminster-carpet-dubai"],
  ["case-2", "department-store-carpet-tiles-india"],
  ["case-3", "casino-carpet-nylon-broadloom-las-vegas"],
  ["case-4", "healthcare-hospital-carpet-tiles-singapore"],
  ["case-5", "multi-floor-office-carpet-tiles-tokyo"],
  ["case-6", "airport-terminal-carpet-tiles-singapore"],
  ["case-7", "luxury-residential-custom-carpet-mumbai"],
  ["case-8", "university-campus-carpet-tiles-australia"],
  ["case-9", "extended-stay-hotel-carpet-tiles-south-korea"],
  ["case-10", "luxury-retail-custom-carpet-paris"],
  ["case-11", "reusable-exhibition-carpet-expo-booths-johannesburg"],
  ["case-12", "gold-mining-sluice-carpet-peru"],
] as const;

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    minimumCacheTTL: 31_536_000,
    deviceSizes: [360, 390, 430, 640, 750, 828, 1080, 1200, 1440, 1536, 1920],
    imageSizes: [48, 64, 96, 128, 256, 384],
    qualities: [75, 82, 90],
  },
  async redirects() {
    return [
      ...projectRedirects.map(([source, destination]) => ({
        source: `/projects/${source}`,
        destination: `/projects/${destination}`,
        permanent: true,
      })),
      {
        source: "/project-application/hotel-lobby-carpet-specification-guide",
        destination: "/projects/hotel-lobby-axminster-carpet-dubai",
        permanent: true,
      },
      {
        source: "/project-application/office-carpet-planning-guide",
        destination: "/projects/multi-floor-office-carpet-tiles-tokyo",
        permanent: true,
      },
      {
        source: "/project-application/gold-mining-sluice-carpet-application-reference",
        destination: "/projects/gold-mining-sluice-carpet-peru",
        permanent: true,
      },
      {
        source: "/natural-sisal-carpet",
        destination: "/products/public-area/natural-sisal-carpet",
        permanent: true,
      },
      {
        source: "/about-us/about",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/images/optimized/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
