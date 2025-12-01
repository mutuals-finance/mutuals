"use client";

import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { IconType } from "react-icons";
import { forwardRef } from "react";
import { usePathname } from "next/navigation";

export interface LinkProps
  extends Omit<ChakraLinkProps, "href">, Partial<Pick<NextLinkProps, "href">> {
  linkProps?: Omit<NextLinkProps, "href" | "children">;
  exact?: boolean;
  indicator?: boolean;
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
      linkProps,
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
        data-current={current ? true : undefined}
        {...props}
      >
        {!asChild ? (
          children
        ) : (
          <NextLink href={href} {...linkProps}>
            {children}
          </NextLink>
        )}
      </ChakraLink>
    );
  },
);

Link.displayName = "Link";
