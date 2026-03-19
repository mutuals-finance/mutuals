"use client";

import { Stack, type StackProps } from "@mutuals/ui";
import { useGuestAccounts } from "@privy-io/react-auth";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { useAuthShell } from "@/features/shell/login/provider";
import WalletSelectionButton from "@/features/wallet/selection-button";

type AuthLoginGuestProps = StackProps;

export default function AuthLoginGuest({ ...props }: AuthLoginGuestProps) {
  const [loading, setLoading] = useState(false);
  const { onLoginComplete, onBeforeLogin } = useAuthShell();
  const { createGuestAccount } = useGuestAccounts();

  const handleCreateGuestAccount = async () => {
    onBeforeLogin();
    setLoading(true);
    const user = await createGuestAccount();
    await onLoginComplete({
      requiresWallet: !user.wallet,
      user,
      isNewUser: true,
    });
    setLoading(false);
  };

  return (
    <Stack {...props}>
      <WalletSelectionButton
        icon={{ size: "md", children: <IoEyeOffSharp /> }}
        iconAvatarProps={{
          unstyled: true,
        }}
        loading={loading}
        name={"Continue as guest"}
        onClick={() => handleCreateGuestAccount()}
      />
    </Stack>
  );
}
