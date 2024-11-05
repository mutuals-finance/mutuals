import {
  FieldArrayWithId,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { useCallback } from "react";
import { AllocationNode, DefaultAllocationItems } from "@mutuals/sdk-react";
import { useAllocation } from "@/features/PoolAdd/AllocationProvider";
import type { PoolAddData } from "@/features/PoolAdd/types";

export type UseAllocationData = {
  lastItem: AllocationNode | null;
  defaultItems: DefaultAllocationItems | undefined;
  insert: (props?: { index?: number; value?: AllocationNode }) => void;
  insertCached: (props?: { index?: number }) => void;
  fields: FieldArrayWithId<PoolAddData, "allocations", "id">[];
  append: (props?: { value?: AllocationNode }) => void;
  remove: (index?: number | number[]) => void;
};

export type UseAllocationDataArgs = {
  id?: string;
};

export function useAllocationData(
  { id: _id = "allocations" } = {
    id: "allocations",
  } as UseAllocationDataArgs,
): UseAllocationData {
  const id = _id as "allocations";

  const { control } = useFormContext<PoolAddData>();
  const {
    fields,
    insert: _insert,
    append: _append,
    remove,
  } = useFieldArray({ control, name: id });

  const { items: defaultItems, updateLastItem, lastItem } = useAllocation();

  const insert = useCallback(
    (props?: { index?: number; value?: AllocationNode }) => {
      const value = props?.value ?? lastItem;

      if (value) {
        if (value.node.allocationType !== lastItem?.node.allocationType) {
          updateLastItem(value);
        }
        console.log("insert", { props, value });
        if (props?.index) {
          _insert(props?.index, value);
        } else {
          _append(value);
        }
      }
    },
    [lastItem, _insert, _append, updateLastItem],
  );

  const append = useCallback(
    (props?: { value?: AllocationNode }) => insert(props),
    [insert],
  );

  const insertCached = useCallback(
    (props?: { index?: number }) => insert(props),
    [insert],
  );

  return {
    insert,
    insertCached,
    append,
    defaultItems,
    lastItem,
    remove,
    fields,
  };
}
