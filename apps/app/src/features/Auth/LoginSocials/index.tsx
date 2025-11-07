"use client";

import { IconButton, IconButtonProps, Stack, StackProps } from "@mutuals/ui";
import {
  IoLogoApple,
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoTwitter,
} from "react-icons/io5";
import { useLoginWithOAuth } from "@privy-io/react-auth";
import { SiFarcaster } from "react-icons/si";
import { useAuthShell } from "@/features/Shell/Login/Provider";

export type AuthLoginSocialsProps = StackProps;

export default function AuthLoginSocials({ ...props }: AuthLoginSocialsProps) {
  const { onLoginComplete } = useAuthShell();

  const { initOAuth } = useLoginWithOAuth({
    onComplete: async ({ user, isNewUser }) => {
      await onLoginComplete({
        requiresWallet: !user.wallet,
        callbackTimeout: 100,
        isNewUser,
        user,
      });
    },
  });

  const socialProviders: IconButtonProps[] = [
    {
      "aria-label": "Sign in with Google",
      children: <IoLogoGoogle />,
      onClick: () => initOAuth({ provider: "google" }),
    },
    {
      "aria-label": "Sign in with X",
      children: <IoLogoTwitter />,
      onClick: () => initOAuth({ provider: "twitter" }),
    },
    {
      "aria-label": "Sign in with Github",
      children: <IoLogoGithub />,
      onClick: () => initOAuth({ provider: "github" }),
    },
    {
      "aria-label": "Sign in with Discord",
      children: <IoLogoDiscord />,
      onClick: () => initOAuth({ provider: "discord" }),
    },
    {
      "aria-label": "Sign in with Apple",
      children: <IoLogoApple />,
      onClick: () => initOAuth({ provider: "apple" }),
      disabled: true,
    },
    {
      "aria-label": "Sign in with Farcaster",
      children: <SiFarcaster />,
      onClick: () => initOAuth({ provider: "instagram" }),
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
