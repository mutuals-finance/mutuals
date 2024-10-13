"use client";

import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuArrow,
  MenuTrigger,
  Spinner,
} from "@mutuals/ui";
import NextImage from "next/image";
import { useAccount, useSwitchChain } from "wagmi";

import { getAvailableChains, getLogoByChainId } from "@/utils";

export default function ShellDashboardHeaderChain() {
  const { isConnected, chain: currentChain } = useAccount();
  const { isPending, switchChain, variables } = useSwitchChain();

  function onSelectChain(chainId: number) {
    switchChain({ chainId });
  }

  return (
    <MenuRoot closeOnSelect={false}>
      <>
        {isConnected && (
          <MenuTrigger asChild>
            <Button hideBelow={"lg"} variant={"ghost"} loading={!!isPending}>
              <Box w="4" h={"4"} position={"relative"}>
                <NextImage
                  src={getLogoByChainId(currentChain?.id)}
                  alt={currentChain?.name || "UNKNOWN"}
                  fill={true}
                />
              </Box>
              {currentChain?.name || "Unknown"}
              <MenuArrow />
            </Button>
          </MenuTrigger>
        )}
        <MenuContent>
          <MenuItemGroup title="Choose Your Network">
            {getAvailableChains().map(
              (chain) =>
                chain.id !== currentChain?.id && (
                  <MenuItem
                    onClick={() => onSelectChain(chain.id)}
                    key={chain.id}
                    value={chain.id.toString()}
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
          </MenuItemGroup>
        </MenuContent>
      </>
    </MenuRoot>
  );
}
