"use client";

import React, {
  createContext,
  useCallback,
  PropsWithChildren,
  useContext,
} from "react";
import useAuthLogin from "@/features/Auth/useLogin";
import { useRouter } from "next/navigation";
import { Connector, useAccountEffect, useConnect, useDisconnect } from "wagmi";
import { ApolloQueryResult, MeQuery } from "@mutuals/graphql-client-nextjs";
import { Address } from "viem";
import { useTokensDeactivateAll } from "@mutuals/graphql-client-nextjs/client";
import { walletMapFromViewerQuery } from "@/utils";

type AuthContextType = {
  login: (address: Address) => void;
  connectAndLogin: (connector: Connector) => void;
  logout: () => void;
  disconnectAndLogout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  login: () => {},
  connectAndLogin: () => {},
  logout: () => {},
  disconnectAndLogout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderContextProps extends PropsWithChildren {
  redirectTo?: string;
  query: ApolloQueryResult<MeQuery>;
}

export default function AuthProvider({
  children,
  redirectTo = "/",
  query,
}: AuthProviderContextProps) {
  const walletMap = walletMapFromViewerQuery(query.data);

  const { disconnect } = useDisconnect();
  const { connect } = useConnect();
  const [doLogin] = useAuthLogin();
  const [logout] = useTokensDeactivateAll();
  const router = useRouter();

  const login = useCallback(
    (address: Address) => {
      if (!walletMap[address]) {
        void doLogin(address, {
          onSuccess: () => router.push(redirectTo),
        });
      } else {
        router.push(redirectTo);
      }
    },
    [walletMap, doLogin, router, redirectTo],
  );

  const connectAndLogin = useCallback(
    async (connector: Connector) => {
      connect({ connector });
    },
    [connect],
  );

  const disconnectAndLogout = useCallback(() => {
    disconnect();
  }, [disconnect]);

  useAccountEffect({
    onConnect(data) {
      if (!walletMap[data.address]) {
        login(data.address);
      }
    },
    onDisconnect() {
      void logout();
      router.push("/auth/login");
    },
  });

  const value = {
    connectAndLogin,
    login,
    disconnectAndLogout,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
