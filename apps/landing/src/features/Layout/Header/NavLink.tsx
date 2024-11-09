"use client";

import { Link, type LinkProps } from "@mutuals/ui";
import { usePathname } from "next/navigation";

export interface NavLinkProps extends LinkProps {}

export default function NavLink(props: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return <Link opacity={!isActive ? 0.7 : 1} {...props} />;
}
