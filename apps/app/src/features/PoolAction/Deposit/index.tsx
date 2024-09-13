import {
  Flex,
  Text,
  Stack,
  Tag,
  TagLabel,
  Center,
  IconButton,
  Group,
  Button,
  Alert,
  Box,
  Card,
} from "@mutuals/ui";
import {
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoOpenOutline,
} from "react-icons/io5";
import QRCode from "@/components/QRCode";
import { Split } from "@mutuals/graphql-client-nextjs/thegraph";
import { DeepPartial } from "#/partial";

interface PoolActionDepositProps {
  pool?: DeepPartial<Split>;
}

export default async function PoolActionDeposit({
  pool,
}: PoolActionDepositProps) {
  return (
    <>
      <Stack overflowY={"auto"} flex={"1"} p="6" gap={"3"}>
        <Text>
          Use the address below to receive funds to this Payment Pool.
        </Text>

        <Box>
          <Alert status="warning" fontSize={"xs"}>
            Only ETH and ERC-20 tokens can be deposited. Do not send NFTs to a
            Pool. Please make sure to operate on the Ethereum chain, as other
            networks are not supported for this address.
          </Alert>
        </Box>

        <Card.Root size={"sm"} variant={"outline"}>
          <Card.Header
            as={Flex}
            w={"full"}
            alignItems={"center"}
            justifyContent={"space-between"}
            pb={"0"}
          >
            <Tag size={"sm"}>
              <TagLabel>Ethereum</TagLabel>
            </Tag>

            <IconButton
              variant="ghost"
              colorPalette="gray"
              aria-label="See menu"
              icon={<IoEllipsisHorizontal />}
            />
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
        p={"6"}
        borderTop={"1px solid"}
        borderColor={"border.1"}
      >
        <Text fontSize={"sm"}>Pool address</Text>
        <Group size="md" variant="outline" isAttached>
          <Button
            w={"full"}
            rightIcon={<IoCopyOutline />}
            aria-label="Copy split address to clipboard"
          >
            <Text noOfLines={1} display={"block"}>
              {pool?.address}
            </Text>
          </Button>
          <IconButton aria-label="View on Etherscan" icon={<IoOpenOutline />} />
        </Group>
      </Stack>
    </>
  );
}
