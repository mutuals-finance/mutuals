import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { useCallback } from "react";
import { AllocationNode } from "@mutuals/sdk-react";
import { useAllocation } from "@/features/PoolAdd/AllocationProvider";
import type { PoolAddData } from "@/features/PoolAdd/types";

type UseAllocationDataArgs = {
  id?: string;
};

export function useAllocationData(
  { id = "allocations" } = {
    id: "allocations",
  } as UseAllocationDataArgs,
) {
  const { control } = useFormContext<PoolAddData>();

  const { items: defaultItems, updateLastItem, lastItem } = useAllocation();

  const {
    append: appendField,
    prepend: prependField,
    ...method
  } = useFieldArray({
    control,
    name: id as "allocations",
  });

  const append = useCallback(
    (value = lastItem as AllocationNode) => {
      console.log("append", { value });
      if (value) {
        updateLastItem(value);
        appendField(value);
      }
    },
    [appendField, lastItem, updateLastItem],
  );

  const prepend = useCallback(
    (value = lastItem as AllocationNode) => {
      console.log("prepend", { value });

      if (value) {
        updateLastItem(value);
        prependField(value);
      }
    },
    [lastItem, prependField, updateLastItem],
  );

  return {
    append,
    prepend,
    defaultItems,
    lastItem,
    ...method,
  };
}
