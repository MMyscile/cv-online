import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cv-portfolio",
  assetPrefix: "/cv-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
