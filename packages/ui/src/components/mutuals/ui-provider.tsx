"use client";

import { ChakraProvider, type ChakraProviderProps } from "@chakra-ui/react";
import system from "../../theme";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

export interface UIProviderProps extends Omit<ChakraProviderProps, "value"> {
  themeProps?: Omit<ThemeProviderProps, "children">;
  value?: ChakraProviderProps["value"];
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
