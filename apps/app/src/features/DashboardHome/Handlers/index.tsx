import { IoSettingsSharp, IoWalletSharp } from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import { Bleed } from "@mutuals/ui";
import { RiApps2AddFill } from "react-icons/ri";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

export default function DashboardHandlers() {
  return (
    <Bleed inline={{ base: "6", lg: "10" }}>
      <ShellIconButtonList
        items={[
          {
            "aria-label": "Withdraw",
            children: <BiArrowToTop />,
            href: "/withdraw",
            variant: "subtle",
          },
          {
            "aria-label": "Deposit",
            children: <BiArrowToBottom />,
            href: "/deposit",
            variant: "subtle",
          },
          {
            "aria-label": "Create Pool",
            children: <RiApps2AddFill />,
            href: "/pool/new", //
            variant: "subtle",
          },
          {
            "aria-label": "Add Wallet",
            children: <IoWalletSharp />,
            href: "/wallet/new", // wallet/new
            variant: "subtle",
          },
          {
            "aria-label": "Settings",
            children: <IoSettingsSharp />,
            href: "/settings",
            variant: "subtle",
          },
        ]}
      />
    </Bleed>
  );
}
