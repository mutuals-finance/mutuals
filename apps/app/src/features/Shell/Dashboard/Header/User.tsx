"use client";

import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@mutuals/ui";
import React from "react";
import {
  IoChevronDown,
  IoChevronUp,
  IoHelpOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoMegaphoneOutline,
  IoMoonOutline,
  IoPersonCircle,
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

  const avatarIcon = (size = "xs") =>
    isConnected ? (
      <UserAvatar address={address} size={size} />
    ) : (
      <IoPersonCircle />
    );

  return (
    <>
      <Menu closeOnSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              leftIcon={avatarIcon()}
              rightIcon={isOpen ? <IoChevronUp /> : <IoChevronDown />}
              isLoading={isConnecting}
            >
              {isConnected ? (
                <Text as={"span"} fontFamily={"monospace"}>
                  {shortenAddress(address)}
                </Text>
              ) : (
                "Not Connected"
              )}
            </MenuButton>

            <MenuList>
              <MenuItem icon={<IoMegaphoneOutline />}>Feedback</MenuItem>
              <MenuItem icon={<IoHelpOutline />}>Help</MenuItem>
              <MenuDivider />
              <MenuItem
                fontWeight={"500"}
                icon={
                  colorMode === `light` ? <IoMoonOutline /> : <IoSunnyOutline />
                }
                onClick={toggleColorMode}
              >
                {colorMode === `light` ? `Dark Mode` : `Light Mode`}
              </MenuItem>
              <MenuItem
                icon={isConnected ? <IoLogOutOutline /> : <IoLogInOutline />}
                onClick={() =>
                  isConnected
                    ? disconnectAndLogout()
                    : router.push("/auth/login")
                }
                fontWeight={"500"}
              >
                {isConnected ? `Logout` : `Login`}
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
}
