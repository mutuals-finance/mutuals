import React from 'react';

import Seo from '@/components/Seo';

import { NextPageWithLayout } from '#/app';

const DepositPage: NextPageWithLayout = function DepositPage() {
  return (
    <>
      <Seo />
      <h2>Deposit</h2>
    </>
  );
};

DepositPage.Layout = 'SplitDetails';
export default DepositPage;
