"use client";

import { Container, Box, HStack, BoxProps } from "@mutuals/ui";

import NavMobile from "@/layout/Header/NavMobile";
import NavDesktop from "@/layout/Header/NavDesktop";
import HeaderContainerWrapper from "@/layout/Header/ContainerWrapper";
import links from "@/layout/links";
import { usePathname } from "next/navigation";

export type HeaderProps = Omit<BoxProps, "children">;

export default function Header(props: HeaderProps) {
  const pathname = usePathname();

  return (
    <Box as="header" {...props}>
      <HeaderContainerWrapper>
        <Container
          as={HStack}
          size="2xl"
          alignItems="center"
          position="relative"
          gap="12"
          px={0}
        >
          <NavDesktop hideBelow="lg" links={links} />
          <NavMobile.Navbar
            hideFrom="lg"
            buttonProps={{ onClick: () => console.log("open") }}
          />
        </Container>
      </HeaderContainerWrapper>
      <NavMobile.Drawer links={links} isOpen={false} />
    </Box>
  );
}
