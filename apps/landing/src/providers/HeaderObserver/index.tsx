"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTheme } from "@mutuals/ui";

type ContextT = {
  initialized: boolean;
  headerTheme: string;
  setHeaderTheme: (theme: string) => void;
};
const Context = createContext<ContextT>({
  initialized: false,
  headerTheme: "dark",
  setHeaderTheme: () => {},
});

export const useHeaderObserver = (): ContextT => useContext(Context);

type HeaderIntersectionObserverProps = PropsWithChildren;

export default function HeaderObserverProvider({
  children,
}: HeaderIntersectionObserverProps) {
  const { theme = "system" } = useTheme();
  const [initialized, setInitialized] = useState(false);
  const [headerTheme, setHeaderTheme] = useState(theme);
  const pathname = usePathname();

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
    setHeaderTheme(theme);
  }, [initialized, pathname, theme]);

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
