'use client';

import { IconButton, useDisclosure } from '@chakra-ui/react';
import { IoMenuSharp } from 'react-icons/io5';

export default function MobileMenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <IconButton
      icon={<IoMenuSharp display={'block'} />}
      fontSize={'2xl'}
      aria-label={'Open Menu'}
      onClick={isOpen ? onClose : onOpen}
      variant={'ghost'}
    />
  );
}
