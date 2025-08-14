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
    return this.recipientType[0] == RecipientType.DefaultItem;
  }

  get isGroup() {
    return !this.isItem;
  }

  get isFixed() {
    return this.calculationType[0] == CalculationType.Fixed;
  }

  get isPercentage() {
    return this.calculationType[0] == CalculationType.Percentage;
  }

  get isPrioritized() {
    return this.recipientType[0] == RecipientType.PrioritizedGroup;
  }

  get isTimed() {
    return this.recipientType[0] == RecipientType.TimedGroup;
  }
}
