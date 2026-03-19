"use client";

import { type PropsWithChildren, use } from "react";
import { initClientMocksPromise } from "../mocks/init-client";

export function MockProvider({ children }: PropsWithChildren) {
  use(initClientMocksPromise);
  return <>{children}</>;
}
