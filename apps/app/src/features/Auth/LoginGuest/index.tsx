"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { useConnect } from "wagmi";
import coinbaseWallet from "@/assets/svg/connectors/coinbaseWallet.svg";
import metaMask from "@/assets/svg/connectors/metaMask.svg";
import walletConnect from "@/assets/svg/connectors/walletConnect.svg";
import Magic from "@/assets/svg/connectors/Magic.svg";
import { Stack, StackProps } from "@mutuals/ui";
import { PiDetective } from "react-icons/pi";
import { useGuestAuth } from "@openfort/react";

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

type AuthLoginGuestProps = StackProps;

export default function AuthLoginGuest(props: AuthLoginGuestProps) {
  const { signUpGuest, isLoading } = useGuestAuth({
    throwOnError: true,
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {},
  });

  return (
    <Stack {...props}>
      <WalletSelectionButton
        onClick={() => signUpGuest()}
        name={"Continue as Guest"}
        icon={{ children: <PiDetective /> }}
        loading={isLoading}
      />
    </Stack>
  );
}
