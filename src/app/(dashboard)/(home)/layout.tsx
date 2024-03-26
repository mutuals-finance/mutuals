import React, { PropsWithChildren } from 'react';
import WalletList from 'src/app/(dashboard)/WalletList';
import DashboardHandlers from '@/app/(dashboard)/Handlers';
import PoolList from 'src/app/(dashboard)/PoolList';

export default function DashboardHomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <WalletList />
      <DashboardHandlers />
      <PoolList />
      {children}
    </>
  );
}
