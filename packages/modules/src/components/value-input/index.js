"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { InputGroup, NumberInput } from "@mutuals/ui";
import { useWatch } from "react-hook-form";
import { defaultValue, transform } from "./transform";
import ValueInputSelect from "./Select";
export { defaultValue };
export function ValueInput(props) {
    const id = props.id;
    // @ts-expect-error: TypeScript is not able to infer the type correctly because its encoded JSON
    const allocationType = useWatch({
        name: `${id}.data`,
        compute: (data) => {
            const decoded = transform.allocationType.input(data);
            if (Array.isArray(decoded) && decoded.length > 0) {
                return decoded[0];
            }
            return defaultValue.allocationType;
        },
    });
    const fixed = allocationType === "fixed";
    return (_jsx(InputGroup, { flexBasis: "28", flexShrink: "0", startElementProps: { paddingInlineStart: "0" }, startElement: _jsx(ValueInputSelect, Object.assign({}, props)), children: _jsx(NumberInput, { id: `${id}.data.value`, name: `${id}.data`, defaultValue: "0", allowMouseWheel: true, step: !fixed ? 0.1 : 1, max: !fixed ? 100 : 99999, min: 0, inputProps: {
                ps: "12",
            }, transform: transform.value }) }));
}
