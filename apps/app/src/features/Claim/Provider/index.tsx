"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import {
  type UseAllocationDefaults as UseClaimDefaults,
  useAllocationDefaults as useClaimDefaults,
  getAllocationDefaults as getClaimDefaults,
} from "@mutuals/sdk-react";

type ClaimContextType = UseClaimDefaults;

const ClaimContext = createContext<ClaimContextType>({
  defaults: getClaimDefaults(),
  setCached: () => {},
  cached: undefined,
});

export function useClaim() {
  return useContext(ClaimContext);
}

interface ClaimProviderContextProps extends PropsWithChildren {}

export default function ClaimProvider({ children }: ClaimProviderContextProps) {
  const defaultsContext = useClaimDefaults();

  const value = {
    ...defaultsContext,
  };

  return (
    <ClaimContext.Provider value={value}>{children}</ClaimContext.Provider>
  );
}
