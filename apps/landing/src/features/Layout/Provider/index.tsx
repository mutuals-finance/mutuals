"use client";

import { usePathname } from "next/navigation";
import {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
  RefObject,
} from "react";
import { Dispatch, SetStateAction, type PropsWithChildren } from "react";

type MaybeAnchorRef = RefObject<HTMLAnchorElement | null> | null;

interface LayoutContextType {
  activeRef: MaybeAnchorRef;
  setActiveRef: Dispatch<SetStateAction<MaybeAnchorRef>>;
  hoveredRef: MaybeAnchorRef;
  setHoveredRef: Dispatch<SetStateAction<MaybeAnchorRef>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  currentPath: string;
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
  }, [pathname]);

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
