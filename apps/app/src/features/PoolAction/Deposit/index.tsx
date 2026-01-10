import {
  Text,
  Stack,
  Badge,
  Center,
  IconButton,
  Group,
  Alert,
  QrCode,
  Clipboard,
  Input,
  InputGroup,
  Form,
} from "@mutuals/ui";
import { IoEllipsisHorizontal, IoOpenOutline } from "react-icons/io5";
import { Pool } from "@mutuals/graphql-client-nextjs";
import { DeepPartial } from "#/partial";

interface PoolActionDepositProps {
  pool?: DeepPartial<Pool>;
}

export default async function PoolActionDeposit({
  pool,
}: PoolActionDepositProps) {
  const address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
  return (
    <>
      <Stack flex={"1"} p="6" gap={"2"}>
        <Alert status="warning" size="sm" textStyle={"xs"}>
          Only ETH and ERC-20 tokens can be deposited. Do not send NFTs to a
          Pool. Please make sure to operate on the Ethereum chain, as other
          networks are not supported for this address.
        </Alert>

        <Text color={"fg.muted"} textStyle={"sm"}>
          Use the address below to receive funds to this Payment Pool. It is
          unique to this Pool and can be used to deposit ETH and ERC-20 tokens.
        </Text>

        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Badge>Ethereum</Badge>

          <IconButton size={"md"} variant="ghost" aria-label="See menu">
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
        py={{ base: "4", lg: "6" }}
      >
        <Form direction={"column"}>
          <Clipboard.Root value={address}>
            <Clipboard.Label textStyle="label">Pool address</Clipboard.Label>
            <InputGroup
              w={"full"}
              endElement={
                <Group attached={false} me="-2">
                  <Clipboard.Trigger asChild>
                    <IconButton variant="surface" size="xs">
                      <Clipboard.Indicator />
                    </IconButton>
                  </Clipboard.Trigger>

                  <IconButton
                    variant="surface"
                    aria-label="View on Etherscan"
                    size={"xs"}
                  >
                    <IoOpenOutline />
                  </IconButton>
                </Group>
              }
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
