"use client";

import { IconButton, IconButtonProps, Stack, StackProps } from "@mutuals/ui";
import {
  IoLogoApple,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { useLoginWithOAuth } from "@privy-io/react-auth";

export type AuthLoginSocialsProps = StackProps;

export default function AuthLoginSocials({ ...props }: AuthLoginSocialsProps) {
  const { initOAuth } = useLoginWithOAuth();

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
      "aria-label": "Sign in with Apple",
      children: <IoLogoApple />,
      onClick: () => initOAuth({ provider: "apple" }),
    },
    {
      "aria-label": "Sign in with Github",
      children: <IoLogoGithub />,
      onClick: () => initOAuth({ provider: "github" }),
    },
    {
      "aria-label": "Sign in with Instagram",
      children: <IoLogoInstagram />,
      onClick: () => initOAuth({ provider: "instagram" }),
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
