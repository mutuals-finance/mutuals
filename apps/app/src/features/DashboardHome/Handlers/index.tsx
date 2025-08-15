import { IoSettingsSharp, IoWalletSharp } from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import { Container, Bleed } from "@mutuals/ui";
import { RiApps2AddFill } from "react-icons/ri";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

export default function DashboardHandlers() {
  return (
    <Container maxW={"7xl"} my={"6"}>
      <Bleed inline="10">
        <ShellIconButtonList
          items={[
            {
              "aria-label": "Withdraw",
              children: <BiArrowToTop />,
              href: "/",
              variant: "surface",
            },
            {
              "aria-label": "Deposit",
              children: <BiArrowToBottom />,
              href: "/",
              variant: "surface",
            },
            {
              "aria-label": "Create Pool",
              children: <RiApps2AddFill />,
              href: "/", // pool/new
              variant: "surface",
            },
            {
              "aria-label": "Add Wallet",
              children: <IoWalletSharp />,
              href: "/", // wallet/new
              variant: "surface",
            },
            {
              "aria-label": "Settings",
              children: <IoSettingsSharp />,
              href: "/settings",
              variant: "surface",
            },
          ]}
        />
      </Bleed>
    </Container>
  );
}
