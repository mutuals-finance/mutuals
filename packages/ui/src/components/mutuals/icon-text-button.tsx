import { IconButton, IconButtonProps, Stack, Text } from "@chakra-ui/react";
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { LinkButton, LinkButtonProps } from "../ui/link-button";

type IconTextButtonProps = IconButtonProps | LinkButtonProps;

const IconTextButton = forwardRef(function (
  { size = "lg", w = "16", ...props }: IconTextButtonProps,
  ref,
) {
  const _props = { size, w, h: w, ...props };

  return (
    <Stack gap={"3"} alignItems={"center"} textAlign={"center"}>
      {"href" in _props ? (
        <LinkButton {..._props} ref={ref} />
      ) : (
        <IconButton {...(_props as IconButtonProps)} ref={ref} />
      )}
      <Text>{props["aria-label"]}</Text>
    </Stack>
  );
}) as ForwardRefExoticComponent<
  | (IconButtonProps & RefAttributes<HTMLButtonElement>)
  | (LinkButtonProps & RefAttributes<HTMLAnchorElement>)
>;

IconTextButton.displayName = "IconTextButton";
export { IconTextButton, type IconTextButtonProps };
