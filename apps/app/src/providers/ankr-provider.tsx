"use client";

import { Provider } from "ankr-react";
import type { PropsWithChildren } from "react";

export default function AnkrProvider({ children }: PropsWithChildren) {
  return (
    <Provider
      apiKey={
        "cef60793f2f7367ec790a80c1d9070fca55c8c7b8ec1f353279bb53cccb8289d"
      }
    >
      {children}
    </Provider>
  );
}
