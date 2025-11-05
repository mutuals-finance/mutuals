"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Stack, StackProps } from "@mutuals/ui";
import { PiDetective } from "react-icons/pi";
import { useGuestAccounts } from "@privy-io/react-auth";

type AuthLoginGuestProps = StackProps;

export default function AuthLoginGuest({ ...props }: AuthLoginGuestProps) {
  const { createGuestAccount } = useGuestAccounts();

  return (
    <Stack {...props}>
      <WalletSelectionButton
        onClick={() => createGuestAccount()}
        name={"Continue as guest"}
        iconAvatarProps={{
          unstyled: true,
        }}
        icon={{ size: "md", children: <PiDetective /> }}
      />
    </Stack>
  );
}
