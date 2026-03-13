import ShellIconButtonList from "@/features/Shell/IconButtonList";
import { Bleed, IconTextButtonProps } from "@mutuals/ui";
import { getPool, GetPoolOptions } from "@mutuals/graphql-client-nextjs/server";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import { LuFileClock, LuSettings, LuWallet } from "react-icons/lu";

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

  const pool = data.pool;

  const items: IconTextButtonProps[] = [
    {
      "aria-label": "Withdraw",
      children: <BiArrowToTop />,
      href: `/pool/${pool?.slug}/withdraw`,
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
      href: `/pool/${pool?.slug}/settings`,
    },
    {
      "aria-label": "Activity",
      children: <LuFileClock />,
      href: `/pool/${pool?.slug}/activity`,
    },
    {
      "aria-label": "Assets",
      children: <LuWallet />,
      href: `/pool/${pool?.slug}/assets`,
    },
  ].map((buttonProps) => ({ variant: "subtle", size: "lg", ...buttonProps }));

  return (
    <Bleed inline={{ base: "6", lg: "10" }} my={"6"}>
      <ShellIconButtonList items={items} as={"article"} />
    </Bleed>
  );
}
