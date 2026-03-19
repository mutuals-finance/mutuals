import type { LinkProps } from "@mutuals/ui";
import type { ImageProps } from "next/image";

export interface Network {
  base: ImageProps["src"];
  dark: ImageProps["src"];
  href: LinkProps["href"];
  name: string;
}
