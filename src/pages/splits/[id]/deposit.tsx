import Image from 'next/image';
import React from 'react';
import { IoCopy, IoWarning } from 'react-icons/all';
import { IoCopyOutline } from 'react-icons/io5';

import Chip from '@/components/Chip';
import Seo from '@/components/Seo';

import qrCode from '@/assets/images/qrcode.png';

import { NextPageWithLayout } from '#/app';
const DepositPage: NextPageWithLayout = function DepositPage() {
  return (
    <>
      <Seo />
      <section>
        <div className={'container'}>
          <article className={'w-full max-w-2xl space-y-6'}>
            <h2 className={'title-3'}>Deposit tokens</h2>
            <div
              className={
                'rounded-default bg-default relative inline-flex overflow-hidden border border-orange-400'
              }
            >
              <span className={'block w-2 bg-orange-400'} />
              <span
                className={'block self-center pl-3 text-2xl text-orange-400'}
              >
                <IoWarning />
              </span>
              <div className={'p-3 text-sm'}>
                <p>
                  Only ETH and ERC-20 tokens can be deposited. Do not send NFTs
                  to a Split.
                </p>
              </div>
            </div>

            <p>
              Use the address below to receive funds on the Ethereum network:
            </p>
            <div
              className={
                'border-default bg-default-2 rounded-default inline-flex flex-col space-y-6 border p-6 text-center'
              }
            >
              <div
                className={
                  'bg-default rounded-default mx-auto w-full p-6 lg:w-64 '
                }
              >
                <Image
                  src={qrCode}
                  alt={'qr sample'}
                  width={128}
                  height={128}
                  className={'w-full'}
                />
              </div>

              <span
                className={
                  'block whitespace-nowrap text-xs font-medium slashed-zero'
                }
              >
                <Chip
                  color={'link-2'}
                  size={'sm'}
                  className={'slashed-zero'}
                  iconAfter={<IoCopyOutline />}
                >
                  0x8bc7ccfac818a5f5ed0c7b327024b8075e4f1407
                </Chip>
              </span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

DepositPage.Layout = 'SplitDetails';
export default DepositPage;
