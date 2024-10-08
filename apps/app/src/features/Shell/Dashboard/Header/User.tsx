"use client";

import {
  Button,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuArrow,
  MenuTrigger,
  Text,
  useColorMode,
  MenuSeparator,
  ClientOnly,
} from "@mutuals/ui";
import {
  IoHelpOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoMegaphoneOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import { useAccount } from "wagmi";

import { shortenAddress } from "@/utils";

import UserAvatar from "src/features/Wallet/Avatar";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/Auth/Provider";

export default function ShellDashboardHeaderUser() {
  const { address, isConnected, isConnecting } = useAccount();
  const { disconnectAndLogout } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <MenuRoot closeOnSelect={false}>
      <MenuTrigger asChild>
        <Button hideBelow={"lg"} variant={"ghost"} loading={isConnecting}>
          <UserAvatar address={address} size={"xs"} />
          {isConnected ? (
            <Text as={"span"} fontFamily={"mono"}>
              {shortenAddress(address)}
            </Text>
          ) : (
            "Not Connected"
          )}
          <MenuArrow />
        </Button>
      </MenuTrigger>

      <MenuContent>
        <MenuItemGroup>
          <MenuItem value={"Feedback"}>
            <IoMegaphoneOutline />
            Feedback
          </MenuItem>
          <MenuItem value={"Help"}>
            <IoHelpOutline />
            Help
          </MenuItem>
        </MenuItemGroup>
        <MenuSeparator />
        <MenuItemGroup>
          <ClientOnly>
            <MenuItem
              value="Mode"
              fontWeight={"medium"}
              onClick={toggleColorMode}
            >
              {colorMode === `light` ? <IoMoonOutline /> : <IoSunnyOutline />}
              {colorMode === `light` ? `Dark Mode` : `Light Mode`}
            </MenuItem>

            <MenuItem
              fontWeight={"medium"}
              value={"auth"}
              onClick={() =>
                isConnected ? disconnectAndLogout() : router.push("/auth/login")
              }
            >
              {isConnected ? <IoLogOutOutline /> : <IoLogInOutline />}
              {isConnected ? `Logout` : `Login`}
            </MenuItem>
          </ClientOnly>
        </MenuItemGroup>
      </MenuContent>
    </MenuRoot>
  );
}
