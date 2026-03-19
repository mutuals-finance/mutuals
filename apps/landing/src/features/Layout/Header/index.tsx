"use client";

import { Box, type BoxProps } from "@mutuals/ui";
import NavDesktop from "@/features/layout/header/nav-desktop";
import NavMobile from "@/features/layout/header/nav-mobile";
import links from "@/features/layout/links";
import { useLayout } from "@/features/layout/provider";

export type HeaderProps = Omit<BoxProps, "children">;

export default function Header(props: HeaderProps) {
  const { mobileMenuOpen, setMobileMenuOpen } = useLayout();

  return (
    <Box as="header" {...props}>
      <NavDesktop hideBelow="lg" links={links} />

      <NavMobile.Root open={mobileMenuOpen}>
        <NavMobile.Navbar
          buttonProps={{ onClick: () => setMobileMenuOpen(true) }}
          hideFrom="lg"
        />
        <NavMobile.Drawer
          closeButtonProps={{ onClick: () => setMobileMenuOpen(false) }}
          links={links}
        />
      </NavMobile.Root>
    </Box>
  );
}
