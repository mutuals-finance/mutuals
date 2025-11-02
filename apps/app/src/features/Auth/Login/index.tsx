"use client";

import { Stack, StackProps } from "@mutuals/ui";

import AuthLoginWallet from "@/features/Auth/LoginWallet";
import AuthLoginEmail from "@/features/Auth/LoginEmail";
import AuthLoginSocials, {
  StoreCredentialsOptions,
} from "@/features/Auth/LoginSocials";
import AuthLoginSeparator from "@/features/Auth/Login/Separator";
import AuthLoginGuest from "@/features/Auth/LoginGuest";
import { useEffect } from "react";

type AuthLoginProps = StackProps & {
  credentials?: StoreCredentialsOptions;
};

export default function AuthLogin({ credentials, ...props }: AuthLoginProps) {
  useEffect(() => {
    console.log("2. Initial URL:", window.location.href);
    console.log("3. Initial search params:", window.location.search);

    // Add a mutation observer to watch URL changes
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      console.log("4. pushState called with:", args);
      return originalPushState.apply(this, args);
    };

    window.history.replaceState = function (...args) {
      console.log("5. replaceState called with:", args);
      return originalReplaceState.apply(this, args);
    };
  }, []);

  return (
    <Stack gap={"6"} alignItems={"stretch"} {...props}>
      <AuthLoginSocials gap="2" credentials={credentials} />
      <AuthLoginSeparator />

      <AuthLoginEmail />
      <AuthLoginSeparator />

      <AuthLoginWallet gap="2" />
      <AuthLoginSeparator />

      <AuthLoginGuest />
    </Stack>
  );
}
