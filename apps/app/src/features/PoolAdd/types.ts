import { FileWithPreview } from "@/components/Form/types";
import { AllocationNode } from "@mutuals/sdk-react";

import { CellContext } from "@tanstack/react-table";
import type { TableProps } from "@/components/Table";
import { FieldArrayWithId, UseFieldArrayReturn } from "react-hook-form";

export type AllocationDataItem = FieldArrayWithId<
  PoolAddData,
  "allocations",
  "id"
>;

export type AllocationTableProps = Omit<
  TableProps<AllocationDataItem>,
  "columns"
>;

export type AllocationTableCellProps<TValue = unknown> = CellContext<
  AllocationDataItem,
  TValue
> &
  UseFieldArrayReturn<PoolAddData> & { id?: string };

export type PoolAddData = {
  image: FileWithPreview;
  name: string;
  description: string;
  allocations: AllocationNode[];
};

export type ActionWithLabel = [string, () => void];
