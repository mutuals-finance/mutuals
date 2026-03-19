import { type Pool, PoolStatus } from "@mutuals/graphql-client-nextjs";
import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  StatLabel,
  StatRoot,
  StatValueText,
  Tag,
} from "@mutuals/ui";
import NextLink from "next/link";
import type { DeepPartial } from "#/partial";
import PoolCardLogo from "@/features/pool/card/logo";

export type PoolCardProps = DeepPartial<Pool>;

function PoolCard({ name, status, slug }: PoolCardProps) {
  return (
    <LinkBox as="article">
      <Card.Root>
        <Card.Header>
          <HStack alignItems={"flex-start"}>
            <HStack flex={"1"}>
              {/*
              <PoolCardLogo alt={name} />
*/}

              <Box>
                <Heading as={"h3"} size="md">
                  {!name || name === "" ? "Unknown Pool" : name}
                </Heading>

                {/*
                {!!contract && (
                  <Text fontFamily={"mono"} fontSize={"xs"}>
                    {shortenAddress(contract.address)}
                  </Text>
                )}
*/}
              </Box>
            </HStack>

            {(status === PoolStatus.Draft || !status) && (
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
              formatOptions={{
                currency: "USD",
                style: "currency",
              }}
              value={0.0}
            />
          </StatRoot>
        </Card.Body>
        <Card.Footer>
          <Button flex={"1"} size={"sm"} variant={"subtle"}>
            View More
          </Button>
        </Card.Footer>
      </Card.Root>
      {!!slug && <LinkOverlay as={NextLink} href={`/pool/${slug}`} />}
    </LinkBox>
  );
}

PoolCard.Logo = PoolCardLogo;

export default PoolCard;
