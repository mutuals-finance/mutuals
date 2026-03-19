import type { RowSelectionState } from "@tanstack/react-table";

export interface WithdrawData {
  assets?: RowSelectionState;
  distribute: boolean;
}
