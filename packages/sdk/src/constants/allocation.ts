import { CalculationType, RecipientType } from "../types";

export const RECIPIENT_TYPE_CONFIG = {
  [RecipientType.DefaultItem]: {
    key: RecipientType.DefaultItem,
    name: "Default Recipient",
  },
  [RecipientType.DefaultGroup]: {
    key: RecipientType.DefaultGroup,
    name: "Default Group",
  },
  [RecipientType.TimedGroup]: {
    key: RecipientType.TimedGroup,
    name: "Timed Group",
  },
  [RecipientType.PrioritizedGroup]: {
    key: RecipientType.PrioritizedGroup,
    name: "Prioritized Group",
  },
};

export const CALCULATION_TYPE_CONFIG = {
  [CalculationType.Percentage]: {
    key: CalculationType.Percentage,
    name: "Percentage",
  },
  [CalculationType.Fixed]: {
    key: CalculationType.Fixed,
    name: "Fixed",
  },
};
