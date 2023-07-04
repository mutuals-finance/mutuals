import { Balance } from '@ankr.com/ankr.js/dist/types';
import { useMemo } from 'react';
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi';

import { Split__factory } from '#/typechain';

export type WithdrawSplitArgs = [boolean, `0x{string}`[], `0x{string}`];

export type WithdrawSplitProps = Omit<
  UsePrepareContractWriteConfig,
  'args' | 'abi' | 'functionName' | 'address'
>;

export default function useWithdrawSplit(
  address: string,
  tokens: Balance[] = [],
  props?: WithdrawSplitProps
) {
  const account = useAccount();

  const tokensNoNative = tokens
    .filter((a) => a.tokenType !== 'NATIVE')
    .map((a) => a.contractAddress);

  const prepare = usePrepareContractWrite({
    address: address as `0x${string}`,
    abi: Split__factory.abi,
    functionName: 'batchWithdraw',
    args: [
      tokensNoNative.length !== tokens.length,
      tokensNoNative,
      account.address,
    ],
    ...props,
  });

  const tx = useContractWrite(prepare.config);

  return { ...prepare, ...tx, error: prepare.error || tx.error };
}
