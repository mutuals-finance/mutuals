import Image from 'next/image';
import React from 'react';
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5';

import { shortenAddress } from '@/lib/utils';

import { ButtonOutline } from '@/components/Button';
import PageHeader from '@/components/PageHeader';
import { SplitImage } from '@/components/Split/Image';

import Menu from '@/layouts/split-details/Header/Menu';

interface SplitDetailsLayoutHeaderProps {
  image: string;
  name: string;
  description?: string | null;
  id: string;
}

export default function Header({
  name,
  image,
  description,
  id,
}: SplitDetailsLayoutHeaderProps) {
  return (
    <PageHeader
      className={'relative overflow-hidden'}
      title={name}
      titleBefore={<SplitImage src={image} alt={name} className={'w-16'} />}
      titleAfter={
        <div className={'flex items-center justify-center space-x-3'}>
          <ButtonOutline iconAfter={<IoCopyOutline />}>
            {shortenAddress(id)}
          </ButtonOutline>
          <ButtonOutline iconAfter={<IoShareOutline />}>Share</ButtonOutline>
        </div>
      }
    >
      <div className={'container relative py-3'}>
        {!!description && (
          <div className={'text-lighter line-clamp-2 w-full max-w-lg'}>
            <p>{description}</p>
          </div>
        )}
      </div>

      <div className={'relative'}>
        <Menu id={id} />
      </div>

      <div
        className={
          'absolute left-1/2 top-1/2 -z-10 flex h-[calc(100%_+_4rem)] w-[calc(100%_+_4rem)] -translate-x-1/2 -translate-y-1/2 blur-2xl'
        }
      >
        <Image
          fill
          src={image}
          alt={name + ' Background'}
          className={'w-full flex-1 object-cover'}
        />
        <span
          className={
            'absolute left-0 top-0 block h-full w-full bg-gradient-to-tr from-white via-white/90 to-white/60 dark:from-black dark:via-black/80 dark:to-black/60'
          }
        />
      </div>
    </PageHeader>
  );
}
