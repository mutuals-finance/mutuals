import {
  Card,
  Heading,
  IconButton,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Stack,
  Text,
  Group,
  LinkButton,
} from "@mutuals/ui";
import React from "react";
import { shortenAddress } from "@/utils";

import UserAvatar from "src/features/Wallet/Avatar";
import { Wallet } from "@mutuals/graphql-client-nextjs";
import { DeepPartial } from "#/partial";
import {
  IoEllipsisHorizontal,
  IoEyeOffOutline,
  IoOpenOutline,
} from "react-icons/io5";

interface WalletCardProps extends DeepPartial<Wallet>, Card.RootProps {
  isPrimaryWallet: boolean;
}

export default function WalletCard({
  isPrimaryWallet,
  ...props
}: WalletCardProps) {
  const shortAddress = shortenAddress("chainAddress?.address");
  const hasName = true;
  const name = hasName ? "Company Multisig" : shortAddress;

  return (
    <Card.Root as="article" {...props}>
      <Card.Header
        as={Stack}
        gap={"3"}
        pb={"3"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <UserAvatar address={"chainAddress?.address"} size={"sm"} />
        <Stack gap={"2"} alignItems={"center"}>
          <Heading
            size="md"
            as={"h3"}
            fontFamily={!hasName ? "monospace" : "inherit"}
          >
            {name}
          </Heading>

          {hasName && (
            <Text fontSize="sm" fontFamily={"monospace"}>
              {shortAddress}
            </Text>
          )}
        </Stack>
      </Card.Header>

      <Card.Footer pt={"0"}>
        <Group w={"full"} gap={"0.5"}>
          <LinkButton
            flex={"1"}
            size={"sm"}
            roundedRight={"0"}
            variant={"subtle"}
            href={`wallet/${"chainAddress?.address"}`}
          >
            Manage
          </LinkButton>
          <MenuRoot>
            <MenuTrigger asChild>
              <IconButton
                size={"sm"}
                roundedLeft={"0"}
                variant={"subtle"}
                flex={"0 auto"}
                aria-label="Wallet Options"
              >
                <IoEllipsisHorizontal />
              </IconButton>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="Etherscan">
                <IoOpenOutline />
                Etherscan
              </MenuItem>
              <MenuItem value="Hide">
                <IoEyeOffOutline />
                Hide
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Group>
      </Card.Footer>
    </Card.Root>
  );
}
