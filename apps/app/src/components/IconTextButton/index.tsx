"use client";

import {
  IconButton,
  IconButtonProps,
  Stack,
  Text,
  LinkButton,
  LinkButtonProps,
} from "@mutuals/ui";
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
} from "react";

export type IconTextButtonProps = IconButtonProps | LinkButtonProps;
const IconTextButton = forwardRef(function (
  { size = "lg", w = "16", rounded = "md", ...props }: IconTextButtonProps,
  ref,
) {
  const _props = { rounded, size, w, h: w, ...props };

  return (
    <Stack gap={"3"} alignItems={"center"} textAlign={"center"}>
      {"href" in _props ? (
        <LinkButton
          {..._props}
          ref={ref as MutableRefObject<HTMLAnchorElement>}
        />
      ) : (
        <IconButton
          {..._props}
          ref={ref as MutableRefObject<HTMLButtonElement>}
        />
      )}
      <Text fontWeight={"medium"}>{props["aria-label"]}</Text>
    </Stack>
  );
}) as ForwardRefExoticComponent<
  | (IconButtonProps & RefAttributes<HTMLButtonElement>)
  | (LinkButtonProps & RefAttributes<HTMLAnchorElement>)
>;

IconTextButton.displayName = "IconTextButton";
export default IconTextButton;
