"use client";

import { IconButton, IconButtonProps, Stack, StackProps } from "@mutuals/ui";
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoTwitter,
} from "react-icons/io5";
import { OAuthProviderType, useLoginWithOAuth } from "@privy-io/react-auth";
import { SiFarcaster } from "react-icons/si";
import { useAuthShell } from "@/features/Shell/Login/Provider";
import { useState } from "react";

export type AuthLoginSocialsProps = StackProps;

export default function AuthLoginSocials({ ...props }: AuthLoginSocialsProps) {
  const { onLoginComplete, onLoginError, onBeforeLogin } = useAuthShell();
  const [variant, setVariant] = useState<OAuthProviderType | null>(null);

  const { initOAuth, state } = useLoginWithOAuth({
    onComplete: async ({ user, isNewUser }) => {
      await onLoginComplete({
        requiresWallet: !user.wallet,
        callbackTimeout: 100,
        isNewUser,
        user,
      });
    },
    onError: (errorCode) => {
      onLoginError(new Error(`Login failed: ${errorCode}`));
    },
  });

  const handleOAuthLogin = async (provider: OAuthProviderType) => {
    setVariant(provider);
    onBeforeLogin();
    await initOAuth({ provider });
  };

  const loading = state.status == "loading" || state.status == "done";

  const socialProviders: IconButtonProps[] = [
    {
      "aria-label": "Sign in with Google",
      children: <IoLogoGoogle />,
      onClick: () => handleOAuthLogin("google"),
      loading: variant == "google" && loading,
    },
    {
      "aria-label": "Sign in with X",
      children: <IoLogoTwitter />,
      onClick: () => handleOAuthLogin("twitter"),
      loading: variant == "twitter" && loading,
    },
    {
      "aria-label": "Sign in with Github",
      children: <IoLogoGithub />,
      onClick: () => handleOAuthLogin("github"),
      loading: variant == "github" && loading,
    },
    {
      "aria-label": "Sign in with Discord",
      children: <IoLogoDiscord />,
      onClick: () => handleOAuthLogin("discord"),
      loading: variant == "discord" && loading,
    },
    /*  {
      "aria-label": "Sign in with Apple",
      children: <IoLogoApple />,
      onClick: () => handleOAuthLogin("apple"),
      loading: variant == "apple" && loading,
      disabled: true,
    },*/
    {
      "aria-label": "Sign in with Farcaster",
      children: <SiFarcaster />,
      onClick: () => handleOAuthLogin("instagram"),
      loading: variant == "instagram" && loading,
      disabled: true,
    },
  ];

  return (
    <Stack justifyContent={"center"} direction={"row"} {...props}>
      {socialProviders.map((props, index) => (
        <IconButton
          key={index}
          size="xl"
          variant={"subtle"}
          flex={"1"}
          {...props}
        />
      ))}
    </Stack>
  );
}
