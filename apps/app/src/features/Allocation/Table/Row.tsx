import { Stack } from "@mutuals/ui";
import { Allocation } from "@mutuals/sdk-react";
import { useAllocation } from "@/features/Allocation/useAllocation";
import TreeTableRow, { TreeTableRowProps } from "@/components/TreeTable/Row";

export type AllocationTableRowProps = TreeTableRowProps<Allocation>;

export default function AllocationTableRow(props: AllocationTableRowProps) {
  const { render: _, ...innerProps } = props;
  const {
    /*recipientAddress, children*/
  } = useAllocation(props.value);

  return (
    <TreeTableRow
      {...innerProps}
      render={(_props) => <AllocationTableRow {..._props} />}
      values={/*children ??*/ []}
    >
      <Stack direction={"row"}>{/*{recipientAddress}*/}</Stack>
    </TreeTableRow>
  );
}
