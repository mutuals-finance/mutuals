import Image, { ImageProps } from 'next/image';
import { useMemo, useState } from 'react';
import { useNetwork } from 'wagmi';

import { ETH_TOKEN } from '@/lib/constants';
import { getDefaultTokenLogoURI } from '@/lib/utils';

type NativeTokenImage = Omit<ImageProps, 'src' | 'alt'>;

export default function NativeTokenImage(props: NativeTokenImage) {
  const { chain } = useNetwork();
  const [src, setSrc] = useState(ETH_TOKEN);

  useMemo(() => {
    const newSrc = getDefaultTokenLogoURI(chain?.id);
    if (newSrc !== src) {
      setSrc(newSrc);
    }
  }, [chain]);

  return <Image src={src} alt={'Native Token'} {...props} />;
}
