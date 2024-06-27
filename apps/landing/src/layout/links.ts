import type { LinkProps } from "@splitfi/ui";

const links: (LinkProps & { label: string })[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "pricing",
    href: "/pricing",
    label: "Pricing",
  },
  { id: "contact", label: "Contact", href: "/contact" },
  { id: "support", label: "Support", href: "/support" },
];

export default links;
