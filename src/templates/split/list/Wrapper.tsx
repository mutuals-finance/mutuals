import { useQuery } from '@apollo/client';
import { Icon } from '@chakra-ui/icon';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { IoCreateOutline, IoSearch, IoSearchOutline } from 'react-icons/io5';
import { useAccount } from 'wagmi';

import { SPLITS_BY_PAYEE } from '@/lib/graphql/queries';

import { ButtonPrimary } from '@/components/Button';
import Form from '@/components/Form';
import Input from '@/components/Form/Input';
import { SplitFragmentCard } from '@/components/Split/Card';

export function SplitListWrapper() {
  const { address, isConnected } = useAccount();

  const { data } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
    skip: !isConnected,
  });

  return (
    <Flex minH={'calc(100vh - 72px)'}>
      <Container maxW='container.xl'>
        <Heading as={'h1'} size={'2xl'} my={'12'}>
          My Splits
        </Heading>

        <HStack mb={'12'} spacing={'6'} alignItems={'center'}>
          <Form flex={'1'}>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                <Icon
                  as={IoSearch}
                  color={useColorModeValue('gray.400', 'gray.600')}
                />
              </InputLeftElement>
              <Input hideWrapper={true} placeholder='Search...' pl={'10'} />
            </InputGroup>
          </Form>
          <Link href='/splits/new' passHref legacyBehavior>
            <Button as={'a'}>Create New Split</Button>
          </Link>
        </HStack>

        <SimpleGrid columns={3} spacing={6}>
          {data?.splits.map((fragment, index) => {
            return <SplitFragmentCard fragment={fragment} key={index} />;
          })}
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
