import {
  IoDownloadOutline,
  IoPushOutline,
  IoSettingsOutline,
  IoSwapHorizontalOutline,
  IoWalletOutline,
} from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import { Split } from "@mutuals/graphql-client-nextjs";

interface PoolHandlersProps {
  pool?: Split;
}

export default function PoolOverviewHandlers({ pool }: PoolHandlersProps) {
  const items = [
    {
      "aria-label": "Withdraw",
      children: <IoPushOutline />,
      href: `/pool/${pool?.dbid}/withdraw`,
      variant: "subtle",
    },
    {
      "aria-label": "Deposit",
      children: <IoDownloadOutline />,
      href: `/pool/${pool?.dbid}/deposit`,
      variant: "subtle",
    },
    {
      "aria-label": "Settings",
      children: <IoSettingsOutline />,
      href: `/pool/${pool?.dbid}/settings`,
      variant: "subtle",
    },
    {
      "aria-label": "Activity",
      children: <IoSwapHorizontalOutline />,
      href: `/pool/${pool?.dbid}/activity`,
      variant: "subtle",
    },
    {
      "aria-label": "Assets",
      children: <IoWalletOutline />,
      href: `/pool/${pool?.dbid}/assets`,
      variant: "subtle",
    },
  ];

  return (
    <ShellIconButtonList
      items={items}
      as={"article"}
      my={"12"}
      ml={{ base: -6, lg: -12 }}
      px={{ base: 6, lg: 12 }}
      w={{
        base: "calc(100% + var(--chakra-space-12))",
        lg: "calc(100% + var(--chakra-space-24))",
      }}
    />
  );
}
