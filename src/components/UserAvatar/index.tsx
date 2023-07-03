import { Avatar, type AvatarProps } from '@chakra-ui/react';
import { Jazzicon as JazzIcon } from '@ukstv/jazzicon-react';
import React from 'react';

interface UserAvatarProps extends AvatarProps {
  address?: string;
}

export default function UserAvatar({
  address = '',
  size = 'xs',
  ...props
}: UserAvatarProps) {
  return (
    <Avatar
      as={JazzIcon}
      address={address}
      name={address}
      size={size}
      {...props}
    />
  );
}
