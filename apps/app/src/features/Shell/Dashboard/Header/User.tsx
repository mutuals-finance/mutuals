"use client";

import {
  Button,
  Text,
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
  IoGlobeOutline,
  IoHelpOutline,
  IoMegaphoneOutline,
  IoMoonOutline,
  IoSettingsOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { useAccount } from "wagmi";
import { shortenAddress } from "@/utils";
import UserAvatar from "src/features/Wallet/Avatar";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/Auth/Provider";

const linkItems = [
  {
    label: "Homepage",
    value: "homepage",
    icon: <IoGlobeOutline />,
    href: "https://mutuals.finance",
  },
  {
    label: "Feedback",
    value: "feedback",
    icon: <IoMegaphoneOutline />,
    href: "https://docs.mutuals.finance/",
  },
  {
    label: "Help Center",
    value: "help-center",
    icon: <IoHelpOutline />,
    href: "https://docs.mutuals.finance/",
  },
];

export default function ShellDashboardHeaderUser() {
  const { address, isConnected, isConnecting } = useAccount();
  const { disconnectAndLogout } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <ButtonGroup size="sm">
      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton variant="ghost" aria-label="Open navigation menu">
            <IoEllipsisHorizontal />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content minW={"56"}>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Navigate</Menu.ItemGroupLabel>
                {linkItems.map((item) => (
                  <Menu.Item key={item.value} value={item.value} asChild>
                    <Link
                      unstyled={true}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box flex="1">{item.label}</Box>
                      {item.icon}
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
                    <IoSettingsOutline />
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
                  {colorMode === `light` ? (
                    <IoMoonOutline />
                  ) : (
                    <IoSunnyOutline />
                  )}
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      <Button
        variant={"solid"}
        size={"sm"}
        loading={isConnecting}
        onClick={() =>
          isConnected ? disconnectAndLogout() : router.push("/auth/login")
        }
      >
        {isConnected ? (
          <>
            <UserAvatar address={address} size={"xs"} />
            <Text as={"span"} fontFamily={"mono"}>
              {shortenAddress(address)}
            </Text>
          </>
        ) : (
          <>Sign in</>
        )}
      </Button>
    </ButtonGroup>
  );
}
