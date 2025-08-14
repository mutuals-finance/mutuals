"use client";

import { Button, ButtonProps, ClientOnly, Skeleton } from "@chakra-ui/react";
import {
  ColorModeIcon,
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
  useColorMode,
} from "../../components";

export type ColorModeMenuProps = ButtonProps;

export function ColorModeMenu(props: ColorModeMenuProps) {
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
            onValueChange={(e) => setColorMode(e.value as "dark" | "light")}
          >
            <MenuRadioItem value="dark">Dark</MenuRadioItem>
            <MenuRadioItem value="light">Light</MenuRadioItem>
          </MenuRadioItemGroup>
        </MenuContent>
      </MenuRoot>
    </ClientOnly>
  );
}
