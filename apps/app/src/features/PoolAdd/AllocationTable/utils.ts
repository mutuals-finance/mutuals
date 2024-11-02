import { CellContext } from "@tanstack/react-table";
import { AllocationNode } from "@mutuals/sdk-react";

export const getIdPartsFromCellContext = (
  { column, row }: CellContext<AllocationNode, unknown>,
  id = "",
) => [
  ...(id == "" ? [] : [id]),
  ...row
    .getParentRows()
    .reduce(
      (acc, { index }) => [...acc, `${index}`, "children"],
      [] as string[],
    ),
  `${row.index}`,
  ...column.id.split("_"),
];

export const getNodeIdFromCellContext = (
  context: CellContext<AllocationNode, unknown>,
  id = "",
) => getIdPartsFromCellContext(context, id).join(".");

export const getParentIdFromCellContext = (
  context: CellContext<AllocationNode, unknown>,
  id = "",
) => {
  const parts = getIdPartsFromCellContext(context, id);
  if (parts.length <= 0) {
    return parts.join(".");
  }

  if (!!parts[0] && !isNaN(+parts[0])) {
    return parts.slice(0, -1).join(".");
  }

  return parts.slice(0, -2).join(".");
};
