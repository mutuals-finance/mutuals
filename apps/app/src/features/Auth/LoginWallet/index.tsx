"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Stack, StackProps } from "@mutuals/ui";
import { useConnectWallet } from "@privy-io/react-auth";
import { IoWalletSharp } from "react-icons/io5";

type AuthLoginWalletProps = StackProps;

export default function AuthLoginWallet({ ...props }: AuthLoginWalletProps) {
  const { connectWallet } = useConnectWallet();

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
