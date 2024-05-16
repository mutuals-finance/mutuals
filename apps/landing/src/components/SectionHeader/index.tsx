import type { BoxProps } from '@chakra-ui/react';
import { Box, Heading } from '@chakra-ui/react';

export default function SectionHeader({ children, ...props }: BoxProps) {
  return (
    <Box maxW="xl" mx="auto" mb="12" {...props}>
      <Heading size="3xl" textAlign={{ lg: 'center' }} lineHeight="1.2">
        {children}
      </Heading>
    </Box>
  );
}
