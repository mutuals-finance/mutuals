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
import { VersionMenu } from "@/components/layout/version-menu";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SponsorButton } from "@/components/layout/sponsor-button";
import { IoLogoGithub } from "react-icons/io";

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
    fontSize: "sm",
    color: "fg.muted",
    _currentPage: {
      color: "fg",
      fontWeight: "medium",
    },
    _hover: {
      color: "fg",
    },
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
    display: "block",
    py: "2",
    px: "4",
    color: "fg.muted",
    w: "full",
    _currentPage: {
      color: "fg",
      fontWeight: "medium",
    },
    _hover: {
      color: "fg",
    },
  },
});

const HeaderLogoLink = () => {
  return (
    <MutualsLogo
      href="https://mutuals.finance"
      aria-label="Mutuals, Back to homepage"
      w={"28"}
    />
  );
};

const HeaderPrimaryNavbar = () => {
  const items = [
    {
      label: "Docs",
      value: "docs",
      href: "/",
      external: false,
    },
    {
      label: "Support",
      value: "support",
      href: "/support",
      external: false,
    },
    {
      label: "Homepage",
      value: "homepage",
      href: "https://mutuals.finance",
      external: true,
      arrow: true,
    },
  ];

  return (
    <HStack gap="8" minH="48px" aria-label="primary navigation">
      <HeaderLogoLink />
      {items.map(({ label = "", ...item }) => (
        <TopNavLink key={label} {...item}>
          {label}
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
          <IconButton size={"xs"} variant="subtle" aria-label={`${label} link`}>
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

  const primaryNavItems: NavLinkProps[] = [];

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
        <IconButton variant="subtle" size="sm">
          <AiOutlineMenu />
        </IconButton>
      </DrawerTrigger>
      <Portal>
        <DrawerBackdrop />
        <DrawerContent borderTopRadius="md" maxH="var(--content-height)">
          <DrawerCloseTrigger asChild>
            <IconButton size="sm" variant="subtle">
              <AiOutlineClose />
            </IconButton>
          </DrawerCloseTrigger>
          <DrawerBody display="flex" flexDir="column" gap="10" py="5" flex="1">
            <VStack align="start" justify="stretch">
              {primaryNavItems.map((item) => (
                <TopNavMobileLink key={item.title} {...item} />
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
    <HStack gap="2" minH="48px" flexShrink="1" minW="0">
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
        variant={"subtle"}
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
