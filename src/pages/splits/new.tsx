import React from 'react';

import PageHeader from '@/components/PageHeader';

import { CreateForm } from '@/templates/split/new';

import { NextPageWithLayout } from '#/app';

function CreateHeader() {
  return <PageHeader title={'New Split'} />;
}

const SplitNewPage: NextPageWithLayout = function () {
  return (
    <>
      <CreateHeader />
      <section>
        <div className={'container'}>
          <CreateForm />
        </div>
      </section>
    </>
  );
};

export default SplitNewPage;
