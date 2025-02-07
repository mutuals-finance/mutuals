import { Allocation } from "@mutuals/sdk-react";

import AllocationControl from "@/features/Allocation/Control";
import React from "react";
import TreeTable from "@/components/TreeTable";
import AllocationFormTableRow from "@/features/Allocation/FormTable/Row";

export default function AllocationFormTable() {
  return (
    <TreeTable<Allocation> id={"allocations"} getKey={({ id }) => id}>
      {(props) => (
        <AllocationFormTableRow
          footer={(methods) => <AllocationControl {...methods} />}
          {...props}
        />
      )}
    </TreeTable>
  );
}
