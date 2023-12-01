import { Avatar, type AvatarProps } from '@chakra-ui/react';
import React from 'react';
import dynamic from 'next/dynamic'

const JazzIcon = dynamic(
  () => import('@ukstv/jazzicon-react').then((mod) => mod.Jazzicon),
  { ssr: false }
)

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
      name={address!}
      size={size!}
      {...props}
    />
  );
}
