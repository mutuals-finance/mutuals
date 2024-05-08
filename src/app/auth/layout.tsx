import React, { PropsWithChildren } from 'react';
import Layout from '@/app/(dashboard)/DashboardLayout';
import Providers from '@/app/RootProviders';

export default function AuthLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}