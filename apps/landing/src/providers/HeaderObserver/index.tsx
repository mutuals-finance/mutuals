"use client";

import { useTheme } from "@mutuals/ui";
import { usePathname } from "next/navigation";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextT {
  headerTheme: string;
  initialized: boolean;
  setHeaderTheme: (theme: string) => void;
}
const Context = createContext<ContextT>({
  initialized: false,
  headerTheme: "dark",
  setHeaderTheme: () => {
    /* intentional */
  },
});

export const useHeaderObserver = (): ContextT => useContext(Context);

type HeaderIntersectionObserverProps = PropsWithChildren;

export default function HeaderObserverProvider({
  children,
}: HeaderIntersectionObserverProps) {
  const { theme = "system" } = useTheme();
  const [initialized, setInitialized] = useState(false);
  const [headerTheme, setHeaderTheme] = useState(theme);
  const _pathname = usePathname();

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
    setHeaderTheme(theme);
  }, [initialized, theme]);

  return (
    <Context.Provider
      value={{
        initialized,
        headerTheme,
        setHeaderTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
}
