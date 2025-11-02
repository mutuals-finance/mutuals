"use client";

import { PropsWithChildren } from "react";
import { ApolloQueryResult, MeQuery } from "@mutuals/graphql-client-nextjs";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

interface DashboardAuthCheckWalletProps extends PropsWithChildren {
  query: ApolloQueryResult<MeQuery>;
  redirectArgs?: [] | [string] | [string, { scroll?: boolean }];
}
export default function AuthRequireWallet({
  children,
  query,
  redirectArgs = [],
}: DashboardAuthCheckWalletProps) {
  const { chain, chainId, addresses } = useAccount();
  const router = useRouter();

  if (redirectArgs.length > 0) {
    const checkAddress = addresses && addresses.length > 0;
    const checkChain = chainId; //&& chain;
    if (!checkAddress || !checkChain) {
      console.log({ redirectArgs, addresses, chain, chainId });
      //router.push(redirectArgs[0]!, redirectArgs?.[1]);
    }

    // TODO check if wallet matches user
  }

  return <>{children}</>;
}
