import { type TokenTransfer } from '@ankr.com/ankr.js/dist/types';
import { Link } from '@chakra-ui/next-js';
import { CellContext } from '@tanstack/react-table';
import React from 'react';

import useExplorerLink from '@/hooks/useExplorerLink';

type AddressCellProps = CellContext<TokenTransfer, string | unknown> & {
  address?: string;
};

export function AddressCell({ getValue, address: parent }: AddressCellProps) {
  const address = getValue() as string;
  const equals = parent?.toLowerCase() === address.toLowerCase();
  const { href, shortAddress } = useExplorerLink({ address });
  return !equals ? (
    <Link href={href} target={'_blank'} rel={'noopener noreferrer'}>
      {shortAddress}
    </Link>
  ) : (
    <Link href={href} target={'_blank'} rel={'noopener noreferrer'}>
      {shortAddress}
    </Link>
  );
}
