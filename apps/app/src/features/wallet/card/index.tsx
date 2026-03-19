import {
  Box,
  Button,
  Card,
  Group,
  IconButton,
  Link,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuTrigger,
  Stack,
  Text,
} from "@mutuals/ui";
import type { WalletWithMetadata } from "@privy-io/react-auth";
import { IoEllipsisHorizontal, IoEyeOffSharp } from "react-icons/io5";
import { RiExternalLinkFill } from "react-icons/ri";
import UserAvatar from "src/features/wallet/avatar";
import { shortenAddress } from "@/utils";

export type WalletCardAccountType = WalletWithMetadata;

export type WalletCardProps = Card.RootProps & {
  data?: WalletCardAccountType;
};

export default function WalletCard({ data, ...props }: WalletCardProps) {
  return (
    <Card.Root as="article" size={"lg"} {...props}>
      <Card.Header
        alignItems={"center"}
        gap={"4"}
        pb={"4"}
        textAlign={"center"}
      >
        <UserAvatar address={data?.address} shape="full" size={"lg"} />
        <Stack alignItems={"center"} gap={"2"}>
          <Text fontVariantNumeric={"tabular-nums"} textStyle="md">
            {shortenAddress(data?.address)}
          </Text>
        </Stack>
      </Card.Header>

      <Card.Footer>
        <MenuRoot>
          <Group attached={true} w={"full"}>
            <Link
              asChild={true}
              flex="1"
              href={`/wallet/${data?.address}`}
              linkProps={{ scroll: false }}
            >
              <Button roundedRight={0} size={"sm"} variant={"subtle"} w="full">
                Manage
              </Button>
            </Link>
            <MenuTrigger asChild>
              <IconButton
                aria-label="Wallet Options"
                size={"sm"}
                variant={"subtle"}
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
                rel={"noreferrer noopener"}
                target={"_blank"}
                w={"full"}
              >
                <MenuItem value="etherscan">
                  <Box flex={"1"}>Inspect</Box>
                  <RiExternalLinkFill />
                </MenuItem>
              </Link>

              <MenuItem disabled={true} value="hide">
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
