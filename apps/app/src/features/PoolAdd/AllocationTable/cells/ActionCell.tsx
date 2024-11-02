import {
  IconButton,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "@mutuals/ui";
import React, { useCallback, useEffect } from "react";
import {
  ActionWithLabel,
  AllocationTableCellProps,
  type PoolAddData,
} from "@/features/PoolAdd/types";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useAllocationUtils } from "@mutuals/sdk-react";
import {
  getNodeIdFromCellContext,
  getParentIdFromCellContext,
} from "@/features/PoolAdd/AllocationTable/utils";
import { useAllocationData } from "@/features/PoolAdd/Allocations/useAllocationData";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useAllocation } from "@/features/PoolAdd/AllocationProvider";

type ActionCellProps = AllocationTableCellProps;

export function ActionCell({ id: rootId, ...context }: ActionCellProps) {
  const { isGroup, isFixed, isPercentage } = useAllocationUtils();
  const allocation = context.row.original.node;
  const index = context.row.index + 1;

  const isCurrentGroup = isGroup(allocation);

  const parentId = getParentIdFromCellContext(context, rootId);
  const { insert, remove, defaultItems } = useAllocationData({ id: parentId });

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <IconButton variant={"ghost"} size={"sm"} aria-label="Row Action">
          <IoEllipsisHorizontal />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
          <MenuTriggerItem>Change Type</MenuTriggerItem>
          <MenuContent>
            {!isCurrentGroup ? (
              <>
                <MenuItem value={"default-group"}>Default Group</MenuItem>
                <MenuItem value={"timed-group"}>Timed Group</MenuItem>
                <MenuItem value={"prioritized-group"}>
                  Prioritized Group
                </MenuItem>
              </>
            ) : (
              <MenuItem value={"recipient"}>Default Item</MenuItem>
            )}
          </MenuContent>
        </MenuRoot>
        <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
          <MenuTriggerItem>Change Calculation</MenuTriggerItem>
          <MenuContent>
            <MenuItem value={"percentage"} disabled={isPercentage(allocation)}>
              Percentage
            </MenuItem>
            <MenuItem value={"fixed"} disabled={isFixed(allocation)}>
              Fixed
            </MenuItem>
          </MenuContent>
        </MenuRoot>
        {!!defaultItems && (
          <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
            <MenuTriggerItem>Insert</MenuTriggerItem>
            <MenuContent>
              {Object.entries(defaultItems).map(([calculation, types]) => (
                <MenuRoot
                  key={calculation}
                  positioning={{ placement: "right-start", gutter: 2 }}
                >
                  <MenuTriggerItem>{calculation}</MenuTriggerItem>
                  <MenuContent>
                    {Object.entries(types).map(([type, items]) => (
                      <MenuItemGroup
                        key={calculation + "-" + type}
                        title={type}
                      >
                        {Object.entries(items).map(([key, value]) => (
                          <MenuItem
                            key={calculation + "-" + type + "-" + key}
                            value={calculation + "-" + type + "-" + key}
                            onClick={() => insert({ index, value })}
                          >
                            {key}
                          </MenuItem>
                        ))}
                      </MenuItemGroup>
                    ))}
                  </MenuContent>
                </MenuRoot>
              ))}
            </MenuContent>
          </MenuRoot>
        )}
        <MenuItem value={"remove"} onClick={() => remove(context.row.index)}>
          Remove
        </MenuItem>

        {isCurrentGroup && (
          <>
            <MenuSeparator />

            <MenuItemGroup title="Group Action">
              {(
                [
                  ["Distribute Evenly", () => {}],
                  ["Distribute Remaining", () => {}],
                ] as ActionWithLabel[]
              ).map(([type, fn]) => (
                <MenuItem key={type} value={type} onClick={() => fn()}>
                  {type}
                </MenuItem>
              ))}
            </MenuItemGroup>
          </>
        )}
      </MenuContent>
    </MenuRoot>
  );
}
