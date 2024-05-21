"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  StatNumber,
  Text,
  Stat,
  StatLabel,
} from "@splitfi/ui";
import NextLink from "next/link";
import React from "react";
import {
  IoEllipsisHorizontal,
  IoEyeOffOutline,
  IoOpenOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import {
  FragmentType,
  useFragment,
} from "@/lib/graphql/thegraph/__generated__";
import { SplitBaseFragmentFragment } from "@/lib/graphql/thegraph/__generated__/graphql";
import { splitBaseFragment } from "@/lib/graphql/thegraph/fragments";
import { useMetadata } from "@/lib/split/hooks";
import {
  formatPrefixedAddress,
  formatUSDPrice,
  getShortNameByChainId,
  shortenAddress,
} from "@/lib/utils";

import { SplitImage } from "@/components/Split/Image";

interface SplitFragmentCardProps {
  fragment: FragmentType<typeof splitBaseFragment>;
}

export function SplitFragmentCard(props: SplitFragmentCardProps) {
  const split = useFragment(splitBaseFragment, props.fragment);
  const { data } = useMetadata({ uri: split?.metaDataUri });

  return <SplitCard {...split} metaData={data!} />;
}

type SplitCardProps = Partial<SplitBaseFragmentFragment>;

export default function SplitCard({ id, metaData, address }: SplitCardProps) {
  return (
    <LinkBox as="article" rounded={"md"}>
      <Card variant={"outline"} bg={"bg.1"} size={"sm"}>
        <CardHeader as={Flex} alignItems={"center"} gap={"3"}>
          <Box flexShrink={0}>
            {!!metaData?.image && (
              <SplitImage
                src={metaData.image}
                alt={metaData?.name || "UNKNOWN"}
              />
            )}
          </Box>

          <Box flex="1">
            <Heading size="sm" as={"h3"}>
              {metaData?.name === "" ? "Unknown" : metaData?.name}
            </Heading>

            <Text variant={"label-mono"} fontSize={"xs"}>
              {shortenAddress(address)}
            </Text>
          </Box>

          <Menu size={"sm"}>
            <MenuButton
              zIndex={10}
              flexShrink={"0"}
              as={IconButton}
              aria-label="Split Options"
              icon={<IoEllipsisHorizontal />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
              <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
              <MenuItem icon={<IoEyeOffOutline />}>Hide</MenuItem>
            </MenuList>
          </Menu>
        </CardHeader>
        <CardBody pt={"0"}>
          <Stack spacing="3">
            <Text noOfLines={2} fontSize={"sm"}>
              {metaData?.description}
            </Text>

            <HStack
              flex={"1"}
              align={"flex-end"}
              gap={"6"}
              p={"3"}
              bg={"bg.2"}
              rounded={"md"}
            >
              <Stat flex={"1"}>
                <StatLabel fontSize={"xs"}>Your Balance</StatLabel>
                <StatNumber fontSize={"lg"}>
                  {formatUSDPrice("493123.24")}
                </StatNumber>
              </Stat>
              <Button
                size={"sm"}
                variant={"ghost"}
                _hover={{ cursor: "default" }}
              >
                View More
              </Button>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
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
