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
