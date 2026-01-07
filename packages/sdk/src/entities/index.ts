import { CalculationType, RecipientType } from "../types";

export class Allocation {
  value: string;
  recipient?: string;
  children?: Allocation[];
  calculationType: CalculationType[];
  recipientType: RecipientType[];
  timespan?: number;

  constructor({
    value,
    recipient,
    calculationType,
    recipientType,
  }: {
    value: string;
    recipient: string;
    calculationType: CalculationType[];
    recipientType: RecipientType[];
  }) {
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
