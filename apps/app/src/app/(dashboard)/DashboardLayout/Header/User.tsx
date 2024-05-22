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
} from "@splitfi/ui";
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
import { useAccount, useDisconnect } from "wagmi";

import { shortenAddress } from "src/utils";

import UserAvatar from "@/components/UserAvatar";
import { useRouter } from "next/navigation";

export default function User() {
  const { address, isConnected, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();

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
                  isConnected ? disconnect() : router.push("/auth/sign-in")
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
