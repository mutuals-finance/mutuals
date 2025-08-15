"use client";
import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { useDisclosure, type UseDisclosureReturn } from "@mutuals/ui";
import { usePathname } from "next/navigation";

export type UseDashboardRootReturn = {
  mobile: UseDisclosureReturn;
  desktop: UseDisclosureReturn;
};

const defaultDisclosureState = {
  open: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
  setOpen: () => {},
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
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname, setMobileOpen]);

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
