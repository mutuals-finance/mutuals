"use client";

import { PropsWithChildren } from "react";
import { MixpanelProvider } from "@mutuals/analytics-nextjs";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export default function AnalyticsProvider({ children }: PropsWithChildren) {
  return (
    <MixpanelProvider
      name={"Mutuals Landing"}
      config={{ debug: false, autocapture: true }}
      token={token}
    >
      {children}
    </MixpanelProvider>
  );
}
