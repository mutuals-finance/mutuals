"use client";

import { PropsWithChildren } from "react";
import { Provider as AnkrProvider } from "ankr-react";
import { UIProvider } from "@splitfi/ui";

export default function ClientProviders({ children }: PropsWithChildren) {
  return (
    <UIProvider>
      <AnkrProvider
        apiKey={
          "cef60793f2f7367ec790a80c1d9070fca55c8c7b8ec1f353279bb53cccb8289d"
        }
      >
        {children}
      </AnkrProvider>
    </UIProvider>
  );
}
