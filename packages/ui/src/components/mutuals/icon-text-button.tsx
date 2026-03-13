"use client";

import {
  chakra,
  ConditionalValue,
  IconButton,
  type IconButtonProps,
  type StackProps,
  Text,
  type TextProps,
  VStack,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { Link, type LinkProps } from "./link";

type IconTextButtonProps = Omit<StackProps, "children" | "size"> &
  Pick<IconButtonProps, "aria-label" | "children" | "variant"> &
  Partial<
    Pick<LinkProps, "href" | "linkProps" | "external" | "target" | "rel">
  > & {
    size?: ConditionalValue<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
    buttonProps?: Omit<
      IconButtonProps,
      "aria-label" | "variant" | "children" | "size"
    >;
    textProps?: TextProps;
  };

const StyledContainer = chakra(VStack, {
  base: {
    textAlign: "center",
  },
  variants: {
    size: {
      xs: {
        gap: "1.5",
        "& .icon-btn": { boxSize: "6", minW: "6" },
        "& .label": { textStyle: "xs" },
      },
      sm: {
        gap: "2",
        "& .icon-btn": { boxSize: "8", minW: "8" },
        "& .label": { textStyle: "sm" },
      },
      md: {
        gap: "3",
        "& .icon-btn": { boxSize: "16", minW: "16" },
        "& .label": { textStyle: "md" },
      },
      lg: {
        gap: "3",
        "& .icon-btn": { boxSize: "4.5rem", minW: "4.5rem" },
        "& .label": { textStyle: "md" },
      },
      xl: {
        gap: "4",
        "& .icon-btn": { boxSize: "24", minW: "24" },
        "& .label": { textStyle: "lg" },
      },
      "2xl": {
        gap: "5",
        "& .icon-btn": { boxSize: "32", minW: "32" },
        "& .label": { textStyle: "xl" },
      },
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const IconTextButton = forwardRef<HTMLDivElement, IconTextButtonProps>(
  (props, ref) => {
    const {
      "aria-label": ariaLabel,
      children,
      variant,
      href,
      size,
      linkProps,
      buttonProps,
      textProps,
      external,
      target,
      rel,
      ...rootProps
    } = props;

    const sharedButtonProps: IconButtonProps = {
      className: "icon-btn",
      "aria-label": ariaLabel,
      variant,
      children,
      ...buttonProps,
    };

    return (
      <StyledContainer ref={ref} size={size} className="group" {...rootProps}>
        {href ? (
          <Link
            href={href}
            linkProps={linkProps}
            external={external}
            target={target}
            rel={rel}
            asChild
          >
            <IconButton {...sharedButtonProps} />
          </Link>
        ) : (
          <IconButton {...sharedButtonProps} />
        )}

        <Text className="label" {...textProps}>
          {ariaLabel}
        </Text>
      </StyledContainer>
    );
  },
);

IconTextButton.displayName = "IconTextButton";

export { IconTextButton, type IconTextButtonProps };
