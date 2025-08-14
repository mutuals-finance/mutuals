import percentImage from "@/assets/payment/percentage.png";
import bg1Image from "@/assets/pay-1-bg.png";
import fixedImage from "@/assets/payment/fixed.png";
import bg2Image from "@/assets/pay-2-bg.png";
import timelockImage from "@/assets/payment/timelock.png";
import bg3Image from "@/assets/pay-3-bg.png";
import prioritizedImage from "@/assets/payment/prioritized.png";
import combineImage from "@/assets/payment/combine.png";

const payments = [
  {
    id: "combined-allocation",
    tag: "Combined allocation",
    headline: "Optimize strategic asset distribution for maximum efficiency.",
    description:
      "Use any hierarchical combination of fixed, percentage, recurring and prioritized allocation to handle complex financial flows in a single Payment Pool.",
    image: combineImage,
    bgImage: bg2Image,
  },
  {
    id: "percentage-allocation",
    tag: "Percentage allocation",
    headline:
      "Seamlessly convert your funds between tokens and fiat in realtime.",
    description:
      "Automatically allocate incoming payments based on predefined percentage splits for each recipient. Ideal for shared income, royalties, and DAOs.",
    image: percentImage,
    bgImage: bg1Image,
  },
  {
    id: "fixed-allocation",
    tag: "Fixed allocation",
    headline:
      "Seamlessly convert your funds between tokens and fiat in realtime.",
    description:
      "Assign exact amounts to each recipient before distributing remaining funds. Useful for covering fixed costs like salaries or expenses.",
    image: fixedImage,
    bgImage: bg2Image,
  },
  {
    id: "recurring-payments",
    tag: "Recurring payments",
    headline:
      "Streamline regular transactions for consistent financial management.",
    description:
      "Set up your Payment Pool to execute transfers at fixed intervals. Ideal for payroll, subscriptions, and continuous funding mechanisms.",
    image: timelockImage,
    bgImage: bg3Image,
  },
  {
    id: "prioritized-allocation",
    tag: "Prioritized allocation",
    headline: "Optimize strategic asset distribution for maximum efficiency.",
    description:
      "Define priority tiers for recipients to receive funds in order. Higher-priority accounts are funded first.",
    image: prioritizedImage,
    bgImage: bg1Image,
  },
];

export default payments;
