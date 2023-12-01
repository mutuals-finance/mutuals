import React from 'react';

import Seo from '@/components/Seo';

import DashboardHandlers from '@/templates/dashboard/handlers';
import TreasuryList from '@/templates/dashboard/treasury-list';
import WalletList from '@/templates/dashboard/wallet-list';

import { NextPageWithLayout } from '#/app';

const DashboardPage: NextPageWithLayout = function () {
  return (
    <>
      <Seo />
      <WalletList />
      <DashboardHandlers />
      <TreasuryList />
    </>
  );
};

export default DashboardPage;
