"use client";

import {
  Tab,
  TabIndicator,
  TabList,
  TabProps,
  Tabs,
  TabsProps,
} from "@splitfi/ui";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export type RouterTabProps = { title: string } & LinkProps & TabProps;

interface RouterTabsProps extends TabsProps {
  tabs?: RouterTabProps[];
}

export default function RouterTabs({
  tabs,
  children,
  ...props
}: RouterTabsProps) {
  const pathname = usePathname();
  const index = tabs?.findIndex((t) => pathname == t.href.toString());

  return (
    <>
      <Tabs
        index={index}
        position="relative"
        variant="unstyled"
        borderBottom={"1px solid"}
        borderColor={"border.1"}
        {...props}
      >
        <TabList>
          {tabs?.map(({ title, href, ..._props }) => (
            <Tab
              href={href}
              key={title}
              color={"alpha.1"}
              _focus={{ outline: "0", boxShadow: "none" }}
              _selected={{ color: "color.1" }}
              _hover={{ color: "color.1" }}
              as={Link}
              {..._props}
            >
              {title}
            </Tab>
          ))}
        </TabList>

        <TabIndicator mt="-1.5px" height="2px" bg="color.1" />
      </Tabs>

      {children}
    </>
  );
}
