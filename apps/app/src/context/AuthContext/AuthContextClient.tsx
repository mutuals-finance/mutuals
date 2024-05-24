"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  PropsWithChildren,
} from "react";
import useAuthLogin from "@/context/AuthContext/useAuthLogin";
import { useToggle } from "react-use";
import { useRouter } from "next/navigation";
import { useAccount, useAccountEffect, useDisconnect } from "wagmi";
import WalletAuthModal from "@/context/AuthContext/WalletAuthModal";

type authContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderClientProps extends PropsWithChildren {
  redirectTo?: string;
}

export default function AuthProviderClient({
  children,
  redirectTo = "/",
}: AuthProviderClientProps) {
  const { disconnect } = useDisconnect();
  const account = useAccount();

  const [user, setUser] = useState<boolean>(false);

  const [remoteLogin, abortLogin] = useAuthLogin();
  const [isWalletAuthModalOpen, toggleWalletAuthModal] = useToggle(false);
  const router = useRouter();

  const login = useCallback(
    async (address = account.address) => {
      if (address) {
        toggleWalletAuthModal(true);
        await remoteLogin(address, {
          onSuccess: () => router.push(redirectTo),
          onComplete: () => toggleWalletAuthModal(false),
        });
      }
    },
    [router, account, remoteLogin, toggleWalletAuthModal],
  );

  const logout = useCallback(() => {
    disconnect();
  }, []);

  useAccountEffect({
    onConnect(data) {
      console.log("onConnect in AuthContext", { data });
      if (!data.isReconnected) {
        void login(data.address);
      }
    },
    onDisconnect() {
      console.log("Disconnected!");
    },
  });

  const value = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      <WalletAuthModal
        isOpen={isWalletAuthModalOpen}
        onClose={() => {
          abortLogin();
          toggleWalletAuthModal(false);
        }}
      />

      {children}
    </AuthContext.Provider>
  );
}
