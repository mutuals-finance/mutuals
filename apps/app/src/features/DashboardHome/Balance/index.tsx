import {
  Container,
  Group,
  Stack,
  StatRoot,
  StatValueText,
  Box,
  Heading,
} from "@mutuals/ui";
import DashboardBalanceChart from "@/features/DashboardHome/Balance/Chart";

export default function DashboardBalance() {
  return (
    <Box my={"6"}>
      <Container maxW={"7xl"}>
        <Heading as={"h2"} textStyle={"3xl"} mb={"4"}>
          Your Balance
        </Heading>

        <Box position={"relative"}>
          <Stack
            position={"absolute"}
            top={"0"}
            left={"0"}
            w={"full"}
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Group gap={"6"}>
              <StatRoot>
                <StatValueText
                  value={0.0}
                  formatOptions={{
                    currency: "USD",
                    style: "currency",
                  }}
                />
              </StatRoot>
            </Group>
          </Stack>
        </Box>

        <DashboardBalanceChart />
      </Container>
    </Box>
  );
}
