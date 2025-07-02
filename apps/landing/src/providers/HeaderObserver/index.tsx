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
  headerTheme: "system",
  setHeaderTheme: () => {},
});

export const useHeaderObserver = (): ContextT => useContext(Context);

type HeaderIntersectionObserverProps = PropsWithChildren;

export default function HeaderObserverProvider({
  children,
}: HeaderIntersectionObserverProps) {
  const { theme = "light" } = useTheme();
  const [initialized, setInitialized] = useState(false);
  const [headerTheme, setHeaderTheme] = useState(theme);
  const pathname = usePathname();

  useEffect(() => {
    console.log("setHeaderTheme", { theme });

    setHeaderTheme(theme);
    setInitialized(true);
  }, [pathname, theme]);

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
