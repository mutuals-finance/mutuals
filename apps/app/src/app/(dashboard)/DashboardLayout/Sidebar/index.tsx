"use client";

import Link from "next/link";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@splitfi/ui";
import { PropsWithChildren, useEffect } from "react";
import { IconType } from "react-icons";
import {
  IoAppsOutline,
  IoGridOutline,
  IoHelpCircleOutline,
  IoMenuSharp,
  IoPeopleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useMount, useToggle } from "react-use";

import Sidebar from "@/components/Sidebar";

import Logo from "@/app/(dashboard)/DashboardLayout/Header/Logo";

const NAV_SECTIONS: {
  [section: string]: {
    label: string;
    href: string;
    icon: IconType;
  }[];
} = {
  General: [
    {
      label: "Dashboard",
      href: "/",
      icon: IoAppsOutline,
    },
    {
      label: "Payment Pools",
      href: "/dashboard",
      icon: IoGridOutline,
    },
    {
      label: "Address Book",
      href: "/address-book",
      icon: IoPeopleOutline,
    },
  ],
  Preferences: [
    {
      label: "Settings",
      href: "/settings",
      icon: IoSettingsOutline,
    },
    {
      label: "Help Center",
      href: "/settings",
      icon: IoHelpCircleOutline,
    },
  ],
};

function RootSidebarInner({ children }: PropsWithChildren) {
  const breakpointIsOpen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [isOpen, toggleIsOpen] = useToggle(false);

  useEffect(() => {
    toggleIsOpen(breakpointIsOpen);
  }, [toggleIsOpen, breakpointIsOpen]);

  const w = useBreakpointValue(
    {
      base: "100%",
      lg: "16rem",
    },
    {
      fallback: "100%",
    },
  );

  return (
    <Stack gap="0" direction={"row"}>
      <Sidebar
        zIndex={"1"}
        w={w}
        minW={{ base: "0", lg: "5.6rem" }}
        isOpen={isOpen}
        borderColor={{ base: "transparent", lg: "border.1" }}
        bg={"bg.1"}
        header={
          <HStack justifyContent={"flex-end"} gap={"3"}>
            {isOpen && (
              <Box w={"24"} mr={"auto"}>
                <Logo />
              </Box>
            )}

            <IconButton
              icon={<IoMenuSharp display={"block"} />}
              fontSize={"xl"}
              aria-label={"Toggle Sidebar"}
              onClick={() => toggleIsOpen()}
              variant={"ghost"}
            />
          </HStack>
        }
        footer={
          <Box
            textAlign={"center"}
            fontSize={"xs"}
            visibility={isOpen ? "inherit" : "hidden"}
          >
            <Text noOfLines={1}>Copyright 2023 SplitFi</Text>
            <Text noOfLines={1}>
              <Link href={"/"}> Privacy Policy</Link> /{" "}
              <Link href={"/"}>Terms</Link>
            </Text>
          </Box>
        }
      >
        {Object.keys(NAV_SECTIONS).map((section) => (
          <VStack alignItems={"stretch"} key={section}>
            <Text mb={"3"} fontSize={"sm"} noOfLines={1}>
              {section}
            </Text>
            <Stack gap={1.5} w={"full"}>
              {NAV_SECTIONS[section]?.map((navItem) => (
                <Button
                  key={navItem.label}
                  w={"full"}
                  justifyContent={"flex-start"}
                  px={"3.5"}
                  as={Link}
                  href={navItem.href}
                  fontWeight={"500"}
                  fontSize={"sm"}
                  textAlign={"left"}
                  leftIcon={<navItem.icon />}
                  iconSpacing={"4"}
                  sx={{ textDecoration: "none !important" }}
                  overflow={"hidden"}
                >
                  {navItem.label}
                </Button>
              ))}
            </Stack>
          </VStack>
        ))}
      </Sidebar>

      <Box zIndex={"0"} flex={"1 1 auto"} minWidth={"0"}>
        {children}
      </Box>
    </Stack>
  );
}

export default function RootSidebar(props: PropsWithChildren) {
  return <RootSidebarInner {...props} />;
}
