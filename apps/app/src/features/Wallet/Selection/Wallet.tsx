"use client";

import { Field, VStack } from "@mutuals/ui";
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
    <VStack gap={"6"} alignItems={"stretch"}>
      {(recentConnectors?.length ?? 0) > 0 && (
        <Field label={"Recent"} gap={"3"}>
          {recentConnectors?.map((connector) => (
            <WalletSelectionButton
              key={connector.id}
              onClick={() => connectAndLogin(connector)}
              connector={connector}
            />
          ))}
        </Field>
      )}

      <Field label={"Popular"} gap={"3"}>
        {popularConnectors?.map((connector) => (
          <WalletSelectionButton
            key={connector.id}
            onClick={() => connectAndLogin(connector)}
            connector={connector}
          />
        ))}
      </Field>
    </VStack>
  );
}
