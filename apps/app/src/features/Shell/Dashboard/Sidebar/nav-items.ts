import { IconType } from "react-icons";
import {
  IoAppsOutline,
  IoGridOutline,
  IoHelpCircleOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export default {
  General: [
    {
      label: "Dashboard",
      href: "/",
      icon: IoAppsOutline,
    },
    {
      label: "Payment Pools",
      href: "/dashboard",
      icon: IoGridOutline,
    },
    {
      label: "Address Book",
      href: "/address-book",
      icon: IoPeopleOutline,
    },
  ],
  Preferences: [
    {
      label: "Settings",
      href: "/settings",
      icon: IoSettingsOutline,
    },
    {
      label: "Help Center",
      href: "/settings",
      icon: IoHelpCircleOutline,
    },
  ],
} as {
  [section: string]: {
    label: string;
    href: string;
    icon: IconType;
  }[];
};
