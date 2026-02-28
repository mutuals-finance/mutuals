import {
  IoDownloadOutline,
  IoPushOutline,
  IoSettingsOutline,
  IoSwapHorizontalOutline,
  IoWalletOutline,
} from "react-icons/io5";

import ShellIconButtonList from "@/features/Shell/IconButtonList";
import {
  PoolWithOwnerAndContractFragmentDoc,
  getFragmentData,
} from "@mutuals/graphql-client-nextjs";
import { Bleed, IconTextButtonProps } from "@mutuals/ui";
import { getPool, GetPoolOptions } from "@mutuals/graphql-client-nextjs/server";

export type PoolHandlersProps = {
  queryOptions?: GetPoolOptions;
};

export default async function PoolOverviewHandlers({
  queryOptions,
}: PoolHandlersProps) {
  const { data, error } = await getPool(queryOptions);

  if (error || !data?.pool || "message" in data.pool) {
    return null;
  }

  const pool = getFragmentData(PoolWithOwnerAndContractFragmentDoc, data.pool);

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
      href: `/pool/${pool?.slug}/activity`,
      variant: "surface",
    },
    {
      "aria-label": "Assets",
      children: <IoWalletOutline />,
      href: `/pool/${pool?.slug}/assets`,
      variant: "surface",
    },
  ];

  return (
    <Bleed inline={{ base: "6", lg: "10" }} my={"12"}>
      <ShellIconButtonList items={items} as={"article"} />
    </Bleed>
  );
}
