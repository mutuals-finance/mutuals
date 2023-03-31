import { useState } from 'react';
import { useMount } from 'react-use';

import { LinkPrimary, LinkSecondary } from '@/components/Link';

import Chain from '@/layouts/root/Header/Chain';
import Logo from '@/layouts/root/Header/Logo';
import User from '@/layouts/root/Header/User';

export default function Header() {
  const [isReady, setIsReady] = useState(false);
  useMount(() => setIsReady(true));

  return (
    <>
      <header className='bg-default sticky left-0 top-0 z-20 flex h-16 w-full'>
        <div className={'flex flex-1 items-center space-x-12 px-6'}>
          <Logo />

          <ul
            className={'hidden text-sm md:flex md:items-center md:space-x-12'}
          >
            <li>
              <LinkPrimary href={'/splits'}>Splits</LinkPrimary>
            </li>
            <li>
              <LinkSecondary href={'/address-book'}>Address Book</LinkSecondary>
            </li>
          </ul>

          <nav className='flex flex-1 items-center justify-end space-x-12'>
            <ul
              className={'hidden text-sm md:flex md:items-center md:space-x-6'}
            >
              <li>{isReady && <Chain />}</li>
              <li>{isReady && <User />}</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
