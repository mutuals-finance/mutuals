import {
  Box,
  Heading,
  HStack,
  Stack,
  StatLabel,
  StatRoot,
  Text,
  StatValueText,
} from "@mutuals/ui";

import { formatUSDPrice, ipfsResolveData } from "src/utils";

import { type Pool } from "@mutuals/graphql-client-nextjs";
import PoolCard from "@/features/Pool/Card";

interface PoolOverviewDescriptionProps {
  pool?: Pool;
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
          src={ipfsResolveData()}
          alt={pool?.name ?? "Unknown Payment Pool"}
          boxSize={"3.4rem"}
        />
        <Stack>
          <Heading as={"h1"} size={"2xl"}>
            {pool?.name}
          </Heading>
          <Box maxW={"sm"}>
            <Text lineClamp={{ base: 3, lg: 3 }}>{pool?.description}</Text>
          </Box>
        </Stack>
      </Stack>

      <HStack gap={{ base: "4", lg: "12" }} justifyContent={"flex-start"}>
        <StatRoot flex={"0"}>
          <StatLabel>Total Income</StatLabel>
          <StatValueText fontSize={"3xl"}>
            {formatUSDPrice("29183.80")}
          </StatValueText>
        </StatRoot>
        <StatRoot flex={"0"}>
          <StatLabel>Balance</StatLabel>
          <StatValueText fontSize={"3xl"}>
            {formatUSDPrice("14900.92")}
          </StatValueText>
        </StatRoot>
        <StatRoot flex={"0"}>
          <StatLabel>Withdraws</StatLabel>
          <StatValueText fontSize={"3xl"}>
            {formatUSDPrice((29183.8 - 14900.92).toString())}
          </StatValueText>
        </StatRoot>
      </HStack>
    </Stack>
  );
}
