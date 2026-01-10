import { TokenAllocationInput } from "./input";
import { defaultValue as valueInputDefaultValue, } from "../../components/value-input";
import { defaultValue as tokenAddressInputDefaultValue, } from "../../components/token-address-input";
export const defaultValue = Object.assign(Object.assign({}, tokenAddressInputDefaultValue), valueInputDefaultValue);
export const extension = {
    id: "token_allocation",
    name: "Token Allocation",
    render: TokenAllocationInput,
};
