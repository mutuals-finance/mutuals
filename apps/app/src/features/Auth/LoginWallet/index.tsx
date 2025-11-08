"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Stack, StackProps } from "@mutuals/ui";
import { IoWalletSharp } from "react-icons/io5";
import { useConnectWallet, useWallets } from "@privy-io/react-auth";
import { useAuthShell } from "@/features/Shell/Login/Provider";
import React, { useMemo, useState } from "react";
import { useUpdateEffect } from "react-use";

type AuthLoginWalletProps = StackProps;

export default function AuthLoginWallet({ ...props }: AuthLoginWalletProps) {
  const [loginWalletLoading, setLoginWalletLoading] = useState(false);
  const { onLoginComplete, onLoginError, onBeforeLogin } = useAuthShell();
  const { wallets } = useWallets();

  const activeWallet = useMemo(() => wallets?.[0], [wallets]);

  useUpdateEffect(() => {
    if (activeWallet && !activeWallet.linked && !loginWalletLoading) {
      setLoginWalletLoading(true);
      activeWallet.loginOrLink().finally(() => setLoginWalletLoading(false));
    }
  }, [activeWallet?.linked]);

  useUpdateEffect(() => {
    if (activeWallet?.linked) {
      onLoginComplete?.({
        requiresWallet: false,
        identify: false,
      });
    }
  }, [activeWallet?.linked]);

  const { connectWallet } = useConnectWallet({
    onSuccess: async () => {},
    onError: (errorCode) => {
      if (errorCode != "generic_connect_wallet_error") {
        onLoginError(new Error(`Wallet login failed: ${errorCode}`));
      }
    },
  });

  const handleLoginWallet = () => {
    onBeforeLogin();
    connectWallet({ walletChainType: "ethereum-only" });
  };

  return (
    <Stack {...props}>
      <WalletSelectionButton
        name={"Connect your wallet"}
        onClick={() => handleLoginWallet()}
        iconAvatarProps={{
          unstyled: true,
        }}
        icon={{ size: "md", children: <IoWalletSharp /> }}
        loading={loginWalletLoading}
      />
    </Stack>
  );
}
