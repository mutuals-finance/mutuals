import React, { ReactNode } from 'react';
import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  VStack,
} from '@chakra-ui/react';
import Breadcrumbs, { type BreadcrumbsProps } from '@/components/Breadcrumbs';

export interface PageShellProps extends Omit<BoxProps, 'title'> {
  breadcrumbsProps?: BreadcrumbsProps;
  headingProps?: HeadingProps;
  descriptionProps?: TextProps;
  headerContainerProps?: ContainerProps;
  title?: string | ReactNode;
  description?: string | ReactNode;
  breadcrumbsEnabled?: boolean;
}
export default function PageShell({
  breadcrumbsProps,
  headerContainerProps,
  headingProps,
  descriptionProps,
  breadcrumbsEnabled = true,
  children,
  title,
  description,
  ...props
}: PageShellProps) {
  return (
    <Box {...props}>
      {(breadcrumbsEnabled || !!title || !!description) && (
        <Container as={'header'} variant={'shell'} {...headerContainerProps}>
          <VStack gap={'12'} mb={'6'} alignItems={'flex-start'}>
            {breadcrumbsEnabled && <Breadcrumbs {...breadcrumbsProps} />}

            {!!title && (
              <Heading as={'h1'} size={'2xl'} {...headingProps}>
                {title}
              </Heading>
            )}
            {!!description && (
              <Text
                size={'lg'}
                variant={'light'}
                maxW={'xl'}
                {...descriptionProps}
              >
                {description}
              </Text>
            )}
          </VStack>
        </Container>
      )}

      {children}
    </Box>
  );
}