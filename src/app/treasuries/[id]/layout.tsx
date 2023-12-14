import { PropsWithChildren } from 'react';
import { PoolProvider } from '@/context/PoolContext';
import { SPLIT } from '@/lib/graphql/queries';
import { useFragment } from '@/lib/graphql/__generated__';
import { splitDetailsFragment } from '@/lib/graphql/fragments';
import { useQuery } from '@apollo/client';
import { Box } from '@chakra-ui/react';

export default function TreasuryDetailsLayout({ children }: PropsWithChildren) {
  return <Box>{children}</Box>;
}
