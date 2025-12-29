"use client";

import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { IconType } from "react-icons";
import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import { LuArrowUpRight } from "react-icons/lu";

export interface LinkProps
  extends Omit<ChakraLinkProps, "href">, Partial<Pick<NextLinkProps, "href">> {
  linkProps?: Omit<NextLinkProps, "href" | "children">;
  exact?: boolean;
  indicator?: boolean;
  external?: boolean;
  arrow?: boolean;
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
    ref,
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
        asChild={asChild}
        href={asChild ? undefined : href.toString()}
        ref={ref}
        target={!target && external ? "_blank" : target}
        rel={!rel && external ? "noopener noreferrer" : rel}
        aria-current={current ? "page" : undefined}
        data-current={current ? "true" : undefined}
        {...props}
      >
        {!asChild ? (
          <>
            {children} {arrow && external && <LuArrowUpRight />}{" "}
          </>
        ) : (
          <NextLink href={href} {...linkProps}>
            {children} {arrow && external && <LuArrowUpRight />}
          </NextLink>
        )}
      </ChakraLink>
    );
  },
);

Link.displayName = "Link";
