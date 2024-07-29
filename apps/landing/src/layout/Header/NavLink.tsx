"use client";

import { Link, type LinkProps } from "@mutuals/ui";
import { usePathname } from "next/navigation";

export interface NavLinkProps extends LinkProps {}

export default function NavLink(props: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <Link
      opacity={!isActive ? 0.6 : 1}
      _hover={{ opacity: 1 }}
      color={"color.1"}
      fontWeight={"600"}
      fontFamily={"var(--chakra-fonts-heading)"}
      {...props}
    />
  );
}
