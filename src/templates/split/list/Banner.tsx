import Link from 'next/link';
import { IoCodeDownloadOutline, IoCreateOutline } from 'react-icons/io5';

import { ButtonPrimary, ButtonSecondary } from '@/components/Button';

export function SplitListBanner() {
  return (
    <section
      className={
        'sticky right-0 top-0 flex flex h-screen w-full flex-col overflow-hidden lg:col-span-3'
      }
    >
      <div className='container relative my-auto lg:px-12'>
        <div className={'mb-12 space-y-6'}>
          <h2 className={'title-1'}>Welcome to SplitFi</h2>
          <p>Your Platform for Trustless Multi-Party Payment Distribution.</p>
        </div>
        <div className={'grid grid-cols-2 gap-3 lg:gap-6'}>
          <div
            className={
              'border-default bg-default rounded-default space-y-6 border p-6'
            }
          >
            <IoCreateOutline className={'text-4xl text-carlo'} />
            <h3 className={'title-3'}>Create Split</h3>
            <p className={''}>
              Create a Split that can hold your tokens and automatically splits
              your funds.
            </p>
            <Link href={'/splits/new'} passHref legacyBehavior={true}>
              <ButtonPrimary
                size={'lg'}
                icon={<IoCreateOutline />}
                rounded={'base'}
              >
                Create New Split
              </ButtonPrimary>
            </Link>
          </div>
          <div
            className={
              'border-default bg-default rounded-default space-y-6 border p-6'
            }
          >
            <IoCodeDownloadOutline className={'text-4xl text-carlo'} />
            <h3 className={'title-3'}>Add existing Split</h3>
            <p className={''}>
              Already have a Split? Import your Split using the Split address.
            </p>
            <Link href={'/splits/new'} passHref legacyBehavior={true}>
              <ButtonSecondary
                size={'lg'}
                icon={<IoCodeDownloadOutline />}
                rounded={'base'}
              >
                Add existing Split
              </ButtonSecondary>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
