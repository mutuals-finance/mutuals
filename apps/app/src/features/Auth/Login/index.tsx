"use client";

import { Stack, StackProps } from "@mutuals/ui";

import AuthLoginWallet from "@/features/Auth/LoginWallet";
import AuthLoginEmail from "@/features/Auth/LoginEmail";
import AuthLoginSocials from "@/features/Auth/LoginSocials";
import AuthLoginGuest from "@/features/Auth/LoginGuest";

import AuthLoginSeparator from "@/features/Auth/Login/Separator";
import AuthLoginPasskey from "@/features/Auth/LoginPasskey";
import AuthLoginProvider, {
  AuthLoginQueryParams,
} from "@/features/Auth/Login/Provider";

type AuthLoginProps = StackProps & AuthLoginQueryParams;

export default function AuthLogin({ callbackUrl, ...props }: AuthLoginProps) {
  return (
    <AuthLoginProvider callbackUrl={callbackUrl}>
      <Stack gap={"6"} alignItems={"stretch"} {...props}>
        <AuthLoginEmail />
        <AuthLoginSocials gap="2" />

        <AuthLoginSeparator />
        <AuthLoginWallet />

        <AuthLoginSeparator />
        <AuthLoginPasskey />

        <AuthLoginSeparator />
        <AuthLoginGuest />
      </Stack>
    </AuthLoginProvider>
  );
}
