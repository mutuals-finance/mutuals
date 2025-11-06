"use client";

import React, {
  createContext,
  useCallback,
  PropsWithChildren,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { useRouter } from "next/navigation";
import { useCreateWallet } from "@privy-io/react-auth";

export type AuthShellQueryParams = {
  callbackUrl?: string;
};

type OnLoginCompleteParams = {
  requiresWallet?: boolean;
  createWalletOptions?: { createAdditional?: boolean };
  callbackTimeout?: number;
};

type AuthShellContextType = {
  onLoginComplete: (params?: OnLoginCompleteParams) => Promise<void>;
  callbackUrl: string;
  setCallbackUrl: Dispatch<SetStateAction<string>>;
};

const AuthShellContext = createContext<AuthShellContextType>({
  onLoginComplete: async () => {},
  callbackUrl: "/",
  setCallbackUrl: () => {},
});

export function useAuthShell() {
  return useContext(AuthShellContext);
}

export type AuthShellProviderContextProps =
  PropsWithChildren<AuthShellQueryParams>;

export default function AuthShellProvider({
  children,
}: AuthShellProviderContextProps) {
  const router = useRouter();
  const [callbackUrl, setCallbackUrl] = useState<string>("/");
  const { createWallet } = useCreateWallet();

  const onLoginComplete = useCallback(
    async (params?: OnLoginCompleteParams) => {
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
    onLoginComplete,
    callbackUrl,
    setCallbackUrl,
  };

  return (
    <AuthShellContext.Provider value={value}>
      {children}
    </AuthShellContext.Provider>
  );
}
