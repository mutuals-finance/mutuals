"use client";

import { PropsWithChildren } from "react";
import { ApolloQueryResult, ViewerWalletsQuery } from "@splitfi/sdk";

interface DashboardAuthCheckWalletProps extends PropsWithChildren {
  query: ApolloQueryResult<ViewerWalletsQuery>;
}
export default function DashboardAuthCheckWallet({
  children,
  query,
}: DashboardAuthCheckWalletProps) {
  return <>{children}</>;
}
