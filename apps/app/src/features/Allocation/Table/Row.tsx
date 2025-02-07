import { Stack } from "@mutuals/ui";
import { Allocation } from "@mutuals/sdk-react";
import { useAllocation } from "@/features/Allocation/useAllocation";
import TreeTableRow, { TreeTableRowProps } from "@/components/TreeTable/Row";

export type AllocationTableRowProps = Omit<
  TreeTableRowProps<Allocation>,
  "children" | "nodes"
>;

export default function AllocationTableRow({
  render: _,
  ...props
}: AllocationTableRowProps) {
  const { recipientAddress, children } = useAllocation(props.value);

  return (
    <TreeTableRow
      {...props}
      nodes={
        (children ?? props.depth < 2)
          ? [
              {
                id: "1",
                recipientAddress: "Test",
                value: 1,
                calculationType: [],
                recipientType: [],
              },
            ]
          : []
      }
      render={(p) => <AllocationTableRow {...p} />}
    >
      <Stack direction={"row"}>{recipientAddress}</Stack>
    </TreeTableRow>
  );
}
