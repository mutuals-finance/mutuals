import { Box, Divider, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';

interface SidebarLayoutProps {
  title?: string;
  titleTag?: React.ElementType;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function SidebarLayout({
  children,
  body,
  footer,
}: React.PropsWithChildren<SidebarLayoutProps>) {
  return (
    <Grid templateColumns='repeat(4, 1fr)'>
      <GridItem colSpan={1} position={'sticky'} top={'12'} left={'0'}>
        <Flex flexDirection={'column'} flex='1'>
          {body && (
            <>
              <Flex
                flexDirection={'column'}
                flex='1'
                overflow={'auto'}
                py={'6'}
              >
                {body}
              </Flex>
            </>
          )}
          {footer && (
            <Box flexShrink={'0'} py={'6'}>
              {footer}
            </Box>
          )}
        </Flex>
      </GridItem>
      <GridItem colSpan={3} p={'6'} display={'flex'}>
        <Divider orientation='vertical' mx={'6'} pr={'6'} />
        <Box flex={'1'}>{children}</Box>
      </GridItem>
    </Grid>
  );
}
