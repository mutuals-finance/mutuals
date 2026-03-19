"use client";

import {
  Box,
  HoverCard,
  Link,
  type LinkProps,
  Portal,
  Strong,
} from "@mutuals/ui";

export interface NavLinkProps extends LinkProps {
  links?: NavLinkProps[];
}

export default function NavLink({ children, ...props }: NavLinkProps) {
  const link = (
    <Link fontWeight={"normal"} textStyle={"md"} variant={"plain"} {...props}>
      {children}
    </Link>
  );

  return props.links && props.links.length > 0 ? (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>{link}</HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content maxWidth="64">
            <Box>
              <Strong>Chakra</Strong> is a Sanskrit word that means disk or
              wheel, referring to energy centers in the body
            </Box>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  ) : (
    link
  );
}
