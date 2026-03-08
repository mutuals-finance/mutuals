import type { Viewport } from "next";

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
};

export function createViewport(props?: Viewport): Viewport {
  return {
    ...defaultViewport,
    ...props,
  };
}
