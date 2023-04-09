import React from 'react';

import SidebarLayout from '@/components/SidebarLayout';

import Body from './Body';

export default function SplitSettingsLayout({
  children,
}: React.PropsWithChildren) {
  return <SidebarLayout body={<Body />}>{children}</SidebarLayout>;
}
