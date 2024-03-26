import React, { PropsWithChildren } from 'react';
import Layout from '@/app/(dashboard)/DashboardLayout';
import Providers from '@/app/RootProviders';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
