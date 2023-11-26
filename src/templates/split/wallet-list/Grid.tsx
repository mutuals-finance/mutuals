import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';

import WalletCard from '@/templates/split/wallet-list/WalletCard';

export function WalletListGrid() {
  /*
  const { address, isConnected } = useAccount();

  const { data, loading } = useQuery(SPLITS_BY_PAYEE, {
    variables: { payee: address },
    skip: !isConnected,
  });
*/

  return (
    <SimpleGrid
      templateColumns={'repeat(auto-fill, minmax(16rem, 1fr))'}
      spacing={6}
    >
      <WalletCard />
      <WalletCard />
    </SimpleGrid>
  );
}
