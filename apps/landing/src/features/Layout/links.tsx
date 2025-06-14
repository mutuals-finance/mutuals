import { type LinkProps } from "@mutuals/ui";
import { IoLogoDiscord, IoLogoTwitter } from "react-icons/io5";
import { BiLogoTelegram } from "react-icons/bi";

const links: LinkProps[] = [
  {
    href: "/pricing",
    children: "Pricing",
  },
  { children: "Company", href: "/contact" },
  { children: "Community", href: "/support" },
  { children: "Blog", href: "/blog" },
  { children: "Docs", href: "/docs" },
];

export const socialLinks = [
  { "aria-label": "Twitter", children: <IoLogoTwitter />, href: "/" },
  { "aria-label": "Discord", children: <IoLogoDiscord />, href: "/" },
  { "aria-label": "Telegram", children: <BiLogoTelegram />, href: "/" },
];

export default links;
