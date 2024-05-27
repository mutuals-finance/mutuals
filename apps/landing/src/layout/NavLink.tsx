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
      fontWeight={"500"}
      letterSpacing={"0.0325rem"}
      fontSize="sm"
      position="relative"
      opacity={isActive ? 1 : 0.8}
      _hover={{ opacity: 1 }}
      {...props}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = "NavLink";

export default NavLink;
