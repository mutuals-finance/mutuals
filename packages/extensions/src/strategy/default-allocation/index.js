import { DefaultAllocationInput } from "./input";
import { defaultValue as valueInputDefaultValue, } from "../../components/value-input";
export const defaultValue = valueInputDefaultValue;
export const extension = {
    id: "default_allocation",
    name: "Default Allocation",
    render: DefaultAllocationInput,
};
