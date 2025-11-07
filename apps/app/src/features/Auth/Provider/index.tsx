"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";

type AuthContextType = object;

const AuthContext = createContext<AuthContextType>({});

export function useAuth() {
  return useContext(AuthContext);
}

export type AuthProviderContextProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderContextProps) {
  const { user, authenticated } = usePrivy();
  const { wallets } = useWallets();

  const activeWallet = useMemo(() => wallets?.[0], [wallets]);

  useEffect(() => {
    console.log("activeWallet changed", { user, activeWallet });
    if (!authenticated && activeWallet && !activeWallet.linked) {
      void activeWallet.loginOrLink();
    }
  }, [authenticated, user, activeWallet]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
