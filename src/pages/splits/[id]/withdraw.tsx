import React from 'react';

import Seo from '@/components/Seo';

import { NextPageWithLayout } from '#/app';

const WithdrawPage: NextPageWithLayout = function WithdrawPage() {
  return (
    <>
      <Seo />
      <section>
        <div className={'container'}>
          <article className={'space-y-6'}>
            <h2 className={'title-3'}>Withdraw</h2>
            <p>
              Please select the tokens you want to withdraw and confirm your
              selection.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

WithdrawPage.Layout = 'SplitDetails';
export default WithdrawPage;
