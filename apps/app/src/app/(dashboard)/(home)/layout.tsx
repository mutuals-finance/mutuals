import React, { PropsWithChildren } from "react";
import WalletList from "@/features/Wallet/List";
import PoolList from "@/features/Pool/List";
import DashboardHomeBalance from "src/features/DashboardHome/Balance";
import DashboardHomeHandlers from "@/features/DashboardHome/Handlers";
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
import { me } from "@/lib/privy";

export default async function DashboardHomeLayout({
  children,
}: PropsWithChildren) {
  const [
    //walletsQuery, poolQuery,
    user,
  ] = await Promise.all([
    /*
    gqlMe(),
    myPoolsGet(),
*/
    me(),
  ]);
  return (
    <>
      <Container maxW={"7xl"} mt={"6"}>
        <Stack gap={"6"}>
          {!user && (
            <AlertRoot>
              <AlertIndicator />
              <AlertContent>
                <AlertTitle>Welcome to Mutuals</AlertTitle>
                <AlertDescription>
                  Please <Link href={"/auth/login"}>sign in</Link> to your
                  account to get started and access all features of your
                  dashboard.
                </AlertDescription>
              </AlertContent>
            </AlertRoot>
          )}

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
            <WalletList user={user} />
          </Box>

          <Box>
            <Heading as={"h2"} textStyle={"3xl"} mb={"4"}>
              Payment Pools
            </Heading>
            <PoolList user={user} />
          </Box>
        </Stack>
      </Container>

      {children}
    </>
  );
}
