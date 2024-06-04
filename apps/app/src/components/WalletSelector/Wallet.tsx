"use client";

import { Box, Text, VStack } from "@splitfi/ui";
import { Connector, useConnect } from "wagmi";
import WalletConnectButton from "./WalletConnectButton";
import { partition } from "@/utils";
import { useAuth } from "@/features/Auth/Provider";

export function WalletSelectorWallet() {
  const { connectors } = useConnect();
  const { connectAndLogin } = useAuth();

  const [recentConnectors, popularConnectors] = partition(
    connectors as Connector[],
    (c) => c.type === "injected",
  );

  return (
    <VStack spacing={"6"} alignItems={"stretch"}>
      {(recentConnectors?.length ?? 0) > 0 && (
        <Box>
          <Text variant={"label"} fontSize="sm" mb={"3"}>
            Recent
          </Text>
          <VStack spacing={"3"}>
            {recentConnectors?.map((connector) => (
              <WalletConnectButton
                key={connector.id}
                onClick={() => connectAndLogin(connector)}
                connector={connector}
              />
            ))}
          </VStack>
        </Box>
      )}

      <Box>
        <Text variant={"label"} fontSize="sm" mb={"3"}>
          Popular
        </Text>
        <VStack spacing={"3"}>
          {popularConnectors?.map((connector) => (
            <WalletConnectButton
              key={connector.id}
              onClick={() => connectAndLogin(connector)}
              connector={connector}
            />
          ))}
        </VStack>
      </Box>
    </VStack>
  );
}
