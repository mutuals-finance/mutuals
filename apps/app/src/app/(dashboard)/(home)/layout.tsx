import React, { PropsWithChildren } from "react";
import WalletList from "@/features/Wallet/List";
import PoolList from "@/features/Pool/List";
import DashboardHomeBalance from "src/features/DashboardHome/Balance";
import DashboardHomeHandlers from "@/features/DashboardHome/Handlers";
import {
  getViewerPools,
  getViewerWallets,
} from "@mutuals/graphql-client-nextjs/server";
import { Box, Container, Heading, Stack } from "@mutuals/ui";

export default async function DashboardHomeLayout({
  children,
}: PropsWithChildren) {
  const [walletsQuery, poolQuery] = await Promise.all([
    getViewerWallets(),
    getViewerPools(),
  ]);

  return (
    <>
      <Container maxW={"7xl"} mt={"6"}>
        <Stack gap={"6"}>
          <Box>
            <Heading as={"h2"} textStyle={"3xl"} mb={"4"}>
              Your Balance
            </Heading>
            <DashboardHomeBalance />
          </Box>

          <DashboardHomeHandlers />

          <Box>
            <Heading as={"h2"} textStyle={"3xl"} mb={"4"}>
              Wallets
            </Heading>
            <WalletList {...walletsQuery} />
          </Box>

          <Box>
            <Heading as={"h2"} textStyle={"3xl"} mb={"4"}>
              Payment Pools
            </Heading>
            <PoolList {...poolQuery} />
          </Box>
        </Stack>
      </Container>

      {children}
    </>
  );
}
