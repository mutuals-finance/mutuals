import { Card } from "@mutuals/ui";

const items = [
  {
    label: "for free",
    heading: "Regular Usage",
    description: "There is no fee for using Mutuals.",
  },
  {
    label: "your preferred amount",
    heading: "Donation",
    description:
      "Support us by donating a portion of your withdrawals (optional).",
    features: [
      "Custom donation per withdrawal",
      "Publicly visible donation badge",
    ],
  },
].map((i) => ({
  ...i,
  features: [
    "Unlimited Payment Pool, Recipients and Tokens",
    "Multiple Chains Available",
    "No Fees or hidden costs",
    ...(i.features ?? []),
  ],
})) as Array<
  Card.RootProps & {
    heading: string;
    label: string;
    description: string;
    features: string[];
  }
>;

export default items;
