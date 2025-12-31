"use client";

import {
  MutualsLogo,
  NavLinkProps,
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
  DrawerFooter,
  DrawerRoot,
  DrawerTrigger,
  ColorModeButton,
  Group,
  Link,
} from "@mutuals/ui";
import { VersionMenu } from "@/components/layout/header/version-menu";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SponsorButton } from "@/components/layout/header/sponsor-button";
import { IoLogoGithub } from "react-icons/io";
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
        borderColor: "transparent",
        transition: "border-color 0.2s",
        _hover: { borderColor: "border" },
        _currentPage: { borderColor: "teal.solid!" },
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

const HeaderLogoLink = () => {
  return (
    <MutualsLogo href="/" aria-label="Mutuals, Back to docs home" w={"28"} />
  );
};

const HeaderPrimaryNavbar = () => {
  const config = useConfig();
  const items = config.normalizePagesResult.topLevelNavbarItems;
  return (
    <HStack gap="12" minH="48px" aria-label="primary navigation">
      <HeaderLogoLink />
      {items.map(({ name, ...item }) => (
        <TopNavLink key={item.route} href={item.route}>
          {item.title}
        </TopNavLink>
      ))}
    </HStack>
  );
};

interface HeaderVersionMenuProps {
  containerRef?: React.RefObject<HTMLElement | null>;
}

const HeaderVersionMenu = ({ containerRef }: HeaderVersionMenuProps) => (
  <VersionMenu
    items={[{ title: "0.0.x", value: "alpha", url: "#" }]}
    portalRef={containerRef}
  />
);

const HeaderSocialLinks = () => {
  const items: NavLinkProps[] = [
    {
      label: "Github",
      value: "github",
      icon: IoLogoGithub,
      href: "https://github.com/mutuals-finance",
      external: true,
      arrow: false,
    },
  ];

  return (
    <Group>
      {items?.map(({ label, icon: LinkIcon, ...props }) => (
        <Link key={label} {...props} asChild={true}>
          <IconButton size={"xs"} variant="ghost" aria-label={`${label} link`}>
            <LinkIcon />
          </IconButton>
        </Link>
      ))}
    </Group>
  );
};

const HeaderMobileMenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
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
          <DrawerFooter
            py="2"
            justifyContent="space-between"
            borderTop="1px solid"
            borderColor="border"
            ref={containerRef}
          >
            <HeaderSocialLinks />
          </DrawerFooter>
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
      <HeaderSocialLinks />
      <ColorModeButton
        variant={"ghost"}
        size={"xs"}
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
      {/*
      <HeaderSecondaryNavbar />
*/}
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
