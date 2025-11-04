"use client";

import { IconButton, IconButtonProps, Stack, StackProps } from "@mutuals/ui";
import {
  IoLogoApple,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoTwitter,
} from "react-icons/io5";
import {
  AuthStateLogin,
  AuthStateSignup,
  TOAuthMethod,
  useVerifyOAuth,
} from "@getpara/react-sdk";
import { useAuthState } from "@/features/Auth/StateProvider";
import { SiFarcaster } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { useRef } from "react";

export type AuthLoginSocialsProps = StackProps & {
  onSelectSignupMethod?: (url: string, chosenMethod: string) => void;
  onSelectLoginMethod?: (url: string) => void;
};

export default function AuthLoginSocials({
  onSelectSignupMethod,
  onSelectLoginMethod,
  ...props
}: AuthLoginSocialsProps) {
  const popupWindow = useRef<Window | null>(null);
  const { verifyOAuth, isIdle, isError } = useVerifyOAuth();
  const [authState, setAuthState] = useAuthState();

  const onOAuthLogin = (method: TOAuthMethod) => {
    verifyOAuth(
      {
        // @ts-expect-error: TOAuthMethod is compatible with OAuthProvider
        method,
        onOAuthPopup: (oAuthPopup) => {
          popupWindow.current = oAuthPopup;
        },
        isCanceled: () => Boolean(popupWindow.current?.closed),
      },
      {
        onSuccess: (authState: AuthStateLogin | AuthStateSignup) => {
          setAuthState(authState);

          switch (authState.stage) {
            case "signup":
              // New user: refer to 'Sign up a new user'
              onSelectSignupMethod?.(authState.passkeyUrl ?? "", method);
              break;
            case "login":
              // Returning user: refer to 'Log in an existing user'
              onSelectLoginMethod?.(authState.passkeyUrl ?? "");
              break;
          }
        },
        onError: (error) => {
          // Handle a canceled OAuth verification
        },
      },
    );
  };

  const socialProviders: IconButtonProps[] = [
    {
      "aria-label": "Sign in with Google",
      children: <IoLogoGoogle />,
      onClick: () => onOAuthLogin("GOOGLE"),
    },
    {
      "aria-label": "Sign in with X",
      children: <IoLogoTwitter />,
      onClick: () => onOAuthLogin("TWITTER"),
    },
    {
      "aria-label": "Sign in with Apple",
      children: <IoLogoApple />,
      onClick: () => onOAuthLogin("APPLE"),
    },
    {
      "aria-label": "Sign in with Meta",
      children: <IoLogoFacebook />,
      onClick: () => onOAuthLogin("FACEBOOK"),
    },
    {
      "aria-label": "Sign in with Farcaster",
      children: <SiFarcaster />,
      onClick: () => onOAuthLogin("FARCASTER"),
      disabled: true,
    },
    {
      "aria-label": "Sign in with Telegram",
      children: <BsTelegram />,
      onClick: () => onOAuthLogin("TELEGRAM"),
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
