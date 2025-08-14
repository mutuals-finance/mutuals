import { createManifest } from "@mutuals/metadata-nextjs";

export default function manifest() {
  return createManifest({
    name: "Mutuals Website",
    short_name: "Mutuals Website",
  });
}
