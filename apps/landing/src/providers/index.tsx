import { PropsWithChildren } from "react";
import { UIProvider } from "@mutuals/ui";

import "keen-slider/keen-slider.min.css";
import HeaderObserverProvider from "./HeaderObserver";
import FramerMotionProvider from "./FramerMotion";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <UIProvider>
      <FramerMotionProvider>
        <HeaderObserverProvider>{children}</HeaderObserverProvider>
      </FramerMotionProvider>
    </UIProvider>
  );
}
