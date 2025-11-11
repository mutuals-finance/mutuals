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
import { WalletWithMetadata } from "@privy-io/react-auth";

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
          <Text textStyle="md">{shortenAddress(data?.address)}</Text>
        </Stack>
      </Card.Header>

      <Card.Footer>
        <MenuRoot>
          <Group w={"full"} attached={true}>
            <Link href={`wallet/${data?.address}`} flex="1" asChild={true}>
              <Button size={"md"} w="full" roundedRight={0} variant={"surface"}>
                Manage
              </Button>
            </Link>
            <MenuTrigger asChild>
              <IconButton
                size={"md"}
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
