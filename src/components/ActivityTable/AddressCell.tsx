import { type TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { CellContext } from '@tanstack/react-table';
import React from 'react';

import { LinkChainExplorer } from '@/components/Link';

interface AddressCellProps {
  info: CellContext<TokenTransfer, string | undefined>;
  address?: string;
}

export default function AddressCell({ info, address }: AddressCellProps) {
  const value = info.getValue() || '';
  const equals = address?.toLowerCase() === value.toLowerCase();

  return equals ? (
    <></>
  ) : (
    <LinkChainExplorer address={value} size={'sm'} color={'secondary'} />
  );
}
