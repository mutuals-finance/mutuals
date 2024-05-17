"use client";

import { useCallback } from "react";
import {
  useSimulateContract,
  useTransactionReceipt,
  useWriteContract,
  UseWriteContractParameters,
} from "wagmi";

import { FACTORY_ADDRESS } from "@/lib/constants";

import { SplitFactory__factory } from "@/../../types/typechain";
import { randomBytes } from "ethers";
import { Address } from "viem";

export type CreateSplitArgs = [Address[], bigint[], string, boolean, bigint];

export type UseCreateSplitProps = {
  uri?: string;
  metadataLocked?: boolean;
  payees?: string[];
  shares?: number[];
} & UseWriteContractParameters;

export default function useCreateSplit({
  payees = [],
  shares = [],
  uri = "",
  metadataLocked,
  ...props
}: UseCreateSplitProps) {
  const salt = randomBytes(32).reduce(
    (acc, val) => acc + BigInt(val),
    BigInt("0"),
  );

  const simulate = useSimulateContract({
    address: FACTORY_ADDRESS,
    abi: SplitFactory__factory.abi,
    functionName: "createSplit",
    args: [
      payees,
      shares.map((s) => BigInt(s)),
      uri,
      !!metadataLocked,
      salt,
    ] as CreateSplitArgs,
    query: {
      enabled: payees.length > 1 && shares.length > 1 && uri !== "",
    },
  });

  const { writeContract: _writeContract, ...write } = useWriteContract(props);

  const writeContract = useCallback(() => {
    if (simulate?.data?.request) {
      _writeContract(simulate.data.request);
    }
  }, [_writeContract, simulate]);

  const tx = useTransactionReceipt({ hash: write.data });

  return { ...write, ...tx, writeContract };
}
