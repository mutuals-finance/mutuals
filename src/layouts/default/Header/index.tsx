import { useState } from 'react';
import { useMount } from 'react-use';

import Breadcrumbs from '@/layouts/default/Breadcrumbs';
import Chain from '@/layouts/default/Header/Chain';
import Logo from '@/layouts/default/Header/Logo';
import User from '@/layouts/default/Header/User';

export default function Header() {
  const [isReady, setIsReady] = useState(false);
  useMount(() => setIsReady(true));

  return (
    <>
      <div className={'h-14'} />
      <header className='bg-default-1 fixed top-0 left-0 right-0 z-10 flex h-14 w-full'>
        <div className={'flex flex-1 items-center space-x-6 px-6'}>
          <Logo />
          <Breadcrumbs />

          <nav className='flex flex-1 items-center justify-end'>
            <ul
              className={'hidden text-sm md:flex md:items-center md:space-x-8'}
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
