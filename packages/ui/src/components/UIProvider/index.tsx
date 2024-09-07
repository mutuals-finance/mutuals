"use client";

import { ChakraProvider, type ChakraProviderProps } from "@chakra-ui/react";
import system from "../../theme";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface UIProviderProps extends ChakraProviderProps {
  themeProps?: Omit<ThemeProviderProps, "children">;
}

export function UIProvider({
  children,
  value = system,
  themeProps: {
    attribute = "class",
    disableTransitionOnChange = true,
    ...themeProps
  } = {},
  ...props
}: UIProviderProps) {
  return (
    <ChakraProvider value={value} {...props}>
      <ThemeProvider
        attribute={attribute}
        disableTransitionOnChange={disableTransitionOnChange}
        {...themeProps}
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
