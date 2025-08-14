"use client";

import { Stack, Heading } from "@mutuals/ui";
import { Connector, useConnect } from "wagmi";
import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { partition } from "@/utils";
import { useAuth } from "@/features/Auth/Provider";
import coinbaseWallet from "@/assets/svg/connectors/coinbaseWallet.svg";
import metaMask from "@/assets/svg/connectors/metaMask.svg";
import walletConnect from "@/assets/svg/connectors/walletConnect.svg";
import Magic from "@/assets/svg/connectors/Magic.svg";

const connectorIcons = {
  coinbaseWallet,
  metaMask,
  walletConnect,
  Magic,
};

function useConnectors() {
  const { connectors: _connectors } = useConnect();

  const connectors = _connectors.map((connector) => {
    console.log("connector.id", connector);
    return {
      ...connector,
      icon: connectorIcons[connector.type as keyof typeof connectorIcons],
    };
  });

  return { connectors };
}

export function WalletSelectionWallet() {
  const { connectors } = useConnectors();

  const { connectAndLogin } = useAuth();

  const [recentConnectors, popularConnectors] = partition(
    connectors as Connector[],
    (c) => c.type === "injected",
  );

  return (
    <Stack gap={"4"} alignItems={"stretch"}>
      {(recentConnectors?.length ?? 0) > 0 && (
        <Stack alignItems={"flex-start"}>
          <Heading as={"h4"} variant={"subtag"} textStyle={"xs"}>
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

      <Stack alignItems={"flex-start"}>
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
