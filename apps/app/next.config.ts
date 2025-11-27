import { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
  experimental: { optimizePackageImports: ["@mutuals/ui", "@chakra-ui/react"] },
  images: {
    remotePatterns: [
      {
        hostname: "*.ipfs.w3s.link",
      },
      { hostname: "tokens.1inch.io" },
      { hostname: "assets.coingecko.com" },
      { hostname: "ethapi.openocean.finance" },
      { hostname: "s2.coinmarketcap.com" },
      { hostname: "raw.githubusercontent.com" },
      { hostname: "ethereum-optimism.github.io" },
      { hostname: "cloudstorage.openocean.finance" },
      { hostname: "elk.finance" },
      { hostname: "etherscan.io" },
      { hostname: "storage.googleapis.com" },
      { hostname: "jpyc.jp" },
      { hostname: "cryption-network.s3.us-east-2.amazonaws.com" },
      { hostname: "i.imgur.com" },
      { hostname: "i.ibb.co" },
      { hostname: "api-live.stableonegroup.com" },
      { hostname: "bscscan.com" },
      { hostname: "api.rubic.exchange" },
      { hostname: "maticcpad.com" },
      { hostname: "polygonscan.com" },
      { hostname: "afksystem.finance" },
      { hostname: "ipfs.io" },
      { hostname: "cf-ipfs.com" },
      { hostname: "oropocket.com" },
      { hostname: "matic.ripae.finance" },
      { hostname: "bookie.farm" },
      { hostname: "playgooeys.com" },
      { hostname: "polygon.impermax.finance" },
      { hostname: "cryptologos.cc" },
      { hostname: "flowimage.flow.page" },
      { hostname: "www.dropbox.com" },
      { hostname: "app.fluidy.fi" },
      { hostname: "dinox.io" },
      { hostname: "maticpad.com" },
      { hostname: "drive.google.com" },
      { hostname: "omni.ai" },
      { hostname: "wallet-asset.matic.network" },
      { hostname: "www.ankr.com" },
      { hostname: "cloudflare-ipfs.com" },
      { hostname: "www.datocms-assets.com" },
      { hostname: "logos.covalenthq.com" },
    ],
  },
};

export default nextConfig;
