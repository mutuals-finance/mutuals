import { UIProvider } from "@mutuals/ui";
import type { PropsWithChildren } from "react";

import "keen-slider/keen-slider.min.css";
import AnalyticsProvider from "@/providers/Analytics";
import FramerMotionProvider from "./FramerMotion";
import HeaderObserverProvider from "./HeaderObserver";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <UIProvider>
      <AnalyticsProvider>
        <FramerMotionProvider>
          <HeaderObserverProvider>{children}</HeaderObserverProvider>
        </FramerMotionProvider>
      </AnalyticsProvider>
    </UIProvider>
  );
}
