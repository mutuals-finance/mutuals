"use client";
import ShellDashboardBody from "@/features/Shell/Dashboard/Body";
import ShellDashboardFooter from "@/features/Shell/Dashboard/Footer";
import ShellDashboardHeader from "@/features/Shell/Dashboard/Header";
import { PropsWithChildren } from "react";
import {
  Box,
  Stack,
  useDisclosure,
  Text,
  LinkButton,
  Icon,
  StackSeparator,
  Link,
} from "@mutuals/ui";
import navItems from "@/features/Shell/Dashboard/Sidebar/nav-items";
import { siteCopyrightText } from "@/config";

export default function ShellDashboard({ children }: PropsWithChildren) {
  const { open, onToggle } = useDisclosure({ defaultOpen: true });

  return (
    <>
      <ShellDashboardHeader open={open} onToggle={onToggle} />
      <Stack gap="0" direction={"row"}>
        <Stack
          flex={"0 0 auto"}
          data-state={open ? "open" : "closed"}
          position="sticky"
          top="4rem"
          h={"calc(100vh - 4rem)"}
          left="0"
          w={{ _open: "60", _closed: "0" }}
          minW={{ base: "0", lg: "5rem" }}
          gap={"4"}
          p={"4"}
          transition="all 0.2s ease"
          separator={<StackSeparator />}
        >
          <Stack gap={"4"} mb={"auto"}>
            {Object.keys(navItems).map((section) => (
              <Stack key={section} gap={"2"}>
                <Text fontWeight="medium" textStyle={"sm"} truncate>
                  {section}
                </Text>
                <Stack gap={2} w={"full"}>
                  {navItems[section]?.map((navItem) => (
                    <LinkButton
                      key={navItem.label}
                      href={navItem.href}
                      variant={"outline"}
                      w={"full"}
                      justifyContent={"flex-start"}
                      px={"0.95rem"}
                      gap={"4"}
                      size={"lg"}
                      fontSize={"sm"}
                      textAlign={"left"}
                      overflow={"hidden"}
                    >
                      <Icon boxSize={"4"}>
                        <navItem.icon />
                      </Icon>
                      {navItem.label}
                    </LinkButton>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>

          <Stack
            gap={"1"}
            textStyle={"2xs"}
            textAlign={"center"}
            visibility={open ? "inherit" : "hidden"}
          >
            <Text truncate>
              &copy; {new Date().getFullYear()} {siteCopyrightText}
            </Text>
            <Text truncate>
              <Link href={"/"}>Privacy Policy</Link> /{" "}
              <Link href={"/"}>Terms of Service</Link>
            </Text>
          </Stack>
        </Stack>

        <Box flex={"1 1 auto"}>
          <ShellDashboardBody>{children}</ShellDashboardBody>
          <ShellDashboardFooter />
        </Box>
      </Stack>
    </>
  );
}
