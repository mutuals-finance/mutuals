"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Stack, StackProps } from "@mutuals/ui";
import { IoEyeOffSharp } from "react-icons/io5";
import { useGuestAccounts } from "@privy-io/react-auth";
import { useState } from "react";
import { useAuthShell } from "@/features/Shell/Login/Provider";

type AuthLoginGuestProps = StackProps;

export default function AuthLoginGuest({ ...props }: AuthLoginGuestProps) {
  const [loading, setLoading] = useState(false);
  const { onLoginComplete } = useAuthShell();
  const { createGuestAccount } = useGuestAccounts();

  const handleCreateGuestAccount = async () => {
    setLoading(true);
    const user = await createGuestAccount();
    await onLoginComplete({ requiresWallet: !user.wallet });
    setLoading(false);
  };

  return (
    <Stack {...props}>
      <WalletSelectionButton
        onClick={() => handleCreateGuestAccount()}
        name={"Continue as guest"}
        iconAvatarProps={{
          unstyled: true,
        }}
        icon={{ size: "md", children: <IoEyeOffSharp /> }}
        loading={loading}
      />
    </Stack>
  );
}
