"use client";

import {
  ClientOnly,
  IconButton,
  Skeleton,
  Button,
  ButtonProps,
  IconButtonProps,
} from "@chakra-ui/react";
import { ThemeProvider, ThemeProviderProps, useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "./menu";

export function ColorModeProvider(props: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? light : dark;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? <LuSun /> : <LuMoon />;
}

export function ColorModeButton(props: IconButtonProps) {
  const { toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        size="sm"
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
}
export function ColorModeMenu(props: ButtonProps) {
  const { setColorMode, colorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button {...props}>
            <ColorModeIcon /> {colorMode === "dark" ? "Dark" : "Light"}
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuRadioItemGroup
            value={colorMode}
            onValueChange={(e) => setColorMode(e.value)}
          >
            <MenuRadioItem value="dark">Dark</MenuRadioItem>
            <MenuRadioItem value="light">Light</MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </ClientOnly>
  );
}
