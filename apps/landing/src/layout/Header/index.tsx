"use client";

import {
  Container,
  Box,
  HStack,
  BoxProps,
  Hide,
  Show,
  useDisclosure,
} from "@mutuals/ui";

import NavMobile from "@/layout/Header/NavMobile";
import NavDesktop from "@/layout/Header/NavDesktop";
import HeaderContainerWrapper from "@/layout/Header/ContainerWrapper";
import links from "@/layout/links";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export type HeaderProps = Omit<BoxProps, "children">;

export default function Header(props: HeaderProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <Box as="header" {...props}>
      <HeaderContainerWrapper>
        <Container
          as={HStack}
          size="2xl"
          align="center"
          position="relative"
          spacing="12"
          px={0}
        >
          <Show above="lg">
            <NavDesktop links={links} />
          </Show>

          <Hide above="lg">
            <NavMobile.Navbar buttonProps={{ onClick: onOpen }} />
          </Hide>
        </Container>
      </HeaderContainerWrapper>
      <NavMobile.Drawer links={links} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
