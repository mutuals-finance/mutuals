import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuContentProps,
} from "@mutuals/ui";
import { useAllocation } from "@/features/PoolAdd/AllocationProvider";
import {
  Allocation,
  CalculationType,
  calculationTypeName,
  RecipientType,
  recipientTypeName,
} from "@mutuals/sdk-react";

export type PoolAddAllocationMenuMethodProps = {
  onInsert?: (props: {
    value?: Allocation;
    cached?: boolean;
    amount?: number;
  }) => void;
};

interface PoolAddAllocationMenuProps
  extends MenuContentProps,
    PoolAddAllocationMenuMethodProps {}

export default function PoolAddAllocationMenu({
  onInsert,
  ...props
}: PoolAddAllocationMenuProps) {
  const { defaults } = useAllocation();

  return (
    <MenuContent {...props}>
      {Object.entries(defaults).map(([calculationType, recipients]) => {
        const names = {
          recipientType: "",
          calculationType: calculationTypeName(
            calculationType as CalculationType,
          ),
        };
        return (
          <MenuItemGroup key={calculationType} title={"test"}>
            {Object.entries(recipients).map(
              ([recipientType, value], _index) => {
                names.recipientType = recipientTypeName(
                  recipientType as RecipientType,
                );
                console.log(`${calculationType}-${recipientType}-${_index}`, {
                  value,
                });
                return (
                  <MenuItem
                    key={`${calculationType}-${recipientType}-${_index}`}
                    value={`${calculationType}-${recipientType}-${_index}`}
                    onClick={() => onInsert?.({ value, cached: false })}
                  >
                    {names.calculationType} {names.recipientType}
                  </MenuItem>
                );
              },
            )}
          </MenuItemGroup>
        );
      })}
    </MenuContent>
  );
}
