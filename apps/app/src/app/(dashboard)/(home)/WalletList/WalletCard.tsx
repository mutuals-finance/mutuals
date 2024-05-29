import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
} from "@splitfi/ui";
import React from "react";
import { shortenAddress } from "src/utils";

import UserAvatar from "@/components/UserAvatar";
import Link from "next/link";
import { Wallet } from "@splitfi/sdk";
import { DeepPartial } from "#/partial";

interface WalletCardProps extends DeepPartial<Wallet>, CardProps {
  isPrimaryWallet: boolean;
}

export default function WalletCard({
  chainAddress,
  isPrimaryWallet,
  ...props
}: WalletCardProps) {
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
          <Heading size="sm" as={"h3"}>
            Company Multisig
          </Heading>

          <Text fontSize="xs" fontFamily={"monospace"}>
            {shortenAddress(chainAddress?.address)}
          </Text>
        </Stack>
        {/*
        <Menu size={'sm'}>
          <MenuButton
            zIndex={10}
            flexShrink={'0'}
            as={IconButton}
            aria-label='Wallet Options'
            icon={<IoEllipsisHorizontal />}
            variant='ghost'
          />
          <MenuList>
            <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
            <MenuItem icon={<IoOpenOutline />}>Etherscan</MenuItem>
            <MenuItem icon={<IoEyeOffOutline />}>Hide</MenuItem>
          </MenuList>
        </Menu>
*/}
      </CardHeader>

      <CardFooter pt={"0"}>
        <Button
          size={"sm"}
          w={"full"}
          as={Link}
          href={`wallet/${chainAddress?.address}`}
          scroll={false}
        >
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
}
