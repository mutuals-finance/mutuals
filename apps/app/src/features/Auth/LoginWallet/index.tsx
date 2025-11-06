"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Stack, StackProps } from "@mutuals/ui";
import { IoWalletSharp } from "react-icons/io5";
import { useAuthLogin } from "@/features/Auth/Login/Provider";
import { useConnectWallet } from "@privy-io/react-auth";

type AuthLoginWalletProps = StackProps;

export default function AuthLoginWallet({ ...props }: AuthLoginWalletProps) {
  const { onComplete: onLoginComplete } = useAuthLogin();

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
