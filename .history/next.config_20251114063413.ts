import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
