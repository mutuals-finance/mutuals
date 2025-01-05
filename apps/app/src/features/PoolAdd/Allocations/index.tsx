import {
  Button,
  Card,
  Group,
  Stack,
  Fieldset,
  IconButton,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "@mutuals/ui";
import AllocationProvider from "@/features/PoolAdd/AllocationProvider";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import PoolAddAllocationMenu from "@/features/PoolAdd/Allocations/Menu";
import React from "react";
import PoolAddAllocationsGroup from "@/features/PoolAdd/Allocations/Group";
import { ActionWithLabel } from "@/features/PoolAdd/types";

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

  return (
    <Card.Root {...props}>
      <Card.Body>
        <Fieldset.Root>
          <Stack>
            <Fieldset.Legend>Allocations</Fieldset.Legend>
            <Fieldset.HelperText>
              Please define each recipient’s wallet address and split amount.
              The overall split amount must total 100.
            </Fieldset.HelperText>
          </Stack>
          <Fieldset.Content>
            <PoolAddAllocationsGroup w={"full"} allocationDataArgs={{ id }}>
              {(methods) => (
                <Group mt={"2"} w={"full"}>
                  <Button
                    flex={"1"}
                    variant="subtle"
                    onClick={() => methods.insertCached()}
                    roundedRight={0}
                  >
                    Add Allocation
                  </Button>
                  <MenuRoot>
                    <MenuTrigger asChild>
                      <IconButton
                        variant="subtle"
                        aria-label={"Select allocation to add"}
                        roundedLeft={0}
                      >
                        <IoEllipsisVerticalSharp />
                      </IconButton>
                    </MenuTrigger>
                    <MenuContent>
                      <MenuRoot
                        positioning={{ placement: "right-start", gutter: 2 }}
                      >
                        <MenuTriggerItem>Insert</MenuTriggerItem>
                        <PoolAddAllocationMenu
                          onInsert={({ value, cached }) =>
                            cached
                              ? methods.insertCached()
                              : methods.insert({ value })
                          }
                        />
                      </MenuRoot>
                      <MenuSeparator />

                      <MenuItemGroup title="Group Action">
                        {(
                          [
                            ["Distribute Evenly", () => {}],
                            ["Distribute Remaining", () => {}],
                          ] as ActionWithLabel[]
                        ).map(([type, fn]) => (
                          <MenuItem
                            key={type}
                            value={type}
                            onClick={() => fn()}
                          >
                            {type}
                          </MenuItem>
                        ))}
                      </MenuItemGroup>
                    </MenuContent>
                  </MenuRoot>
                </Group>
              )}
            </PoolAddAllocationsGroup>
          </Fieldset.Content>
        </Fieldset.Root>
      </Card.Body>
    </Card.Root>
  );
}
