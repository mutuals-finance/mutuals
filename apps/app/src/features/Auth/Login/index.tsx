"use client";

import { Stack, StackProps } from "@mutuals/ui";

import AuthLoginWallet from "@/features/Auth/LoginWallet";
import AuthLoginEmail from "@/features/Auth/LoginEmail";
import AuthLoginSocials from "@/features/Auth/LoginSocials";
import AuthLoginGuest from "@/features/Auth/LoginGuest";

import { useRouter } from "next/navigation";
import AuthLoginSeparator from "@/features/Auth/Login/Separator";
import { useCreateWallet, usePrivy } from "@privy-io/react-auth";
import { useCallback, useEffect } from "react";

type UseAuthSigninResult = {
  callbackUrl?: string;
};

type AuthLoginProps = StackProps & UseAuthSigninResult;

export default function AuthLogin({ callbackUrl, ...props }: AuthLoginProps) {
  const router = useRouter();
  const { createWallet } = useCreateWallet();
  const { authenticated, user } = usePrivy();

  const onLogin = useCallback(async () => {
    if (!user?.wallet && !user?.isGuest) {
      await createWallet({ createAdditional: false });
    }
    router.push(callbackUrl ?? "/");
  }, [user?.wallet, user?.isGuest, router, callbackUrl, createWallet]);

  useEffect(() => {
    if (authenticated) {
      void onLogin();
    }
  }, [authenticated, onLogin]);

  return (
    <Stack gap={"6"} alignItems={"stretch"} {...props}>
      <AuthLoginWallet />
      <AuthLoginSeparator />

      <AuthLoginEmail />

      <AuthLoginSocials gap="2" />

      <AuthLoginSeparator />
      <AuthLoginGuest />
    </Stack>
  );
}
