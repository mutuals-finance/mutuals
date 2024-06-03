import React, { PropsWithChildren } from "react";
import WalletList from "./WalletList";
import DashboardHandlers from "./Handlers";
import PoolList from "./PoolList";
import Balance from "./Balance";

export default async function DashboardHomeLayout({
  children,
}: PropsWithChildren) {
  return (
    <>
      <Balance />
      <DashboardHandlers />
      <WalletList />
      <PoolList />
      {children}
    </>
  );
}
