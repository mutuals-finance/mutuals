"use client";

import { PropsWithChildren } from "react";
import { MixpanelProvider } from "@mutuals/analytics-nextjs";
import { MIXPANEL_TOKEN } from "@/constants";

export default function AnalyticsProvider({ children }: PropsWithChildren) {
  return (
    <MixpanelProvider
      name={"Mutuals App"}
      config={{ debug: false, autocapture: true }}
      token={MIXPANEL_TOKEN}
    >
      {children}
    </MixpanelProvider>
  );
}
