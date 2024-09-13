"use client";

import { IconButton, IconButtonProps, Stack, Text } from "@mutuals/ui";
import React, { forwardRef } from "react";

type IconTextButtonProps = IconButtonProps;

const IconTextButton = forwardRef<HTMLButtonElement, IconTextButtonProps>(
  function (
    { children, size = "lg", w = "16", rounded = "md", ...props },
    ref,
  ) {
    return (
      <Stack gap={"3"} alignItems={"center"} textAlign={"center"}>
        <IconButton rounded={rounded} size={size} w={w} {...props} ref={ref} />

        <Text fontWeight={"400"}>{children || props["aria-label"]}</Text>
      </Stack>
    );
  },
);

IconTextButton.displayName = "IconTextButton";
export default IconTextButton;
