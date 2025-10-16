import { TimelockAllocationInput } from "./input";
import {
  defaultValue as valueInputDefaultValue,
  ValueInputData,
} from "../../components/value-input";
import { Extension } from "../../types";

export type TimelockAllocationData = ValueInputData & {
  period: number;
};

export const defaultValue: TimelockAllocationData = {
  ...valueInputDefaultValue,
  period: 0,
};

export const extension: Extension = {
  id: "timelock_allocation",
  name: "Timelock Allocation",
  render: TimelockAllocationInput,
};
