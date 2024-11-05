import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTriggerItem,
} from "@mutuals/ui";
import { ActionWithLabel } from "@/features/PoolAdd/types";
import { UseAllocationData } from "@/features/PoolAdd/Allocations/useAllocationData";

interface PoolAddAllocationMenuProps {
  index?: number;
  methods: UseAllocationData;
}

export default function PoolAddAllocationMenu({
  index,
  methods,
}: PoolAddAllocationMenuProps) {
  const { insert, defaultItems } = methods;

  return (
    <>
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
                    <MenuItemGroup key={calculation + "-" + type} title={type}>
                      {Object.entries(items).map(([key, value]) => (
                        <MenuItem
                          key={calculation + "-" + type + "-" + key}
                          value={calculation + "-" + type + "-" + key}
                          onClick={() => insert({ value, index })}
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
  );
}
