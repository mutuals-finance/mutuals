import { ReactNode } from "react";
import { StackProps, Stack, Separator } from "@mutuals/ui";
import {
  UseAllocationGroup,
  useAllocationData,
  UseAllocationDataArgs,
} from "@/features/PoolAdd/Allocations/useAllocationGroup";
import PoolAddAllocationsGroupItem from "@/features/PoolAdd/Allocations/Item";

export type PoolAddAllocationsGroupSharedItemProps = {
  depth?: number;
};

interface PoolAddAllocationsGroupProps
  extends Omit<StackProps, "children">,
    PoolAddAllocationsGroupSharedItemProps {
  allocationDataArgs: UseAllocationDataArgs;
  children?: ReactNode | ((method: UseAllocationGroup) => ReactNode);
}

export default function PoolAddAllocationsGroup({
  depth = 0,
  allocationDataArgs,
  children,
  ...props
}: PoolAddAllocationsGroupProps) {
  const methods = useAllocationData(allocationDataArgs);

  return (
    <Stack direction={"row"} {...props}>
      {depth > 0 && (
        <Separator
          flexShrink={"0"}
          mx={"4"}
          variant="dashed"
          orientation="vertical"
        />
      )}

      <Stack flex={"1"}>
        {methods.fields.map(({ id: fieldArrayId, ...item }, index) => (
          <PoolAddAllocationsGroupItem
            key={fieldArrayId}
            id={`${allocationDataArgs.id}.${index}`}
            onRemove={() => methods.remove(index)}
            onInsert={({ value, cached }) =>
              cached
                ? methods.insertCached({ index })
                : methods.insert({ value, index })
            }
            {...item}
          />
        ))}

        {!!children &&
          (typeof children == "function" ? children(methods) : children)}
      </Stack>
    </Stack>
  );
}
