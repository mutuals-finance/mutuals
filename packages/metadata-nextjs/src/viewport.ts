import type { Viewport } from "next";

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
    { media: "(prefers-color-scheme: light)", color: "#111111" },
  ],
};

export function createViewport(props?: Viewport): Viewport {
  return {
    ...defaultViewport,
    ...props,
  };
}
