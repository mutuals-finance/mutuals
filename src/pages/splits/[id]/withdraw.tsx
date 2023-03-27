import React from 'react';

import Seo from '@/components/Seo';

import { NextPageWithLayout } from '#/app';

const WithdrawPage: NextPageWithLayout = function WithdrawPage() {
  return (
    <>
      <Seo />
      <h2>Withdraw</h2>
    </>
  );
};

WithdrawPage.Layout = 'SplitDetails';
export default WithdrawPage;
