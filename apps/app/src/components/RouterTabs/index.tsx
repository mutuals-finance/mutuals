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
  css,
  ...props
}: RouterTabsProps) {
  const pathname = usePathname();
  const current = tabs?.find((t) => pathname == t.href);

  return (
    <>
      <Tabs.Root
        value={current?.value}
        css={{
          "--tabs-indicator-bg": "transparent",
          "--tabs-indicator-shadow": "none",
          ...css,
        }}
        {...props}
      >
        <Tabs.List>
          <Tabs.Indicator
            borderBottom={"2px solid"}
            borderColor={"fg"}
            rounded={"0"}
          />

          {tabs?.map(({ title, value, tabProps, ..._props }) => {
            const __props = {
              textAlign: "center",
              justifyContent: "center",
              w: "full",
              alignSelf: "stretch",
              py: "2",
              px: { base: "2", lg: "4" },
              children: title,
              ..._props,
            };

            return (
              <Tabs.Trigger
                key={"trigger" + "-" + value}
                value={value}
                p={"0"}
                unstyled={true}
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
