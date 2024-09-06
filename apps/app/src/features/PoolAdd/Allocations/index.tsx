import { useFieldArray, UseFormReturn } from "react-hook-form";

import FormGroup from "@/components/Form/FormGroup";

import { PoolAddData } from "@/features/PoolAdd/types";
import React, { useCallback } from "react";
import { AllocationNode, useDefaultAllocation } from "@mutuals/sdk-react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  ButtonGroup,
  IconButton,
} from "@mutuals/ui";
import AllocationTable from "@/features/PoolAdd/AllocationTable";
import { IoAddCircle, IoEllipsisHorizontal } from "react-icons/io5";

interface PoolAddAllocationProps extends UseFormReturn<PoolAddData> {}

export default function PoolAddAllocations({
  ...props
}: PoolAddAllocationProps) {
  const { control } = props;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "allocations",
    },
  );

  const {
    items: defaultItems,
    updateLastItem,
    lastItem,
  } = useDefaultAllocation();

  const appendAllocation = useCallback(
    (value?: AllocationNode) => {
      if (value) {
        updateLastItem(value);
        append(value);
      }
    },
    [append, updateLastItem],
  );

  return (
    <>
      <FormGroup
        title={`Allocations`}
        description={`Please define each recipient’s wallet address and split amount. The overall split amount must total 100.`}
      >
        <AllocationTable data={fields} />
        <ButtonGroup size="sm">
          <Button
            rightIcon={<IoAddCircle />}
            onClick={() => appendAllocation(lastItem)}
          >
            Append Allocation
          </Button>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<IoEllipsisHorizontal />}
              aria-label={"Append Select Allocation"}
            />
            <MenuList>
              {Object.entries(defaultItems).map(([key, value]) => (
                <MenuItem key={key} onClick={() => appendAllocation(value)}>
                  {key}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </ButtonGroup>
      </FormGroup>
    </>
  );
}
