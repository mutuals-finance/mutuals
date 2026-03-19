"use client";

import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import type { IconType } from "react-icons";
import { LuArrowUpRight } from "react-icons/lu";

export interface LinkProps
  extends Omit<ChakraLinkProps, "href">,
    Partial<Pick<NextLinkProps, "href">> {
  arrow?: boolean;
  exact?: boolean;
  external?: boolean;
  indicator?: boolean;
  linkProps?: Omit<NextLinkProps, "href" | "children">;
}

export type NavLinkProps = LinkProps & {
  label: string;
  value: string;
  icon: IconType;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      asChild = true,
      exact = false,
      indicator = true,
      href = "",
      external,
      linkProps,
      rel,
      target,
      arrow = true,
      ...props
    },
    ref
  ) => {
    const pathname = usePathname();

    const isActivePath = (path: string) => {
      if ((exact || path === "/") && pathname !== path) {
        return false;
      }
      return pathname.startsWith(path);
    };

    const current = indicator && isActivePath(href.toString());

    return (
      <ChakraLink
        aria-current={current ? "page" : undefined}
        asChild={asChild}
        href={asChild ? undefined : href.toString()}
        ref={ref}
        rel={!rel && external ? "noopener noreferrer" : rel}
        target={!target && external ? "_blank" : target}
        {...props}
      >
        {asChild ? (
          <NextLink href={href} {...linkProps}>
            {children} {arrow && external && <LuArrowUpRight />}
          </NextLink>
        ) : (
          <>
            {children} {arrow && external && <LuArrowUpRight />}
          </>
        )}
      </ChakraLink>
    );
  }
);

Link.displayName = "Link";
