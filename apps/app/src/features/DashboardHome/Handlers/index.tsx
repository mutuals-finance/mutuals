import {
  IoAppsOutline,
  IoSettingsOutline,
  IoWalletOutline,
} from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import Link from "next/link";
import { Container } from "@mutuals/ui";

export default function DashboardHandlers() {
  const items = [
    {
      "aria-label": "Add Wallet",
      icon: <IoWalletOutline />,
      as: Link,
      href: "/wallet/new",
      scroll: false,
    },
    {
      "aria-label": "Create Pool",
      icon: <IoAppsOutline />,
      as: Link,
      href: "/pool/new",
    },
    {
      "aria-label": "Settings",
      icon: <IoSettingsOutline />,
      as: Link,
      href: "/settings",
    },
  ];

  return (
    <Container variant={"shell"}>
      <ShellIconButtonList items={items} />
    </Container>
  );
}
