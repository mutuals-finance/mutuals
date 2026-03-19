"use client";

import { Button, Stack, type StackProps } from "@mutuals/ui";
import {
  useLoginWithPasskey,
  useSignupWithPasskey,
} from "@privy-io/react-auth";
import { useState } from "react";
import { IoFingerPrintSharp } from "react-icons/io5";
import { useAuthShell } from "@/features/shell/login/provider";
import WalletSelectionButton from "@/features/wallet/selection-button";

type AuthLoginPasskeyProps = StackProps;

export default function AuthLoginPasskey({ ...props }: AuthLoginPasskeyProps) {
  const { onLoginComplete, onLoginError, onBeforeLogin } = useAuthShell();
  const [variant, setVariant] = useState<"login" | "signup">("login");

  const { loginWithPasskey, state: loginState } = useLoginWithPasskey({
    onComplete: ({ user, isNewUser }) =>
      onLoginComplete({ requiresWallet: !user.wallet, isNewUser, user }),
    onError: (error) =>
      onLoginError(new Error(`Passkey login failed: ${error}`)),
  });

  const { signupWithPasskey, state: signupState } = useSignupWithPasskey({
    onComplete: ({ user, isNewUser }) =>
      onLoginComplete({ requiresWallet: !user.wallet, isNewUser, user }),
    onError: (error) =>
      onLoginError(new Error(`Passkey signup failed: ${error}`)),
  });

  const handleLogin = () => {
    onBeforeLogin();
    setVariant("login");
    loginWithPasskey();
  };

  const handleSignup = () => {
    onBeforeLogin();
    setVariant("signup");
    signupWithPasskey();
  };

  const signupLoading =
    signupState.status === "generating-challenge" ||
    signupState.status === "awaiting-passkey" ||
    signupState.status === "submitting-response";

  const loginLoading =
    loginState.status === "generating-challenge" ||
    loginState.status === "awaiting-passkey" ||
    loginState.status === "submitting-response";

  return (
    <Stack alignItems={"center"} {...props}>
      <WalletSelectionButton
        icon={{ size: "md", children: <IoFingerPrintSharp /> }}
        iconAvatarProps={{
          unstyled: true,
        }}
        loading={variant === "login" && loginLoading}
        name={"Sign in with passkey"}
        onClick={() => handleLogin()}
      />

      <Button
        loading={variant === "signup" && signupLoading}
        onClick={() => handleSignup()}
        size="sm"
        variant={"ghost"}
      >
        Sign up with passkey
      </Button>
    </Stack>
  );
}
