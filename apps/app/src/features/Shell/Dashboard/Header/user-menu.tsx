"use client";

import { Box, Link, Menu, Portal, useColorMode } from "@mutuals/ui";
import { useLogout, usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import {
  IoLogOutSharp,
  IoMoonSharp,
  IoSettingsSharp,
  IoSunnySharp,
} from "react-icons/io5";
import { header as headerLinks } from "@/features/shell/dashboard/links";

type ShellDashboardHeaderUserMenuProps = Menu.RootProps;

export default function ShellDashboardHeaderUserMenu({
  children,
  ...props
}: ShellDashboardHeaderUserMenuProps) {
  const router = useRouter();
  const { logout } = useLogout({
    onSuccess: () => {
      router.refresh();
    },
  });
  const { authenticated } = usePrivy();

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
                <Menu.Item asChild key={item.value} value={item.value}>
                  <Link
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    unstyled={true}
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
              <Menu.Item asChild value={"settings"}>
                <Link href={"/settings"} unstyled={true}>
                  <Box flex="1">Settings</Box>
                  <IoSettingsSharp />
                </Link>
              </Menu.Item>

              <Menu.Item
                closeOnSelect={false}
                onClick={toggleColorMode}
                value="color-mode"
              >
                <Box flex="1">
                  {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                </Box>
                {colorMode === "light" ? <IoMoonSharp /> : <IoSunnySharp />}
              </Menu.Item>
            </Menu.ItemGroup>

            {authenticated && (
              <>
                <Menu.Separator />

                <Menu.ItemGroup>
                  <Menu.Item onClick={logout} value={"sign-out"}>
                    <Box flex="1">Sign out</Box>
                    <IoLogOutSharp />
                  </Menu.Item>
                </Menu.ItemGroup>
              </>
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
