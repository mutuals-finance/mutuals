import type { TreeView } from "@mutuals/ui";
import type { ReactNode } from "react";

export type HexString = `0x${string}`;

export const ModuleType = {
  Validation: "Validation",
  Distribution: "Distribution",
} as const;

export type ModuleType = (typeof ModuleType)[keyof typeof ModuleType];

export type ModuleRenderProps = TreeView.NodeState;
export type ModuleRenderFn = ((props: ModuleRenderProps) => ReactNode) | null;

export type ModuleEncodeDataFn<TData = unknown> = (data: TData) => HexString;
export type ModuleBatchEncodeDataFn<TData = unknown> = (
  data: TData[]
) => HexString;

export type ModuleEncodeArgsFn<TArgs = unknown, TData = unknown> = (
  args: TArgs,
  data: TData
) => HexString;

export type ModuleBatchEncodeArgsFn<TArgs = unknown, TData = unknown> = (
  args: TArgs[],
  data: TData[]
) => HexString;

export interface Module<TData = unknown, TArgs = unknown> {
  batchEncodeArgs?: ModuleBatchEncodeArgsFn<TArgs, TData>;
  batchEncodeData?: ModuleBatchEncodeDataFn<TData>;
  defaultArgs?: TArgs;
  defaultData?: TData;
  description?: string;
  encodeArgs: ModuleEncodeArgsFn<TArgs, TData>;
  encodeData: ModuleEncodeDataFn<TData>;
  id: string;
  moduleType: ModuleType;
  name: string;
  render: ModuleRenderFn;
}
