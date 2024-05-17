import React, { PropsWithChildren } from 'react';
import WalletList from 'src/app/(dashboard)/WalletList';
import DashboardHandlers from '@/app/(dashboard)/Handlers';
import PoolList from 'src/app/(dashboard)/PoolList';
import Balance from '@/app/(dashboard)/(home)/Balance';

export default function DashboardHomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Balance />
      <DashboardHandlers />
      <WalletList />
      <PoolList />
      {children}
    </>
  );
}
