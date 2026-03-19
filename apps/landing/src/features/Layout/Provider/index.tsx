"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type RefObject,
  type SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type MaybeAnchorRef = RefObject<HTMLAnchorElement | null> | null;

interface LayoutContextType {
  activeRef: MaybeAnchorRef;
  currentPath: string;
  hoveredRef: MaybeAnchorRef;
  mobileMenuOpen: boolean;
  setActiveRef: Dispatch<SetStateAction<MaybeAnchorRef>>;
  setHoveredRef: Dispatch<SetStateAction<MaybeAnchorRef>>;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within LayoutProvider");
  }
  return context;
}

export function LayoutProvider({ children }: PropsWithChildren) {
  const [activeRef, setActiveRef] = useState<MaybeAnchorRef>(null);
  const [hoveredRef, setHoveredRef] = useState<MaybeAnchorRef>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (pathname !== currentPath) {
      setCurrentPath(pathname);

      const timeoutId = setTimeout(() => {
        if (activeRef?.current) {
          const href = activeRef.current.getAttribute("href");
          if (href !== pathname) {
            setActiveRef(null);
          }
        }
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname, currentPath, activeRef]);

  return (
    <LayoutContext.Provider
      value={{
        activeRef,
        setActiveRef,
        hoveredRef,
        setHoveredRef,
        mobileMenuOpen,
        setMobileMenuOpen,
        currentPath,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
