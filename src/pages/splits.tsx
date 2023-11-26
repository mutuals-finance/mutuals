import React from 'react';

import Seo from '@/components/Seo';

import {
  SplitListGrid,
  SplitListSearchAndCreate,
  SplitListWrapper,
} from '@/templates/split/list';
import WalletStatsLarge from '@/templates/split/list/DashboardHandlers';
import {
  WalletListGrid,
  WalletListWrapper,
} from '@/templates/split/wallet-list';

import { NextPageWithLayout } from '#/app';

const SplitsPage: NextPageWithLayout = function () {
  return (
    <>
      <Seo />
      <WalletListWrapper>
        <WalletListGrid />
      </WalletListWrapper>
      <WalletStatsLarge />
      <SplitListWrapper>
        <SplitListSearchAndCreate />
        <SplitListGrid />
      </SplitListWrapper>
    </>
  );
};

export default SplitsPage;
