import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  devIndicators: {
    position: 'bottom-right',
  },
};

export default nextConfig;
