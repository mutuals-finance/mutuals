import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  transpilePackages: ["@mutuals/ui"],
  experimental: {},
};

export default nextConfig;
