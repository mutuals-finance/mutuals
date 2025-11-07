"use client";

import { Alert, Box, Heading, Stack, StackProps, Text } from "@mutuals/ui";

import AuthLoginWallet from "@/features/Auth/LoginWallet";
import AuthLoginEmail from "@/features/Auth/LoginEmail";
import AuthLoginSocials from "@/features/Auth/LoginSocials";
import AuthLoginGuest from "@/features/Auth/LoginGuest";

import AuthLoginSeparator from "@/features/Auth/Login/Separator";
import AuthLoginPasskey from "@/features/Auth/LoginPasskey";
import {
  AuthShellQueryParams,
  useAuthShell,
} from "@/features/Shell/Login/Provider";
import { useLifecycles } from "react-use";
import React from "react";

type AuthLoginProps = StackProps & AuthShellQueryParams;

export default function AuthLogin({
  callbackUrl = "/",
  ...props
}: AuthLoginProps) {
  const { setCallbackUrl, error } = useAuthShell();

  useLifecycles(
    () => setCallbackUrl(callbackUrl),
    () => setCallbackUrl(null),
  );

  return (
    <>
      <Box>
        <Heading as={"h1"} textStyle={{ base: "4xl", lg: "5xl" }} mb={"2"}>
          Sign in to Mutuals
        </Heading>
        <Text textStyle={{ lg: "lg" }} color={"fg.muted"}>
          Choose your favourite method to sign in. You can always add more
          methods later.
        </Text>
      </Box>

      <Stack gap={"6"} alignItems={"stretch"} {...props}>
        {!!error && (
          <Alert status={"error"} title={"Error"}>
            {error.message}
          </Alert>
        )}
        <AuthLoginEmail />
        <AuthLoginSocials gap="2" />

        <AuthLoginSeparator />
        <AuthLoginWallet />

        <AuthLoginSeparator />
        <AuthLoginPasskey />

        <AuthLoginSeparator />
        <AuthLoginGuest />
      </Stack>

      <Box>
        <Text textStyle={"xs"} color={"fg.subtle"}>
          By connecting, you agree to Mutual’s Terms of Service and acknowledge
          that you have read and understand the Mutuals Disclaimer.
        </Text>
      </Box>
    </>
  );
}
