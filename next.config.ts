import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cv-online",
  assetPrefix: "/cv-online/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
