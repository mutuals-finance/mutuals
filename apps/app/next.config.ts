import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(import.meta.dirname, "../.."),
  },
  serverExternalPackages: ["pino", "pino-pretty", "thread-stream"],
  experimental: {
    optimizePackageImports: ["@mutuals/ui", "@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.moralis.io",
      },
      {
        protocol: "https",
        hostname: "logo.moralis.io",
      },
      {
        protocol: "https",
        hostname: "mutuals.finance",
      },
      {
        protocol: "https",
        hostname: "cryptologos.cc",
      },
    ],
  },
};

export default nextConfig;
