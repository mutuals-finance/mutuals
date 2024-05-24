"use client";

import { Box, Text, VStack } from "@splitfi/ui";
import { Connector, useConnect, useConnections, useReconnect } from "wagmi";
import WalletConnectButton from "@/app/auth/sign-in/WalletConnectButton";
import { partition } from "src/utils";
import { useAuth } from "@/context/AuthContext";
import { useCallback } from "react";

export default function WalletConnectContent() {
  const connections = useConnections();
  const { data, connect, connectors } = useConnect();
  const { reconnectAsync } = useReconnect();
  const { login } = useAuth();

  const [recentConnectors, popularConnectors] = partition(
    connectors as Connector[],
    (c) => c.type === "injected",
  );

  const connectOrLogin = useCallback(
    async (connector: Connector) => {
      const isAuthorized = await connector.isAuthorized();

      if (!isAuthorized) {
        const result = await reconnectAsync({ connectors: [connector] });

        if (result.length <= 0) {
          connect({ connector });
        }
      } else {
        login();
      }
    },
    [connections, reconnectAsync, connect, login],
  );

  return (
    <>
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
                  onClick={() => connectOrLogin(connector)}
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
                onClick={() => connectOrLogin(connector)}
                connector={connector}
              />
            ))}
          </VStack>
        </Box>
      </VStack>
    </>
  );
}
