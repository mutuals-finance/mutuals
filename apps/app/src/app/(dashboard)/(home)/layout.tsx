import { PropsWithChildren } from "react";
import WalletList from "@/features/Wallet/List";
import PoolList from "@/features/Pool/List";
import DashboardHomeBalance from "src/features/DashboardHome/Balance";
import DashboardHomeHandlers from "@/features/DashboardHome/Handlers";

export default async function DashboardHomeLayout({
  children,
}: PropsWithChildren) {
  return (
    <>
      <DashboardHomeBalance />
      <DashboardHomeHandlers />
      <WalletList />
      <PoolList />
      {children}
    </>
  );
}
