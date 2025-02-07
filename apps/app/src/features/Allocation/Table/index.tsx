import { Allocation } from "@mutuals/sdk-react";

import TreeTable, { TreeTableProps } from "@/components/TreeTable";
import AllocationTableRow from "@/features/Allocation/Table/Row";

export type AllocationTableProps = TreeTableProps<Allocation>;

export default function AllocationTable({ ...props }: AllocationTableProps) {
  return (
    <TreeTable<Allocation> {...props}>
      {(_props) => <AllocationTableRow {..._props} />}
    </TreeTable>
  );
}
