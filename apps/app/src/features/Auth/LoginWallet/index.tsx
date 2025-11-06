"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Stack, StackProps } from "@mutuals/ui";
import { IoWalletSharp } from "react-icons/io5";
import { useConnectWallet } from "@privy-io/react-auth";
import { useAuthShell } from "@/features/Shell/Login/Provider";

type AuthLoginWalletProps = StackProps;

export default function AuthLoginWallet({ ...props }: AuthLoginWalletProps) {
  const { onLoginComplete } = useAuthShell();

  const { connectWallet } = useConnectWallet({
    onSuccess: () => onLoginComplete({ requiresWallet: false }),
  });

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
