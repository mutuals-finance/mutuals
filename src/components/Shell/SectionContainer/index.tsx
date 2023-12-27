import { Box, BoxProps, Container, ContainerProps } from '@chakra-ui/react';
import { As } from '@chakra-ui/system/dist/system.types';

export interface SectionContainerProps extends Omit<BoxProps, 'as'> {
  as?: 'section' | 'header' | 'footer' | 'article';
  containerProps?: ContainerProps;
}

export default function SectionContainer({
  children,
  as = 'section',
  containerProps,
  ...props
}: SectionContainerProps) {
  return (
    <Box as={as} my={'12'} {...props}>
      <Container maxW={'container.lg'} {...containerProps}>
        {children}
      </Container>
    </Box>
  );
}
