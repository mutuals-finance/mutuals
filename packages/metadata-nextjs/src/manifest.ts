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
    background_color: "#FAFAFA",
    theme_color: "#020203",
    icons: iconSizes.map((size) => ({
      src: `/icon/${size}`,
      sizes: `${size}x${size}`,
      type: defaultContentType,
      purpose: "maskable",
    })),
    ...props,
  };
}
