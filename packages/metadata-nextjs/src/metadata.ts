import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: `Mutuals — Reimagining Programmable Money.`,
    template: "%s — Mutuals",
  },
  description: "Reimagining Programmable Money.",
};

export function createMetadata(props?: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...props,
  };
}
