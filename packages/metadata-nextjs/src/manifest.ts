import type { MetadataRoute } from "next";
import { iconSizes, defaultContentType } from "./icon";

export function createManifest(
  props?: MetadataRoute.Manifest,
): MetadataRoute.Manifest {
  return {
    name: "Mutuals",
    short_name: "Mutuals",
    description: "Reimagine Programmable Money.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f4f5",
    theme_color: "#f4f4f5",
    icons: iconSizes.map((size) => ({
      src: `/icon/${size}`,
      sizes: `${size}x${size}`,
      type: defaultContentType,
      purpose: "maskable",
    })),
    ...props,
  };
}
