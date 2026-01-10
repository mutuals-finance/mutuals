import { CalculationType, RecipientType } from "../types";
export declare class Allocation {
    value: string;
    recipient?: string;
    children?: Allocation[];
    calculationType: CalculationType[];
    recipientType: RecipientType[];
    timespan?: number;
    constructor({ value, recipient, calculationType, recipientType, }: {
        value: string;
        recipient: string;
        calculationType: CalculationType[];
        recipientType: RecipientType[];
    });
    get isItem(): boolean;
    get isGroup(): boolean;
    get isFixed(): boolean;
    get isPercentage(): boolean;
    get isPrioritized(): boolean;
    get isTimed(): boolean;
}
//# sourceMappingURL=index.d.ts.map