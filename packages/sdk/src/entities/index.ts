import { CalculationType, RecipientType } from "../types";
import { CALCULATION_TYPE_KEY, RECIPIENT_TYPE_KEY } from "../constants";

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
    calculationType: CalculationType;
    recipientType: RecipientType;
  }) {
    this.value = value;
    this.recipient = recipient;
    this.calculationType = calculationType;
    this.recipientType = recipientType;
  }

  get hash() {}

  get isItem() {
    return this.recipientType[0] == RECIPIENT_TYPE_KEY.DEFAULT_RECIPIENT;
  }

  get isGroup() {
    return !this.isItem;
  }

  get isFixed() {
    return this.calculationType[0] == CALCULATION_TYPE_KEY.FIXED;
  }

  get isPercentage() {
    return this.calculationType[0] == CALCULATION_TYPE_KEY.PERCENTAGE;
  }

  get isPrioritized() {
    return this.recipientType[0] == RECIPIENT_TYPE_KEY.PRIORITIZED_GROUP;
  }

  get isTimed() {
    return this.recipientType[0] == RECIPIENT_TYPE_KEY.TIMED_GROUP;
  }
}
