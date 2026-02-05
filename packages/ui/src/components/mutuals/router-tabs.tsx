"use client";

import { Text, TextProps, Tabs } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Link, LinkProps } from "./link";

export type RouterTabProps = {
  title: string;
} & Pick<Tabs.TriggerProps, "value"> & {
    tabProps?: Omit<Tabs.TriggerProps, "asChild" | "value">;
  } & TextProps &
  LinkProps;

export interface RouterTabsProps extends Tabs.RootProps {
  tabs?: RouterTabProps[];
}

export function RouterTabs({ tabs, children, css, ...props }: RouterTabsProps) {
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

          {tabs?.map(({ title, value, tabProps, href, ...restProps }) => {
            const linkProps = {
              href,
              textAlign: "center",
              justifyContent: "center",
              w: "full",
              alignSelf: "stretch",
              py: "2",
              px: { base: "2", lg: "4" },
              children: title,
              indicator: false,
              ...restProps,
            } as const;

            return (
              <Tabs.Trigger
                key={"trigger" + "-" + value}
                value={value}
                p={"0"}
                unstyled={true}
                {...tabProps}
              >
                {tabProps?.disabled ? (
                  <Text {...linkProps} />
                ) : (
                  <Link {...linkProps} />
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
