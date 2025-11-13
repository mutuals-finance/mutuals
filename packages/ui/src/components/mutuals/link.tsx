import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { IconType } from "react-icons";
import { forwardRef } from "react";

export interface LinkProps
  extends Omit<ChakraLinkProps, "href">,
    Pick<NextLinkProps, "href"> {
  linkProps?: Omit<NextLinkProps, "href" | "children">;
}

export type NavLinkProps = LinkProps & {
  label: string;
  value: string;
  icon: IconType;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, asChild = true, href, linkProps, ...props }, ref) => {
    // const pathname = usePathname();
    // const isActive = pathname === href.toString();

    return (
      <ChakraLink
        asChild={asChild}
        href={asChild ? undefined : href.toString()}
        ref={ref}
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
