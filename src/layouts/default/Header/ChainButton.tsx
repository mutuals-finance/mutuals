import Image, { ImageProps } from 'next/image';
import React from 'react';
import { IoChevronDown } from 'react-icons/io5';

import { ButtonLink } from '@/components/Button';

interface ChainButtonProps {
  src: ImageProps['src'];
  alt: ImageProps['alt'];
}
export default function ChainButton({ src, alt }: ChainButtonProps) {
  return (
    <ButtonLink
      size={'sm'}
      icon={<Image className={'h-4 w-4'} height={8} src={src} alt={alt} />}
      iconAfter={
        <IoChevronDown className='ease-out-expo duration-100 ui-open:rotate-180 ui-open:transform' />
      }
    >
      {alt}
    </ButtonLink>
  );
}
