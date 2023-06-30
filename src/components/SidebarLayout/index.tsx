import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';

interface SidebarLayoutProps {
  title?: string;
  titleTag?: React.ElementType;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function SidebarLayout({
  title,
  titleTag = 'h2',
  children,
  body,
  footer,
}: React.PropsWithChildren<SidebarLayoutProps>) {
  return (
    <Grid templateColumns='repeat(7, 1fr)' gap={'24'}>
      <GridItem colSpan={2} position={'sticky'} top={'12'} left={'0'}>
        <Flex flexDirection={'column'} flex='1'>
          {title && (
            <Heading as={titleTag} size={'xl'} flexShrink={0}>
              {title}
            </Heading>
          )}
          {body && (
            <Flex flexDirection={'column'} flex='1' overflow={'auto'} py={'6'}>
              {body}
            </Flex>
          )}
          {footer && (
            <Box flexShrink={'0'} py={'6'}>
              {footer}
            </Box>
          )}
        </Flex>
      </GridItem>
      <GridItem colSpan={5} p={'6'}>
        {children}
      </GridItem>
    </Grid>
  );
}
