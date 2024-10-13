import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  StatRoot,
  StatLabel,
  StatValueText,
} from "@mutuals/ui";
import NextLink from "next/link";

import {
  formatPrefixedAddress,
  getShortNameByChainId,
  shortenAddress,
} from "@/utils";

import PoolCardLogo from "@/features/Pool/Card/Logo";
import { Split } from "@mutuals/graphql-client-nextjs/thegraph";

export type PoolCardProps = Partial<Split>;

function PoolCard({ id, metaData, address }: PoolCardProps) {
  return (
    <LinkBox as="article">
      <Card.Root>
        <Card.Header as={Flex} alignItems={"center"} gap={"3"}>
          <Box flexShrink={0}>
            {
              <PoolCardLogo
                src={
                  "https://bafkreidflp6nlbvvad7w5v3cxue4bvuvcc37wggdklay3wmvj56le2sqsu.ipfs.w3s.link"
                }
                alt={metaData?.name || "UNKNOWN"}
              />
            }
          </Box>

          <Box flex="1">
            <Heading size="sm" as={"h3"}>
              {metaData?.name === "" ? "Unknown" : metaData?.name}
            </Heading>

            <Text fontFamily={"mono"} fontSize={"xs"}>
              {shortenAddress(address)}
            </Text>
          </Box>
        </Card.Header>
        <Card.Body pt={"0"}>
          <Stack gap="3">
            <Text lineClamp={2} fontSize={"sm"}>
              {metaData?.description}
            </Text>

            <HStack
              flex={"1"}
              alignItems={"flex-end"}
              gap={"6"}
              p={"3"}
              bg={"bg.2"}
              rounded={"md"}
            >
              <StatRoot maxW="240px">
                <StatLabel>Your balance</StatLabel>
                <StatValueText
                  value={493123.24}
                  formatOptions={{
                    currency: "USD",
                    style: "currency",
                  }}
                />
              </StatRoot>

              <Button size={"sm"} _hover={{ cursor: "default" }}>
                View More
              </Button>
            </HStack>
          </Stack>
        </Card.Body>
      </Card.Root>
      {!!id && (
        <LinkOverlay
          as={NextLink}
          href={`/pool/${formatPrefixedAddress(
            id,
            getShortNameByChainId(80001),
          )}`}
        />
      )}
    </LinkBox>
  );
}

PoolCard.Logo = PoolCardLogo;

export default PoolCard;
