import { Card } from "@mutuals/ui";

const items = [
  {
    label: "for free",
    heading: "Regular Usage",
    description: "There is no fee for using Mutuals.",
    variant: "outline",
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
    variant: "outline",
  },
  {
    label: "for free, but additional costs possible",
    heading: "Customized",
    description:
      "Connect with our team for larger projects with dedicated requirements, annual contracts, and more.",
    features: [
      "Custom donation per withdrawal",
      "Publicly visible donation badge",
      "Dedicated requirements",
    ],
    variant: "plain",
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
