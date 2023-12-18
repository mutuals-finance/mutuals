import { Link } from '@chakra-ui/next-js';
import { HStack, Text } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';
import React from 'react';

import useExplorerLink from '@/hooks/useExplorerLink';

import UserAvatar from '@/components/UserAvatar';

import { Payer } from '@/app/pool/[id]/(overview)/Payers/PayerTable/types';

export default function PayerCell({
  getValue,
}: CellContext<Payer, string | undefined>) {
  const address = getValue();
  const { href, shortAddress } = useExplorerLink({ address });

  return (
    <HStack alignItems={'center'} spacing={'3'}>
      <UserAvatar address={address} />
      <Text
        as={Link}
        variant={'slashed-zero'}
        href={href}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        {shortAddress}
      </Text>
    </HStack>
  );
}
