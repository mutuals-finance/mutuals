/**
 * Client-side rendering of all chakra ui components.
 * Unnecessary hydration and needs to be removed in the long run.
 */
"use client";

/**
 * Unmodified Components
 * These components are exported directly from ChakraUI.
 */
export * from "@chakra-ui/react";

export {
  Image,
  type ImageProps,
  Link,
  type LinkProps,
  CacheProvider,
  type CacheProviderProps,
} from "@chakra-ui/next-js";

/**
 * Custom Components
 * These components are custom to @splitfi/ui and are not included in ChakraUI, although they may rely on ChakraUI components.
 */

export { UIProvider } from "./components/UIProvider";
export { SplitFiLogo } from "./components/SplitFiLogo";
