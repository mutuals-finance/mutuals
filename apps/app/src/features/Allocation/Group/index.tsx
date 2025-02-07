import { ReactNode } from "react";
import { StackProps, Stack, Separator } from "@mutuals/ui";
import {
  UseAllocationGroup,
  useAllocationData,
  UseAllocationDataArgs,
} from "@/features/Allocation/useAllocationGroup";
import AllocationRecipient from "@/features/Allocation/Recipient";
import { AllocationItemBaseProps } from "@/features/Allocation/types";

export interface AllocationGroupProps
  extends Omit<StackProps, "children">,
    AllocationItemBaseProps {
  allocationDataArgs: UseAllocationDataArgs;
  children?: ReactNode | ((method: UseAllocationGroup) => ReactNode);
}

export default function AllocationGroup({
  depth = 0,
  allocationDataArgs,
  children,
  ...props
}: AllocationGroupProps) {
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
          <AllocationRecipient
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
