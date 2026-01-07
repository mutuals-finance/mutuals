"use client";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { transform } from "./transform";
import { createListCollection, Select, Stack, } from "@mutuals/ui";
const allocationTypes = {
    percentage: {
        id: "percentage",
        name: "Percentage",
        icon: "%",
    },
    fixed: {
        id: "fixed",
        name: "Fixed",
        icon: "#",
    },
};
const allocationTypeCollection = createListCollection({
    items: Object.values(allocationTypes).map(({ id, icon }) => ({
        value: id,
        children: _jsx(_Fragment, { children: icon }),
    })),
});
export default function ValueInputSelect({ id }) {
    return (_jsx(Select, { pointerEvents: "auto", id: `${id}.data.allocationType`, name: `${id}.data`, defaultValue: ["percentage"], positioning: { sameWidth: false }, size: "md", variant: "subtle", collection: allocationTypeCollection, transform: transform.allocationType, children: ({ trigger, item }) => {
            const selected = allocationTypes[item === null || item === void 0 ? void 0 : item.value];
            return !trigger ? (_jsxs(Stack, { children: [selected === null || selected === void 0 ? void 0 : selected.icon, " ", selected === null || selected === void 0 ? void 0 : selected.name] })) : (_jsx(Stack, { w: "7", children: selected === null || selected === void 0 ? void 0 : selected.icon }));
        } }));
}
