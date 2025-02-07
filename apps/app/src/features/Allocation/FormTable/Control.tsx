import {
  Button,
  Group,
  GroupProps,
  IconButton,
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "@mutuals/ui";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import AllocationMenu from "@/features/Allocation/Menu";
import { ActionWithLabel } from "@/features/Allocation/types";
import { UseAllocationGroup } from "@/features/Allocation/useAllocationGroup";

type AllocationFormTableControlProps = GroupProps & UseAllocationGroup;

export default function AllocationFormTableControl({
  insert,
  insertCached,
}: AllocationFormTableControlProps) {
  return (
    <Group mt={"2"} w={"full"}>
      <Button
        flex={"1"}
        variant="subtle"
        onClick={() => insertCached()}
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
          <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
            <MenuTriggerItem>Insert</MenuTriggerItem>
            <AllocationMenu
              onInsert={({ value, cached }) =>
                cached ? insertCached() : insert({ value })
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
              <MenuItem key={type} value={type} onClick={() => fn()}>
                {type}
              </MenuItem>
            ))}
          </MenuItemGroup>
        </MenuContent>
      </MenuRoot>
    </Group>
  );
}
