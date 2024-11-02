"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import {
  AllocationItemNode,
  AllocationNode,
  DefaultAllocationItems,
  useDefaultAllocation,
} from "@mutuals/sdk-react";

type AllocationContextType = {
  items?: DefaultAllocationItems;
  updateLastItem: (value: AllocationNode) => void;
  lastItem: AllocationNode | null;
};

const AllocationContext = createContext<AllocationContextType>({
  items: {
    Percentage: { Item: {}, Group: {} },
    Fixed: { Item: {}, Group: {} },
  },
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
