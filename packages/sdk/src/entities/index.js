export class Allocation {
    constructor({ value, recipient, calculationType, recipientType, }) {
        this.value = value;
        this.recipient = recipient;
        this.calculationType = calculationType;
        this.recipientType = recipientType;
    }
    get isItem() {
        return this.recipientType[0] == "DefaultItem";
    }
    get isGroup() {
        return !this.isItem;
    }
    get isFixed() {
        return this.calculationType[0] == "Fixed";
    }
    get isPercentage() {
        return this.calculationType[0] == "Percentage";
    }
    get isPrioritized() {
        return this.recipientType[0] == "PrioritizedGroup";
    }
    get isTimed() {
        return this.recipientType[0] == "TimedGroup";
    }
}
