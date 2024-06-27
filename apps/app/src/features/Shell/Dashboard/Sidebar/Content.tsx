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
import { IoMenuSharp } from "react-icons/io5";
import { useToggle } from "react-use";

import Sidebar from "@/components/Sidebar";

import { SplitFiLogo } from "@splitfi/ui";
import navItems from "@/features/Shell/Dashboard/Sidebar/nav-items";
import { siteCopyrightText } from "@/config";

export default function ShellDashboardSidebarContent({
  children,
}: PropsWithChildren) {
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
            {isOpen && <SplitFiLogo w={"24"} mr={"auto"} />}

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
            <Text noOfLines={1}>
              &copy; {new Date().getFullYear()} {siteCopyrightText}
            </Text>
            <Text noOfLines={1}>
              <Link href={"/"}>Privacy Policy</Link> /{" "}
              <Link href={"/"}>Terms</Link>
            </Text>
          </Box>
        }
      >
        {Object.keys(navItems).map((section) => (
          <VStack alignItems={"stretch"} key={section} gap={"3"}>
            <Text fontSize={"sm"} variant={"label"} noOfLines={1}>
              {section}
            </Text>
            <Stack gap={1.5} w={"full"}>
              {navItems[section]?.map((navItem) => (
                <Button
                  key={navItem.label}
                  size={"md"}
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
