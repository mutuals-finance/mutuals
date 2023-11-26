import { useQuery } from '@apollo/client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';

import { SPLITS_BY_PAYEE } from '@/lib/graphql/queries';
import { useMetadata } from '@/lib/split/hooks';

import { SplitFragmentCard } from '@/components/Split/Card';

export function SplitListGrid() {
  const { address, isConnected } = useAccount();

  const { data, loading } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
    skip: !isConnected,
  });

  return (
    <SimpleGrid
      templateColumns={'repeat(auto-fill, minmax(20' + 'rem, 1fr))'}
      spacing={6}
    >
      {loading ? (
        <Text>Loading</Text>
      ) : (
        data?.splits.map((fragment, index) => {
          return <SplitFragmentCard fragment={fragment} key={index} />;
        })
      )}
    </SimpleGrid>
  );
}
