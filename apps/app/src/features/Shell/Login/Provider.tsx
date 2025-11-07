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
import { useCreateWallet, User } from "@privy-io/react-auth";
import { useMixpanel } from "@mutuals/analytics-nextjs";

export type AuthShellQueryParams = {
  callbackUrl?: string;
};

type OnLoginCompleteParams = {
  requiresWallet?: boolean;
  user?: User;
  isNewUser?: boolean;
  identify?: boolean;
  createWalletOptions?: { createAdditional?: boolean };
  callbackTimeout?: number;
};

type AuthShellContextType = {
  onBeforeLogin: () => void;
  onLoginComplete: (params?: OnLoginCompleteParams) => Promise<void>;
  onLoginError: (error?: Error) => void;
  error: Error | null;
  setError: Dispatch<SetStateAction<Error | null>>;
  callbackUrl: string | null;
  setCallbackUrl: Dispatch<SetStateAction<string | null>>;
};

const AuthShellContext = createContext<AuthShellContextType>({
  onBeforeLogin: () => {},
  onLoginComplete: async () => {},
  onLoginError: () => {},
  error: null,
  setError: () => {},
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
  const [error, setError] = useState<Error | null>(null);
  const [callbackUrl, setCallbackUrl] = useState<string | null>(null);
  const { createWallet } = useCreateWallet();
  const mixpanel = useMixpanel();

  const onLoginError = useCallback(
    (loginError?: Error) => {
      if (loginError) {
        setError(loginError);
      }
    },
    [setError],
  );

  const onBeforeLogin = useCallback(() => {
    setError(null);
  }, [setError]);

  const onLoginComplete = useCallback(
    async (params?: OnLoginCompleteParams) => {
      const { identify = true } = params || {};
      if (params?.requiresWallet) {
        await createWallet({
          createAdditional: false,
          ...params?.createWalletOptions,
        });
      }

      if (identify) {
        mixpanel?.track(params?.isNewUser ? "sign up" : "sign in");
        if (params?.user?.id) {
          mixpanel?.identify(params?.user?.id);
          let email = params?.user?.email?.address;
          const account = params?.user?.linkedAccounts[0];
          if (account) {
            if ("email" in account && !email) {
              email = !account.email ? undefined : account.email;
            }

            mixpanel?.people.set({
              type: account.type,
            });
          }

          mixpanel?.people.set({ ["$email"]: email });
          mixpanel?.people.set({
            walletAddress: params?.user?.wallet?.address,
          });
        }
      }
      if (callbackUrl) {
        if (params?.callbackTimeout) {
          await new Promise((resolve) =>
            setTimeout(resolve, params?.callbackTimeout),
          );
        }
        router.push(callbackUrl);
      }
    },
    [router, callbackUrl, createWallet, mixpanel],
  );

  const value = {
    onLoginComplete,
    onBeforeLogin,
    onLoginError,
    callbackUrl,
    setCallbackUrl,
    error,
    setError,
  };

  return (
    <AuthShellContext.Provider value={value}>
      {children}
    </AuthShellContext.Provider>
  );
}
