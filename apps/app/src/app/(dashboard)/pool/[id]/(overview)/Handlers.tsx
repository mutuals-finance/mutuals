import {
  IoDownloadOutline,
  IoPushOutline,
  IoSettingsOutline,
  IoSwapHorizontalOutline,
  IoWalletOutline,
} from "react-icons/io5";

import { SplitBaseFragmentFragment } from "@/lib/graphql/thegraph/__generated__/graphql";
import IconButtonListContainer from "@/components/Shell/IconButtonListContainer";
import Link from "next/link";

interface PoolHandlersProps {
  pool?: SplitBaseFragmentFragment | null;
}

export default function PoolHandlers({ pool }: PoolHandlersProps) {
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
    <IconButtonListContainer
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
