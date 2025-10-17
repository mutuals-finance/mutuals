"use client";

import {
  Button,
  useColorMode,
  IconButton,
  ButtonGroup,
  Portal,
  Box,
  Menu,
  Link,
} from "@mutuals/ui";

import {
  IoEllipsisHorizontal,
  IoMoonSharp,
  IoSettingsSharp,
  IoSunnySharp,
} from "react-icons/io5";
import { useAccount } from "wagmi";
import { shortenAddress } from "@/utils";
import UserAvatar from "src/features/Wallet/Avatar";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/Auth/Provider";
import { header as headerLinks } from "@/features/Shell/Dashboard/links";

export default function ShellDashboardHeaderUser() {
  const { address, isConnected, isConnecting } = useAccount();
  const { disconnectAndLogout } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <ButtonGroup size="sm">
      <Menu.Root>
        <Menu.Trigger asChild>
          {!isConnected ? (
            <IconButton
              variant="ghost"
              aria-label="Open navigation menu"
              hideBelow={"lg"}
            >
              <IoEllipsisHorizontal />
            </IconButton>
          ) : (
            <Button variant={"surface"} size={"sm"}>
              <UserAvatar address={address} size={"2xs"} />
              {shortenAddress(address)}
            </Button>
          )}
        </Menu.Trigger>
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
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      {!isConnected && (
        <Link href={"/auth/login"} asChild={true}>
          <Button variant={"solid"} size={"sm"} loading={isConnecting}>
            Sign in
          </Button>
        </Link>
      )}
    </ButtonGroup>
  );
}
