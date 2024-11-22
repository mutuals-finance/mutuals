export {
  MutualsClient,
  RECIPIENT_TYPE_KEY,
  CALCULATION_TYPE_KEY,
  RECIPIENT_TYPE_CONFIG,
  CALCULATION_TYPE_CONFIG,
} from "@mutuals/sdk";

export {
  getAllocationDefaults,
  getAllocationRecipientOptions,
  getRecipientAllocationOption,
  getGroupAllocationOption,
  recipientTypeName,
  calculationTypeName,
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

export { MutualsProvider } from "./context";
export {
  useCreatePool,
  useWithdraw,
  useSetPause,
  useTransferOwnership,
  useSetPoolAllocation,
  useAllocationUtils,
  useAllocationDefaults,
  type UseAllocationDefaults,
} from "./hooks";
