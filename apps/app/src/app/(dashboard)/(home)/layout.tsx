import { PropsWithChildren } from "react";
import WalletList from "@/features/Wallet/List";
import PoolList from "@/features/Pool/List";
import DashboardHomeBalance from "src/features/DashboardHome/Balance";
import DashboardHomeHandlers from "@/features/DashboardHome/Handlers";
import { getViewerSplits } from "@mutuals/graphql-client-nextjs/server";

export default async function DashboardHomeLayout({
  children,
}: PropsWithChildren) {
  const query = await getViewerSplits();

  return (
    <>
      <DashboardHomeBalance />
      <DashboardHomeHandlers />
      <WalletList />
      <PoolList {...query} />
      {children}
    </>
  );
}
