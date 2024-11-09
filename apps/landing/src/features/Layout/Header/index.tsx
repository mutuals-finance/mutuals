"use client";

import { Container, Box, HStack, BoxProps } from "@mutuals/ui";

import NavMobile from "@/features/Layout/Header/NavMobile";
import NavDesktop from "@/features/Layout/Header/NavDesktop";
import HeaderContainerWrapper from "@/features/Layout/Header/ContainerWrapper";
import links from "@/features/Layout/links";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export type HeaderProps = Omit<BoxProps, "children">;

export default function Header(props: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Box as="header" {...props}>
      <NavMobile.Root open={open}>
        <HeaderContainerWrapper>
          <NavDesktop hideBelow="lg" links={links} />
          <NavMobile.Navbar
            hideFrom="lg"
            buttonProps={{ onClick: () => setOpen(true) }}
          />
        </HeaderContainerWrapper>
        <NavMobile.Drawer
          links={links}
          closeButtonProps={{ onClick: () => setOpen(false) }}
        />
      </NavMobile.Root>
    </Box>
  );
}
