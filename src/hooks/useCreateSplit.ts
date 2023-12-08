import { useMemo } from 'react';
import {
  useContractWrite,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi';

import { FACTORY_ADDRESS } from '@/lib/constants';
import useDebounce from '@/hooks/useDebounce';

import { SplitFactory__factory } from '@/../../types/typechain';
import { randomBytes } from 'ethers';

export type CreateSplitArgs = [
  `0x{string}`[],
  BigInt[],
  string,
  boolean,
  BigInt,
];

export type CreateSplitProps = {
  uri?: string;
  metadataLocked?: boolean;
  payees?: string[];
  shares?: number[];
} & Omit<
  UsePrepareContractWriteConfig,
  'args' | 'enabled' | 'functionName' | 'abi' | 'address'
>;

export default function useCreateSplit({
  payees = [],
  shares = [],
  uri = '',
  metadataLocked,
  ...props
}: CreateSplitProps) {
  const salt = randomBytes(32).reduce(
    (acc, val) => acc + BigInt(val.toString()),
    BigInt('0'),
  );

  const argsMemo = useMemo(() => {
    return [
      payees,
      shares.map((s) => BigInt(s.toString())),
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
