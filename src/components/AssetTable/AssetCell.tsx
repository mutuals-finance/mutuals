import { Balance } from '@ankr.com/ankr.js/dist/types';
import { Image } from '@chakra-ui/next-js';
import { Box, Flex, HStack } from '@chakra-ui/react';
import { CellContext } from '@tanstack/react-table';
import React from 'react';
import { IoHelp } from 'react-icons/io5';

type AssetCellProps = CellContext<Balance, string | undefined>;

export default function AssetCell({ row }: AssetCellProps) {
  const { thumbnail, tokenName, tokenSymbol } = row.original;
  return (
    <HStack alignItems={'center'} spacing={'3'}>
      <Flex
        w={'8'}
        h={'8'}
        flexShrink={'0'}
        justifyContent={'center'}
        alignItems={'center'}
        borderWidth={'1px'}
        borderRadius={'md'}
        p={'1'}
      >
        {thumbnail !== '' ? (
          <Image
            src={thumbnail}
            alt={tokenName}
            width={48}
            height={48}
            w={'100%'}
            flex={'1'}
            objectFit={'contain'}
          />
        ) : (
          <span
            className={'flex w-full items-center justify-center self-stretch'}
          >
            <IoHelp className={'block'} />
          </span>
        )}
      </Flex>

      <Box>
        <Box>{tokenName !== '' ? tokenName : 'UNKNOWN'}</Box>
        <Box>{tokenSymbol !== '' ? tokenSymbol : ' '}</Box>
      </Box>
    </HStack>
  );
}
