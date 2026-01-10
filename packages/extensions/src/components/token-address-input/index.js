import { jsx as _jsx } from "react/jsx-runtime";
import { createJsonTransform, Input } from "@mutuals/ui";
export const defaultValue = {
    tokenAddress: "",
};
export function TokenAddressInput({ id }) {
    return (_jsx(Input, { placeholder: "Token address", id: `${id}.data.tokenAddress`, name: `${id}.data`, w: "48", flex: "1 0 auto", transform: createJsonTransform("tokenAddress", defaultValue, (data) => data.tokenAddress, (e) => e.target.value) }));
}
