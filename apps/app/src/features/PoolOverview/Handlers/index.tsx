import {
  IoDownloadOutline,
  IoPushOutline,
  IoSettingsOutline,
  IoSwapHorizontalOutline,
  IoWalletOutline,
} from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import Link from "next/link";
import { Split } from "@mutuals/sdk/thegraph";
import { type DeepPartial } from "#/partial";

interface PoolHandlersProps {
  pool?: DeepPartial<Split>;
}

export default function PoolOverviewHandlers({ pool }: PoolHandlersProps) {
  const items = [
    {
      "aria-label": "Withdraw",
      icon: <IoPushOutline />,
      as: Link,
      href: `/pool/maticmum:${pool?.address}/withdraw`,
    },
    {
      "aria-label": "Deposit",
      icon: <IoDownloadOutline />,
      as: Link,
      href: `/pool/maticmum:${pool?.address}/deposit`,
    },
    {
      "aria-label": "Settings",
      icon: <IoSettingsOutline />,
      as: Link,
      href: `/pool/maticmum:${pool?.address}/settings`,
    },
    {
      "aria-label": "Activity",
      icon: <IoSwapHorizontalOutline />,
      as: Link,
      href: `/pool/maticmum:${pool?.address}/activity`,
    },
    {
      "aria-label": "Assets",
      icon: <IoWalletOutline />,
      as: Link,
      href: `/pool/maticmum:${pool?.address}/assets`,
    },
  ];

  return (
    <ShellIconButtonList
      items={items}
      as={"article"}
      my={"3"}
      ml={{ base: -6, lg: -12 }}
      px={{ base: 6, lg: 12 }}
      w={{
        base: "calc(100% + var(--chakra-space-12))",
        lg: "calc(100% + var(--chakra-space-24))",
      }}
    />
  );
}
