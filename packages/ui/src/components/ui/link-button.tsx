"use client";

import type { HTMLChakraProps, RecipeProps } from "@chakra-ui/react";
import { chakra, useRecipe } from "@chakra-ui/react";
import { forwardRef } from "react";
import NextLink from "next/link";

export interface LinkButtonProps
  extends HTMLChakraProps<typeof NextLink, RecipeProps<"button">> {}

// Replace with your framework's link component
const StyledLink = chakra(NextLink);

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function LinkButton(props, ref) {
    const recipe = useRecipe({ key: "button", recipe: props.recipe });
    const [variantProps, restProps] = recipe.splitVariantProps(props);
    const styles = recipe(variantProps);
    return <StyledLink ref={ref} {...restProps} css={[styles, props.css]} />;
  },
);
