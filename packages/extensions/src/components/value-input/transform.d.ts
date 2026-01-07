import { NumberInputValueChangeDetails, SelectCollectionItemProps, SelectValueChangeDetails } from "@mutuals/ui";
import { AllocationType } from "./Select";
export type ValueInputData = {
    allocationType: AllocationType;
    value: number;
};
export declare const defaultValue: ValueInputData;
export declare const transform: {
    allocationType: import("@mutuals/ui").Transform<string, SelectValueChangeDetails<SelectCollectionItemProps>>;
    value: import("@mutuals/ui").Transform<string, NumberInputValueChangeDetails>;
};
//# sourceMappingURL=transform.d.ts.map