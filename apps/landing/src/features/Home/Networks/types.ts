import type { LinkProps } from "@mutuals/ui";
import type { ImageProps } from "next/image";

export type Network = {
  name: string;
  href: LinkProps["href"];
  base: ImageProps["src"];
  dark: ImageProps["src"];
};
