import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: `Mutuals — Reimagine Programmable Money.`,
    template: "%s — Mutuals",
  },
  description: "Reimagine Programmable Money.",
};

export function createMetadata(props?: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...props,
  };
}
