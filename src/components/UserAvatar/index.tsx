import { Jazzicon } from '@ukstv/jazzicon-react';
import React, { HTMLAttributes } from 'react';

import clsxm from '@/lib/utils/clsxm';

interface UserAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  address: string;
}

export default function UserAvatar({
  className,
  address,
  ...props
}: UserAvatarProps) {
  return (
    <span className={clsxm(`flex h-6 w-6 rounded-full`, className)} {...props}>
      <Jazzicon
        className={'flex flex-1 items-center justify-center'}
        address={address}
      />
    </span>
  );
}
