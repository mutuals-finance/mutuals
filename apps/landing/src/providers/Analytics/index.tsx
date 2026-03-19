"use client";

import { MixpanelProvider } from "@mutuals/analytics-nextjs";
import type { PropsWithChildren } from "react";

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export default function AnalyticsProvider({ children }: PropsWithChildren) {
  return (
    <MixpanelProvider
      config={{ debug: false, autocapture: true }}
      name={"Mutuals Landing"}
      token={token}
    >
      {children}
    </MixpanelProvider>
  );
}
