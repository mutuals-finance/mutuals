import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardProps,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  ButtonGroup,
} from "@splitfi/ui";
import React from "react";
import { shortenAddress } from "@/utils";

import UserAvatar from "src/features/Wallet/Avatar";
import Link from "next/link";
import { Wallet } from "@splitfi/sdk";
import { DeepPartial } from "#/partial";
import {
  IoEllipsisHorizontal,
  IoEyeOffOutline,
  IoOpenOutline,
} from "react-icons/io5";

interface WalletCardProps extends DeepPartial<Wallet>, CardProps {
  isPrimaryWallet: boolean;
}

export default function WalletCard({
  chainAddress,
  isPrimaryWallet,
  ...props
}: WalletCardProps) {
  const shortAddress = shortenAddress(chainAddress?.address);
  const hasName = true;
  const name = hasName ? "Company Multisig" : shortAddress;

  return (
    <Card as="article" variant={"outline"} bg={"transparent"} {...props}>
      <CardHeader
        as={Stack}
        spacing={"3"}
        pb={"3"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <UserAvatar address={chainAddress?.address} size={"sm"} />
        <Stack gap={"1.5"} alignItems={"center"}>
          <Heading
            size="sm"
            as={"h3"}
            fontFamily={!hasName ? "monospace" : "inherit"}
          >
            {name}
          </Heading>

          {hasName && (
            <Text fontSize="xs" fontFamily={"monospace"}>
              {shortAddress}
            </Text>
          )}
        </Stack>
      </CardHeader>

      <CardFooter pt={"0"}>
        <Menu size={"sm"}>
          <ButtonGroup w={"full"} size={"sm"} spacing={"0.5"}>
            <Button
              flex={"1"}
              as={Link}
              href={`wallet/${chainAddress?.address}`}
              scroll={false}
              roundedRight={"0"}
            >
              Manage
            </Button>
            <MenuButton
              roundedLeft={"0"}
              flex={"0 auto"}
              as={IconButton}
              aria-label="Wallet Options"
              icon={<IoEllipsisHorizontal />}
            />
            <MenuList>
              <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
              <MenuItem icon={<IoEyeOffOutline />}>Hide</MenuItem>
            </MenuList>
          </ButtonGroup>
        </Menu>
      </CardFooter>
    </Card>
  );
}
