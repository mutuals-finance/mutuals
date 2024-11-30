"use client";

import {
  Box,
  Button,
  Field,
  HStack,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  Link,
  LinkButton,
} from "@mutuals/ui";
import { PropsWithChildren, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { useToggle } from "react-use";

import Sidebar from "@/components/Sidebar";

import { MutualsLogo } from "@mutuals/ui";
import navItems from "@/features/Shell/Dashboard/Sidebar/nav-items";
import { siteCopyrightText } from "@/config";
import { VscMenu } from "react-icons/vsc";

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
        w={w}
        minW={{ base: "0", lg: "5.6rem" }}
        isOpen={isOpen}
        borderColor={{ base: "transparent", lg: "border" }}
        bg={"bg"}
        header={
          <HStack justifyContent={"flex-end"} gap={"3"}>
            {isOpen && (
              <Box mr={"auto"}>
                <MutualsLogo w={"24"} href={"/"} />
              </Box>
            )}

            <IconButton
              fontSize={"lg"}
              aria-label={"Toggle Sidebar"}
              onClick={() => toggleIsOpen()}
              variant={"ghost"}
            >
              <VscMenu />
            </IconButton>
          </HStack>
        }
        footer={
          <Box
            textAlign={"center"}
            fontSize={"xs"}
            visibility={isOpen ? "inherit" : "hidden"}
          >
            <Text truncate>
              &copy; {new Date().getFullYear()} {siteCopyrightText}
            </Text>
            <Text truncate>
              <Link href={"/"}>Privacy Policy</Link> /{" "}
              <Link href={"/"}>Terms</Link>
            </Text>
          </Box>
        }
      >
        {Object.keys(navItems).map((section) => (
          <Field
            label={section}
            truncate
            alignItems={"stretch"}
            key={section}
            gap={"3"}
          >
            <Stack gap={2} w={"full"}>
              {navItems[section]?.map((navItem) => (
                <LinkButton
                  key={navItem.label}
                  href={navItem.href}
                  variant={"outline"}
                  w={"full"}
                  justifyContent={"flex-start"}
                  px={"3.5"}
                  size={"lg"}
                  fontSize={"sm"}
                  textAlign={"left"}
                  overflow={"hidden"}
                >
                  <navItem.icon />
                  {navItem.label}
                </LinkButton>
              ))}
            </Stack>
          </Field>
        ))}
      </Sidebar>

      <Box zIndex={"0"} flex={"1 1 auto"} minWidth={"0"}>
        {children}
      </Box>
    </Stack>
  );
}
