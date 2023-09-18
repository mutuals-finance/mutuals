import { Icon } from '@chakra-ui/icon';
import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import React from 'react';
import { IoHelp } from 'react-icons/io5';

interface TokenImageProps extends FlexProps {
  src?: ImageProps['src'];
  alt?: string;
}
export default function TokenImage({ src, alt, ...props }: TokenImageProps) {
  return (
    <Flex
      p={'1'}
      borderWidth={'1px'}
      borderRadius={'md'}
      w={'8'}
      h={'8'}
      bg={'bg.3'}
      {...props}
    >
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        flex={'1'}
        position={'relative'}
      >
        {!!src && src !== '' ? (
          <Image
            src={src}
            alt={alt || 'Unknown Token'}
            fill={true}
            objectFit={'contain'}
          />
        ) : (
          <Icon as={IoHelp} />
        )}
      </Flex>
    </Flex>
  );
}
