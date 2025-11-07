"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Button, Stack, StackProps } from "@mutuals/ui";
import {
  useLoginWithPasskey,
  useSignupWithPasskey,
} from "@privy-io/react-auth";
import { IoFingerPrintSharp } from "react-icons/io5";
import { useAuthShell } from "@/features/Shell/Login/Provider";

type AuthLoginPasskeyProps = StackProps;

export default function AuthLoginPasskey({ ...props }: AuthLoginPasskeyProps) {
  const { onLoginComplete } = useAuthShell();
  const { signupWithPasskey } = useSignupWithPasskey({
    onComplete: ({ user, isNewUser }) =>
      onLoginComplete({ requiresWallet: !user.wallet, isNewUser, user }),
  });

  const { loginWithPasskey } = useLoginWithPasskey({
    onComplete: ({ user, isNewUser }) =>
      onLoginComplete({ requiresWallet: !user.wallet, isNewUser, user }),
  });

  return (
    <Stack alignItems={"center"} {...props}>
      <WalletSelectionButton
        onClick={() => loginWithPasskey()}
        name={"Sign in with passkey"}
        iconAvatarProps={{
          unstyled: true,
        }}
        icon={{ size: "md", children: <IoFingerPrintSharp /> }}
      />

      <Button variant={"ghost"} size="sm" onClick={() => signupWithPasskey()}>
        Sign up with passkey
      </Button>
    </Stack>
  );
}
