import { CalculationType, RecipientType } from "../types";

class Allocation {
  calculationType: CalculationType[];
  recipientType: RecipientType[];
  value: string;

  recipient?: string;
  timespan?: number;
  children?: Allocation[];

  constructor({
    calculationType,
    recipientType,
    recipient,
    value = "0",
    timespan,
  }: {
    calculationType: CalculationType[];
    recipientType: RecipientType[];
    recipient?: string;
    value?: string;
    timespan?: number;
  }) {
    this.calculationType = calculationType;
    this.recipientType = recipientType;
    this.recipient = recipient;
    this.value = value;
    this.timespan = timespan;
  }
}
