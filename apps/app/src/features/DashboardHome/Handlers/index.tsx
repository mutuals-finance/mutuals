import {
  IoAppsOutline,
  IoSettingsOutline,
  IoWalletOutline,
} from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import { Container } from "@mutuals/ui";

export default function DashboardHandlers() {
  return (
    <Container maxW={"7xl"} my={"16"}>
      <ShellIconButtonList
        items={[
          {
            "aria-label": "Create Pool",
            children: <IoAppsOutline />,
            href: "/pool/new",
            variant: "subtle",
          },
          {
            "aria-label": "Add Wallet",
            children: <IoWalletOutline />,
            href: "/wallet/new",
            variant: "subtle",
            scroll: false,
          },
          {
            "aria-label": "Settings",
            children: <IoSettingsOutline />,
            href: "/settings",
            variant: "subtle",
          },
        ]}
      />
    </Container>
  );
}
