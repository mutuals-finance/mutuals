import {
  Box,
  Group,
  Stack,
  StatLabel,
  StatRoot,
  StatValueText,
} from "@mutuals/ui";
import DashboardBalanceChart from "@/features/dashboard-home/balance/chart";

export default function DashboardBalanceContent() {
  return (
    <>
      <Box position={"relative"}>
        <Stack
          alignItems={"flex-start"}
          direction={"row"}
          justifyContent={"space-between"}
          left={"0"}
          p={"4"}
          position={"absolute"}
          top={"0"}
          w={"full"}
          zIndex={"1"}
        >
          <Group gap={"6"}>
            <StatRoot size={"lg"}>
              <StatLabel>All Pools</StatLabel>
              <StatValueText
                formatOptions={{
                  currency: "USD",
                  style: "currency",
                }}
                value={0.0}
              />
            </StatRoot>
          </Group>
        </Stack>
      </Box>

      <DashboardBalanceChart />
    </>
  );
}
