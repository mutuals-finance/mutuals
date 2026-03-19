"use client";

import { MixpanelProvider } from "@mutuals/analytics-nextjs";
import type { PropsWithChildren } from "react";
import { MIXPANEL_TOKEN } from "@/constants";

export default function AnalyticsProvider({ children }: PropsWithChildren) {
  return (
    <MixpanelProvider
      config={{ debug: false, autocapture: true }}
      name={"Mutuals App"}
      token={MIXPANEL_TOKEN}
    >
      {children}
    </MixpanelProvider>
  );
}
