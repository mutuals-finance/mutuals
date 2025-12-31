"use client";

import {
  MutualsLogo,
  Box,
  Container,
  HStack,
  IconButton,
  Portal,
  Spacer,
  VStack,
  chakra,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  ColorModeButton,
  Link,
  MutualsLogoProps,
} from "@mutuals/ui";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SponsorButton } from "@/components/layout/header/sponsor-button";
import { useConfig } from "@/context";

const primaryNavItems = [
  {
    label: "Docs",
    value: "docs",
    href: "/docs",
    external: false,
  },
  {
    label: "Support",
    value: "support",
    href: "/support",
  },
  {
    label: "Development",
    value: "development",
    href: "/development",
    external: false,
  },
];

const HeaderRoot = chakra("header", {
  base: {
    bg: "bg",
    position: "sticky",
    top: "0",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minHeight: "64px",
    borderBottom: "1px solid",
    borderColor: "border.muted",
    zIndex: "10",
  },
});

const TopNavLink = chakra(Link, {
  base: {
    textStyle: "sm",
  },
  variants: {
    variant: {
      tab: {
        py: "2",
        borderBottomWidth: "2px",
        roundedBottom: "none",
        borderColor: "transparent",
        transition: "border-color 0.2s",
        _hover: { borderColor: "border" },
        _currentPage: { borderColor: "colorPalette.solid!" },
      },
    },
  },
});

const TopNavMobileLink = chakra(Link, {
  base: {
    py: "2",
    px: "4",
    w: "full",
  },
});

const HeaderLogoLink = (props: MutualsLogoProps) => {
  return (
    <MutualsLogo
      href="/"
      aria-label="Mutuals, Back to docs home"
      w={"28"}
      {...props}
    />
  );
};

const HeaderPrimaryNavbar = () => {
  const config = useConfig();
  const items = config.normalizePagesResult.topLevelNavbarItems;
  return (
    <HStack gap="6" minH="48px" aria-label="primary navigation">
      <HeaderLogoLink mr={"12"} />
      {items.map(({ name, ...item }) => (
        <TopNavLink key={item.route} href={item.route}>
          {item.title}
        </TopNavLink>
      ))}
    </HStack>
  );
};

const HeaderSecondaryNavbar = () => {
  const { normalizePagesResult } = useConfig();
  const activeTopLevel = normalizePagesResult.activePath[0];
  const items = activeTopLevel?.children ?? [];
  return (
    <HStack as="nav" gap="6" aria-label="secondary navigation">
      {items?.map(({ ...item }) => (
        <TopNavLink key={item.route} href={item.route} variant={"tab"}>
          {item.title}
        </TopNavLink>
      ))}
    </HStack>
  );
};

const HeaderMobileMenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const pathname = usePathname();
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    if (pathnameRef.current !== pathname) {
      setIsOpen(false);
    }
    pathnameRef.current = pathname;
  }, [pathname, setIsOpen]);

  return (
    <DrawerRoot
      open={isOpen}
      placement="bottom"
      onPointerDownOutside={closeMenu}
      onEscapeKeyDown={closeMenu}
      onOpenChange={(e) => setIsOpen(e.open)}
    >
      <DrawerTrigger asChild>
        <IconButton variant="outline" size="md">
          <AiOutlineMenu />
        </IconButton>
      </DrawerTrigger>
      <Portal>
        <DrawerBackdrop />
        <DrawerContent borderTopRadius="md" pt="6" maxH="var(--content-height)">
          <DrawerCloseTrigger asChild>
            <IconButton size="md" variant="ghost">
              <AiOutlineClose />
            </IconButton>
          </DrawerCloseTrigger>
          <DrawerBody display="flex" flexDir="column" gap="4" flex="1">
            <VStack align="start" justify="stretch">
              {primaryNavItems.map(({ label, ...item }) => (
                <TopNavMobileLink key={label} {...item}>
                  {label}
                </TopNavMobileLink>
              ))}
            </VStack>
            {/*
            <VStack align="start" justify="stretch">
              {secondaryNavItems.map((item) => (
                <TopNavMobileLink
                  key={item.title}
                  href={item.url || "#"}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.title}
                </TopNavMobileLink>
              ))}
            </VStack>
*/}
          </DrawerBody>
        </DrawerContent>
      </Portal>
    </DrawerRoot>
  );
};

const HeaderDesktopActions = () => {
  return (
    <HStack gap="2" flexShrink="1" minW="0">
      <SponsorButton hideBelow="lg" />
      {/*
      <HeaderVersionMenu />
*/}
      {/*
      <CommandMenu
        trigger={<SearchButton width="256px" size="sm" flexShrink="1" />}
      />
*/}
      <ColorModeButton
        variant={"subtle"}
        size={"sm"}
        _icon={{
          width: "1.2em",
          height: "1.2em",
        }}
      />
    </HStack>
  );
};

const HeaderMobileActions = () => {
  return (
    <HStack>
      {/*
      <CommandMenu trigger={<MobileSearchButton />} disableHotkey />
*/}
      <ColorModeButton />
      <HeaderMobileMenuDropdown />
    </HStack>
  );
};

const HeaderDesktopNavbar = () => {
  return (
    <Box hideBelow="md">
      <HStack py="2">
        <HeaderPrimaryNavbar />
        <Spacer />
        <HeaderDesktopActions />
      </HStack>
      <HeaderSecondaryNavbar />
    </Box>
  );
};

const HeaderMobileNavbar = () => {
  return (
    <HStack hideFrom="md" h="full">
      <HeaderLogoLink />
      <Spacer />
      <HeaderMobileActions />
    </HStack>
  );
};

export const Header = () => {
  return (
    <HeaderRoot>
      <Container>
        <HeaderDesktopNavbar />
        <HeaderMobileNavbar />
      </Container>
    </HeaderRoot>
  );
};
