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
      <Tabs.Root
        value={current?.value}
        onValueChange={(e) => console.log(e.value)}
        {...props}
      >
        <Tabs.List
          position="relative"
          borderBottomWidth={"1px"}
          borderColor={"border"}
        >
          {tabs?.map(({ title, value, tabProps, ..._props }) => (
            <Tabs.Trigger
              asChild
              key={"trigger" + "-" + value}
              value={value}
              {...tabProps}
            >
              <Link {..._props}>{title}</Link>
            </Tabs.Trigger>
          ))}

          <Tabs.Indicator />
        </Tabs.List>

        {tabs?.map(({ value }) => (
          <Tabs.Content key={"content" + "-" + value} value={value} />
        ))}
      </Tabs.Root>
      {children}
    </>
  );
}
