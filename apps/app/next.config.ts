import { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname, "../.."),
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
    ],
  },
};

export default nextConfig;
