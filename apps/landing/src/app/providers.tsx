"use client";

import { PropsWithChildren } from "react";
import { ThemeConfig, UIProvider } from "@splitfi/ui";

import "keen-slider/keen-slider.min.css";
import HeaderObserverProvider from "@/context/HeaderObserver";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export default function Providers({ children }: PropsWithChildren) {
  return (
    <UIProvider>
      <HeaderObserverProvider>{children}</HeaderObserverProvider>
    </UIProvider>
  );
}
