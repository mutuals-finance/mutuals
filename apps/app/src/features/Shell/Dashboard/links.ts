import {
  IoGlobeSharp,
  IoHelpCircleSharp,
  IoMegaphoneSharp,
  IoPeopleSharp,
  IoSettingsSharp,
  IoSpeedometerSharp,
} from "react-icons/io5";
import { RiApps2Fill } from "react-icons/ri";
import { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: string;
  value: string;
  icon: IconType;
};

export const header = [
  {
    label: "Homepage",
    value: "homepage",
    icon: IoGlobeSharp,
    href: "https://mutuals.finance",
  },
  {
    label: "Feedback",
    value: "feedback",
    icon: IoMegaphoneSharp,
    href: "https://docs.mutuals.finance",
  },
  {
    label: "Help Center",
    value: "help-center",
    icon: IoHelpCircleSharp,
    href: "https://docs.mutuals.finance",
  },
] as NavItem[];

export const sidebar = {
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
} as {
  [section: string]: NavItem[];
};
