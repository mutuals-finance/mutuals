import {
  Alert,
  AlertIcon,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  ListItem,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import {
  IoCopyOutline,
  IoEllipsisHorizontal,
  IoGlobeOutline,
  IoOpenOutline,
} from 'react-icons/io5';

import QRCode from '@/components/QRCode';

import { useSplit } from '@/context/SplitContext';

export function DepositTab() {
  const { split } = useSplit();
  const { address } = split;

  return (
    <Container as={'section'} maxWidth={'container.xl'}>
      <Box maxW='2xl'>
        <Stack spacing='6'>
          <Heading as='h2' size='2xl'>
            Deposit
          </Heading>
          <Alert status='warning'>
            <AlertIcon />
            <UnorderedList>
              <ListItem>
                Only ETH and ERC-20 tokens can be deposited. Do not send NFTs to
                a Split.
              </ListItem>
              <ListItem>
                Please make sure to operate on the Ethereum chain. Other
                networks are not supported for this address.
              </ListItem>
            </UnorderedList>
          </Alert>

          <Text>Use the address below to receive funds to your split.</Text>

          <Card maxW='md' variant='outline'>
            <CardHeader>
              <Flex gap='3' alignItems={'center'}>
                <Flex flex='1'>
                  <Tag size={'sm'}>
                    <TagLeftIcon as={IoGlobeOutline} />
                    <TagLabel>Ethereum Chain</TagLabel>
                  </Tag>
                </Flex>

                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  icon={<IoEllipsisHorizontal />}
                />
              </Flex>
            </CardHeader>

            <CardBody>
              <Center>
                <div className={'rounded-default overflow-hidden'}>
                  <QRCode text={address} />
                </div>
              </Center>
            </CardBody>

            <Divider />

            <CardFooter>
              <Stack>
                <Text>Split address</Text>
                <ButtonGroup variant='outline' size='sm' isAttached>
                  <Button
                    rightIcon={<IoCopyOutline />}
                    aria-label='Copy split address to clipboard'
                  >
                    {address}
                  </Button>
                  <IconButton
                    aria-label='View on Etherscan'
                    icon={<IoOpenOutline />}
                  />
                </ButtonGroup>
              </Stack>
            </CardFooter>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
}
