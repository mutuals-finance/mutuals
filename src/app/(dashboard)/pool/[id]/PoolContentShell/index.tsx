import React, { PropsWithChildren, ReactNode } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import SectionContainer from '@/components/Shell/SectionContainer';

interface PoolContentShellProps {
  title?: ReactNode | string;
  description?: ReactNode | string;
}
export default function PoolContentShell({
  children,
  title,
  description,
}: PropsWithChildren<PoolContentShellProps>) {
  return (
    <>
      <Box as={'header'}>
        <Heading as={'h1'} size={'2xl'}>
          {title}
        </Heading>
        {!!description && (
          <Text my={'6'} size={'lg'} variant={'light'} maxW={'xl'}>
            {description}
          </Text>
        )}
      </Box>
      <Box mt={'6'}>{children}</Box>
    </>
  );
}
