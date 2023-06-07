import { type TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { CellContext } from '@tanstack/react-table';
import React from 'react';

import { LinkChainExplorer } from '@/components/Link';

type AddressCellProps = CellContext<TokenTransfer, string | unknown> & {
  address?: string;
};

export function AddressCell({ getValue, address: parent }: AddressCellProps) {
  const address = getValue() as string;
  const equals = parent?.toLowerCase() === address.toLowerCase();

  return !equals ? (
    <LinkChainExplorer address={address} size={'sm'} color={'secondary'} />
  ) : (
    <LinkChainExplorer address={address} size={'sm'} color={'secondary'} />
  );
}
