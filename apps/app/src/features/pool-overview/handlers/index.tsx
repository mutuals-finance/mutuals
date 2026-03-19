import {
  type GetPoolOptions,
  getPool,
} from "@mutuals/graphql-client-nextjs/server";
import { Bleed, type IconTextButtonProps } from "@mutuals/ui";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import { LuFileClock, LuSettings, LuWallet } from "react-icons/lu";
import ShellIconButtonList from "@/features/shell/icon-button-list";

export interface PoolHandlersProps {
  queryOptions?: GetPoolOptions;
}

export default async function PoolOverviewHandlers({
  queryOptions,
}: PoolHandlersProps) {
  const { data: pool, error } = await getPool(queryOptions);

  if (error || !pool) {
    return null;
  }

  const items: IconTextButtonProps[] = [
    {
      "aria-label": "Withdraw",
      children: <BiArrowToTop />,
      href: `/pool/${pool.slug}/withdraw`,
      linkProps: { scroll: false },
    },
    {
      "aria-label": "Deposit",
      children: <BiArrowToBottom />,
      href: `/pool/${pool?.slug}/deposit`,
      linkProps: { scroll: false },
    },
    {
      "aria-label": "Settings",
      children: <LuSettings />,
      href: `/pool/${pool.slug}/settings`,
    },
    {
      "aria-label": "Activity",
      children: <LuFileClock />,
      href: `/pool/${pool.slug}/activity`,
    },
    {
      "aria-label": "Assets",
      children: <LuWallet />,
      href: `/pool/${pool.slug}/assets`,
    },
  ].map((buttonProps) => ({ variant: "subtle", size: "lg", ...buttonProps }));

  return (
    <Bleed inline={{ base: "6", lg: "10" }} my={"6"}>
      <ShellIconButtonList as={"article"} items={items} />
    </Bleed>
  );
}
