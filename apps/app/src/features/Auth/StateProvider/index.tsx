"use client";

import React from "react";
import { AuthState } from "@getpara/react-sdk";

const AuthStateContext = React.createContext<
  [
    AuthState | undefined,
    React.Dispatch<React.SetStateAction<AuthState | undefined>>,
  ]
>([undefined, () => {}]);

export default function AuthStateProvider({
  children,
}: React.PropsWithChildren) {
  const [authState, setAuthState] = React.useState<AuthState | undefined>();

  return (
    <AuthStateContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthStateContext.Provider>
  );
}

export const useAuthState = () => React.useContext(AuthStateContext);
