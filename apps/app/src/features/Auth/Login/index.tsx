"use client";

import { Alert, Box, Heading, Stack, type StackProps, Text } from "@mutuals/ui";
import { useLifecycles } from "react-use";
import AuthLoginSeparator from "@/features/auth/login/separator";
import AuthLoginEmail from "@/features/auth/login-email";
import AuthLoginGuest from "@/features/auth/login-guest";
import AuthLoginPasskey from "@/features/auth/login-passkey";
import AuthLoginSocials from "@/features/auth/login-socials";
import AuthLoginWallet from "@/features/auth/login-wallet";
import {
  type AuthShellQueryParams,
  useAuthShell,
} from "@/features/shell/login/provider";

type AuthLoginProps = StackProps & AuthShellQueryParams;

export default function AuthLogin({
  callbackUrl = "/",
  ...props
}: AuthLoginProps) {
  const { setCallbackUrl, error } = useAuthShell();

  useLifecycles(
    () => setCallbackUrl(callbackUrl),
    () => setCallbackUrl(null)
  );

  return (
    <>
      <Box>
        <Heading as={"h1"} mb={"2"} textStyle={{ base: "4xl", lg: "5xl" }}>
          Sign in to Mutuals
        </Heading>
        <Text color={"fg.muted"} textStyle={{ lg: "lg" }}>
          Choose your favourite method to sign in. You can always add more
          methods later.
        </Text>
      </Box>

      <Stack alignItems={"stretch"} gap={"6"} {...props}>
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
        <Text color={"fg.subtle"} textStyle={"xs"}>
          By connecting, you agree to Mutual’s Terms of Service and acknowledge
          that you have read and understand the Mutuals Disclaimer.
        </Text>
      </Box>
    </>
  );
}
