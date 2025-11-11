import { createManifest } from "@mutuals/metadata-nextjs";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return createManifest({
    name: "Mutuals Website",
    short_name: "Mutuals Website",
  });
}
