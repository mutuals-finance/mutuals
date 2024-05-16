"use client";

import { Link, type LinkProps } from "@chakra-ui/next-js";
import { Box, forwardRef } from "@splitfi/ui";
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
      fontWeight={isActive ? "600" : "500"}
      textTransform="uppercase"
      fontSize="xs"
      position="relative"
      _hover={{ opacity: 0.7 }}
      {...props}
    >
      <Box
        position="absolute"
        top="50%"
        left="-2"
        transform="translate(-50%, -50%)"
        w="1"
        h="1"
        bg="red.500"
        opacity={isActive ? 1 : 0}
      />
      {children}
    </Link>
  );
});

NavLink.displayName = "NavLink";

export default NavLink;
