import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuContentProps,
} from "@mutuals/ui";
import { useAllocation } from "@/features/Allocation/Provider";
import {
  Allocation,
  CalculationType,
  calculationTypeName,
  RecipientType,
  recipientTypeName,
} from "@mutuals/sdk-react";

export type AllocationMenuMethodProps = {
  onInsert?: (props: {
    value?: Allocation;
    cached?: boolean;
    amount?: number;
  }) => void;
};

export type AllocationMenuProps = MenuContentProps & AllocationMenuMethodProps;

export default function AllocationMenu({
  onInsert,
  ...props
}: AllocationMenuProps) {
  const { defaults } = useAllocation();
  const defaultEntries = Object.entries(defaults);

  return (
    <MenuContent {...props}>
      {defaultEntries.map(([calculationType, recipients]) => {
        const names = {
          recipientType: "",
          calculationType: calculationTypeName(
            calculationType as CalculationType,
          ),
        };

        return (
          <MenuItemGroup key={calculationType} title={names.calculationType}>
            {Object.entries(recipients).map(
              ([recipientType, value], _index) => {
                names.recipientType =
                  recipientTypeName(recipientType as RecipientType) ?? "";
                return (
                  <MenuItem
                    key={`${calculationType}-${recipientType}-${_index}`}
                    value={`${calculationType}-${recipientType}-${_index}`}
                    onClick={() => onInsert?.({ value, cached: false })}
                  >
                    {names.recipientType}
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
