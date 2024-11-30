import {
  FieldArrayWithId,
  useFieldArray,
  UseFieldArrayInsert,
  useFormContext,
} from "react-hook-form";
import { useCallback } from "react";
import {
  Allocation,
  UseAllocationDefaults,
  getRecipientAllocationOption,
} from "@mutuals/sdk-react";
import { useAllocation } from "@/features/PoolAdd/AllocationProvider";
import type { PoolAddData } from "@/features/PoolAdd/types";

type AllocationAppendProps = {
  value?: Allocation;
  amount?: number;
};

type AllocationInsertCachedProps = {
  index?: number;
  amount?: number;
};

type AllocationInsertProps = AllocationInsertCachedProps &
  AllocationAppendProps;

type Stack = Array<{ children: Array<any> }>;

function dfs(
  stack: Stack,
  options?: { condition?: (stack: Stack) => boolean },
) {
  const flat = [];
  const _stack = stack;

  const condition = options?.condition ?? ((s) => s.length > 0);

  while (condition(_stack)) {
    const cur = _stack.shift();
    flat.push(cur);

    if (cur.children) {
      cur.children.reverse().forEach((child) => stack.unshift(child));
    }
  }

  return flat;
}

export type UseAllocationGroup = Omit<UseAllocationDefaults, "setCached"> & {
  insert: (props?: AllocationInsertProps) => void;
  insertCached: (props?: AllocationInsertCachedProps) => void;
  fields: FieldArrayWithId<PoolAddData, "allocations", "id">[];
  append: (props?: AllocationAppendProps) => void;
  remove: (index?: number | number[]) => void;
  computeMerkleRoot: () => void;
};

export type UseAllocationDataArgs = {
  id?: string;
};

export function useAllocationData(
  { id: _id = "allocations" } = {
    id: "allocations",
  } as UseAllocationDataArgs,
): UseAllocationGroup {
  const id = _id as "allocations";
  const initialAllocation = getRecipientAllocationOption();

  const { control } = useFormContext<PoolAddData>();
  const {
    fields,
    insert: _insert,
    append: _append,
    remove,
  } = useFieldArray({ control, name: id });

  const { defaults, setCached, cached: cachedAllocation } = useAllocation();

  const insert = useCallback(
    (
      { value: _allocation, amount, ...props }: AllocationInsertProps = {
        amount: 1,
        value: cachedAllocation || initialAllocation,
      },
    ) => {
      const allocation =
        amount != 1
          ? Array(amount).fill(_allocation)
          : (_allocation as Allocation);

      const isArray = "length" in allocation;

      if (isArray ? allocation.length > 0 : !!allocation) {
        setCached(isArray ? allocation[0] : allocation);

        if (props?.index) {
          _insert(props?.index, allocation);
        } else {
          _append(allocation);
        }
      }
    },
    [cachedAllocation, initialAllocation, setCached, _insert, _append],
  );

  const append = useCallback(
    (props?: AllocationAppendProps) => insert(props),
    [insert],
  );

  const insertCached = useCallback(
    (props?: AllocationInsertCachedProps) => insert(props),
    [insert],
  );

  const computeMerkleRoot = useCallback(() => {
    const flat = dfs(fields);
    console.log("got flat nodes", flat);
  }, [fields]);

  return {
    insert,
    insertCached,
    append,
    defaults,
    cached: cachedAllocation,
    remove,
    computeMerkleRoot,
    fields,
  };
}
