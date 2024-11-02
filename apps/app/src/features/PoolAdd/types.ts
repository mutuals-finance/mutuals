import { FileWithPreview } from "@/components/Form/types";
import { AllocationNode } from "@mutuals/sdk-react";
import { CellContext } from "@tanstack/react-table";
import type { TableProps } from "@/components/Table";

export type AllocationTableBaseProps = { id?: string };

export type AllocationTableProps = Omit<TableProps<AllocationNode>, "columns"> &
  AllocationTableBaseProps;

export type AllocationTableCellProps<TValue = unknown> = CellContext<
  AllocationNode,
  TValue
> &
  AllocationTableBaseProps;

export type PoolAddData = {
  image: FileWithPreview;
  name: string;
  description: string;
  allocations: AllocationNode[];
};

export type ActionWithLabel = [string, () => void];
