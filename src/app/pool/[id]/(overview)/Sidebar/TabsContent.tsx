import {
  Box,
  Divider,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { PropsWithChildren, useMemo } from 'react';
import { TabType } from '@/app/pool/[id]/(overview)/Sidebar/tabs';
import { usePathname } from 'next/navigation';

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
    <Box>
      <Tabs isFitted={true} index={index}>
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

      <Box p={'3'}>{children}</Box>
    </Box>
  );
}