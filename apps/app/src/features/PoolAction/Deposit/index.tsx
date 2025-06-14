import {
  Text,
  Stack,
  Tag,
  TagLabel,
  Center,
  IconButton,
  Group,
  Button,
  Alert,
  Card,
} from "@mutuals/ui";
import {
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoOpenOutline,
} from "react-icons/io5";
import QRCode from "@/components/QRCode";
import { Pool } from "@mutuals/graphql-client-nextjs";

interface PoolActionDepositProps {
  pool?: Pool;
}

export default async function PoolActionDeposit({
  pool,
}: PoolActionDepositProps) {
  return (
    <>
      <Stack overflowY={"auto"} flex={"1"} p="6" gap={"2"}>
        <Text>
          Use the address below to receive funds to this Payment Pool.
        </Text>

        <Alert status="warning" fontSize={"xs"}>
          Only ETH and ERC-20 tokens can be deposited. Do not send NFTs to a
          Pool. Please make sure to operate on the Ethereum chain, as other
          networks are not supported for this address.
        </Alert>

        <Card.Root size={"sm"} variant={"outline"}>
          <Card.Header>
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Tag>
                <TagLabel>Ethereum</TagLabel>
              </Tag>

              <IconButton size={"sm"} variant="ghost" aria-label="See menu">
                <IoEllipsisHorizontal />
              </IconButton>
            </Stack>
          </Card.Header>
          <Card.Body>
            <Center>
              <QRCode text={pool?.address} />
            </Center>
          </Card.Body>
        </Card.Root>
      </Stack>

      <Stack
        flexShrink={"0"}
        p={"4"}
        borderTop={"1px solid"}
        borderColor={"border"}
      >
        <Text fontWeight={"medium"} textStyle={"sm"}>
          Pool address
        </Text>
        <Group attached={true}>
          <Button
            variant="outline"
            flex={"1"}
            aria-label="Copy split address to clipboard"
          >
            {pool?.address}

            <IoCopyOutline />
          </Button>

          <IconButton variant="outline" aria-label="View on Etherscan">
            <IoOpenOutline />
          </IconButton>
        </Group>
      </Stack>
    </>
  );
}
