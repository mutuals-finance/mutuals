import { createManifest } from "@mutuals/metadata-nextjs";

export default function manifest() {
  return createManifest({
    name: "Mutuals App",
    short_name: "Mutuals App",
    start_url: "/auth/login",
    background_color: "#09090b",
    theme_color: "#09090b",
  });
}
