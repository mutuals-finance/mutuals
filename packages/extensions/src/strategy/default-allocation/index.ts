import { DefaultAllocationInput } from "./input";
import {
  defaultValue as valueInputDefaultValue,
  ValueInputData,
} from "../../components/value-input";
import { Extension } from "../../types";

export type DefaultAllocationData = ValueInputData;

export const defaultValue: DefaultAllocationData = valueInputDefaultValue;

export const extension: Extension = {
  id: "default_allocation",
  name: "Default Allocation",
  render: DefaultAllocationInput,
};
