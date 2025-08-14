import { PropsWithChildren } from "react";
import WalletList from "@/features/Wallet/List";
import PoolList from "@/features/Pool/List";
import DashboardHomeBalance from "src/features/DashboardHome/Balance";
import DashboardHomeHandlers from "@/features/DashboardHome/Handlers";
import {
  getViewerPools,
  getViewerWallets,
} from "@mutuals/graphql-client-nextjs/server";

export default async function DashboardHomeLayout({
  children,
}: PropsWithChildren) {
  const [walletsQuery, poolQuery] = await Promise.all([
    getViewerWallets(),
    getViewerPools(),
  ]);

  return (
    <>
      <DashboardHomeBalance />
      <DashboardHomeHandlers />
      <WalletList {...walletsQuery} />
      <PoolList {...poolQuery} />
      {children}
    </>
  );
}
