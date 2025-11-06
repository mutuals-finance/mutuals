"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Stack, StackProps } from "@mutuals/ui";
import { IoEyeOffSharp } from "react-icons/io5";
import { useGuestAccounts } from "@privy-io/react-auth";
import { useAuthLogin } from "@/features/Auth/Login/Provider";
import { useState } from "react";

type AuthLoginGuestProps = StackProps;

export default function AuthLoginGuest({ ...props }: AuthLoginGuestProps) {
  const [loading, setLoading] = useState(false);
  const { onComplete: onLoginComplete } = useAuthLogin();
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
