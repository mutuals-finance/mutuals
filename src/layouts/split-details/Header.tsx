import Image from 'next/image';
import React, { HTMLProps } from 'react';
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5';

import { ipfsResolveData, shortenAddress } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

import { ButtonOutline } from '@/components/Button';
import PageHeader from '@/components/PageHeader';
import { SplitImage } from '@/components/Split/Image';

interface HeaderProps extends HTMLProps<HTMLDivElement> {
  title: string;
  image?: string | null;
  address: string;
}

export function Header({
  title,
  image,
  address,
  className,
  children,
  ...props
}: HeaderProps) {
  const src = ipfsResolveData(image);

  return (
    <div className={clsxm('relative overflow-hidden', className)} {...props}>
      {src && (
        <div
          className={
            'absolute top-1/2 left-1/2 flex h-[calc(100%_+_4rem)] w-[calc(100%_+_4rem)] -translate-x-1/2 -translate-y-1/2 blur-2xl'
          }
        >
          <Image
            fill
            src={src}
            alt={title + ' Background'}
            className={'w-full flex-1 object-cover'}
          />
          <span
            className={
              'absolute top-0 left-0 block h-full w-full bg-gradient-to-tr from-white via-white/90 to-white/60 dark:from-black dark:via-black/80 dark:to-black/60'
            }
          />
        </div>
      )}
      <div className={'relative'}>
        <PageHeader
          title={title === '' ? 'Unknown' : title}
          titleBefore={
            src && <SplitImage src={src} alt={title} className={'w-16'} />
          }
          titleAfter={
            <div className={'flex items-center justify-center space-x-4'}>
              <ButtonOutline iconAfter={<IoCopyOutline />}>
                {shortenAddress(address)}
              </ButtonOutline>
              <ButtonOutline iconAfter={<IoShareOutline />}>
                Share
              </ButtonOutline>
            </div>
          }
        >
          {children}
        </PageHeader>
      </div>
    </div>
  );
}
