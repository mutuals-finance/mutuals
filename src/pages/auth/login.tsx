import Image from 'next/image';
import React from 'react';

import bgImage from '@/assets/images/login-bg.png';
import { ConnectWalletTabs } from '@/templates/auth';

import { NextPageWithLayout } from '#/app';

const LoginPage: NextPageWithLayout = function () {
  return (
    <section className={'!py-0'}>
      <div className={'grid h-screen w-full grid-cols-3'}>
        <div className={'relative col-span-1 flex-1'}>
          <Image
            src={bgImage}
            width={400}
            objectFit={'cover'}
            alt={'Login to SplitFi'}
            className={'absolute top-0 left-0 h-full w-full object-cover'}
          />
        </div>

        <div className={'col-span-2'}>
          <div className={'container'}>
            <div className={'w-full max-w-2xl space-y-6 px-16 py-32'}>
              <h1 className={'title-2'}>Connect wallet</h1>
              <p
                className={
                  'text-xl text-neutral-700/50 dark:text-neutral-200/50'
                }
              >
                Choose how you want to connect. There are several wallet
                providers.
              </p>
              <ConnectWalletTabs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LoginPage.Layout = 'None';

export default LoginPage;
