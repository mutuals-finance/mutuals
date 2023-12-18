import {
  Flex,
  Text,
  Stack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Center,
  IconButton,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import {
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoGlobeOutline,
  IoOpenOutline,
} from 'react-icons/io5';
import QRCode from '@/components/QRCode';

export default function PoolHandleDeposit() {
  const address = '1234';
  return (
    <Stack spacing='6'>
      <Text>Use the address below to receive funds to your split.</Text>

      <Flex gap='3' alignItems={'center'}>
        <Flex flex='1'>
          <Tag size={'sm'}>
            <TagLabel>Ethereum</TagLabel>
          </Tag>
        </Flex>

        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
          icon={<IoEllipsisHorizontal />}
        />
      </Flex>

      <Center>
        <div className={'rounded-default overflow-hidden'}>
          <QRCode text={address} />
        </div>
      </Center>

      <Divider />

      <Stack>
        <Text>Split address</Text>
        <ButtonGroup size='md' variant='outline' isAttached>
          <Button
            w={'full'}
            rightIcon={<IoCopyOutline />}
            aria-label='Copy split address to clipboard'
          >
            <Text noOfLines={1} display={'block'}>
              {address}
            </Text>
          </Button>
          <IconButton aria-label='View on Etherscan' icon={<IoOpenOutline />} />
        </ButtonGroup>
      </Stack>

      {/*
      <Alert status='warning' size={'sm'}>
        <UnorderedList>
          <ListItem>
            Only ETH and ERC-20 tokens can be deposited. Do not send NFTs to a
            Split.
          </ListItem>
          <ListItem>
            Please make sure to operate on the Ethereum chain. Other networks
            are not supported for this address.
          </ListItem>
        </UnorderedList>
      </Alert>
*/}
    </Stack>
  );
}

/*
export default function DepositTab({
  pool,
}: {
  pool: SplitBaseFragmentFragment;
}) {
  const { address } = pool;

  return (
    <Stack spacing='6'>
      <Text>Use the address below to receive funds to your split.</Text>

    </Stack>
  );
}
*/
