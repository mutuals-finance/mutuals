import {
  Box,
  Heading,
  Stack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
} from "@mutuals/ui";

import { formatUSDPrice, ipfsResolveData } from "src/utils";

import { Split } from "@splitfi/sdk/thegraph";
import { type DeepPartial } from "#/partial";
import PoolCard from "@/features/Pool/Card";

interface PoolOverviewDescriptionProps {
  pool?: DeepPartial<Split>;
}

export default function PoolOverviewDescription({
  pool,
}: PoolOverviewDescriptionProps) {
  return (
    <Stack gap={"6"} as={"article"}>
      <Stack
        direction={{ base: "row", lg: "row" }}
        alignItems={"center"}
        spacing={"3"}
        w={"full"}
      >
        <PoolCard.Logo
          src={ipfsResolveData(pool?.metaData?.image)}
          alt={pool?.metaData?.name ?? "Unknown Payment Pool"}
          boxSize={"3.4rem"}
        />
        <Heading as={"h1"} size={"xl"}>
          {pool!.metaData!.name}
        </Heading>
      </Stack>

      <StatGroup gap={{ base: "6", lg: "12" }}>
        <Stat flex={"0"}>
          <StatLabel>Total Income</StatLabel>
          <StatNumber fontSize={"3xl"}>{formatUSDPrice("29183.80")}</StatNumber>
        </Stat>
        <Stat flex={"0"}>
          <StatLabel>Balance</StatLabel>
          <StatNumber fontSize={"3xl"}>{formatUSDPrice("14900.92")}</StatNumber>
        </Stat>
        <Stat flex={"1"}>
          <StatLabel>Withdraws</StatLabel>
          <StatNumber fontSize={"3xl"}>
            {formatUSDPrice((29183.8 - 14900.92).toString())}
          </StatNumber>
        </Stat>
      </StatGroup>

      <Box maxW={"xl"}>
        <Text noOfLines={{ base: 3, lg: 3 }}>
          {pool?.metaData?.description}
        </Text>
      </Box>
    </Stack>
  );
}
