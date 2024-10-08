"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import {
  AllocationItemNode,
  AllocationNode,
  useDefaultAllocation,
} from "@mutuals/sdk-react";

type AllocationContextType = {
  items: Record<string, AllocationNode>;
  updateLastItem: (value: AllocationNode) => void;
  lastItem: AllocationItemNode | null;
};

const AllocationContext = createContext<AllocationContextType>({
  items: {},
  updateLastItem: () => {},
  lastItem: null,
});

export function useAllocation() {
  return useContext(AllocationContext);
}

interface AllocationProviderContextProps extends PropsWithChildren {}

export default function AllocationProvider({
  children,
}: AllocationProviderContextProps) {
  const defaultAllocationContext = useDefaultAllocation();

  const value = {
    ...defaultAllocationContext,
  };

  return (
    <AllocationContext.Provider value={value}>
      {children}
    </AllocationContext.Provider>
  );
}
