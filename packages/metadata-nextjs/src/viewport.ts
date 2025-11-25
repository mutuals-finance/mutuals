import type { Viewport } from "next";

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#020203" },
  ],
};

export function createViewport(props?: Viewport): Viewport {
  return {
    ...defaultViewport,
    ...props,
  };
}
