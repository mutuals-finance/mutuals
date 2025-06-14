"use client";

import { ChakraProvider, type ChakraProviderProps } from "@chakra-ui/react";
import defaultSystem from "../../theme";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

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
        disableTransitionOnChange={disableTransitionOnChange}
        defaultTheme={defaultTheme}
        enableSystem={enableSystem}
        {...themeProps}
      >
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
