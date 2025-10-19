import { PriorityGatingInput } from "./input";
import { Extension } from "../../types";

export type PriorityGatingData = { priority: number };

export const defaultValue: PriorityGatingData = { priority: 0 };

export const extension: Extension = {
  id: "priority_gating",
  name: "Priority Gating",
  render: PriorityGatingInput,
};
