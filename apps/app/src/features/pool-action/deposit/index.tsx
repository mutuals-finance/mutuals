import type { GetPoolQuery } from "@mutuals/graphql-client-nextjs";
import {
  Alert,
  Badge,
  Center,
  Clipboard,
  Form,
  Group,
  IconButton,
  Input,
  InputGroup,
  QrCode,
  Stack,
  Text,
} from "@mutuals/ui";
import { IoEllipsisHorizontal, IoOpenOutline } from "react-icons/io5";

export type PoolActionDepositProps = GetPoolQuery;

export default function PoolActionDeposit() {
  const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
  return (
    <>
      <Stack flex={"1"} gap={"2"} p="6">
        <Alert size="sm" status="warning" textStyle={"xs"}>
          Only ETH and ERC-20 tokens can be deposited. Do not send NFTs to a
          Pool. Please make sure to operate on the Ethereum chain, as other
          networks are not supported for this address.
        </Alert>

        <Text color={"fg.muted"} textStyle={"sm"}>
          Use the address below to receive funds to this Payment Pool. It is
          unique to this Pool and can be used to deposit ETH and ERC-20 tokens.
        </Text>

        <Stack
          alignItems={"center"}
          direction="row"
          justifyContent={"space-between"}
        >
          <Badge>Ethereum</Badge>

          <IconButton aria-label="See menu" size={"md"} variant="ghost">
            <IoEllipsisHorizontal />
          </IconButton>
        </Stack>

        <Center>
          <QrCode size={"xl"} value={address} />
        </Center>
      </Stack>

      <Stack
        flexShrink={"0"}
        px={{ base: "4", lg: "4" }}
        py={{ base: "6", lg: "6" }}
      >
        <Form direction={"column"}>
          <Clipboard.Root value={address}>
            <Clipboard.Label textStyle="label">Pool address</Clipboard.Label>
            <InputGroup
              endElement={
                <Group attached={false} me="-2">
                  <Clipboard.Trigger asChild>
                    <IconButton size="xs" variant="surface">
                      <Clipboard.Indicator />
                    </IconButton>
                  </Clipboard.Trigger>

                  <IconButton
                    aria-label="View on Etherscan"
                    size={"xs"}
                    variant="surface"
                  >
                    <IoOpenOutline />
                  </IconButton>
                </Group>
              }
              w={"full"}
            >
              <Clipboard.Input asChild={true}>
                <Input />
              </Clipboard.Input>
            </InputGroup>
          </Clipboard.Root>
        </Form>
      </Stack>
    </>
  );
}
