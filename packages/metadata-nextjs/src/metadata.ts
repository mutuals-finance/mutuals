import type { Metadata } from "next";
import { createOpenGraph } from "./opengraph";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mutuals.finance",
  ),
  title: {
    default: `Mutuals — Reimagine Programmable Money.`,
    template: "%s — Mutuals",
  },
  description: "Reimagine Programmable Money.",
  openGraph: createOpenGraph(),
};

export function createMetadata(props?: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...props,
  };
}
