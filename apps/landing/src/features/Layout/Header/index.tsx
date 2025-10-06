"use client";

import { Box, BoxProps } from "@mutuals/ui";

import NavMobile from "@/features/Layout/Header/NavMobile";
import NavDesktop from "@/features/Layout/Header/NavDesktop";
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
      <NavDesktop hideBelow="lg" links={links} />

      <NavMobile.Root open={open}>
        <NavMobile.Navbar
          hideFrom="lg"
          buttonProps={{ onClick: () => setOpen(true) }}
        />
        <NavMobile.Drawer
          links={links}
          closeButtonProps={{ onClick: () => setOpen(false) }}
        />
      </NavMobile.Root>
    </Box>
  );
}
