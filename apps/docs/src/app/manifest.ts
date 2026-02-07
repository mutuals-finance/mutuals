import { createManifest } from "@mutuals/metadata-nextjs";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return createManifest({
    name: "Mutuals Documentation",
    short_name: "Mutuals Docs",
  });
}
