"use client";

import { type UseDisclosureReturn, useDisclosure } from "@mutuals/ui";
import { usePathname } from "next/navigation";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
} from "react";

export interface UseDashboardRootReturn {
  desktop: UseDisclosureReturn;
  mobile: UseDisclosureReturn;
}

const defaultDisclosureState = {
  open: false,
  onOpen: () => {
    /* intentional */
  },
  onClose: () => {
    /* intentional */
  },
  onToggle: () => {
    /* intentional */
  },
  setOpen: () => {
    /* intentional */
  },
};

const DashboardRootContext = createContext<UseDashboardRootReturn>({
  mobile: defaultDisclosureState,
  desktop: defaultDisclosureState,
});

export function useDashboardRoot() {
  return useContext(DashboardRootContext);
}

export default function ShellDashboardRoot({ children }: PropsWithChildren) {
  const mobile = useDisclosure({ defaultOpen: false });
  const desktop = useDisclosure({ defaultOpen: true });

  const { setOpen: setMobileOpen } = mobile;
  const _pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [setMobileOpen]);

  const value = {
    mobile,
    desktop,
  };

  return (
    <DashboardRootContext.Provider value={value}>
      {children}
    </DashboardRootContext.Provider>
  );
}
