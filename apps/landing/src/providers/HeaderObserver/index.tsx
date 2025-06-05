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
  headerTheme?: string;
  setHeaderTheme: (theme: string) => void;
};
const Context = createContext<ContextT>({
  headerTheme: "system",
  setHeaderTheme: () => {},
});

export const useHeaderObserver = (): ContextT => useContext(Context);

type HeaderIntersectionObserverProps = PropsWithChildren;

export default function HeaderObserverProvider({
  children,
}: HeaderIntersectionObserverProps) {
  const { theme } = useTheme();
  const [headerTheme, setHeaderTheme] = useState(theme);
  const pathname = usePathname();

  useEffect(() => {
    setHeaderTheme(theme);
  }, [pathname, theme]);

  return (
    <Context.Provider
      value={{
        headerTheme,
        setHeaderTheme,
      }}
    >
      <>{children}</>
    </Context.Provider>
  );
}
