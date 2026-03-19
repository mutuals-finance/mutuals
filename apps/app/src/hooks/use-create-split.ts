"use client";

import { useCallback } from "react";
import { type Address, hexToBigInt, keccak256 } from "viem";
import { generatePrivateKey } from "viem/accounts";
import {
  type UseWriteContractParameters,
  useSimulateContract,
  useTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { SplitFactory__factory } from "#/typechain";
import { FACTORY_ADDRESS } from "@/constants";

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
  const salt = hexToBigInt(keccak256(generatePrivateKey()));

  const simulate = useSimulateContract({
    address: FACTORY_ADDRESS,
    abi: SplitFactory__factory.abi,
    functionName: "createSplit",
    args: [
      payees as Address[],
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
