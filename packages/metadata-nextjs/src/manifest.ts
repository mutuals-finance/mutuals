import type { MetadataRoute } from "next";
import { iconSizes, defaultContentType } from "./icon";

export function createManifest(
  props?: MetadataRoute.Manifest,
): MetadataRoute.Manifest {
  return {
    name: "Mutuals",
    short_name: "Mutuals",
    description: "The best way to manage on-chain payments.",
    start_url: "/",
    display_override: ["fullscreen", "minimal-ui"],
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: iconSizes.map((size) => ({
      src: `/icon/${size}`,
      sizes: `${size}x${size}`,
      type: defaultContentType,
      purpose: "maskable",
    })),
    ...props,
  };
}
