import { PropsWithChildren } from "react";
import { UIProvider } from "@mutuals/ui";

import "keen-slider/keen-slider.min.css";
import HeaderObserverProvider from "./HeaderObserver";
import FramerMotionProvider from "./FramerMotion";
import AnalyticsProvider from "@/providers/Analytics";

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
