import type { Balance } from "@ankr.com/ankr.js/dist/types";
import { useCallback } from "react";
import type { Address } from "viem";
import {
  type UseSimulateContractParameters,
  useAccount,
  useTransactionReceipt,
  useWriteContract,
} from "wagmi";

export type WithdrawSplitArgs = [boolean, Address[], Address];

export type WithdrawSplitProps = UseSimulateContractParameters;

export default function useWithdrawSplit(
  _address?: string,
  tokens: Balance[] = [],
  props?: WithdrawSplitProps
) {
  const _account = useAccount();

  const _tokensNoNative = tokens
    .filter((a) => a.tokenType !== "NATIVE")
    .map((a) => a.contractAddress);

  /*
  const simulate = useSimulateContract({
    address: address as Address,
    abi: Split__factory.abi,
    functionName: "batchWithdraw",
    args: [
      tokensNoNative.length !== tokens.length,
      tokensNoNative,
      account.address,
    ] as WithdrawSplitArgs,
    ...props,
  });
*/

  const { writeContract: _writeContract, ...write } = useWriteContract(props);

  const writeContract = useCallback(() => {
    /*
    if (simulate?.data?.request) {
      _writeContract(simulate.data.request);
    }
*/
  }, []);

  const tx = useTransactionReceipt({ hash: write.data });

  return { ...write, ...tx, writeContract };
}
