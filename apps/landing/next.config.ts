import { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
  reactStrictMode: true,
  experimental: { optimizePackageImports: ["@mutuals/ui", "@chakra-ui/react"] },
};

export default nextConfig;
