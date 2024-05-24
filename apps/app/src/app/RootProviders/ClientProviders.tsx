"use client";

import { PropsWithChildren } from "react";
import { Provider as AnkrProvider } from "ankr-react";

export default function ClientProviders({ children }: PropsWithChildren) {
  return (
    <AnkrProvider
      apiKey={
        "cef60793f2f7367ec790a80c1d9070fca55c8c7b8ec1f353279bb53cccb8289d"
      }
    >
      <>{children}</>
    </AnkrProvider>
  );
}
