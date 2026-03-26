import { encodeAbiParameters, zeroAddress } from "viem";
import type {
  ModuleBatchEncodeArgsFn,
  ModuleBatchEncodeDataFn,
  ModuleEncodeArgsFn,
  ModuleEncodeDataFn,
} from "../../types";
import type { DirectDistributionArgs, DirectDistributionData } from "./index";

const DATA_ABI_PARAMS = [
  { name: "recipient", type: "address" },
  { name: "amount", type: "uint256" },
  { name: "isPercentage", type: "bool" },
] as const;

const BATCH_DATA_ABI_PARAMS = [
  { name: "recipients", type: "address[]" },
  { name: "amounts", type: "uint256[]" },
  { name: "isPercentages", type: "bool[]" },
] as const;

const ARGS_ABI_PARAMS = [
  { name: "targetTokenType", type: "uint8" },
  { name: "targetToken", type: "address" },
  { name: "targetTokenId", type: "uint256" },
  { name: "requestValue", type: "uint256" },
] as const;

const BATCH_ARGS_ABI_PARAMS = [
  { name: "targetTokenTypes", type: "uint8[]" },
  { name: "targetTokens", type: "address[]" },
  { name: "targetTokenIds", type: "uint256[]" },
  { name: "requestValues", type: "uint256[]" },
] as const;

const mapTokenType = (tokenType?: string): number => {
  if (tokenType === "NATIVE") {
    return 0;
  }
  if (tokenType === "ERC20") {
    return 1;
  }
  if (tokenType === "ERC721") {
    return 2;
  }
  if (tokenType === "ERC1155") {
    return 3;
  }
  return 0;
};

const formatDataTuple = (data: DirectDistributionData) =>
  [
    (data.recipient || zeroAddress) as `0x${string}`,
    BigInt(data.value || 0),
    data.allocationType === "percentage",
  ] as const;

const formatArgsTuple = (args: DirectDistributionArgs) => {
  if (args.token) {
    const isFungible =
      args.token.tokenType === "NATIVE" || args.token.tokenType === "ERC20";

    return [
      mapTokenType(args.token.tokenType),
      (args.token.address || zeroAddress) as `0x${string}`,
      BigInt(isFungible ? 0 : args.token.id),
      BigInt(args.requestValue || 0),
    ] as const;
  }

  return [0, zeroAddress, BigInt(0), BigInt(args.requestValue || 0)] as const;
};

export const encodeData: ModuleEncodeDataFn<DirectDistributionData> = (
  data
) => {
  return encodeAbiParameters(DATA_ABI_PARAMS, formatDataTuple(data));
};

export const batchEncodeData: ModuleBatchEncodeDataFn<
  DirectDistributionData
> = (data) => {
  const tuples = data.map(formatDataTuple);

  return encodeAbiParameters(BATCH_DATA_ABI_PARAMS, [
    tuples.map((t) => t[0]),
    tuples.map((t) => t[1]),
    tuples.map((t) => t[2]),
  ]);
};

export const encodeArgs: ModuleEncodeArgsFn<
  DirectDistributionArgs,
  DirectDistributionData
> = (args) => {
  return encodeAbiParameters(ARGS_ABI_PARAMS, formatArgsTuple(args));
};

export const batchEncodeArgs: ModuleBatchEncodeArgsFn<
  DirectDistributionArgs,
  DirectDistributionData
> = (args) => {
  const tuples = args.map(formatArgsTuple);

  return encodeAbiParameters(BATCH_ARGS_ABI_PARAMS, [
    tuples.map((t) => t[0]),
    tuples.map((t) => t[1]),
    tuples.map((t) => t[2]),
    tuples.map((t) => t[3]),
  ]);
};
