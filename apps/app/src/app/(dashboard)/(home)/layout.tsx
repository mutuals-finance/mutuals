import React, { PropsWithChildren } from "react";
import WalletList from "./WalletList";
import DashboardHandlers from "./Handlers";
import PoolList from "./PoolList";
import Balance from "./Balance";
import { getViewerWallets } from "@splitfi/sdk/server";

export default async function DashboardHomeLayout({
  children,
}: PropsWithChildren) {
  const query = await getViewerWallets();
  return (
    <>
      <Balance />
      <DashboardHandlers />
      <WalletList {...query} />
      <PoolList />
      {children}
    </>
  );
}
