import {
  useFieldArray,
  useForm,
  useFormContext,
  UseFormReturn,
  useWatch,
} from "react-hook-form";

import FormGroup from "@/components/Form/FormGroup";
import { ActionWithLabel, PoolAddData } from "@/features/PoolAdd/types";
import {
  MenuItem,
  Button,
  Group,
  Card,
  IconButton,
  MenuTrigger,
  MenuRoot,
  MenuContent,
  MenuTriggerItem,
  MenuItemGroup,
  MenuSeparator,
} from "@mutuals/ui";
import AllocationTable from "@/features/PoolAdd/AllocationTable";
import { IoAddCircle, IoEllipsisHorizontal } from "react-icons/io5";
import AllocationProvider from "@/features/PoolAdd/AllocationProvider";
import { useAllocationData } from "@/features/PoolAdd/Allocations/useAllocationData";
import React from "react";

export type PoolAddAllocationsProps = PoolAddAllocationsCardProps;

export default function PoolAddAllocations(props?: PoolAddAllocationsProps) {
  return (
    <AllocationProvider>
      <PoolAddAllocationsCard {...props} />
    </AllocationProvider>
  );
}

type PoolAddAllocationsCardProps = Card.RootProps;

function PoolAddAllocationsCard(props?: PoolAddAllocationsCardProps) {
  const id = "allocations";
  const { insert, insertCached, defaultItems, data } = useAllocationData();

  return (
    <Card.Root {...props}>
      <Card.Body>
        <FormGroup
          title={`Allocations`}
          description={`Please define each recipient’s wallet address and split amount. The overall split amount must total 100.`}
        >
          <AllocationTable id={id} data={data} />
        </FormGroup>
      </Card.Body>
      <Card.Footer>
        <Group w={"full"}>
          <Button
            variant="outline"
            flex={"1"}
            onClick={() => insertCached()}
            roundedRight={0}
          >
            Add Allocation
          </Button>
          <MenuRoot>
            <MenuTrigger asChild>
              <IconButton
                variant="outline"
                aria-label={"Select allocation to add"}
                roundedLeft={0}
              >
                <IoEllipsisHorizontal />
              </IconButton>
            </MenuTrigger>
            <MenuContent>
              {!!defaultItems && (
                <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
                  <MenuTriggerItem>Insert</MenuTriggerItem>
                  <MenuContent>
                    {Object.entries(defaultItems).map(
                      ([calculation, types]) => (
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
                                    onClick={() => insert({ value })}
                                  >
                                    {key}
                                  </MenuItem>
                                ))}
                              </MenuItemGroup>
                            ))}
                          </MenuContent>
                        </MenuRoot>
                      ),
                    )}
                  </MenuContent>
                </MenuRoot>
              )}

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
            </MenuContent>
          </MenuRoot>
        </Group>
      </Card.Footer>
    </Card.Root>
  );
}
