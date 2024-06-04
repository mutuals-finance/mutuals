import { PropsWithChildren } from "react";
import WalletList from "@/features/Wallet/List";
import PoolList from "@/features/Pool/List";
import Balance from "src/features/DashboardHome/Balance";
import Handlers from "@/features/DashboardHome/Handlers";

export default async function DashboardHomeLayout({
  children,
}: PropsWithChildren) {
  return (
    <>
      <Balance />
      <Handlers />
      <WalletList />
      <PoolList />
      {children}
    </>
  );
}
