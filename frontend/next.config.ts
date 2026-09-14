import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ensure build succeeds on Vercel
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
