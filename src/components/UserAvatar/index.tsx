import { Jazzicon } from '@ukstv/jazzicon-react';
import React, { HTMLAttributes } from 'react';

interface UserAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  address: string;
}

export default function UserAvatar({
  className,
  address,
  ...props
}: UserAvatarProps) {
  return (
    <span className={`flex h-6 w-6 rounded-full ${className}`} {...props}>
      <Jazzicon
        className={'flex flex-1 items-center justify-center'}
        address={address}
      />
    </span>
  );
}
