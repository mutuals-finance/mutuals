import {
  Container,
  Group,
  Stack,
  StatRoot,
  StatValueText,
  StatLabel,
  Box,
} from "@mutuals/ui";
import DashboardBalanceChart from "@/features/DashboardHome/Balance/Chart";

export default function DashboardBalance() {
  return (
    <Box mt={"16"} mb={"6"}>
      <Container maxW={"7xl"}>
        <Box position={"relative"}>
          <Stack
            position={"absolute"}
            top={"0"}
            left={"0"}
            w={"full"}
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            p={"4"}
          >
            <Group gap={"6"}>
              <StatRoot size={"lg"}>
                <StatValueText
                  value={0.0}
                  formatOptions={{
                    currency: "USD",
                    style: "currency",
                  }}
                />
                <StatLabel>Total balance</StatLabel>
              </StatRoot>
            </Group>
          </Stack>
        </Box>

        <DashboardBalanceChart />
      </Container>
    </Box>
  );
}
