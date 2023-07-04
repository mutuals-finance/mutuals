import {
  Card,
  CardBody,
  CardBodyProps,
  CardHeader,
  type CardProps,
  Heading,
} from '@chakra-ui/react';
import React from 'react';

interface BoxProps extends Omit<CardProps, 'title'> {
  title?: string;
  titleAfter?: React.ReactNode;
  bodyProps?: CardBodyProps;
}

export default function ContentCard({
  title,
  titleAfter,
  children,
  variant = 'outline',
  bodyProps,
  ...props
}: React.PropsWithChildren<BoxProps>) {
  return (
    <Card as={'article'} variant={variant} {...props}>
      {(!!title || !!titleAfter) && (
        <CardHeader bg={'gray.100'}>
          {!!title && (
            <Heading as='h2' size='md' fontWeight={'500'}>
              {title}
            </Heading>
          )}
          {titleAfter}
        </CardHeader>
      )}

      <CardBody {...bodyProps}>{children}</CardBody>
    </Card>
  );
}
