import type { MetadataRoute } from "next";

export function createManifest(
  props?: MetadataRoute.Manifest,
): MetadataRoute.Manifest {
  return {
    name: "Mutuals",
    short_name: "Mutuals",
    description: "Reimagine Programmable Money.",
    start_url: "/",
    theme_color: "#2973FF",
    background_color: "#000000",
    display: "standalone",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    ...props,
  };
}
