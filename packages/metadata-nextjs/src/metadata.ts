import type { Metadata } from "next";
import { createOpenGraph } from "./opengraph";

export const defaultMetadata: Metadata = {
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
