import { createManifest } from "@mutuals/metadata-nextjs";

export default function manifest() {
  return createManifest({
    name: "Mutuals",
    short_name: "Mutuals",
  });
}
