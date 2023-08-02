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
  ...props
}: React.PropsWithChildren<BoxProps>) {
  const headerBg = useColorModeValue('gray.100', 'gray.900');
  return (
    <Card as={'article'} variant={variant} {...props}>
      {(!!title || !!titleAfter) && (
        <CardHeader bg={headerBg}>
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
