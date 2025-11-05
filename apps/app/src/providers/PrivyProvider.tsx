"use client";

import { PropsWithChildren } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { PRIVY_APP_ID } from "@/constants";
import { config } from "@/lib/privy";

export default function MutualsPrivyProvider({ children }: PropsWithChildren) {
  return (
    <PrivyProvider appId={PRIVY_APP_ID} config={config}>
      {children}
    </PrivyProvider>
  );
}
