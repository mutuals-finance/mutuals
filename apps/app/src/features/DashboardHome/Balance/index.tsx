import {
  Group,
  Stack,
  StatRoot,
  StatValueText,
  Box,
  StatLabel,
} from "@mutuals/ui";
import DashboardBalanceChart from "@/features/DashboardHome/Balance/Chart";

export default function DashboardBalance() {
  return (
    <>
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
            <StatRoot size={"lg"}>
              <StatLabel>All Pools</StatLabel>
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
    </>
  );
}
