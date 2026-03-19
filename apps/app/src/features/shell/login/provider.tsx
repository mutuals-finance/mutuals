"use client";

import {
  ANALYTICS_EVENTS,
  ANALYTICS_SUPER_PROPERTIES,
  useMixpanel,
} from "@mutuals/analytics-nextjs";
import { useUserRegister } from "@mutuals/graphql-client-nextjs/client";
import { type User, useCreateWallet } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface AuthShellQueryParams {
  callbackUrl?: string;
}

interface OnLoginCompleteParams {
  callbackTimeout?: number;
  createWalletOptions?: { createAdditional?: boolean };
  identify?: boolean;
  isNewUser?: boolean;
  requiresWallet?: boolean;
  user?: User;
}

interface AuthShellContextType {
  callbackUrl: string | null;
  error: Error | null;
  onBeforeLogin: () => void;
  onLoginComplete: (params?: OnLoginCompleteParams) => Promise<void>;
  onLoginError: (error?: Error) => void;
  setCallbackUrl: Dispatch<SetStateAction<string | null>>;
  setError: Dispatch<SetStateAction<Error | null>>;
}

const AuthShellContext = createContext<AuthShellContextType>({
  onBeforeLogin: () => {
    /* intentional */
  },
  onLoginComplete: async () => {
    /* intentional */
  },
  onLoginError: () => {
    /* intentional */
  },
  error: null,
  setError: () => {
    /* intentional */
  },
  callbackUrl: "/",
  setCallbackUrl: () => {
    /* intentional */
  },
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
  const [registerUser, _result] = useUserRegister();
  const mixpanel = useMixpanel();

  const onLoginError = useCallback((loginError?: Error) => {
    if (loginError) {
      setError(loginError);
    }
  }, []);

  const onBeforeLogin = useCallback(() => {
    setError(null);
  }, []);

  const trackAnalytics = useCallback(
    (params?: OnLoginCompleteParams) => {
      mixpanel?.track(
        params?.isNewUser ? ANALYTICS_EVENTS.SIGN_UP : ANALYTICS_EVENTS.SIGN_IN
      );

      const userId = params?.user?.id;
      if (!userId) {
        return;
      }

      mixpanel?.identify(userId);

      const email = (() => {
        let addr = params?.user?.email?.address;
        const account = params?.user?.linkedAccounts[0];
        if (account && "email" in account && !addr) {
          addr = account.email ?? undefined;
        }
        return addr;
      })();

      const account = params?.user?.linkedAccounts[0];
      if (account) {
        mixpanel?.people.set({
          [ANALYTICS_SUPER_PROPERTIES.ACCOUNT_TYPE]: account.type,
        });
      }

      mixpanel?.people.set({ [ANALYTICS_SUPER_PROPERTIES.EMAIL]: email });
      mixpanel?.people.set({
        [ANALYTICS_SUPER_PROPERTIES.WALLET_ADDRESS]:
          params?.user?.wallet?.address,
      });
    },
    [mixpanel]
  );

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
        trackAnalytics(params);
      }

      if (params?.isNewUser) {
        await registerUser();
      }

      if (callbackUrl) {
        if (params?.callbackTimeout) {
          await new Promise((resolve) =>
            setTimeout(resolve, params?.callbackTimeout)
          );
        }
        router.push(callbackUrl);
      }
    },
    [router, callbackUrl, createWallet, trackAnalytics, registerUser]
  );

  const value = useMemo(
    () => ({
      onLoginComplete,
      onBeforeLogin,
      onLoginError,
      callbackUrl,
      setCallbackUrl,
      error,
      setError,
    }),
    [onLoginComplete, onBeforeLogin, onLoginError, callbackUrl, error]
  );

  return (
    <AuthShellContext.Provider value={value}>
      {children}
    </AuthShellContext.Provider>
  );
}
