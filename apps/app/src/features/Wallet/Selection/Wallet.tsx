"use client";

import { Stack, Heading } from "@mutuals/ui";
import { Connector, useConnect } from "wagmi";
import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { partition } from "@/utils";
import { useAuth } from "@/features/Auth/Provider";

export function WalletSelectionWallet() {
  const { connectors } = useConnect();
  const { connectAndLogin } = useAuth();

  const [recentConnectors, popularConnectors] = partition(
    connectors as Connector[],
    (c) => c.type === "injected",
  );

  return (
    <Stack gap={"4"} alignItems={"stretch"}>
      {(recentConnectors?.length ?? 0) > 0 && (
        <Stack>
          <Heading as={"h4"} variant={"subtag"} fontSize={"xs"}>
            Recent
          </Heading>
          {recentConnectors?.map((connector) => (
            <WalletSelectionButton
              key={connector.id}
              onClick={() => connectAndLogin(connector)}
              connector={connector}
            />
          ))}
        </Stack>
      )}

      <Stack>
        <Heading as={"h4"} variant={"subtag"} fontSize={"xs"}>
          Popular
        </Heading>
        {popularConnectors?.map((connector) => (
          <WalletSelectionButton
            key={connector.id}
            onClick={() => connectAndLogin(connector)}
            connector={connector}
          />
        ))}
      </Stack>
    </Stack>
  );
}
