import {
  Card,
  CardBody,
  CardBodyProps,
  CardHeader,
  type CardProps,
  Heading,
  useColorModeValue,
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
  rounded = 'md',
  ...props
}: React.PropsWithChildren<BoxProps>) {
  return (
    <Card
      as={'article'}
      variant={variant}
      rounded={rounded}
      overflow={'hidden'}
      {...props}
    >
      {(!!title || !!titleAfter) && (
        <CardHeader bg={'bg.3'}>
          {!!title && (
            <Heading as='h2' size='md' fontWeight={'600'}>
              {title}
            </Heading>
          )}
          {titleAfter}
        </CardHeader>
      )}

      <CardBody bg={'bg.2'} {...bodyProps}>
        {children}
      </CardBody>
    </Card>
  );
}
