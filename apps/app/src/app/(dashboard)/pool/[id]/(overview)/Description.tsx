import {
  Box,
  Heading,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@splitfi/ui";

import {
  formatCurrencyAmount,
  formatUSDPrice,
  ipfsResolveData,
} from "@/lib/utils";

import { SplitImage } from "@/components/Split/Image";
import { SplitBaseFragmentFragment } from "@/lib/graphql/thegraph/__generated__/graphql";
import ContentCard from "@/components/ContentCard";

interface PoolDescriptionProps {
  pool?: SplitBaseFragmentFragment | null;
  metaData: { name: string; description: string; image: string };
}

export default function PoolDescription({ metaData }: PoolDescriptionProps) {
  return (
    <Stack gap={"6"} as={"article"}>
      <Stack
        direction={{ base: "row", lg: "row" }}
        alignItems={"center"}
        spacing={"3"}
        w={"full"}
      >
        <SplitImage
          src={ipfsResolveData(metaData.image)}
          alt={metaData.name}
          boxSize={"3.4rem"}
        />
        <Heading as={"h1"} size={"xl"}>
          {metaData.name}
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
        <Text noOfLines={{ base: 3, lg: 3 }}>{metaData.description}</Text>
      </Box>
    </Stack>
  );
}
