import React, { PropsWithChildren } from "react";
import WalletList from "@/app/(dashboard)/WalletList";
import DashboardHandlers from "@/app/(dashboard)/Handlers";
import PoolList from "@/app/(dashboard)/PoolList";
import Balance from "@/app/(dashboard)/(home)/Balance";

export default function DashboardHomeLayout({ children }: PropsWithChildren) {
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
