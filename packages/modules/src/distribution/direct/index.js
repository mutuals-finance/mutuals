import { DirectDistributionInput } from "./input";
import { defaultValue as valueInputDefaultValue } from "../../components/value-input";
export const defaultValue = valueInputDefaultValue;
export const module = {
  id: "default_allocation",
  name: "Default Allocation",
  render: DirectDistributionInput,
};
