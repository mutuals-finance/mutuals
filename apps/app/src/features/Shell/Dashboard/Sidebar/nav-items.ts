import { IconType } from "react-icons";
import {
  IoHelpCircleSharp,
  IoPeopleSharp,
  IoSettingsSharp,
  IoSpeedometerSharp,
} from "react-icons/io5";
import { RiApps2Fill } from "react-icons/ri";

export default {
  General: [
    {
      label: "Dashboard",
      href: "/",
      icon: IoSpeedometerSharp,
    },
    {
      label: "Payment Pools",
      href: "/pool", // dashboard
      icon: RiApps2Fill,
    },
    {
      label: "Address Book",
      href: "/address-book", // address-book
      icon: IoPeopleSharp,
    },
  ],
  Preferences: [
    {
      label: "Settings",
      href: "/settings", // settings
      icon: IoSettingsSharp,
    },
    {
      label: "Help Center",
      href: "/", // settings
      icon: IoHelpCircleSharp,
    },
  ],
} as {
  [section: string]: {
    label: string;
    href: string;
    icon: IconType;
  }[];
};
