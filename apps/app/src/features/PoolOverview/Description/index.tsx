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

import {
  PoolWithOwnerAndContractFragmentDoc,
  getFragmentData,
} from "@mutuals/graphql-client-nextjs";
import PoolCard from "@/features/Pool/Card";
import { getPool, GetPoolOptions } from "@mutuals/graphql-client-nextjs/server";

export type PoolOverviewDescriptionProps = {
  queryOptions?: GetPoolOptions;
};

export default async function PoolOverviewDescription({
  queryOptions,
}: PoolOverviewDescriptionProps) {
  const { data, error } = await getPool(queryOptions);

  if (error || !data?.pool || "message" in data.pool) {
    return null;
  }

  const pool = getFragmentData(PoolWithOwnerAndContractFragmentDoc, data.pool);

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
        <StatRoot size={"sm"} flexGrow={"0"} minW={"32"}>
          <StatLabel>Total Income</StatLabel>
          <StatValueText textStyle={"3xl"}>{formatUSDPrice("0")}</StatValueText>
        </StatRoot>
        <StatRoot size={"sm"} flexGrow={"0"} minW={"32"}>
          <StatLabel>Balance</StatLabel>
          <StatValueText textStyle={"3xl"}>{formatUSDPrice("0")}</StatValueText>
        </StatRoot>
        <StatRoot size={"sm"} flexGrow={"0"} minW={"32"}>
          <StatLabel>Withdraws</StatLabel>
          <StatValueText textStyle={"3xl"}>
            {formatUSDPrice((0).toString())}
          </StatValueText>
        </StatRoot>
      </Wrap>
    </Stack>
  );
}
