'use client';

import { useQuery } from '@apollo/client';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';

import { SPLITS_BY_PAYEE } from '@/lib/graphql/queries';

import { SplitFragmentCard } from '@/components/Split/Card';

import { TreasurySearchAndCreate } from '@/app/(dashboard)/PoolList/SearchAndCreate';

export default function PoolList() {
  const { address, isConnected } = useAccount();

  const { data, loading } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
    skip: !isConnected,
  });

  return (
    <Container variant={'shell'}>
      <Heading as={'h2'} size={'lg'} mb={'6'}>
        Payment Pools
      </Heading>

      <TreasurySearchAndCreate />
      <SimpleGrid
        templateColumns={'repeat(auto-fill, minmax(20rem, 1fr))'}
        spacing={6}
      >
        {Array(4)
          .fill(data?.splits[0])
          .map((fragment, index) => {
            return <SplitFragmentCard fragment={fragment} key={index} />;
          })}
      </SimpleGrid>
    </Container>
  );
}
