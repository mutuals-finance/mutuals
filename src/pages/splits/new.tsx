import React from 'react';

import PageHeader from '@/components/PageHeader';
import Seo from '@/components/Seo';

import { NewSplitForm } from '@/templates/split/new';

import { NextPageWithLayout } from '#/app';

function CreateHeader() {
  return <PageHeader title={'New Split'} />;
}

const SplitNewPage: NextPageWithLayout = function () {
  return (
    <>
      <Seo />
      <CreateHeader />
      <section>
        <div className={'container'}>
          <NewSplitForm />
        </div>
      </section>
    </>
  );
};

export default SplitNewPage;
