import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31_536_000,
    deviceSizes: [360, 390, 430, 640, 750, 828, 1080, 1200, 1440, 1536, 1920],
    imageSizes: [48, 64, 96, 128, 256, 384],
    qualities: [75, 82, 90],
  },
  async redirects() {
    return [
      {
        source: "/project-application/hotel-lobby-carpet-specification-guide",
        destination: "/projects/case-1",
        permanent: true,
      },
      {
        source: "/project-application/office-carpet-planning-guide",
        destination: "/projects/case-5",
        permanent: true,
      },
      {
        source: "/project-application/gold-mining-sluice-carpet-application-reference",
        destination: "/projects/case-12",
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
    ];
  },
};

export default nextConfig;
