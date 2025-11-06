"use client";

import React, {
  createContext,
  useCallback,
  PropsWithChildren,
  useContext,
} from "react";
import { useRouter } from "next/navigation";
import { useCreateWallet } from "@privy-io/react-auth";

export type AuthLoginQueryParams = {
  callbackUrl?: string;
};

type OnCompleteParams = {
  requiresWallet?: boolean;
  createWalletOptions?: { createAdditional?: boolean };
  callbackTimeout?: number;
};

type AuthLoginContextType = {
  onComplete: (params?: OnCompleteParams) => Promise<void>;
  callbackUrl: string;
};

const AuthLoginContext = createContext<AuthLoginContextType>({
  onComplete: async () => {},
  callbackUrl: "/",
});

export function useAuthLogin() {
  return useContext(AuthLoginContext);
}

export type AuthLoginProviderContextProps =
  PropsWithChildren<AuthLoginQueryParams>;

export default function AuthLoginProvider({
  children,
  callbackUrl = "/",
}: AuthLoginProviderContextProps) {
  const router = useRouter();
  const { createWallet } = useCreateWallet();

  const onComplete = useCallback(
    async (params?: OnCompleteParams) => {
      if (params?.requiresWallet) {
        await createWallet({
          createAdditional: false,
          ...params?.createWalletOptions,
        });
      }
      if (params?.callbackTimeout) {
        await new Promise((resolve) =>
          setTimeout(resolve, params?.callbackTimeout),
        );
      }
      router.refresh();
      router.push(callbackUrl);
    },
    [router, callbackUrl, createWallet],
  );

  const value = {
    onComplete,
    callbackUrl,
  };

  return (
    <AuthLoginContext.Provider value={value}>
      {children}
    </AuthLoginContext.Provider>
  );
}
