import { CellContext } from "@tanstack/react-table";
import { AllocationDataItem } from "@/features/PoolAdd/types";

export const getIdPartsFromCellContext = (
  { column, row }: CellContext<AllocationDataItem, unknown>,
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
  context: CellContext<AllocationDataItem, unknown>,
  id = "",
) => {
  const parentRows = context.row.getParentRows();
  const parts = getIdPartsFromCellContext(context, id);
  console.log("parts", { parentRows, context, parts });
  return parts.join(".");
};

export const getParentIdFromCellContext = (
  context: CellContext<AllocationDataItem, unknown>,
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
