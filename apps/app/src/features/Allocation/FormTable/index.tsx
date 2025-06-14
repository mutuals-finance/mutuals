import { Allocation } from "@mutuals/sdk-react";

import AllocationFormTableControl from "@/features/Allocation/FormTable/Control";
import React from "react";
import TreeTable from "@/components/TreeTable";
import AllocationFormTableRow from "@/features/Allocation/FormTable/Row";

export default function AllocationFormTable() {
  return (
    <TreeTable<Allocation> id={"allocations"} getKey={({ id }) => `${id}`}>
      {(props) => (
        <AllocationFormTableRow
          footer={(methods) => <AllocationFormTableControl {...methods} />}
          {...props}
        />
      )}
    </TreeTable>
  );
}
