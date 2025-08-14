"use client";

import { Text, TextProps, Tabs, Link, LinkProps } from "@mutuals/ui";
import { usePathname } from "next/navigation";

export type RouterTabProps = {
  title: string;
} & Pick<Tabs.TriggerProps, "value"> & {
    tabProps?: Omit<Tabs.TriggerProps, "asChild" | "value">;
  } & TextProps &
  LinkProps;

export interface RouterTabsProps extends Tabs.RootProps {
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
        fitted={true}
        variant={"plain"}
        {...props}
      >
        <Tabs.List borderBottom={"1px solid"} borderColor={"border"}>
          <Tabs.Indicator
            shadow={"none"}
            borderBottom={"2px solid"}
            borderColor={"fg"}
            bg={"transparent"}
          />

          {tabs?.map(({ title, value, tabProps, ..._props }) => {
            const __props = {
              unstyled: true,
              textAlign: "center",
              justifyContent: "center",
              w: "full",
              alignSelf: "stretch",
              p: "2",
              children: title,
              ..._props,
            };

            return (
              <Tabs.Trigger
                key={"trigger" + "-" + value}
                value={value}
                p={"0"}
                {...tabProps}
              >
                {tabProps?.disabled ? (
                  <Text {...__props} />
                ) : (
                  <Link {...__props} />
                )}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
      </Tabs.Root>
      {children}
    </>
  );
}
