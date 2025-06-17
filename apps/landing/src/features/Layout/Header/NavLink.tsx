"use client";

import { Link, type LinkProps } from "@mutuals/ui";
import { usePathname } from "next/navigation";
import { LuExternalLink } from "react-icons/lu";

export interface NavLinkProps extends LinkProps {
  external?: boolean;
}

export default function NavLink({
  children,
  external = false,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <Link
      color={isActive ? "fg.muted" : "fg"}
      _hover={{ color: "fg.muted" }}
      fontSize={"xs"}
      textTransform="uppercase"
      letterSpacing={"wide"}
      {...props}
    >
      {children} {external && <LuExternalLink />}
    </Link>
  );
}
