import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: `Mutuals — The best way to manage on-chain payments`,
    template: "%s — Mutuals",
  },
  description: "The best way to manage on-chain payments.",
};

export function createMetadata(props?: Metadata): Metadata {
  return {
    ...defaultMetadata,
    ...props,
  };
}
