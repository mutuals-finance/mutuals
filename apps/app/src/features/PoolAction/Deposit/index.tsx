import {
  Flex,
  Text,
  Stack,
  Tag,
  TagLabel,
  Center,
  IconButton,
  ButtonGroup,
  Button,
  Alert,
  Box,
  Card,
  CardHeader,
  CardBody,
} from "@splitfi/ui";
import {
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoOpenOutline,
} from "react-icons/io5";
import QRCode from "@/components/QRCode";
import { Split } from "@splitfi/sdk/thegraph";
import { DeepPartial } from "#/partial";

interface PoolActionDepositProps {
  pool?: DeepPartial<Split>;
}

export default async function PoolActionDeposit({
  pool,
}: PoolActionDepositProps) {
  return (
    <>
      <Stack overflowY={"auto"} flex={"1"} p="6" spacing={"3"}>
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

        <Card size={"sm"} variant={"outline"}>
          <CardHeader
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
              colorScheme="gray"
              aria-label="See menu"
              icon={<IoEllipsisHorizontal />}
            />
          </CardHeader>
          <CardBody>
            <Center>
              <QRCode text={pool?.address} />
            </Center>
          </CardBody>
        </Card>
      </Stack>

      <Stack
        flexShrink={"0"}
        p={"6"}
        borderTop={"1px solid"}
        borderColor={"border.1"}
      >
        <Text fontSize={"sm"}>Pool address</Text>
        <ButtonGroup size="md" variant="outline" isAttached>
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
        </ButtonGroup>
      </Stack>
    </>
  );
}
