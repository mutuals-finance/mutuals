import { IconButton, IconButtonProps, Stack, Text } from "@chakra-ui/react";
import { forwardRef } from "react";
import { Link, LinkProps } from "./link";

type IconTextButtonProps = IconButtonProps & LinkProps;

const IconTextButton = forwardRef<HTMLButtonElement, IconTextButtonProps>(
  function ({ href, size = "lg", w = "16", linkProps, ...props }, ref) {
    const _props = { size, w, h: w, ...props };

    return (
      <Stack gap={"3"} alignItems={"center"} textAlign={"center"}>
        {!href ? (
          <IconButton {...(_props as IconButtonProps)} ref={ref} />
        ) : (
          <Link href={href} linkProps={linkProps} asChild={true}>
            <IconButton {...(_props as IconButtonProps)} ref={ref} />
          </Link>
        )}
        <Text>{props["aria-label"]}</Text>
      </Stack>
    );
  },
);

IconTextButton.displayName = "IconTextButton";
export { IconTextButton, type IconTextButtonProps };
