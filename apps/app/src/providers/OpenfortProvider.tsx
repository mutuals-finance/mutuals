"use client";

import React, { PropsWithChildren } from "react";
import {
  OpenfortProvider,
  SDKOverrides,
  OpenfortWalletConfig,
  AuthProvider,
  RecoveryMethod,
} from "@openfort/react";

import {
  OPENFORT_PUBLISHABLE_KEY,
  OPENFORT_SHIELD_PUBLISHABLE_KEY,
} from "@/constants";

type OpenfortProviderProps = {
  children?: React.ReactNode;
  debugMode?: boolean;
  walletConfig?: OpenfortWalletConfig;
  overrides?: SDKOverrides;
};

export type MutualsOpenfortProviderProps = OpenfortProviderProps;

export default function MutualsOpenfortProvider({
  children,
}: PropsWithChildren<MutualsOpenfortProviderProps>) {
  return (
    <OpenfortProvider
      publishableKey={OPENFORT_PUBLISHABLE_KEY}
      walletConfig={{
        shieldPublishableKey: OPENFORT_SHIELD_PUBLISHABLE_KEY,
        //accountType: AccountTypeEnum.SMART_ACCOUNT,
        createEncryptedSessionEndpoint:
          "http://localhost:3000/api/encryption-session",
      }}
      uiConfig={{
        authProviders: [
          AuthProvider.EMAIL,
          AuthProvider.GUEST,
          AuthProvider.GOOGLE,
          AuthProvider.APPLE,
          AuthProvider.TWITTER,
          AuthProvider.FACEBOOK,
          AuthProvider.WALLET,
        ],
        walletRecovery: {
          defaultMethod: RecoveryMethod.AUTOMATIC,
        },
      }}
    >
      {children}
    </OpenfortProvider>
  );
}
