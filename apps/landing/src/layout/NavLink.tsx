"use client";

import { Link, type LinkProps } from "@splitfi/ui";
import { forwardRef } from "@splitfi/ui";
import { usePathname } from "next/navigation";

export interface NavLinkProps extends LinkProps {
  id?: string;
}

const NavLink = forwardRef<NavLinkProps, "a">(({ children, ...props }, ref) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <Link
      ref={ref}
      display={{ base: "none", lg: "flex" }}
      fontSize="sm"
      position="relative"
      opacity={isActive ? 0.8 : 1}
      _hover={{ opacity: 0.8 }}
      color={"color.1"}
      {...props}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = "NavLink";

export default NavLink;
