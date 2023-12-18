import { Stack, Tab, TabList, Tabs } from '@chakra-ui/react';
import Link from 'next/link';
import React, { PropsWithChildren, useMemo } from 'react';
import { TabType } from '@/app/pool/[id]/(overview)/Sidebar/tabs';

interface SidebarTabMenuProps {
  tabs?: TabType[];
  index?: number;
}
export default function SidebarTabsContent({
  tabs,
  index,
  children,
}: PropsWithChildren<SidebarTabMenuProps>) {
  return (
    <>
      <Tabs isFitted={true} index={index} flexShrink={'0'}>
        <TabList>
          {tabs?.map(({ title, href }) => (
            <Tab
              href={href}
              key={title}
              _focus={{ outline: '0', boxShadow: 'none' }}
              as={Link}
              scroll={false}
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
