import { useFormContext, useWatch } from "react-hook-form";
import { useCallback } from "react";
import { AllocationNode } from "@mutuals/sdk-react";
import { useAllocation } from "@/features/PoolAdd/AllocationProvider";
import type { PoolAddData } from "@/features/PoolAdd/types";

type UseAllocationDataArgs = {
  id?: string;
};

export function useAllocationData(
  { id: _id = "allocations" } = {
    id: "allocations",
  } as UseAllocationDataArgs,
) {
  const id = _id as "allocations";

  const { control, setValue, getValues } = useFormContext<PoolAddData>();

  const values = getValues(id);
  const data = useWatch({ name: id, control });

  const { items: defaultItems, updateLastItem, lastItem } = useAllocation();

  const remove = useCallback(
    (index: number) => {
      setValue(
        id,
        values.filter((_, i) => i !== index),
      );
    },
    [id, values, setValue],
  );

  const insert = useCallback(
    (props?: { index?: number; value?: AllocationNode }) => {
      const value = props?.value ?? lastItem;
      const index = props?.index ?? values.length;
      if (value) {
        if (value.node.allocationType !== lastItem?.node.allocationType) {
          updateLastItem(value);
        }
        if (index < values.length) {
          const after = [
            ...values.slice(0, index),
            value,
            ...values.slice(index),
          ];
          setValue(`${id}`, after);
        } else {
          setValue(`${id}.${index}`, value);
        }
      }
    },
    [lastItem, values, updateLastItem, setValue, id],
  );

  const insertCached = useCallback(
    (props?: { index?: number }) => insert(props),
    [insert],
  );

  return {
    insert,
    insertCached,
    data,
    remove,
    defaultItems,
    lastItem,
  };
}
