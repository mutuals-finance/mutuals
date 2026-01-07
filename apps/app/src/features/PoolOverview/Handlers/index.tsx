import {
  IoDownloadOutline,
  IoPushOutline,
  IoSettingsOutline,
  IoSwapHorizontalOutline,
  IoWalletOutline,
} from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import { Pool } from "@mutuals/graphql-client-nextjs";
import { Bleed, IconTextButtonProps } from "@mutuals/ui";
import { DeepPartial } from "#/partial";

interface PoolHandlersProps {
  pool?: DeepPartial<Pool>;
}

export default function PoolOverviewHandlers({ pool }: PoolHandlersProps) {
  const items: IconTextButtonProps[] = [
    {
      "aria-label": "Withdraw",
      children: <IoPushOutline />,
      href: `/pool/${pool?.slug}/withdraw`,
      variant: "surface",
      linkProps: { scroll: false },
    },
    {
      "aria-label": "Deposit",
      children: <IoDownloadOutline />,
      href: `/pool/${pool?.slug}/deposit`,
      linkProps: { scroll: false },
      variant: "surface",
    },
    {
      "aria-label": "Settings",
      children: <IoSettingsOutline />,
      href: `/pool/${pool?.slug}/settings`,
      variant: "surface",
    },
    {
      "aria-label": "Activity",
      children: <IoSwapHorizontalOutline />,
      href: `/pool/${pool?.dbid}/activity`,
      variant: "surface",
    },
    {
      "aria-label": "Assets",
      children: <IoWalletOutline />,
      href: `/pool/${pool?.dbid}/assets`,
      variant: "surface",
    },
  ];

  return (
    <Bleed inline={{ base: "6", lg: "10" }} my={"12"}>
      <ShellIconButtonList items={items} as={"article"} />
    </Bleed>
  );
}
