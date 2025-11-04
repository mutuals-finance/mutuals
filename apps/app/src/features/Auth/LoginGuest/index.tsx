"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { useCreateGuestWallets } from "@getpara/react-sdk";
import { Stack, StackProps } from "@mutuals/ui";
import { PiDetective } from "react-icons/pi";

type AuthLoginGuestProps = StackProps;

export default function AuthLoginGuest(props: AuthLoginGuestProps) {
  const { createGuestWallets, isIdle } = useCreateGuestWallets();

  const onClickGuestLoginButton = () => {
    createGuestWallets(undefined, {
      onSuccess: (wallets) => {
        console.log(
          "Guest wallets created, app is now in Guest Mode:",
          wallets,
        );
      },
      onError: (error) => {
        console.error("Error creating guest wallets:", error);
      },
      onSettled: () => {
        console.log("Guest wallets creation process settled.");
      },
    });
  };

  return (
    <Stack {...props}>
      <WalletSelectionButton
        onClick={() => onClickGuestLoginButton()}
        name={"Continue as Guest"}
        icon={{ children: <PiDetective /> }}
      />
    </Stack>
  );
}
