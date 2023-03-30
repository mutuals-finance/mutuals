import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logoIcon from '@/assets/images/splitFi-logo.png';

export default function Logo() {
  return (
    <Link href='/' className='flex items-center space-x-3'>
      <span className={'block text-2xl font-medium'}>SplitFi</span>
      <Image src={logoIcon} alt='SplitFi' className={'block w-6'} />
    </Link>
  );
}
