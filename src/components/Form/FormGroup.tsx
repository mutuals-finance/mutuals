import {
  Box,
  BoxProps,
  FormControl,
  FormControlProps,
  FormHelperText,
  FormLabel,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import clsxm from '@/lib/utils/clsxm';

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
      <VStack spacing={'6'}>
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
