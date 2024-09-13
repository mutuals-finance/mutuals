import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@mutuals/ui";
import React from "react";
import { AllocationTableCellProps } from "@/features/PoolAdd/types";
import { IoEllipsisHorizontal } from "react-icons/io5";

type ActionCellProps = AllocationTableCellProps;

export function ActionCell(_: ActionCellProps) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant={"ghost"}
        size={"sm"}
        icon={<IoEllipsisHorizontal />}
        aria-label="Row Action"
      />
      <MenuList>
        {[
          "Add Allocation",
          "Remove Allocation",
          "Distribute Evenly",
          "Distribute Remaining",
        ].map((type) => (
          <MenuItem key={type}>{type}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
