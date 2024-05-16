import { CacheProvider, type CacheProviderProps } from "@chakra-ui/next-js";
import { ChakraProvider, type ChakraProviderProps } from "@chakra-ui/react";
import defaultTheme from "../../theme";

export interface UIProviderProps extends ChakraProviderProps {
  cacheProps?: CacheProviderProps;
}

export function UIProvider({
  children,
  theme = defaultTheme,
  cacheProps,
  ...props
}: UIProviderProps) {
  return (
    <CacheProvider {...cacheProps}>
      <ChakraProvider theme={theme} {...props}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
