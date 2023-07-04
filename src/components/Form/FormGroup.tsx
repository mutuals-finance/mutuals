import { Box, BoxProps, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface FormGroupProps extends BoxProps {
  title?: string;
  description?: React.ReactNode | string;
}

export default function FormGroup({
  title,
  description,
  children,
  ...props
}: React.PropsWithChildren<FormGroupProps>) {
  return (
    <Box {...props}>
      <VStack spacing={'6'} alignItems={'start'}>
        {!!title && (
          <Heading as={'h3'} size={'sm'}>
            {title}
          </Heading>
        )}
        {!!description &&
          (React.isValidElement(description) ? (
            description
          ) : (
            <Text>{description}</Text>
          ))}
        {children}
      </VStack>
    </Box>
  );
}
