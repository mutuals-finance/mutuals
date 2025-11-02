"use client";

import { useColorMode, Portal, Box, Menu, Link } from "@mutuals/ui";

import {
  IoLogOutSharp,
  IoMoonSharp,
  IoSettingsSharp,
  IoSunnySharp,
} from "react-icons/io5";
import { header as headerLinks } from "@/features/Shell/Dashboard/links";
import { useSignOut } from "@openfort/react";

type ShellDashboardHeaderUserMenuProps = Menu.RootProps;

export default function ShellDashboardHeaderUserMenu({
  children,
  ...props
}: ShellDashboardHeaderUserMenuProps) {
  const { signOut } = useSignOut({
    throwOnError: true,
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {},
  });

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Menu.Root {...props}>
      {children}

      <Portal>
        <Menu.Positioner>
          <Menu.Content minW={"56"}>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Navigate</Menu.ItemGroupLabel>
              {headerLinks.map((item) => (
                <Menu.Item key={item.value} value={item.value} asChild>
                  <Link
                    unstyled={true}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box flex="1">{item.label}</Box>
                    <item.icon />
                  </Link>
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
            <Menu.Separator />
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Preferences</Menu.ItemGroupLabel>
              <Menu.Item value={"settings"} asChild>
                <Link unstyled={true} href={"/settings"}>
                  <Box flex="1">Settings</Box>
                  <IoSettingsSharp />
                </Link>
              </Menu.Item>

              <Menu.Item
                value="color-mode"
                onClick={toggleColorMode}
                closeOnSelect={false}
              >
                <Box flex="1">
                  {colorMode === `light` ? `Dark Mode` : `Light Mode`}
                </Box>
                {colorMode === `light` ? <IoMoonSharp /> : <IoSunnySharp />}
              </Menu.Item>
            </Menu.ItemGroup>

            <Menu.Separator />

            <Menu.ItemGroup>
              <Menu.Item value={"sign-out"} onClick={() => signOut()}>
                <Box flex="1">Sign out</Box>
                <IoLogOutSharp />
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
