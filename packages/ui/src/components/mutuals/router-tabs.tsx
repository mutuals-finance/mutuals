"use client";

import { Text, TextProps, Tabs } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Link, LinkProps } from "./link";

export type RouterTabProps = {
  title: string;
  tabProps?: Omit<Tabs.TriggerProps, "asChild" | "value">;
} & Pick<Tabs.TriggerProps, "value"> &
  Pick<LinkProps, "href" | "linkProps"> &
  Omit<TextProps, "children">;

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

          {tabs?.map(
            ({
              title,
              value,
              tabProps,
              href,
              linkProps: _linkProps,
              ...restProps
            }) => {
              // Extract only safe props that work on both Text and Link
              const {
                color,
                fontSize,
                fontWeight,
                textAlign,
                opacity,
                cursor,
              } = restProps;

              const commonProps = {
                color,
                fontSize,
                fontWeight,
                textAlign: textAlign ?? ("center" as const),
                opacity,
                cursor,
                justifyContent: "center",
                w: "full",
                alignSelf: "stretch",
                py: "2",
                px: { base: "2", lg: "4" },
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
                    <Text {...commonProps}>{title}</Text>
                  ) : (
                    <Link
                      href={href}
                      indicator={false}
                      linkProps={{
                        scroll: false,
                        ..._linkProps,
                      }}
                      {...commonProps}
                    >
                      {title}
                    </Link>
                  )}
                </Tabs.Trigger>
              );
            },
          )}
        </Tabs.List>
      </Tabs.Root>
      {children}
    </>
  );
}
