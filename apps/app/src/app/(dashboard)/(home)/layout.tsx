import { Box, Container, Heading, Stack } from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import DashboardHomeBalance from "src/features/dashboard-home/balance";
import DashboardHomeHandlers from "@/features/dashboard-home/handlers";
import PoolList from "@/features/pool/list";
import WalletList from "@/features/wallet/list";

export default function DashboardHomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Container maxW={"7xl"} mt={"6"}>
        <Stack gap={"6"}>
          <Box>
            <Heading as={"h2"} mb={"4"} textStyle={"3xl"}>
              Your Balance
            </Heading>
            <DashboardHomeBalance />
          </Box>

          <DashboardHomeHandlers />

          <Box>
            <Heading as={"h2"} mb={"4"} textStyle={"3xl"}>
              Wallets
            </Heading>
            <WalletList />
          </Box>

          <Box>
            <Heading as={"h2"} mb={"4"} textStyle={"3xl"}>
              Payment Pools
            </Heading>
            <PoolList />
          </Box>
        </Stack>
      </Container>

      {children}
    </>
  );
}
