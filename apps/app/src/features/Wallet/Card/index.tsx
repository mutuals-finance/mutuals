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
} from "@mutuals/ui";
import React from "react";
import { shortenAddress } from "@/utils";

import UserAvatar from "src/features/Wallet/Avatar";
import {
  IoEllipsisHorizontal,
  IoEyeOffOutline,
  IoOpenOutline,
} from "react-icons/io5";
import { type Wallet } from "@privy-io/react-auth";

export type WalletCardAccountType = Wallet;

export type WalletCardProps = Card.RootProps & {
  data?: WalletCardAccountType;
};

export default function WalletCard({ data, ...props }: WalletCardProps) {
  return (
    <Card.Root as="article" size={"sm"} {...props}>
      <Card.Header
        gap={"3"}
        pb={"3"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <UserAvatar address={data?.address} size={"sm"} />
        <Stack gap={"2"} alignItems={"center"}>
          <Text textStyle="sm">{shortenAddress(data?.address)}</Text>
        </Stack>
      </Card.Header>

      <Card.Footer pt={"0"}>
        <MenuRoot>
          <Group w={"full"} attached={true}>
            <Link href={`wallet/${data?.address}`} flex="1" asChild={true}>
              <Button size={"xs"} w="full" roundedRight={0} variant={"surface"}>
                Manage
              </Button>
            </Link>
            <MenuTrigger asChild>
              <IconButton
                size={"xs"}
                variant={"surface"}
                aria-label="Wallet Options"
              >
                <IoEllipsisHorizontal />
              </IconButton>
            </MenuTrigger>
          </Group>
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
      </Card.Footer>
    </Card.Root>
  );
}
