import { IoLogoDiscord, IoLogoTwitter } from "react-icons/io5";
import { BiLogoTelegram } from "react-icons/bi";
import { NavLinkProps } from "@/features/Layout/Header/NavLink";

const links: NavLinkProps[] = [
  {
    href: "/pricing",
    children: "Pricing",
  },
  { children: "About", href: "/contact" },
  { children: "Socials", href: "/socials" },
  { children: "Blog", external: true, href: "/blog" },
  { children: "Docs", external: true, href: "/docs" },
];

export const socialLinks = [
  { "aria-label": "Twitter", children: <IoLogoTwitter />, href: "/" },
  { "aria-label": "Discord", children: <IoLogoDiscord />, href: "/" },
  { "aria-label": "Telegram", children: <BiLogoTelegram />, href: "/" },
];

export default links;
