import { RowSelectionState } from "@tanstack/react-table";

export type WithdrawData = {
  assets?: RowSelectionState;
  distribute: boolean;
};
