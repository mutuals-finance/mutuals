import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Heading,
  LayoutProps,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

export interface TabPageProps extends ContainerProps {
  title?: string;
  contentProps?: BoxProps;
}

export default function TabPage({
  children,
  title,
  contentProps,
  maxW = 'container.xl',
  ...props
}: TabPageProps) {
  return (
    <Container maxW={maxW} {...props}>
      <Box {...contentProps}>
        <Stack spacing='6'>
          {!!title ? (
            <>
              <Heading as='h2' size='2xl'>
                {title}
              </Heading>
              {children}
            </>
          ) : (
            children
          )}
        </Stack>
      </Box>
    </Container>
  );
}
