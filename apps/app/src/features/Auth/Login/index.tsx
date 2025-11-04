"use client";

import { Stack, StackProps } from "@mutuals/ui";

import AuthLoginWallet from "@/features/Auth/LoginWallet";
import AuthLoginEmail from "@/features/Auth/LoginEmail";
import AuthLoginSocials from "@/features/Auth/LoginSocials";
import AuthLoginSeparator from "@/features/Auth/Login/Separator";
import AuthLoginGuest from "@/features/Auth/LoginGuest";
import {
  useCreateWallet,
  useWaitForLogin,
  useWaitForWalletCreation,
} from "@getpara/react-sdk";
import { useRef } from "react";
import { useRouter } from "next/navigation";

type UseAuthSigninResult = {
  callbackUrl?: string;
};

type AuthLoginProps = StackProps & UseAuthSigninResult;

export default function AuthLogin({ callbackUrl, ...props }: AuthLoginProps) {
  const popupWindow = useRef<Window | null>(null);
  const { waitForWalletCreation } = useWaitForWalletCreation();
  const { createWalletAsync } = useCreateWallet();
  const router = useRouter();

  const handleCreateWallet = async () => {
    try {
      const result = await createWalletAsync({
        type: "EVM",
      });

      console.log("Created wallets:", result);
    } catch (err) {
      console.error("Failed to create wallets:", err);
    }
  };

  // Invoke using the `loginUrl` for basic auth users or `passkeyUrl`, `passwordUrl` or `pinUrl` for passkey/password/PIN users
  const onSelectSignupMethod = (url: string, chosenMethod = "WALLET") => {
    popupWindow.current = window.open(url, `ParaSignup_${chosenMethod}`);

    waitForWalletCreation(
      {
        isCanceled: () => Boolean(popupWindow.current?.closed),
      },
      {
        onSuccess: () => {
          // Handle successful signup and wallet provisioning
          router.push(callbackUrl ?? "/");
        },
        onError: (error) => {
          // Handle a canceled signup
        },
      },
    );
  };

  const { waitForLogin } = useWaitForLogin();

  // Invoke using the `loginUrl` for basic auth users or `passkeyUrl`, `passwordUrl` or `pinUrl` for passkey/password/PIN users
  const onSelectLoginMethod = (url: string) => {
    console.log("Selected login method:", url);
    popupWindow.current = window.open(url, "ParaLogin");

    waitForLogin(
      {
        isCanceled: () => Boolean(popupWindow.current?.closed),
      },
      {
        onSuccess: async (result) => {
          const { needsWallet } = result;

          if (needsWallet) {
            await handleCreateWallet();
          }
          router.push(callbackUrl ?? "/");
        },
        onError: (error) => {
          // Handle a canceled login
        },
      },
    );
  };

  return (
    <Stack gap={"8"} alignItems={"stretch"} {...props}>
      <AuthLoginSocials
        gap="2"
        onSelectSignupMethod={onSelectSignupMethod}
        onSelectLoginMethod={onSelectLoginMethod}
      />
      <AuthLoginSeparator />

      <AuthLoginEmail />
      <AuthLoginSeparator />

      <AuthLoginWallet
        gap="2"
        onSelectSignupMethod={onSelectSignupMethod}
        onSelectLoginMethod={onSelectLoginMethod}
      />
      <AuthLoginSeparator />

      <AuthLoginGuest />
    </Stack>
  );
}
