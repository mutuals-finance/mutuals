import { IoLogoDiscord, IoLogoGithub } from "react-icons/io5";
import { BiLogoTelegram } from "react-icons/bi";
import { NavLinkProps } from "@/features/Layout/Header/NavLink";
import { RiTwitterXLine } from "react-icons/ri";

const links: NavLinkProps[] = [
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    children: "Contact",
    href: "/contact",
  },
  { children: "Socials", href: "/socials" },
  { children: "Blog", external: true, href: "/blog" },
  {
    children: "Docs",
    external: true,
    target: "_blank",
    href: "https://docs.mutuals.finance",
  },
];

export const socialLinks = [
  {
    "aria-label": "Github",
    children: <IoLogoGithub />,
    href: "https://github.com/mutuals-finance",
    target: "_blank",
  },
  {
    "aria-label": "XTwitter",
    children: <RiTwitterXLine />,
    href: "https://x.com",
    target: "_blank",
  },
  {
    "aria-label": "Discord",
    children: <IoLogoDiscord />,
    href: "https://discord.com",
    target: "_blank",
  },
  { "aria-label": "Telegram", children: <BiLogoTelegram />, href: "/" },
];

export default links;
