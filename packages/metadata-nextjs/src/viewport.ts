import type { Viewport } from "next";

export const defaultViewport: Viewport = {
  themeColor: "#020203",
};

export function createViewport(props?: Viewport): Viewport {
  return {
    ...defaultViewport,
    ...props,
  };
}
