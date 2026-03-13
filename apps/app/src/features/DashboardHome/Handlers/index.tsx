import ShellIconButtonList from "@/features/Shell/IconButtonList";
import { Bleed, IconTextButtonProps } from "@mutuals/ui";
import { RiApps2AddFill } from "react-icons/ri";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import { LuSettings, LuWallet } from "react-icons/lu";

const items: IconTextButtonProps[] = [
  {
    "aria-label": "Withdraw",
    children: <BiArrowToTop />,
    href: "/withdraw",
    linkProps: { scroll: false },
  },
  {
    "aria-label": "Deposit",
    children: <BiArrowToBottom />,
    href: "/deposit",
    linkProps: { scroll: false },
  },
  {
    "aria-label": "Create Pool",
    children: <RiApps2AddFill />,
    href: "/pool/new",
  },
  {
    "aria-label": "Add Wallet",
    children: <LuWallet />,
    href: "/wallet/new",
    linkProps: { scroll: false },
  },
  {
    "aria-label": "Settings",
    children: <LuSettings />,
    href: "/settings",
  },
].map((buttonProps) => ({ variant: "subtle", size: "lg", ...buttonProps }));

export default function DashboardHandlers() {
  return (
    <Bleed inline={{ base: "6", lg: "10" }}>
      <ShellIconButtonList items={items} />
    </Bleed>
  );
}
