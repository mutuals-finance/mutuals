import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export interface LinkProps
  extends Omit<ChakraLinkProps, "href">,
    Pick<NextLinkProps, "href"> {
  linkProps?: Omit<NextLinkProps, "href" | "children">;
}

export function Link({
  children,
  asChild = true,
  href,
  linkProps,
  ...props
}: LinkProps) {
  // const pathname = usePathname();
  // const isActive = pathname === href.toString();

  return (
    <ChakraLink
      asChild={asChild}
      href={asChild ? undefined : href.toString()}
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
}
