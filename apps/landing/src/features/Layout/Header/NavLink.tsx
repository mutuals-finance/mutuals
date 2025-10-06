"use client";

import {
  Link,
  type LinkProps,
  HoverCard,
  Box,
  Strong,
  Portal,
} from "@mutuals/ui";
import { usePathname } from "next/navigation";
import { LuExternalLink } from "react-icons/lu";

export interface NavLinkProps extends LinkProps {
  external?: boolean;
  links?: NavLinkProps[];
}

export default function NavLink({
  children,
  external = false,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const link = (
    <Link
      color={"inherit"}
      textStyle={"xs"}
      textTransform={"uppercase"}
      letterSpacing={"wider"}
      fontFamily={"heading"}
      fontWeight={"500"}
      {...props}
    >
      {children} {external && <LuExternalLink />}
    </Link>
  );

  return props.links && props.links.length > 0 && props.links.length <= 0 ? (
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
