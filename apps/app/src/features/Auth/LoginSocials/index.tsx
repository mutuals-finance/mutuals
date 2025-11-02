"use client";

import { IconButton, IconButtonProps, Stack, StackProps } from "@mutuals/ui";
import {
  IoLogoApple,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoTwitter,
} from "react-icons/io5";
import { OAuthProvider, useOAuth, useWallets } from "@openfort/react";
import { useCallback } from "react";
import { useEffectOnce } from "react-use";

export type StoreCredentialsOptions = {
  player: string;
  accessToken: string;
  refreshToken: string;
};

export type AuthLoginSocialsProps = StackProps & {
  credentials?: StoreCredentialsOptions;
};

export default function AuthLoginSocials({
  credentials,
  ...props
}: AuthLoginSocialsProps) {
  const {
    initOAuth,
    linkOauth,
    storeCredentials,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useOAuth({
    redirectTo: "http://localhost:3000/auth/login",
    recoverWalletAutomatically: true,
  });

  const { wallets, availableWallets } = useWallets();

  const handleOAuthCallback = useCallback(
    async (options: StoreCredentialsOptions) => {
      await storeCredentials({
        ...options,
        onSuccess: (e) => console.log("storeCredentials onSuccess", e),
        onError: (e) => console.log("storeCredentials onError", e),
        onSettled: (e) => console.log("storeCredentials onSettled", e),
      });
      //const newWallet = await createWallet();
    },
    [storeCredentials],
  );

  useEffectOnce(() => {
    if (credentials) {
      void handleOAuthCallback(credentials);
    }
    console.log(wallets, availableWallets);
  });

  const socialProviders: IconButtonProps[] = [
    {
      "aria-label": "Sign in with Google",
      children: <IoLogoGoogle />,
      onClick: () => initOAuth({ provider: OAuthProvider.GOOGLE }),
    },
    {
      "aria-label": "Sign in with X",
      children: <IoLogoTwitter />,
      onClick: () => initOAuth({ provider: OAuthProvider.TWITTER }),
      disabled: true,
    },
    {
      "aria-label": "Sign in with Apple",
      children: <IoLogoApple />,
      onClick: () => initOAuth({ provider: OAuthProvider.APPLE }),
      disabled: true,
    },
    {
      "aria-label": "Sign in with Meta",
      children: <IoLogoFacebook />,
      onClick: () => initOAuth({ provider: OAuthProvider.FACEBOOK }),
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
