import { AllocationItem, AllocationNode, AllocationType } from "@mutuals/sdk";

export type ContractExecutionStatus =
  | "pendingApproval"
  | "txInProgress"
  | "complete"
  | "error";

export type DataLoadStatus = "success" | "error" | "loading";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RequestError = any;
