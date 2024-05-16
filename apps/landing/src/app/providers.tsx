'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import ChakraProvider from '~/components/Chakra';
import 'keen-slider/keen-slider.min.css';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
