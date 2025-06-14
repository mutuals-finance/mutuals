import {
  Box,
  Button,
  Card,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  StatRoot,
  StatLabel,
  HStack,
  StatValueText,
  Tag,
} from "@mutuals/ui";
import NextLink from "next/link";

import { shortenAddress } from "@/utils";

import PoolCardLogo from "@/features/Pool/Card/Logo";
import { Pool, PoolStatus } from "@mutuals/graphql-client-nextjs";

export type PoolCardProps = Partial<Pool>;

function PoolCard({ dbid, name, status, address }: PoolCardProps) {
  return (
    <LinkBox as="article">
      <Card.Root>
        <Card.Header>
          <HStack alignItems={"flex-start"}>
            <HStack flex={"1"}>
              <PoolCardLogo alt={name} />

              <Box>
                <Heading size="sm" as={"h3"}>
                  {!name || name == "" ? "Unknown Pool" : name}
                </Heading>

                <Text fontFamily={"mono"} fontSize={"xs"}>
                  {shortenAddress(address)}
                </Text>
              </Box>
            </HStack>

            {(status == PoolStatus.Draft || !status) && (
              <Tag colorPalette={"orange"} flexShrink={"0"}>
                {PoolStatus.Draft}
              </Tag>
            )}
          </HStack>
        </Card.Header>
        <Card.Body>
          <StatRoot flex={"1"} size={"sm"}>
            <StatLabel>Your balance</StatLabel>
            <StatValueText
              value={0.0}
              formatOptions={{
                currency: "USD",
                style: "currency",
              }}
            />
          </StatRoot>
        </Card.Body>
        <Card.Footer>
          <Button flex={"1"} size={"sm"} variant={"subtle"}>
            View More
          </Button>
        </Card.Footer>
      </Card.Root>
      {!!dbid && <LinkOverlay as={NextLink} href={`/pool/${dbid}`} />}
    </LinkBox>
  );
}

PoolCard.Logo = PoolCardLogo;

export default PoolCard;
