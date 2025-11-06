"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";

type AuthContextType = object;

const AuthContext = createContext<AuthContextType>({});

export function useAuth() {
  return useContext(AuthContext);
}

export type AuthProviderContextProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderContextProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
