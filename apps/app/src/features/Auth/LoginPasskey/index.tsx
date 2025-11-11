"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Button, Stack, StackProps } from "@mutuals/ui";
import {
  useLoginWithPasskey,
  useSignupWithPasskey,
} from "@privy-io/react-auth";
import { IoFingerPrintSharp } from "react-icons/io5";
import { useAuthShell } from "@/features/Shell/Login/Provider";
import { useState } from "react";

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
    void loginWithPasskey();
  };

  const handleSignup = () => {
    onBeforeLogin();
    setVariant("signup");
    void signupWithPasskey();
  };

  const signupLoading =
    signupState.status == "generating-challenge" ||
    signupState.status == "awaiting-passkey" ||
    signupState.status == "submitting-response";

  const loginLoading =
    loginState.status == "generating-challenge" ||
    loginState.status == "awaiting-passkey" ||
    loginState.status == "submitting-response";

  return (
    <Stack alignItems={"center"} {...props}>
      <WalletSelectionButton
        onClick={() => handleLogin()}
        name={"Sign in with passkey"}
        iconAvatarProps={{
          unstyled: true,
        }}
        loading={variant == "login" && loginLoading}
        icon={{ size: "md", children: <IoFingerPrintSharp /> }}
      />

      <Button
        variant={"ghost"}
        size="sm"
        loading={variant == "signup" && signupLoading}
        onClick={() => handleSignup()}
      >
        Sign up with passkey
      </Button>
    </Stack>
  );
}
