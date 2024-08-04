import { PropsWithChildren } from "react";
import { UIProvider } from "@mutuals/ui";

import "keen-slider/keen-slider.min.css";
import HeaderObserverProvider from "./HeaderObserver";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <UIProvider>
      <HeaderObserverProvider>{children}</HeaderObserverProvider>
    </UIProvider>
  );
}
