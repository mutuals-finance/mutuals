'use client';

import {
  forwardRef,
  Tab,
  TabList,
  TabProps,
  Tabs,
  TabsProps,
} from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useImperativeHandle, useMemo } from 'react';

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
      <Tabs index={index} {...props}>
        <TabList>
          {tabs?.map(({ title, href, ..._props }) => (
            <Tab
              href={href}
              key={title}
              _focus={{ outline: '0', boxShadow: 'none' }}
              as={Link}
              {..._props}
            >
              {title}
            </Tab>
          ))}
        </TabList>
      </Tabs>

      {children}
    </>
  );
}
