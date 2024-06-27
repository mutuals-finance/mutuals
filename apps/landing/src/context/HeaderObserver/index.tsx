"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTheme } from "@splitfi/ui";

type ContextT = {
  headerTheme: "dark" | "light" | "system";
  setHeaderTheme: (theme: "dark" | "light" | "system") => void;
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
  const [headerTheme, setHeaderTheme] = useState<"dark" | "light" | "system">(
    theme,
  );
  const pathname = usePathname();

  useEffect(() => {
    setHeaderTheme(theme);
  }, [pathname]);

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
