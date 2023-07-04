import React from 'react';

import Seo from '@/components/Seo';

import {
  SplitListGrid,
  SplitListHeader,
  SplitListSearchAndCreate,
  SplitListWrapper,
} from '@/templates/split/list';

import { NextPageWithLayout } from '#/app';

const SplitsPage: NextPageWithLayout = function () {
  return (
    <>
      <Seo />
      <SplitListWrapper>
        <SplitListHeader />
        <SplitListSearchAndCreate />
        <SplitListGrid />
      </SplitListWrapper>
    </>
  );
};

export default SplitsPage;
