import {
  Box,
  Heading,
  Stack,
  StatLabel,
  StatRoot,
  Text,
  StatValueText,
  Wrap,
} from "@mutuals/ui";

import { formatUSDPrice } from "src/utils";

import { type Pool } from "@mutuals/graphql-client-nextjs";
import PoolCard from "@/features/Pool/Card";
import { DeepPartial } from "#/partial";

interface PoolOverviewDescriptionProps {
  pool?: DeepPartial<Pool>;
}

export default function PoolOverviewDescription({
  pool,
}: PoolOverviewDescriptionProps) {
  return (
    <Stack gap={"12"} as={"article"}>
      <Stack
        direction={{ base: "row", lg: "row" }}
        alignItems={"flex-start"}
        gap={"3"}
        w={"full"}
      >
        <PoolCard.Logo
          src={""}
          alt={pool?.name ?? "Unknown Payment Pool"}
          size={"xl"}
          shape={"rounded"}
        />
        <Stack>
          <Heading as={"h1"} size={"2xl"}>
            {pool?.name}
          </Heading>
          <Box maxW={"sm"}>
            <Text lineClamp={{ base: 3, lg: 3 }} color={"fg.muted"}>
              {pool?.description}
            </Text>
          </Box>
        </Stack>
      </Stack>

      <Wrap gap={{ base: "4", lg: "12" }}>
        <StatRoot size={"sm"} flexGrow={"0"}>
          <StatLabel>Total Income</StatLabel>
          <StatValueText textStyle={"3xl"}>
            {formatUSDPrice("29183.80")}
          </StatValueText>
        </StatRoot>
        <StatRoot size={"sm"} flexGrow={"0"}>
          <StatLabel>Balance</StatLabel>
          <StatValueText textStyle={"3xl"}>
            {formatUSDPrice("14900.92")}
          </StatValueText>
        </StatRoot>
        <StatRoot size={"sm"} flexGrow={"0"}>
          <StatLabel>Withdraws</StatLabel>
          <StatValueText textStyle={"3xl"}>
            {formatUSDPrice((29183.8 - 14900.92).toString())}
          </StatValueText>
        </StatRoot>
      </Wrap>
    </Stack>
  );
}
