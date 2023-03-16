import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { Split__factory } from '@/../../types/typechain';
import useDebounce from '@/hooks/useDebounce';
import { useMemo } from 'react';

export type WithdrawSplitArgs = [`0x{string}`, `0x{string}`[]];

export type WithdrawSplitResult = Omit<
  ReturnType<
    typeof usePrepareContractWrite<typeof Split__factory.abi, 'release'>
  >,
  'error'
> &
  ReturnType<typeof useContractWrite<typeof Split__factory.abi, 'release'>>;

export type WithdrawSplitProps = {
  split: string;
  tokens: string[] | null;
} & Parameters<
  typeof usePrepareContractWrite<typeof Split__factory.abi, 'release'>
>[0];

export default function useWithdrawSplit(
  address: string,
  { tokens, ...props }: WithdrawSplitProps
) {
  const account = useAccount();
  const argsMemo = useMemo(() => {
    return [account.address];
  }, [account.address]);

  const [...args] = useDebounce(argsMemo, 500);

  const enabled = !tokens || tokens.length > 0;

  const prepare = usePrepareContractWrite({
    address,
    abi: Split__factory.abi,
    functionName: 'withdraw',
    enabled,
    args,
    ...props,
  });

  const tx = useContractWrite(prepare.config);

  return { ...prepare, ...tx, error: prepare.error || tx.error };
}
