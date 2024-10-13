import {
  useForm,
  useFormContext,
  UseFormReturn,
  useWatch,
} from "react-hook-form";

import FormGroup from "@/components/Form/FormGroup";
import { PoolAddData } from "@/features/PoolAdd/types";
import {
  MenuItem,
  Button,
  Group,
  Card,
  IconButton,
  MenuTrigger,
  MenuRoot,
  MenuContent,
} from "@mutuals/ui";
import AllocationTable from "@/features/PoolAdd/AllocationTable";
import { IoAddCircle, IoEllipsisHorizontal } from "react-icons/io5";
import AllocationProvider from "@/features/PoolAdd/AllocationProvider";
import { useAllocationData } from "@/features/PoolAdd/Allocations/useAllocationData";

export interface PoolAddAllocationProps extends UseFormReturn<PoolAddData> {}

export default function PoolAddAllocations(_: PoolAddAllocationProps) {
  return (
    <AllocationProvider>
      <PoolAddAllocationsCard />
    </AllocationProvider>
  );
}

function PoolAddAllocationsCard() {
  const { append, appendLast, defaultItems } = useAllocationData();
  const { control } = useFormContext<PoolAddData>();
  const data = useWatch({ defaultValue: [], control, name: "allocations" });

  return (
    <Card.Root>
      <Card.Body>
        <FormGroup
          title={`Allocations`}
          description={`Please define each recipient’s wallet address and split amount. The overall split amount must total 100.`}
        >
          <AllocationTable data={data} />
        </FormGroup>
      </Card.Body>
      <Card.Footer>
        <Group w={"full"}>
          <Button
            variant="subtle"
            flex={"1"}
            onClick={() => appendLast()}
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
                <IoEllipsisHorizontal />
              </IconButton>
            </MenuTrigger>
            <MenuContent>
              {Object.entries(defaultItems).map(([key, value]) => (
                <MenuItem
                  key={key}
                  value={key}
                  onClick={() => append({ value })}
                >
                  {key}
                </MenuItem>
              ))}
            </MenuContent>
          </MenuRoot>
        </Group>
      </Card.Footer>
    </Card.Root>
  );
}
