import { BigNumber, utils } from 'ethers';
import ethers from 'ethers';
import { useEffect, useMemo } from 'react';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

import { FACTORY_ADDRESS } from '@/lib/constants';
import useDebounce from '@/hooks/useDebounce';

import { SplitFactory__factory } from '@/../../types/typechain';

export type CreateSplitArgs = [
  `0x{string}`[],
  BigNumber[],
  string,
  boolean,
  BigNumber
];

export type CreateSplitResult = Omit<
  ReturnType<
    typeof usePrepareContractWrite<
      typeof SplitFactory__factory.abi,
      'createSplit'
    >
  >,
  'error'
> &
  ReturnType<
    typeof useContractWrite<typeof SplitFactory__factory.abi, 'createSplit'>
  >;

export type CreateSplitProps = {
  uri?: string;
  metadataLocked?: boolean;
  payees?: string[];
  shares?: number[];
} & Parameters<
  typeof usePrepareContractWrite<
    typeof SplitFactory__factory.abi,
    'createSplit'
  >
>[0];

export default function useCreateSplit({
  payees = [],
  shares = [],
  uri = '',
  metadataLocked,
  ...props
}: CreateSplitProps) {
  const salt = BigNumber.from(utils.randomBytes(32));

  const argsMemo = useMemo(() => {
    return [
      payees,
      shares.map((s = 0) => BigNumber.from(s)),
      uri,
      !!metadataLocked,
      salt,
    ];
  }, [payees, shares, uri, metadataLocked, salt]) as CreateSplitArgs;

  const [...args] = useDebounce(argsMemo, 500);

  const enabled = args[0].length > 1 && args[1].length > 1 && args[2] !== '';

  const prepare = usePrepareContractWrite({
    address: FACTORY_ADDRESS,
    abi: SplitFactory__factory.abi,
    functionName: 'createSplit',
    enabled,
    args,
    ...props,
  });

  const tx = useContractWrite(prepare.config);

  return { ...prepare, ...tx, error: prepare.error || tx.error };
}
