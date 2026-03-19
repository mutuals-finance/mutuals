"use client";

import { Stack, type StackProps } from "@mutuals/ui";
import { useConnectWallet, useWallets } from "@privy-io/react-auth";
import { useMemo, useState } from "react";
import { IoWalletSharp } from "react-icons/io5";
import { useUpdateEffect } from "react-use";
import { useAuthShell } from "@/features/shell/login/provider";
import WalletSelectionButton from "@/features/wallet/selection-button";

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
    onSuccess: async () => {
      /* intentional */
    },
    onError: (errorCode) => {
      if (errorCode !== "generic_connect_wallet_error") {
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
        icon={{ size: "md", children: <IoWalletSharp /> }}
        iconAvatarProps={{
          unstyled: true,
        }}
        loading={loginWalletLoading}
        name={"Connect your wallet"}
        onClick={() => handleLoginWallet()}
      />
    </Stack>
  );
}
