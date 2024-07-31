"use client";

import { PropsWithChildren } from "react";
import { ApolloQueryResult, ViewerWalletsQuery } from "@mutuals/sdk";

interface DashboardAuthCheckWalletProps extends PropsWithChildren {
  query: ApolloQueryResult<ViewerWalletsQuery>;
}
export default function AuthRequireWallet({
  children,
  query,
}: DashboardAuthCheckWalletProps) {
  // TODO check if wallet matches user
  return <>{children}</>;
}
