import { FileWithPreview } from "@/components/Form/types";
import { type Allocation } from "@mutuals/sdk-react";
import { CellContext } from "@tanstack/react-table";
import type { TableProps } from "@/components/Table";
import { FieldArrayWithId } from "react-hook-form";
import { Address } from "viem";

export type AllocationItemRecipientOrGroupBaseProps = FieldArrayWithId<
  PoolAddData,
  "allocations",
  "id"
>;

export type AllocationTableBaseProps = { id?: string };

export type AllocationTableProps = Omit<TableProps<Allocation>, "columns"> &
  AllocationTableBaseProps;

export type AllocationTableCellProps<TValue = unknown> = CellContext<
  Allocation,
  TValue
> &
  AllocationTableBaseProps;

export type PoolAddData = {
  image: FileWithPreview;
  ownerAddress: Address;
  name: string;
  description: string;
  allocations: Allocation[];
};

export type ActionWithLabel = [string, () => void];
