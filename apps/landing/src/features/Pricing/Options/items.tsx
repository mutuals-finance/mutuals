import { PricingOptionsCardProps } from "@/features/Pricing/Options/Card";

const items = [
  {
    heading: "Regular Usage",
    description: "There is no fee for using Mutuals.",
  },
  {
    heading: "Donation",
    description:
      "Support us by donating a portion of your withdrawals (optional).",
    features: [
      "Custom donation per withdrawal",
      "Publicly visible donation badge",
    ],
  },
  {
    heading: "Customized",
    description:
      "Connect with our team for larger projects with dedicated requirements, annual contracts, and more.",
    features: [
      "Custom donation per withdrawal",
      "Publicly visible donation badge",
      "Dedicated requirements",
    ],
    colorPalette: "brand",
    borderColor: { base: "brand.200", _dark: "brand.800" },
    buttonProps: { variant: "gradient" },
  },
].map((i) => ({
  ...i,
  features: [
    "Unlimited Payment Pool, Recipients and Tokens",
    "Multiple Chains Available",
    "No Fees or hidden costs",
    ...(i.features ?? []),
  ],
})) as Array<PricingOptionsCardProps>;

export default items;
