import React, { PropsWithChildren } from "react";
import WalletList from "@/features/Wallet/List";
import PoolList from "@/features/Pool/List";
import DashboardHomeBalance from "src/features/DashboardHome/Balance";
import DashboardHomeHandlers from "@/features/DashboardHome/Handlers";
import {
  getViewerPools,
  getViewerWallets,
} from "@mutuals/graphql-client-nextjs/server";
import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  AlertRoot,
  AlertIndicator,
  AlertContent,
  AlertTitle,
  AlertDescription,
} from "@mutuals/ui";

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
          <AlertRoot
            borderStartWidth="3px"
            borderStartColor="colorPalette.solid"
          >
            <AlertIndicator />
            <AlertContent>
              <AlertTitle>Welcome to Mutuals</AlertTitle>
              <AlertDescription>
                Please <Link href={"/auth/login"}>sign in</Link> to your account
                to get started and access all features of your dashboard.
              </AlertDescription>
            </AlertContent>
          </AlertRoot>

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
