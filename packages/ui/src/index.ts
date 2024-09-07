/**
 * Unmodified Components 1
 * These recipes are exported directly from ChakraUI.
 */
export * from "@chakra-ui/react";

/**
 * Unmodified Components 2
 * These recipes are exported directly from next-themes.
 */
export * from "next-themes";

/**
 * Custom Chakra Components
 */
export { CloseButton } from "./components/ui/close-button";
export {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";
export { Tag } from "./components/ui/tag";
export {
  MenuContent,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuTrigger,
} from "./components/ui/menu";
export {
  ColorModeProvider,
  useColorMode,
  useColorModeValue,
  ColorModeButton,
  ColorModeMenu,
} from "./components/ui/color-mode";
export {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "./components/ui/accordion";
export { Alert } from "./components/ui/alert";

/**
 * Custom Components
 * These recipes are custom to @mutuals/ui and are not included in ChakraUI, although they may rely on ChakraUI recipes.
 */

export { UIProvider } from "./components/UIProvider";
export { SplitFiLogo } from "./components/SplitFiLogo";
export { MotionBox } from "./components/MotionBox";
