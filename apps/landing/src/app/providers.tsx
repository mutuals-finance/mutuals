"use client";

import { CacheProvider } from "@splitfi/ui";

import ChakraProvider from "@/components/Chakra";
import "keen-slider/keen-slider.min.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
