import { StaticImageData } from 'next/dist/client/image';
import Image from 'next/image';
import React from 'react';
import { IoImage } from 'react-icons/io5';

interface SplitImageInnerProps {
  alt?: string;
  src?: StaticImageData | string;
}

interface SplitImageProps extends SplitImageInnerProps {
  file?: File;
}

function ipfsUrlFromUri(uri: string) {
  return uri.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/');
}

function SplitImageInner({ src, alt }: SplitImageInnerProps) {
  return !!src ? (
    <Image
      className={'h-12 w-12 rounded-full object-cover'}
      src={src}
      alt={alt || 'Unknown Split'}
      width={48}
      height={48}
    />
  ) : (
    <IoImage className={'block text-neutral-900'} />
  );
}
export function SplitImage({ file, src, alt }: SplitImageProps) {
  const srcOrFile = !!file
    ? URL.createObjectURL(file)
    : typeof src === 'string'
    ? ipfsUrlFromUri(src)
    : src;

  return (
    <div
      className={
        'bg-default-2 relative flex h-12 w-12 flex-1 items-center justify-center rounded-full'
      }
    >
      <SplitImageInner src={srcOrFile} alt={alt} />
    </div>
  );
}
