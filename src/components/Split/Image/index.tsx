import { StaticImageData } from 'next/dist/client/image';
import Image, { type ImageProps } from 'next/image';
import React, { HTMLProps } from 'react';
import { IoImage } from 'react-icons/io5';

import { ipfsResolveData, ipfsUrlFromUri } from '@/lib/utils';
import clsxm from '@/lib/utils/clsxm';

type SplitImageInnerProps = Omit<ImageProps, 'src'> & {
  src?: StaticImageData | string;
};

type SplitImageProps = HTMLProps<HTMLDivElement> & SplitImageInnerProps;

function SplitImageInner({
  src,
  alt = 'Unknown Split',
  width = 128,
  height = 128,
  className,
  ...props
}: SplitImageInnerProps) {
  const classes = clsxm('block w-full object-cover', className);

  return !!src ? (
    <Image
      className={classes}
      src={src}
      alt={alt || 'Unknown Split'}
      width={width}
      height={height}
      {...props}
    />
  ) : (
    <IoImage className={classes} />
  );
}
export function SplitImage({ src, className, ...props }: SplitImageProps) {
  return (
    <div
      className={clsxm(
        'bg-default-2 rounded-default border-default relative flex w-10 border ',
        className
      )}
    >
      <span className={'block aspect-square w-full'} />
      <span className={'absolute left-0 top-0 block flex h-full w-full'}>
        <SplitImageInner
          src={ipfsResolveData(src)}
          className={'rounded-default flex-1 overflow-hidden'}
          {...props}
        />
      </span>
    </div>
  );
}
