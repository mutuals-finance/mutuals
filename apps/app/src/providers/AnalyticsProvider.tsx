"use client";

import { PropsWithChildren } from "react";
import { MixpanelProvider } from "@mutuals/analytics-nextjs";
import { IS_DEV, MIXPANEL_TOKEN } from "@/constants";

export default function AnalyticsProvider({ children }: PropsWithChildren) {
  return (
    <MixpanelProvider
      name={"Mutuals App"}
      config={{ debug: IS_DEV, autocapture: true }}
      token={MIXPANEL_TOKEN}
    >
      {children}
    </MixpanelProvider>
  );
}
