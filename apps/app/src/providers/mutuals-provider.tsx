"use client";

import {
  MutualsProvider as Provider,
  useMutualsClient,
} from "@mutuals/sdk-react";
import type { PropsWithChildren } from "react";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";

function MutualsProviderInner({ children }: PropsWithChildren) {
  const { chainId } = useAccount();
  const publicClient = usePublicClient({ chainId });
  const { data: walletClient } = useWalletClient({
    chainId,
  });

  useMutualsClient({
    // NOTE: existing wallet connection must not be checked, since its done by `AuthRequireWallet`
    chainId: chainId ?? 0,
    publicClient: publicClient ?? undefined,
    walletClient: walletClient ?? undefined,
  });

  return children;
}

export default function MutualsProvider({ children }: PropsWithChildren) {
  return (
    <Provider>
      <MutualsProviderInner>{children}</MutualsProviderInner>
    </Provider>
  );
}
