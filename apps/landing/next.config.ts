import { NextConfig } from "next";
import path from "path";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
  reactStrictMode: true,
  experimental: { optimizePackageImports: ["@mutuals/ui", "@chakra-ui/react"] },
  images: { remotePatterns: [{ hostname: "*" }] },
};

export default withPayload(nextConfig);
