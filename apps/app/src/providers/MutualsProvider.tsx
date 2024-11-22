"use client";

import { PropsWithChildren, useMemo } from "react";
import {
  MutualsClientConfig,
  MutualsProvider as Provider,
} from "@mutuals/sdk-react";
import { useClient } from "wagmi";

export default function MutualsProvider({ children }: PropsWithChildren) {
  const client = useClient();

  const config = useMemo<MutualsClientConfig>(
    () => ({
      chainId: client?.chain.id ?? 1,
      client,
    }),
    [client],
  );

  if (!client?.chain.id) return children;
  return <Provider config={config}>{children}</Provider>;
}
