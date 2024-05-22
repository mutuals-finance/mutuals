"use client";

import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
} from "@splitfi/ui";
import NextImage from "next/image";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useAccount, useSwitchChain } from "wagmi";

import { getAvailableChains, getLogoByChainId } from "src/utils";

export default function Chain() {
  const { isConnected, chain: currentChain } = useAccount();
  const { isPending, switchChain, variables } = useSwitchChain();

  function onSelectChain(chainId: number) {
    switchChain({ chainId });
  }

  return (
    <Menu closeOnSelect={false}>
      {({ isOpen }) => (
        <>
          {isConnected && (
            <MenuButton
              as={Button}
              display={{ base: "none", lg: "flex" }}
              leftIcon={
                <Box w="4" h={"4"} position={"relative"}>
                  <NextImage
                    src={getLogoByChainId(currentChain?.id)}
                    alt={currentChain?.name || "UNKNOWN"}
                    fill={true}
                  />
                </Box>
              }
              rightIcon={isOpen ? <IoChevronUp /> : <IoChevronDown />}
              variant={"ghost"}
              isLoading={isPending}
            >
              {currentChain?.name || "Unknown"}
            </MenuButton>
          )}

          <MenuList>
            <MenuGroup title="Choose Your Network">
              {getAvailableChains().map(
                (chain) =>
                  chain.id !== currentChain?.id && (
                    <MenuItem
                      onClick={() => onSelectChain(chain.id)}
                      key={chain.id}
                    >
                      <Box w="3" h="3" position={"relative"} mr={"1"}>
                        <NextImage
                          src={chain.logo}
                          alt={chain.name}
                          fill={true}
                        />
                      </Box>

                      {chain.name}
                      {isPending && variables?.chainId === chain.id && (
                        <Spinner size="xs" ml={"1"} />
                      )}
                    </MenuItem>
                  ),
              )}
            </MenuGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
