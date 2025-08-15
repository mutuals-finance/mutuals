import { IoSettingsSharp, IoWalletSharp } from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import { Container } from "@mutuals/ui";
import { RiApps2AddFill } from "react-icons/ri";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

export default function DashboardHandlers() {
  return (
    <Container maxW={"7xl"} my={"6"}>
      <ShellIconButtonList
        items={[
          {
            "aria-label": "Withdraw",
            children: <BiArrowToTop />,
            href: "/",
            variant: "surface",
            rounded: "2xl",
          },
          {
            "aria-label": "Deposit",
            children: <BiArrowToBottom />,
            href: "/",
            variant: "surface",
            rounded: "2xl",
          },
          {
            "aria-label": "Create Pool",
            children: <RiApps2AddFill />,
            href: "/", // pool/new
            variant: "surface",
            rounded: "2xl",
          },
          {
            "aria-label": "Add Wallet",
            children: <IoWalletSharp />,
            href: "/", // wallet/new
            variant: "surface",
            rounded: "2xl",
          },
          {
            "aria-label": "Settings",
            children: <IoSettingsSharp />,
            href: "/settings",
            variant: "surface",
            rounded: "2xl",
          },
        ]}
      />
    </Container>
  );
}
