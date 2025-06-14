"use client";

import { PropsWithChildren } from "react";
import { usePublicClient, useAccount, useWalletClient } from "wagmi";
import {
  MutualsProvider as Provider,
  useMutualsClient,
} from "@mutuals/sdk-react";

function MutualsProviderInner({ children }: PropsWithChildren) {
  const { chainId } = useAccount();
  const publicClient = usePublicClient({ chainId });
  const { data: walletClient } = useWalletClient({
    chainId,
  });

  useMutualsClient({
    // NOTE: existing wallet connection must not be checked, since its done by `AuthRequireWallet`
    chainId: chainId!,
    publicClient,
    walletClient,
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
