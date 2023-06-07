import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useMount } from 'react-use';

import clsxm from '@/lib/utils/clsxm';

import { LinkPrimary, LinkSecondary } from '@/components/Link';

import Chain from '@/layouts/root/Header/Chain';
import Logo from '@/layouts/root/Header/Logo';
import User from '@/layouts/root/Header/User';

export default function Header() {
  const { scrollY } = useScroll();

  const [isReady, setIsReady] = useState(false);
  const [isTransparent, setTransparent] = useState(true);

  useMount(() => setIsReady(true));

  useMotionValueEvent(scrollY, 'change', (latest) => {
    isTransparent !== latest <= 0 && setTransparent(latest <= 0);
  });

  return (
    <>
      <div
        className={clsxm(
          'transition-color fixed left-0 top-0 z-20 flex h-16 w-full border-b duration-200',
          isTransparent
            ? 'border-transparent bg-transparent'
            : 'bg-default border-default bg-opacity-60 backdrop-blur-md dark:bg-opacity-20'
        )}
      >
        <div className={'flex flex-1 items-center space-x-12 px-6'}>
          <Logo />

          <ul
            className={'hidden text-base md:flex md:items-center md:space-x-12'}
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
      </div>
    </>
  );
}
