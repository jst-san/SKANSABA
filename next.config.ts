import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.43.40"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
