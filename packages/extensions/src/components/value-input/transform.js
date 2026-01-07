"use client";
import { createJsonTransform, } from "@mutuals/ui";
export const defaultValue = {
    allocationType: "percentage",
    value: 0,
};
const allocationType = createJsonTransform("allocationType", defaultValue, (value) => (value.allocationType ? [value.allocationType] : undefined), (e) => e.value ? e.value[0] : undefined);
const value = createJsonTransform("value", defaultValue, (data) => { var _a; return (_a = data.value) === null || _a === void 0 ? void 0 : _a.toString(); }, ({ valueAsNumber }) => valueAsNumber);
export const transform = {
    allocationType,
    value,
};
