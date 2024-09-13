import { FileWithPreview } from "@/components/Form/types";
import { AllocationNode } from "@mutuals/sdk-react";

import { CellContext } from "@tanstack/react-table";
import type { TableProps } from "@/components/Table";
import { UseFieldArrayReturn } from "react-hook-form";

export type AllocationTableProps = Omit<TableProps<AllocationNode>, "columns">;

export type AllocationTableCellProps = CellContext<AllocationNode, unknown> &
  UseFieldArrayReturn<PoolAddData>;

export type PoolAddPayee = {
  id: string;
  value: string;
};

export type PoolAddData = {
  image: FileWithPreview;
  name: string;
  description: string;
  metadataLocked: boolean;
  payees: PoolAddPayee[];
  allocations: AllocationNode[];
};
