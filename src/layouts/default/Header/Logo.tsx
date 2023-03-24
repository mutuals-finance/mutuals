import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoIcon from '@/assets/images/splitFi-logo.png';

export default function Logo() {
  return (
    <Link href='/' className='flex items-center space-x-2'>
      <Image src={logoIcon} alt='SplitFi' className={'block w-8'} />
      <span className={'block text-xl font-bold'}>SplitFi</span>
    </Link>
  );
}
