import React from 'react';
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5';

import { shortenAddress } from '@/lib/utils';

import { ButtonOutline } from '@/components/Button';
import PageHeader from '@/components/PageHeader';
import { SplitImage } from '@/components/Split/Image';

interface HeaderProps {
  title: string;
  image?: string | null;
  description: string;
  address: string;
}

export function Header({ title, image, description, address }: HeaderProps) {
  return (
    <div className={'relative'}>
      <div className={'relative space-y-3'}>
        <PageHeader
          title={title === '' ? 'Unknown' : title}
          titleBefore={
            image && (
              <SplitImage src={image} alt={title === '' ? 'Unknown' : title} />
            )
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
        />
        <div className={'container'}>
          <div className={'flex w-full max-w-lg space-x-3 p-3'}>
            <span
              className={
                'bg-border-default block w-px flex-shrink-0 self-stretch'
              }
            />
            <p className={'text-sm line-clamp-2'}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
