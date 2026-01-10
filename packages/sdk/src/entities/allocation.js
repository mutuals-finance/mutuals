class Allocation {
    constructor({ calculationType, recipientType, recipient, value = "0", timespan, }) {
        this.calculationType = calculationType;
        this.recipientType = recipientType;
        this.recipient = recipient;
        this.value = value;
        this.timespan = timespan;
    }
}
export {};
