"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Stack, StackProps } from "@mutuals/ui";
import { IoWalletSharp } from "react-icons/io5";
import { useConnectWallet, useWallets } from "@privy-io/react-auth";
import { useAuthShell } from "@/features/Shell/Login/Provider";

type AuthLoginWalletProps = StackProps;

export default function AuthLoginWallet({ ...props }: AuthLoginWalletProps) {
  const { onLoginComplete } = useAuthShell();
  const { wallets } = useWallets();

  const primaryWallet = wallets?.[0];

  const { connectWallet } = useConnectWallet({
    onSuccess: async () => {
      //void loginOrLink();
      onLoginComplete?.({
        requiresWallet: false,
        identify: false,
      });
    },
  });

  const loginOrLink = async () => {
    if (!primaryWallet) return;
    /*
    await primaryWallet.loginOrLink().then(() => {
    });
*/
  };

  return (
    <Stack {...props}>
      <WalletSelectionButton
        name={"Connect your wallet"}
        onClick={() => connectWallet({ walletChainType: "ethereum-only" })}
        iconAvatarProps={{
          unstyled: true,
        }}
        icon={{ size: "md", children: <IoWalletSharp /> }}
      />
    </Stack>
  );
}
