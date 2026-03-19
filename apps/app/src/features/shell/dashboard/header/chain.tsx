"use client";

import {
  Box,
  Button,
  MenuArrow,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
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
      {isConnected && (
        <MenuTrigger asChild>
          <Button hideBelow={"lg"} loading={!!isPending} variant={"ghost"}>
            <Box h={"4"} position={"relative"} w="4">
              <NextImage
                alt={currentChain?.name || "UNKNOWN"}
                fill={true}
                src={getLogoByChainId(currentChain?.id)}
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
                  key={chain.id}
                  onClick={() => onSelectChain(chain.id)}
                  value={chain.id.toString()}
                >
                  <Box h="3" mr={"1"} position={"relative"} w="3">
                    <NextImage alt={chain.name} fill={true} src={chain.logo} />
                  </Box>

                  {chain.name}
                  {isPending && variables?.chainId === chain.id && (
                    <Spinner ml={"1"} size="xs" />
                  )}
                </MenuItem>
              )
          )}
        </MenuItemGroup>
      </MenuContent>
    </MenuRoot>
  );
}
