import { useMDXComponents as getThemeComponents } from "nextra-theme-docs";
import type { UseMDXComponents } from "nextra/mdx-components";

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export const useMDXComponents: UseMDXComponents<typeof themeComponents> = <T,>(
  components?: T,
) => ({
  ...themeComponents,
  ...components,
});
