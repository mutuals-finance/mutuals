import FormGroup from "@/components/Form/FormGroup";
import {
  Button,
  Card,
  Group,
  IconButton,
  MenuContent,
  MenuRoot,
  MenuTrigger,
} from "@mutuals/ui";
import AllocationProvider from "@/features/PoolAdd/AllocationProvider";
import PoolAddAllocationsItem from "@/features/PoolAdd/Allocations/Item";
import { IoEllipsisHorizontal } from "react-icons/io5";
import PoolAddAllocationMenu from "@/features/PoolAdd/Allocations/Menu";
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

  return (
    <Card.Root {...props}>
      <Card.Body>
        <FormGroup
          title={`Allocations`}
          description={`Please define each recipient’s wallet address and split amount. The overall split amount must total 100.`}
        >
          <PoolAddAllocationsItem
            allocationDataArgs={{ id }}
            contentRowAfter={(methods) => (
              <Group alignItems={"stretch"} mt={"4"}>
                <Button
                  flex={"1"}
                  variant="outline"
                  onClick={() => methods.insertCached()}
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
                    <PoolAddAllocationMenu methods={methods} />
                  </MenuContent>
                </MenuRoot>
              </Group>
            )}
          />
        </FormGroup>
      </Card.Body>
    </Card.Root>
  );
}
