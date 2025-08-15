import { PropsWithChildren } from "react";
import WalletList from "@/features/Wallet/List";
import PoolList from "@/features/Pool/List";
import DashboardHomeBalance from "src/features/DashboardHome/Balance";
import DashboardHomeHandlers from "@/features/DashboardHome/Handlers";
import {
  getViewerPools,
  getViewerWallets,
} from "@mutuals/graphql-client-nextjs/server";
import { Container, Heading } from "@mutuals/ui";

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

      <Container maxW={"7xl"}>
        <Heading as={"h2"} textStyle={"3xl"} mb={"3"}>
          Payment Pools
        </Heading>
        <PoolList {...poolQuery} />
      </Container>

      {children}
    </>
  );
}
