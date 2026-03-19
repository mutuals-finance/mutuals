import {
  type GetPoolWithBalanceOptions,
  getPoolWithBalance,
} from "@mutuals/graphql-client-nextjs/server";
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  StatLabel,
  StatRoot,
  StatValueText,
  Text,
} from "@mutuals/ui";
import { formatUSDPrice } from "src/utils";
import PoolCard from "@/features/pool/card";

export interface PoolOverviewDescriptionProps {
  queryOptions?: GetPoolWithBalanceOptions;
}

export default async function PoolOverviewDescription({
  queryOptions,
}: PoolOverviewDescriptionProps) {
  const { data, error } = await getPoolWithBalance(queryOptions);

  if (error || !data?.pool || "message" in data.pool) {
    return null;
  }

  const pool = data.pool;

  const incomeUsd = pool.balance?.totalIncome?.[0]?.value ?? 0;
  const balanceUsd = pool.balance?.balance?.[0]?.value ?? 0;
  const withdrawalUsd = pool.balance?.withdrawals?.[0]?.value ?? 0;

  return (
    <Stack as={"article"} gap={"12"}>
      <Stack
        alignItems={"flex-start"}
        direction={{ base: "row", lg: "row" }}
        gap={"3"}
        w={"full"}
      >
        <PoolCard.Logo
          alt={pool.name ?? "Unknown Payment Pool"}
          shape={"rounded"}
          size={"xl"}
          src={pool.image ?? ""}
        />
        <Stack>
          <Heading as={"h1"} size={"2xl"}>
            {pool.name}
          </Heading>
          <Box maxW={"sm"}>
            <Text color={"fg.muted"} lineClamp={{ base: 3, lg: 3 }}>
              {pool.description}
            </Text>
          </Box>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        gap={{ base: "6", lg: "12" }}
        maxW={"2xl"}
        w={"full"}
      >
        <StatRoot size={"sm"}>
          <StatLabel>Total Income</StatLabel>
          <StatValueText textStyle={"3xl"}>
            {formatUSDPrice(incomeUsd)}
          </StatValueText>
        </StatRoot>
        <StatRoot size={"sm"}>
          <StatLabel>Balance</StatLabel>
          <StatValueText textStyle={"3xl"}>
            {formatUSDPrice(balanceUsd)}
          </StatValueText>
        </StatRoot>
        <StatRoot size={"sm"}>
          <StatLabel>Withdraws</StatLabel>
          <StatValueText textStyle={"3xl"}>
            {formatUSDPrice(withdrawalUsd)}
          </StatValueText>
        </StatRoot>
      </SimpleGrid>
    </Stack>
  );
}
