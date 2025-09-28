export { MutualsClient, AllocationType, allocationIds } from "@mutuals/sdk";

export {
  getAllocationDefaults,
  getAllocationRecipientOptions,
  getRecipientAllocationOption,
  getGroupAllocationOption,
  recipientTypeName,
  calculationTypeName,
  buildMerkleTree,
} from "@mutuals/sdk/utils";

export type {
  MutualsClientConfig,
  DataClientConfig,
  CallData,
  CreatePoolConfig,
  SetPoolAllocationConfig,
  WithdrawConfig,
  TransferOwnershipConfig,
  SetPausedConfig,
  RecipientType,
  CalculationType,
  Allocation,
} from "@mutuals/sdk";
export { ChainId } from "@mutuals/sdk/constants";

export type {
  ClaimCreateNode,
  ClaimCreateTree,
  PoolCreateInput,
  ExtensionRenderInputProps,
  ExtensionType,
} from "./types";

export {
  StateExtensions,
  StrategyExtensions,
  stateIds,
  strategyIds,
} from "./extensions";

export { MutualsProvider } from "./context";
export {
  useMutualsClient,
  useCreatePool,
  useWithdraw,
  useSetPause,
  useTransferOwnership,
  useSetPoolAllocation,
  useAllocationUtils,
  useAllocationDefaults,
  type UseAllocationDefaults,
} from "./hooks";
