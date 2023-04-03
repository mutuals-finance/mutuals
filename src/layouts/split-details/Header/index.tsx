import Image from 'next/image';
import React from 'react';
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5';

import { ipfsResolveData, shortenAddress } from '@/lib/utils';

import { ButtonOutline } from '@/components/Button';
import PageHeader from '@/components/PageHeader';
import { SplitImage } from '@/components/Split/Image';

import { useSplit } from '@/context/SplitContext';
import Menu from '@/layouts/split-details/Header/Menu';

interface SplitDetailsLayoutHeaderProps {
  image: string;
  name: string;
  description?: string | null;
  id: string;
}

export default function Header() {
  const { split } = useSplit();
  const image = ipfsResolveData(split.metaData.image);
  const name = split.metaData.name || '';

  return (
    <PageHeader
      className={'relative overflow-hidden'}
      title={name}
      titleBefore={<SplitImage src={image} alt={name} className={'w-16'} />}
      titleAfter={
        <div className={'flex items-center justify-center space-x-3'}>
          <ButtonOutline iconAfter={<IoCopyOutline />}>
            {shortenAddress(split.address)}
          </ButtonOutline>
          <ButtonOutline iconAfter={<IoShareOutline />}>Share</ButtonOutline>
        </div>
      }
    >
      <div className={'container relative py-3'}>
        {!!split.metaData.description && (
          <div className={'text-light line-clamp-2 w-full max-w-lg'}>
            <p>{split.metaData.description}</p>
          </div>
        )}
      </div>

      <div className={'relative'}>
        <Menu id={split.id} />
      </div>

      <div
        className={
          'absolute left-1/2 top-1/2 -z-10 flex h-[calc(100%_+_4rem)] w-[calc(100%_+_4rem)] -translate-x-1/2 -translate-y-1/2 blur-2xl'
        }
      >
        {!!image && (
          <Image
            fill
            src={image}
            alt={name + ' Background'}
            className={'w-full flex-1 object-cover'}
          />
        )}
        <span
          className={
            'absolute left-0 top-0 block h-full w-full bg-gradient-to-tr from-white via-white/90 to-white/60 dark:from-black dark:via-black/80 dark:to-black/60'
          }
        />
      </div>
    </PageHeader>
  );
}
