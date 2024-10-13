import { FileWithPreview } from "@/components/Form/types";
import { AllocationNode } from "@mutuals/sdk-react";
import { CellContext } from "@tanstack/react-table";
import type { TableProps } from "@/components/Table";

/*
export type AllocationDataItem = FieldArrayWithId<
  PoolAddData,
  "allocations",
  "id"
>;
*/

export type AllocationTableProps = Omit<TableProps<AllocationNode>, "columns">;

export type AllocationTableCellProps<TValue = unknown> = CellContext<
  AllocationNode,
  TValue
> & { id?: string };

export type PoolAddData = {
  image: FileWithPreview;
  name: string;
  description: string;
  allocations: AllocationNode[];
};

export type ActionWithLabel = [string, () => void];
