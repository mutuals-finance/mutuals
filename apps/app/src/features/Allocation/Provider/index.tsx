"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import {
  type UseAllocationDefaults,
  useAllocationDefaults,
  getAllocationDefaults,
} from "@mutuals/sdk-react";

type AllocationContextType = UseAllocationDefaults;

const AllocationContext = createContext<AllocationContextType>({
  defaults: getAllocationDefaults(),
  setCached: () => {},
  cached: undefined,
});

export function useAllocation() {
  return useContext(AllocationContext);
}

interface AllocationProviderContextProps extends PropsWithChildren {}

export default function AllocationProvider({
  children,
}: AllocationProviderContextProps) {
  const defaultsContext = useAllocationDefaults();

  const value = {
    ...defaultsContext,
  };

  return (
    <AllocationContext.Provider value={value}>
      {children}
    </AllocationContext.Provider>
  );
}
