import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  experimental: { optimizePackageImports: ["@mutuals/ui", "@chakra-ui/react"] },
};

export default nextConfig;
