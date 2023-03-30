import Image from 'next/image';
import React from 'react';
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5';

import { ipfsResolveData, shortenAddress } from '@/lib/utils';

import { ButtonOutline } from '@/components/Button';
import PageHeader from '@/components/PageHeader';
import { SplitImage } from '@/components/Split/Image';

import SplitDetailsLayoutMenu from '@/layouts/split-details/Header/Menu';

interface SplitDetailsLayoutHeaderProps {
  title: string;
  image?: string | null;
  address: string;
}

export default function SplitDetailsLayoutHeader({
  title,
  image,
  address,
}: SplitDetailsLayoutHeaderProps) {
  const src = ipfsResolveData(image);

  return (
    <PageHeader
      className={'relative overflow-hidden'}
      title={title === '' ? 'Unknown' : title}
      titleBefore={
        src && <SplitImage src={src} alt={title} className={'w-16'} />
      }
      titleAfter={
        <div className={'flex items-center justify-center space-x-3'}>
          <ButtonOutline iconAfter={<IoCopyOutline />}>
            {shortenAddress(address)}
          </ButtonOutline>
          <ButtonOutline iconAfter={<IoShareOutline />}>Share</ButtonOutline>
        </div>
      }
    >
      <div className={'container relative py-3'}>
        <div className={'text-lighter w-full max-w-lg line-clamp-2'}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className={'relative'}>
        <SplitDetailsLayoutMenu />
      </div>

      {src && (
        <div
          className={
            'absolute top-1/2 left-1/2 -z-10 flex h-[calc(100%_+_4rem)] w-[calc(100%_+_4rem)] -translate-x-1/2 -translate-y-1/2 blur-2xl'
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
    </PageHeader>
  );
}
