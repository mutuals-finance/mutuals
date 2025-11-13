"use client";

import { Box, BoxProps } from "@mutuals/ui";

import NavMobile from "@/features/Layout/Header/NavMobile";
import NavDesktop from "@/features/Layout/Header/NavDesktop";
import links from "@/features/Layout/links";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLayout } from "@/features/Layout/Provider";

export type HeaderProps = Omit<BoxProps, "children">;

export default function Header(props: HeaderProps) {
  const { mobileMenuOpen, setMobileMenuOpen } = useLayout();

  return (
    <Box as="header" {...props}>
      <NavDesktop hideBelow="lg" links={links} />

      <NavMobile.Root open={mobileMenuOpen}>
        <NavMobile.Navbar
          hideFrom="lg"
          buttonProps={{ onClick: () => setMobileMenuOpen(true) }}
        />
        <NavMobile.Drawer
          links={links}
          closeButtonProps={{ onClick: () => setMobileMenuOpen(false) }}
        />
      </NavMobile.Root>
    </Box>
  );
}
