import { TimelockAllocationInput } from "./input";
import { defaultValue as valueInputDefaultValue, } from "../../components/value-input";
export const defaultValue = Object.assign(Object.assign({}, valueInputDefaultValue), { period: 0 });
export const extension = {
    id: "timelock_allocation",
    name: "Timelock Allocation",
    render: TimelockAllocationInput,
};
