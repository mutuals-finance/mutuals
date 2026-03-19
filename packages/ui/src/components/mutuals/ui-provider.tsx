"use client";

import { ChakraProvider, type ChakraProviderProps } from "@chakra-ui/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import defaultSystem from "../../theme";

export interface UIProviderProps extends Omit<ChakraProviderProps, "value"> {
  themeProps?: Omit<ThemeProviderProps, "children">;
  value?: ChakraProviderProps["value"];
}

export function UIProvider({
  children,
  value = defaultSystem,
  themeProps: {
    attribute = "class",
    disableTransitionOnChange = true,
    defaultTheme = "system",
    enableSystem = true,
    ...themeProps
  } = {},
  ...props
}: UIProviderProps) {
  return (
    <ChakraProvider value={value} {...props}>
      <ThemeProvider
        attribute={attribute}
        defaultTheme={defaultTheme}
        disableTransitionOnChange={disableTransitionOnChange}
        enableSystem={enableSystem}
        {...themeProps}
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
