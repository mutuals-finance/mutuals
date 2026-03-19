import path from "node:path";
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(import.meta.dirname, "../.."),
  },
  reactStrictMode: true,
  cacheComponents: true,
  experimental: {
    optimizePackageImports: ["@mutuals/ui", "@chakra-ui/react"],
  },
  images: { unoptimized: true, remotePatterns: [{ hostname: "*" }] },
};

export default withPayload(nextConfig);
