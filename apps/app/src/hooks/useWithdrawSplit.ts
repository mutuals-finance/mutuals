import { Balance } from "@ankr.com/ankr.js/dist/types";
import { useCallback, useMemo } from "react";
import {
  useAccount,
  useSimulateContract,
  UseSimulateContractParameters,
  useTransactionReceipt,
  useWriteContract,
} from "wagmi";

import { Split__factory } from "#/typechain";
import { Address } from "viem";

export type WithdrawSplitArgs = [boolean, Address[], Address];

export type WithdrawSplitProps = UseSimulateContractParameters;

export default function useWithdrawSplit(
  address: string,
  tokens: Balance[] = [],
  props?: WithdrawSplitProps,
) {
  const account = useAccount();

  const tokensNoNative = tokens
    .filter((a) => a.tokenType !== "NATIVE")
    .map((a) => a.contractAddress);

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

  const {
    writeContractAsync: _,
    writeContract: _writeContract,
    ...write
  } = useWriteContract(props);

  const writeContract = useCallback(() => {
    if (simulate?.data?.request) {
      _writeContract(simulate.data.request);
    }
  }, [_writeContract, simulate]);

  const tx = useTransactionReceipt({ hash: write.data });

  return { ...write, ...tx, writeContract };
}
