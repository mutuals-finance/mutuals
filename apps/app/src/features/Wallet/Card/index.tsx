import {
  Card,
  IconButton,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Stack,
  Text,
  Group,
  Link,
  Button,
  Box,
  MenuItemGroup,
} from "@mutuals/ui";
import React from "react";
import { shortenAddress } from "@/utils";

import UserAvatar from "src/features/Wallet/Avatar";
import { IoEllipsisHorizontal, IoEyeOffSharp } from "react-icons/io5";
import { WalletWithMetadata } from "@privy-io/react-auth";
import { RiExternalLinkFill } from "react-icons/ri";

export type WalletCardAccountType = WalletWithMetadata;

export type WalletCardProps = Card.RootProps & {
  data?: WalletCardAccountType;
};

export default function WalletCard({ data, ...props }: WalletCardProps) {
  return (
    <Card.Root as="article" size={"lg"} {...props}>
      <Card.Header
        pb={"4"}
        gap={"4"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <UserAvatar address={data?.address} shape="full" size={"lg"} />
        <Stack gap={"2"} alignItems={"center"}>
          <Text textStyle="md" fontVariantNumeric={"tabular-nums"}>
            {shortenAddress(data?.address)}
          </Text>
        </Stack>
      </Card.Header>

      <Card.Footer>
        <MenuRoot>
          <Group w={"full"} attached={true}>
            <Link
              href={`/wallet/${data?.address}`}
              flex="1"
              linkProps={{ scroll: false }}
              asChild={true}
            >
              <Button size={"sm"} w="full" roundedRight={0} variant={"subtle"}>
                Manage
              </Button>
            </Link>
            <MenuTrigger asChild>
              <IconButton
                size={"sm"}
                variant={"subtle"}
                aria-label="Wallet Options"
              >
                <IoEllipsisHorizontal />
              </IconButton>
            </MenuTrigger>
          </Group>
          <MenuContent minW={"44"}>
            <MenuItemGroup title={"Handle wallet"}>
              <Link
                asChild={true}
                href={`https://etherscan.io/address/${data?.address}`}
                target={"_blank"}
                rel={"noreferrer noopener"}
                w={"full"}
              >
                <MenuItem value="etherscan">
                  <Box flex={"1"}>Inspect</Box>
                  <RiExternalLinkFill />
                </MenuItem>
              </Link>

              <MenuItem value="hide" disabled={true}>
                <Box flex={"1"}>Hide</Box>
                <IoEyeOffSharp />
              </MenuItem>
            </MenuItemGroup>
          </MenuContent>
        </MenuRoot>
      </Card.Footer>
    </Card.Root>
  );
}
