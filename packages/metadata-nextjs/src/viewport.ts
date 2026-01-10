import type { Viewport } from "next";

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

export function createViewport(props?: Viewport): Viewport {
  return {
    ...defaultViewport,
    ...props,
  };
}
