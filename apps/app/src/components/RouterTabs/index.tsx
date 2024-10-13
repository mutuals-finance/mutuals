"use client";

import { Tabs, Link, LinkProps } from "@mutuals/ui";
import { usePathname } from "next/navigation";

export type RouterTabProps = {
  title: string;
} & Pick<Tabs.TriggerProps, "value"> & {
    tabProps?: Omit<Tabs.TriggerProps, "asChild" | "value">;
  } & LinkProps;

interface RouterTabsProps extends Tabs.RootProps {
  tabs?: RouterTabProps[];
}

export default function RouterTabs({
  tabs,
  children,
  ...props
}: RouterTabsProps) {
  const pathname = usePathname();
  const current = tabs?.find((t) => pathname == t.href);

  return (
    <>
      <Tabs.Root value={current?.value} fitted={true} {...props}>
        <Tabs.List>
          {tabs?.map(({ title, value, tabProps, ..._props }) => (
            <Tabs.Trigger
              key={"trigger" + "-" + value}
              value={value}
              p={"0"}
              {...tabProps}
            >
              <Link
                unstyled={true}
                w={"full"}
                alignSelf={"stretch"}
                p={"2"}
                {..._props}
              >
                {title}
              </Link>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
      {children}
    </>
  );
}
