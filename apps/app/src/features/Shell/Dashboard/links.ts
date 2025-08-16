import {
  IoDocumentTextSharp,
  IoGlobeSharp,
  IoHelpCircleSharp,
  IoLockClosedSharp,
  IoLogoDiscord,
  IoLogoGithub,
  IoMegaphoneSharp,
  IoPeopleSharp,
  IoSettingsSharp,
  IoSpeedometerSharp,
} from "react-icons/io5";
import { RiApps2Fill, RiTwitterXLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { NavLinkProps } from "@mutuals/ui";
import { BiLogoTelegram } from "react-icons/bi";

export type NavItem = {
  label: string;
  href: string;
  value: string;
  icon: IconType;
};

export const header: NavLinkProps[] = [
  {
    label: "Homepage",
    value: "homepage",
    icon: IoGlobeSharp,
    href: "https://mutuals.finance",
    target: "_blank",
  },
  {
    label: "Feedback",
    value: "feedback",
    icon: IoMegaphoneSharp,
    href: "https://docs.mutuals.finance",
    target: "_blank",
  },
  {
    label: "Help Center",
    value: "help-center",
    icon: IoHelpCircleSharp,
    href: "https://docs.mutuals.finance",
    target: "_blank",
  },
];

export const social: NavLinkProps[] = [
  {
    label: "Github",
    value: "github",
    icon: IoLogoGithub,
    href: "https://github.com/mutuals-finance",
    target: "_blank",
  },
  {
    label: "XTwitter",
    value: "x-twitter",
    icon: RiTwitterXLine,
    href: "https://x.com",
    target: "_blank",
  },
  {
    label: "Discord",
    value: "discord",
    icon: IoLogoDiscord,
    href: "https://discord.com",
    target: "_blank",
  },
  { label: "Telegram", value: "telegram", icon: BiLogoTelegram, href: "/" },
];

export const legal: NavLinkProps[] = [
  {
    label: "Terms Of Service",
    value: "terms-of-service",
    icon: IoDocumentTextSharp,
    href: "/terms-of-service",
  },
  {
    label: "Privacy Policy",
    value: "privacy-policy",
    icon: IoLockClosedSharp,
    href: "/privacy-policy",
  },
];

export const sidebar: {
  [section: string]: NavLinkProps[];
} = {
  General: [
    {
      label: "Dashboard",
      value: "dashboard",
      href: "/",
      icon: IoSpeedometerSharp,
    },
    {
      label: "Payment Pools",
      value: "payment-pools",
      href: "/pool",
      icon: RiApps2Fill,
    },
    {
      label: "Address Book",
      value: "address-book",
      href: "/address-book",
      icon: IoPeopleSharp,
    },
  ],
  Preferences: [
    {
      label: "Settings",
      value: "settings",
      href: "/settings",
      icon: IoSettingsSharp,
    },
    {
      label: "Help Center",
      value: "help-center",
      href: "https://docs.mutuals.finance",
      icon: IoHelpCircleSharp,
    },
  ],
};
